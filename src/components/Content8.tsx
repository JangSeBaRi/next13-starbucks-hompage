"use client";

import { windowInnerWidthRecoil } from "@/recoil/states";
import Image from "next/image";
import { useRecoilValue } from "recoil";

const Content8 = () => {
    const windowInnerWidth = useRecoilValue(windowInnerWidthRecoil);

    return (
        <div
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
                    className="absolute"
                    style={
                        windowInnerWidth > 960
                            ? {
                                  backgroundImage: "url('/static/images/221212_pc_main_story_txt_1.png')",
                                  right: 162,
                                  top: 100,
                                  width: 374,
                                  height: 54,
                              }
                            : windowInnerWidth > 480
                            ? {
                                  backgroundImage: "url('/static/images/221213_m_main_story_txt_1.png')",
                                  right: 162,
                                  top: 390,
                                  width: 440,
                                  height: 64,
                                  left: "50%",
                                  transform: "translateX(-50%)",
                                  backgroundSize: "100% auto",
                              }
                            : {
                                  backgroundImage: "url('/static/images/221213_m_main_story_txt_1.png')",
                                  right: 162,
                                  top: 385,
                                  width: 312,
                                  height: 45,
                                  left: "50%",
                                  transform: "translateX(-50%)",
                                  backgroundSize: "100% auto",
                              }
                    }
                />
                <div
                    className="absolute"
                    style={
                        windowInnerWidth > 960
                            ? {
                                  backgroundImage: "url('/static/images/221212_pc_main_story_txt_2.png')",
                                  right: 168,
                                  top: 168,
                                  width: 366,
                                  height: 92,
                              }
                            : windowInnerWidth > 480
                            ? {
                                  backgroundImage: "url('/static/images/221212_m_main_story_txt_2.png')",
                                  right: 168,
                                  top: 474,
                                  width: 440,
                                  height: 130,
                                  left: "50%",
                                  transform: "translateX(-50%)",
                                  backgroundSize: "100% auto",
                              }
                            : {
                                  backgroundImage: "url('/static/images/221212_m_main_story_txt_2.png')",
                                  right: 168,
                                  top: 450,
                                  width: 300,
                                  height: 89,
                                  left: "50%",
                                  transform: "translateX(-50%)",
                                  backgroundSize: "100% auto",
                              }
                    }
                />
                <div
                    className="absolute border-[2px] border-[#222] rounded-[3px] leading-[34px]"
                    style={
                        windowInnerWidth > 960
                            ? { right: 408, top: 290, width: 121, height: 34 }
                            : windowInnerWidth > 480
                            ? {
                                  right: 408,
                                  top: 640,
                                  width: 121,
                                  height: 34,
                                  left: "50%",
                                  transform: "translateX(-50%)",
                              }
                            : {
                                  right: 408,
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
