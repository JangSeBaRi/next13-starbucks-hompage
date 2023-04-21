export interface drawerType {
    label: string;
    items?: drawerType[];
}

export const drawerList: drawerType[] = [
    {
        label: "My Starbucks",
        items: [
            {
                label: "한눈에 보기",
            },
            {
                label: "My 리워드",
                items: [
                    {
                        label: "리워드 및 혜택",
                    },
                    {
                        label: "별 히스토리",
                    },
                ],
            },
            {
                label: "My 스타벅스 카드",
                items: [
                    {
                        label: "보유 카드",
                    },
                    {
                        label: "카드 등록",
                    },
                    {
                        label: "카드 충전",
                    },
                    {
                        label: "분실신고/잔액이전",
                    },
                ],
            },
            {
                label: "My 스타벅스 e-Gift Card",
                items: [
                    {
                        label: "선물하기",
                    },
                    {
                        label: "선물 내역",
                    },
                    {
                        label: "장바구니 내역",
                    },
                ],
            },
            {
                label: "My 쿠폰",
                items: [
                    {
                        label: "등록하기",
                    },
                    {
                        label: "선물하기",
                    },
                    {
                        label: "사용하기",
                    },
                ],
            },
            {
                label: "My 캘린더",
            },
            {
                label: "My 메뉴",
            },
            {
                label: "My 고객의 소리",
            },
            {
                label: "전자영수증",
            },
            {
                label: "개인컵 리워드 설정",
            },
            {
                label: "My DT Pass",
            },
            {
                label: "개인정보 관리",
                items: [
                    {
                        label: "개인정보확인 및 수정",
                    },
                    {
                        label: "회원 탈퇴",
                    },
                    {
                        label: "비밀번호 변경",
                    },
                ],
            },
        ],
    },
    {
        label: "COFFEE",
        items: [
            {
                label: "한눈에 보기",
            },
            {
                label: "커피",
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
                label: "커피 이야기",
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
                label: "스타벅스 리저브",
                items: [
                    {
                        label: "ABOUT",
                    },
                    {
                        label: "RESERVE MAGAZINE",
                    },
                ],
            },
            {
                label: "에스프레소 음료",
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
                label: "최상의 커피를 즐기는 법",
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
    },
    {
        label: "MENU",
        items: [
            {
                label: "한눈에 보기",
            },
            {
                label: "음료",
                items: [
                    {
                        label: "전체보기",
                    },
                    {
                        label: "콜드브루",
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
                label: "푸드",
                items: [
                    {
                        label: "전체보기",
                    },
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
                        label: "스낵 & 미니디저트",
                    },
                    {
                        label: "아이스크림",
                    },
                ],
            },
            {
                label: "상품",
                items: [
                    {
                        label: "전체보기",
                    },
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
                label: "카드",
                items: [
                    {
                        label: "전체보기",
                    },
                    {
                        label: "실물카드",
                    },
                    {
                        label: "e-Gift 카드",
                    },
                ],
            },
            {
                label: "메뉴 이야기",
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
    },
    {
        label: "STORE",
        items: [
            {
                label: "한눈에 보기",
            },
            {
                label: "매장 찾기",
                items: [
                    {
                        label: "빠른 검색",
                    },
                    {
                        label: "지역 검색",
                    },
                ],
            },
            {
                label: "드라이브 스루 매장",
            },
            {
                label: "스타벅스 리저브 매장",
            },
            {
                label: "커뮤니티 스토어 매장",
            },
        ],
    },
    {
        label: "RESPONSIBILITY",
        items: [
            {
                label: "한눈에 보기",
            },
            {
                label: "사회공헌 캠페인 소개",
            },
            {
                label: "지역 사회 참여 활동",
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
                label: "환경보호 활동",
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
                label: "윤리 구매",
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
                label: "글로벌 사회 공헌",
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
    },
    {
        label: "Starbucks Rewards",
        items: [
            {
                label: "한눈에 보기",
            },
            {
                label: "스타벅스 리워드",
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
                label: "스타벅스 카드",
                items: [
                    {
                        label: "스타벅스 카드 소개",
                    },
                    {
                        label: "스타벅스 카드 갤러리",
                    },
                    {
                        label: "등록 및 조회",
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
                label: "스타벅스 e-Gift Card",
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
    },
    {
        label: "CORPORATE SALES",
        items: [
            {
                label: "단체 및 기업 구매 안내",
            },
            {
                label: "단체 주문 배달 안내",
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
    },
    {
        label: "WHAT'S NEW",
        items: [
            {
                label: "한눈에 보기",
            },
            {
                label: "이벤트",
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
                        label: "온라인",
                    },
                ],
            },
            {
                label: "뉴스",
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
                        label: "스타벅스 카드출시",
                    },
                ],
            },
            {
                label: "매장별 이벤트",
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
                label: "공지사항"
            },
            {
                label: "월페이퍼"
            },
        ],
    },
];
