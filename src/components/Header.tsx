"use client";

import { gnbList, subGnbList, subGnbMenuObject } from "@/constant/header";
import { openDrawerRecoil, windowInnerWidthRecoil } from "@/recoil/states";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

const LessThan960Header = () => {
    const setOpenDrawer = useSetRecoilState(openDrawerRecoil);
    return (
        <header className="fixed left-0 top-0 z-[10] flex items-center w-screen h-[70px] bg-[#f6f5ef] px-[10px] justify-between">
            <h1 className="min-w-[45px]">
                <Link href={"/"}>
                    <Image src="/static/images/logo.png" width={45} height={45} alt="logo"></Image>
                </Link>
            </h1>
            <ul className="h-full flex items-center justify-end gap-8">
                <li className="min-w-[25px] cursor-pointer">
                    <Image src="/static/images/icon_user_m.png" width={25} height={30} alt="icon_user_m"></Image>
                </li>
                <li className="min-w-[24px] cursor-pointer">
                    <Image src="/static/images/icon_spot_m.png" width={24} height={32} alt="icon_spot_m"></Image>
                </li>
                <li
                    className="min-w-[28px] cursor-pointer"
                    onClick={() => {
                        setOpenDrawer(true);
                    }}
                >
                    <Image src="/static/images/btn_berger_m.png" width={28} height={26} alt="btn_berger_m"></Image>
                </li>
            </ul>
        </header>
    );
};

const OverThan960Header = () => {
    const [activeSubGnb, setActiveSubGnb] = useState<string>("");
    return (
        <header className="fixed left-0 top-0 z-[10] h-[126px] bg-[#f6f5ef] flex flex-col justify-center w-screen items-center">
            <div className="max-w-[1120px] w-full h-full flex items-center justify-between pl-[20px]">
                <h1>
                    <Link href={"/"}>
                        <Image src="/static/images/logo.png" width={70} height={70} alt="logo"></Image>
                    </Link>
                </h1>
                <nav className="flex flex-col items-end justify-between h-full">
                    <div className="flex items-center pt-2 pr-10">
                        <ul className="flex">
                            {gnbList.map((gnb) => {
                                const { label } = gnb;
                                return (
                                    <li
                                        key={label}
                                        className="relative flex flex-col justify-center px-[20px] text-[13px] text-[#555555] after:contents-[''] after:absolute after:w-[1px] after:h-[10px] after:bg-[#555555]/10 after:right-0 cursor-pointer"
                                    >
                                        {label}
                                    </li>
                                );
                            })}
                        </ul>
                        <div className="w-[36px] h-[36px] bg-white rounded-[5px] border-[2px] border-[#cccccc] flex justify-center items-center">
                            <Image src="/static/images/icon_magnifier_black.png" width={20} height={21} alt="icon_magnifier_black"></Image>
                        </div>
                    </div>
                    <ul className="flex">
                        {subGnbList.map((subGnb) => {
                            const { label } = subGnb;
                            return (
                                <li
                                    key={label}
                                    className="pt-[10px] px-[20px] h-[66px] text-[13px] text-[#333333] cursor-pointer whitespace-nowrap hover:bg-[#2c2a29] hover:text-[#669900] hover:underline"
                                    onMouseOver={() => {
                                        setActiveSubGnb(label);
                                        const subGnbMenuWrapEl = document.querySelector(
                                            "#sub_gnb_menu_wrap"
                                        )!! as HTMLDivElement;
                                        subGnbMenuWrapEl.style.transition = "none";
                                        subGnbMenuWrapEl.style.maxHeight = 20 + "px";
                                        setTimeout(() => {
                                            subGnbMenuWrapEl.style.transition = "max-height 0.7s";
                                            subGnbMenuWrapEl.style.maxHeight = 300 + "px";
                                        }, 10);
                                    }}
                                    onMouseLeave={() => {
                                        const subGnbMenuWrapEl = document.querySelector(
                                            "#sub_gnb_menu_wrap"
                                        )!! as HTMLDivElement;
                                        subGnbMenuWrapEl.style.transition = "max-height 0.5s";
                                        subGnbMenuWrapEl.style.maxHeight = 0 + "px";
                                    }}
                                >
                                    {label}
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
            <div
                className="absolute bg-[#2c2a29] w-full top-[126px] overflow-hidden flex flex-col items-center max-h-0"
                id="sub_gnb_menu_wrap"
                onMouseOver={() => {
                    const subGnbMenuWrapEl = document.querySelector("#sub_gnb_menu_wrap")!! as HTMLDivElement;
                    subGnbMenuWrapEl.style.maxHeight = 300 + "px";
                }}
                onMouseLeave={() => {
                    const subGnbMenuWrapEl = document.querySelector("#sub_gnb_menu_wrap")!! as HTMLDivElement;
                    subGnbMenuWrapEl.style.transition = "max-height 0.5s";
                    subGnbMenuWrapEl.style.maxHeight = 0 + "px";
                }}
            >
                <ul className="flex py-[20px] pl-[20px] max-w-[1120px] w-full">
                    {subGnbMenuObject[activeSubGnb] &&
                        subGnbMenuObject[activeSubGnb].map((subGnbMenu) => {
                            const { title, items } = subGnbMenu;
                            return (
                                <li key={title} className="w-[220px]">
                                    <p className="text-white text-[14px] w-full h-[31px] pt-[3px] pb-[12px]">
                                        <a href="javascript(0):void" className="hover:underline hover:cursor-pointer">
                                            {title}
                                        </a>
                                    </p>
                                    <ul>
                                        {items.map((item) => {
                                            const { label } = item;
                                            return (
                                                <li
                                                    key={label}
                                                    className="text-[#999999] text-[12px] h-[22px] w-full py-[3px]"
                                                >
                                                    <a
                                                        href="javascript(0):void"
                                                        className="hover:underline hover:cursor-pointer"
                                                    >
                                                        {label}
                                                    </a>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </li>
                            );
                        })}
                </ul>
            </div>
        </header>
    );
};

const Header = () => {
    const windowInnerWidth = useRecoilValue(windowInnerWidthRecoil);
    return windowInnerWidth > 960 ? <OverThan960Header /> : <LessThan960Header />;
};

export default Header;
