"use client";

import Loading from "@/components/Loading";
import { loadingRecoil, openImageSwiperRecoil, windowInnerWidthRecoil } from "@/recoil/states";
import { delay } from "@/utils/delay";
import { ReactNode, useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

interface Props {
    children: ReactNode;
}

export default function ReactLifeCycleSetting({ children }: Props) {
    const [loading, setLoading] = useRecoilState<boolean>(loadingRecoil);
    const setWindowInnerWidth = useSetRecoilState(windowInnerWidthRecoil);
    const setOpenImageSwiper = useSetRecoilState(openImageSwiperRecoil);

    useEffect(() => {
        setWindowInnerWidth(window.innerWidth);

        (async () => {
            await delay(3000);
            document.querySelector("html")!!.scrollTo({ top: 0, behavior: "auto" });
            await delay(3200);
            setLoading(false);
            setOpenImageSwiper(true);
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
