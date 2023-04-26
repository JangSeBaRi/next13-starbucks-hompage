"use client";

import Loading from "@/components/Loading";
import { loadingRecoil, windowInnerWidthRecoil } from "@/recoil/states";
import { delay } from "@/utils/delay";
import { ReactNode, useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

interface Props {
    children: ReactNode;
}

export default function ReactLifeCycleSetting({ children }: Props) {
    const [loading, setLoading] = useRecoilState<boolean>(loadingRecoil);
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
            await delay(5500);
            setLoading(false);
            document.querySelector("html")!!.style.overflowY = "scroll";
        })();
    }, []);

    return (
        <>
            {loading && <Loading />}
            {children}
        </>
    );
}
