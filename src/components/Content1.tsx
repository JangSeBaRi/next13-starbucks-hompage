"use client";

import { windowInnerWidthRecoil } from "@/recoil/states";
import Image from "next/image";
import { useRecoilValue } from "recoil";

const LessThan960Content1 = () => {
    const windowInnerWidth = useRecoilValue(windowInnerWidthRecoil);
    return (
        <div className="relative h-[264vw] w-auto bg-[url('/static/images/2023_m_spring2_promotion_bg.jpg')] bg-cover">
            <div className="absolute top-[6%] left-[11.6%] w-[46%] opacity-0 animate-fade-in">
                <Image
                    src="/static/images/2023_m_spring2_top_logo.png"
                    alt="2023_m_spring2_top_logo"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full"
                    priority={true}
                />
            </div>
            <div className="absolute top-[15.6%] left-[12%] w-[75%] opacity-0 animate-fade-in">
                <Image
                    src="/static/images/2023_m_spring2_top_drink1.png"
                    alt="2023_m_spring2_top_drink1"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full"
                    priority={true}
                />
            </div>
            <div className="absolute top-[41%] left-[15.8%] w-[84.2%] opacity-0 animate-fade-in">
                <Image
                    src="/static/images/2023_m_spring2_top_drink2.png"
                    alt="2023_m_spring2_top_drink2"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full"
                    priority={true}
                />
            </div>
            <div className="absolute top-[62.5%] left-[11%] w-[73%] opacity-0 animate-fade-in">
                <Image
                    src="/static/images/2023_m_spring2_top_drink3.png"
                    alt="2023_m_spring2_top_drink3"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full"
                    priority={true}
                />
            </div>
            <div className="fixed top-[108px] w-[25.7%] right-[1.8%] z-[11]">
                <Image
                    src="/static/images/gq5gfg_20230407112635659.png"
                    alt="gq5gfg_20230407112635659"
                    width={241}
                    height={168}
                    priority={true}
                />
                <Image
                    src="/static/images/Mn0ecH_20220711153127215.png"
                    alt="Mn0ecH_20220711153127215"
                    width={241}
                    height={168}
                    priority={true}
                />
            </div>
            <div className="absolute top-[90%] left-[50%] w-[100%] translate-x-[-50%] text-center opacity-0 animate-fade-in">
                <button
                    className="w-[36%] truncate text-[#005224] border-[2px] border-[#014938] rounded-sm max-sm:text-[14px] font-bold leading-[10vw] hover:bg-[#014938] hover:underline hover:text-white duration-300"
                    style={{ fontSize: windowInnerWidth > 500 ? 22 : windowInnerWidth > 380 ? 16 : 14 }}
                >
                    자세히 보기
                </button>
            </div>
        </div>
    );
};

const OverThan960Content1 = () => {
    const windowInnerWidth = useRecoilValue(windowInnerWidthRecoil);
    return (
        <div className="relative h-[32vw] bg-[url('/static/images/2023_m_spring2_promotion_bg.jpg')] bg-cover">
            <div className="absolute top-[37%] left-[13.3%] w-[19%] opacity-0 animate-fade-in">
                <Image
                    src="/static/images/2023_m_spring2_top_logo.png"
                    alt="2023_m_spring2_top_logo"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full"
                    priority={true}
                />
            </div>
            <div className="absolute top-[14%] left-[34.8%] w-[18%] opacity-0 animate-fade-in" style={{animationDelay: '1s'}}>
                <Image
                    src="/static/images/2023_spring2_top_drink2.png"
                    alt="2023_spring2_top_drink2"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full"
                    priority={true}
                />
            </div>
            <div className="absolute top-[10.8%] left-[49.5%] w-[15.8%] opacity-0 animate-fade-in" style={{animationDelay: '0.5s'}}>
                <Image
                    src="/static/images/2023_spring2_top_drink1.png"
                    alt="2023_spring2_top_drink1"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full"
                    priority={true}
                />
            </div>
            <div className="absolute top-[15.8%] right-[20.8%] w-[18.2%] opacity-0 animate-fade-in" style={{animationDelay: '1.5s'}}>
                <Image
                    src="/static/images/2023_spring2_top_drink3.png"
                    alt="2023_spring2_top_drink3"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full"
                    priority={true}
                />
            </div>
            <div
                className="right-[1%] fixed top-[154px] w-[140px] ml-[485px] z-[11]"
                style={{
                    left: windowInnerWidth > 1400 ? "54.5%" : "auto",
                }}
            >
                <Image
                    src="/static/images/gq5gfg_20230407112627089.png"
                    alt="gq5gfg_20230407112627089"
                    width={140}
                    height={96}
                    priority={true}
                />
                <Image
                    src="/static/images/Mn0ecH_20220711153123340.png"
                    alt="Mn0ecH_20220711153123340"
                    width={140}
                    height={96}
                    priority={true}
                />
            </div>
            <div className="absolute top-[56%] left-[13.3%] w-[19%] text-center opacity-0 animate-fade-in" style={{animationDelay: '2s'}}>
                <button
                    className="w-[70%] truncate px-1 py-2 text-[#014938] text-[22px] border-[2px] border-[#014938] rounded-md hover:bg-[#014938] hover:underline hover:text-white duration-300"
                >
                    자세히 보기
                </button>
            </div>
        </div>
    );
};

const Content1 = () => {
    const windowInnerWidth = useRecoilValue(windowInnerWidthRecoil);
    return windowInnerWidth > 960 ? <OverThan960Content1 /> : <LessThan960Content1 />;
};

export default Content1;
