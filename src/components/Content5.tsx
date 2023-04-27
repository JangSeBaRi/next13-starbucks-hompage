"use client";

import { windowInnerWidthRecoil } from "@/recoil/states";
import Image from "next/image";
import { useRecoilValue } from "recoil";

const Content5 = () => {
    const windowInnerWidth = useRecoilValue(windowInnerWidthRecoil);

    return (
        <div
            className="relative bg-[url('/static/images/230125_pc_reserve_bg.jpg')] bg-cover bg-center"
            style={{ height: windowInnerWidth > 1120 ? 400 : windowInnerWidth > 930 ? 357 : "100%" }}
        >
            {windowInnerWidth > 930 ? (
                <>
                    <div className="relative pt-[52px] max-w-[1080px] w-full mx-auto pl-[150px] z-[1]">
                        <div className="min-w-[329px]">
                            <Image
                                src="/static/images/230125_pc_reserve_logo.png"
                                alt="230125_pc_reserve_logo"
                                width={329}
                                height={177}
                                priority={true}
                            />
                        </div>
                        <div className="w-[329px] flex flex-col items-center mt-[39px]">
                            <a className="w-[125px] h-[38px] border-[2px] border-white rounded-[5px] text-white text-[15px] text-center leading-[34px] cursor-pointer hover:text-[#111111] hover:underline hover:bg-white duration-500">
                                자세히 보기
                            </a>
                        </div>
                    </div>
                    <div className="absolute top-0 left-0 w-full flex flex-col items-center">
                        <div className="min-w-[2000px]">
                            <Image
                                src="/static/images/230127_reserve_coffee_bg.png"
                                alt="230127_reserve_coffee_bg"
                                width={2000}
                                height={400}
                                priority={true}
                            />
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="w-full">
                        <Image
                            src="/static/images/230125_m_reserve_bg.jpg"
                            alt="230125_m_reserve_bg"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full"
                            priority={true}
                        />
                    </div>
                    <div className="absolute bottom-[8%] left-[50%] -translate-x-1/2 w-[40%] h-[7%]">
                        <a
                            className="inline-block w-full h-full border-[2px] border-white rounded-[3px] text-white text-center leading-[11vw] cursor-pointer hover:text-[#111111] hover:underline hover:bg-white duration-500"
                            style={{
                                fontSize: windowInnerWidth > 480 ? 22 : 16,
                            }}
                        >
                            자세히 보기
                        </a>
                    </div>
                </>
            )}
        </div>
    );
};

export default Content5;
