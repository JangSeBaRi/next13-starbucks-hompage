"use client";

import { openImageSwiperRecoil, windowInnerWidthRecoil } from "@/recoil/states";
import { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import Image from "next/image";

const ImageSwiper = () => {
    const windowInnerWidth = useRecoilValue(windowInnerWidthRecoil);
    const openImageSwiper = useRecoilValue(openImageSwiperRecoil);

    // about swiper ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    const imageSwiperSetInterval = useRef<any>(null);
    const [activeImageIdx, setActiveImageIdx] = useState<number>(0);
    const [swiping, setSwiping] = useState(false);
    const [autoPlay, setAutoPlay] = useState(false);
    const imageSwipeOption = {
        duration: 500,
        autoPlayDelay: 2000,
        imageWidth: windowInnerWidth > 960 ? 819 : Math.min(500, windowInnerWidth),
        imageGap: 10,
    };

    const imageArray = [
        {
            id: "FbOy46_20230102123439782_copy",
            component: (
                <Image
                    src="/static/images/FbOy46_20230102123439782.jpg"
                    alt="FbOy46_20230102123439782"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full"
                    priority={true}
                />
            ),
        },
        {
            id: "8akpfI_20230320084449571",
            component: (
                <Image
                    src="/static/images/8akpfI_20230320084449571.jpg"
                    alt="8akpfI_20230320084449571"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full"
                    priority={true}
                />
            ),
        },
        {
            id: "uCaICb_20230209082722973",
            component: (
                <Image
                    src="/static/images/uCaICb_20230209082722973.jpg"
                    alt="uCaICb_20230209082722973"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full"
                    priority={true}
                />
            ),
        },
        {
            id: "FbOy46_20230102123439782",
            component: (
                <Image
                    src="/static/images/FbOy46_20230102123439782.jpg"
                    alt="FbOy46_20230102123439782"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full"
                    priority={true}
                />
            ),
        },
        {
            id: "8akpfI_20230320084449571_copy",
            component: (
                <Image
                    src="/static/images/8akpfI_20230320084449571.jpg"
                    alt="8akpfI_20230320084449571"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full"
                    priority={true}
                />
            ),
        },
    ];

    const calcNextActiveImageIdx = (type: "prev" | "next" | number) => {
        const imageCount = Math.ceil(imageArray.length / 2);
        const nextImageIdx =
            type === "prev"
                ? (activeImageIdx + 2) % imageCount
                : type === "next"
                ? (activeImageIdx + 1) % imageCount
                : type;
        return nextImageIdx;
    };

    const imageSwipeAnimation = (type: "prev" | "next" | number) => {
        const { duration, imageWidth, imageGap } = imageSwipeOption;
        const animateToImageIdx = type === "prev" ? activeImageIdx : type === "next" ? activeImageIdx + 2 : type + 1;
        const imageArrayWrap = document.querySelector("#image_array_wrap")!! as HTMLUListElement;
        imageArrayWrap.style.transition = `transform ${duration}ms`;
        imageArrayWrap.style.transform = `translateX(calc(-${imageWidth * animateToImageIdx}px - ${
            imageGap * animateToImageIdx
        }px + ${windowInnerWidth > 960 ? "0px" : windowInnerWidth > 500 ? "60px" : "0px"}))`;
    };

    const changeImageOpacityAndImageWrapTranslateX = (activeImageIdx: number) => {
        const { imageWidth, imageGap } = imageSwipeOption;
        const imageArrayWrap = document.querySelector("#image_array_wrap")!! as HTMLUListElement;
        Array.from(imageArrayWrap.children).forEach((li: any, liIdx) => {
            if (activeImageIdx + 1 === liIdx) {
                li.style.opacity = 1;
            } else {
                li.style.opacity = 0.5;
            }
        });
        imageArrayWrap.style.transition = "none";
        imageArrayWrap.style.transform = `translateX(calc(-${imageWidth * (activeImageIdx + 1)}px - ${
            imageGap * (activeImageIdx + 1)
        }px + ${
            windowInnerWidth > 960
                ? "0px"
                : windowInnerWidth > 620
                ? "60px"
                : windowInnerWidth > 500
                ? 60 - (620 - windowInnerWidth) / 2 + "px"
                : "0px"
        }))`;
    };

    useEffect(() => {
        changeImageOpacityAndImageWrapTranslateX(activeImageIdx);
    }, [windowInnerWidth]);

    const handleSwipeImage = (type: "prev" | "next" | number) => {
        setSwiping(true);
        // 1. active index 바꾸기
        const nextActiveImageIdx = calcNextActiveImageIdx(type);
        setActiveImageIdx(nextActiveImageIdx);
        // 2. 부드럽게 translateX 변경 (transition 적용)
        imageSwipeAnimation(type);
        // 3. 움직임이 끝난 뒤 opacity 변경, translateX 변경 (transition 적용안함)
        setTimeout(() => {
            changeImageOpacityAndImageWrapTranslateX(nextActiveImageIdx);
            setSwiping(false);
        }, imageSwipeOption.duration);
    };

    useEffect(() => {
        setActiveImageIdx(0);
        changeImageOpacityAndImageWrapTranslateX(0);
        setAutoPlay(openImageSwiper);
    }, [!openImageSwiper]);

    useEffect(() => {
        clearInterval(imageSwiperSetInterval.current);
        if (autoPlay) {
            imageSwiperSetInterval.current = setInterval(
                () => handleSwipeImage("next"),
                imageSwipeOption.autoPlayDelay
            );
        }
        return () => {
            clearInterval(imageSwiperSetInterval.current);
        };
    }, [autoPlay, activeImageIdx, windowInnerWidth]);
    // about swiper ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

    return (
        <div
            id="image_list_wrap"
            className="bg-[#f6f5ef] flex flex-col items-center overflow-hidden duration-300"
            style={{
                height:
                    windowInnerWidth > 960 ? 660 : windowInnerWidth > 375 ? 488 : windowInnerWidth > 320 ? 395 : 350,
                maxHeight:
                    openImageSwiper === false
                        ? 0
                        : windowInnerWidth > 960
                        ? 660
                        : windowInnerWidth > 375
                        ? 488
                        : windowInnerWidth > 320
                        ? 400
                        : 350,
            }}
        >
            <div
                className="relative pt-[40px] h-full"
                style={{
                    width: windowInnerWidth > 960 ? 819 : "100%",
                    maxWidth: windowInnerWidth > 960 ? undefined : 620,
                    overflow: windowInnerWidth > 960 ? "visible" : "hidden",
                }}
            >
                <ul
                    className="flex gap-[10px]"
                    id="image_array_wrap"
                    onMouseOver={() => clearInterval(imageSwiperSetInterval.current)}
                    onMouseLeave={() => {
                        clearInterval(imageSwiperSetInterval.current);
                        if (autoPlay) {
                            imageSwiperSetInterval.current = setInterval(
                                () => handleSwipeImage("next"),
                                imageSwipeOption.autoPlayDelay
                            );
                        }
                    }}
                >
                    {imageArray.map((image) => {
                        const { component, id } = image;
                        return (
                            <li key={id}>
                                <div
                                    style={{ width: windowInnerWidth > 960 ? 819 : Math.min(500, windowInnerWidth) }}
                                    className="relative"
                                >
                                    {component}
                                    <a
                                        className="absolute left-[50%] -translate-x-1/2 w-[125px] h-[38px] border-[2px] border-[#222222] rounded-[3px] text-[#222222] text-[14px] text-center leading-[32px] hover:bg-[#222222] hover:text-white duration-300 hover:underline cursor-pointer"
                                        style={{
                                            bottom: windowInnerWidth > 960 ? 10 : windowInnerWidth > 500 ? -12 : -45,
                                        }}
                                    >
                                        자세히 보기
                                    </a>
                                </div>
                            </li>
                        );
                    })}
                </ul>
                <div
                    className="absolute border-[1px] rounded-full border-[#111111] flex flex-col items-center justify-center cursor-pointer top-[265px]"
                    style={{
                        width: windowInnerWidth > 960 ? 59 : 55,
                        height: windowInnerWidth > 960 ? 59 : 55,
                        left: windowInnerWidth > 960 ? -100 : 15,
                        display: windowInnerWidth > 500 ? "flex" : "none",
                    }}
                    onClick={() => {
                        !swiping && handleSwipeImage("prev");
                    }}
                >
                    <Image
                        src="/static/images/arrow_left_on.png"
                        alt="arrow_left_on"
                        width={15}
                        height={26}
                        priority={true}
                    />
                </div>
                <div
                    className="absolute border-[1px] rounded-full border-[#111111] flex flex-col items-center justify-center cursor-pointer top-[265px]"
                    style={{
                        width: windowInnerWidth > 960 ? 59 : 55,
                        height: windowInnerWidth > 960 ? 59 : 55,
                        right: windowInnerWidth > 960 ? -100 : 15,
                        display: windowInnerWidth > 500 ? "flex" : "none",
                    }}
                    onClick={() => {
                        !swiping && handleSwipeImage("next");
                    }}
                >
                    <Image
                        src="/static/images/arrow_right_on.png"
                        alt="arrow_right_on"
                        width={15}
                        height={26}
                        priority={true}
                    />
                </div>
                <div
                    className="flex gap-3 absolute left-[50%] translate-x-[-50%]"
                    style={{
                        top:
                            windowInnerWidth > 960
                                ? 660 - 50
                                : windowInnerWidth > 375
                                ? 488 - 50
                                : windowInnerWidth > 320
                                ? 400 - 50
                                : 350 - 50,
                    }}
                >
                    <div
                        className="min-w-[9px] cursor-pointer"
                        onClick={() => {
                            setAutoPlay(!autoPlay);
                        }}
                    >
                        {autoPlay ? (
                            <Image
                                src="/static/images/main_prom_stop.png"
                                alt="main_prom_stop"
                                width={9}
                                height={12}
                                priority={true}
                            />
                        ) : (
                            <Image
                                src="/static/images/main_prom_play.png"
                                alt="main_prom_play"
                                width={9}
                                height={12}
                                priority={true}
                            />
                        )}
                    </div>
                    {Array(Math.ceil(imageArray.length / 2))
                        .fill(null)
                        .map((_, idx) => {
                            return (
                                <div
                                    key={idx}
                                    className="min-w-[13px] cursor-pointer"
                                    onClick={() => {
                                        !swiping && handleSwipeImage(idx);
                                        !swiping && setAutoPlay(false);
                                    }}
                                >
                                    {idx === activeImageIdx ? (
                                        <Image
                                            src="/static/images/main_prom_on.png"
                                            alt="main_prom_on"
                                            width={13}
                                            height={12}
                                            priority={true}
                                        />
                                    ) : (
                                        <Image
                                            src="/static/images/main_prom_off.png"
                                            alt="main_prom_off"
                                            width={13}
                                            height={12}
                                            priority={true}
                                        />
                                    )}
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default ImageSwiper;
