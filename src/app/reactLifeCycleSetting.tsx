"use client";

import Loading from "@/components/Loading";
import { windowInnerWidthRecoil } from "@/recoil/states";
import { delay } from "@/utils/delay";
import { ReactNode, useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";

interface Props {
    children: ReactNode;
}

export default function ReactLifeCycleSetting({ children }: Props) {
    const [loading, setLoading] = useState<boolean>(true);
    const setWindowInnerWidth = useSetRecoilState(windowInnerWidthRecoil);

    useEffect(() => {
        setWindowInnerWidth(window.innerWidth);
        const handleResizeWindow = () => {
            setWindowInnerWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResizeWindow);
        return () => {
            window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);

    useEffect(() => {
        (async () => {
            await delay(4600);
            document.querySelector("html")!!.style.overflowY = "scroll";
            await delay(1000);
            setLoading(false);
        })();
    }, []);

    return (
        <>
            {loading && <Loading />}
            {children}
        </>
    );
}
