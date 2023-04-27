"use client";

import { windowInnerWidthRecoil } from "@/recoil/states";
import Image from "next/image";
import { useRecoilValue } from "recoil";

const Footer = () => {
    const windowInnerWidth = useRecoilValue(windowInnerWidthRecoil);

    return (
        <div className="bg-[#2c2a29]" style={windowInnerWidth > 960 ? { height: 625 } : { height: 911 }}>
            <div className="max-w-[1182px] mx-auto flex flex-col items-end pr-5 pt-5">
                <Image
                    src="/static/images/footer_logo.png"
                    width={14}
                    height={142}
                    alt="footer_logo"
                    priority={true}
                ></Image>
            </div>
        </div>
    );
};

export default Footer;
