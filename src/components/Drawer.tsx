"use client";
import { drawerList } from "@/constant/drawer";
import { openDrawerRecoil, windowInnerWidthRecoil } from "@/recoil/states";
import Image from "next/image";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

const Drawer = () => {
    const windowInnerWidth = useRecoilValue(windowInnerWidthRecoil);
    const [openDrawer, setOpenDrawer] = useRecoilState(openDrawerRecoil);
    
    useEffect(() => {
        const drawerEl = document.querySelector("#drawer")!! as HTMLDivElement;
        if (openDrawer) {
            drawerEl.style.transition = "right 0.3s";
            setTimeout(() => {
                drawerEl.style.transition = "none";
            }, 300);
        } else {
            drawerEl.style.transition = "right 0.4s";
            setTimeout(() => {
                drawerEl.style.transition = "none";
            }, 400);
        }
    }, [openDrawer]);

    useEffect(() => {
        windowInnerWidth > 960 && setOpenDrawer(false);
    }, [windowInnerWidth]);

    return (
        <>
            <div
                className="fixed top-0 left-0 w-screen h-screen bg-black/70 z-[20]"
                style={{ display: openDrawer ? "block" : "none" }}
            />
            <div
                id="drawer"
                className="fixed top-0 w-[75vw] h-screen z-[21]"
                style={{
                    right: openDrawer ? 0 : "calc(-75vw + -60px)",
                }}
            >
                <div className="relative w-full h-full">
                    <div className="overflow-y-scroll h-full bg-[#111111]">
                        <div className="h-[70px] bg-[#2d2926] flex items-center justify-center px-5 gap-2 border-b-[1px] border-b-[#222]">
                            <div className="grow h-[30px] max-w-[300px] shrink bg-red-300">
                                <input
                                    type="text"
                                    className="rounded-sm pl-3 text-[14px] w-full h-full truncate"
                                    placeholder="검색어를 입력하세요."
                                />
                            </div>
                            <button className="text-[14px] w-[70px] h-[30px] bg-[#666666] rounded-sm flex items-center justify-center text-white">
                                Search
                            </button>
                        </div>
                        <ul>
                            {drawerList.map((firstItem) => {
                                const { label: firstLabel, items: secondItems } = firstItem;
                                return (
                                    <li
                                        key={firstLabel}
                                        className="depth_1"
                                        style={{ borderBottom: "1px solid #333" }}
                                        onClick={(e) => {
                                            if (secondItems) {
                                                const { currentTarget } = e;
                                                const depth1ArrowEl = currentTarget.querySelector(
                                                    ".depth_1_arrow"
                                                ) as HTMLDivElement;
                                                if (currentTarget.dataset.open === "false") {
                                                    depth1ArrowEl.style.transform = "rotate(-180deg)";
                                                    currentTarget.setAttribute("data-open", "true");
                                                    currentTarget
                                                        .querySelectorAll(".depth_2")
                                                        .forEach((li: any, liIdx: number) => {
                                                            if (li.dataset.open === "false") {
                                                                li.style.height = "70px";
                                                            } else {
                                                                li.style.height =
                                                                    +li.dataset.childrenLength * 40 + 70 + "px";
                                                            }
                                                            if (liIdx !== 0) {
                                                                setTimeout(() => {
                                                                    li.style.borderTop = "1px solid #333";
                                                                }, 100);
                                                            }
                                                        });
                                                } else {
                                                    depth1ArrowEl.style.transform = "rotate(0)";
                                                    currentTarget.setAttribute("data-open", "false");
                                                    currentTarget.querySelectorAll(".depth_2").forEach((li: any) => {
                                                        li.style.height = "0";
                                                        setTimeout(() => {
                                                            li.style.borderTop = "none";
                                                        }, 200);
                                                    });
                                                }
                                            }
                                        }}
                                        data-open="false"
                                    >
                                        <button
                                            className="w-full h-[70px] flex items-center justify-between px-5 gap-5 group"
                                            style={{
                                                backgroundColor: firstLabel === "My Starbucks" ? "#2d2926" : "#111",
                                            }}
                                        >
                                            <span className="truncate text-white group-focus:underline">
                                                {firstLabel}
                                            </span>
                                            {secondItems && (
                                                <div className="min-w-[20px] depth_1_arrow duration-300">
                                                    <Image
                                                        src="/static/images/mob_gnb_arrow_down_w.png"
                                                        width={20}
                                                        height={20}
                                                        alt="mob_gnb_arrow_down_w"
                                                    />
                                                </div>
                                            )}
                                        </button>
                                        {secondItems && (
                                            <ul>
                                                {secondItems.map((secondItem) => {
                                                    const { label: secondLabel, items: thirdItems } = secondItem;
                                                    return (
                                                        <li
                                                            key={secondLabel}
                                                            className="h-0 overflow-hidden depth_2"
                                                            style={{ transition: "height 0.3s" }}
                                                            // style={{borderTop: '1px solid #333'}}
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                if (thirdItems) {
                                                                    const { currentTarget } = e;
                                                                    const depth2ArrowEl = currentTarget.querySelector(
                                                                        ".depth_2_arrow"
                                                                    ) as HTMLDivElement;
                                                                    if (currentTarget.dataset.open === "false") {
                                                                        depth2ArrowEl.style.transform =
                                                                            "rotate(-180deg)";
                                                                        currentTarget.setAttribute("data-open", "true");
                                                                        currentTarget.style.height =
                                                                            +currentTarget.dataset.childrenLength!! *
                                                                                40 +
                                                                            70 +
                                                                            "px";
                                                                        currentTarget
                                                                            .querySelectorAll(".depth_3")
                                                                            .forEach((v: any) => {
                                                                                v.style.height = "40px";
                                                                            });
                                                                    } else {
                                                                        depth2ArrowEl.style.transform = "rotate(0)";
                                                                        currentTarget.setAttribute(
                                                                            "data-open",
                                                                            "false"
                                                                        );
                                                                        currentTarget.style.height = "70px";
                                                                        currentTarget
                                                                            .querySelectorAll(".depth_3")
                                                                            .forEach((v: any) => {
                                                                                v.style.height = "0";
                                                                            });
                                                                    }
                                                                }
                                                            }}
                                                            data-open="false"
                                                            data-children-length={thirdItems?.length ?? 0}
                                                        >
                                                            <button className="w-full h-[70px] flex items-center justify-between px-5 gap-5 group bg-[#181818]">
                                                                <span className="truncate text-white group-focus:underline text-[14px] pl-3">
                                                                    {secondLabel}
                                                                </span>
                                                                {thirdItems && (
                                                                    <div className="min-w-[20px] depth_2_arrow duration-300 opacity-30">
                                                                        <Image
                                                                            src="/static/images/mob_gnb_arrow_down_w.png"
                                                                            width={20}
                                                                            height={20}
                                                                            alt="mob_gnb_arrow_down_w"
                                                                        />
                                                                    </div>
                                                                )}
                                                            </button>
                                                            {thirdItems && (
                                                                <ul>
                                                                    {thirdItems.map((thirdItem) => {
                                                                        const { label: thirdLabel } = thirdItem;
                                                                        return (
                                                                            <li
                                                                                key={thirdLabel}
                                                                                className="h-0 overflow-hidden depth_3 duration-300"
                                                                                onClick={(e) => {
                                                                                    e.stopPropagation();
                                                                                }}
                                                                            >
                                                                                <button className="w-full h-[40px] flex items-center justify-between px-5 gap-5 group bg-[#222222]">
                                                                                    <span className="truncate text-[#999999] group-focus:underline text-[12px] pl-6">
                                                                                        {thirdLabel}
                                                                                    </span>
                                                                                </button>
                                                                            </li>
                                                                        );
                                                                    })}
                                                                </ul>
                                                            )}
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div
                        className="absolute left-[-45px] top-[25px] cursor-pointer"
                        style={{
                            transform: openDrawer ? "rotate(-180deg)" : "rotate(0deg)",
                            transition: "transform 1s",
                        }}
                        onClick={() => setOpenDrawer(false)}
                    >
                        <Image src="/static/images/btn_gnb_close.png" width={20} height={20} alt="btn_gnb_close" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Drawer;
