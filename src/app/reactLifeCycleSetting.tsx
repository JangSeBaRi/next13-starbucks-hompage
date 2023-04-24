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
        setWindowInnerWidth(window.innerWidth);
        const handleResizeWindow = () => {
            setWindowInnerWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResizeWindow);
        return () => {
            window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);

    return <>{children}</>;
}
