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
            className="w-full h-[100vh] relative bg-[#111111] overflow-hidden"
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
                    className="flex justify-center text-center mt-14 mb-8 relative"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-[46px] md:text-[110px] 2xl:text-[120px] leading-[48px] md:leading-[115px] 2xl:leading-[130px] font-oswald uppercase text-gradient">
                        I Am A Software
                        <br className="invisible md:visible" />
                        Engineer
                    </h1>
                </motion.div>
                {/* BIG HEADING END */}

                {/* INTRO START */}
                <motion.div
                    className="flex flex-col mb-10 text-center md:text-left text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] relative z-10"
                    initial={{ y: 300, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.25 }}
                >
                    <div className="font-light mb-3 text-lg">
                        👋 Hi, I Am{" "}
                        <span className="font-semibold text-white">Abuzar Khan,</span>
                    </div>
                    <div className="max-w-[560px] text-[#BBBBBB] leading-relaxed">
                        A passionate and results-driven software engineer specializing in high-performance desktop systems, Rust tools, AI agent orchestration, full-stack web platforms, and automated DevOps infrastructure.
                    </div>
                </motion.div>
                {/* INTRO END */}

                {/* NUMBER BLOCK START */}
                <motion.div
                    className="hidden md:flex gap-8 relative z-10 cursor-pointer group"
                    initial={{ y: 300, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.25 }}
                    onClick={() => scrollTo("work")}
                    title="Click to view Projects"
                >
                    {/* START */}
                    <div className="flex items-center gap-3">
                        <div className="text-[75px] font-light text-[#EFB946] group-hover:scale-105 transition-transform">30+</div>
                        <div className="leading-[22px] text-[15px] text-[#CCCCCC] group-hover:text-white transition-colors font-medium">
                            SUCCESSFULLY
                            <br />
                            COMPLETED
                            <br />
                            PROJECTS
                        </div>
                    </div>
                    {/* END */}
                </motion.div>
                {/* NUMBER BLOCK END */}

                {/* PERSON BLOCK START */}
                <motion.div
                    className="w-[300px] md:w-[360px] 2xl:w-[350px] absolute bottom-0 left-[50%] -translate-x-1/2"
                    initial={{ y: 200, x: "-50%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* HIRE ME BUTTON START */}
                    <div
                        className="absolute top-[140px] -right-10 2xl:top-[240px] 2xl:-right-10 w-[130px] h-[130px] rounded-full bg-white/[0.8] hover:bg-[#EFB946] flex flex-col justify-center items-center gap-2 backdrop-blur-sm cursor-pointer transition-all scale-[0.7] md:scale-100 active:scale-[0.6] md:active:scale-95 shadow-xl group"
                        onClick={() => scrollTo("contact")}
                    >
                        <img
                            src={externalLinkIcon}
                            alt=""
                            className="w-[15px] group-hover:rotate-45 transition-transform duration-300"
                        />
                        <div className="text-black font-semibold text-sm uppercase tracking-wide">Hire Me</div>
                    </div>
                    {/* HIRE ME BUTTON END */}
                </motion.div>
                {/* PERSON BLOCK END */}
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
