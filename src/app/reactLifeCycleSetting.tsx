"use client";

import { windowInnerWidthRecoil } from "@/recoil/states";
import { ReactNode, useEffect } from "react";
import { useSetRecoilState } from "recoil";

interface Props {
    children: ReactNode;
}

export default function ReactLifeCycleSetting({ children }: Props) {
    const setWindowInnerWidth = useSetRecoilState(windowInnerWidthRecoil);

    useEffect(() => {
        const handleResizeWindow = () => {
            setWindowInnerWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResizeWindow);
        window.addEventListener("load", handleResizeWindow);
        return () => {
            window.removeEventListener("resize", handleResizeWindow);
            window.removeEventListener("load", handleResizeWindow);
        };
    }, []);

    return <>{children}</>;
}
