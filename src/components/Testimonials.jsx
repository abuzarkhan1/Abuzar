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
        role: "Client",
        feedback:
            "Abuzar has been an outstanding collaborator for the past two years. Their expertise in web development, DevOps, and writing tasks has been instrumental in the success of our projects. I highly recommend their services for their professionalism, versatile skill set, and consistent delivery of high-quality work.",
    },
    {
        name: "David Miller",
        role: "Client",
        feedback:
            "Working with Abuzar on our desktop and systems projects was a great experience. He delivered high performance, took care of complex technical requirements quickly, and communicated progress clearly every step of the way.",
    },
    {
        name: "Alex Rivera",
        role: "Client",
        feedback:
            "Abuzar built our macOS utilities and audio integration with great precision. The application runs smoothly with zero lag and handles system permissions seamlessly. Very dependable and skilled engineer.",
    },
    {
        name: "Elena Rostova",
        role: "Client",
        feedback:
            "Abuzar automated our entire deployment and CI/CD workflow with Kubernetes and Docker. Rollouts are now instant, fully automated, and reliable. His attention to detail in cloud infrastructure is excellent.",
    },
    {
        name: "Marcus Vance",
        role: "Client",
        feedback:
            "Abuzar helped us solve critical real-time synchronization and database architecture challenges on our web application. Delivered ahead of schedule with clean, well-tested code.",
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
                    <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-black text-center">
                        Hear what my satisfied clients have to say!
                    </div>
                </Div>
                {/* SECTION HEADING END */}

                {/* CAROUSEL START */}
                <Div className="bg-[#F2F2F2] w-full md:w-[834px] rounded-[20px] mx-auto relative mb-[50px]">
                    <Carousel>
                        {testimonialsData.map((item, index) => (
                            <div
                                key={index}
                                className="text-black flex items-center flex-col px-[25px] md:px-[50px] py-[50px]"
                            >
                                <div className="mb-[25px]">
                                    <div className="font-bold">{item.name}</div>
                                    <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-black text-center">
                                        {item.role}
                                    </div>
                                </div>
                                <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-black text-center">
                                    {item.feedback}
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
