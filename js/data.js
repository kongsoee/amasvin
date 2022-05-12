/*
oreo/오레오 쉐이크 1
sahara/ 사하라(딸기 오렌지 파인애플) 2
choco/3 
yogurt-st/딸기요거트4
yogurt-pla/ 플레인요거트 5
yogurt-peach/ 복숭아 요거트 6
/macha/ 7
eargray/  8
taro/ 9 
sweet-potato/10
ratte/ 11
apple mango/ 12
rejamong-ade/레몬자몽에이드 13
oasis키위 사과 복숭이 14
peach-black 15



*/


const qnaList = [
    {
        q: "1. 나는 아마스빈을",
        a: [
            {answer : "자주 이용한다.", type:[7,11,12,13,14,5,3,4,10,9],},
            {answer : "거의 안가봤거나 잘모른다.", type:[1,6,0,8,2,15],},
        ],
    },
    {
        q: "2. 나는!",
        a: [
            {answer : "얼죽아다! 대부분 아이스 음료를 마신다.", type:[7,11,12,13,1,14,6,0,8,2,5,3,4,15],},
            {answer : "따죽뜨다! 대부분 핫음료를 마신다.", type:[10,9],},

        ],
    },
    {
        q: "3. 친구가 뭐 마시고싶냐고 물어본다. 이때 나는?",
        a: [
            {answer : "달달한걸 먹고싶어", type:[0,8,2,5,3,4,9]},
            {answer : "달지않고 무난한 걸 먹고싶어", type:[7,14,6,10,14,15]},
            {answer : "상큼한 과일맛을 먹고싶어", type:[11,12,13,1]},
        ]
    },
    {
        q: "4. 음료를 고르던 중 베스트 스티커가 붙은 음료들이 보인다.",
        a: [
            {answer : "베스트 스티커가 붙은것중에 고른다.", type:[1,6,0,8,2,3]},
            {answer : "원래 자주먹던걸로 먹는다.", type:[7,14,10,11,12,13,5,4,9,15]},
        ]
    },
    {
        q: "5. 나는 보통 카페를",
        a: [
            {answer : "밥 먹고 텁텁함을 없애기 위해 간다.", type:[10,11,1,4,13,12]},
            {answer : "공부하거나 일하러 간다.", type:[2,3,7,14,8]},
            {answer : "친구들과 맛있는 디저트를 먹으러 간다.", type:[15,0,5,6,9]},
        ]
    },
    {
        q: "6. 평소 카페에 가는것을 좋아하는 나, 이런 분위기의 카페를 원해!",
        a: [
            {answer : "힙하고 모던한 카페", type:[15,6,7,13,10]},
            {answer : "도박은 없다. 프렌차이즈 카페", type:[14,0,3,11,2,4]},
            {answer : "산 속에 있는 따뜻하고 편안한 분위기의 카페", type:[1,5,8,9,12]},
        ]
    },
    {
        q: "7. 메뉴판앞에서 무엇을 마실지 고민하는 나",
        a: [
            {answer : "빨리 골라야하는데 뭘 마시지? 이것도 맛있어보이고 저것도 맛있어보여!!", type:[0,1,2,4,5,9,11,12,13,14]},
            {answer : "1초만에 메뉴를 정한다.", type:[15,8,6,3,10,7]},
        ]
    },
    {
        q: "8. 호불호가 많이 갈리는 음료를 골랐다.",
        a: [
            {answer : "실패는 성공의 어머니! 도전해보자 맛있으면 오히려 좋아", type:[1,7,8,12,13,14]},
            {answer : "흠... 약간 불안한데,,그래도 지금은 이게 끌리니까 이걸 마시자!", type:[0,2,3,4,5,6,9,10,11,15]},
        ]
    }
]

