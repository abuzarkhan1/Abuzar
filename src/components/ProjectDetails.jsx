import React, { useEffect } from "react";
import { CoverflowCarousel } from "./ui/coverflow-carousel";

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
                    <Div className="mb-10 flex items-center justify-between">
                        <button
                            onClick={onBack}
                            className="flex items-center gap-3 text-[#EFB946] hover:text-white transition-colors cursor-pointer text-[16px] md:text-[18px] font-medium bg-[#252525] hover:bg-[#333] px-5 py-2.5 rounded-lg shadow-lg border border-[#333]"
                        >
                            <FaArrowLeft />
                            Back to Projects
                        </button>
                    </Div>
                    {/* BACK BUTTON END */}

                    {/* PROJECT TITLE START */}
                    <Div className="mb-8">
                        <h1 className="text-[36px] md:text-[60px] 2xl:text-[76px] leading-[42px] md:leading-[68px] 2xl:leading-[84px] font-oswald uppercase text-gradient mb-4">
                            {project.name}
                        </h1>
                        <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-[#CCCCCC] max-w-[850px]">
                            {project.description}
                        </div>
                    </Div>
                    {/* PROJECT TITLE END */}

                    {/* PROJECT IMAGES (COVERFLOW CAROUSEL) START */}
                    <Div className="mb-12">
                        {(() => {
                            const images = project.images && project.images.length > 0
                                ? project.images
                                : (project.image ? [project.image] : []);

                            if (images.length === 0) return null;

                            const slides = images.map((img, i) => ({
                                src: img,
                                alt: `${project.name} Screenshot ${i + 1}`,
                            }));

                            return (
                                <div className="w-full max-w-[1250px] mx-auto relative z-0">
                                    <CoverflowCarousel
                                        slides={slides}
                                        cardWidth="clamp(320px, 60vw, 880px)"
                                        rotate={30}
                                        depth={0.4}
                                        gap={0.06}
                                        loop={slides.length > 2}
                                        showCaption={false}
                                        showPagination={true}
                                        showNavigation={true}
                                        className="py-2"
                                    />
                                </div>
                            );
                        })()}
                    </Div>
                    {/* PROJECT IMAGES END */}

                    {/* PROJECT DETAILS GRID START */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
                        {/* DESCRIPTION SECTION START */}
                        <Div>
                            <h2 className="text-[26px] 2xl:text-[32px] text-[#EFB946] uppercase mb-6 font-oswald tracking-wide">
                                Project Overview & Architecture
                            </h2>
                            <div className="text-[15px] md:text-[16px] 2xl:text-[18px] leading-[26px] 2xl:leading-[30px] text-[#CCCCCC] space-y-4 whitespace-pre-line font-light">
                                {project.fullDescription ? (
                                    project.fullDescription.split('\n\n').map((paragraph, index) => (
                                        <p key={index} className="text-[#D1D5DB] leading-relaxed">
                                            {paragraph.trim()}
                                        </p>
                                    ))
                                ) : (
                                    <p className="text-[#D1D5DB] leading-relaxed">{project.description}</p>
                                )}
                            </div>
                        </Div>
                        {/* DESCRIPTION SECTION END */}

                        {/* SKILLS AND TOOLS SECTION START */}
                        <Div>
                            <h2 className="text-[26px] 2xl:text-[32px] text-[#EFB946] uppercase mb-6 font-oswald tracking-wide">
                                Technologies & Tooling
                            </h2>
                            <div className="space-y-6">
                                {project.skills && (
                                    <div className="bg-[#181818] p-6 rounded-xl border border-[#282828]">
                                        <h3 className="text-[18px] 2xl:text-[22px] text-white mb-3 font-medium flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-[#EFB946]"></span>
                                            Core Technologies & Frameworks
                                        </h3>
                                        <div className="flex flex-wrap gap-2 pt-2">
                                            {project.skills.map((skill, index) => (
                                                <span
                                                    key={index}
                                                    className="bg-[#242424] hover:bg-[#303030] transition-colors border border-[#333333] rounded-lg py-[6px] px-[14px] text-[13px] 2xl:text-[15px] text-[#E5E7EB] font-medium"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {project.tools && (
                                    <div className="bg-[#181818] p-6 rounded-xl border border-[#282828]">
                                        <h3 className="text-[18px] 2xl:text-[22px] text-white mb-3 font-medium flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-[#EFB946]"></span>
                                            Infrastructure, Protocols & Tools
                                        </h3>
                                        <div className="flex flex-wrap gap-2 pt-2">
                                            {project.tools.map((tool, index) => (
                                                <span
                                                    key={index}
                                                    className="bg-[#1c1c1c] border border-[#EFB946]/30 rounded-lg py-[6px] px-[14px] text-[13px] 2xl:text-[15px] text-[#EFB946] font-medium"
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
                        <Div className="flex flex-wrap justify-center gap-5 pt-4 pb-8">
                            {project.codeLink && (
                                <a
                                    href={project.codeLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 bg-[#242424] hover:bg-[#333333] text-white hover:text-[#EFB946] border border-[#383838] hover:border-[#EFB946]/60 transition-all duration-300 rounded-lg py-[14px] px-[26px] text-[15px] 2xl:text-[17px] font-medium shadow-lg"
                                >
                                    <FaGithub size={18} />
                                    View Source Code
                                </a>
                            )}
                            {project.liveLink && (
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 bg-[#EFB946] hover:bg-white text-black font-semibold transition-all duration-300 rounded-lg py-[14px] px-[28px] text-[15px] 2xl:text-[17px] shadow-lg shadow-[#EFB946]/10"
                                >
                                    <FaExternalLinkAlt size={16} />
                                    Launch Live Website
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