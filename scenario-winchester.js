// scenario-winchester.js
export default {
  id: "winchester",
  title: "폭풍우 치는 윈체스터 별장: 사라진 유언장",
  subtitle: "고립된 외딴 절벽 별장에서 일어난 독살 사건",
  era: "1926년 영연방 고립 저택",
  victim: "에드워드 윈체스터 (가문 당주)",
  killerId: "elena", // 진범 ID: 엘레나 윈체스터

  prologue: {
    bannerImg: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1200&q=80",
    location: "윈체스터 가문 해안 절벽 별장 본관 서재",
    story: [
      "1926년 가을, 거센 폭풍우가 몰아치며 외부로 이어지는 유일한 해안 교량이 붕괴되어 윈체스터 별장은 완전히 고립되었습니다.",
      "밤 10시 정각, 막대한 유산 상속을 발표하려던 가문의 당주 에드워드 윈체스터가 서재 책상 위에서 피를 토한 채 독살된 시신으로 발견되었습니다.",
      "그가 작성해 비밀 금고에 보관해 두었던 '최종 유언장' 원본은 감쪽같이 사라졌고, 금고 다이얼은 강제로 훼손되어 있었습니다.",
      "별장에 갇힌 5명의 용의자. 오직 진범만이 거짓말을 할 수 있습니다. 날이 밝기 전, 폭풍우 속에 감춰진 추악한 진실을 밝혀내야 합니다."
    ]
  },

  characters: [
    {
      id: "arthur",
      name: "아서 윈체스터",
      role: "장남 / 가문 후계자",
      isKiller: false,
      isDefault: true,
      avatarImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      description: "에드워드의 장남으로 가문의 막대한 사업체와 영지를 물려받을 정당한 상속권자.",
      secret: "당신은 런던 사교계 도박판에서 천문학적인 빚을 졌습니다. 아버지가 당신을 유산 상속에서 완전히 배제하려 한다는 사실을 알고, 오늘 밤 서재에 침입해 유언장을 훔쳐 불태우려 했습니다. 하지만 서재에 도착했을 때 아버지는 이미 독을 마시고 쓰러져 있었습니다. 겁에 질린 당신은 찢어진 유언장 일부만 쥐고 도망쳤습니다.",
      timeline: [
        "21:20 - 당구장에서 위스키를 마시며 시간을 보냄",
        "21:40 - 서재에 잠입해 쓰러진 아버지를 발견하고 유언장 조각을 훔쳐 나옴",
        "22:05 - 집사의 비명을 듣고 서재로 달려감"
      ],
      alibiCards: [
        { id: "art_1", name: "런던 사설 도박장의 빚문서", desc: "아서가 런던 범죄조직에 진 거액의 도박 빚과 상환 독촉장.", img: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80" },
        { id: "art_2", name: "불타다 남은 유언장 모서리", desc: "아서의 코트 주머니에서 발견된 '장남 아서에게는 1페니도...'라고 적힌 유언장 파편.", img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80" },
        { id: "art_3", name: "아서의 백금 커프스링크", desc: "서재 책상 밑 카펫 틈에서 발견된 아서의 가문 문장 커프스단추.", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80" },
        { id: "art_4", name: "스위스 은행 비밀 예금 계좌", desc: "아서가 상속을 대비해 몰래 개설해 둔 해외 비밀 계좌 서류.", img: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80" },
        { id: "art_5", name: "진흙 묻은 아서의 가죽 부츠", desc: "해안 절벽 뒷길을 서성이다 묻은 붉은 점토 흙탕물 얼룩.", img: "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?auto=format&fit=crop&w=600&q=80" }
      ]
    },
    {
      id: "elena",
      name: "엘레나 윈체스터",
      role: "차녀 / 예술품 수집가",
      isKiller: true, // ★ 진범
      isDefault: true,
      avatarImg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      description: "냉철한 지성과 아름다움을 지닌 차녀. 파리와 런던을 오가며 골동품 사업을 함.",
      secret: "★ 당신이 진범입니다! 아버지는 당신이 가짜 미술품을 유통해 가문의 명예를 실추시켰다는 사실을 눈치채고, 오늘 밤 당신을 경찰에 고발하고 파문하려 했습니다. 당신은 21:30경 아버지가 마실 카모마일 찻잔에 무색무취의 청산가리를 탔습니다. 아버지가 숨진 후 금고에서 당신의 위조 사기 증거 서류를 훔쳐 소각했습니다.",
      timeline: [
        "21:10 - 갤러리 룸에서 명화를 감상함",
        "21:30 - 주방에서 아버지의 찻잔에 청산가리를 넣고 서재로 가져다줌",
        "21:50 - 침실 화로에서 위조 사기 서류를 불태움"
      ],
      alibiCards: [
        { id: "ele_1", name: "앤틱 은제 독약 반지", desc: "반지 뚜껑을 열면 미세한 독극물 분말을 넣을 수 있는 정교한 세공 반지.", img: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&w=600&q=80" },
        { id: "ele_2", name: "침실 화로의 불탄 종이 재", desc: "엘레나의 침실 벽난로에서 수거된 '미술품 위조 사기 검찰 고발서'의 잔해.", img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80" },
        { id: "ele_3", name: "엘레나의 자수 실크 손수건", desc: "서재 찻잔 받침 옆에 떨어져 있던 아몬드 향(청산가리 냄새)이 배어 있는 손수건.", img: "https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=600&q=80" },
        { id: "ele_4", name: "파리 암거래상과의 비밀 전보", desc: "독극물 입수 경로와 가짜 유화 처분을 논의한 프랑스어 전보문.", img: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80" },
        { id: "ele_5", name: "위조된 루벤스 명화 감정서", desc: "엘레나가 가짜 미술품을 진품으로 속여 거액을 가로챈 공증 위조장.", img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80" }
      ]
    },
    {
      id: "charles",
      name: "찰스 로버츠",
      role: "가문 주치의 / 의학 박사",
      isKiller: false,
      isDefault: true,
      avatarImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      description: "20년간 에드워드의 지병과 건강을 돌봐온 윈체스터 가문의 전담 주치의.",
      secret: "당신은 최근 의료 과실로 거액의 합의금이 필요한 상태였으며, 에드워드가 비올라와 결혼하며 약속했던 막대한 후원금을 거절당하자 앙심을 품었습니다. 21:15경 에드워드의 진통제에 수면제를 정량 이상으로 섞었으나 살인할 의도는 없었습니다.",
      timeline: [
        "21:00 - 응급 진료 가방을 정리하고 진통제를 조제",
        "21:15 - 에드워드에게 수면제를 섞은 알약을 건넴",
        "22:05 - 비명 소리를 듣고 응급 처치를 위해 서재로 달려감"
      ],
      alibiCards: [
        { id: "cha_1", name: "고농도 모르핀과 수면제 약병", desc: "처방전 없이 조제된 치사량 미만의 진통 수면제 앰플.", img: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=600&q=80" },
        { id: "cha_2", name: "의료과실 손해배상 청구서", desc: "런던 법원으로부터 송달된 거액의 의료 사고 배상 판결문.", img: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80" },
        { id: "cha_3", name: "에드워드의 비밀 건강 진단서", desc: "에드워드가 시한부 3개월 판정을 받았다는 사실이 기록된 진료 차트.", img: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=600&q=80" },
        { id: "cha_4", name: "의사 가운에 묻은 에탄올 소독액", desc: "주사기를 소독하며 흘린 알코올 냄새가 짙게 밴 가운.", img: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=600&q=80" },
        { id: "cha_5", name: "주치의의 비밀 진료 일지", desc: "가문 인물들의 은밀한 정신질환과 중독 증세를 기록한 비밀 수첩.", img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80" }
      ]
    },
    {
      id: "viola",
      name: "비올라 윈체스터",
      role: "젊은 후처 / 전직 무대배우",
      isKiller: false,
      isDefault: true,
      avatarImg: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
      description: "1년 전 에드워드와 재혼한 젊고 매혹적인 여성. 가문 내에서 유산을 노린다는 따가운 시선을 받음.",
      secret: "당신은 에드워드의 유산이 의붓자식들에게만 돌아갈 것을 두려워하여, 21:25경 집사 몰래 서재 금고를 열고 유언장을 다른 위조 문서로 바꿔치기하려다 금고 번호가 틀려 다이얼을 망가뜨리고 도망쳤습니다.",
      timeline: [
        "21:05 - 온실 정원에서 산책하며 차를 마심",
        "21:25 - 서재에 숨어들어 금고 다이얼을 강제로 돌리다 흠집을 냄",
        "22:05 - 서재 밖 복도에서 서성이다 집사의 비명을 들음"
      ],
      alibiCards: [
        { id: "vio_1", name: "흠집 난 금고 다이얼용 머리핀", desc: "비올라의 머리에서 빠진 금고 자물쇠를 쑤신 흔적이 있는 쇠 머리핀.", img: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=600&q=80" },
        { id: "vio_2", name: "위조된 재산 증여 계약서", desc: "별장과 현금을 비올라 단독 소유로 돌리려던 조작된 유산 문서 초안.", img: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80" },
        { id: "vio_3", name: "진한 로즈 향수 병", desc: "서재 금고 손잡이에 짙게 묻어 있던 비올라의 고급 장미 향수 잔향.", img: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=600&q=80" },
        { id: "vio_4", name: "비올라의 옛 연인과의 편지", desc: "결혼 전 무대 배우 시절 연인에게 '곧 거액을 쥐게 될 것'이라고 쓴 편지.", img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80" },
        { id: "vio_5", name: "찢어진 비단 드레스 조각", desc: "서재 문 모서리 경첩에 걸려 찢겨나간 비올라의 분홍색 실크 드레스 올.", img: "https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=600&q=80" }
      ]
    },
    {
      id: "victor",
      name: "빅터 반스",
      role: "수석 집사 / 가문 관리인 (5인 전용)",
      isKiller: false,
      isDefault: false,
      avatarImg: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
      description: "30년 동안 윈체스터 가문의 대소사를 도맡아온 충직하고 엄격한 수석 집사.",
      secret: "당신은 에드워드의 충복이었으나, 사실 지난 10년간 에드워드의 지시로 가문의 비자금을 관리하며 거액을 몰래 횡령했습니다. 오늘 밤 에드워드가 회계 감사를 지시하자 비자금 장부를 없애려 했습니다.",
      timeline: [
        "21:10 - 와인 셀러에서 만찬용 와인을 점검함",
        "21:45 - 집사실에서 비밀 횡령 장부를 화로에 소각",
        "22:00 - 서재에 야식을 들고 들어갔다가 시신을 최초 발견하고 비명을 지름"
      ],
      alibiCards: [
        { id: "vic_1", name: "별장 전 구역 마스터키 꾸러미", desc: "서재와 비밀 금고 방을 포함해 모든 문을 열 수 있는 황동 열쇠 꾸러미.", img: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=600&q=80" },
        { id: "vic_2", name: "조작된 가문 회계 장부", desc: "빅터가 10년간 별장 관리비를 부풀려 비자금을 횡령한 내역이 적힌 장부.", img: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80" },
        { id: "vic_3", name: "은제 찻주전자와 쟁반", desc: "빅터가 서재로 야식과 홍차를 나를 때 사용한 깨끗한 은식기 세트.", img: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=600&q=80" },
        { id: "vic_4", name: "집사의 흰 면장갑", desc: "회계 장부를 태우며 묻은 검은 재와 기름때가 묻어 있는 흰 장갑.", img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80" },
        { id: "vic_5", name: "에드워드의 해고 통보 메모", desc: "에드워드가 빅터의 횡령을 눈치채고 작성해 둔 즉각 해고 통지서.", img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80" }
      ]
    }
  ],

  clues: [
    { id: "w_c01", name: "탁자 위의 깨진 카모마일 찻잔", desc: "피해자가 마신 잔. 바닥에 청산가리(시안화칼륨) 침전물이 검출됨.", img: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=600&q=80" },
    { id: "w_c02", name: "강제로 흠집 난 벽면 금고", desc: "다이얼 주변에 날카로운 쇠붙이로 긁힌 자국이 있고 문이 살짝 열려 있음.", img: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=600&q=80" },
    { id: "w_c03", name: "피해자의 깨진 회중시계", desc: "피해자가 쓰러지며 탁자에 부딪혀 밤 9시 35분에 바늘이 멈춘 금장 시계.", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80" },
    { id: "w_c04", name: "서재 카펫 위의 자수 손수건", desc: "엘레나의 가문 자수가 놓여 있으며 진한 아몬드 독약 냄새가 뱀.", img: "https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=600&q=80" },
    { id: "w_c05", name: "책상 밑의 가문 문장 커프스단추", desc: "장남 아서의 옷에서 떨어진 것으로 확인된 고급 백금 커프스링크.", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80" },
    { id: "w_c06", name: "금고 틈새에 끼어 있던 머리핀", desc: "비올라가 사용하는 정교한 흑철색 보석 머리핀. 금고를 따려던 흔적.", img: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=600&q=80" },
    { id: "w_c07", name: "서재 휴지통의 빈 수면제 병", desc: "찰스 의사의 라벨이 붙어 있는 과다 처방된 강력 진정제 유리병.", img: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=600&q=80" },
    { id: "w_c08", name: "벽난로 화로의 불탄 장부 조각", desc: "빅터 집사가 급히 태운 것으로 보이는 횡령 내역서 숫자가 적힌 재.", img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80" },
    { id: "w_c09", name: "피해자의 푸른 입술과 경련흔", desc: "전형적인 급성 청산가리 중독 증상으로 질식사한 피해자의 안면 상태.", img: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=600&q=80" },
    { id: "w_c10", name: "엘레나의 독약 반지 보관함", desc: "화장대 밑 비밀 서랍에서 발견된 은제 독약 반지의 빈 벨벳 케이스.", img: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&w=600&q=80" },
    { id: "w_c11", name: "아서의 찢어진 유언장 조각", desc: "'모든 상속권을 박탈함'이라는 구절이 선명히 남아 있는 양피지 파편.", img: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80" },
    { id: "w_c12", name: "주방 찬장의 청산가리 결정 가루", desc: "쥐약 구제용으로 보관되어 있었으나 봉인이 뜯겨 일부가 사라진 독약 통.", img: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=600&q=80" },
    { id: "w_c13", name: "피해자가 쓰던 만년필과 잉크", desc: "유언장을 수정하려다 바닥에 떨어뜨려 잉크가 사방으로 튄 만년필.", img: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=600&q=80" },
    { id: "w_c14", name: "창틀에 묻은 붉은 진흙 족적", desc: "외부 폭풍우를 틈타 서재 발코니 난간에 찍힌 가죽 부츠 밑창 자국.", img: "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?auto=format&fit=crop&w=600&q=80" },
    { id: "w_c15", name: "서재 문의 잠금 걸쇠 흔적", desc: "안쪽에서 잠겨 있지 않았으며, 복도 쪽에서 누구나 열 수 있었던 상태.", img: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=600&q=80" },
    { id: "w_c16", name: "비올라의 찢어진 분홍 드레스 올", desc: "서재 문틀 경첩에 끼어 있던 비올라의 비단 옷감 조각.", img: "https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=600&q=80" },
    { id: "w_c17", name: "찰스의 수술용 라텍스 장갑", desc: "진료 가방 안에서 발견된 약품 얼룩이 묻은 채 버려진 장갑.", img: "https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=600&q=80" },
    { id: "w_c18", name: "빅터의 검게 그을린 성냥갑", desc: "서류를 급히 소각할 때 사용한 가문 문장이 새겨진 성냥갑.", img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80" },
    { id: "w_c19", name: "탁자 밑에 굴러떨어진 진통제 알약", desc: "피해자가 미처 삼키지 못하고 떨어뜨린 찰스가 조제한 알약 1정.", img: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=600&q=80" },
    { id: "w_c20", name: "에드워드의 일기장 마지막 페이지", desc: "'가족 중에 나를 죽이려는 배신자가 있다'고 적힌 떨리는 필적의 메모.", img: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80" },
    { id: "w_c21", name: "온실에서 발견된 빈 찻주전자", desc: "비올라가 차를 마시며 시간을 보냈다고 주장한 현장의 은제 주전자.", img: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=600&q=80" },
    { id: "w_c22", name: "절단된 별장 전화 케이블", desc: "외부와의 통신을 차단하기 위해 날카로운 전정가위로 잘려나간 전선.", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80" },
    { id: "w_c23", name: "아서의 가죽 코트 속 리볼버", desc: "실탄 6발이 장전되어 있었으나 오늘 밤 발사된 흔적은 없는 권총.", img: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&w=600&q=80" },
    { id: "w_c24", name: "소각로의 불탄 미술품 위조 감정서", desc: "엘레나의 사기 범죄를 입증할 수 있는 공증 서류의 타다 남은 직인.", img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80" }
  ],

  endings: {
    truth: "사건의 진실: 에드워드 윈체스터를 살해한 진범은 차녀 **'엘레나 윈체스터'**입니다. 엘레나는 자신의 대규모 위조 미술품 사기 행각을 알아채고 경찰에 고발하려던 아버지 에드워드를 침묵시키기 위해, 밤 9시 30분경 주방에서 은제 독약 반지에 숨겨둔 청산가리를 카모마일 찻잔에 타서 직접 건넸습니다. 아버지가 독을 마시고 즉사하자 금고에서 고발 서류를 빼내 침실 화로에 소각했습니다.",
    citizenWin: {
      title: "폭풍우 속의 정의: 유언장의 진실 (시민 승리)",
      badge: "JUSTICE PREVAILED",
      bannerImg: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1200&q=80",
      epilogues: {
        arthur: "아서: 비록 도박 빚으로 유언장을 훔치려 한 과오는 드러났으나, 살인 누명을 벗고 가문의 장남으로서 파산 위기를 수습하기 위해 분투합니다.",
        elena: "엘레나: 완벽하다고 믿었던 독약 트릭과 손수건의 흔적이 탄로 나며 경찰에 체포되어 엄중한 사형 선고를 받게 됩니다.",
        charles: "찰스: 과다 수면제 처방에 대한 윤리적 비난은 피할 수 없었으나 살인 혐의는 벗고 의사 면허 정지 처분 후 런던을 떠납니다.",
        viola: "비올라: 금고를 훼손한 혐의로 유산의 일부만을 위자료로 받고 별장을 떠나 다시 무대 배우로서의 삶을 준비합니다.",
        victor: "빅터: 횡령 사실이 밝혀져 집사 직에서 파면되었으나, 에드워드의 유언에 따라 고발당하지 않고 조용히 시골로 낙향합니다."
      }
    },
    killerWin: {
      title: "피로 물든 상속: 엘레나의 완전범죄 (진범 승리)",
      badge: "COLD-BLOODED HEIR",
      bannerImg: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80",
      epilogues: {
        arthur: "아서: 현장에 남겨진 유언장 조각과 거액의 도박 빚 때문에 패륜 살인범으로 지목되어 억울하게 종신형을 선고받습니다.",
        elena: "엘레나: 수사망을 완벽히 교묘하게 빠져나가 가문의 유일한 합법적 상속자가 되어 막대한 재산과 갤러리를 손에 넣습니다.",
        charles: "찰스: 아서의 공범으로 몰려 의사 면허를 영구 박탈당하고 감옥에서 비참한 여생을 보냅니다.",
        viola: "비올라: 금고를 털려 한 정황 때문에 아서와 내통한 공범으로 몰려 한 푼도 받지 못한 채 추방당합니다.",
        victor: "빅터: 진실을 밝히려 애썼으나 오히려 횡령 장부 때문에 범행을 방조한 혐의로 체포됩니다."
      }
    }
  }
};