const infoList = [
    {
        name : "오레오 쉐이크",
        desc : "완전 베스트 음료!<br> 오레오 분태가 들어가있어 더욱 달달하고 중독성 있는 음료입니다.<br>추천펄 : 타피오카펄, 당도 : 기본"
    },
    {
        name : "사하라",
        desc : "사과, 딸기, 오렌지를 블렌드한 음료입니다. 생소하지만 익숙한 조합으로 사하라 또한 베스트 음료입니다.<br>추천펄 : 코코펄 또는 알로에펄, 당도 : 기본"
    },    {
        name : "초코버블티",
        desc : "초코밀크티랑 다른 음료입니다. 밀크티는 얼그레이 베이스지만 초코버블티는 우유 베이스이기 때문에 더 달달하고 찐한 초코맛을 느낄 수 있어요! <br>추천펄 : 타피오카펄, 당도 : 기본"
    },
    {
        name : "딸기 요거트 버블티",
        desc : "블렌딩된 음료가 아니라서 개인적으로 강추!!! 딸기요거트 섞어서 갈면 맛이 인위적인데 이 음료는 진짜 맛있습니다..함만 먹어보시술 <br>추천펄 : 타피오카펄 또는 코코펄, 당도 : 기본"
    },
    {
        name : "플레인 요거트 버블티",
        desc : "무난하지만 너무 달지도 시지도 않은 음료! 이 음료 또한 갈지않아서 더욱 맛있어요~<br>추천펄 : 타피오카펄 또는 곤약젤리, 당도 : 기본"
    },
    {
        name : "복숭아 요거트 버블티",
        desc : "복숭아 요플레와 동일한 맛으로 너무 무겁지않은 맛입니다. <br>추천펄 : 타피오카펄, 당도 : 기본"
    },
    {
        name : "하동녹차 버블티",
        desc : "달지않은 녹차맛으로 아마스빈만의 쌉쌀한 하동녹차의 맛입니다. 더 단 맛을 원하시면 당도를 더달게로 요청하세요. <br>추천펄 : 타피오카펄, 당도 : 기본"
    },
    {
        name : "얼그레이 밀크티",
        desc : "아마스빈의 가장 기본적인 음료입니다.조금 쌉싸름한 감칠맛과 묘한 단맛이 매력적인 음료입니다. 밀크티를 좋아하시면 추천드려요! <br>추천펄 : 타피오카펄, 당도 : 기본"
    },
    {
        name : "타로 밀크티",
        desc : "흔하지않은 음료인 타로버블티입니다. 티베이스를 골라 마시는 음료로 얼그레이베이스가 가장 많이 나갑니다. 달달하고 진합니다. <br>추천펄 : 타피오카펄, 당도 : 기본"
    },
    {
        name : "구운 호박고구마 버블티",
        desc : "겨울 시즌에만 나오는 시즌 음료입니다. 다른 음료와는 다르게 핫으로 먹는걸 추천드리고 꼭 시나몬 뿌려드세요!! 고구마 무스가 아닌 진짜 고구마를 사용하기 때문에 더욱 맛있게 즐기실 수 있습니다. <br>추천펄 : 타피오카펄, 당도 : 기본"
    },
    {
        name : "카페라떼",
        desc : "그냥 라떼가 아닌 카페라떼에 펄추가하시는 것을 강추 드립니다! <br>추천펄 : 타피오카펄, 당도 : 기본"
    },
    {
        name : "애플망고 스무디",
        desc : "상큼한 음료를 마시고싶다하실 때 추천해드리는 애플망고 스무디입니다! 달고 맛있는 애플망고 스무디 드셔보세요. <br>추천펄 : 코코펄 또는 타피오카펄, 당도 : 기본"
    },
    {
        name : "레자몽 에이드",
        desc : "레몬과 자몽이 들어간 에이드 입니다. 탄산이 들어가기때문에 더욱 시원하고 색다르게 즐길수있습니다. 베이스는 물과 탄산을 정할수있어요! <br>추천펄 : 타피오카펄, 당도 : 기본"
    },
    {
        name : "오아시스",
        desc : "키위, 사과, 복숭아의 조합으로 블렌딩한 상큼한 과일음료입니다. 사하라 다음으로 잘나가는 과일 스무디로 과일 세 개의 조합이 조화롭고 사하라와 달리 물이 베이스이기 때문에 더욱 상큼하고 가볍게 드실 수 있습니다. <br>추천펄 : 코코펄 또는 알로에펄, 당도 : 기본"
    },
    {
        name : "피치 블랙티",
        desc : "블랙티의 향이 강하지 않아 복숭아 아이스티 느낌에 가까운편인 무난한 메뉴입니다! 깔끔한 맛을 좋아하시면 추천드려요. <br>추천펄 : 타피오카펄, 당도 : 기본"
    },
    {
        name : "아메리카노",
        desc : "버블티 카페에서 웬 아메리카노?? 하실 수 있겠지만 아메리카노를 그냥 가볍게 드셔도 맛있지만 펄 추가를 하셔서 드시는 분들도 많습니다! 맛잘알 <br>추천펄 : 타피오카펄, 당도 : 기본"
    },

]