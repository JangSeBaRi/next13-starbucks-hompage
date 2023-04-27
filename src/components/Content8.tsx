"use client";

import { windowInnerWidthRecoil } from "@/recoil/states";
import Image from "next/image";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";

const Content8 = () => {
    const windowInnerWidth = useRecoilValue(windowInnerWidthRecoil);

    const handleScroll = () => {
        const html = document.querySelector("html")!!;
        const content8El = document.querySelector("#content_8") as HTMLDivElement;
        const animation1El = content8El!!.querySelector("#animation_1") as HTMLDivElement;
        const animation2El = content8El!!.querySelector("#animation_2") as HTMLDivElement;
        const animation3El = content8El!!.querySelector("#animation_3") as HTMLDivElement;
        if (content8El.offsetTop + content8El.offsetHeight * 0.7 < html.clientHeight + html.scrollTop) {
            animation1El.style.opacity = "1";
            animation2El.style.opacity = "1";
            animation3El.style.opacity = "1";
            if (windowInnerWidth > 960) {
                animation1El.style.right = "162px";
                animation2El.style.right = "168px";
                animation3El.style.right = "416px";
            } else if (windowInnerWidth > 480) {
                animation1El.style.top = "390px";
            } else {
                animation1El.style.top = "385px";
            }
        } else {
            animation1El.style.opacity = "0";
            animation2El.style.opacity = "0";
            animation3El.style.opacity = "0";
            if (windowInnerWidth > 960) {
                animation1El.style.right = 162 - 1000 + "px";
                animation2El.style.right = 168 - 1000 + "px";
                animation3El.style.right = 416 - 1000 + "px";
            } else {
                animation1El.style.top = "0px";
            }
        }
        if (content8El.offsetTop + content8El.offsetHeight * 0.83 < html.clientHeight + html.scrollTop) {
            if (windowInnerWidth <= 960) {
                if (windowInnerWidth > 480) {
                    animation2El.style.bottom = "-604px";
                } else {
                    animation2El.style.bottom = "-540px";
                }
            }
        } else {
            if (windowInnerWidth <= 960) {
                animation2El.style.bottom = "-800px";
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
            id="content_8"
            className="relative bg-[url('/static/images/store_bg.jpg')] overflow-hidden"
            style={{ height: windowInnerWidth > 960 ? 400 : 750, backgroundSize: "100% auto" }}
        >
            <div className="left-[50%] ml-[-640px] absolute top-0 w-[1280px]">
                <div
                    className="absolute bg-contain bg-[url('/static/images/221212_main_story_1.png')]"
                    style={
                        windowInnerWidth > 960
                            ? { left: 160, top: 0, width: 366, height: 312 }
                            : windowInnerWidth > 480
                            ? { left: 400, top: 0, width: 300, height: 255, backgroundSize: "100% auto" }
                            : { left: 470, top: 0, width: 240, height: 204, backgroundSize: "100% auto" }
                    }
                />
                <div
                    className="absolute bg-contain bg-[url('/static/images/221212_main_story_2.png')]"
                    style={
                        windowInnerWidth > 960
                            ? { left: 390, top: 149, width: 228, height: 228 }
                            : windowInnerWidth > 480
                            ? { left: 630, top: 149, width: 200, height: 199, backgroundSize: "100% auto" }
                            : { left: 610, top: 149, width: 170, height: 168, backgroundSize: "100% auto" }
                    }
                />
                <div
                    className="absolute bg-[url('/static/images/store_exp_img03.png')]"
                    style={
                        windowInnerWidth > 960
                            ? { left: 520, top: -60, width: 343, height: 142 }
                            : windowInnerWidth > 480
                            ? { left: 390, top: 240, width: 280, height: 115, backgroundSize: "100% auto" }
                            : { left: 480, top: 240, width: 180, height: 73, backgroundSize: "100% auto" }
                    }
                />
                <div
                    className="absolute bg-[url('/static/images/store_exp_img04.png')]"
                    // style={windowInnerWidth > 1104 ? { right: 30 } : { right: 190 }}
                    style={
                        windowInnerWidth > 1104
                            ? { right: 30, top: 298, width: 230, height: 102 }
                            : windowInnerWidth > 960
                            ? { right: 190, top: 298, width: 230, height: 102 }
                            : windowInnerWidth > 480
                            ? { left: 770, top: 675, width: 170, height: 75, backgroundSize: "100% auto" }
                            : { left: 620, top: 675, width: 170, height: 75, backgroundSize: "100% auto" }
                    }
                />
                <div
                    id="animation_1"
                    className="absolute opacity-0"
                    style={
                        windowInnerWidth > 960
                            ? {
                                  transition: "opacity 3s, right 3s",
                                  backgroundImage: "url('/static/images/221212_pc_main_story_txt_1.png')",
                                  right: 162 - 1000,
                                  top: 100,
                                  width: 374,
                                  height: 54,
                              }
                            : windowInnerWidth > 480
                            ? {
                                  transition: "opacity 1s, top 1s",
                                  backgroundImage: "url('/static/images/221213_m_main_story_txt_1.png')",
                                  right: 162 - 1000,
                                  top: 0,
                                  width: 440,
                                  height: 64,
                                  left: "50%",
                                  transform: "translateX(-50%)",
                                  backgroundSize: "100% auto",
                              }
                            : {
                                  transition: "opacity 1s, top 1s",
                                  backgroundImage: "url('/static/images/221213_m_main_story_txt_1.png')",
                                  right: 162 - 1000,
                                  top: 0,
                                  width: 312,
                                  height: 45,
                                  left: "50%",
                                  transform: "translateX(-50%)",
                                  backgroundSize: "100% auto",
                              }
                    }
                />
                <div
                    id="animation_2"
                    className="absolute opacity-0"
                    style={
                        windowInnerWidth > 960
                            ? {
                                  transition: "opacity 3s, right 3.5s",
                                  backgroundImage: "url('/static/images/221212_pc_main_story_txt_2.png')",
                                  right: 168 - 1000,
                                  top: 168,
                                  width: 366,
                                  height: 92,
                              }
                            : windowInnerWidth > 480
                            ? {
                                  transition: "opacity 1s, bottom 1s",
                                  backgroundImage: "url('/static/images/221212_m_main_story_txt_2.png')",
                                  right: 168 - 1000,
                                  bottom: -800,
                                  width: 440,
                                  height: 130,
                                  left: "50%",
                                  transform: "translateX(-50%)",
                                  backgroundSize: "100% auto",
                              }
                            : {
                                  transition: "opacity 1s, bottom 1s",
                                  backgroundImage: "url('/static/images/221212_m_main_story_txt_2.png')",
                                  right: 168 - 1000,
                                  bottom: -800,
                                  width: 300,
                                  height: 89,
                                  left: "50%",
                                  transform: "translateX(-50%)",
                                  backgroundSize: "100% auto",
                              }
                    }
                />
                <div
                    id="animation_3"
                    className="absolute border-[2px] border-[#222] rounded-[3px] leading-[34px] opacity-0"
                    style={
                        windowInnerWidth > 960
                            ? {
                                  transition: "opacity 3s, right 4s",
                                  right: 416 - 1000,
                                  top: 290,
                                  width: 121,
                                  height: 34,
                              }
                            : windowInnerWidth > 480
                            ? {
                                  transition: "opacity 3s",
                                  right: 416 - 1000,
                                  top: 640,
                                  width: 121,
                                  height: 34,
                                  left: "50%",
                                  transform: "translateX(-50%)",
                              }
                            : {
                                  transition: "opacity 3s",
                                  right: 416 - 1000,
                                  top: 560,
                                  width: 121,
                                  height: 34,
                                  left: "50%",
                                  transform: "translateX(-50%)",
                              }
                    }
                >
                    <a
                        className=" text-[#222] block h-full text-center w-full hover:underline hover:bg-[#222] hover:text-white cursor-pointer"
                        style={{ transition: "background-color 0.5s, color 0.5s" }}
                    >
                        매장 찾기
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Content8;
