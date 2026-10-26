// scenario-glamping.js
export default {
  id: "glamping",
  title: "비구름 몰려온 글램핑: 침묵의 계곡",
  subtitle: "폭우로 고립된 가평 계곡 글램핑장에서 일어난 추락 익사 사건",
  era: "2024년 늦여름, 경기도 가평 청평계곡 '루미너스 글램핑장'",
  victim: "박준혁 (32세 / 가상화폐 리딩방 운영자 및 전직 동창회 총무)",
  killerId: "minwoo", // 진범 ID: 이민우 (글램핑장 대표 겸 대학 동창)

  prologue: {
    bannerImg: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80",
    location: "가평 루미너스 글램핑장 VIP 텐트 및 인근 계곡 바위 절벽",
    story: [
      "2024년 늦여름, 10년 만의 대학 동창 모임으로 모인 다섯 사람은 경기도 가평 깊은 계곡의 프라이빗 글램핑장에 모였습니다.",
      "밤사이 쏟아진 기록적인 집중호우로 유일한 진입 다리가 물에 잠기고 통신 기지국마저 침수되어 완벽한 고립 상태가 되었습니다.",
      "밤 10시 정각, 코인 투자 대박으로 수십억 자산가가 되었다며 거들먹거리던 박준혁이 글램핑장 옆 7m 절벽 아래 급류 속에서 후두부가 깨진 익사체로 발견되었습니다.",
      "피해자의 스마트폰과 수십억이 보관된 하드웨어 암호화폐 지갑(콜드월렛)이 감쪽같이 사라졌습니다. 오직 진범만이 거짓말을 할 수 있습니다. 날이 밝기 전, 계곡의 비명 속에 숨겨진 추악한 진실을 밝혀내야 합니다."
    ]
  },

  characters: [
    {
      id: "donghyuk",
      name: "신동혁",
      role: "대기업 대리 / 피해자에게 전 재산을 맡긴 동창",
      isKiller: false,
      isDefault: true,
      avatarImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      description: "피해자 준혁의 말만 믿고 영끌 대출을 받아 코인에 2억을 투자했다가 전액 청산당해 파산 직전인 회사원.",
      secret: "당신은 오늘 밤 준혁에게 무릎을 꿇고 제발 원금의 일부라도 돌려달라고 애원하려 했습니다. 21:30경 바비큐장에서 실랑이를 벌이다 준혁이 당신을 비웃자 격분하여 멱살을 잡고 주먹다짐을 벌였습니다. 21:40경 준혁이 바닥에 나뒹굴자 겁이 나 자신의 텐트로 도망쳤을 뿐 살해하지 않았습니다.",
      timeline: [
        "21:10 - 공용 개수대에서 식기를 정리하며 술을 연거푸 마심",
        "21:35 - 바비큐장 뒤편에서 박준혁과 격렬한 주먹다짐 및 몸싸움을 벌임",
        "22:05 - 계곡 쪽에서 비명 소리가 들려 동창들과 함께 급류로 달려나감"
      ],
      alibiCards: [
        { id: "don_1", name: "신용대출 2억 독촉 문자", desc: "제2금융권과 대부업체에서 오늘 자정까지 상환하지 않으면 급여 압류에 들어가겠다는 문자.", img: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80" },
        { id: "don_2", name: "터진 입술과 손등의 찰과상", desc: "박준혁과 바비큐장 뒤편에서 격렬히 난투극을 벌이다 생긴 피멍 자국.", img: "https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=600&q=80" },
        { id: "don_3", name: "텐트 안 찌그러진 소주병", desc: "분노와 자괴감에 텐트에서 홀로 원샷하고 벽에 던져 찌그러뜨린 페트 소주병.", img: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=600&q=80" },
        { id: "don_4", name: "찢어진 차용증 서식", desc: "박준혁에게 강제로 지장을 찍게 하려다 몸싸움 중 찢겨버린 현금 차용증 종이 조각.", img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80" },
        { id: "don_5", name: "진흙 묻은 스포츠 샌들", desc: "바비큐장 진흙탕 바닥에서 실랑이를 벌이며 튄 젖은 흙탕물 자국.", img: "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?auto=format&fit=crop&w=600&q=80" }
      ]
    },
    {
      id: "minwoo",
      name: "이민우",
      role: "글램핑장 대표 / 자금난에 빠진 사업가",
      isKiller: true, // ★ 진범
      isDefault: true,
      avatarImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      description: "무리한 시설 확장과 부채로 인해 글램핑장이 경매에 넘어가기 일보 직전인 사장.",
      secret: "★ 당신이 진범입니다! 준혁에게 사정사정해 사업 자금을 빌려달라고 애원했으나, 준혁은 당신의 글램핑장을 헐값에 경매로 낙찰받아 빼앗겠다고 조롱했습니다. 21:45경 취해서 비틀거리며 계곡 난간에 서 있던 준혁의 머리를 무거운 바비큐용 숯 집게로 후려쳐 기절시킨 뒤, 비바람 속에 발로 차서 절벽 아래 계곡 급류로 떨어뜨려 익사시켰습니다. 직후 그가 목에 걸고 있던 50억 상당의 콜드월렛 USB를 빼앗아 관리동 배전함 뒤에 은닉했습니다.",
      timeline: [
        "21:20 - 관리동에서 우천 대비용 비상 발전기 전원을 점검",
        "21:45 - 절벽 난간 옆에서 박준혁의 머리를 숯 집게로 가격해 계곡으로 추락시킴",
        "22:00 - 피 묻은 숯 집게를 바비큐 소각 화로 잿더미 속에 쑤셔 넣고 관리실로 복귀"
      ],
      alibiCards: [
        { id: "min_1", name: "글램핑장 부동산 임의경매 통지서", desc: "이달 말일까지 3억을 변제하지 않으면 시설 전체가 법원 경매로 처분된다는 법원 등기.", img: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80" },
        { id: "min_2", name: "배전함에 숨긴 암호화폐 콜드월렛", desc: "박준혁의 목걸이에서 뜯어내 관리동 고압 배전함 틈새에 숨겨둔 검은색 USB 하드웨어 지갑.", img: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=600&q=80" },
        { id: "min_3", name: "피가 튄 두꺼운 노란 우비", desc: "등 뒤와 소매 안쪽에 피해자의 핏방울이 미세하게 스며든 방수 우비.", img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&q=80" },
        { id: "min_4", name: "그을린 무쇠 숯 집게", desc: "끝부분에 혈흔과 살점이 묻은 채 화로 숯불 재 속에 쑤셔 박혀 있던 둔기 집게.", img: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=600&q=80" },
        { id: "min_5", name: "관리동 마스터 키패드 리모컨", desc: "글램핑장 내 모든 VIP 텐트와 창고, 관리실을 무음으로 개폐할 수 있는 전용 마스터 키.", img: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=600&q=80" }
      ]
    },
    {
      id: "soyeon",
      name: "서소연",
      role: "인테리어 디자이너 / 피해자의 약혼녀",
      isKiller: false,
      isDefault: true,
      avatarImg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      description: "올가을 박준혁과 결혼을 앞둔 약혼녀이자 대학 동기. 겉으로는 완벽한 커플로 보임.",
      secret: "당신은 오늘 오후 우연히 준혁의 보조 스마트폰을 보았다가, 그가 동창 친구들을 속여 사기 코인 리딩방을 운영해 왔으며 자신 몰래 다른 여성과 양다리를 걸치고 있었다는 끔찍한 진실을 알게 되었습니다. 21:25경 VIP 텐트에서 파혼을 선언하며 결혼반지를 집어던졌습니다. 그 후 충격으로 텐트 안에서 울고 있었을 뿐 죽이지 않았습니다.",
      timeline: [
        "21:00 - 저녁 식사 후 VIP 텐트로 들어가 짐을 정리함",
        "21:25 - 박준혁과 대판 싸우고 파혼을 통보하며 다이아몬드 반지를 던짐",
        "22:05 - 비명 소리를 듣고 맨발로 뛰어나와 계곡을 바라봄"
      ],
      alibiCards: [
        { id: "soy_1", name: "바닥에 던져진 다이아 약혼반지", desc: "VIP 텐트 카펫 모서리 구석에 격렬한 다툼 끝에 내동댕이쳐진 명품 반지.", img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80" },
        { id: "soy_2", name: "준혁의 세컨드폰 캡처 사진", desc: "다른 여성과의 부적절한 대화 및 해외 도피 계획이 고스란히 담긴 캡처 인쇄물.", img: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80" },
        { id: "soy_3", name: "눈물로 번진 마스카라와 화장솜", desc: "배신감에 텐트에서 홀로 오열하며 얼굴을 닦아낸 화장 휴지 쓰레기들.", img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80" },
        { id: "soy_4", name: "신경안정제 복용약 봉투", desc: "공황 발작을 가라앉히기 위해 사건 직전 복용한 정신과 처방 신경안정제 알약.", img: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=600&q=80" },
        { id: "soy_5", name: "진흙 범벅이 된 명품 슬리퍼", desc: "텐트 밖 계곡 쪽으로 비틀거리며 뛰쳐나오다 흙탕물에 젖은 실내용 슬리퍼.", img: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=600&q=80" }
      ]
    },
    {
      id: "jaehoon",
      name: "정재훈",
      role: "IT 보안 개발자 / 피해자의 절친",
      isKiller: false,
      isDefault: true,
      avatarImg: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
      description: "학창 시절부터 박준혁의 그림자처럼 붙어 다닌 절친이자 코인 시스템 자문을 맡아준 개발자.",
      secret: "당신은 준혁의 50억 코인 지갑 복구 시드 구문(12자리 복구 암호)을 몰래 해킹하여 적어둔 메모지를 소지하고 있었습니다. 오늘 밤 준혁이 잠들면 콜드월렛을 바꿔치기해 코인을 전액 해외 거래소로 빼돌릴 계획이었습니다. 21:40경 준혁의 텐트에 몰래 침입해 가방을 뒤지다 발소리가 들려 황급히 숨어 나왔습니다.",
      timeline: [
        "21:15 - 캠핑 의자에서 노트북으로 암호화폐 시세를 모니터링함",
        "21:40 - 준혁의 텐트에 몰래 들어가 콜드월렛을 찾기 위해 여행 가방을 뒤짐",
        "22:05 - 계곡 쪽에서 사람들의 웅성거리는 소리를 듣고 노트북을 덮음"
      ],
      alibiCards: [
        { id: "jae_1", name: "손으로 적은 12자리 시드 구문", desc: "박준혁의 50억 지갑을 복원할 수 있는 영문 니모닉 복구 단어가 적힌 메모장.", img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80" },
        { id: "jae_2", name: "가짜 모형 콜드월렛 USB", desc: "준혁의 지갑과 외형이 완전히 똑같은 빈 깡통 모형 USB 장치.", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80" },
        { id: "jae_3", name: "해킹 툴이 켜진 노트북", desc: "포트 스캐닝 및 블루투스 키로깅 로그가 기록된 재훈의 고성능 노트북.", img: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=600&q=80" },
        { id: "jae_4", name: "바람막이 안주머니의 케이블 타이", desc: "혹시 모를 긴급 상황에 대비해 가방에 넣어두었던 검은색 플라스틱 결박선.", img: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=600&q=80" },
        { id: "jae_5", name: "피해자 텐트 출입 지문", desc: "준혁의 텐트 지퍼 손잡이와 캐리어 자물쇠에서 검출된 정재훈의 지문 자국.", img: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=600&q=80" }
      ]
    },
    {
      id: "yura",
      name: "한유라",
      role: "글램핑장 야간 아르바이트생 / 대학생 (5인 전용)",
      isKiller: false,
      isDefault: false,
      avatarImg: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      description: "방학을 맞아 글램핑장에서 숙식하며 주방 보조와 야간 청소를 돕는 휴학생.",
      secret: "당신은 사실 불법 리딩방 사기로 부모님이 전 재산을 잃고 가정이 파탄 났으며, 그 리딩방의 총책이 박준혁이라는 것을 알고 복수하기 위해 일부러 이번 모임 글램핑장에 아르바이트로 지원했습니다. 21:10경 준혁의 위스키 잔에 설사 유도제와 수면제를 몰래 타 넣었으나, 살해까지 실행하지는 못하고 주방에서 떨고 있었습니다.",
      timeline: [
        "21:10 - 공용 주방에서 박준혁의 위스키 글라스에 몰래 약품을 탑재",
        "21:35 - 분리수거장에서 쓰레기봉투를 정리하며 박준혁의 동태를 살핌",
        "22:05 - 계곡 쪽에서 쿵 하는 소리와 고함을 듣고 손전등을 켜고 현장으로 달려감"
      ],
      alibiCards: [
        { id: "yur_1", name: "캡슐 형태의 강력 수면유도제", desc: "처방전 없이 불법 경로로 구한 졸피뎀 성분의 캡슐 약품 껍질.", img: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=600&q=80" },
        { id: "yur_2", name: "리딩방 피해자 대책위 서류", desc: "부모님의 피해 고소장과 박준혁의 얼굴 사진이 붉은 펜으로 그어진 문서.", img: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80" },
        { id: "yur_3", name: "주방 앞치마 속 다용도 커터칼", desc: "상자 개봉용으로 쓰던 날카롭게 칼날이 세워진 대형 노란색 공업용 커터칼.", img: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&w=600&q=80" },
        { id: "yur_4", name: "고성능 방수 손전등", desc: "폭우 속에서도 강한 불빛을 내는 야간 수색용 대형 충전식 손전등.", img: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=600&q=80" },
        { id: "yur_5", name: "젖은 장화와 주방 고무장갑", desc: "개수대 청소를 하느라 비눗물과 물기가 흥건하게 묻어 있는 빨간 고무장갑.", img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80" }
      ]
    }
  ],

  clues: [
    { id: "g_c01", name: "계곡 바위에 걸린 준혁의 시신", desc: "후두부에 강한 둔기 타격 흔적이 있으며, 폐에 물이 차 있는 것으로 보아 익사함.", img: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=600&q=80" },
    { id: "g_c02", name: "부러진 계곡 절벽 나무 난간", desc: "사람이 밀려 떨어지면서 하중을 이기지 못하고 부러진 듯한 거친 파손 흔적.", img: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=600&q=80" },
    { id: "g_c03", name: "절벽 바위 위의 선명한 핏자국", desc: "난간 바닥 바위 표면에 낭자하게 튀어 빗물에 씻겨 내려가던 희미한 핏자국.", img: "https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=600&q=80" },
    { id: "g_c04", name: "피해자의 깨진 애플워치", desc: "바위에 부딪혀 충격으로 액정이 깨지며 21시 47분에 심박수가 급정지한 스마트워치.", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80" },
    { id: "g_c05", name: "피해자의 끊어진 금목걸이 줄", desc: "목에 차고 있던 콜드월렛이 강제로 뜯겨져 나가며 끊어진 금목걸이 체인 조각.", img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80" },
    { id: "g_c06", name: "화로 잿더미 속 무쇠 숯 집게", desc: "이민우가 급히 화로 재 속에 쑤셔 넣었으나 손잡이에 미세한 혈흔 반응이 남은 집게.", img: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=600&q=80" },
    { id: "g_c07", name: "관리동 배전함 속 콜드월렛", desc: "전력 차단기 밑바닥 틈새에서 발견된 박준혁 소유의 50억 코인 하드웨어 USB 지갑.", img: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=600&q=80" },
    { id: "g_c08", name: "바비큐장의 뒤엉킨 족적", desc: "신동혁과 박준혁이 몸싸움을 벌여 테이블과 의자가 쓰러지고 엉망이 된 진흙 바닥.", img: "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?auto=format&fit=crop&w=600&q=80" },
    { id: "g_c09", name: "VIP 텐트 바닥의 약혼반지", desc: "약혼녀 서소연이 파혼을 선언하며 집어던진 2캐럿 상당의 명품 다이아몬드 반지.", img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80" },
    { id: "g_c10", name: "피해자의 뒤져진 캐리어 가방", desc: "정재훈이 콜드월렛을 찾기 위해 지퍼를 열고 옷가지를 마구 헤집어 놓은 여행 가방.", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80" },
    { id: "g_c11", name: "피해자의 위스키 잔 잔여물", desc: "알바생 한유라가 몰래 탔던 신경안정제 성분이 바닥에 하얗게 침전된 크리스털 온더락 잔.", img: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=600&q=80" },
    { id: "g_c12", name: "침수된 글램핑장 진입 다리", desc: "계곡물이 불어나 승용차와 인마의 통행이 완전히 차단된 현장 사진.", img: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=600&q=80" },
    { id: "g_c13", name: "절벽 진흙탕의 군화형 장화 자국", desc: "사장 이민우의 안전장화 바닥 트레드 패턴과 100% 일치하는 절벽 난간의 발자국.", img: "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?auto=format&fit=crop&w=600&q=80" },
    { id: "g_c14", name: "이민우 우비 안쪽의 미세 혈흔", desc: "루미놀 반응 검사 결과 피해자의 혈액형과 일치하는 미세 비산 혈흔이 검출됨.", img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&q=80" },
    { id: "g_c15", name: "박준혁의 비밀 해외 밀항 티켓", desc: "투자자들의 돈을 들고 동남아로 야반도주하기 위해 발권해 둔 편도 항공권 영수증.", img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80" },
    { id: "g_c16", name: "글램핑장 대출 채무 독촉장", desc: "이민우 사장이 사채업자로부터 받은 '자정까지 이자를 입금하라'는 거친 협박 메모.", img: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80" },
    { id: "g_c17", name: "신동혁의 찢어진 차용증 조각", desc: "바비큐장 의자 밑에서 발견된 '2억 원 변제 약속'이라는 신동혁 필적의 종이 파편.", img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80" },
    { id: "g_c18", name: "절벽 난간에 걸린 노란 우비 섬유", desc: "피해자를 밀어 떨어뜨릴 때 찢겨나간 이민우의 노란색 방수 우비 조각.", img: "https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=600&q=80" },
    { id: "g_c19", name: "한유라의 가족 탄원서", desc: "준혁의 코인 사기로 전 재산을 잃고 쓰러진 모친의 입원 영수증 및 진정서 사본.", img: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80" },
    { id: "g_c20", name: "정재훈의 포맷된 백업 외장하드", desc: "시드 구문을 복사하려 했던 흔적이 남아 있는 정재훈 소유의 외장 드라이브.", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80" },
    { id: "g_c21", name: "계곡 급류 속 스마트폰 방수팩", desc: "물속에 던져졌으나 방수팩에 담겨 있어 복구 가능한 상태인 박준혁의 메인 스마트폰.", img: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=600&q=80" },
    { id: "g_c22", name: "피해자 두개골 골절 함몰 부위", desc: "숯 집게의 뭉툭한 머리 부분의 굴곡 및 격자 형태와 정확히 일치하는 두개골 상흔.", img: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=600&q=80" },
    { id: "g_c23", name: "서소연의 파혼 통보 음성 녹음", desc: "21시 25분경 VIP 텐트에서 준혁의 사기와 외도를 비난하는 소연의 서러운 울음소리 녹음.", img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80" },
    { id: "g_c24", name: "공용 관리동 분전반 조작 기록", desc: "21:40경 계곡 쪽 가로등 조명을 고의로 소등하여 암전을 유도한 스위치 조작 흔적.", img: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=600&q=80" }
  ],

  endings: {
    truth: "사건의 진실: 박준혁을 살해한 진범은 글램핑장 사장 **'이민우'**입니다. 이민우는 글램핑장이 경매에 넘어가기 직전 준혁에게 자금 융통을 간청했으나, 준혁이 자신의 사업장을 헐값에 강탈하려 한다는 본색을 드러내자 살의를 품었습니다. 약물과 술에 취해 난간에 비틀거리며 서 있던 준혁을 21:45경 무쇠 숯 집게로 내려친 뒤 계곡 절벽 아래 급류로 밀어 떨어뜨렸습니다. 이후 50억 상당의 코인이 든 콜드월렛을 탈취해 배전함에 숨기고 사고사로 위장하려 했습니다.",
    citizenWin: {
      title: "비구름 걷힌 글램핑: 밝혀진 진실 (시민 승리)",
      badge: "TRUTH DISCLOSED",
      bannerImg: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80",
      epilogues: {
        donghyuk: "신동혁: 몸싸움으로 인한 살인 누명을 벗었으나, 박준혁의 사기로 날린 2억 원의 빚을 갚기 위해 힘겨운 개인회생 절차를 밟으며 참회합니다.",
        minwoo: "이민우: 숯 집게에 남은 혈흔과 배전함 속 콜드월렛이 결정적 증거가 되어 현장에 도착한 경찰에 강도살인 혐의로 긴급 체포됩니다.",
        soyeon: "서소연: 사기꾼 약혼자의 추악한 민낯에서 벗어나 파혼의 상처를 추스르고, 자신의 본업인 디자이너로서 새로운 삶을 향해 나아갑니다.",
        jaehoon: "정재훈: 친구의 지갑을 털려 했던 비열한 계획은 미수에 그쳤으나, 양심의 가책을 느끼고 경찰에 코인 리딩방 사기 수사 증거를 모두 넘깁니다.",
        yura: "한유라: 독극물(약물) 투여 행위는 적발되었으나 피해자가 익사로 사망했음이 밝혀지고 정상이 참작되어 기소유예 처분을 받습니다."
      }
    },
    killerWin: {
      title: "계곡의 영원한 침묵: 완전 범죄 (진범 승리)",
      badge: "COLD RETRIBUTION",
      bannerImg: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80",
      epilogues: {
        donghyuk: "신동혁: 사건 직전 박준혁과 격렬한 난투극을 벌이고 멱살을 잡았던 정황 탓에 격분으로 밀쳐 죽인 우발적 살인범으로 몰려 구속 수감됩니다.",
        minwoo: "이민우: 모든 혐의를 벗고 폭우 속 빗길 실족사로 위장하는 데 성공합니다. 은닉해 둔 50억 콜드월렛의 자금을 현금화하여 부채를 모두 털고 잠적합니다.",
        soyeon: "서소연: 현장에 버려진 다이아 반지와 파혼 다툼 때문에 배신감에 눈이 멀어 약혼자를 밀어버린 패륜적 살인자로 지목되어 삶이 파멸합니다.",
        jaehoon: "정재훈: 가방을 뒤진 지문과 모형 USB가 발각되며 돈을 노리고 절친을 살해한 파렴치범으로 낙인찍혀 징역형을 선고받습니다.",
        yura: "한유라: 잔에 탄 약물 성분이 검출되면서 원한에 의한 계획 독살 시도범으로 지목되어 무거운 법적 처벌을 받게 됩니다."
      }
    }
  }
};