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
        document.querySelector("html")!!.scrollTo({ top: 0, behavior: "auto" });
        setWindowInnerWidth(window.innerWidth);
        (async () => {
            await delay(5500);
            setLoading(false);
            document.querySelector("html")!!.style.overflowY = "scroll";
        })();
        const handleResizeWindow = () => {
            setWindowInnerWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResizeWindow);
        return () => {
            window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);

    return (
        <>
            {loading && <Loading />}
            {children}
        </>
    );
}
