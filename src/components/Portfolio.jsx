import React, { useState } from "react";

import { projects, filters } from "../data";
import Div from "./Div";
import { FaPlay, FaCode, FaEye } from "react-icons/fa";

const Portfolio = ({ onProjectClick }) => {
    const [selectedTag, setSelectedTag] = useState("all");
    const [projectData, setProjectData] = useState(projects);

    const filterHandler = (tag) => {
        setSelectedTag(tag);
        let filteredProjects = [];
        if (tag === "all") {
            filteredProjects = projects;
        } else {
            filteredProjects = projects.filter((p) => p.tags.includes(tag));
        }
        setProjectData(filteredProjects);
    };

    return (
        <div id="work" className="mt-10 relative">
            {/* SECTION HEADING START */}
            <Div className="mb-10">
                <div className="flex text-center justify-center gap-2 md:gap-0 md:flex-col text-[40px] md:text-[90px] 2xl:text-[120px] leading-[40px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase text-gradient mb-2">
                    Latest Projects
                </div>
                <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-[#CCCCCC] text-center">
                Latest Projects: Where Creativity Went on a Date with Technology and Hilarity Ensued!
                </div>
            </Div>
            {/* SECTION HEADING END */}

            {/* FILTER TAGS START */}
            <Div className="flex justify-start md:justify-center gap-[10px] mb-[50px] overflow-auto">
                {filters.map((item, index) => (
                    <div
                        key={index}
                        className={`bg-[#252525] rounded-lg py-[10px] px-[17px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] cursor-pointer whitespace-nowrap ${
                            selectedTag === item.id
                                ? "bg-[#EFB946] text-black"
                                : ""
                        }`}
                        onClick={() => filterHandler(item.id)}
                    >
                        {item.name}
                    </div>
                ))}
            </Div>
            {/* FILTER TAGS START */}

            {/* PROJECTS GRID START */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {projectData.map((item, index) => {
                    return (
                        <Div
                            key={index}
                            className="flex flex-col gap-4"
                        >
                            <div 
                                className="bg-black rounded-[20px] aspect-video overflow-hidden cursor-pointer group"
                                onClick={() => onProjectClick && onProjectClick(item)}
                            >
                                <img
                                    src={item.image}
                                    className="transition-transform group-hover:scale-110 duration-500 ease-in-out w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="text-white text-center">
                                        <FaEye size={30} className="mx-auto mb-2" />
                                        <p className="text-[16px] font-medium">View Details</p>
                                    </div>
                                </div>
                            </div>
                            <div 
                                className="text-[20px] 2xl:text-[24px] text-[#CCCCCC] text-center cursor-pointer hover:text-[#EFB946] transition-colors"
                                onClick={() => onProjectClick && onProjectClick(item)}
                            >
                                {item.name}
                            </div>
                            <div className="flex justify-center gap-4">
                                {item.codeLink && (
                                    <a
                                        href={item.codeLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#EFB946] hover:text-white transition-colors"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <FaCode size={20} />
                                    </a>
                                )}
                                {item.liveLink && (
                                    <a
                                        href={item.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#EFB946] hover:text-white transition-colors"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <FaPlay size={20} />
                                    </a>
                                )}
                            </div>
                        </Div>
                    );
                })}
            </div>
            {/* PROJECTS GRID START */}
        </div>
    );
};

export default Portfolio;
