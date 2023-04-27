"use client";

import { windowInnerWidthRecoil } from "@/recoil/states";
import Image from "next/image";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";

const Content4 = () => {
    const windowInnerWidth = useRecoilValue(windowInnerWidthRecoil);

    const handleScroll = () => {
        const html = document.querySelector("html")!!;
        const content4El = document.querySelector("#content_4") as HTMLDivElement;
        const animation1El = content4El.querySelector("#animation_1") as HTMLDivElement;
        const animation2El = content4El.querySelector("#animation_2") as HTMLDivElement;
        if (content4El.offsetTop + content4El.offsetHeight * 0.5 < html.clientHeight + html.scrollTop) {
            animation1El.style.opacity = "1";
            animation2El.style.opacity = "1";
            if (windowInnerWidth > 960) {
                animation1El.style.left = "5%";
                animation2El.style.right = "12%";
            }
        } else {
            animation1El.style.opacity = "0";
            animation2El.style.opacity = "0";
            if (windowInnerWidth > 960) {
                animation1El.style.left = "-70%";
                animation2El.style.right = "-60%";
            }
        }
    };

    useEffect(() => {
        handleScroll();
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [windowInnerWidth]);

    return (
        <div
            id="content_4"
            className="bg-cover bg-center"
            style={{
                height:
                    windowInnerWidth > 1500
                        ? 573
                        : windowInnerWidth > 1200
                        ? 500
                        : windowInnerWidth > 960
                        ? "43vw"
                        : "165vw",
                backgroundImage:
                    windowInnerWidth > 960
                        ? "url('/static/images/2023_spring_promotion_bg.jpg')"
                        : "url('/static/images/2023_m_spring_promotion_bg_1.jpg')",
            }}
        >
            <div className="relative max-w-[1124px] mx-auto h-full">
                <div
                    id="animation_1"
                    className="absolute opacity-0"
                    style={Object.assign(
                        { transition: "opacity 3s, left 3s" },
                        windowInnerWidth > 960
                            ? { left: "-70%", top: "50%", width: "34%", transform: "translateY(-50%)" }
                            : { left: "50%", top: "4%", transform: "translateX(-50%)", width: "63%" }
                    )}
                >
                    {windowInnerWidth > 960 ? (
                        <Image
                            src="/static/images/2023_spring_promotion_img.png"
                            alt="2023_spring_promotion_img"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full"
                            priority={true}
                        />
                    ) : (
                        <Image
                            src="/static/images/2023_m_spring_promotion_img.png"
                            alt="2023_m_spring_promotion_img"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full"
                            priority={true}
                        />
                    )}
                </div>
                <div
                    id="animation_2"
                    className="absolute opacity-0"
                    style={Object.assign(
                        { transition: "opacity 3s, right 3s" },
                        windowInnerWidth > 960
                            ? { right: "-60%", top: "32.8%" }
                            : { right: "50%", top: "60%", bottom: "10.5%", transform: "translateX(50%)", width: "62%" }
                    )}
                >
                    {windowInnerWidth > 960 ? (
                        <Image
                            src="/static/images/2023_spring_promotion_txt_2.png"
                            alt="2023_spring_promotion_txt_2"
                            width={339}
                            height={100}
                            priority={true}
                        />
                    ) : (
                        <div className="w-full">
                            <Image
                                src="/static/images/2023_m_spring_promotion_txt_2.png"
                                alt="2023_m_spring_promotion_txt_2"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full"
                                priority={true}
                            />
                        </div>
                    )}
                    <div
                        style={
                            windowInnerWidth > 960
                                ? { marginTop: 39, width: 125, height: 38 }
                                : { width: "60%", height: "auto", margin: "8% auto 0" }
                        }
                    >
                        <a
                            className="inline-block w-full h-full border-[2px] border-[#e54360] text-[#e54360] text-center leading-[34px] cursor-pointer hover:text-white hover:underline hover:bg-[#e54360] duration-500"
                            style={
                                windowInnerWidth > 960
                                    ? { fontSize: 15, borderRadius: 5 }
                                    : windowInnerWidth > 480
                                    ? { lineHeight: "10vw", fontSize: 22, fontWeight: "bold", borderRadius: 3 }
                                    : { fontSize: 16 }
                            }
                        >
                            자세히 보기
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content4;
