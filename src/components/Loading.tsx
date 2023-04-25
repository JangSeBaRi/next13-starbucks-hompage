"use client";

import { delay } from "@/utils/delay";
import { useEffect, useState } from "react";

const Loading = () => {
    const [filterOn, setFilterOn] = useState<boolean>(false);
    const [opcityZero, setOpcityZero] = useState<boolean>(false);
    useEffect(() => {
        setTimeout(async () => {
            await delay(20);
            setFilterOn(true);
            await delay(20);
            setFilterOn(false);
            await delay(20);
            setFilterOn(true);
            await delay(20);
            setFilterOn(false);
            await delay(20);
            setFilterOn(true);
            await delay(20);
            setFilterOn(false);
            await delay(20);
            setFilterOn(true);
            await delay(20);
            setFilterOn(false);
            await delay(20);
            setFilterOn(true);
            await delay(20);
            setFilterOn(false);
            await delay(20);
            setFilterOn(true);
            await delay(20);
            setFilterOn(false);
            await delay(20);
            setFilterOn(true);
            await delay(20);
            setFilterOn(false);
            await delay(20);
            setFilterOn(true);
            await delay(20);
            setFilterOn(false);
            await delay(20);
            setFilterOn(true);
            await delay(20);
            setFilterOn(false);
            await delay(20);
            setFilterOn(true);
            await delay(20);
            setFilterOn(false);
            await delay(200);
            setFilterOn(true);
            await delay(1000);
            setOpcityZero(true);
        }, 3000);
    }, []);
    return (
        <div
            className="absolute z-[9999] w-full h-screen flex flex-col items-center bg-[#1e3932] overflow-hidden"
            style={{ opacity: opcityZero ? 0 : 1, transition: "opacity 1s" }}
        >
            <div className="relative mt-[30vh]">
                <h1 className="text-[6vw] font-bold text-[#2c2a29]">Starbucks Korea</h1>
                <h1
                    className="absolute top-0 left-0 text-[6vw] font-bold whitespace-nowrap text-white overflow-hidden border-r-[2px] border-r-white animate-text-animation"
                    style={{ filter: filterOn ? "drop-shadow(0 0 20px #fff) drop-shadow(0 0 20px #fff)" : undefined }}
                >
                    Starbucks Korea
                </h1>
            </div>
        </div>
    );
};

export default Loading;
