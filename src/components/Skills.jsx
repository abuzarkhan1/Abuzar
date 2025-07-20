import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import Wrapper from "./Wrapper";
import SkillIcon from "./SkillIcon";
import Service from "./Service";
import Portfolio from "./Portfolio";
import Achievements from "./Achievements";
import ProjectDetails from "./ProjectDetails";
import Div from "./Div";

// Import your assets here
import tail from "../assets/tail.svg";
import boot from "../assets/boot.svg";
import sk8 from "../assets/sk-8.png";
import sk9 from "../assets/sk-9.png";
import sk10 from "../assets/sk-10.png";
import sk11 from "../assets/sk-11.png";

import sk12 from "../assets/type.svg";
import sk13 from "../assets/redux.svg";
import sk14 from "../assets/next.svg";
import ex from "../assets/ex.png";

import post from "../assets/postman.svg";
import jira from "../assets/jira.svg";
import redis from "../assets/redis.svg";

import git from "../assets/git.svg";
import github from "../assets/github.svg";
import docker from "../assets/docker.svg";
import trivy from "../assets/trivy.png";
import sonar from "../assets/sonarqube.svg";
import Kubernetes from "../assets/kubernets.svg";
import aws from "../assets/aws.svg";
import pro from "../assets/prometheus.svg";
import graf from "../assets/grafana.svg";







import sknode from "../assets/node.png";
import skmongo from "../assets/mongo.png";
import skmysql from "../assets/mysql.png";
import skpython from "../assets/python.png";
import pattern from "../assets/heading-pattern.png";
import pe1 from "../assets/sec-3-p-e-1.png";
import pe2 from "../assets/sec-3-p-e-2.png";
import pe3 from "../assets/sec-3-p-e-3.png";

