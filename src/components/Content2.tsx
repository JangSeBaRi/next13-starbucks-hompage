"use client";

import { windowInnerWidthRecoil } from "@/recoil/states";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";

const Content2 = () => {
    const inerval = useRef<any>(null);
    const [activeNoticeIdx, setActiveNoticeIdx] = useState<number>(0);
    const [playImageSwipe, setplayImageSwipe] = useState<boolean>(true);
    const [activeImageIdx, setActiveImageIdx] = useState<number>(0);
    const [openImageListWrap, setOpenImageListWrap] = useState<boolean>(false);
    const windowInnerWidth = useRecoilValue(windowInnerWidthRecoil);
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
    const imageArray = [
        {
            id: "FbOy46_20230102123439782_copy",
            component: (
                <Image
                    src="/images/FbOy46_20230102123439782.jpg"
                    alt="FbOy46_20230102123439782"
                    width={819}
                    height={553}
                />
            ),
        },
        {
            id: "8akpfI_20230320084449571",
            component: (
                <Image
                    src="/images/8akpfI_20230320084449571.jpg"
                    alt="8akpfI_20230320084449571"
                    width={819}
                    height={553}
                />
            ),
        },
        {
            id: "uCaICb_20230209082722973",
            component: (
                <Image
                    src="/images/uCaICb_20230209082722973.jpg"
                    alt="uCaICb_20230209082722973"
                    width={819}
                    height={553}
                />
            ),
        },
        {
            id: "FbOy46_20230102123439782",
            component: (
                <Image
                    src="/images/FbOy46_20230102123439782.jpg"
                    alt="FbOy46_20230102123439782"
                    width={819}
                    height={553}
                />
            ),
        },
        {
            id: "8akpfI_20230320084449571_copy",
            component: (
                <Image
                    src="/images/8akpfI_20230320084449571.jpg"
                    alt="8akpfI_20230320084449571"
                    width={819}
                    height={553}
                />
            ),
        },
    ];
    const imageSwipeAnimation = (nextImageIdx? : number) => {
        // 애니메이션이 실행되는 순간
        // 1. 인덱스 바뀜
        const imageCount = Math.ceil(imageArray.length / 2);
        nextImageIdx = nextImageIdx ?? (activeImageIdx + 1) % imageCount;
        setActiveImageIdx(nextImageIdx);
        // 2. 오른쪽으로 width + gap만큼 움직임 (transition 적용)
        const imageArrayWrap = document.querySelector("#image_array_wrap")!! as HTMLUListElement;
        imageArrayWrap.style.transform = `translateX(calc(-${(activeImageIdx + 2) * 100}% - ${
            (activeImageIdx + 2) * 10
        }px))`;

        // 3. 움직임이 끝난 뒤 opacity값이 바뀜, 위치를 인덱스 + 1 * (width + gap) 만큼 움직임 (transition 적용안함)
        Array.from(imageArrayWrap.children).forEach((li: any, liIdx) => {
            if (activeImageIdx + 1 === liIdx) {
                li.style.opacity = 1;
            } else {
                li.style.opacity = 0;
            }
        });
        imageArrayWrap.style.transform = `translateX(calc(-${(nextImageIdx + 1) * 100}% - ${
            (nextImageIdx + 1) * 10
        }px))`;
    };

    useEffect(() => {}, [activeImageIdx]);
    const textRotateAnimation = () => {
        Array.from(document.querySelector("#notice_array_wrap")!!.children).forEach((li: any, liIdx) => {
            if (liIdx !== activeNoticeIdx) {
                li.style.top = "20px";
            } else {
                li.style.transition = "none";
            }
        });
        setActiveNoticeIdx((activeNoticeIdx + 1) % noticeArray.length);
    };

    useEffect(() => {
        const li = document.querySelector("#notice_array_wrap")!!.children[activeNoticeIdx] as HTMLLIElement;
        li.style.transition = "top 0.3s";
        li.style.top = "-2px";
    }, [activeNoticeIdx]);

    useEffect(() => {
        clearInterval(inerval.current);
        inerval.current = setInterval(textRotateAnimation, 3000);
        return () => {
            clearInterval(inerval.current);
        };
    }, [activeNoticeIdx]);

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
                                        src="/images/icon_board_speaker.png"
                                        alt="icon_board_speaker"
                                        width={33}
                                        height={32}
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
                                                clearInterval(inerval.current);
                                            }}
                                            onMouseLeave={() => {
                                                inerval.current = setInterval(textRotateAnimation, 3000);
                                            }}
                                        >
                                            {label}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className="min-w-[36px] cursor-pointer">
                            <Image src="/images/btn_notice_plus.png" alt="btn_notice_plus" width={36} height={36} />
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
                                setOpenImageListWrap(!openImageListWrap);
                            }}
                        >
                            {openImageListWrap ? (
                                <Image src="/images/btn_prom_up.png" alt="btn_prom_up" width={35} height={35} />
                            ) : (
                                <Image src="/images/btn_prom_down.png" alt="btn_prom_down" width={35} height={35} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div
                id="image_list_wrap"
                className="h-[660px] bg-[#f6f5ef] flex flex-col items-center overflow-hidden duration-300"
                style={{ maxHeight: openImageListWrap ? 660 : 0 }}
            >
                <div className="relative pt-[40px] w-[819px]">
                    <ul className="flex gap-[10px]" id="image_array_wrap">
                        {imageArray.map((image) => {
                            const { component, id } = image;
                            return (
                                <li key={id} className="min-w-[819px]">
                                    {component}
                                </li>
                            );
                        })}
                    </ul>
                    <div className=" absolute top-[40%] left-[-100px] w-[59px] h-[59px] border-[1px] rounded-full border-[#111111] flex flex-col items-center justify-center" 
                    >
                        <Image src="/images/arrow_left_on.png" alt="arrow_left_on" width={15} height={26} />
                    </div>
                    <div className=" absolute top-[40%] right-[-100px] w-[59px] h-[59px] border-[1px] rounded-full border-[#111111] flex flex-col items-center justify-center">
                        <Image src="/images/arrow_right_on.png" alt="arrow_right_on" width={15} height={26} />
                    </div>
                </div>
                <div className="flex items-center gap-3 pt-[20px]">
                    <div
                        className=" min-w-[9px] cursor-pointer"
                        onClick={() => {
                            setplayImageSwipe(!playImageSwipe);
                        }}
                    >
                        {playImageSwipe ? (
                            <Image src="/images/main_prom_stop.png" alt="main_prom_stop" width={9} height={12} />
                        ) : (
                            <Image src="/images/main_prom_play.png" alt="main_prom_play" width={9} height={12} />
                        )}
                    </div>
                    {Array(Math.ceil(imageArray.length / 2))
                        .fill(null)
                        .map((_, idx) => {
                            return activeImageIdx === idx ? (
                                <div
                                    className=" min-w-[13px] cursor-pointer"
                                    onClick={() => {
                                        setActiveImageIdx(idx);
                                        setplayImageSwipe(false);
                                    }}
                                >
                                    <Image src="/images/main_prom_on.png" alt="main_prom_on" width={13} height={12} />
                                </div>
                            ) : (
                                <div
                                    className=" min-w-[13px] cursor-pointer"
                                    onClick={() => {
                                        setActiveImageIdx(idx);
                                        setplayImageSwipe(false);
                                    }}
                                >
                                    <Image src="/images/main_prom_off.png" alt="main_prom_off" width={13} height={12} />
                                </div>
                            );
                        })}
                </div>
            </div>
        </>
    );
};

export default Content2;
