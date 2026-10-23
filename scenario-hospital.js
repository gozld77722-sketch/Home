// scenario-hospital.js
export default {
  id: "hospital",
  title: "안개 낀 폐쇄병원: 침묵의 병동",
  subtitle: "외부와 단절된 심산유곡 폐쇄 정신병원의 밀실 추락 사건",
  era: "1987년 강원도 산간 세인트 헬레나 폐쇄병원",
  victim: "백도현 (병원장 / 정신과 전문의)",
  killerId: "han", // 진범 ID: 한수민 (수간호사)

  prologue: {
    bannerImg: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    location: "세인트 헬레나 요양병원 본관 3층 원장실 및 안뜰",
    story: [
      "1987년 늦가을 밤, 짙은 산안개와 산사태로 유일한 진입로가 무너져 강원도 산골짜기의 세인트 헬레나 폐쇄병원은 완벽히 고립되었습니다.",
      "밤 10시 정각, 병원 폐업을 앞두고 환자 강제 이송을 지시하던 원장 백도현이 3층 원장실 창문 아래 안뜰 시멘트 바닥에서 싸늘한 주검으로 발견되었습니다.",
      "원장의 목에는 날카로운 약물 주사 바늘 자국이 남아 있었고, 그가 개인 금고에 보관 중이던 '극비 환자 생체 임상실험 일지' 원본이 감쪽같이 사라졌습니다.",
      "외부 전화선마저 절단된 채 병원에 갇힌 5명의 사람들. 오직 진범만이 거짓말을 할 수 있습니다. 동이 트기 전, 안개 속 묻힌 잔혹한 진실을 밝혀내야 합니다."
    ]
  },

  characters: [
    {
      id: "kang",
      name: "강진우",
      role: "부원장 / 신경정신과 전문의",
      isKiller: false,
      isDefault: true,
      avatarImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      description: "백도현 원장의 오랜 후배이자 병원의 실질적인 의료 행정을 도맡아온 신경정신과 의사.",
      secret: "당신은 백도현 원장이 당신 몰래 병원 공금을 횡령하고 환자 사망 사고의 책임을 당신에게 뒤집어씌우려던 고발 서류를 오늘 밤 폐기하려 했습니다. 21:40경 마스터키로 원장실에 잠입했으나, 원장은 책상 위에 쓰러져 의식이 희미한 상태였습니다. 겁에 질린 당신은 금고 옆 횡령 증빙 서류 뭉치만 챙겨 서둘러 도망쳤을 뿐 살해하지 않았습니다.",
      timeline: [
        "21:15 - 2층 진료실에서 환자 차트를 정리하며 위스키를 마심",
        "21:40 - 3층 원장실에 몰래 침입해 자신에 관한 모함 서류를 훔쳐 나옴",
        "22:05 - 비명 소리를 듣고 1층 안뜰로 달려나감"
      ],
      alibiCards: [
        { id: "kan_1", name: "빼돌린 공금 횡령 감사서류", desc: "원장이 강진우의 서명을 위조해 비자금을 조성하려던 정황이 담긴 문서 사본.", img: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80" },
        { id: "kan_2", name: "원장실 복도에 떨어진 만년필", desc: "강진우의 이니셜(J.W. Kang)이 새겨진 고급 금촉 만년필. 3층 카펫에 떨어져 있었음.", img: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=600&q=80" },
        { id: "kan_3", name: "의사 가운에 묻은 붉은 와인 자국", desc: "불안감에 손을 떨다 진료실에서 쏟은 붉은 포도주 얼룩.", img: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=600&q=80" },
        { id: "kan_4", name: "복제된 원장실 예비 열쇠", desc: "원장실 자물쇠를 몰래 열기 위해 열쇠공을 통해 복제해 둔 황동 열쇠.", img: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=600&q=80" },
        { id: "kan_5", name: "의료과실 고소 협박장", desc: "백도현 원장이 보낸 '모든 의료사고의 주동자로 너를 검찰에 넘기겠다'는 협박 편지.", img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80" }
      ]
    },
    {
      id: "han",
      name: "한수민",
      role: "수간호사 / 병동 총괄 관리자",
      isKiller: true, // ★ 진범
      isDefault: true,
      avatarImg: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      description: "10년 넘게 폐쇄병동을 묵묵히 지켜온 베테랑 수간호사. 원장의 모든 명령을 수행해 옴.",
      secret: "★ 당신이 진범입니다! 원장은 5년 전 당신의 여동생을 병원 지하 격리실에 감금하고 불법 신약 생체실험 대상으로 삼아 결국 뇌사 상태로 사망에 이르게 했습니다. 오늘 밤 원장이 증거를 인멸하고 해외로 도주하려 한다는 사실을 알고, 21:30경 신경안정제라 속여 치사량의 근이완제(석시닐콜린)를 목에 주사했습니다. 그가 마비되어 숨을 헐떡이자 3층 창문 밖으로 밀어 떨어뜨리고 임상실험 일지를 소각로에 태웠습니다.",
      timeline: [
        "21:10 - 주사실에서 야간 주사제를 준비함",
        "21:30 - 원장실에 들어가 백도현 원장 목에 치사량 근이완제를 주사하고 창밖으로 추락시킴",
        "21:50 - 지하 보일러실 소각로에 실험 일지를 던져 넣고 주사기를 배수구에 은폐"
      ],
      alibiCards: [
        { id: "han_1", name: "비어 있는 석시닐콜린 앰플", desc: "응급 주사실 약품함에서 몰래 빼내 투약하고 버린 근이완제 유리 앰플.", img: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=600&q=80" },
        { id: "han_2", name: "소각로의 불탄 임상일지 파편", desc: "지하 보일러실 재 속에서 미처 다 타지 않은 채 수거된 실험 차트 모서리.", img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80" },
        { id: "han_3", name: "여동생의 사망 진단서 원본", desc: "사망 원인이 '급성 심부전'으로 위조된 한수민 친동생의 옛 진료 기록.", img: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80" },
        { id: "han_4", name: "약품 얼룩이 묻은 라텍스 장갑", desc: "독약을 주사할 때 착용했던 미세 화학 잔류물이 검출된 수술용 장갑.", img: "https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=600&q=80" },
        { id: "han_5", name: "수간호사 열쇠 보관함 열쇠", desc: "병동의 모든 약품 캐비닛과 지하 보일러실을 개폐할 수 있는 전용 마스터키.", img: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=600&q=80" }
      ]
    },
    {
      id: "yoon",
      name: "윤태식",
      role: "야간 경비원 / 전직 시설관리자",
      isKiller: false,
      isDefault: true,
      avatarImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      description: "폐쇄병원의 음산한 복도와 지하실을 20년째 순찰해온 나이 든 야간 경비원.",
      secret: "당신은 원장이 지난 수개월간 체불한 퇴직금과 밀린 월급을 한 푼도 주지 않고 병원을 야반도주하려 한다는 말을 들었습니다. 앙심을 품고 21:20경 원장실 비밀 수납장에서 금괴와 비상용 엔화 뭉치를 훔쳐 지하실 환풍구 뒤에 숨겼습니다. 절도 행각이 발각될까 봐 사건 당시 정위치에서 보초를 서고 있었다고 거짓 진술했습니다.",
      timeline: [
        "21:00 - 정문 출입문 빗장을 걸고 외곽 순찰",
        "21:20 - 원장실에 잠입해 비상 금고의 현금과 금괴를 탈취해 은닉",
        "22:00 - 쿵 하는 둔탁한 추락음을 듣고 안뜰로 달려가 시체 발견"
      ],
      alibiCards: [
        { id: "yoo_1", name: "환풍구에 숨긴 금괴와 엔화", desc: "지하실 배기구 안쪽에 검은 비닐봉지로 감싸 숨겨둔 고액 현금과 골드바.", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80" },
        { id: "yoo_2", name: "경비원의 철제 마스터 열쇠", desc: "원장실을 포함해 병원 전 구역의 낡은 철문을 열 수 있는 관리자 열쇠 꾸러미.", img: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=600&q=80" },
        { id: "yoo_3", name: "체불 임금 독촉 각서", desc: "밀린 월급을 주지 않으면 노동청에 불법 감금 시설로 고발하겠다는 거친 자필 메모.", img: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80" },
        { id: "yoo_4", name: "기름때 묻은 작업용 면장갑", desc: "지하실 통풍구를 열고 닫을 때 묻은 시커먼 녹과 윤활유 자국.", img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80" },
        { id: "yoo_5", name: "경비실 순찰 일지", desc: "21시부터 22시까지 '특이사항 없음'으로 일괄 허위 작성해 둔 순찰 장부.", img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80" }
      ]
    },
    {
      id: "song",
      name: "송하은",
      role: "장기 입원 환자 / 화가 지망생",
      isKiller: false,
      isDefault: true,
      avatarImg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      description: "과거 유산 상속을 노린 가족들에 의해 강제 입원당한 20대 여성 환자.",
      secret: "당신은 정신병자가 아니며, 병원을 탈출하기 위해 환자복 속에 날카로운 메스를 숨겨두고 기회를 엿보고 있었습니다. 21:45경 3층 비상계단을 오르다 원장실 창문에서 누군가가 흰 가운을 입은 사람을 바깥으로 밀어 떨어뜨리는 실루엣을 똑똑히 목격했습니다. 살인자의 얼굴을 보지는 못했으나 공포에 질려 병실로 도망쳤습니다.",
      timeline: [
        "21:15 - 병실 침대 밑에 탈출용 사복과 가방을 숨김",
        "21:45 - 3층 비상계단 유리창 너머로 추락 순간의 실루엣을 목격",
        "22:05 - 사람들의 웅성거리는 소리를 듣고 1층 로비로 내려옴"
      ],
      alibiCards: [
        { id: "son_1", name: "환자복 속에 숨겨둔 수술용 메스", desc: "약품실에서 탈출 호신용으로 몰래 훔쳐 소지하고 있던 날카로운 칼날.", img: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=600&q=80" },
        { id: "son_2", name: "사건 순간을 그린 목탄 스케치", desc: "어둠 속에서 창밖으로 사람이 밀쳐져 떨어지는 순간을 급히 묘사한 종이 드로잉.", img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80" },
        { id: "son_3", name: "찢어진 환자복 밑단 조각", desc: "3층 계단 난간 틈새 철조망에 긁혀 뜯겨나간 파란 줄무늬 환자복 천.", img: "https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=600&q=80" },
        { id: "son_4", name: "가족들의 강제 입원 동의서", desc: "정상인인 송하은을 유산 분쟁 때문에 정신병원에 가둔 가족들의 서명 문서.", img: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80" },
        { id: "son_5", name: "창틀에 묻은 보랏빛 유화 물감", desc: "3층 계단 창문 틀에서 채취된 송하은의 손에 묻어 있던 유화 물감 자국.", img: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=600&q=80" }
      ]
    },
    {
      id: "min",
      name: "민도혁",
      role: "르포 전문 탐사기자 (5인 전용)",
      isKiller: false,
      isDefault: false,
      avatarImg: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
      description: "정신병원 내 환자 인권 유린과 불법 인체실험 폭로 기사를 쓰기 위해 보호자로 위장 잠입한 기자.",
      secret: "당신은 익명의 제보자로부터 '원장이 오늘 밤 증거를 모두 태우고 밀항한다'는 전화를 받고 잠입했습니다. 플래시 카메라로 3층 복도와 병원 비밀 시설을 도촬하느라 여념이 없었으며, 셔터 소리가 새어나갈까 봐 숨어 있었습니다.",
      timeline: [
        "21:00 - 보호자 대기실에서 소형 카메라 렌즈를 점검",
        "21:35 - 3층 복도 어둠 속에 숨어 원장실 쪽 인영들을 도촬 시도",
        "22:05 - 사건이 터지자 정식 기자 신분증을 꺼내며 현장 통제를 요구"
      ],
      alibiCards: [
        { id: "min_1", name: "고성능 필름 카메라와 망원렌즈", desc: "어두운 복도에서도 촬영이 가능한 감도 높은 흑백 필름이 장전된 카메라.", img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80" },
        { id: "min_2", name: "시사 주간지 정식 기자증", desc: "서울 메이저 언론사의 사회부 소속 르포 취재 전문 기자 신분증.", img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80" },
        { id: "min_3", name: "병원 불법 임상 취재 취합 노트", desc: "수면제 과다 투여와 실종된 무연고자 환자 명단이 적힌 메모 수첩.", img: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80" },
        { id: "min_4", name: "지하실 배관 비밀 약도", desc: "익명의 내부 고발자가 기자에게 전달해 준 병원 비밀 지하실의 손배치도.", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80" },
        { id: "min_5", name: "녹음용 휴대 카세트 테이프", desc: "원장실 주변의 말소리를 도청 녹음하려 했던 미니 마이크와 테이프 레코더.", img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80" }
      ]
    }
  ],

  clues: [
    { id: "h_c01", name: "안뜰 바닥의 원장 시신", desc: "두개골 골절과 척추 손상으로 즉사했으나, 목 부위에 작은 피하 주사바늘 자국이 관찰됨.", img: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=600&q=80" },
    { id: "h_c02", name: "활짝 열린 3층 원장실 창문", desc: "잠금 걸쇠가 풀려 안개바람에 덜컹거리는 창틀. 창틀 바깥턱에 사람을 밀쳐낸 마찰흔이 있음.", img: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=600&q=80" },
    { id: "h_c03", name: "열려 있는 벽면 철제 금고", desc: "비밀번호가 풀려 휑하니 열려 있으며, 중요한 실험 일지와 보관 금괴가 모두 사라짐.", img: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=600&q=80" },
    { id: "h_c04", name: "피해자의 깨진 금장 손목시계", desc: "시멘트 바닥 충돌 충격으로 21시 45분에 초침과 분침이 멈춰 선 원장의 시계.", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80" },
    { id: "h_c05", name: "주사실의 빈 석시닐콜린 앰플함", desc: "수간호사만 열 수 있는 특수 독약 보관함에서 근이완제 앰플 1개가 도난당한 상태.", img: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=600&q=80" },
    { id: "h_c06", name: "3층 복도의 금촉 만년필", desc: "부원장 강진우의 영문 이니셜이 각인되어 있는 잉크가 번진 고급 만년필.", img: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=600&q=80" },
    { id: "h_c07", name: "계단 난간의 파란 줄무늬 천 조각", desc: "송하은의 환자복에서 뜯겨나간 것으로 확인된 계단 모서리의 천 조각 파편.", img: "https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=600&q=80" },
    { id: "h_c08", name: "지하 배기구의 도난당한 금괴", desc: "경비원 윤태식이 빼돌려 숨겨둔 원장의 비자금 골드바와 외국 지폐 다발.", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80" },
    { id: "h_c09", name: "복도 화분 뒤 숨겨진 미니 삼각대", desc: "기자 민도혁이 원장실 출입 인원을 도촬하기 위해 설치해 둔 소형 삼각대 장비.", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80" },
    { id: "h_c10", name: "수간호사의 가운 소매 약품 얼룩", desc: "석시닐콜린 성분의 화학적 침전 반응이 검출된 한수민의 흰색 간호 가운 소매.", img: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=600&q=80" },
    { id: "h_c11", name: "부원장의 횡령 폭로 협박문", desc: "원장이 강진우의 의료 면허를 취소시키겠다고 적어 책상 서랍에 넣어둔 기안서.", img: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80" },
    { id: "h_c12", name: "원장의 해외 도피용 밀항 여권", desc: "원장실 여행 가방 안에서 발견된 위조된 남미행 여권과 편도 항공권.", img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80" },
    { id: "h_c13", name: "피해자의 경부 피하 주사흔", desc: "경동맥 부근에 미세하게 찔린 바늘 자국. 주사 부위 주변의 모세혈관이 파열되어 있음.", img: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=600&q=80" },
    { id: "h_c14", name: "원장 손톱 밑 섬유 가닥", desc: "원장이 밀쳐질 때 저항하며 가해자의 간호사 스웨터에서 뜯어낸 연분홍색 양모 올.", img: "https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=600&q=80" },
    { id: "h_c15", name: "소각로의 불탄 차트 표지", desc: "'세인트 헬레나 지하 특수 임상 연구 일지'라는 굵은 압인 글자가 타다 남은 가죽 커버.", img: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=600&q=80" },
    { id: "h_c16", name: "안뜰 화단의 군화 흙 족적", desc: "경비원 윤태식의 미끄럼 방지 제식 군화 밑창 문양과 일치하는 화단 흙탕물 발자국.", img: "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?auto=format&fit=crop&w=600&q=80" },
    { id: "h_c17", name: "보일러실 소각 집게", desc: "서류를 화덕 깊숙이 쑤셔 넣을 때 사용되어 끝부분이 시커멓게 그을린 쇠집게.", img: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80" },
    { id: "h_c18", name: "계단 유리창의 보라색 유화 물감", desc: "목격자 송하은의 손가락 지문과 보랏빛 물감이 찍혀 있는 3층 계단 유리창.", img: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=600&q=80" },
    { id: "h_c19", name: "원장의 비밀 녹음 테이프", desc: "'수간호사 동생의 임상 사망은 철저히 비밀에 부쳐라'는 원장의 생전 육성이 녹음된 테이프.", img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80" },
    { id: "h_c20", name: "사망한 여동생의 혈액 검사지", desc: "5년 전 한수민의 친동생에게 치사량의 신약 물질이 투여되었다는 미공개 임상 결과표.", img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80" },
    { id: "h_c21", name: "원장실 문손잡이의 알코올 냄새", desc: "범행 후 지문을 닦아내기 위해 의료용 소독용 에탄올 탈지면으로 문손잡이를 문지른 흔적.", img: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=600&q=80" },
    { id: "h_c22", name: "끊어진 병원 유선 전화선", desc: "교환대 뒤편 메인 전화 케이블이 의료용 가위로 깨끗하게 절단된 흔적.", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80" },
    { id: "h_c23", name: "기자의 복도 도촬 필름", desc: "21:30경 간호사 복장의 인물이 원장실로 은밀히 들어가는 흐릿한 실루엣이 찍힌 흑백 컷.", img: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80" },
    { id: "h_c24", name: "송하은의 피 묻지 않은 메스", desc: "환자복 안에 감춰져 있었으나 혈흔이나 인체 조직 반응이 전혀 검출되지 않은 깨끗한 칼날.", img: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&w=600&q=80" }
  ],

  endings: {
    truth: "사건의 진실: 백도현 원장을 살해한 진범은 수간호사 **'한수민'**입니다. 한수민은 5년 전 자신의 친동생을 불법 신약 실험으로 사망에 이르게 한 원장이 증거를 인멸하고 도주하려 하자, 21:30경 응급실에서 훔친 근이완제(석시닐콜린)를 원장의 목에 주사해 전신 마비를 일으켰습니다. 이후 몸을 가누지 못하는 원장을 3층 창밖으로 밀어 떨어뜨려 추락사로 위장하고, 지하 소각로에서 범죄의 증거인 임상일지를 불태웠습니다.",
    citizenWin: {
      title: "안개 걷힌 병동: 침묵의 해방 (시민 승리)",
      badge: "TRUTH DISCLOSED",
      bannerImg: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
      epilogues: {
        kang: "강진우: 비록 서류를 훔쳐 은폐하려 한 비리는 들통났으나 살인 누명을 벗고 수사에 협조하여 의료 윤리 개혁에 나섭니다.",
        han: "한수민: 복수심에 사로잡힌 독살 및 추락 트릭이 주사흔과 섬유 조각으로 인해 탄로 나며 경찰에 체포되어 법의 심판을 받게 됩니다.",
        yoon: "윤태식: 금괴를 절도한 혐의는 적발되었으나 장기 체불 임금이 정상 참작되어 기소유예 처분을 받고 고향으로 내려갑니다.",
        song: "송하은: 기자와 탐정의 도움으로 부당한 강제 감금에서 풀려나 억울하게 빼앗겼던 가족 유산을 되찾고 화가로서 새 삶을 시작합니다.",
        min: "민도혁: 폐쇄병원의 불법 인체실험과 끔찍한 진상을 언론에 특종 보도하여 올해의 기자상을 수상하며 명성을 떨칩니다."
      }
    },
    killerWin: {
      title: "영원한 침묵: 안개 속의 완전범죄 (진범 승리)",
      badge: "COLD RETRIBUTION",
      bannerImg: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80",
      epilogues: {
        kang: "강진우: 현장에 남겨진 만년필과 횡령 원한 관계 때문에 계획적인 원장 살해범으로 지목되어 무기징역을 선고받습니다.",
        han: "한수민: 수사망을 교묘히 따돌리고 동생의 복수를 완벽히 매듭지은 채, 안개가 걷히자 유유히 폐쇄병원을 떠나 신분을 감추고 사라집니다.",
        yoon: "윤태식: 숨겨둔 금괴가 발각되며 돈을 노리고 원장을 밀쳐 떨어뜨린 강도 살인범으로 몰려 차가운 철창에 갇히게 됩니다.",
        song: "송하은: 지니고 있던 메스와 목격 진술이 오히려 이상 심리에 의한 살인자의 망상으로 치부되어 더 깊은 국립 감호소로 이송됩니다.",
        min: "민도혁: 불법 침입 및 도청 혐의로 취재 필름을 모두 몰수당하고 언론사에서 해고되어 폐인이 됩니다."
      }
    }
  }
};