// [시나리오 2: 황야의 설원 특급 - 사라진 황금 탄환]
export const scenarioData = {
  id: "express",
  title: "황야의 설원 특급: 사라진 황금 탄환",
  subtitle: "1898 알래스카 설원 열차 살인 사건",
  coverImg: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80",
  coverSub: "Aurora Snow Express 1898",
  prologueTag: "사건의 서막 • 1898",
  prologueLocation: "Winter 1898 • Yukon Pass Aurora Express",
  prologueStory: `
    <p>1898년 혹한의 겨울, 골드러시 열풍이 휘몰아치는 알래스카 유콘 협곡을 달리던 호화 침대열차 <strong>'오로라 익스프레스'</strong>가 눈사태로 철로에 갇히며 멈춰 섰습니다. 외부 온도는 영하 30도, 다음 정차역까지는 걸어서 빠져나갈 수 없는 절체절명의 고립 상태입니다.</p>
    <p>열차 1등 칸 특실에는 이번 골드러시의 최대 수혜자이자 거대한 금광주 <strong>패트릭 밴더빌트</strong>가 10만 달러 상당의 순금괴를 실은 이동식 금고와 함께 탑승해 있었습니다.</p>
    <p class="text-cyan-300 font-semibold">그러나 22시 정각, 기관실 기적 소리와 함께 총성이 어둠을 갈랐습니다.</p>
    <p>잠긴 특실 안에서 패트릭은 이마에 단 한 발의 황금 탄환을 맞고 즉사한 채 발견되었으며, 금고 안의 금괴와 그의 상징이었던 황금 리볼버가 감쪽같이 사라졌습니다. 열차는 달리는 밀실이었으며, 살인자는 눈보라 속으로 도망치지 못했습니다.</p>
    <p class="text-red-400 font-semibold">살인범과 훔친 황금은 지금 이 열차 객차 안에 있습니다.</p>
  `,
  victimName: "패트릭 밴더빌트",
  culpritCid: "vivian",
  fixedOrderCids: ["jack", "vivian", "samuel", "clara", "alexander"],
  characters: {
    jack: {
      id: "jack",
      name: "잭 칼라일",
      role: "카우보이 & 현상금 사냥꾼",
      avatar: "잭",
      imgUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
      isFiveOnly: false,
      publicDesc: "서부에서 악명 높은 총잡이. 최근 패트릭에게 고용되어 금괴 호송 경호를 맡음.",
      timeline: [
        { time: "20:30", text: "식당 칸에서 패트릭과 호송 보수 잔금 지급을 두고 시비가 붙음." },
        { time: "21:10", text: "바 칸에서 독한 버번 위스키를 마시며 총기 손질을 함." },
        { time: "21:45", text: "특실 문 앞 복도를 지나가다 수상한 발소리를 듣고 수색함." },
        { time: "22:00", text: "총성을 듣고 특실 문을 발로 차 부수고 진입함." }
      ],
      secret: "사실 과거 패트릭의 부하들에게 동생을 잃은 복수를 위해 위장 취업했습니다. 오늘 밤 죽일 작정으로 침실에 잠입했으나, 이미 패트릭이 사살되어 있어 당황해 뛰쳐나왔습니다.",
      alibis: [
        { id: "j1", title: "화약 냄새 배인 장갑", desc: "오른손 가죽 장갑에 최근 발사된 흑색 화약 잔여물이 묻어 있다.", img: "https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=600&q=80" },
        { id: "j2", title: "특실 복도 족적", desc: "특실 앞 카펫에 잭의 징 박힌 박차 부츠 자국이 선명하다.", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80" },
        { id: "j3", title: "콜트 리볼버 탄약 부족", desc: "잭의 탄띠에서 44구경 실탄 1발이 빈 채 발견되었다.", img: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&w=600&q=80" },
        { id: "j4", title: "복수 선언 쪽지", desc: "잭의 안주머니에서 '네놈의 피로 동생의 원혼을 달래겠다'는 메모가 발견됨.", img: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80" },
        { id: "j5", title: "깨진 버번 위스키 병", desc: "특실 쪽문 바닥에서 잭이 마시던 상표의 위스키 유리 파편이 발견되었다.", img: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=600&q=80" }
      ]
    },
    vivian: {
      id: "vivian",
      name: "비비안 모로",
      role: "살롱 가수 & 갬블러",
      avatar: "비",
      imgUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      isFiveOnly: false,
      publicDesc: "라스베이거스와 시애틀을 주름잡는 매혹적인 살롱 가수이자 승부사.",
      timeline: [
        { time: "20:00", text: "라운지 칸에서 감미로운 재즈 곡을 부르며 승객들의 시선을 끔." },
        { time: "21:00", text: "패트릭의 특실에 초대받아 샴페인을 나누어 마심." },
        { time: "21:40", text: "파우더룸으로 이동해 화장을 고치고 드레스를 정돈함." },
        { time: "22:00", text: "총성을 듣고 승객들과 함께 비명을 지르며 특실로 달려옴." }
      ],
      secret: "★ 당신이 바로 진범입니다! 패트릭은 당신의 가문을 몰락시킨 원수이자 당신을 도박 빚으로 위협해 왔습니다. 21:50경 소음용 쿠션을 대고 패트릭의 황금 리볼버로 이마를 쐈으며 금괴를 화물칸 석탄함에 숨겼습니다. 오직 당신만 거짓말이 가능합니다!",
      alibis: [
        { id: "v1", title: "그을린 실크 드레스 단", desc: "비비안의 드레스 자락 끝부분에 총구 화염으로 인한 그을음 흔적이 있다.", img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=600&q=80" },
        { id: "v2", title: "가터벨트 속 황동 열쇠", desc: "허벅지 가터벨트 안쪽에 특실 이동 금고를 여는 소형 열쇠가 숨겨져 있다.", img: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=600&q=80" },
        { id: "v3", title: "구멍 뚫린 우단 베개", desc: "특실 소파의 벨벳 쿠션에 총탄이 관통하고 화약이 묻은 채 버려져 있다.", img: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=600&q=80" },
        { id: "v4", title: "석탄 가루 묻은 향수병", desc: "비비안의 핸드백 속 프랑스산 향수병에 검은 석탄 분말이 묻어 있다.", img: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=600&q=80" },
        { id: "v5", title: "찢어진 도박 채무 각서", desc: "화장실 휴지통에서 '패트릭에게 진 5만 달러 채무 각서' 조각이 발견되었다.", img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80" }
      ]
    },
    samuel: {
      id: "samuel",
      name: "사무엘 홉킨스",
      role: "오로라 익스프레스 열차 승무장",
      avatar: "사",
      imgUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
      isFiveOnly: false,
      publicDesc: "20년간 유콘 횡단 철도를 지킨 노련한 차장. 열차의 모든 마스터키를 소지.",
      timeline: [
        { time: "20:20", text: "눈보라에 대비해 각 객실의 히터 배관과 차단기를 점검함." },
        { time: "21:20", text: "패트릭의 룸서비스 요청으로 온수와 여분의 담요를 전달함." },
        { time: "21:50", text: "폭설로 인한 긴급 정차 상황을 승객들에게 안내함." },
        { time: "22:00", text: "총성을 듣고 마스터키로 특실 도어를 긴급 개방함." }
      ],
      secret: "열차 회사의 임금 체불로 궁지에 몰려, 패트릭의 금고 속 금괴 한 개를 슬쩍 빼돌려 기관실 공구함에 은닉해 두었습니다. 살인범으로 몰릴까 봐 전전긍긍하고 있습니다.",
      alibis: [
        { id: "s1", title: "석탄재 묻은 승무원 외투", desc: "사무엘의 유니폼 소매에 기관실 석탄 가루와 윤활유 자국이 묻어 있다.", img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&q=80" },
        { id: "s2", title: "공구함 속 순금괴 1개", desc: "사무엘의 전용 렌치 공구함 밑바닥에서 패트릭의 각인이 찍힌 금괴 1개가 발견됨.", img: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=600&q=80" },
        { id: "s3", title: "휘어진 비상 마스터키", desc: "특실 문을 따려다 무리한 힘을 받아 끝부분이 휘어진 청동 열쇠.", img: "https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?auto=format&fit=crop&w=600&q=80" },
        { id: "s4", title: "사철(私鐵) 퇴직금 체불 통지서", desc: "안주머니에서 철도 회사가 파산 직전이라는 경영진의 비밀 통보문이 발견됨.", img: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=600&q=80" },
        { id: "s5", title: "핏자국 묻은 회중시계", desc: "사무엘의 은장 회중시계 뚜껑 테두리에 피 묻은 지문이 찍혀 있다.", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80" }
      ]
    },
    clara: {
      id: "clara",
      name: "클라라 밴더빌트",
      role: "피해자의 외동딸 & 금광 상속녀",
      avatar: "클",
      imgUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
      isFiveOnly: false,
      publicDesc: "동부 명문대를 졸업하고 부친의 사업을 물려받기 위해 동행한 상속녀.",
      timeline: [
        { time: "20:10", text: "식당 칸에서 부친 패트릭의 폭력적이고 강압적인 태도에 항의함." },
        { time: "20:50", text: "자신의 침대 칸에서 두통약을 먹고 독서를 하며 휴식함." },
        { time: "21:35", text: "부친에게 사과하기 위해 특실 앞까지 갔으나 안에서 다투는 소리에 돌아섬." },
        { time: "22:00", text: "총성을 듣고 경악하며 특실로 달려와 오열함." }
      ],
      secret: "부친이 자신을 다른 부호와 정략결혼 시키려 하자 반발해 부친의 금광 양도 증서와 인장을 훔쳐 가방 속에 숨겨두었습니다. 유산과 양도증이 들통날까 봐 두려워합니다.",
      alibis: [
        { id: "c1", title: "금광 양도 날인 증서", desc: "클라라의 여행 가방 바닥 안감에서 패트릭의 인장이 찍힌 금광 양도서가 발견됨.", img: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80" },
        { id: "c2", title: "소형 진주 호신용 권총", desc: "가방 속 보석함에서 실탄 2발이 장전된 여성용 22구경 데린저 권총이 발견됨.", img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80" },
        { id: "c3", title: "찢어진 정략결혼 계약서", desc: "클라라의 코트 주머니에서 부친이 강요한 결혼 계약서 파편이 발견됨.", img: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80" },
        { id: "c4", title: "21:35 특실 말소리 증언", desc: "21:35 특실 앞에서 여성의 날카로운 웃음소리를 들었다고 진술함.", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80" },
        { id: "c5", title: "피 묻은 레이스 손수건", desc: "특실 문 손잡이 바로 밑 바닥에서 클라라의 이니셜 'C.V' 손수건이 발견되었다.", img: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80" }
      ]
    },
    alexander: {
      id: "alexander",
      name: "알렉산더 볼코프",
      role: "러시아 모피 상인 & 지하 밀수업자",
      avatar: "알",
      imgUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      isFiveOnly: true,
      publicDesc: "시베리아와 알래스카를 오가며 진귀한 모피와 보석을 거래하는 거상.",
      timeline: [
        { time: "20:00", text: "바 칸에서 승객들에게 값비싼 보드카를 돌리며 재력을 과시함." },
        { time: "21:00", text: "패트릭과 밀담을 나누며 미개간 금광 채굴권 계약을 논의함." },
        { time: "21:40", text: "열차 화물 칸에 들러 자신의 모피 상자 상태를 점검함." },
        { time: "22:00", text: "총성을 듣고 파이프 담배를 입에 문 채 복도로 걸어나옴." }
      ],
      secret: "모피 상인은 위장일 뿐, 러시아 제국에서 도망쳐 나온 수배범입니다. 패트릭에게 거액의 금괴를 불법 러시아 채권과 맞바꾸자고 제안했다가 거절당해 앙심을 품고 있었습니다.",
      alibis: [
        { id: "l1", title: "모피 코트에 묻은 피", desc: "곰 가죽 외투 깃 안쪽에 말라붙은 작은 핏방울 자국이 발견되었다.", img: "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?auto=format&fit=crop&w=600&q=80" },
        { id: "l2", title: "러시아 제국 비밀 체포영장", desc: "트렁크 깊숙한 곳에서 알렉산더의 본명과 사진이 인쇄된 지명수배 전단이 발견됨.", img: "https://images.unsplash.com/photo-1577744486770-020ab432da65?auto=format&fit=crop&w=600&q=80" },
        { id: "l3", title: "금괴 계량용 천칭 저울", desc: "가방에서 순금괴의 순도와 무게를 달기 위한 정밀 황동 저울이 발견됨.", img: "https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?auto=format&fit=crop&w=600&q=80" },
        { id: "l4", title: "화물칸 썰매 도주 장비", desc: "화물칸 구석에서 눈사태 속을 탈출하기 위해 개조된 설상 스키와 로프가 발견됨.", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80" },
        { id: "l5", title: "독한 마취 클로로포름 병", desc: "외투 주머니에서 사람을 단시간에 기절시킬 수 있는 마취 약품 병이 발견되었다.", img: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=600&q=80" }
      ]
    }
  },
  clueDeck: [
    { name: "탄피 없는 황금 총알", desc: "패트릭의 이마에서 적출된 24K 순금 도금 리볼버 탄환.", img: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&w=600&q=80" },
    { name: "열려있는 빈 이동식 금고", desc: "특실 침대 밑에 고정된 채 다이얼이 파손되어 열려 있는 철제 금고.", img: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=600&q=80" },
    { name: "소음용으로 쓰인 벨벳 방석", desc: "화약 그을음이 동그랗게 남은 채 찢겨진 특실의 우단 쿠션.", img: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=600&q=80" },
    { name: "석탄 더미 속 순금괴 묶음", desc: "화물칸 석탄 포대 아래 깊숙이 묻혀 있던 10만 달러 상당의 순금괴들.", img: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=600&q=80" },
    { name: "비어 있는 황금 리볼버 케이스", desc: "패트릭의 서랍 속에 빈 채로 뚜껑이 열려 있는 자개 총기 상자.", img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80" },
    { name: "깨진 샴페인 플루트 잔", desc: "특실 테이블 밑에 깨진 잔. 입술 연지(립스틱) 자국이 선명하다.", img: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80" },
    { name: "차단된 비상 브레이크 밸브", desc: "객차 연결 통로에서 누군가 고의로 와이어를 자른 비상 정차 레버.", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80" },
    { name: "핏자국이 남은 카드 한 장", desc: "스페이드 에이스 카드 뒷면에 피 묻은 지문이 찍혀 있다.", img: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=600&q=80" },
    { name: "기관실 석탄 삽", desc: "손잡이에 지문이 지워진 채 화물칸 통로에 던져져 있던 무거운 삽.", img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80" },
    { name: "외투에서 떨어진 은색 단추", desc: "피해자의 굳은 손아귀에 쥐어져 있던 고급 모피 코트 단추.", img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&q=80" },
    { name: "얼어붙은 창문 틈 로프", desc: "특실 외부 창틀에 걸려 있는 눈 묻은 마닐라 삼 로프 조각.", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80" },
    { name: "채무 불이행 협박 전보", desc: "'이번 열차에서 지불하지 않으면 살아서 못 내린다'는 전보지.", img: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80" },
    { name: "패트릭의 수첩", desc: "'비비안, 클라라, 잭... 모두가 날 노린다'고 적힌 메모.", img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80" },
    { name: "찢어진 양도 증서 모서리", desc: "바닥 틈새에서 발견된 공증인 도장이 찍힌 금광 문서 파편.", img: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80" },
    { name: "하바나 시가 재", desc: "특실 카펫 위에 털려 있는 최고급 수입 시가 재 분말.", img: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=600&q=80" },
    { name: "정체불명의 백색 마취 가루", desc: "샴페인 바닥에서 침전된 무색무취의 강력 진정제 성분.", img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80" },
    { name: "열차 마스터 다이어그램", desc: "각 침실의 환기구와 비밀 통로가 붉은 펜으로 표시된 도면.", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80" },
    { name: "피 묻은 가죽 홀스터", desc: "특실 옷걸이 뒤에 숨겨져 있던 피가 튄 권총집.", img: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&w=600&q=80" },
    { name: "녹아내린 눈 발자국", desc: "복도 히터 바로 옆에 남아 있는 방수 가죽 장화의 물자국.", img: "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?auto=format&fit=crop&w=600&q=80" },
    { name: "금고 다이얼 파편", desc: "강한 충격이나 특수 키로 억지로 비틀어 뜯어낸 번호판 조각.", img: "https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?auto=format&fit=crop&w=600&q=80" },
    { name: "러시아 화폐 루블 뭉치", desc: "화물칸 모피 상자 사이에서 발견된 피 묻은 거액의 지폐 뭉치.", img: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=600&q=80" },
    { name: "부러진 만년필 펜촉", desc: "계약서 서명 도중 짓눌려 잉크가 사방으로 튄 금장 펜.", img: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=600&q=80" },
    { name: "도청용 금속 청진관", desc: "특실 옆방 벽면에 부착되어 있던 얇은 청동 관.", img: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=80" },
    { name: "향수 냄새 나는 손수건", desc: "피해자의 얼굴을 덮고 있던 짙은 프랑스 장미향 손수건.", img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=600&q=80" }
  ],
  truthStory: (vivianNick) => `
    <strong>진범: 살롱 가수 비비안 모로 (플레이어: ${vivianNick})</strong><br>
    비비안은 패트릭이 과거 자신의 부친을 파멸시키고 자신을 도박 빚으로 협박해 온 것에 앙심을 품고 복수를 계획했습니다. 
    21:00 특실에서 샴페인을 마시며 패트릭의 주의를 돌린 뒤, 21:50경 열차 소파의 벨벳 쿠션을 소음기로 삼아 패트릭의 황금 리볼버로 이마를 쐈습니다.
    이후 금괴를 기관실 화물칸 석탄함 속에 숨겨두었으며, 다른 용의자들의 원한과 탐욕을 이용해 수사망을 교란했습니다.
  `,
  epilogues: {
    success: (vivianNick) => `
      <div class="p-3 bg-neutral-900 rounded border border-neutral-800">
        <span class="font-bold text-amber-400 block mb-1">잭 칼라일</span>
        <p class="text-neutral-300 break-keep">살인 누명을 벗었으나 원수를 직접 처단하지 못한 씁쓸함을 안은 채, 다음 역에서 설원을 향해 홀로 말을 타고 떠납니다.</p>
      </div>
      <div class="p-3 bg-neutral-900 rounded border border-neutral-800">
        <span class="font-bold text-cyan-400 block mb-1">사무엘 홉킨스</span>
        <p class="text-neutral-300 break-keep">금괴 1개를 숨겼던 죄는 진범 검거 협조로 기소유예 처분을 받고, 명예롭게 승무장 직을 은퇴하여 손주들에게 돌아갑니다.</p>
      </div>
      <div class="p-3 bg-neutral-900 rounded border border-purple-400 block mb-1">클라라 밴더빌트</span>
        <p class="text-neutral-300 break-keep">부친의 억압에서 마침내 벗어나 금광의 정당한 단독 상속인으로서 동부로 돌아가 대사업가로 거듭납니다.</p>
      </div>
      <div class="p-3 bg-neutral-900 rounded border border-emerald-900/60 bg-emerald-950/20">
        <span class="font-bold text-emerald-400 block mb-1">비비안 모로 (${vivianNick})</span>
        <p class="text-neutral-300 break-keep">다음 간이역에서 도착한 연방 보안관에게 황금 탄환과 리볼버를 압수당하고 차디찬 철창으로 호송되며 비극적인 복수극의 막을 내립니다.</p>
      </div>
      <div class="p-3 bg-neutral-900 rounded border border-neutral-800">
        <span class="font-bold text-indigo-400 block mb-1">알렉산더 볼코프</span>
        <p class="text-neutral-300 break-keep">신분이 노출될 뻔한 위기를 넘기고 혼란을 틈타 다음 역에서 종적을 감춘 뒤 시베리아 국경으로 달아납니다.</p>
      </div>
    `,
    fail: (vivianNick, accused) => `
      <div class="p-3 bg-neutral-900 rounded border border-red-950">
        <span class="font-bold text-amber-400 block mb-1">잭 칼라일</span>
        <p class="text-neutral-400 break-keep">${accused === 'jack' ? '악명 높은 총잡이라는 과거 때문에 살인 누명을 쓰고 교수형 판결을 받게 됩니다.' : '진범의 연기에 속아 무고한 사람을 몰아세운 죄책감 속에 방랑자로 전락합니다.'}</p>
      </div>
      <div class="p-3 bg-neutral-900 rounded border border-red-950">
        <span class="font-bold text-cyan-400 block mb-1">사무엘 홉킨스</span>
        <p class="text-neutral-400 break-keep">${accused === 'samuel' ? '숨겨둔 금괴 1개가 발견되어 강도살인범으로 지목되어 평생을 감옥에서 썩게 됩니다.' : '평생을 바친 열차에서 끔찍한 비극을 막지 못했다는 자책으로 철도를 떠납니다.'}</p>
      </div>
      <div class="p-3 bg-neutral-900 rounded border border-red-950">
        <span class="font-bold text-purple-400 block mb-1">클라라 밴더빌트</span>
        <p class="text-neutral-400 break-keep">${accused === 'clara' ? '양도 증서를 훔친 정황 때문에 친아버지를 쏜 패륜 살인마로 낙인찍혀 모든 권리를 박탈당합니다.' : '부친을 잃고 유산마저 진범에게 빼앗긴 채 쓸쓸히 고립됩니다.'}</p>
      </div>
      <div class="p-3 bg-neutral-900 rounded border border-amber-600/60 bg-amber-950/20">
        <span class="font-bold text-amber-400 block mb-1">비비안 모로 (${vivianNick}) [우승]</span>
        <p class="text-neutral-200 break-keep font-semibold">완벽한 연기로 무고한 사람에게 누명을 씌운 뒤, 눈보라가 잦아든 틈을 타 석탄함 속 순금괴를 챙겨 샌프란시스코행 배에 몸을 싣고 화려하게 사라집니다.</p>
      </div>
      <div class="p-3 bg-neutral-900 rounded border border-red-950">
        <span class="font-bold text-indigo-400 block mb-1">알렉산더 볼코프</span>
        <p class="text-neutral-400 break-keep">${accused === 'alexander' ? '러시아 수배범이라는 사실이 들통나 살인범으로 둔갑되어 혹독한 연방 교도소로 이송됩니다.' : '금괴를 독점하지 못하고 빈손으로 보안관의 눈을 피해 도망치는 신세가 됩니다.'}</p>
      </div>
    `
  }
};