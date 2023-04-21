export interface GnbType {
    label: string;
}

export const gnbList: GnbType[] = [
    {
        label: "Sign In",
    },
    {
        label: "My Starbucks",
    },
    {
        label: "Customer Service & Ideas",
    },
    {
        label: "Find a Store",
    },
];

export interface SubGnbType {
    label: string;
}

export const subGnbList: SubGnbType[] = [
    {
        label: "COFFEE",
    },
    {
        label: "MENU",
    },
    {
        label: "STORE",
    },
    {
        label: "RESPONSIBILITY",
    },
    {
        label: "STARBUCKS REWARDS",
    },
    {
        label: "CORPORATE SALES",
    },
    {
        label: "WHAT'S NEW",
    },
];

export interface SubGnbMenuObjectType {
    [key: string]: {
        title: string;
        items: {
            label: string;
        }[];
    }[];
}

export const subGnbMenuObject: SubGnbMenuObjectType = {
    COFFEE: [
        {
            title: "커피",
            items: [
                {
                    label: "스타벅스 원두",
                },
                {
                    label: "스타벅스 비아",
                },
                {
                    label: "스타벅스앳홈 by 캡슐",
                },
                {
                    label: "나와 어울리는 커피",
                },
            ],
        },
        {
            title: "커피 이야기",
            items: [
                {
                    label: "농장에서 우리의 손으로",
                },
                {
                    label: "최상의 아라비카 원두",
                },
                {
                    label: "스타벅스 로스트 스펙트럼",
                },
                {
                    label: "스타벅스 디카페인",
                },
            ],
        },
        {
            title: "스타벅스 리저브",
            items: [
                {
                    label: "RESERVE MAGAZINE",
                },
            ],
        },
        {
            title: "에스프레소 음료",
            items: [
                {
                    label: "도피오",
                },
                {
                    label: "에스프레소 마키아또",
                },
                {
                    label: "아메리카노",
                },
                {
                    label: "마키아또",
                },
                {
                    label: "카푸치노",
                },
                {
                    label: "라떼",
                },
                {
                    label: "모카",
                },
            ],
        },
        {
            title: "최상의 커피를 즐기는 법",
            items: [
                {
                    label: "커피 프레스",
                },
                {
                    label: "푸어 오버",
                },
                {
                    label: "아이스 푸어 오버",
                },
                {
                    label: "커피 메이커",
                },
            ],
        },
    ],
    MENU: [
        {
            title: "음료",
            items: [
                {
                    label: "콜드 브루",
                },
                {
                    label: "브루드 커피",
                },
                {
                    label: "에스프레소",
                },
                {
                    label: "프라푸치노",
                },
                {
                    label: "블렌디드",
                },
                {
                    label: "스타벅스 리프레셔",
                },
                {
                    label: "스타벅스 피지오",
                },
                {
                    label: "티(티바나)",
                },
                {
                    label: "기타 제조 음료",
                },
                {
                    label: "스타벅스 주스(병음료)",
                },
            ],
        },
        {
            title: "푸드",
            items: [
                {
                    label: "브레드",
                },
                {
                    label: "케이크",
                },
                {
                    label: "샌드위치 & 샐러드",
                },
                {
                    label: "따뜻한 푸드",
                },
                {
                    label: "과일 & 요거트",
                },
                {
                    label: "스낵 & 미니 디저트",
                },
                {
                    label: "아이스크림",
                },
            ],
        },
        {
            title: "상품",
            items: [
                {
                    label: "머그",
                },
                {
                    label: "글라스",
                },
                {
                    label: "플라스틱 텀블러",
                },
                {
                    label: "스테인리스 텀블러",
                },
                {
                    label: "보온병",
                },
                {
                    label: "액세서리",
                },
                {
                    label: "선물세트",
                },
                {
                    label: "커피 용품",
                },
                {
                    label: "패키지 티(티바나)",
                },
                {
                    label: "시럽",
                },
            ],
        },
        {
            title: "카드",
            items: [
                {
                    label: "실물카드",
                },
                {
                    label: "e-Gift 카드",
                },
            ],
        },
        {
            title: "메뉴 이야기",
            items: [
                {
                    label: "스타벅스 티바나",
                },
                {
                    label: "콜드 브루",
                },
                {
                    label: "나이트로 콜드브루",
                },
            ],
        },
    ],
    STORE: [
        {
            title: "매장 찾기",
            items: [
                {
                    label: "퀵 검색",
                },
                {
                    label: "지역 검색",
                },
            ],
        },
        {
            title: "드라이브 스루 매장",
            items: [],
        },
        {
            title: "스타벅스 리저브 매장",
            items: [],
        },
        {
            title: "커뮤니티 스토어 매장",
            items: [],
        },
    ],
    RESPONSIBILITY: [
        {
            title: "사회공헌 캠페인 소개",
            items: [],
        },
        {
            title: "지역 사회 참여 활동",
            items: [
                {
                    label: "희망배달 캠페인",
                },
                {
                    label: "재능기부 카페 소식",
                },
                {
                    label: "커뮤니티 스토어",
                },
                {
                    label: "청년 지원 프로그램",
                },
                {
                    label: "우리 농산물 사랑 캠페인",
                },
                {
                    label: "우리 문화 지키기",
                },
            ],
        },
        {
            title: "환경보호 활동",
            items: [
                {
                    label: "친환경 활동",
                },
                {
                    label: "일회용 컵 없는 매장",
                },
                {
                    label: "커피 원두 재활용",
                },
            ],
        },
        {
            title: "윤리 구매",
            items: [
                {
                    label: "윤리적 원두 구매",
                },
                {
                    label: "공정무역 인증",
                },
                {
                    label: "커피 농가 지원 활동",
                },
            ],
        },
        {
            title: "글로벌 사회 공헌",
            items: [
                {
                    label: "윤리경영 보고서",
                },
                {
                    label: "스타벅스 재단",
                },
                {
                    label: "지구촌 봉사의 달",
                },
            ],
        },
    ],
    ["STARBUCKS REWARDS"]: [
        {
            title: "스타벅스 리워드",
            items: [
                {
                    label: "스타벅스 리워드 소개",
                },
                {
                    label: "등급 및 혜택",
                },
                {
                    label: "스타벅스 별",
                },
                {
                    label: "자주 하는 질문",
                },
            ],
        },
        {
            title: "스타벅스 카드",
            items: [
                {
                    label: "스타벅스 카드 소개",
                },
                {
                    label: "스타벅스 카드 갤러리",
                },
                {
                    label: "등록 및 조홰",
                },
                {
                    label: "충전 및 이용안내",
                },
                {
                    label: "분실신고/환불신청",
                },
                {
                    label: "자주 하는 질문",
                },
            ],
        },
        {
            title: "스타벅스 e-Gift Card",
            items: [
                {
                    label: "스타벅스 e-Gift Card 소개",
                },
                {
                    label: "이용안내",
                },
                {
                    label: "선물하기",
                },
                {
                    label: "자주 하는 질문",
                },
            ],
        },
    ],
    ["CORPORATE SALES"]: [
        {
            title: "단체 및 기업 구매 안내",
            items: [],
        },
        {
            title: "단체 주문 배달 안내",
            items: [
                {
                    label: "단체 주문 배달 안내",
                },
                {
                    label: "단체 주문 신청",
                },
                {
                    label: "신청 내역 조회",
                },
            ],
        },
    ],
    ["WHAT'S NEW"]: [
        {
            title: "이벤트",
            items: [
                {
                    label: "전체",
                },
                {
                    label: "스타벅스 카드",
                },
                {
                    label: "스타벅스 리워드",
                },
                {
                    label: "온라인F",
                },
            ],
        },
        {
            title: "뉴스",
            items: [
                {
                    label: "전체",
                },
                {
                    label: "상품 출시",
                },
                {
                    label: "스타벅스와 문화",
                },
                {
                    label: "스타벅스 사회공헌",
                },
                {
                    label: "스타벅스와 카드출시",
                },
            ],
        },
        {
            title: "매장별 이벤트",
            items: [
                {
                    label: "일반 매장",
                },
                {
                    label: "신규 매장",
                },
            ],
        },
        {
            title: "공지사항",
            items: [],
        },
        {
            title: "월페이퍼",
            items: [],
        },
    ],
};
