'use client'

import { windowInnerWidthRecoil } from "@/recoil/states";
import Image from "next/image";
import { useRecoilValue } from "recoil";

const LessThan960Content1 = () => {
    return (
        <div className="relative h-[264vw] w-auto bg-[url('/images/2023_m_spring2_promotion_bg.jpg')] bg-cover">
            <div className="absolute top-[6%] left-[11.6%] w-[46%]">
                <Image
                    src="/images/2023_m_spring2_top_logo.png"
                    alt="2023_m_spring2_top_logo"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full"
                />
            </div>
            <div className="absolute top-[15.6%] left-[12%] w-[75%]">
                <Image
                    src="/images/2023_m_spring2_top_drink1.png"
                    alt="2023_m_spring2_top_drink1"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full"
                />
            </div>
            <div className="absolute top-[41%] left-[15.8%] w-[84.2%]">
                <Image
                    src="/images/2023_m_spring2_top_drink2.png"
                    alt="2023_m_spring2_top_drink2"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full"
                />
            </div>
            <div className="absolute top-[62.5%] left-[11%] w-[73%]">
                <Image
                    src="/images/2023_m_spring2_top_drink3.png"
                    alt="2023_m_spring2_top_drink3"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full"
                />
            </div>
            <div className="absolute top-[28px] right-[1.8%] w-[25.7%]">
                <Image
                    src="/images/gq5gfg_20230407112635659.png"
                    alt="gq5gfg_20230407112635659"
                    width={241}
                    height={168}
                />
                <Image
                    src="/images/Mn0ecH_20220711153127215.png"
                    alt="Mn0ecH_20220711153127215"
                    width={241}
                    height={168}
                />
            </div>
            <div className="absolute top-[90%] left-[50%] w-[100%] translate-x-[-50%] text-center">
                <button className="w-[36%] truncate text-[#005224] border-[2px] border-[#014938] rounded-sm text-[22px] font-bold leading-[10vw] hover:bg-[#014938] hover:underline hover:text-white duration-300">
                    자세히 보기
                </button>
            </div>
        </div>
    );
};

const OverThan960Content1 = () => {
    return (
        <div className="relative h-[32vw] bg-[url('/images/2023_m_spring2_promotion_bg.jpg')] bg-cover">
            <div className="absolute top-[37%] left-[13.3%] w-[19%]">
                <Image
                    src="/images/2023_m_spring2_top_logo.png"
                    alt="2023_m_spring2_top_logo"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full"
                />
            </div>
            <div className="absolute top-[56%] left-[13.3%] w-[19%] text-center">
                <button className="w-[34%] truncate px-1 py-2 text-[#014938] border-[2px] border-[#014938] rounded-md text-[13px] hover:bg-[#014938] hover:underline hover:text-white duration-300">
                    자세히 보기
                </button>
            </div>
            <div className="absolute top-[14%] left-[34.8%] w-[18%]">
                <Image
                    src="/images/2023_spring2_top_drink2.png"
                    alt="2023_spring2_top_drink2"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full"
                />
            </div>
            <div className="absolute top-[10.8%] left-[49.5%] w-[15.8%]">
                <Image
                    src="/images/2023_spring2_top_drink1.png"
                    alt="2023_spring2_top_drink1"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full"
                />
            </div>
            <div className="absolute top-[15.8%] right-[20.8%] w-[18.2%]">
                <Image
                    src="/images/2023_spring2_top_drink3.png"
                    alt="2023_spring2_top_drink3"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full"
                />
            </div>
            <div className="absolute top-[28px] left-[54.5%] w-[45.5%] max-w-[720px] pr-2 flex flex-col items-end z-[11]">
                <Image
                    src="/images/gq5gfg_20230407112627089.png"
                    alt="gq5gfg_20230407112627089"
                    width={140}
                    height={96}
                />
                <Image
                    src="/images/Mn0ecH_20220711153123340.png"
                    alt="Mn0ecH_20220711153123340"
                    width={140}
                    height={96}
                />
            </div>
        </div>
    );
};

const Content1 = () => {
    const windowInnerWidth = useRecoilValue(windowInnerWidthRecoil);
    return windowInnerWidth > 960 ? <OverThan960Content1 /> : <LessThan960Content1 />;
};

export default Content1;