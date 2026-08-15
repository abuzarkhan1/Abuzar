import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import Wrapper from "./Wrapper";
import SkillIcon from "./SkillIcon";
import Service from "./Service";
import Achievements from "./Achievements";
import Div from "./Div";
import Certificates from "./Certificates";

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
import docker from "../assets/docker.svg";
import trivy from "../assets/trivy.png";
import sonar from "../assets/sonarqube.svg";
import Kubernetes from "../assets/kubernets.svg";
import aws from "../assets/aws.svg";
import pro from "../assets/prometheus.svg";
import graf from "../assets/grafana.svg";
import github from "../assets/github.svg";

import sknode from "../assets/node.png";
import skmongo from "../assets/mongo.png";
import skmysql from "../assets/mysql.png";
import skpython from "../assets/python.png";
import pattern from "../assets/heading-pattern.png";
import pe1 from "../assets/sec-3-p-e-1.png";
import pe2 from "../assets/sec-3-p-e-2.png";
import pe3 from "../assets/sec-3-p-e-3.png";

import nginx from "../assets/nginx.svg";
import fastapi from "../assets/fastapi.svg";
import flask from "../assets/flask.svg";
import golang from "../assets/golang.svg";
import azure from "../assets/azure.svg";
import gcp from "../assets/gcp.svg";
import oracle from "../assets/oracle.svg";
import postgresql from "../assets/postgresql.svg";
import githubactions from "../assets/githubactions.svg";
import jenk from "../assets/jenk.svg";

const Skills = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 1500], [1000, 0], { clamp: false });
    const y2 = useTransform(scrollY, [0, 2200], [1500, 0], { clamp: false });
    const y3 = useTransform(scrollY, [0, 2700], [2000, 0], { clamp: false });

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
                <h2 className="text-[28px] 2xl:text-[34px] text-[#EFB946] uppercase mb-6 font-oswald tracking-wide">Frontend</h2>
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
                <h2 className="text-[28px] 2xl:text-[34px] text-[#EFB946] uppercase mb-6 font-oswald tracking-wide">Backend & Systems</h2>
                <Div className="grid grid-cols-4 gap-3 md:grid-cols-11 relative mb-10">
                    <SkillIcon path={sknode} />
                    <SkillIcon path={ex} />
                    <SkillIcon path={skpython} />
                    <SkillIcon path={fastapi} />
                    <SkillIcon path={flask} />
                    <SkillIcon path={golang} />
                    <SkillIcon path={skmongo} />
                    <SkillIcon path={skmysql} />
                    <SkillIcon path={postgresql} />
                    <SkillIcon path={redis} />
                    <SkillIcon path={jira} />
                    <SkillIcon path={post} />
                </Div>
                {/* BACKEND SKILLS END */}

                {/* DEPLOYMENT SKILLS START */}
                <h2 className="text-[28px] 2xl:text-[34px] text-[#EFB946] uppercase mb-6 font-oswald tracking-wide">DevOps & Cloud</h2>
                <Div className="grid grid-cols-4 gap-3 md:grid-cols-11 relative mb-10">
                    <SkillIcon path={git} />
                    <SkillIcon path={github} />
                    <SkillIcon path={githubactions} />
                    <SkillIcon path={jenk} />
                    <SkillIcon path={docker} />
                    <SkillIcon path={trivy} />
                    <SkillIcon path={sonar} />
                    <SkillIcon path={Kubernetes} />
                    <SkillIcon path={pro} />
                    <SkillIcon path={graf} />
                    <SkillIcon path={aws} />
                    <SkillIcon path={azure} />
                    <SkillIcon path={gcp} />
                    <SkillIcon path={oracle} />
                    <SkillIcon path={nginx} />
                </Div>
                {/* DEPLOYMENT SKILLS END */}

                {/* CERTIFICATES START */}
                <div className="w-full relative py-[50px]">
                    <Certificates />
                </div>
                {/* CERTIFICATES END */}

                {/* SERVICES SECTION START */}
                <div className="flex items-end justify-between flex-wrap-reverse py-[50px] md:py-[100px] relative">
                    {/* SERVICES START */}
                    <div className="md:max-w-[65%] flex flex-col gap-6 md:gap-10">
                        <Service
                            num="1"
                            title="Systems & Desktop Engineering"
                            desc="I architect high-performance, local-first desktop applications and systems utilities. Leveraging Rust, Tauri v2, Electron, native Swift/C hooks, and WebGL GPU terminal emulation, I deliver sub-10ms latency, extreme memory efficiency, and native OS integration."
                            data={[
                                "Rust",
                                "Tauri v2",
                                "Electron",
                                "Swift",
                                "Model Context Protocol",
                                "xterm.js WebGL",
                                "SQLite",
                            ]}
                        />
                        <Service
                            num="2"
                            title="Full-Stack Web Architecture"
                            desc="I design and build resilient, modern web platforms from interactive frontends to scalable microservices. Utilizing Next.js 14, React 19, TypeScript, Node.js, PostgreSQL, Prisma, Redis, and WebSockets, I deliver seamless user experiences and robust backend APIs."
                            data={[
                                "Next.js 14 / React 19",
                                "TypeScript",
                                "Node.js & Express",
                                "PostgreSQL & Prisma",
                                "MongoDB",
                                "Redis & WebSockets",
                                "Tailwind CSS",
                            ]}
                        />
                        <Service
                            num="3"
                            title="DevOps & Cloud Infrastructure"
                            desc="I implement production-ready CI/CD pipelines, GitOps workflows, container orchestration, and real-time observability. With Docker, Kubernetes, Jenkins, ArgoCD, Prometheus, and Grafana, I ensure high availability and automated continuous delivery."
                            data={[
                                "Linux & Git",
                                "Docker & Kubernetes",
                                "CI/CD & Jenkins",
                                "ArgoCD & GitOps",
                                "Prometheus & Grafana",
                                "AWS & Cloud Deployments",
                                "SonarQube & Trivy",
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
                                alt=""
                            />
                        </span>
                        <span className="flex items-center gap-4">
                            Good{" "}
                            <img
                                src={pattern}
                                className="hidden md:block md:w-[140px] 2xl:w-[190px] mt-3"
                                alt=""
                            />
                        </span>
                        <span>Services</span>
                    </div>
                    {/* SECTION HEADING END */}
                </div>
                {/* SERVICES SECTION END */}

                <Achievements />
            </Wrapper>
        </div>
    );
};

export default Skills;
