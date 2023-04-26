"use client";

import { windowInnerWidthRecoil } from "@/recoil/states";
import Image from "next/image";
import { useRecoilValue } from "recoil";

const Content6 = () => {
    const windowInnerWidth = useRecoilValue(windowInnerWidthRecoil);

    return (
        <div
            className="relative"
            style={
                windowInnerWidth > 960
                    ? {
                          height: 800,
                          backgroundImage: 'url("/static/images/2023_spring2_pick_bg.jpg")',
                          backgroundSize: "auto 87%",
                          backgroundColor: "#45434c",
                          backgroundAttachment: "fixed",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "bottom",
                      }
                    : {
                          height: "232vw",
                          backgroundImage: 'url("/static/images/2023_m_spring2_pick_bg.jpg")',
                          backgroundSize: "100% auto",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                      }
            }
        >
            <div className="relative h-full max-w-[1124px] mx-auto">
                <div
                    className="absolute left-[450px]"
                    style={
                        windowInnerWidth > 1550
                            ? { width: "80%", top: 70 }
                            : windowInnerWidth > 1100
                            ? { width: "60%", top: "50%", transform: "translateY(-50%)" }
                            : windowInnerWidth > 960
                            ? { width: "52%", top: "50%", transform: "translateY(-50%)" }
                            : { position: "static", paddingTop: 150, width: "90%", margin: "0 auto" }
                    }
                >
                    <Image
                        src="/static/images/2023_spring2_pick_img.png"
                        alt="2023_spring2_pick_img"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full"
                        priority={true}
                    />
                </div>
                {windowInnerWidth > 960 ? (
                    <>
                        <div className="absolute top-[370px] left-0">
                            <Image
                                src="/static/images/2023_pick_text2_img.png"
                                alt="2023_pick_text2_img"
                                width={353}
                                height={153}
                                priority={true}
                            />
                        </div>
                        <div className="absolute bg-[url('/static/images/fav_prod_txt01.png')] bg-no-repeat w-[258px] h-[204px] top-[120px] left-[100px]" />
                        <div className="w-[125px] h-[38px] border-[2px] rounded-[3px] border-white absolute left-[227px] top-[570px]">
                            <a
                                className="inline-block text-[15px] w-full h-full leading-[34px] text-center text-white hover:text-[#111111] hover:bg-white hover:underline cursor-pointer"
                                style={{ transition: "background-color 0.3s, color 0.3s" }}
                            >
                                자세히 보기
                            </a>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="absolute top-[70%] left-[50%] translate-x-[-50%] w-[55%]">
                            <Image
                                src="/static/images/mobile_menu_txt01.png"
                                alt="mobile_menu_txt01"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full"
                                priority={true}
                            />
                        </div>
                        <div className="absolute top-[77%] left-[50%] translate-x-[-50%] w-[60%]">
                            <Image
                                src="/static/images/mobile_menu_txt02.png"
                                alt="mobile_menu_txt02"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full"
                                priority={true}
                            />
                        </div>
                        <div className="absolute bottom-[8%] left-[50%] -translate-x-1/2 w-[40%] h-[5%]">
                            <a
                                className="inline-block w-full h-full border-[2px] border-white rounded-[3px] text-white text-center leading-[11vw] cursor-pointer hover:text-[#111111] hover:underline hover:bg-white"
                                style={{
                                    fontSize: windowInnerWidth > 480 ? 22 : 16,
                                    transition: "background-color 0.3s, color 0.3s"
                                }}
                            >
                                자세히 보기
                            </a>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Content6;
