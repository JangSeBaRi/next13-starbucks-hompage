"use client";

import { windowInnerWidthRecoil } from "@/recoil/states";
import Image from "next/image";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";

const Content7 = () => {
    const windowInnerWidth = useRecoilValue(windowInnerWidthRecoil);

    const handleScroll = () => {
        const html = document.querySelector("html")!!;
        const content7El = document.querySelector("#content_7") as HTMLDivElement;
        const animation1El = content7El?.querySelector("#animation_1") as HTMLDivElement;
        if (content7El.offsetTop + content7El.offsetHeight / 3 < html.clientHeight + html.scrollTop) {
            animation1El.style.opacity = "1";
        } else {
            animation1El.style.opacity = "0";
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
            id="content_7"
            className="relative bg-[url('/static/images/reserve_bg_pc.png')] bg-no-repeat"
            style={
                windowInnerWidth > 1120
                    ? { height: 400, backgroundPosition: "50% 100%", backgroundSize: "auto 353px" }
                    : windowInnerWidth > 930
                    ? { height: 375, backgroundPosition: "53% 100%", backgroundSize: "auto 338px" }
                    : { background: "none" }
            }
        >
            <div
                className="relative max-w-[1100px] w-full mx-auto z-[1]"
                style={
                    windowInnerWidth > 1120
                        ? { padding: "135px 0 0 55px" }
                        : windowInnerWidth > 930
                        ? { padding: "115px 45px 0" }
                        : { display: "none" }
                }
            >
                <Image
                    src="/static/images/reserve_text_pc.png"
                    alt="reserve_text_pc"
                    width={windowInnerWidth > 1120 ? 588 : 510}
                    height={windowInnerWidth > 1120 ? 96 : 83.25}
                    priority={true}
                    style={{ transform: windowInnerWidth > 1120 ? "translateX(161px)" : "none" }}
                />
            </div>
            <div
                id="animation_1"
                className="opacity-0"
                style={Object.assign(
                    { transition: "opacity 3s" },
                    windowInnerWidth > 930
                        ? {
                            position: 'absolute',
                              top: 0,
                              left: "auto",
                              bottom: "auto",
                              right: "50%",
                              marginRight: -483,
                          }
                        : { position: 'static', top: 0, bottom: 0, right: "auto", width: "100%" }
                )}
            >
                {windowInnerWidth > 930 ? (
                    <Image
                        src="/static/images/reserve_visual_pc.png"
                        alt="reserve_visual_pc"
                        width={348}
                        height={374}
                        priority={true}
                    />
                ) : (
                    <Image
                        src="/static/images/reserve_visual_m.jpg"
                        alt="reserve_visual_m"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full"
                        priority={true}
                    />
                )}
            </div>
            <div
                className="absolute w-full left-0 right-0 max-w-[1100px] mx-auto"
                style={
                    windowInnerWidth > 1120
                        ? { marginTop: 33 }
                        : windowInnerWidth > 930
                        ? { marginTop: 33, padding: "0 25px" }
                        : { marginTop: 0, padding: 0, bottom: "4%" }
                }
            >
                <div
                    style={
                        windowInnerWidth > 1120
                            ? { height: 38, paddingLeft: 225, width: 583 }
                            : windowInnerWidth > 930
                            ? { height: 38, paddingLeft: 140, width: 524 }
                            : { height: "auto" }
                    }
                >
                    <a
                        className=" block mx-auto w-[125px] h-full text-black text-center border-[2px] border-black rounded-[5px] hover:bg-black hover:text-white hover:underline cursor-pointer"
                        style={Object.assign(
                            {
                                transition: "background-color 0.5s, color 0.5s",
                                fontSize: windowInnerWidth > 930 ? 15 : windowInnerWidth > 480 ? 22 : 16,
                            },
                            windowInnerWidth > 930
                                ? { width: 125, lineHeight: "34px" }
                                : { width: "40%", lineHeight: "10vw" }
                        )}
                    >
                        자세히 보기
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Content7;
