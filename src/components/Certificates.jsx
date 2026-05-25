import React from "react";
import Div from "./Div";
import oracleLogo from "../assets/oracle.svg";

const Certificates = () => {
    return (
        <div className="w-full">
            <h2 className="text-[28px] 2xl:text-[34px] text-[#EFB946] uppercase mb-6">
                Certifications
            </h2>
            <div className="flex flex-col gap-10">
                <Div className="text-white border-b border-[#333333] flex flex-col gap-2 md:gap-4 2xl:gap-5 pb-7">
                    <div className="text-[28px] 2xl:text-[34px] text-[#EFB946] uppercase flex items-center gap-4">
                        <img src={oracleLogo} alt="Oracle" className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]" />
                        <span>Oracle Cloud Infrastructure 2025 Certified Foundations Associate</span>
                    </div>
                    
                    <div className="flex gap-[10px] flex-wrap mt-2">
                        <div className="bg-[#252525] rounded-lg py-[10px] px-[17px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px]">
                            Issuer: Oracle
                        </div>
                        <div className="bg-[#252525] rounded-lg py-[10px] px-[17px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px]">
                            Score: 90%
                        </div>
                    </div>

                    <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-[#CCCCCC] mt-2">
                        <a 
                            href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=BC2F7041CB555461C2D1E0234AB978CC12488B0347B29D0FD5D4FE2853886482" 
                            target="_blank" 
                            rel="noreferrer"
                            className="text-[#EFB946] hover:underline"
                        >
                            View Credential
                        </a>
                    </div>
                </Div>
            </div>
        </div>
    );
};

export default Certificates;
