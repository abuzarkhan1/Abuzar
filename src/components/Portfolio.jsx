import React, { useState } from "react";

import { projects, filters } from "../data";
import Div from "./Div";
import { FaPlay, FaGithub, FaEye } from "react-icons/fa";

const Portfolio = ({ onProjectClick }) => {
    const [selectedTag, setSelectedTag] = useState("all");
    const [projectData, setProjectData] = useState(projects);

    const filterHandler = (tag) => {
        setSelectedTag(tag);
        let filteredProjects = [];
        if (tag === "all") {
            filteredProjects = projects;
        } else {
            filteredProjects = projects.filter((p) => p.tags && p.tags.includes(tag));
        }
        setProjectData(filteredProjects);
    };

    return (
        <div id="work" className="mt-10 relative">
            {/* SECTION HEADING START */}
            <Div className="mb-10">
                <div className="flex text-center justify-center gap-2 md:gap-0 md:flex-col text-[40px] md:text-[90px] 2xl:text-[120px] leading-[40px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase text-gradient mb-2">
                    Featured Projects
                </div>
                <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-[#CCCCCC] text-center max-w-[800px] mx-auto">
                    Deep dive into my desktop software, systems architecture, AI agent tooling, full-stack applications, and DevOps platforms.
                </div>
            </Div>
            {/* SECTION HEADING END */}

            {/* FILTER TAGS START */}
            <Div className="flex justify-start md:justify-center gap-[10px] mb-[45px] overflow-x-auto pb-2 scrollbar-none">
                {filters.map((item, index) => (
                    <button
                        key={index}
                        className={`rounded-lg py-[9px] px-[20px] text-[15px] 2xl:text-[18px] font-medium transition-all duration-300 whitespace-nowrap cursor-pointer border ${
                            selectedTag === item.id
                                ? "bg-[#EFB946] text-black border-[#EFB946] shadow-lg shadow-[#EFB946]/20"
                                : "bg-[#1E1E1E] text-[#AAAAAA] hover:text-white border-[#2E2E2E] hover:border-[#444]"
                        }`}
                        onClick={() => filterHandler(item.id)}
                    >
                        {item.name}
                    </button>
                ))}
            </Div>
            {/* FILTER TAGS END */}

            {/* PROJECTS GRID START */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {projectData.map((item, index) => {
                    return (
                        <Div
                            key={index}
                            className="flex flex-col bg-[#161616] rounded-[22px] border border-[#262626] hover:border-[#EFB946]/50 transition-all duration-300 overflow-hidden group shadow-lg flex-1"
                        >
                            {/* IMAGE CONTAINER */}
                            <div 
                                className="bg-black aspect-video overflow-hidden cursor-pointer relative"
                                onClick={() => onProjectClick && onProjectClick(item)}
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="transition-transform group-hover:scale-105 duration-500 ease-in-out w-full h-full object-cover object-top"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                    <div className="text-white text-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                        <div className="w-12 h-12 rounded-full bg-[#EFB946] text-black flex items-center justify-center mx-auto mb-2 shadow-lg">
                                            <FaEye size={20} />
                                        </div>
                                        <p className="text-[14px] font-semibold tracking-wide text-white uppercase font-oswald">Explore Case Study</p>
                                    </div>
                                </div>
                            </div>

                            {/* CARD CONTENT */}
                            <div className="p-5 flex flex-col flex-grow justify-between gap-4">
                                <div>
                                    <h3 
                                        className="text-[19px] 2xl:text-[22px] font-oswald uppercase text-[#EEEEEE] group-hover:text-[#EFB946] transition-colors cursor-pointer line-clamp-2 leading-snug"
                                        onClick={() => onProjectClick && onProjectClick(item)}
                                    >
                                        {item.name}
                                    </h3>
                                    <p className="text-[13px] 2xl:text-[14px] text-[#9E9E9E] mt-2 line-clamp-2 leading-relaxed font-light">
                                        {item.description}
                                    </p>
                                </div>

                                {/* TECH BADGES */}
                                {item.skills && (
                                    <div className="flex flex-wrap gap-1.5 pt-1">
                                        {item.skills.slice(0, 3).map((skill, sIdx) => (
                                            <span 
                                                key={sIdx}
                                                className="text-[11px] 2xl:text-[12px] bg-[#222222] text-[#CCCCCC] px-2.5 py-1 rounded-md border border-[#333333]"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                        {item.skills.length > 3 && (
                                            <span className="text-[11px] 2xl:text-[12px] text-[#EFB946] px-1 py-1 font-medium">
                                                +{item.skills.length - 3} more
                                            </span>
                                        )}
                                    </div>
                                )}

                                {/* ACTION LINKS */}
                                <div className="flex items-center justify-between pt-3 border-t border-[#242424] mt-auto">
                                    <button
                                        onClick={() => onProjectClick && onProjectClick(item)}
                                        className="text-[13px] font-medium text-[#EFB946] hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                                    >
                                        Read Deep Dive →
                                    </button>

                                    <div className="flex items-center gap-3">
                                        {item.codeLink && (
                                            <a
                                                href={item.codeLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="View Source Code on GitHub"
                                                title="View GitHub Repository"
                                                className="text-[#AAAAAA] hover:text-[#EFB946] transition-colors p-1"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <FaGithub size={18} />
                                            </a>
                                        )}
                                        {item.liveLink && (
                                            <a
                                                href={item.liveLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="Launch Live Preview"
                                                title="Launch Live Website"
                                                className="text-[#AAAAAA] hover:text-[#EFB946] transition-colors p-1"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <FaPlay size={15} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Div>
                    );
                })}
            </div>
            {/* PROJECTS GRID END */}
        </div>
    );
};

export default Portfolio;
