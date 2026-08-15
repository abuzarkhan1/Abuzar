import { useRef } from "react";
import { motion } from "framer-motion";
import '@fortawesome/fontawesome-free/css/all.min.css';

import Wrapper from "./Wrapper";
import externalLinkIcon from "../assets/external-link-icon.png";
import gmailIcon from "../assets/email-icon.png";
import { scrollTo } from "../helper";
import { useFollowPointer } from "./useFollowPointer";

const HeroBanner = () => {
    const ref = useRef(null);
    const { x, y } = useFollowPointer(ref);
    const socialIconsStyle = {
        position: 'fixed',
        right: '20px',
        top: '50%',
        transform: 'translateY(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        zIndex: 40,
    };
    
    const iconStyle = {
        margin: '10px',
        fontSize: '24px',
        color: '#EFB946',
        transition: 'all 0.3s ease',
    };

    return (
        <div
            id="hero"
            className="w-full min-h-[100vh] relative bg-[#111111] overflow-hidden flex flex-col justify-between pb-12"
        >
            {/* BACKGROUND ELEMENTS FOR DESKTOP START */}
            <motion.span
                ref={ref}
                animate={{ x, y }}
                className="hidden md:block sec-1-bg-gradient-1-desktop md:w-[1120px] 2xl:w-[1420px] md:h-[1119px] 2xl:h-[1419px] absolute md:left-[1000px] 2xl:left-[1309px] -top-[709px]"
            />
            <span className="hidden md:block sec-1-bg-gradient-2-desktop md:w-[1120px] 2xl:w-[1420px] md:h-[1119px] 2xl:h-[1419px] absolute left-[105px] top-[672px] md:top-[500px] 2xl:top-[672px]" />
            {/* BACKGROUND ELEMENTS FOR DESKTOP END */}

            {/* BACKGROUND ELEMENTS FOR MOBILE START */}
            <span className="md:hidden sec-1-bg-gradient-1-mobile absolute w-[212px] h-[211px] left-[285px] -top-[25px]" />
            <span className="md:hidden sec-1-bg-gradient-2-mobile absolute w-[636px] h-[635px] -left-[334px] top-[672px]" />
            {/* BACKGROUND ELEMENTS FOR MOBILE END */}

            <Wrapper>
                {/* NAVBAR START */}
                <motion.div
                    className="hidden md:flex items-center justify-between mt-[15px] 2xl:mt-[15px] relative z-20"
                    initial={{ y: -200, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.25 }}
                >
                    <div className="flex items-center gap-[10px]">
                        <div className="w-[35px] h-[35px] rounded-full bg-[#252525] flex justify-center items-center">
                            <img src={gmailIcon} alt="" className="w-[18px]" />
                        </div>
                        <div className="text-[15px] font-medium text-[#E5E7EB]">abuzarkhan1242@gmail.com</div>
                    </div>
                    <ul className="flex 2xl:text-[20px] gap-2">
                        <li
                            className="cursor-pointer px-4 py-2 hover:bg-[#252525] transition active:scale-95 rounded-lg text-[#CCCCCC] hover:text-[#EFB946]"
                            onClick={() => scrollTo("work")}
                        >
                            Projects
                        </li>
                        <li
                            className="cursor-pointer px-4 py-2 hover:bg-[#252525] transition active:scale-95 rounded-lg text-[#CCCCCC] hover:text-[#EFB946]"
                            onClick={() => scrollTo("about")}
                        >
                            About me
                        </li>
                        <li
                            className="cursor-pointer px-4 py-2 hover:bg-[#252525] transition active:scale-95 rounded-lg text-[#CCCCCC] hover:text-[#EFB946]"
                            onClick={() => scrollTo("skills")}
                        >
                            Skills
                        </li>
                        <li
                            className="cursor-pointer px-4 py-2 hover:bg-[#252525] transition active:scale-95 rounded-lg text-[#CCCCCC] hover:text-[#EFB946]"
                            onClick={() => scrollTo("contact")}
                        >
                            Contact
                        </li>
                    </ul>
                </motion.div>
                {/* NAVBAR END */}

                {/* BIG HEADING START */}
                <motion.div
                    className="flex justify-center text-center mt-10 md:mt-12 mb-6 relative z-10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-[44px] md:text-[95px] 2xl:text-[115px] leading-[48px] md:leading-[100px] 2xl:leading-[120px] font-oswald uppercase text-gradient">
                        I Am A Software
                        <br className="invisible md:visible" />
                        Engineer
                    </h1>
                </motion.div>
                {/* BIG HEADING END */}

                {/* TWO COLUMN HERO CONTENT GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10 my-auto">
                    {/* LEFT COLUMN */}
                    <motion.div
                        className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
                        initial={{ y: 150, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {/* LIVE AVAILABILITY BADGE */}
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1C1C1C] border border-[#2D2D2D] text-[13px] text-[#D1D5DB] mb-4 shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse"></span>
                            <span>Available for Engineering Projects</span>
                        </div>

                        {/* GREETING */}
                        <div className="font-light text-lg md:text-xl text-[#EEEEEE] mb-2">
                            👋 Hi, I Am <span className="font-semibold text-white">Abuzar Khan,</span>
                        </div>

                        {/* BIO DESCRIPTION */}
                        <p className="max-w-[580px] text-[#A3A3A3] text-[15px] md:text-[17px] leading-relaxed mb-6 font-light">
                            A passionate software engineer specializing in high-performance desktop systems, Rust tools, AI agent orchestration (MCP), full-stack web platforms, and automated DevOps infrastructure.
                        </p>

                        {/* PRIMARY ACTIONS & CTA */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-6">
                            <button
                                onClick={() => scrollTo("work")}
                                className="bg-[#EFB946] hover:bg-[#F2C766] text-black font-semibold text-[15px] px-6 py-3 rounded-xl transition-all shadow-lg shadow-[#EFB946]/20 flex items-center gap-2 cursor-pointer active:scale-95"
                            >
                                <span>Explore Featured Projects</span>
                                <span>→</span>
                            </button>
                            <button
                                onClick={() => scrollTo("contact")}
                                className="bg-[#202020] hover:bg-[#2A2A2A] text-white border border-[#333333] font-medium text-[15px] px-6 py-3 rounded-xl transition-all cursor-pointer active:scale-95"
                            >
                                Get In Touch
                            </button>
                        </div>

                        {/* 30+ COMPLETED PROJECTS STAT CARD */}
                        <div
                            onClick={() => scrollTo("work")}
                            className="inline-flex items-center gap-4 bg-[#181818]/90 border border-[#2A2A2A] px-5 py-3 rounded-2xl cursor-pointer hover:border-[#EFB946]/50 transition-all group shadow-md"
                            title="Click to view all projects"
                        >
                            <div className="text-[36px] md:text-[42px] font-light text-[#EFB946] group-hover:scale-105 transition-transform font-oswald leading-none">
                                30+
                            </div>
                            <div className="text-[12px] md:text-[13px] text-[#AAAAAA] group-hover:text-[#EEEEEE] transition-colors leading-tight font-medium uppercase tracking-wide text-left">
                                Successfully<br />Completed Projects
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT COLUMN: DEVELOPER TERMINAL & ANCHORED HIRE ME BADGE */}
                    <motion.div
                        className="lg:col-span-5 relative w-full flex justify-center lg:justify-end"
                        initial={{ y: 150, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <div className="w-full max-w-[460px] bg-[#161616] border border-[#2B2B2B] rounded-2xl shadow-2xl overflow-hidden backdrop-blur-md relative">
                            {/* TERMINAL HEADER */}
                            <div className="bg-[#1F1F1F] px-4 py-3 border-b border-[#2A2A2A] flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 rounded-full bg-[#FF5F56]"></span>
                                    <span className="w-3 h-3 rounded-full bg-[#FFBD2E]"></span>
                                    <span className="w-3 h-3 rounded-full bg-[#27C93F]"></span>
                                </div>
                                <div className="text-[12px] text-[#888888] font-mono">abuzar@mbp: ~/systems</div>
                                <div className="w-10"></div>
                            </div>

                            {/* TERMINAL BODY */}
                            <div className="p-5 font-mono text-[13px] leading-relaxed text-[#D1D5DB] space-y-3.5">
                                <div>
                                    <span className="text-[#EFB946] font-semibold">$</span> cargo run --release -p gitx
                                </div>
                                <div className="text-[#4ADE80] text-[12px] pl-3 border-l-2 border-[#4ADE80]/40">
                                    ✓ 11 modular crates compiled (0.82s)<br />
                                    ✓ Sub-second SQLite git history indexed<br />
                                    ✓ Ratatui interactive TUI active
                                </div>

                                <div>
                                    <span className="text-[#EFB946] font-semibold">$</span> vibevoice --listen --mcp
                                </div>
                                <div className="text-[#60A5FA] text-[12px] pl-3 border-l-2 border-[#60A5FA]/40">
                                    ✓ macOS Speech framework initialized<br />
                                    ✓ Audio RMS: 60 FPS live waveform<br />
                                    ✓ Claude 3.5 Sonnet / GPT-4o cleanup online
                                </div>

                                <div className="pt-2 border-t border-[#262626] flex items-center justify-between text-[11px] text-[#999999]">
                                    <span className="flex items-center gap-1.5">
                                        <span className="w-2 h-2 rounded-full bg-[#EFB946]"></span>
                                        Rust · Tauri · Next.js · K8s
                                    </span>
                                    <span className="text-[#4ADE80] font-semibold">Sub-10ms Latency</span>
                                </div>
                            </div>
                        </div>

                        {/* ANCHORED HIRE ME FLOATING ORBIT BUTTON */}
                        <div
                            className="hidden md:flex absolute -bottom-5 -right-3 2xl:-right-5 w-[115px] h-[115px] rounded-full bg-[#EFB946] hover:bg-[#F2C766] text-black flex-col justify-center items-center gap-1.5 cursor-pointer transition-all hover:scale-105 active:scale-95 shadow-xl shadow-[#EFB946]/30 z-20 group"
                            onClick={() => scrollTo("contact")}
                            title="Hire Me / Contact"
                        >
                            <img
                                src={externalLinkIcon}
                                alt=""
                                className="w-[14px] group-hover:rotate-45 transition-transform duration-300"
                            />
                            <div className="text-black font-bold text-[12px] uppercase tracking-wide">Hire Me</div>
                        </div>
                    </motion.div>
                </div>
            </Wrapper>

            <div style={socialIconsStyle} className="hidden md:flex">
                <a 
                    href="https://www.linkedin.com/in/abuzar-khan-147916247/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    style={iconStyle}
                    className="hover:scale-125"
                    aria-label="LinkedIn Profile"
                >
                    <i className="fab fa-linkedin"></i>
                </a>
                <a 
                    href="https://github.com/abuzarkhan1" 
                    target="_blank"
                    rel="noopener noreferrer"
                    style={iconStyle}
                    className="hover:scale-125"
                    aria-label="GitHub Profile"
                >
                    <i className="fab fa-github"></i>
                </a>
            </div>
        </div>
    );
};

export default HeroBanner;
