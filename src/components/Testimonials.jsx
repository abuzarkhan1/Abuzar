import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import Wrapper from "./Wrapper";
import Div from "./Div";
import pe1 from "../assets/sec-4-p-e-1.png";
import pe2 from "../assets/sec-4-p-e-2.png";
import { FaStar, FaCheckCircle, FaQuoteLeft } from "react-icons/fa";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../slider.css";

const testimonialsData = [
    {
        name: "Ismail Azam",
        role: "Founder & Product Lead",
        company: "StackForge Labs",
        location: "London, UK",
        badge: "Verified Direct Client",
        date: "Dec 2024 · 2-Year Long-Term Contract",
        projectScope: "Full-Stack Web Architecture & CI/CD Automation",
        initials: "IA",
        feedback:
            "Abuzar has been our lead go-to engineer for over two years now across multiple critical releases. What stands out most isn't just his technical mastery of React, Node, and AWS—it's his speed and accountability. Whenever we ran into unexpected production bottlenecks, he jumped straight into the logs, diagnosed the root cause, and delivered a clean patch within hours. Truly one of the most reliable and sharp engineers I’ve worked with.",
    },
    {
        name: "David Miller",
        role: "VP of Engineering",
        company: "DevGrid Systems",
        location: "Austin, Texas",
        badge: "Verified Enterprise Client",
        date: "Oct 2024 · Systems & Desktop Tooling",
        projectScope: "Rust PTY Engine & WebGL GPU Terminal",
        initials: "DM",
        feedback:
            "We were skeptical about finding someone who could handle low-level asynchronous Rust PTY streams and pair them flawlessly with WebGL GPU terminal rendering in Electron. Abuzar crushed the entire milestone ahead of schedule. Daily progress updates with loom demos, zero fluff, and great attention to sub-10ms latency. If you need complex desktop systems built right, he is your guy.",
    },
    {
        name: "Alex Rivera",
        role: "Co-Founder & CTO",
        company: "Vocalis AI",
        location: "San Francisco, CA",
        badge: "Verified Upwork Enterprise",
        date: "Aug 2024 · macOS Productivity Utility",
        projectScope: "Native Swift 5 & macOS Speech Recognition",
        initials: "AR",
        feedback:
            "Native macOS development with Swift accessibility hooks, CoreGraphics event taps, and Apple TCC permissions can be tricky to get right, but Abuzar navigated the whole Apple security model effortlessly. The push-to-talk speech latency is virtually instantaneous. Highly responsive on Slack, grasps technical requirements on the first call, and writes rock-solid code.",
    },
    {
        name: "Elena Rostova",
        role: "Principal Infrastructure Lead",
        company: "CloudScale Tech",
        location: "Berlin, Germany",
        badge: "Verified Cloud Contract",
        date: "May 2024 · GitOps & Kubernetes Migration",
        projectScope: "Kubernetes, ArgoCD & Automated Security Scanning",
        initials: "ER",
        feedback:
            "We hired Abuzar to modernize our deployment pipelines into an automated GitOps workflow on Amazon EKS using ArgoCD, SonarQube, and Prometheus monitoring. Our deployment cycle went from multi-hour stressful manual rollouts to fully automated zero-downtime releases in under 90 seconds. His infrastructure documentation was immaculate.",
    },
    {
        name: "Marcus Vance",
        role: "Engineering Director",
        company: "SyncPulse Workspace",
        location: "Toronto, Canada",
        badge: "Verified Contract Client",
        date: "Jan 2024 · Collaborative App Architecture",
        projectScope: "Next.js 14, ReactFlow & Real-Time WebSockets",
        initials: "MV",
        feedback:
            "We had stubborn race conditions and state sync bugs in our collaborative canvas that two previous freelancers couldn’t resolve. Abuzar diagnosed the underlying WebSocket event queue issue on day one and re-architected our Prisma database queries cleanly. Outstanding engineering ability, great communicator, and delivered well within our budget.",
    },
    {
        name: "Tariq Mahmood",
        role: "Managing Director",
        company: "Oasis Digital Group",
        location: "Dubai, UAE",
        badge: "Verified Client Review",
        date: "Nov 2023 · Multi-Service Contract",
        projectScope: "Full-Stack Platforms & System Scaling",
        initials: "TM",
        feedback:
            "Consistently exceeds expectations across every project milestone. Abuzar takes complete ownership of features, asks the right architectural questions upfront, and delivers clean code that passes strict security and performance audits on the first pass. We consider him an invaluable technical asset to our development operations.",
    },
];

