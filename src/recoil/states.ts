"use client";

import { atom } from "recoil";

const windowInnerWidthRecoil = atom({
    key: "windowInnerWidthRecoil",
    default: 1960,
});

const openDrawerRecoil = atom({
    key: "openDrawerRecoil",
    default: false,
});

const openImageSwiperRecoil = atom({
    key: "openImageSwiperRecoil",
    default: false,
});

export { windowInnerWidthRecoil, openDrawerRecoil, openImageSwiperRecoil };
