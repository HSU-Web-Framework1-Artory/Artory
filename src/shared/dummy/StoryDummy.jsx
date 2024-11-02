import POSTER1 from '../../assets/poster/1.svg';
import POSTER2 from '../../assets/poster/2.svg';
import POSTER3 from '../../assets/poster/3.svg';
import POSTER4 from '../../assets/poster/4.svg';
import POSTER5 from '../../assets/poster/5.svg';

export const Stories = [
    {
        "포스터": POSTER1,
        "작성자": "홍길동",
        "글제목": "빛과 색의 조화 감상기",
        "방문일": "2024-03-05",
        "관람소요시간": "2시간",
        "만족도": 5, // 1에서 5까지의 숫자
        "날씨": "맑음",
        "동행인": "친구",
        "카테고리": ["현대 미술", "색채 예술"], // 여러 카테고리
        "글내용": [
            "이번 전시회는 색과 빛의 조화가 정말 인상적이었어요.",
            { "이미지": "../../assets/content-images/art1.jpg" }, // 사진 포함
            "각 작품이 독창적이었고, 작가의 의도가 잘 느껴졌습니다.",
            { "이미지": "../../assets/content-images/art2.jpg" },
            "특히 마지막 전시물은 감동적이었습니다."
        ]
    },
    {
        "포스터": POSTER2,
        "작성자": "김영희",
        "글제목": "미래 도시를 꿈꾸며",
        "방문일": "2024-04-10",
        "관람소요시간": "1시간 30분",
        "만족도": 4,
        "날씨": "비",
        "동행인": "가족",
        "카테고리": ["건축", "미래 디자인"],
        "글내용": [
            "미래의 건축과 도시 디자인을 볼 수 있는 좋은 기회였습니다.",
            { "이미지": "../../assets/content-images/city1.jpg" },
            "특히 친환경 건축에 대한 전시물이 흥미로웠어요. 다만 비가 와서 이동이 조금 불편했습니다."
        ]
    },
    {
        "포스터": POSTER3,
        "작성자": "이민호",
        "글제목": "디지털 아트의 세계로",
        "방문일": "2024-05-15",
        "관람소요시간": "2시간 30분",
        "만족도": 5,
        "날씨": "흐림",
        "동행인": "혼자",
        "카테고리": ["디지털 아트", "미디어 아트"],
        "글내용": [
            "디지털 아트와 기술의 결합이 너무 놀라웠습니다.",
            { "이미지": "../../assets/content-images/digital1.jpg" },
            "작품들이 하나같이 생동감 있고, 미래 기술이 얼마나 발전할 수 있는지 알게 되었어요. 추천합니다!"
        ]
    },
    {
        "포스터": POSTER4,
        "작성자": "박수진",
        "글제목": "고대 문명 전시, 시간 여행",
        "방문일": "2024-06-15",
        "관람소요시간": "3시간",
        "만족도": 4,
        "날씨": "맑음",
        "동행인": "연인",
        "카테고리": ["역사", "고고학"],
        "글내용": [
            "고대 문명의 미스터리와 신비로움을 느낄 수 있었던 전시회였습니다.",
            { "이미지": "../../assets/content-images/history1.jpg" },
            "유물들이 정말 잘 보존되어 있었고, 설명도 상세해서 이해하기 좋았어요."
        ]
    },
    {
        "포스터": POSTER5,
        "작성자": "최지훈",
        "글제목": "미래 도시와 스마트 라이프 체험",
        "방문일": "2024-07-20",
        "관람소요시간": "1시간",
        "만족도": 3,
        "날씨": "더움",
        "동행인": "동료",
        "카테고리": ["스마트 테크", "미래 생활"],
        "글내용": [
            "스마트 도시 기술을 소개하는 전시였습니다.",
            { "이미지": "../../assets/content-images/smartcity1.jpg" },
            "흥미로운 내용이 많았지만, 너무 더운 날씨라 집중하기 힘들었어요. 전시장의 에어컨이 좀 더 강했으면 좋았을 것 같습니다."
        ]
    }
];