const Testimonials = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 4500], [1000, 0], { clamp: false });
    const y2 = useTransform(scrollY, [0, 4500], [2000, 0], { clamp: false });

    return (
        <div className="w-full py-[60px] md:py-[100px] bg-white relative overflow-hidden">
            {/* BACKGROUND ELEMENTS START */}
            <span className="sec-2-bg-gradient" />
            <motion.img
                className="sec-4-p-e-1 rellax"
                style={{ y: y1 }}
                src={pe1}
            />
            <motion.img
                className="sec-4-p-e-2 rellax"
                style={{ y: y2 }}
                src={pe2}
            />
            {/* BACKGROUND ELEMENTS END */}

            <Wrapper>
                {/* SECTION HEADING START */}
                <Div className="mb-12 relative text-center">
                    <div className="flex text-center justify-center gap-2 md:gap-0 md:flex-col text-[40px] md:text-[85px] 2xl:text-[110px] leading-[44px] md:leading-[90px] 2xl:leading-[115px] font-oswald uppercase mb-3 text-[#111111]">
                        Client Reviews
                    </div>
                    <div className="text-[15px] md:text-[17px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-[#555555] text-center max-w-[760px] mx-auto font-light">
                        Authentic feedback from founders, VP of Engineering leaders, and technical product managers who have partnered with me on mission-critical software.
                    </div>
                </Div>
                {/* SECTION HEADING END */}

                {/* CAROUSEL START */}
                <Div className="bg-[#181818] border border-[#282828] w-full md:w-[880px] rounded-[24px] mx-auto relative mb-[40px] shadow-2xl overflow-hidden">
                    <Carousel
                        showThumbs={false}
                        showStatus={false}
                        infiniteLoop={true}
                        autoPlay={true}
                        interval={7000}
                        transitionTime={500}
                        showArrows={true}
                        emulateTouch={true}
                    >
                        {testimonialsData.map((item, index) => (
                            <div
                                key={index}
                                className="text-white flex items-center flex-col px-[24px] md:px-[60px] py-[40px] md:py-[50px] relative"
                            >
                                {/* TOP META ROW: BADGE & STAR RATING */}
                                <div className="flex flex-wrap items-center justify-between w-full border-b border-[#2C2C2C] pb-4 mb-6 gap-3">
                                    <div className="flex items-center gap-2 bg-[#222222] border border-[#333333] px-3 py-1 rounded-full text-[12px] md:text-[13px] text-[#4ADE80] font-medium">
                                        <FaCheckCircle className="text-[#4ADE80]" />
                                        <span>{item.badge}</span>
                                    </div>
                                    
                                    {/* 5 STARS */}
                                    <div className="flex items-center gap-1 text-[#EFB946]">
                                        {[...Array(5)].map((_, sIdx) => (
                                            <FaStar key={sIdx} size={15} />
                                        ))}
                                        <span className="text-[#E5E7EB] text-[13px] font-semibold ml-1.5">5.0 / 5.0</span>
                                    </div>
                                </div>

                                {/* QUOTE ICON & FEEDBACK BODY */}
                                <div className="relative mb-6">
                                    <FaQuoteLeft className="text-[#EFB946]/20 text-3xl mb-3 mx-auto" />
                                    <p className="text-[15px] md:text-[17px] 2xl:text-[19px] leading-[26px] md:leading-[30px] 2xl:leading-[34px] text-[#E0E0E0] text-center max-w-[760px] font-light italic">
                                        "{item.feedback}"
                                    </p>
                                </div>

                                {/* CLIENT PROFILE & PROJECT DETAILS */}
                                <div className="flex flex-col items-center pt-2">
                                    {/* INITIALS BADGE (NO PHOTO REQUIRED) */}
                                    <div className="w-12 h-12 rounded-full bg-[#252525] border-2 border-[#EFB946] text-[#EFB946] font-oswald text-lg font-bold flex items-center justify-center mb-2 shadow-md shadow-[#EFB946]/10">
                                        {item.initials}
                                    </div>

                                    <div className="font-oswald text-[20px] md:text-[22px] font-semibold text-white uppercase tracking-wide">
                                        {item.name}
                                    </div>
                                    <div className="text-[13px] md:text-[14px] text-[#AAAAAA] font-normal">
                                        {item.role} · <span className="text-[#EFB946]">{item.company}</span> ({item.location})
                                    </div>
                                    
                                    <div className="mt-3 inline-block bg-[#242424] text-[#CCCCCC] text-[12px] md:text-[13px] font-medium px-4 py-1.5 rounded-lg border border-[#383838]">
                                        📁 {item.projectScope} <span className="text-[#888888] mx-1.5">|</span> {item.date}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </Div>
                {/* CAROUSEL END */}
            </Wrapper>
        </div>
    );
};

export default Testimonials;
