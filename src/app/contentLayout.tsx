"use client";

import { openDrawerRecoil, windowInnerWidthRecoil } from "@/recoil/states";
import { ReactNode, useEffect } from "react";
import { useRecoilValue } from "recoil";

type Props = {
    children: ReactNode;
};

export default function ContentLayout({ children }: Props) {
    const openDrawer = useRecoilValue(openDrawerRecoil);
    const windowInnerWidth = useRecoilValue(windowInnerWidthRecoil);

    useEffect(() => {
        const mainEl = document.querySelector("#main")!! as HTMLDivElement;
        mainEl.style.transition = "left 0.3s";
        setTimeout(() => {
            mainEl.style.transition = "none";
        }, 300);
    }, [openDrawer]);

    return (
        <main
            id="main"
            className="relative"
            style={{
                paddingTop: windowInnerWidth > 960 ? 126 : 70,
                left: openDrawer ? "-75vw" : 0,
            }}
        >
            {children}
        </main>
    );
}
