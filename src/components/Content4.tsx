"use client";

import { windowInnerWidthRecoil } from "@/recoil/states";
import Image from "next/image";
import { useRecoilValue } from "recoil";

const Content4 = () => {
    const windowInnerWidth = useRecoilValue(windowInnerWidthRecoil);

    return (
        <div
            className="bg-cover bg-center"
            style={{
                height: windowInnerWidth > 1500 ? 500 : windowInnerWidth > 960 ? "43vw" : "165vw",
                backgroundImage:
                    windowInnerWidth > 960
                        ? "url('/static/images/2023_spring_promotion_bg.jpg')"
                        : "url('/static/images/2023_m_spring_promotion_bg_1.jpg')",
            }}
        ></div>
    );
};

export default Content4;
