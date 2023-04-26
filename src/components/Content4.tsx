"use client";

import { windowInnerWidthRecoil } from "@/recoil/states";
import Image from "next/image";
import { useRecoilValue } from "recoil";

const Content4 = () => {
    const windowInnerWidth = useRecoilValue(windowInnerWidthRecoil);

    return (
        <div
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
                    className="absolute"
                    style={
                        windowInnerWidth > 960
                            ? { left: "5%", top: "50%", width: "34%", transform: "translateY(-50%)" }
                            : { left: "50%", top: "4%", transform: "translateX(-50%)", width: "63%" }
                    }
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
                    className="absolute"
                    style={
                        windowInnerWidth > 960
                            ? { right: "12%", top: "32.8%" }
                            : { right: "50%", top: "60%", bottom: "10.5%", transform: "translateX(50%)", width: "62%" }
                    }
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
                            className="inline-block w-full h-full border-[2px] border-[#e54360] text-[#e54360] text-center leading-[34px] cursor-pointer hover:text-white hover:underline hover:bg-[#e54360] duration-300"
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
