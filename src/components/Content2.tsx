"use client";

import { openImageSwiperRecoil, windowInnerWidthRecoil } from "@/recoil/states";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import ImageSwiper from "@/components/ImageSwiper";

const Content2 = () => {
    const windowInnerWidth = useRecoilValue(windowInnerWidthRecoil);
    const [openImageSwiper, setOpenImageSwiper] = useRecoilState(openImageSwiperRecoil);

    // about notice ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    const noticeSetInterval = useRef<any>(null);
    const [activeNoticeIdx, setActiveNoticeIdx] = useState<number>(0);

    const noticeArray = [
        {
            label: "탄소중립포인트 인센티브 지급 기준 안내",
        },
        {
            label: "시스템 개선 및 서비스 점검 안내",
        },
        {
            label: "스타벅스 코리아 사칭 홈페이지 및 이메일 주의 안내",
        },
        {
            label: "Visite to my github site : https://www.github.com/JangSeBaRi",
        },
        {
            label: "컨텐츠 하나 더 추가해서 테스트 하기 컨텐츠 하나 더 추가해서 테스트 하기",
        },
    ];

    useEffect(() => {
        const notice = document.querySelector("#notice_array_wrap")!!.children[activeNoticeIdx] as HTMLLIElement;
        notice.style.transition = "top 0.3s";
        notice.style.top = "-2px";
    }, [activeNoticeIdx]);

    const noticeRotateAnimation = () => {
        Array.from(document.querySelector("#notice_array_wrap")!!.children).forEach((notice: any, noticeIdx) => {
            if (noticeIdx !== activeNoticeIdx) {
                notice.style.top = "20px";
            } else {
                notice.style.transition = "none";
            }
        });
        setActiveNoticeIdx((activeNoticeIdx + 1) % noticeArray.length);
    };

    useEffect(() => {
        clearInterval(noticeSetInterval.current);
        noticeSetInterval.current = setInterval(noticeRotateAnimation, 3000);
        return () => {
            clearInterval(noticeSetInterval.current);
        };
    }, [activeNoticeIdx]);
    // about notice ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

    return (
        <>
            <div className="flex flex-wrap">
                <div
                    className="flex-1 bg-[#111111] flex flex-col items-end"
                    style={windowInnerWidth <= 660 ? { flexBasis: "100%", height: 110 } : { height: 62 }}
                >
                    <div
                        className="h-full w-full flex items-center justify-between pr-5"
                        style={{ maxWidth: windowInnerWidth > 1480 ? 550 : windowInnerWidth > 660 ? 480 : undefined }}
                    >
                        <div className="h-full flex items-center">
                            {windowInnerWidth > 660 ? (
                                <span className="text-white text-[16px] whitespace-nowrap pl-5">공지사항</span>
                            ) : (
                                <div className="pl-5 min-w-[33px]">
                                    <Image
                                        src="/static/images/icon_board_speaker.png"
                                        alt="icon_board_speaker"
                                        width={33}
                                        height={32}
                                        priority={true}
                                    />
                                </div>
                            )}
                            <ul
                                id="notice_array_wrap"
                                className="relative flex flex-col justify-center overflow-hidden"
                                style={{
                                    width:
                                        windowInnerWidth > 1480
                                            ? 380
                                            : windowInnerWidth > 960
                                            ? 286
                                            : windowInnerWidth > 660
                                            ? 208
                                            : windowInnerWidth > 480
                                            ? 312
                                            : windowInnerWidth > 340
                                            ? 200
                                            : 150,
                                    fontSize: windowInnerWidth <= 660 ? 18 : 14,
                                    height: windowInnerWidth <= 660 ? 22 : 18,
                                }}
                            >
                                {noticeArray.map((notice, noticeIdx) => {
                                    const { label } = notice;
                                    return (
                                        <li
                                            key={label}
                                            className="text-white truncate pl-5 absolute bg-[#111] cursor-pointer hover:underline top-[-2px]"
                                            style={{
                                                width:
                                                    windowInnerWidth > 1480
                                                        ? 380
                                                        : windowInnerWidth > 960
                                                        ? 286
                                                        : windowInnerWidth > 660
                                                        ? 208
                                                        : windowInnerWidth > 480
                                                        ? 312
                                                        : windowInnerWidth > 340
                                                        ? 200
                                                        : 150,
                                                fontSize: windowInnerWidth <= 660 ? 18 : 14,
                                                zIndex: noticeIdx === activeNoticeIdx ? 2 : 1,
                                            }}
                                            onMouseOver={() => {
                                                clearInterval(noticeSetInterval.current);
                                            }}
                                            onMouseLeave={() => {
                                                clearInterval(noticeSetInterval.current);
                                                noticeSetInterval.current = setInterval(noticeRotateAnimation, 3000);
                                            }}
                                        >
                                            {label}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className="min-w-[36px] cursor-pointer">
                            <Image src="/static/images/btn_notice_plus.png" alt="btn_notice_plus" width={36} height={36} priority={true}/>
                        </div>
                    </div>
                </div>
                <div
                    className="flex-1 bg-[#f6f5ef] flex flex-col items-start"
                    style={windowInnerWidth <= 660 ? { flexBasis: "100%", height: 110 } : { height: 62 }}
                >
                    <div
                        className="h-full w-full flex items-center"
                        style={
                            windowInnerWidth > 1480
                                ? { maxWidth: 550, justifyContent: "end", paddingRight: 20 }
                                : windowInnerWidth > 660
                                ? { maxWidth: 480, justifyContent: "end", paddingRight: 20 }
                                : { justifyContent: "center" }
                        }
                    >
                        <span
                            className="whitespace-nowrap"
                            style={
                                windowInnerWidth > 660
                                    ? { fontSize: 16 }
                                    : windowInnerWidth > 340
                                    ? { fontSize: 28 }
                                    : { fontSize: 20 }
                            }
                        >
                            스타벅스 프로모션
                        </span>
                        <div
                            className="min-w-[35px] cursor-pointer"
                            style={windowInnerWidth <= 660 ? { marginLeft: 40 } : { marginLeft: 80 }}
                            onClick={() => {
                                setOpenImageSwiper(!openImageSwiper);
                            }}
                        >
                            {openImageSwiper ? (
                                <Image src="/static/images/btn_prom_up.png" alt="btn_prom_up" width={35} height={35} priority={true}/>
                            ) : (
                                <Image src="/static/images/btn_prom_down.png" alt="btn_prom_down" width={35} height={35} priority={true}/>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <ImageSwiper />
        </>
    );
};

export default Content2;
