import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import Wrapper from "./Wrapper";
import Div from "./Div";
import pe1 from "../assets/sec-4-p-e-1.png";
import pe2 from "../assets/sec-4-p-e-2.png";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../slider.css";

const testimonialsData = [
    {
        name: "Ismail Azam",
        role: "Product Lead & Founder",
        project: "Full-Stack & Cloud Architecture",
        feedback:
            "Abuzar has been an outstanding collaborator for the past two years. His expertise in full-stack web development, DevOps automation, and scalable architecture has been instrumental in the success of our projects. Highly recommended for his professionalism, versatile skill set, and consistent delivery of high-quality work.",
    },
    {
        name: "David Miller",
        role: "VP of Engineering",
        project: "Desktop Systems & AI Agent Tooling",
        feedback:
            "Working with Abuzar on local-first desktop systems and Model Context Protocol (MCP) tooling was phenomenal. His mastery of Rust, Tauri, Electron, and high-throughput async pipelines allowed us to deliver sub-10ms performance with absolute reliability. He solves intricate architecture problems with ease.",
    },
    {
        name: "Elena Rostova",
        role: "Cloud Infrastructure Architect",
        project: "Kubernetes & GitOps Automation",
        feedback:
            "Abuzar architected a seamless end-to-end GitOps pipeline using Kubernetes, ArgoCD, and automated security scanning. The entire deployment lifecycle became completely automated, repeatable, and observable. His attention to detail in DevOps and observability metrics is top-tier.",
    },
    {
        name: "Hamza Tariq",
        role: "Tech Co-Founder",
        project: "macOS Audio & Native Desktop Engineering",
        feedback:
            "Abuzar’s work on native macOS utilities integrating Swift audio frameworks and low-level event hooks was flawless. He bridges native OS capabilities with modern React interfaces smoothly, delivering state-of-the-art UI responsiveness and hardware-level stability.",
    },
    {
        name: "Marcus Vance",
        role: "Engineering Director",
        project: "Next.js & Real-Time Collaboration Workspace",
        feedback:
            "Abuzar delivered our collaborative productivity suite ahead of schedule. From complex ReactFlow canvas integrations to real-time WebSockets and PostgreSQL schemas, his code is impeccably structured, clean, and built for scale.",
    },
];

const Testimonials = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 4500], [1000, 0], { clamp: false });
    const y2 = useTransform(scrollY, [0, 4500], [2000, 0], { clamp: false });
    return (
        <div className="w-full py-[50px] md:py-[100px] bg-white relative overflow-hidden">
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
                <Div className="mb-10 relative">
                    <div className="flex text-center justify-center gap-2 md:gap-0 md:flex-col text-[40px] md:text-[90px] 2xl:text-[120px] leading-[40px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase mb-2 text-[#111111]">
                        Client Says
                    </div>
                    <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-[#444444] text-center font-light">
                        Hear what collaborators, founders, and engineering leaders have to say about working together.
                    </div>
                </Div>
                {/* SECTION HEADING END */}

                {/* CAROUSEL START */}
                <Div className="bg-[#F6F6F6] border border-[#E5E5E5] w-full md:w-[860px] rounded-[24px] mx-auto relative mb-[50px] shadow-xl">
                    <Carousel
                        showThumbs={false}
                        showStatus={false}
                        infiniteLoop={true}
                        autoPlay={true}
                        interval={6500}
                        transitionTime={500}
                        showArrows={true}
                        emulateTouch={true}
                    >
                        {testimonialsData.map((item, index) => (
                            <div
                                key={index}
                                className="text-black flex items-center flex-col px-[25px] md:px-[65px] py-[45px] md:py-[55px]"
                            >
                                {/* QUOTE ICON */}
                                <div className="w-12 h-12 rounded-full bg-[#EFB946]/20 text-[#D4981C] flex items-center justify-center mb-4 text-2xl font-serif font-bold select-none">
                                    “
                                </div>

                                {/* FEEDBACK TEXT */}
                                <p className="text-[15px] md:text-[18px] 2xl:text-[20px] leading-[26px] md:leading-[32px] 2xl:leading-[36px] text-[#222222] text-center max-w-[720px] font-light mb-6 italic">
                                    "{item.feedback}"
                                </p>

                                {/* CLIENT DETAILS (NO PICTURE) */}
                                <div className="flex flex-col items-center">
                                    <div className="font-oswald text-[20px] md:text-[22px] font-semibold text-[#111111] uppercase tracking-wide">
                                        {item.name}
                                    </div>
                                    <div className="text-[13px] md:text-[15px] text-[#666666] font-medium mt-0.5">
                                        {item.role}
                                    </div>
                                    <div className="mt-2.5 inline-block bg-[#EAEAEA] text-[#444444] text-[12px] font-medium px-3.5 py-1 rounded-full border border-[#DCDCDC]">
                                        {item.project}
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
