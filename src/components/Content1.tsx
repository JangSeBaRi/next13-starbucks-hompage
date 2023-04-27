"use client";

import { loadingRecoil, windowInnerWidthRecoil } from "@/recoil/states";
import Image from "next/image";
import { useRecoilValue } from "recoil";

const Content1 = () => {
    const windowInnerWidth = useRecoilValue(windowInnerWidthRecoil);
    const loading = useRecoilValue(loadingRecoil);
    return (
        <div
            className="relative bg-[url('/static/images/2023_m_spring2_promotion_bg.jpg')] bg-cover"
            style={windowInnerWidth > 960 ? { height: "32vw" } : { height: "264vw" }}
        >
            <div
                className={`absolute opacity-0 ${!loading && "animate-fade-in"}`}
                style={Object.assign(
                    { animationDelay: "0s" },
                    windowInnerWidth > 960
                        ? { top: "37%", left: "13.3%", width: "19%" }
                        : { top: "6%", left: "11.6%", width: "46%" }
                )}
            >
                <Image
                    src="/static/images/2023_m_spring2_top_logo.png"
                    alt="2023_m_spring2_top_logo"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full"
                    priority={true}
                />
            </div>
            <div
                className={`absolute opacity-0 ${!loading && "animate-fade-in"}`}
                style={
                    windowInnerWidth > 960
                        ? { top: "14%", left: "34.8%", width: "18%", animationDelay: "1s" }
                        : { top: "15.6%", left: "12%", width: "75%", animationDelay: "0.5s" }
                }
            >
                {windowInnerWidth > 960 ? (
                    <Image
                        src="/static/images/2023_spring2_top_drink2.png"
                        alt="2023_spring2_top_drink2"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full"
                        priority={true}
                    />
                ) : (
                    <Image
                        src="/static/images/2023_m_spring2_top_drink1.png"
                        alt="2023_m_spring2_top_drink1"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full"
                        priority={true}
                    />
                )}
            </div>
            <div
                className={`absolute opacity-0 ${!loading && "animate-fade-in"}`}
                style={
                    windowInnerWidth > 960
                        ? { top: "10.8%", left: "49.5%", width: "15.8%", animationDelay: "0.5s" }
                        : { top: "41%", left: "15.8%", width: "84.2%", animationDelay: "1s" }
                }
            >
                {windowInnerWidth > 960 ? (
                    <Image
                        src="/static/images/2023_spring2_top_drink1.png"
                        alt="2023_spring2_top_drink1"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full"
                        priority={true}
                    />
                ) : (
                    <Image
                        src="/static/images/2023_m_spring2_top_drink2.png"
                        alt="2023_m_spring2_top_drink2"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full"
                        priority={true}
                    />
                )}
            </div>
            <div
                className={`absolute opacity-0 ${!loading && "animate-fade-in"}`}
                style={Object.assign(
                    { animationDelay: "1.5s" },
                    windowInnerWidth > 960
                        ? { top: "15.8%", right: "20.8%", width: "18.2%" }
                        : { top: "62.5%", left: "11%", width: "73%" }
                )}
            >
                {windowInnerWidth > 960 ? (
                    <Image
                        src="/static/images/2023_spring2_top_drink3.png"
                        alt="2023_spring2_top_drink3"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full"
                        priority={true}
                    />
                ) : (
                    <Image
                        src="/static/images/2023_m_spring2_top_drink3.png"
                        alt="2023_m_spring2_top_drink3"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full"
                        priority={true}
                    />
                )}
            </div>
            <div
                className={`absolute text-center opacity-0 ${!loading && "animate-fade-in"}`}
                style={Object.assign(
                    { animationDelay: "2s" },
                    windowInnerWidth > 960
                        ? { top: "56%", left: "13.3%", width: "19%" }
                        : { top: "90%", left: "50%", width: "100%", transform: "translateX(-50%)" }
                )}
            >
                <button
                    className="whitespace-nowrap truncate text-[#005224] border-[2px] border-[#014938] hover:bg-[#014938] hover:underline hover:text-white"
                    style={Object.assign(
                        {
                            transition: "background-color 0.5s, color 0.5s",
                            fontSize:
                                windowInnerWidth > 960
                                    ? 15
                                    : windowInnerWidth > 500
                                    ? 22
                                    : windowInnerWidth > 380
                                    ? 16
                                    : 14,
                        },
                        windowInnerWidth > 960
                            ? { width: "60%", padding: "8px", borderRadius: 5 }
                            : { width: "36%", fontWeight: "bold", lineHeight: "10vw", borderRadius: 3 }
                    )}
                >
                    자세히 보기
                </button>
            </div>

            <div
                className="fixed z-[11]"
                style={
                    windowInnerWidth > 1400
                        ? { top: 154, left: "54.5%", right: "1%", width: 140, marginLeft: 485 }
                        : windowInnerWidth > 960
                        ? { top: 154, left: "auto", right: "1%", width: 140, marginLeft: 485 }
                        : { top: 108, right: "1.8%", width: "25.7%" }
                }
            >
                {windowInnerWidth > 960 ? (
                    <>
                        <Image
                            src="/static/images/gq5gfg_20230407112627089.png"
                            alt="gq5gfg_20230407112627089"
                            width={140}
                            height={96}
                            priority={true}
                        />
                        <Image
                            src="/static/images/Mn0ecH_20220711153123340.png"
                            alt="Mn0ecH_20220711153123340"
                            width={140}
                            height={96}
                            priority={true}
                        />
                    </>
                ) : (
                    <>
                        {" "}
                        <Image
                            src="/static/images/gq5gfg_20230407112635659.png"
                            alt="gq5gfg_20230407112635659"
                            width={241}
                            height={168}
                            priority={true}
                        />
                        <Image
                            src="/static/images/Mn0ecH_20220711153127215.png"
                            alt="Mn0ecH_20220711153127215"
                            width={241}
                            height={168}
                            priority={true}
                        />
                    </>
                )}
            </div>
        </div>
    );
};

export default Content1;