const Skills = () => {
    const [selectedProject, setSelectedProject] = React.useState(null);
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 1500], [1000, 0], { clamp: false });
    const y2 = useTransform(scrollY, [0, 2200], [1500, 0], { clamp: false });
    const y3 = useTransform(scrollY, [0, 2700], [2000, 0], { clamp: false });

    const handleProjectClick = (project) => {
        setSelectedProject(project);
        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden';
    };

    const handleBackToProjects = () => {
        setSelectedProject(null);
        // Restore body scroll when modal is closed
        document.body.style.overflow = 'unset';
    };

    return (
        <div
            id="skills"
            className="bg-[#111111] py-[50px] md:py-[100px] relative overflow-hidden"
        >
            {/* BACKGROUND ELEMENTS START */}
            <div className="sec-3-bg-gradient-1" />
            <div className="sec-3-bg-gradient-2" />
            <motion.img className="sec-3-p-e-1" style={{ y: y1 }} src={pe1} />
            <motion.img className="sec-3-p-e-2" style={{ y: y2 }} src={pe2} />
            <motion.img className="sec-3-p-e-3" style={{ y: y3 }} src={pe3} />
            {/* BACKGROUND ELEMENTS END */}
            <Wrapper>
                {/* FRONTEND SKILLS START */}
                <h2 className="text-[28px] 2xl:text-[34px] text-[#EFB946] uppercase mb-6">Frontend</h2>
                <Div className="grid grid-cols-4 gap-3 md:grid-cols-11 relative mb-10">
                    <SkillIcon path={sk8} />
                    <SkillIcon path={sk9} />
                    <SkillIcon path={tail} />
                    <SkillIcon path={boot} />
                    <SkillIcon path={sk10} />
                    <SkillIcon path={sk12} />
                    <SkillIcon path={sk11} />
                    <SkillIcon path={sk14} />
                    <SkillIcon path={sk13} />



                </Div>
                {/* FRONTEND SKILLS END */}

                {/* BACKEND SKILLS START */}
                <h2 className="text-[28px] 2xl:text-[34px] text-[#EFB946] uppercase mb-6">Backend</h2>
                <Div className="grid grid-cols-4 gap-3 md:grid-cols-11 relative mb-10">
                    <SkillIcon path={sknode} />
                    <SkillIcon path={ex} />

                    <SkillIcon path={skpython} />
                    <SkillIcon path={skmongo} />
                    <SkillIcon path={skmysql} />
                    <SkillIcon path={redis} />


                    <SkillIcon path={jira} />
                    <SkillIcon path={post} />


                    </Div>
                {/* BACKEND SKILLS END */}

                {/* DEPLOYMENT SKILLS START */}
                <h2 className="text-[28px] 2xl:text-[34px] text-[#EFB946] uppercase mb-6">Deployment</h2>
                <Div className="grid grid-cols-4 gap-3 md:grid-cols-11 relative mb-10">
                    
                <SkillIcon path={git} />
                <SkillIcon path={github} />
                <SkillIcon path={docker} />
                <SkillIcon path={trivy} />
                <SkillIcon path={sonar} />
                <SkillIcon path={Kubernetes} />
                <SkillIcon path={pro} />
                <SkillIcon path={graf} />
                <SkillIcon path={aws} />




                    {/* Add any additional deployment skills here */}
                </Div>
                {/* DEPLOYMENT SKILLS END */}

                {/* SERVICES SECTION START */}
                <div className="flex items-end justify-between flex-wrap-reverse py-[50px] md:py-[100px] relative">
                    {/* SERVICES START */}
                    <div className="md:max-w-[65%] flex flex-col gap-6 md:gap-10">
                        <Service
                            num="1"
                            title="Web Solution Services"
                            desc="I specialize in crafting innovative web solutions tailored to your needs. Leveraging the power of cutting-edge technologies and stacks such as React, Node.js, Express, and MongoDB, I am well-equipped to deliver seamless and efficient systems. Whether you require a dynamic CRM system, a comprehensive ERP solution, or any other web-based application, I have the expertise to bring your vision to life."
                            data={[
                                "MERN Stack",
                                "React",
                                "Node",
                                "Express",
                                "TypeScript",
                                "Mysql",
                                "Redis",
                            ]}
                        />
                        <Service
                            num="2"
                            title="DevOps"
                            desc="I specialize in DevOps practices, leveraging technologies such as Linux, Git, CI/CD, Jenkins, Docker, Kubernetes, Terraform, and Ansible. My expertise allows me to streamline development and deployment processes, ensuring efficient, reliable, and scalable systems."
                            data={[
                                "Linux",
                                "Git",
                                "CI/CD",
                                "Jenkins",
                                "Docker",
                                "Kubernetes",
                                "Terraform",
                                "Prometheus",
                                "Grafana",
                            ]}
                        />
                    </div>
                    {/* SERVICES END */}

                    {/* SECTION HEADING START */}
                    <div className="flex flex-wrap justify-center gap-2 md:gap-0 md:flex-col text-[40px] md:text-[90px] 2xl:text-[120px] leading-[40px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase text-gradient mb-10 md:mb-0 md:sticky top-2">
                        <span>Solving</span>
                        <span>Problems</span>
                        <span className="flex items-center gap-2">
                            Through
                            <img
                                src={pattern}
                                className="block md:hidden w-[80px] mt-1"
                            />
                        </span>
                        <span className="flex items-center gap-4">
                            Good{" "}
                            <img
                                src={pattern}
                                className="hidden md:block md:w-[140px] 2xl:w-[190px] mt-3"
                            />
                        </span>
                        <span>Services</span>
                    </div>
                    {/* SECTION HEADING END */}
                </div>
                {/* SERVICES SECTION END */}

                <Portfolio onProjectClick={handleProjectClick} />
                <Achievements />
            </Wrapper>
            
            {/* PROJECT DETAILS MODAL */}
            <ProjectDetails 
                project={selectedProject} 
                onBack={handleBackToProjects}
                isOpen={!!selectedProject}
            />
        </div>
    );
};

export default Skills;
