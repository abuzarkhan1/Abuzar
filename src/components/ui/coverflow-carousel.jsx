import * as React from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

const useIsoLayoutEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;

export function CoverflowCarousel({
  slides = [],
  rotate = 30,
  depth = 0.4,
  perspective = 3.2,
  falloff = 0.56,
  fade = 0.18,
  cardWidth = "clamp(320px, 62vw, 880px)",
  gap = 0.05,
  loop = true,
  showCaption = false,
  showPagination = true,
  showNavigation = true,
  label = "Cover carousel",
  className,
  cardClassName,
}) {
  const count = slides.length;

  const frameRef = React.useRef(null);
  const cardRefs = React.useRef([]);
  const posRef = React.useRef(0);
  const targetRef = React.useRef(0);
  const widthRef = React.useRef(0);
  const rafRef = React.useRef(null);
  const dragRef = React.useRef(null);
  const hasDraggedRef = React.useRef(false);

  const [selected, setSelected] = React.useState(0);
  const [fullscreenIndex, setFullscreenIndex] = React.useState(null);

  const isFullscreen = fullscreenIndex !== null;

  const indexAt = React.useCallback(
    (pos) => {
      if (count === 0) return 0;
      return ((Math.round(pos) % count) + count) % count;
    },
    [count]
  );

  const paint = React.useCallback(() => {
    const width = widthRef.current;
    if (!width || count === 0) return;
    const pitch = width * (1 + gap);
    const pos = posRef.current;

    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      let offset = index - pos;
      if (loop) {
        offset = ((offset % count) + count) % count;
        if (offset > count / 2) offset -= count;
      }

      const distance = Math.abs(offset);
      const ramp = Math.pow(distance, falloff);
      const tilt = Math.min(rotate * ramp, 82) * Math.sign(offset);

      card.style.transform =
        `translateX(calc(-50% + ${offset * pitch}px)) ` +
        `translateZ(${-depth * width * ramp}px) rotateY(${-tilt}deg)`;

      const edge = loop ? Math.min(1, Math.max(0, count / 2 - distance)) : 1;
      card.style.opacity = String(Math.max(0, 1 - fade * distance) * edge);
      card.style.zIndex = String(100 - Math.round(distance));
    });
  }, [count, depth, fade, falloff, gap, loop, rotate]);

  const settle = React.useCallback(
    (target) => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      targetRef.current = target;
      setSelected(indexAt(target));

      const step = () => {
        const remaining = target - posRef.current;
        if (Math.abs(remaining) < 0.0004) {
          posRef.current = target;
          paint();
          rafRef.current = null;
          return;
        }
        posRef.current += remaining * 0.22;
        paint();
        rafRef.current = requestAnimationFrame(step);
      };
      rafRef.current = requestAnimationFrame(step);
    },
    [indexAt, paint]
  );

  const clamp = React.useCallback(
    (pos) => {
      if (count === 0) return 0;
      return loop ? pos : Math.max(0, Math.min(count - 1, pos));
    },
    [count, loop]
  );

  const goTo = React.useCallback(
    (index) => {
      if (count === 0) return;
      const target = loop
        ? index + Math.round((targetRef.current - index) / count) * count
        : index;
      settle(clamp(target));
    },
    [clamp, count, loop, settle]
  );

  const nudge = React.useCallback(
    (by) => settle(clamp(Math.round(targetRef.current) + by)),
    [clamp, settle]
  );

  const onPointerDown = (event) => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    hasDraggedRef.current = false;
    event.currentTarget.setPointerCapture(event.pointerId);
    targetRef.current = posRef.current;
    dragRef.current = {
      id: event.pointerId,
      startX: event.clientX,
      x: event.clientX,
      pos: posRef.current,
      v: 0,
      t: performance.now(),
    };
  };

  const onPointerMove = (event) => {
    const drag = dragRef.current;
    if (!drag || drag.id !== event.pointerId) return;

    if (Math.abs(event.clientX - drag.startX) > 6) {
      hasDraggedRef.current = true;
    }

    const pitch = widthRef.current * (1 + gap);
    if (!pitch) return;

    const now = performance.now();
    const previous = posRef.current;
    posRef.current = clamp(drag.pos - (event.clientX - drag.x) / pitch);
    drag.v = ((posRef.current - previous) / Math.max(now - drag.t, 1)) * 1000;
    drag.t = now;

    const index = indexAt(posRef.current);
    if (index !== selected) setSelected(index);
    paint();
  };

  const endDrag = (event) => {
    const drag = dragRef.current;
    if (!drag || drag.id !== event.pointerId) return;
    dragRef.current = null;
    const carried = Math.max(-2, Math.min(2, drag.v * 0.18));
    settle(clamp(Math.round(posRef.current + carried)));
  };

  // Direct click to open in fullscreen
  const handleCardClick = (index) => {
    if (hasDraggedRef.current) return;
    setFullscreenIndex(index);
    setSelected(index);
  };

  // Lock body scroll and handle keyboard in fullscreen
  React.useEffect(() => {
    if (!isFullscreen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setFullscreenIndex(null);
      } else if (e.key === "ArrowLeft") {
        setFullscreenIndex((prev) => (prev > 0 ? prev - 1 : count - 1));
      } else if (e.key === "ArrowRight") {
        setFullscreenIndex((prev) => (prev < count - 1 ? prev + 1 : 0));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isFullscreen, count]);

  useIsoLayoutEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    const measure = () => {
      const card = cardRefs.current[0];
      if (!card) return;
      widthRef.current = card.offsetWidth;
      paint();
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(frame);
    return () => observer.disconnect();
  }, [paint]);

  React.useEffect(
    () => () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    },
    []
  );

  if (count === 0) return null;

  const activeFullscreen = isFullscreen ? slides[fullscreenIndex] : null;

  return (
    <div
      className={cn("w-full select-none relative", className)}
      style={{ ["--cf-card"]: cardWidth }}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
    >
      <div className="relative">
        <div
          ref={frameRef}
          tabIndex={0}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              nudge(-1);
            } else if (event.key === "ArrowRight") {
              event.preventDefault();
              nudge(1);
            }
          }}
          className="cursor-grab overflow-hidden py-10 md:py-16 outline-none ring-0 active:cursor-grabbing"
          style={{
            perspective: `calc(var(--cf-card) * ${perspective})`,
            touchAction: "pan-y",
          }}
        >
          <div
            className="relative select-none"
            style={{
              height: "calc(var(--cf-card) * 0.58)",
              transformStyle: "preserve-3d",
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                ref={(node) => {
                  cardRefs.current[index] = node;
                }}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${count}`}
                onClick={() => handleCardClick(index)}
                className={cn(
                  "absolute left-1/2 top-0 aspect-[16/10] overflow-hidden rounded-2xl bg-[#181818] border border-[#333333] shadow-[0_25px_60px_rgba(0,0,0,0.85)] will-change-transform cursor-pointer transition-colors duration-200",
                  index === selected
                    ? "border-[#EFB946] shadow-[#EFB946]/10"
                    : "hover:border-[#666666]",
                  cardClassName
                )}
                style={{ width: "var(--cf-card)" }}
              >
                <img
                  src={slide.src}
                  alt={slide.alt || `Slide ${index + 1}`}
                  draggable={false}
                  className="h-full w-full select-none object-cover pointer-events-none"
                />
              </div>
            ))}
          </div>
        </div>

        {/* NAVIGATION ARROW BUTTONS ON CAROUSEL */}
        {showNavigation && count > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous slide"
              onClick={(e) => {
                e.stopPropagation();
                nudge(-1);
              }}
              className="absolute left-1 sm:left-3 md:left-6 top-1/2 z-[250] -translate-y-1/2 rounded-full bg-[#181818]/90 border border-[#3a3a3a] p-3.5 md:p-4 text-[#EFB946] hover:text-white backdrop-blur-md transition-all hover:bg-[#252525] hover:scale-110 hover:border-[#EFB946] shadow-2xl cursor-pointer active:scale-95"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={(e) => {
                e.stopPropagation();
                nudge(1);
              }}
              className="absolute right-1 sm:right-3 md:right-6 top-1/2 z-[250] -translate-y-1/2 rounded-full bg-[#181818]/90 border border-[#3a3a3a] p-3.5 md:p-4 text-[#EFB946] hover:text-white backdrop-blur-md transition-all hover:bg-[#252525] hover:scale-110 hover:border-[#EFB946] shadow-2xl cursor-pointer active:scale-95"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}
      </div>

      {/* PAGINATION DOTS */}
      {showPagination && count > 1 && (
        <div className="mt-6 flex items-center justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === selected}
              onClick={() => goTo(index)}
              className={cn(
                "h-2.5 rounded-full transition-all duration-300 cursor-pointer",
                index === selected
                  ? "w-10 bg-[#EFB946]"
                  : "w-2.5 bg-[#3a3a3a] hover:bg-[#666666]"
              )}
            />
          ))}
        </div>
      )}

      {/* FULLSCREEN LIGHTBOX MODAL (PORTALED TO BODY) */}
      {isFullscreen &&
        activeFullscreen &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 z-[999999] bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 md:p-6"
            onClick={() => setFullscreenIndex(null)}
          >
            {/* TOP HEADER */}
            <div
              className="flex items-center justify-between w-full max-w-7xl mx-auto z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-[#1c1c1c] border border-[#333333] px-4 py-1.5 rounded-full text-sm text-[#EFB946] font-medium tracking-wide">
                {fullscreenIndex + 1} / {count}
              </div>

              <button
                type="button"
                onClick={() => setFullscreenIndex(null)}
                className="bg-[#1c1c1c] hover:bg-[#2c2c2c] border border-[#333333] hover:border-red-500 text-white p-2.5 rounded-full transition-colors cursor-pointer shadow-lg active:scale-95"
                aria-label="Close fullscreen view"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* MAIN IMAGE WITH INSTANT SWITCHING */}
            <div
              className="relative flex-1 flex items-center justify-center p-2 md:p-4 select-none my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                key={fullscreenIndex}
                src={activeFullscreen.src}
                alt={activeFullscreen.alt || "Fullscreen screenshot"}
                className="max-h-[80vh] max-w-[95vw] object-contain rounded-xl shadow-2xl border border-[#262626]"
              />

              {/* PREV ARROW IN FULLSCREEN */}
              {count > 1 && (
                <button
                  type="button"
                  onClick={() =>
                    setFullscreenIndex((prev) =>
                      prev > 0 ? prev - 1 : count - 1
                    )
                  }
                  className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-[#EFB946] text-white hover:text-black p-4 rounded-full border border-white/20 transition-all hover:scale-110 shadow-2xl cursor-pointer active:scale-95"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-7 h-7" />
                </button>
              )}

              {/* NEXT ARROW IN FULLSCREEN */}
              {count > 1 && (
                <button
                  type="button"
                  onClick={() =>
                    setFullscreenIndex((prev) =>
                      prev < count - 1 ? prev + 1 : 0
                    )
                  }
                  className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-[#EFB946] text-white hover:text-black p-4 rounded-full border border-white/20 transition-all hover:scale-110 shadow-2xl cursor-pointer active:scale-95"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-7 h-7" />
                </button>
              )}
            </div>

            {/* BOTTOM THUMBNAILS */}
            <div
              className="flex items-center justify-center gap-3 overflow-x-auto py-2 z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {slides.map((slide, sIdx) => (
                <div
                  key={sIdx}
                  onClick={() => setFullscreenIndex(sIdx)}
                  className={cn(
                    "w-16 h-11 md:w-20 md:h-14 rounded-lg overflow-hidden border-2 cursor-pointer transition-all shrink-0 opacity-60 hover:opacity-100",
                    sIdx === fullscreenIndex
                      ? "border-[#EFB946] opacity-100 scale-105"
                      : "border-transparent"
                  )}
                >
                  <img
                    src={slide.src}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}

export default CoverflowCarousel;
