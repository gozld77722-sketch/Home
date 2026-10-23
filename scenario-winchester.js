// scenario-winchester.js
export default {
  id: "winchester",
  title: "폭풍우 치는 윈체스터 별장: 사라진 유언장",
  subtitle: "외딴 절벽 저택에서 벌어진 밀실 독살 사건",
  era: "1926년 영국 서식스 외딴 절벽 저택",
  victim: "에드워드 윈체스터 경 (대부호)",
  killerId: "elena", // 진범 ID: 엘레나 바스커빌

  prologue: {
    bannerImg: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1200&q=80",
    location: "서식스 해안 절벽 윈체스터 저택 서재",
    story: [
      "1926년 가을, 사나운 폭풍우로 인해 육지와 통하는 유일한 다리가 끊기며 윈체스터 저택은 완벽한 고립 상태가 되었습니다.",
      "밤 10시 정각, 저택의 주인이자 막대한 유산을 지닌 에드워드 윈체스터 경이 밀실 서재 안에서 독살된 채 발견되었습니다.",
      "그가 공식 변호사를 통해 작성해 두었던 '비밀 유언장 원본'이 벽면 금고에서 감쪽같이 사라졌습니다.",
      "저택 안에 갇힌 다섯 사람. 오직 진범만이 거짓말을 할 수 있습니다. 아침이 오기 전, 진실을 밝혀내야 합니다."
    ]
  },

  characters: [
    {
      id: "arthur",
      name: "아서 윈체스터",
      role: "장남 / 파산 위기의 사업가",
      isKiller: false,
      isDefault: true,
      avatarImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      description: "에드워드 경의 장남. 런던 상류사회에서 방탕한 사업 투자로 거액의 사채를 지고 있습니다.",
      secret: "당신은 오늘 밤 부친의 비밀 유언장을 훔쳐 태워버리기 위해 서재에 침입하려 했습니다. 유언장이 공개되면 당신의 상속권이 박탈된다는 것을 알고 있었기 때문입니다. 하지만 서재 문손잡이를 돌렸을 때 방 안에서 인기척이 없어 도망쳤을 뿐 살해하지는 않았습니다.",
      timeline: [
        "21:15 - 1층 응접실에서 독한 브랜디를 마심",
        "21:40 - 2층 서재 앞 복도를 서성이며 기회를 노림",
        "22:05 - 집사의 비명 소리를 듣고 서재로 달려감"
      ],
      alibiCards: [
        { id: "art_1", name: "사채업자의 빚 독촉장", desc: "자정까지 5만 파운드를 갚지 않으면 파산 신청을 하겠다는 사채업자의 협박 편지.", img: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80" },
        { id: "art_2", name: "서재 문의 긁힌 자국", desc: "아서가 서재 자물쇠를 따려고 철사를 쑤셔 넣다 생긴 날카로운 금속 흠집.", img: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=600&q=80" },
        { id: "art_3", name: "진흙 묻은 아서의 구두", desc: "폭풍우 치는 밤 정원 별채로 통하는 뒷문을 급하게 드나들며 묻은 젖은 흙탕물.", img: "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?auto=format&fit=crop&w=600&q=80" },
        { id: "art_4", name: "호신용 소형 리볼버", desc: "아서의 외투 주머니에 들어있던 탄환이 가득 찬 소형 호신용 권총.", img: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&w=600&q=80" },
        { id: "art_5", name: "깨진 브랜디 잔", desc: "불안에 떨며 손을 떨다 1층 바닥에 떨어뜨린 크리스탈 위스키 잔의 파편.", img: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=600&q=80" }
      ]
    },
    {
      id: "elena",
      name: "엘레나 바스커빌",
      role: "주치의 / 에드워드 경의 전담 의사",
      isKiller: true, // ★ 진범
      isDefault: true,
      avatarImg: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      description: "오랫동안 에드워드 경의 만성 지병을 돌봐온 실력 있는 여성 주치의.",
      secret: "★ 당신이 진범입니다! 에드워드 경은 당신이 과거 의료 과실로 사람을 죽였다는 약점을 잡고 평생 무료로 시중을 들게 하며 괴롭혔습니다. 오늘 밤 유언장을 고쳐 전 재산을 재단에 기부하겠다는 소식을 듣고, 21:30경 홍차에 치사량의 청산염(시안화칼륨)을 섞어 건넸습니다. 그가 쓰러진 후 금고에서 유언장을 꺼내 난로에 던져 태웠습니다.",
      timeline: [
        "21:20 - 약제실에서 에드워드 경의 야간 복용약을 조제함",
        "21:30 - 서재에 들어가 에드워드 경에게 독이 든 따뜻한 홍차를 건넴",
        "21:50 - 침실로 돌아와 독극물 앰플을 하수구에 흘려보냄"
      ],
      alibiCards: [
        { id: "ele_1", name: "비어 있는 시안화칼륨 앰플", desc: "약제 가방 안쪽 비밀 칸에서 발견된 극소량의 찌꺼기만 남은 독약 유리병.", img: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=600&q=80" },
        { id: "ele_2", name: "그을린 양피지 조각", desc: "서재 벽난로 재 속에서 미처 다 타지 않고 건져진 유언장 모서리 파편.", img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80" },
        { id: "ele_3", name: "조작된 진료 일지", desc: "에드워드 경이 심장마비로 급사할 위험이 높았다고 미리 꾸며둔 허위 차트.", img: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80" },
        { id: "ele_4", name: "엘레나의 가죽 수술 장갑", desc: "독약을 다룰 때 손에 묻지 않도록 착용했던 미세한 화학 잔류물이 묻은 장갑.", img: "https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=600&q=80" },
        { id: "ele_5", name: "과거 의료사고 판결문 사본", desc: "에드워드 경이 엘레나를 협박하기 위해 보관하고 있던 과거 과실치사 기소장.", img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80" }
      ]
    },
    {
      id: "charles",
      name: "찰스 위킨스",
      role: "충직한 노집사",
      isKiller: false,
      isDefault: true,
      avatarImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      description: "40년간 윈체스터 가문을 섬겨온 집사. 저택의 모든 비밀 통로와 열쇠를 관리합니다.",
      secret: "당신은 지난달 에드워드 경이 당신의 오랜 퇴직금과 연금을 한 푼도 주지 않고 내쫓으려 한다는 대화를 엿들었습니다. 앙심을 품고 오늘 밤 귀중품 보관함에서 가보인 다이아몬드 회중시계를 훔쳤습니다. 도둑질이 탄로 날까 두려워 살인 사건 당시 지하 창고에 숨어 있었습니다.",
      timeline: [
        "21:00 - 주인 서재에 야간 차 세트를 준비해 올림",
        "21:35 - 지하 금고 창고에서 귀중품 회중시계를 훔침",
        "22:00 - 서재 문을 두드렸으나 응답이 없어 열쇠로 열고 들어가 시체 발견"
      ],
      alibiCards: [
        { id: "cha_1", name: "도난당한 다이아몬드 회중시계", desc: "찰스의 침대 매트리스 밑에 은밀히 숨겨져 있던 에드워드 경의 유품 시계.", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80" },
        { id: "cha_2", name: "저택 마스터 키 뭉치", desc: "서재를 포함해 저택의 모든 방을 열 수 있는 황동으로 만든 열쇠 꾸러미.", img: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=600&q=80" },
        { id: "cha_3", name: "주인의 해고 통지서", desc: "찰스의 연금을 몰수하고 이달 말부로 강제 퇴거시킨다는 에드워드 경의 서명 문서.", img: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80" },
        { id: "cha_4", name: "지하 창고의 촛농 자국", desc: "도둑질을 하느라 어두운 지하 저장고 바닥에 흘린 하얀 양초 눈물 자국.", img: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=600&q=80" },
        { id: "cha_5", name: "차 찌꺼기가 묻은 찻잔 받침", desc: "에드워드 경에게 서빙하기 전 주방 싱크대에 놓여 있던 은제 찻잔 받침대.", img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80" }
      ]
    },
    {
      id: "viola",
      name: "비올라 윈체스터",
      role: "젊은 후처 / 과거 무명 배우",
      isKiller: false,
      isDefault: true,
      avatarImg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      description: "에드워드 경과 1년 전 재혼한 젊고 화려한 아내. 저택 내에서 늘 겉돌았습니다.",
      secret: "당신은 사실 에드워드 경을 사랑하지 않았으며, 젊은 무대 연출가와 내연 관계를 맺고 있었습니다. 이혼 위자료를 챙겨 도망치기 위해 저택의 비자금 장부를 뒤지고 있었습니다. 21:45경 서재 창문 밖 테라스에 다가갔다가 방 안에서 에드워드 경이 쓰러지는 실루엣을 보고 공포에 질려 도망쳤습니다.",
      timeline: [
        "21:10 - 자신의 화장대에서 비밀 편지를 정리함",
        "21:45 - 테라스를 통해 서재 창가로 접근했다가 쓰러지는 인영을 목격",
        "22:05 - 비명 소리를 듣고 2층 복도로 달려옴"
      ],
      alibiCards: [
        { id: "vio_1", name: "내연남의 사랑의 밀회 편지", desc: "유산이 정리되는 대로 파리로 함께 도망치자는 밀약이 담긴 연서.", img: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80" },
        { id: "vio_2", name: "테라스 창문의 붉은 립스틱", desc: "서재 안을 엿보려다 서재 외벽 유리창에 부딪혀 남은 비올라의 립스틱 자국.", img: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=600&q=80" },
        { id: "vio_3", name: "찢어진 레이스 드레스 자락", desc: "비바람 치는 테라스 철제 난간을 급하게 빠져나오다 뜯겨나간 드레스 천.", img: "https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=600&q=80" },
        { id: "vio_4", name: "비자금 금고 비밀번호 메모", desc: "에드워드 경의 서재 금고 다이얼 번호가 적힌 작은 종이 조각.", img: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=600&q=80" },
        { id: "vio_5", name: "장미 향수 공병", desc: "비올라가 애용하는 파리산 장미 향수. 테라스 통로에 진하게 남아있음.", img: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=600&q=80" }
      ]
    },
    {
      id: "victor",
      name: "빅터 반스",
      role: "사설 탐정 (5인 전용)",
      isKiller: false,
      isDefault: false,
      avatarImg: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
      description: "에드워드 경의 비밀 의뢰를 받고 손님으로 위장해 저택에 머물던 냉철한 사설 탐정.",
      secret: "당신은 에드워드 경으로부터 '가족 중 누군가가 나를 독살하려 한다'는 의뢰를 받고 잠입했습니다. 오늘 밤 범인을 현장 검거하기 위해 환기통을 통해 서재를 감시하려 했으나, 폭풍우 소음 때문에 독약 투입 순간을 놓치고 말았습니다.",
      timeline: [
        "21:00 - 손님방에서 저택 설계도를 분석함",
        "21:30 - 천장 환풍구 통로로 잠입을 시도함",
        "22:05 - 사건이 터지자 정식 탐정 신분을 공개하고 현장 보존을 지휘함"
      ],
      alibiCards: [
        { id: "vic_1", name: "저택의 비밀 설계도", desc: "벽면 배관과 비밀 다락방 통로가 상세히 적힌 윈체스터 저택의 청사진.", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80" },
        { id: "vic_2", name: "피해자의 비밀 수사 의뢰서", desc: "자신의 목숨이 위험하다며 거액의 수임료를 선지급한 에드워드 경의 친필 서명 편지.", img: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80" },
        { id: "vic_3", name: "그을린 특수 손전등", desc: "어두운 천장 환기구를 조사할 때 사용한 소형 배터리 손전등.", img: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=600&q=80" },
        { id: "vic_4", name: "사설 탐정 면허증과 배지", desc: "런던 경시청의 공인을 받은 정식 사설 탐정 수사 증명 배지.", img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80" },
        { id: "vic_5", name: "소형 도청용 청진기", desc: "벽 너머 서재의 대화 소리를 엿듣기 위해 개조한 청음 장비.", img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80" }
      ]
    }
  ],

  clues: [
    { id: "w_c01", name: "책상 위 엎질러진 찻잔", desc: "아몬드 향(청산염 특유의 냄새)이 진하게 풍기는 에드워드 경의 마시다 만 홍찻잔.", img: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=600&q=80" },
    { id: "w_c02", name: "열려 있는 벽면 금고", desc: "유언장이 보관되어 있던 금고가 열려 있으며, 중요한 양도 서류만 사라져 있음.", img: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=600&q=80" },
    { id: "w_c03", name: "난로 속 타버린 양피지 재", desc: "벽난로 장작 사이에서 불타다 남은 법률 공증인의 붉은 압인 도장 파편.", img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80" },
    { id: "w_c04", name: "피해자의 깨진 회중시계", desc: "책상 모서리에 부딪혀 21시 35분에 바늘이 멈춰 있는 에드워드 경의 금시계.", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80" },
    { id: "w_c05", name: "약제실 시안화칼륨 보관함", desc: "자물쇠가 열려 있으며 시안화칼륨 병이 비어 있는 주치의 엘레나의 약제 보관함.", img: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=600&q=80" },
    { id: "w_c06", name: "서재 문손잡이 철사 흠집", desc: "아서가 도구로 억지로 열려다 실패하여 남긴 문손잡이 주변의 날카로운 긁힘.", img: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=600&q=80" },
    { id: "w_c07", name: "테라스 난간의 레이스 조각", desc: "비올라의 드레스에서 뜯겨나간 고급 실크 레이스가 난간 철조망에 걸려 있음.", img: "https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=600&q=80" },
    { id: "w_c08", name: "찰스의 침대 밑 회중시계", desc: "찰스가 에드워드 경의 서재에서 몰래 훔쳐 자신의 침대 매트리스 밑에 숨겨둔 유품 시계.", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80" },
    { id: "w_c09", name: "환풍구의 탐정 도청 장치", desc: "천장 환기구에서 발견된 사설 탐정 빅터 반스의 소형 청음 장비와 로프.", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80" },
    { id: "w_c10", name: "엘레나의 가죽 가방 금가루", desc: "금고 문을 열 때 다이얼 틈새에서 긁혀 나온 미세한 금속 가루가 묻은 의사 가방.", img: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=600&q=80" },
    { id: "w_c11", name: "아서의 파산 경고장", desc: "런던 사채업자가 오늘 밤 12시까지 돈을 갚지 않으면 집행관을 보내겠다는 통지서.", img: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80" },
    { id: "w_c12", name: "비올라의 비밀 여권과 승선권", desc: "프랑스 마르세유로 향하는 정기선 1등실 티켓 2매가 들어있는 비올라의 비밀 파우치.", img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80" },
    { id: "w_c13", name: "피해자의 손톱 밑 피부 조직", desc: "에드워드 경이 독을 마시고 경련을 일으킬 때 가해자의 손목을 긁어 생긴 미세한 살점.", img: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=600&q=80" },
    { id: "w_c14", name: "엘레나의 손목 긁힌 상처", desc: "응급 처치를 하다가 긁혔다고 변명했으나, 피해자의 손톱 자국과 정확히 일치함.", img: "https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=600&q=80" },
    { id: "w_c15", name: "주방의 은제 찻주전자", desc: "21시 25분경 주치의 엘레나가 직접 서재로 들고 올라간 따뜻한 홍차 주전자.", img: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=600&q=80" },
    { id: "w_c16", name: "창가의 진흙 발자국", desc: "아서의 젖은 흙 묻은 구두 밑창 패턴과 정확히 일치하는 테라스 입구의 족적.", img: "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?auto=format&fit=crop&w=600&q=80" },
    { id: "w_c17", name: "유언장 초안 메모", desc: "'모든 재산을 런던 의학 연구 재단에 기부하고 친족에게는 1페니도 주지 않는다'는 메모.", img: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80" },
    { id: "w_c18", name: "장미 향수 묻은 유리창", desc: "서재 테라스 창틀에서 비올라의 장미 향수 냄새가 짙게 밴 채 채취된 얼룩.", img: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=600&q=80" },
    { id: "w_c19", name: "찰스의 퇴직금 반환 각서", desc: "에드워드 경이 찰스에게 평생 모은 퇴직금을 포기하라고 강요했던 냉혹한 편지.", img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80" },
    { id: "w_c20", name: "에드워드 경의 비밀 일기", desc: "'주치의 엘레나의 과거 치명적인 수술 실수를 알고 있다. 그녀는 내 뜻을 거스를 수 없다.'", img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80" },
    { id: "w_c21", name: "서재 열쇠 구멍의 섬유밥", desc: "마스터키를 이용해 조용히 열고 들어간 흔적으로, 집사의 면장갑 보푸라기가 걸려 있음.", img: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=600&q=80" },
    { id: "w_c22", name: "끊어진 저택 전화선", desc: "누군가 날카로운 가위로 외부와 통하는 유선 전화 케이블을 고의로 절단한 단면.", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80" },
    { id: "w_c23", name: "빅터의 의뢰 계약서", desc: "살해 위협을 느끼고 탐정 빅터 반스를 저택에 초대한 에드워드 경의 정식 계약서.", img: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80" },
    { id: "w_c24", name: "아서의 권총 탄창 확인", desc: "권총은 장전되어 있었으나 총열 내부에 화약 냄새가 전혀 나지 않아 발사된 적 없음.", img: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&w=600&q=80" }
  ],

  endings: {
    truth: "사건의 진실: 에드워드 경을 독살한 진범은 주치의 **'엘레나 바스커빌'**입니다. 엘레나는 자신의 과거 의료사고 약점을 쥐고 평생 노예처럼 부리던 에드워드 경이 전 재산을 기부하는 새 유언장을 쓰려 하자, 21:30경 청산염을 탄 홍차를 건네 그를 살해했습니다. 그가 고통 속에서 경련할 때 엘레나의 손목을 긁어 지울 수 없는 상처를 남겼고, 벽난로 속에서 발견된 타버린 유언장 재와 독극물 앰플이 결정적 증거가 되었습니다.",
    citizenWin: {
      title: "윈체스터 저택의 여명: 폭풍 뒤의 진실 (시민 승리)",
      badge: "TRUTH UNVEILED",
      bannerImg: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1200&q=80",
      epilogues: {
        arthur: "아서: 비록 유언장을 훔치려 한 부도덕함은 지탄받았으나 살인 누명을 벗고 파산 위기 속에서 참회하며 새 삶을 모색합니다.",
        elena: "엘레나: 치밀했던 독살 계획이 손목의 상처와 화학 잔류물로 인해 탄로 났습니다. 경찰에 인계되어 법의 심판을 받게 됩니다.",
        charles: "찰스: 시계를 훔친 도둑질은 들통났으나 오랜 노고를 참작받아 정식 은퇴 연금을 챙겨 조용한 시골 마을로 떠납니다.",
        viola: "비올라: 비밀 내연 관계가 폭로되어 위자료는 받지 못했지만, 억울한 살인자라는 누명을 벗고 자유를 찾아 떠납니다.",
        victor: "빅터: 밀실 살인 사건을 성공적으로 해결한 명탐정으로 런던 언론에 대서특필되며 탐정 사무소의 명성을 떨칩니다."
      }
    },
    killerWin: {
      title: "완전 범죄: 사라진 진실과 비극 (진범 승리)",
      badge: "PERFECT CRIME",
      bannerImg: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80",
      epilogues: {
        arthur: "아서: 서재 문을 따려던 흠집과 거액의 빚 독촉장 때문에 원한에 의한 계획 살인범으로 몰려 종신형을 선고받습니다.",
        elena: "엘레나: 유언장을 완벽히 인멸하고 수사를 혼선에 빠뜨린 채, 유유히 저택을 떠나 막대한 비밀 자금을 손에 넣고 완전 범죄를 완성합니다.",
        charles: "찰스: 피해자의 다이아몬드 시계를 훔친 정황 탓에 살인 공범으로 지목되어 차가운 철창에 갇히게 됩니다.",
        viola: "비올라: 테라스에 남긴 립스틱과 향수 때문에 살인을 교사한 배후로 지목되어 전 재산을 압류당하고 추방됩니다.",
        victor: "빅터: 억울한 무고자를 진범으로 지목하는 치명적인 오판을 저질러 탐정 면허를 영구 박탈당하고 몰락합니다."
      }
    }
  }
};
