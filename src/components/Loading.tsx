"use client";

import { delay } from "@/utils/delay";
import { useEffect, useState } from "react";

const Loading = () => {
    const [borderRightWidth, setBorderRightWidth] = useState<number>(2);
    const [showFilter, setShowFilter] = useState<boolean>(false);
    const [opcityZero, setOpcityZero] = useState<boolean>(false);
    useEffect(() => {
        setTimeout(async () => {
            setBorderRightWidth(0)
            await delay(20);
            setShowFilter(true);
            await delay(20);
            setShowFilter(false);
            await delay(20);
            setShowFilter(true);
            await delay(20);
            setShowFilter(false);
            await delay(20);
            setShowFilter(true);
            await delay(20);
            setShowFilter(false);
            await delay(20);
            setShowFilter(true);
            await delay(20);
            setShowFilter(false);
            await delay(20);
            setShowFilter(true);
            await delay(20);
            setShowFilter(false);
            await delay(20);
            setShowFilter(true);
            await delay(20);
            setShowFilter(false);
            await delay(20);
            setShowFilter(true);
            await delay(20);
            setShowFilter(false);
            await delay(20);
            setShowFilter(true);
            await delay(20);
            setShowFilter(false);
            await delay(20);
            setShowFilter(true);
            await delay(20);
            setShowFilter(false);
            await delay(20);
            setShowFilter(true);
            await delay(20);
            setShowFilter(false);
            await delay(200);
            setShowFilter(true);
            await delay(1000);
            setOpcityZero(true);
        }, 3000);
    }, []);
    return (
        <div
            className="absolute z-[9999] w-full h-screen flex flex-col items-center justify-between bg-[#1e3932]"
            style={{ opacity: opcityZero ? 0 : 1, transition: "opacity 1s" }}
        >
            <div className="relative mt-[20vh]">
                <h1 className="text-[6vw] font-bold text-[#2c2a29]">Starbucks Korea</h1>
                <h1
                    className="absolute top-0 left-0 text-[6vw] font-bold whitespace-nowrap text-white overflow-hidden border-r-white animate-text-animation"
                    style={{ filter: showFilter ? "drop-shadow(0 0 20px #fff) drop-shadow(0 0 20px #fff)" : undefined, borderRightWidth: borderRightWidth }}
                >
                    Starbucks Korea
                </h1>
            </div>
            <h1 className="text-[3vw] font-bold  text-white mb-[10vh]">Made by JangSeBaRi</h1>
        </div>
    );
};

export default Loading;
