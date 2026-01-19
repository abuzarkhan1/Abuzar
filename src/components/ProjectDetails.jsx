import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { CardStack } from "./CardStack";

import Wrapper from "./Wrapper";
import Div from "./Div";
import { FaArrowLeft, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectDetails = ({ project, onBack, isOpen }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!project) return null;

    return (
        <div className={`fixed inset-0 z-50 bg-[#111111] transition-all duration-300 overflow-hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            {/* MODAL OVERLAY */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onBack}></div>

            {/* MODAL CONTENT */}
            <div className="relative w-full h-full overflow-y-auto overflow-x-hidden overscroll-none py-[50px] md:py-[100px]">
                {/* BACKGROUND ELEMENTS START */}
                <div className="sec-3-bg-gradient-1" />
                <div className="sec-3-bg-gradient-2" />
                {/* BACKGROUND ELEMENTS END */}

                <Wrapper>
                    {/* BACK BUTTON START */}
                    <Div className="mb-10">
                        <button
                            onClick={onBack}
                            className="flex items-center gap-3 text-[#EFB946] hover:text-white transition-colors cursor-pointer text-[18px] font-medium bg-[#252525] hover:bg-[#333] px-4 py-2 rounded-lg"
                        >
                            <FaArrowLeft />
                            Close Details
                        </button>
                    </Div>
                    {/* BACK BUTTON END */}

                    {/* PROJECT TITLE START */}
                    <Div className="mb-10">
                        <h1 className="text-[40px] md:text-[70px] 2xl:text-[90px] leading-[45px] md:leading-[75px] 2xl:leading-[95px] font-oswald uppercase text-gradient mb-4">
                            {project.name}
                        </h1>
                        <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-[#CCCCCC] max-w-[800px]">
                            {project.description}
                        </div>
                    </Div>
                    {/* PROJECT TITLE END */}

                    {/* PROJECT IMAGES START */}
                    <Div className="mb-10">
                        {(() => {
                            const images = project.images && project.images.length > 0
                                ? project.images
                                : (project.image ? [project.image] : []);

                            if (images.length === 0) return null;

                            const stackItems = images.map((img, i) => ({
                                id: i,
                                title: project.name,
                                description: i === 0 ? "Featured Shot" : `Gallery Image ${i + 1}`,
                                imageSrc: img,
                                ctaLabel: "View Details"
                            }));

                            return (
                                <div className="w-full max-w-[1000px] mx-auto relative z-0">
                                    <CardStack
                                        items={stackItems}
                                        cardWidth={800}
                                        cardHeight={450}
                                        className="py-10"
                                    />
                                </div>
                            );
                        })()}
                    </Div>
                    {/* PROJECT IMAGES END */}

                    {/* PROJECT DETAILS GRID START */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
                        {/* DESCRIPTION SECTION START */}
                        <Div>
                            <h2 className="text-[28px] 2xl:text-[34px] text-[#EFB946] uppercase mb-6 font-oswald">
                                Project Overview
                            </h2>
                            <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-[#CCCCCC] space-y-4">
                                {project.fullDescription ? (
                                    project.fullDescription.split('\n').map((paragraph, index) => (
                                        <p key={index}>{paragraph}</p>
                                    ))
                                ) : (
                                    <p>{project.description}</p>
                                )}
                            </div>
                        </Div>
                        {/* DESCRIPTION SECTION END */}

                        {/* SKILLS AND TOOLS SECTION START */}
                        <Div>
                            <h2 className="text-[28px] 2xl:text-[34px] text-[#EFB946] uppercase mb-6 font-oswald">
                                Technologies Used
                            </h2>
                            <div className="space-y-6">
                                {project.skills && (
                                    <div>
                                        <h3 className="text-[20px] 2xl:text-[24px] text-white mb-3 font-medium">
                                            Skills & Technologies
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {project.skills.map((skill, index) => (
                                                <span
                                                    key={index}
                                                    className="bg-[#252525] rounded-lg py-[8px] px-[15px] text-[14px] 2xl:text-[16px] text-[#CCCCCC]"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {project.tools && (
                                    <div>
                                        <h3 className="text-[20px] 2xl:text-[24px] text-white mb-3 font-medium">
                                            Tools & Platforms
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tools.map((tool, index) => (
                                                <span
                                                    key={index}
                                                    className="bg-[#1a1a1a] border border-[#333] rounded-lg py-[8px] px-[15px] text-[14px] 2xl:text-[16px] text-[#EFB946]"
                                                >
                                                    {tool}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </Div>
                        {/* SKILLS AND TOOLS SECTION END */}
                    </div>
                    {/* PROJECT DETAILS GRID END */}

                    {/* PROJECT LINKS START */}
                    {(project.codeLink || project.liveLink) && (
                        <Div className="flex justify-center gap-6">
                            {project.codeLink && (
                                <a
                                    href={project.codeLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 bg-[#252525] hover:bg-[#EFB946] hover:text-black transition-all duration-300 rounded-lg py-[15px] px-[25px] text-[16px] 2xl:text-[18px] font-medium"
                                >
                                    <FaGithub />
                                    View Code
                                </a>
                            )}
                        </Div>
                    )}
                    {/* PROJECT LINKS END */}
                </Wrapper>
            </div>
        </div>
    );
};

export default ProjectDetails;