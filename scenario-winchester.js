// [시나리오 1: 폭풍우 치는 윈체스터 별장]
export const scenarioData = {
  id: "winchester",
  title: "폭풍우 치는 윈체스터 별장",
  subtitle: "1926 폭풍우 치는 밤의 살인 (사라진 유언장)",
  coverImg: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
  coverSub: "Mansion in the Thunderstorm",
  prologueTag: "사건의 서막 • 1926",
  prologueLocation: "October 1926 • Winchester Manor",
  prologueStory: `
    <p>1926년 10월의 깊은 밤, 영국의 외딴 절벽 위에 자리한 윈체스터 별장에 세찬 폭풍우가 몰아치고 있습니다. 벼락으로 인해 저택으로 이어지는 유일한 목교가 끊어지며, 저택 안의 사람들은 완전히 고립되었습니다.</p>
    <p>거대한 부를 쥐고 있던 별장의 주인 <strong>에드워드 윈체스터 경</strong>은 최근 막대한 유산을 둘러싸고 주변 인물들과 극심한 갈등을 빚고 있었습니다. 그는 오늘 밤 새로운 유언장을 공증하기 위해 친족과 주치의, 오랜 집사를 한자리에 불러 모았습니다.</p>
    <p class="text-amber-300 font-semibold">그러나 21시 30분, 서재에서 날카로운 비명소리가 울려 퍼졌습니다.</p>
    <p>문이 잠긴 서재 안에서 에드워드 경은 싸늘한 주검으로 발견되었고, 그가 작성하던 비밀 유언장은 흔적도 없이 사라졌습니다. 시신의 상태로 보아 명백한 타살. 폭풍우로 인해 경찰이 도착하기까지 최소 반나절 이상이 걸립니다.</p>
    <p class="text-red-400 font-semibold">저택 문을 열고 나갈 수 있는 자는 없습니다. 살인자는 지금 여러분 중 한 명입니다.</p>
  `,
  victimName: "에드워드 윈체스터 경",
  culpritCid: "elena",
  fixedOrderCids: ["arthur", "elena", "charles", "viola", "victor"],
  characters: {
    arthur: {
      id: "arthur",
      name: "아서 윈체스터",
      role: "장남 / 파산 위기의 사업가",
      avatar: "아",
      imgUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      isFiveOnly: false,
      publicDesc: "윈체스터 가문의 장남. 최근 무역 투자 실패로 거액의 사채를 씀.",
      timeline: [
        { time: "20:00", text: "응접실에서 부친(피해자)과 유산 배분을 두고 격렬한 말다툼." },
        { time: "20:30", text: "자신의 침실로 올라가 위스키를 마시며 진정하려 애씀." },
        { time: "21:00", text: "부친의 금고를 열기 위해 서재로 향하다 깨지는 소리를 듣고 도망침." },
        { time: "21:30", text: "비명을 듣고 다른 이들과 함께 서재로 뛰어감." }
      ],
      secret: "부친의 금고를 털기 위해 서재 만능열쇠를 복제해 소지했습니다. 서재에 도착했을 때 부친은 이미 쓰러져 있어 겁먹고 도망쳤을 뿐 살해하지 않았습니다.",
      alibis: [
        { id: "a1", title: "옷소매의 얼룩", desc: "와이셔츠 오른쪽 소매에 붉은 액체가 묻어 있다. 포도주인가, 핏자국인가?", img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=600&q=80" },
        { id: "a2", title: "20:55 계단 목격담", desc: "20:55경 서재 계단에서 안색이 창백해진 채 내려오는 것이 목격되었다.", img: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=600&q=80" },
        { id: "a3", title: "만능열쇠 복사본", desc: "외투 안주머니에서 서재 문과 금고를 여는 황동 복사 키가 발견되었다.", img: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=600&q=80" },
        { id: "a4", title: "깨진 회중시계", desc: "손목시계가 충격을 받아 정확히 21:00에 바늘이 멈춰 서 있다.", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80" },
        { id: "a5", title: "찢어진 사채 차용증", desc: "아서의 방 쓰레기통에서 오늘 자정까지 변제하지 않으면 목숨이 위험하다는 사채업자의 협박 편지 조각이 발견되었다.", img: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80" }
      ]
    },
    elena: {
      id: "elena",
      name: "엘레나 바스커빌",
      role: "주치의 / 피해자의 오랜 친구",
      avatar: "엘",
      imgUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
      isFiveOnly: false,
      publicDesc: "10년 넘게 피해자의 건강을 돌봐온 전속 주치의. 새 유언장 증인으로 초대됨.",
      timeline: [
        { time: "20:10", text: "피해자 에드워드에게 정기 지속성 진통제를 주사함." },
        { time: "20:40", text: "1층 약품실에서 의료 키트 및 약제를 점검하고 정리함." },
        { time: "21:10", text: "2층 복도에서 집사 찰스와 마주쳐 따뜻한 차를 권유받음." },
        { time: "21:30", text: "서재에서 사망한 에드워드를 검진하고 사망 선고를 내림." }
      ],
      secret: "★ 당신이 바로 진범입니다! 피해자는 과거 당신의 치명적인 의료과실을 빌미로 평생 협박했습니다. 20:10 진통제에 지연성 청산가리를 섞어 20:50경 독살했습니다. 유일하게 전면 거짓말이 허용되므로 다른 이에게 누명을 씌우세요!",
      alibis: [
        { id: "e1", title: "주사기 파편", desc: "1층 약품실 쓰레기통에서 유리 주사기 앰플 파편과 독극물 침전물이 발견되었다.", img: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=600&q=80" },
        { id: "e2", title: "만년필 대여 기록", desc: "20:35경 진단서 작성을 위해 집사에게 만년필을 빌려간 기록이 있다.", img: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=600&q=80" },
        { id: "e3", title: "독극물 관리대장 훼손", desc: "진료 가방 속 청산가리 바이알 재고 장부 페이지가 찢겨져 있다.", img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80" },
        { id: "e4", title: "청진기 끝의 백색 분말", desc: "청진기 림 부분에서 미량의 백색 결정 가루가 검출되었다.", img: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=600&q=80" },
        { id: "e5", title: "타다 남은 처방전", desc: "난로 속에서 엘레나의 서명이 적힌 치사량의 독극물 특별 처방전 흔적이 발견되었다.", img: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=600&q=80" }
      ]
    },
    charles: {
      id: "charles",
      name: "찰스 위킨스",
      role: "충직한 노집사",
      avatar: "찰",
      imgUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
      isFiveOnly: false,
      publicDesc: "윈체스터 저택에서 30년간 헌신한 집사. 저택의 모든 열쇠와 통로를 꿰뚫음.",
      timeline: [
        { time: "20:20", text: "에드워드의 지시로 서재에 홍차와 찻잔 세트를 가져다 둠." },
        { time: "20:50", text: "폭풍우로 불이 깜빡거리자 지하 보일러실 및 전기 차단기를 점검함." },
        { time: "21:10", text: "2층 복도에서 엘레나와 마주쳐 차를 대접함." },
        { time: "21:30", text: "비명을 듣고 서재 문을 집사용 마스터키로 개방함." }
      ],
      secret: "피해자가 전 재산을 보육원에 기부하겠다는 새 유언장을 작성 중인 것을 알고 있었습니다. 퇴직금과 생계가 날아갈까 봐 21:30 문을 열자마자 새 유언장 초안을 슬쩍 품속에 숨겼습니다.",
      alibis: [
        { id: "c1", title: "핏자국 묻은 면장갑", desc: "보일러실 석탄 더미 뒤편에서 피가 튄 집사용 면장갑이 발견되었다.", img: "https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=600&q=80" },
        { id: "c2", title: "홍차 잔의 침전물", desc: "서재 홍차 잔 바닥에 완전히 녹지 않은 검은 가루가 남아 있다.", img: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80" },
        { id: "c3", title: "찢겨진 유언장 조각", desc: "앞치마 주머니에서 '...모든 재산을 보육원에...'라고 적힌 종이 조각이 발견됨.", img: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80" },
        { id: "c4", title: "빠져있는 마스터키", desc: "허리춤 열쇠고리에서 서재 쪽문 보조 열쇠 하나가 빠져 있다.", img: "https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?auto=format&fit=crop&w=600&q=80" },
        { id: "c5", title: "지하실의 피 묻은 걸레", desc: "보일러실 구석 세척통에서 서재 바닥 핏자국을 닦아낸 흔적이 있는 걸레가 발견되었다.", img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80" }
      ]
    },
    viola: {
      id: "viola",
      name: "비올라 윈체스터",
      role: "젊은 후처 / 과거 무명 배우",
      avatar: "비",
      imgUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      isFiveOnly: false,
      publicDesc: "1년 전 나이 차를 극복하고 결혼한 아내. 유산을 노리고 접근했다는 소문이 자자함.",
      timeline: [
        { time: "20:00", text: "식당에서 아서와 에드워드가 다투는 것을 말리려다 질책을 들음." },
        { time: "20:40", text: "마음을 식히기 위해 저택 1층 온실 정원으로 나가 담배를 피움." },
        { time: "21:05", text: "서재 문을 두드렸으나 안에서 잠겨 있고 기척이 없어 돌아섬." },
        { time: "21:30", text: "비명을 듣고 2층으로 뛰어올라와 사망 현장을 목격함." }
      ],
      secret: "장남 아서의 사채 빚보증을 서주었으며 내연 관계였습니다. 남편이 이를 눈치채고 유언장에서 제외하려 하자 아서에게 협박 편지를 보낸 적이 있습니다.",
      alibis: [
        { id: "v1", title: "온실 진흙 하이힐 자국", desc: "온실에서 서재 쪽문으로 이어지는 진흙길에 하이힐 족적이 찍혀 있다.", img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=600&q=80" },
        { id: "v2", title: "장미 향수의 흔적", desc: "서재 쪽문 손잡이와 난로 주변에서 비올라의 장미 향수 향이 강하게 난다.", img: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=600&q=80" },
        { id: "v3", title: "협박 편지 원본", desc: "화장대 서랍에서 '아서, 남편이 눈치챘어. 당장 손을 써야 해'라는 편지가 발견됨.", img: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80" },
        { id: "v4", title: "21:05의 증언", desc: "21:05 서재 문을 두드렸을 때 안에서 긁는 신음 소리를 들었다고 진술함.", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80" },
        { id: "v5", title: "귀금속 보석함 은닉", desc: "비올라의 침대 매트리스 밑에서 서재 금고에 보관되어 있던 에드워드의 다이아몬드 브로치가 발견되었다.", img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80" }
      ]
    },
    victor: {
      id: "victor",
      name: "빅터 반스",
      role: "사설 탐정 / 초대받지 않은 손님",
      avatar: "빅",
      imgUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
      isFiveOnly: true,
      publicDesc: "폭풍우를 피해 투숙을 청한 탐정. 저택 인물들의 약점을 날카롭게 관찰함.",
      timeline: [
        { time: "19:50", text: "차량이 진흙탕에 빠져 도움을 요청하며 저택에 도착함." },
        { time: "20:25", text: "피해자 에드워드와 서재 복도에서 은밀히 짧은 대화를 나눔." },
        { time: "20:45", text: "손님방에 짐을 풀고 저택 복도를 거닐며 담배를 피움." },
        { time: "21:30", text: "비명을 듣고 가장 먼저 현장 통제를 시도함." }
      ],
      secret: "우연이 아닙니다. 에드워드로부터 '가족들의 비리를 캐달라'는 거액의 의뢰를 받고 잠입한 상태였습니다. 비밀 조사 수첩이 털리면 의뢰비 정산이 불가능해집니다.",
      alibis: [
        { id: "b1", title: "비밀 조사 수첩", desc: "품속 수첩에 모든 거주자들의 약점과 이동 경로가 빼곡히 메모되어 있다.", img: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=600&q=80" },
        { id: "b2", title: "젖은 장화와 우비", desc: "우비에 묻은 진흙이 서재 창틀의 진흙 성분과 일치한다.", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80" },
        { id: "b3", title: "선금 5천 파운드 수표", desc: "지갑에서 오늘 아침 에드워드가 발행한 거액 수표가 발견되었다.", img: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=600&q=80" },
        { id: "b4", title: "도청용 장비", desc: "가방에서 벽에 대고 소리를 엿듣는 사설 탐정용 도청 컵이 발견되었다.", img: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=80" },
        { id: "b5", title: "권총 홀스터", desc: "빅터의 코트 안쪽에 소음기를 장착할 수 있는 빈 가죽 권총 홀스터가 착용되어 있다.", img: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&w=600&q=80" }
      ]
    }
  },
  clueDeck: [
    { name: "부러진 황동 촛대", desc: "서재 바닥의 무거운 황동 촛대. 머리를 가격할 수 있는 크기다.", img: "https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?auto=format&fit=crop&w=600&q=80" },
    { name: "빈 청산가리 유리병", desc: "약품 보관함 뒤편에서 발견된 치사량의 청산가리 갈색 병.", img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80" },
    { name: "금고 앞 진흙 발자국", desc: "비밀 금고 바로 앞에 남겨진 비에 젖은 진흙 구두 자국.", img: "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?auto=format&fit=crop&w=600&q=80" },
    { name: "사채업자의 독촉장", desc: "장남 아서 앞으로 청구된 5만 파운드의 긴급 변제 독촉 서류.", img: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80" },
    { name: "생명보험 증서", desc: "피해자 사망 시 부인 비올라에게 거액이 지급되도록 변경된 서류.", img: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80" },
    { name: "타고 남은 양피지 조각", desc: "벽난로 재 속에서 발견된 '유언장' 머리말이 적힌 종이.", img: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=600&q=80" },
    { name: "지하 차단기 훼손 흔적", desc: "메인 배전반 전선이 칼로 절단된 흔적.", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80" },
    { name: "수면제 처방 기록", desc: "피해자가 최근 심한 불면증으로 고농도 진정제를 처방받은 내역.", img: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=600&q=80" },
    { name: "밀회 사진 조각", desc: "비올라와 아서가 시내 호텔에서 은밀히 만나는 사진.", img: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=600&q=80" },
    { name: "피 묻은 손수건", desc: "이니셜 'E'가 수놓인 고급 실크 손수건.", img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=600&q=80" },
    { name: "깨진 찻잔 파편", desc: "홍차 테이블 아래로 깨진 잔. 립스틱 자국이 있다.", img: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80" },
    { name: "열쇠공 명함", desc: "복제 열쇠 제작 전문 업체의 전화번호가 적힌 명함.", img: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=600&q=80" },
    { name: "보육원 감사 서한", desc: "전 재산을 사회에 환원해 주셔서 감사하다는 서한.", img: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=600&q=80" },
    { name: "외투 단추", desc: "피해자의 손가락 사이에 쥐어져 있던 검은색 코트 단추.", img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&q=80" },
    { name: "의료사고 협박장", desc: "과거 수술 사망 사건을 폭로하겠다는 협박 메모.", img: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80" },
    { name: "테라스 빗물 자국", desc: "외부에서 창문을 열고 들어왔음을 암시하는 창틀 빗물.", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80" },
    { name: "피해자의 일기장", desc: "'모든 자들이 내 목숨과 돈을 노린다'고 적힌 일기.", img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80" },
    { name: "찢어진 로브 깃", desc: "책상 모서리에 걸려 뜯겨나간 에드워드의 실크 가운 조각.", img: "https://images.unsplash.com/photo-1520006403909-838d6b92c22e?auto=format&fit=crop&w=600&q=80" },
    { name: "수면제 가루 봉지", desc: "식당 서빙 카트 바닥에서 발견된 약국 봉투.", img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80" },
    { name: "고급 시가 꽁초", desc: "서재 재떨이에 비벼 꺼진 최고급 하바나 시가.", img: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=600&q=80" },
    { name: "저택 청사진", desc: "하인용 통로와 서재 쪽문 위치가 표시된 도면.", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80" },
    { name: "변호사의 전보", desc: "'내일 오전 10시 정각 공증을 위해 방문합니다'라는 전보.", img: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=600&q=80" },
    { name: "깨진 안경 렌즈", desc: "카펫 깊숙한 곳에서 발견된 돋보기 안경 파편.", img: "https://images.unsplash.com/photo-1577744486770-020ab432da65?auto=format&fit=crop&w=600&q=80" },
    { name: "피 묻은 만년필", desc: "펜촉이 심하게 찌그러진 금장 만년필.", img: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=600&q=80" }
  ],
  truthStory: (elenaNick) => `
    <strong>진범: 주치의 엘레나 바스커빌 (플레이어: ${elenaNick})</strong><br>
    엘레나는 과거 자신의 치명적인 의료과실을 빌미로 평생 자신을 협박해 온 에드워드에게 20:10 정기 진통제 주사 시 지연성 청산가리를 투여했습니다. 
    에드워드는 20:50경 독이 퍼져 쓰러졌으며, 다른 용의자들은 각자의 약점(금고 절도 미수, 유언장 은닉, 불륜, 비밀 조사)을 숨기려다 서로를 의심했습니다.
  `,
  epilogues: {
    success: (elenaNick) => `
      <div class="p-3 bg-neutral-900 rounded border border-neutral-800">
        <span class="font-bold text-blue-400 block mb-1">아서 윈체스터</span>
        <p class="text-neutral-300 break-keep">살인 누명은 벗었으나 금고 절도 미수 사실이 드러나 유산 상속에서 배제되고, 사채업자들을 피해 런던 외곽으로 도피합니다.</p>
      </div>
      <div class="p-3 bg-neutral-900 rounded border border-neutral-800">
        <span class="font-bold text-amber-400 block mb-1">찰스 위킨스</span>
        <p class="text-neutral-300 break-keep">유언장을 은닉한 혐의로 가벼운 처벌을 받지만, 진범 검거에 협조한 점이 참작되어 평생 모은 퇴직금을 챙겨 고향으로 낙향합니다.</p>
      </div>
      <div class="p-3 bg-neutral-900 rounded border border-purple-400 block mb-1">비올라 윈체스터</span>
        <p class="text-neutral-300 break-keep">아서와의 밀회 편지가 세간에 폭로되어 귀족 사회에서 매장당하고, 위자료 한 푼 없이 저택에서 쫓겨나 무명 극단으로 돌아갑니다.</p>
      </div>
      <div class="p-3 bg-neutral-900 rounded border border-emerald-900/60 bg-emerald-950/20">
        <span class="font-bold text-emerald-400 block mb-1">엘레나 바스커빌 (${elenaNick})</span>
        <p class="text-neutral-300 break-keep">경찰 호송차에 오르며 수갑을 차지만, "지긋지긋한 에드워드의 협박에서 드디어 해방되었다"며 체념 섞인 미소를 짓습니다.</p>
      </div>
      <div class="p-3 bg-neutral-900 rounded border border-neutral-800">
        <span class="font-bold text-indigo-400 block mb-1">빅터 반스 (탐정)</span>
        <p class="text-neutral-300 break-keep">날카로운 추리로 진범의 알리바이 균열을 증명해내어 런던 경시청의 자문 탐정으로 명성을 떨치며 거액의 보수를 받습니다.</p>
      </div>
    `,
    fail: (elenaNick, accused) => `
      <div class="p-3 bg-neutral-900 rounded border border-red-950">
        <span class="font-bold text-blue-400 block mb-1">아서 윈체스터</span>
        <p class="text-neutral-400 break-keep">${accused === 'arthur' ? '억울하게 존속살해범 누명을 쓰고 종신형을 선고받아 감옥에서 절규합니다.' : '진범의 교묘한 유도에 속아 엉뚱한 사람을 의심한 죄책감과 빚더미 속에 파멸합니다.'}</p>
      </div>
      <div class="p-3 bg-neutral-900 rounded border border-red-950">
        <span class="font-bold text-amber-400 block mb-1">찰스 위킨스</span>
        <p class="text-neutral-400 break-keep">${accused === 'charles' ? '30년간 모신 주인을 독살했다는 누명을 쓰고 노구를 이끌고 교도소로 끌려갑니다.' : '저택이 풍비박산 나고 진실이 묻힌 채 홀로 빈 저택을 지키다 쓸쓸히 생을 마감합니다.'}</p>
      </div>
      <div class="p-3 bg-neutral-900 rounded border border-red-950">
        <span class="font-bold text-purple-400 block mb-1">비올라 윈체스터</span>
        <p class="text-neutral-400 break-keep">${accused === 'viola' ? '남편을 독살하고 유산을 가로채려 했다는 누명을 쓰고 호송차에 태워집니다.' : '아서와 서로를 범인으로 지목하며 물고 뜯다 진범의 비웃음 속에 빈털터리가 됩니다.'}</p>
      </div>
      <div class="p-3 bg-neutral-900 rounded border border-amber-600/60 bg-amber-950/20">
        <span class="font-bold text-amber-400 block mb-1">엘레나 바스커빌 (${elenaNick}) [우승]</span>
        <p class="text-neutral-200 break-keep font-semibold">협박 서류를 모조리 불태우고, 혼란을 틈타 안개 낀 도로를 유유히 빠져나가 해외에서 새로운 신분으로 막대한 유산을 누리며 살아갑니다.</p>
      </div>
      <div class="p-3 bg-neutral-900 rounded border border-red-950">
        <span class="font-bold text-indigo-400 block mb-1">빅터 반스 (탐정)</span>
        <p class="text-neutral-400 break-keep">${accused === 'victor' ? '에드워드의 비밀 의뢰를 수행하다가 살인범 프레임에 갇혀 탐정 자격을 영구 박탈당합니다.' : '진범의 치밀한 블러핑에 완전히 속아 엉뚱한 사람을 체포하게 만들어 명예가 바닥으로 추락합니다.'}</p>
      </div>
    `
  }
};