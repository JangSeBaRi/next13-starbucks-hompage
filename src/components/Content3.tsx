"use client";

import { windowInnerWidthRecoil } from "@/recoil/states";
import Image from "next/image";
import { useRecoilValue } from "recoil";

const Content3 = () => {
    const windowInnerWidth = useRecoilValue(windowInnerWidthRecoil);

    return (
        <div
            className="flex flex-col items-center pt-[30px] bg-[#1e3932]"
            style={{
                paddingBottom: windowInnerWidth > 1000 ? 40 : 80,
            }}
        >
            <div
                className="max-w-[1080px] w-full flex"
                style={
                    windowInnerWidth > 1000
                        ? { gap: 40, padding: "0 40px", flexDirection: "row", alignItems: "start" }
                        : windowInnerWidth > 760
                        ? { gap: 80, padding: "0 40px 0 90px", flexDirection: "row", alignItems: "start" }
                        : { padding: "0 20px", flexDirection: "column", alignItems: "center" }
                }
            >
                {windowInnerWidth > 1000 ? (
                    <div className=" min-w-[176px]">
                        <Image src="/static/images/rewards-logo.png" alt="rewards-logo" width={176} height={152.5} />
                    </div>
                ) : windowInnerWidth > 760 ? (
                    <div className=" min-w-[248px]">
                        <Image src="/static/images/rewards-logo.png" alt="rewards-logo" width={248} height={215} />
                    </div>
                ) : (
                    <div className=" min-w-[160px] w-[35%]">
                        <Image
                            src="/static/images/rewards-logo.png"
                            alt="rewards-logo"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full"
                        />
                    </div>
                )}
                <div
                    className="flex flex-col grow w-full"
                    style={{
                        gap: windowInnerWidth > 1000 ? 16 : 20,
                        textAlign: windowInnerWidth > 760 ? undefined : "center",
                    }}
                >
                    <div
                        style={{
                            marginTop: windowInnerWidth > 1000 ? 0 : windowInnerWidth > 760 ? -12 : 30,
                        }}
                    >
                        <h2 className="text-white leading-[1.4]" style={{ fontSize: windowInnerWidth > 760 ? 26 : 20 }}>
                            스타벅스만의 특별한 혜택,{windowInnerWidth <= 1000 && <br />} 스타벅스 리워드
                        </h2>
                        <div className="flex items-center flex-wrap">
                            <div className="grow mt-[14px]" style={{ fontSize: windowInnerWidth > 760 ? 17 : 14 }}>
                                <p className=" text-white">
                                    스타벅스 회원이세요?{windowInnerWidth <= 760 && <br />} 로그인을 통해
                                    {760 < windowInnerWidth && windowInnerWidth <= 1000 && <br />} 나만의 리워드를
                                    확인해보세요.
                                </p>
                                <p className=" text-white">
                                    스타벅스 회원이 아니세요?{windowInnerWidth <= 1000 && <br />} 가입을 통해 리워드
                                    혜택을 즐기세요.
                                </p>
                            </div>
                            <div
                                className="flex items-center mt-[14px]"
                                style={{
                                    width: windowInnerWidth > 1000 ? "auto" : "100%",
                                    justifyContent: windowInnerWidth > 760 ? "start" : "center",
                                }}
                            >
                                <a
                                    className=" inline-block h-[38px] leading-[34px] px-[18.5px] bg-[#00704a] text-white text-[14px] cursor-pointer whitespace-nowrap"
                                    style={{
                                        width: windowInnerWidth > 760 ? undefined : "40%",
                                        borderRadius: windowInnerWidth > 760 ? 5 : 3,
                                    }}
                                >
                                    회원가입
                                </a>
                                <a
                                    className=" inline-block h-[38px] leading-[34px] px-[18.5px] bg-transparent text-white text-[14px] ml-[9px] border-[2px] border-white cursor-pointer whitespace-nowrap"
                                    style={{
                                        width: windowInnerWidth > 760 ? undefined : "40%",
                                        borderRadius: windowInnerWidth > 760 ? 5 : 3,
                                    }}
                                >
                                    로그인
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="h-[1px] w-full bg-white/20" />
                    <div className="flex items-center flex-wrap">
                        <div className="grow">
                            <p className=" text-white text-[14px]">
                                회원 가입 후, 스타벅스 e-Gift Card를{windowInnerWidth <= 1000 && <br />} &apos;나에게
                                선물하기&apos;로 구매하시고,{windowInnerWidth <= 760 && <br />} 편리하게 등록하세요!
                            </p>
                            <p className=" text-white text-[14px]">
                                카드를 등록하여 스타벅스 리워드 회원이 되신 후,{windowInnerWidth <= 1000 && <br />} 첫
                                구매를 하시면 무료 음료쿠폰을 드립니다!
                            </p>
                        </div>
                        <div
                            className="flex items-center"
                            style={{
                                marginTop: windowInnerWidth > 1000 ? 8 : 20,
                                width: windowInnerWidth > 1000 ? "auto" : "100%",
                                justifyContent: windowInnerWidth > 760 ? "start" : "center",
                            }}
                        >
                            <a
                                className=" inline-block h-[38px] leading-[34px] px-[18.5px] bg-transparent text-white text-[14px] border-[2px] border-white cursor-pointer whitespace-nowrap"
                                style={{
                                    width: windowInnerWidth > 760 ? undefined : "calc(80% + 9px)",
                                    borderRadius: windowInnerWidth > 760 ? 5 : 3,
                                }}
                            >
                                e-Gift Card 선물하기
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content3;
