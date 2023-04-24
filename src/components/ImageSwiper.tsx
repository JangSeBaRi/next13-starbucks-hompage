"use client";

import { openImageSwiperRecoil, windowInnerWidthRecoil } from "@/recoil/states";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import Image from "next/image";

interface ImageSwiperOptionType {
    swiping: boolean;
    duration: number;
    autoPlay: boolean;
    autoPlayDelay: number;
}

const ImageSwiper = () => {
    const windowInnerWidth = useRecoilValue(windowInnerWidthRecoil);
    const openImageSwiper = useRecoilValue(openImageSwiperRecoil);

    // about swiper ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    const [playImageSwipe, setplayImageSwipe] = useState<boolean>(true);
    const [activeImageIdx, setActiveImageIdx] = useState<number>(0);
    const [imageSwipeOption, setImageSwipeOption] = useState<ImageSwiperOptionType>({
        swiping: false,
        duration: 300,
        autoPlay: false,
        autoPlayDelay: 3000,
    });

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

    const changeImageSwipeOption = (
        key: "swiping" | "duration" | "autoplay" | "autoPlayDelay",
        value: boolean | number | string
    ) => {
        setImageSwipeOption({ ...imageSwipeOption, [key]: value });
    };

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
        const animateToImageIdx = type === "prev" ? activeImageIdx : type === "next" ? activeImageIdx + 2 : type + 1;
        const imageArrayWrap = document.querySelector("#image_array_wrap")!! as HTMLUListElement;
        imageArrayWrap.style.transition = `transform ${imageSwipeOption.duration}ms`;
        imageArrayWrap.style.transform = `translateX(calc(-${animateToImageIdx * 100}% - ${animateToImageIdx * 10}px))`;
    };

    const changeImageOpacityAndImageWrapTranslateX = (activeImageIdx: number) => {
        const imageArrayWrap = document.querySelector("#image_array_wrap")!! as HTMLUListElement;
        Array.from(imageArrayWrap.children).forEach((li: any, liIdx) => {
            if (activeImageIdx + 1 === liIdx) {
                li.style.opacity = 1;
            } else {
                li.style.opacity = 0.5;
            }
        });
        imageArrayWrap.style.transition = "none";
        imageArrayWrap.style.transform = `translateX(calc(-${(activeImageIdx + 1) * 100}% - ${
            (activeImageIdx + 1) * 10
        }px))`;
    };

    const handleSwipeImage = (type: "prev" | "next" | number) => {
        changeImageSwipeOption("swiping", true);
        // 1. active index 바꾸기
        const nextActiveImageIdx = calcNextActiveImageIdx(type);
        setActiveImageIdx(nextActiveImageIdx);
        // 2. 부드럽게 translateX 변경 (transition 적용)
        imageSwipeAnimation(type);
        // 3. 움직임이 끝난 뒤 opacity 변경, translateX 변경 (transition 적용안함)
        setTimeout(() => {
            changeImageOpacityAndImageWrapTranslateX(nextActiveImageIdx);
            changeImageSwipeOption("swiping", false);
        }, imageSwipeOption.duration);
    };

    useEffect(() => {
        setActiveImageIdx(0);
        changeImageOpacityAndImageWrapTranslateX(0);
    }, [!openImageSwiper]);
    // about swiper ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

    return (
        <>
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
                <div
                    className=" absolute top-[40%] left-[-100px] w-[59px] h-[59px] border-[1px] rounded-full border-[#111111] flex flex-col items-center justify-center cursor-pointer"
                    onClick={() => {
                        !imageSwipeOption.swiping && handleSwipeImage("prev");
                    }}
                >
                    <Image src="/images/arrow_left_on.png" alt="arrow_left_on" width={15} height={26} />
                </div>
                <div
                    className=" absolute top-[40%] right-[-100px] w-[59px] h-[59px] border-[1px] rounded-full border-[#111111] flex flex-col items-center justify-center cursor-pointer"
                    onClick={() => {
                        !imageSwipeOption.swiping && handleSwipeImage("next");
                    }}
                >
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
                        return (
                            <div
                                key={idx}
                                className=" min-w-[13px] cursor-pointer"
                                onClick={() => {
                                    !imageSwipeOption.swiping && handleSwipeImage(idx);
                                    !imageSwipeOption.swiping && setplayImageSwipe(false);
                                }}
                            >
                                {idx === activeImageIdx ? (
                                    <Image src="/images/main_prom_on.png" alt="main_prom_on" width={13} height={12} />
                                ) : (
                                    <Image src="/images/main_prom_off.png" alt="main_prom_off" width={13} height={12} />
                                )}
                            </div>
                        );
                    })}
            </div>
        </>
    );
};

export default ImageSwiper;
