"use client";

import { atom } from "recoil";

const windowInnerWidthRecoil = atom({
    key: "windowInnerWidthRecoil",
    default: 1960,
});

const loadingRecoil = atom({
    key: "loadingRecoil",
    default: true,
});

const openDrawerRecoil = atom({
    key: "openDrawerRecoil",
    default: false,
});

const openImageSwiperRecoil = atom({
    key: "openImageSwiperRecoil",
    default: true,
});

export { windowInnerWidthRecoil, loadingRecoil, openDrawerRecoil, openImageSwiperRecoil };
