import React from "react";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Wrapper from "./Wrapper";
import Div from "./Div";
import { FaArrowLeft, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectDetails = ({ project, onBack }) => {
    if (!project) return null;

    return (
        <div className="w-full min-h-screen bg-[#111111] py-[50px] md:py-[100px] relative overflow-hidden">
            {/* BACKGROUND ELEMENTS START */}
            <div className="sec-3-bg-gradient-1" />
            <div className="sec-3-bg-gradient-2" />
            {/* BACKGROUND ELEMENTS END */}

            <Wrapper>
                {/* BACK BUTTON START */}
                <Div className="mb-10">
                    <button
                        onClick={onBack}
                        className="flex items-center gap-3 text-[#EFB946] hover:text-white transition-colors cursor-pointer text-[18px] font-medium"
                    >
                        <FaArrowLeft />
                        Back to Projects
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
                    {project.images && project.images.length > 1 ? (
                        <div className="bg-black rounded-[20px] overflow-hidden max-w-[900px] mx-auto">
                            <Carousel
                                showThumbs={false}
                                showStatus={false}
                                infiniteLoop={true}
                                autoPlay={true}
                                interval={5000}
                                className="project-carousel"
                            >
                                {project.images.map((image, index) => (
                                    <div key={index} className="aspect-video">
                                        <img
                                            src={image}
                                            alt={`${project.name} - Image ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    ) : (
                        <div className="bg-black rounded-[20px] overflow-hidden max-w-[900px] mx-auto aspect-video">
                            <img
                                src={project.image || project.images?.[0]}
                                alt={project.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}
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
                        {project.liveLink && (
                            <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 bg-[#EFB946] hover:bg-[#d4a139] text-black transition-all duration-300 rounded-lg py-[15px] px-[25px] text-[16px] 2xl:text-[18px] font-medium"
                            >
                                <FaExternalLinkAlt />
                                Live Demo
                            </a>
                        )}
                    </Div>
                )}
                {/* PROJECT LINKS END */}
            </Wrapper>
        </div>
    );
};

export default ProjectDetails;