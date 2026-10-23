// scenario-express.js (Western Noir Snow Blizzard Express ver)
export default {
  id: "express",
  title: "황야의 설원 특급: 사라진 황금 탄환",
  subtitle: "눈보라로 협곡에 고립된 호화 열차 특실 살인 사건",
  era: "1898년 알래스카 설원 횡단 열차",
  victim: "실베스터 골드버그 (알래스카 금광 재벌)",
  killerId: "doc", // 진범 ID: 닥터 할러데이

  // 1. 프롤로그 스토리
  prologue: {
    bannerImg: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
    location: "알래스카 화이트 패스 협곡 횡단 특급열차 1등 칸",
    story: [
      "1898년 유콘 골드러시의 한겨울, 영하 30도의 눈보라와 눈사태로 인해 알래스카 화이트 패스 협곡 철교 위에 호화 대륙 횡단 열차가 완전히 고립되었습니다.",
      "밀폐된 1호 특등 침대차 안에서 알래스카 최대 금광주이자 재벌인 실베스터 골드버그가 이마에 총탄을 맞고 숨진 채 발견되었습니다.",
      "그가 열차 금고에 보관하고 있던 거대한 '순금괴 100온스'와 호신용으로 지니고 다니던 '황금 리볼버 탄환' 6발이 흔적도 없이 사라졌습니다.",
      "통신선마저 눈보라로 단선되어 외부의 구원병은 오지 않습니다. 폭설이 멈추기 전, 움직이는 설원의 밀실 속에서 진범을 밝혀내야 합니다."
    ]
  },

  // 2. 캐릭터 풀 (5인)
  characters: [
    {
      id: "shane",
      name: "셰인 와일더",
      role: "은퇴한 연방 보안관 (승객)",
      isKiller: false,
      isDefault: true,
      avatarImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      description: "오랫동안 서부 개척지를 누비다 은퇴 후 시애틀로 향하던 전직 연방 보안관.",
      secret: "당신은 사실 골드버그를 체포하기 위해 신분을 숨기고 열차에 탑승했습니다. 과거 당신의 가족이 살던 마을이 골드버그의 불법 금광 수탈 조직에게 몰살당했고, 그 범죄 장부를 확보하려 했습니다. 20:50경 마스터 열쇠로 특실에 잠입했으나, 이미 골드버그는 사살된 상태였습니다. 당황한 채 품속의 범죄 비밀 장부만 챙겨 달아났습니다.",
      timeline: [
        "20:20 - 3등 식당칸에서 독주를 마시며 승객들을 관찰",
        "20:50 - 특실 문을 피킹 도구로 따고 들어갔으나 이미 죽어있는 골드버그 발견",
        "20:55 - 골드버그의 서류 가방에서 토지 강탈 장부만 챙겨 복도로 탈출"
      ],
      alibiCards: [
        { id: "sha_1", name: "자켓의 화약 연기 냄새", desc: "셰인의 외투에서 희미하게 맡아지는 오래된 흑색 화약 냄새.", img: "https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=600&q=80" },
        { id: "sha_2", name: "품속의 강탈 피해자 장부", desc: "골드버그의 서명이 들어간 과거 불법 토지 매입 계약서 원본 묶음.", img: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80" },
        { id: "sha_3", name: "특수 금속 열쇠 피킹 핀", desc: "열차의 낡은 황동 자물쇠를 무력화할 수 있는 수제 따개 도구.", img: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=600&q=80" },
        { id: "sha_4", name: "장전된 .45 구경 콜트", desc: "탄환 6발이 모두 가득 채워져 있는 셰인의 은퇴 기념 리볼버.", img: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&w=600&q=80" },
        { id: "sha_5", name: "눈 덮인 외투 밑단", desc: "열차 외부 연결 통로를 급하게 지나치며 얼어붙은 눈송이 자국.", img: "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?auto=format&fit=crop&w=600&q=80" }
      ]
    },
    {
      id: "doc",
      name: "닥터 할러데이",
      role: "열차 전담 촉탁 의사",
      isKiller: true, // ★ 진범
      isDefault: true,
      avatarImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      description: "폐결핵 요양 차 북부로 올라온 떠돌이 의사이자 전문 도박사.",
      secret: "★ 당신이 진범입니다! 당신은 골드버그와의 비밀 고액 포커 도박판에서 빚진 돈 때문에 손가락이 잘릴 위기에 처해 있었습니다. 20:30경 청진기 진료를 핑계로 특실에 들어간 뒤, 소음 차단을 위해 베개로 총구를 감싸고 골드버그의 황금 탄환 리볼버를 빼앗아 그를 즉사시켰습니다. 금괴를 가방에 챙긴 후 살해 흉기인 탄환 탄피를 삼등칸 석탄 연료통에 던져 넣었습니다.",
      timeline: [
        "20:10 - 의료 가방을 챙겨 특등칸으로 향하는 모습이 목격됨",
        "20:30 - 특실에 들어가 골드버그를 베개 소음기를 이용해 사살하고 금괴 탈취",
        "21:00 - 사망 소식을 듣고 제일 먼저 현장에 달려와 사망 시각을 허위 감정함"
      ],
      alibiCards: [
        { id: "doc_1", name: "타버린 깃털 베개 파편", desc: "닥터의 가방 밑바닥에 달라붙은 그을린 오리털과 깃털 조각.", img: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=600&q=80" },
        { id: "doc_2", name: "약품통에 숨겨진 금가루", desc: "몰핀 병 내부에서 검출된 골드버그의 순금괴에서 긁힌 순금 분말.", img: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=600&q=80" },
        { id: "doc_3", name: "골드버그 앞 사채 차용증", desc: "도박 빚 1만 달러를 오늘 밤 자정까지 갚지 못하면 신체 포기를 서약한 각서.", img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80" },
        { id: "doc_4", name: "변조된 사망 진단 기록", desc: "사망 추정 시각을 20:30이 아닌 21:00 이후로 조작해 기재한 의사 수첩.", img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80" },
        { id: "doc_5", name: "석탄 가루 묻은 소매", desc: "증거 인멸을 위해 기관실 석탄 화덕 주변을 서성이다 묻은 검은 검댕.", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80" }
      ]
    },
    {
      id: "madame",
      name: "마담 클로에",
      role: "살롱 여주인 / 골드버그의 동행인",
      isKiller: false,
      isDefault: true,
      avatarImg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      description: "도슨 시티에서 거대 살롱을 운영하며 사교계 여왕으로 불리는 여인.",
      secret: "당신은 골드버그의 약혼녀 행세를 하고 있었지만, 실제로는 철도 회사의 경쟁 파벌로부터 금괴 수송 시간표를 빼돌려 달라는 제안을 받았습니다. 20:40경 마스터 키로 금고를 털려 했으나 문이 잠겨 있어 실패했고, 방 안에서 인기척이 없어 발길을 돌렸습니다. 당신은 도둑일 뿐 살인자는 아닙니다.",
      timeline: [
        "20:15 - 살롱 바에서 샴페인을 주문하며 알리바이를 형성",
        "20:40 - 골드버그 특실 문을 두드렸으나 대답이 없어 손잡이만 돌려봄",
        "21:10 - 비명 소리가 들리자 라운지에서 뛰어나옴"
      ],
      alibiCards: [
        { id: "mad_1", name: "벨벳 드레스의 붉은 잉크", desc: "금고 번호를 메모하려다 드레스 안쪽에 묻은 만년필 잉크 자국.", img: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=600&q=80" },
        { id: "mad_2", name: "경쟁 철도사의 비밀 전보", desc: "'골드버그의 금괴 운송이 중단되면 5만 달러를 지급하겠다'는 암호문.", img: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80" },
        { id: "mad_3", name: "특실 마스터 스페어 키", desc: "차장 몰래 복제한 1호 열차 객실 마스터 열쇠 복사본.", img: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=600&q=80" },
        { id: "mad_4", name: "샤넬 향수 잔여취", desc: "사건 현장 문손잡이와 문틀 주변에 짙게 남아 있는 특유의 장미 향기.", img: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=600&q=80" },
        { id: "mad_5", name: "보석상 위탁 보증서", desc: "최근 골드버그로부터 선물받은 고액 다이아몬드 목걸이의 진품 감정서.", img: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=600&q=80" }
      ]
    },
    {
      id: "thomas",
      name: "토마스 오코너",
      role: "골드버그의 개인 경호원",
      isKiller: false,
      isDefault: true,
      avatarImg: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
      description: "남북전쟁 참전 용사 출신으로, 거친 인상의 과묵한 전속 보디가드.",
      secret: "당신은 골드버그가 평소 당신을 하인 취급하며 모욕하고 임금을 체불하자 앙심을 품고 있었습니다. 사건 당시 당신은 근무지를 무단 이탈해 식당칸에서 몰래 위스키를 훔쳐 마시고 취해 있었습니다. 경호 태만으로 해고당할 것이 두려워 현장 복도에 계속 서 있었다고 거짓말을 했습니다.",
      timeline: [
        "20:00 - 특실 문 앞 보초 임무를 시작",
        "20:25 - 추위와 스트레스를 못 이겨 식당 화물칸으로 숨어들어 술을 마심",
        "21:05 - 총성 대신 울린 둔탁한 소리를 듣고 허겁지겁 복도로 복귀"
      ],
      alibiCards: [
        { id: "tho_1", name: "몰래 숨겨둔 옥수수 위스키", desc: "식당칸 창고에서 훔쳐 반쯤 비워낸 밀주 병.", img: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=600&q=80" },
        { id: "tho_2", name: "체불 임금 청구서", desc: "골드버그에게 3개월간 밀린 급여를 지급하라고 요구한 피 묻은 편지.", img: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80" },
        { id: "tho_3", name: "너클과 가죽 장갑", desc: "폭력 진압용 쇠너클. 최근 누군가를 구타해 생긴 작은 핏자국이 남아있음.", img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80" },
        { id: "tho_4", name: "20:25 빈 보초 의자", desc: "특실 문 앞 경호원 간이 의자에 올려진 식어버린 커피잔.", img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80" },
        { id: "tho_5", name: "군용 윈체스터 소총", desc: "탄약이 단 한 발도 발사되지 않은 채 손질되어 있는 토마스의 제식 소총.", img: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&w=600&q=80" }
      ]
    },
    {
      id: "eliza",
      name: "엘리자 헌터",
      role: "핑커톤 여성 탐정 (5인 전용)",
      isKiller: false,
      isDefault: false,
      avatarImg: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      description: "열차 강도단을 추적하기 위해 수녀로 위장하고 열차에 잠입한 비밀 탐정.",
      secret: "당신은 전설적인 '설원 열차 강도단'이 이번 골드버그의 금괴 열차를 노린다는 첩보를 입수하고 잠입했습니다. 수상한 인물들을 감시하느라 객차 지붕과 복도를 넘나들었을 뿐 살해 사건과는 직접적인 관련이 없습니다.",
      timeline: [
        "20:00 - 3등칸 승객 명부를 몰래 대조하며 강도단 추적",
        "20:45 - 열차 외부 사다리를 타고 1등칸 통로로 침투",
        "21:15 - 살인 현장 통제를 선언하고 탐정 신분을 공개"
      ],
      alibiCards: [
        { id: "eli_1", name: "핑커톤 사설 탐정 배지", desc: "수녀복 안주머니에 은밀히 숨겨져 있던 은색 탐정 공무 증표.", img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80" },
        { id: "eli_2", name: "열차 강도단 수배 전단", desc: "알래스카 협곡을 무대로 활동하는 복면 강도단의 몽타주.", img: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80" },
        { id: "eli_3", name: "소형 더린저 권총", desc: "치마 속 홀스터에 장착된 2연발 소형 호신용 권총. 발사 흔적 없음.", img: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&w=600&q=80" },
        { id: "eli_4", name: "동상 걸린 가죽 부츠", desc: "눈보라 치는 열차 지붕을 수색하다 동결된 엘리자의 가죽 신발.", img: "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?auto=format&fit=crop&w=600&q=80" },
        { id: "eli_5", name: "망원경과 감시 일지", desc: "열차 탑승객들의 분 단위 이동 동선을 깨알같이 기록한 수첩.", img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80" }
      ]
    }
  ],

  // 3. 현장 증거 24종 덱
  clues: [
    { id: "c01", name: "이마에 총상을 입은 사체", desc: "근거리에서 발사된 단 한 발의 총탄에 의해 이마 정중앙을 관통당해 즉사함.", img: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=600&q=80" },
    { id: "c02", name: "그을린 거위털 베개", desc: "총구에 밀착시켜 소음기로 사용된 특실 침대의 깃털 베개. 화약 그을음이 묻어 있음.", img: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=600&q=80" },
    { id: "c03", name: "비어 있는 금괴 보관함", desc: "특실 바닥에 열려 있는 강철 금고. 순금괴 100온스가 말끔히 사라져 있음.", img: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=600&q=80" },
    { id: "c04", name: "골드버그의 황금 리볼버", desc: "사체 옆 탁자에 놓여 있던 황금 도금 리볼버. 6발 중 단 1발만 발사된 채 남아 있음.", img: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&w=600&q=80" },
    { id: "c05", name: "의사 닥터의 청진기", desc: "특실 카펫 위에 떨어져 있던 촉탁 의사 닥터 할러데이의 이니셜 각인 청진기.", img: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=600&q=80" },
    { id: "c06", name: "20:50 도어락 강제 개방 흔적", desc: "문 손잡이 걸쇠 주변에 미세한 핀으로 긁힌 은퇴 보안관 셰인의 자국.", img: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=600&q=80" },
    { id: "c07", name: "특실 문 앞 장미 향수취", desc: "특실 복도 주변에서 마담 클로에가 애용하는 파리산 향수 냄새가 짙게 진동함.", img: "https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=600&q=80" },
    { id: "c08", name: "보초석의 식어버린 위스키", desc: "토마스가 서 있어야 할 경호석 밑에서 발견된 반쯤 남은 위스키 잔.", img: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=600&q=80" },
    { id: "c09", name: "지붕 환풍구의 밧줄 흔적", desc: "외부 지붕에서 1등실 환기구로 침투하려다 생긴 엘리자의 로프 마찰흔.", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80" },
    { id: "c10", name: "기관실 화덕의 황금 탄피", desc: "석탄 가마 속에서 녹아내리다 만 골드버그 전용 황금 리볼버의 특수 탄피.", img: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&w=600&q=80" },
    { id: "c11", name: "피 묻은 도박 각서", desc: "골드버그의 가슴 안주머니에서 발견된 '닥터 할러데이의 도박 채무 확인서'.", img: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80" },
    { id: "c12", name: "토지 강탈 피해자 탄원서", desc: "셰인의 손에 들려 있던 서류와 같은 양식의 골드버그 횡령 고발장 초안.", img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80" },
    { id: "c13", name: "클로에의 금고 마스터키 복사본", desc: "복도 화분 밑에서 수거된 열차 1등칸 특실용 황동 마스터 복제 열쇠.", img: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=600&q=80" },
    { id: "c14", name: "토마스의 피 묻은 쇠너클", desc: "사건 전날 밤 누군가를 구타할 때 사용된 토마스의 보디가드 장비.", img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80" },
    { id: "c15", name: "위장 수녀 신분증", desc: "엘리자 헌터가 소지하고 있던 위조된 시애틀 성당 소속 수녀 신분 증서.", img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80" },
    { id: "c16", name: "파손된 열차 비상 브레이크", desc: "열차가 협곡에 멈춰 서게 만든 원인인 강제 절단된 공기압 밸브 와이어.", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80" },
    { id: "c17", name: "사망 추정 시각 조작 진술서", desc: "닥터가 초기에 '21시 이후 사망'이라 주장했으나 사체 경직은 20:30분을 가리킴.", img: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80" },
    { id: "c18", name: "금가루가 묻은 의사 메스 가방", desc: "닥터 할러데이의 가죽 왕진 가방 모서리 틈새에 끼어 있는 반짝이는 순금 입자.", img: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=600&q=80" },
    { id: "c19", name: "경쟁 철도사 비밀 자금 전표", desc: "마담 클로에의 화장대 거울 뒤에서 발견된 거액의 공작금 지급 보증서.", img: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80" },
    { id: "c20", name: "셰인의 낡은 수색 영장", desc: "정식 효력이 만료되었으나 골드버그를 압박하기 위해 위조된 체포 영장.", img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80" },
    { id: "c21", name: "식당칸 창고의 깨진 술병", desc: "토마스가 몰래 술을 마시며 은신했던 증거인 알래스카 특산 위스키 빈 병.", img: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=600&q=80" },
    { id: "c22", name: "눈사태 경고 무전 기록", desc: "화이트 패스 협곡 진입 직전 수신된 폭설 경고 전보문.", img: "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?auto=format&fit=crop&w=600&q=80" },
    { id: "c23", name: "피해자의 깨진 회중시계", desc: "골드버그의 손목에서 떨어진 시계. 범인과 몸싸움을 벌이다 20:30분에 바늘이 멈춤.", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80" },
    { id: "c24", name: "황금 탄환 박스의 빈자리", desc: "6발 들이 벨벳 케이스에서 단 1발만 꺼내져 사용된 흔적.", img: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&w=600&q=80" }
  ],

  // 4. 최종 엔딩 및 에필로그 (시민 승리 vs 진범 승리)
  endings: {
    truth: "사건의 진실: 알래스카 금광 재벌 골드버그를 사살한 진범은 열차 촉탁 의사 **'닥터 할러데이'**입니다. 닥터는 막대한 도박 빚으로 신체 포기 위기에 몰리자, 진료를 핑계로 20:30분 특실에 들어가 베개로 총구를 막고 피해자의 황금 탄환 리볼버로 즉사시켰습니다. 금괴를 훔친 후 탄피를 기관실 화덕에 던져 은멸하려 했으나, 멈춰버린 회중시계와 가방 속 금가루로 인해 범행이 탄로 났습니다.",
    citizenWin: {
      title: "설원의 정의: 탐욕의 종착역 (시민 승리)",
      badge: "JUSTICE IN BLIZZARD",
      bannerImg: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
      epilogues: {
        shane: "셰인: 골드버그의 범죄 장부를 무사히 지켜내어 은퇴 후 고향 유족들에게 보상금을 전달하고 명예를 회복합니다.",
        doc: "닥터: 완벽하다고 자부했던 알리바이와 사망 시각 조작이 간파당하며 체포됩니다. 다음 역에서 연방 법원으로 인도됩니다.",
        madame: "클로에: 살인 혐의는 벗었으나 산업 스파이 혐의로 열차 회사에 고소당해 사교계에서 영구 추방됩니다.",
        thomas: "토마스: 직무 유기 혐의로 보디가드 업계에서 퇴출당하지만 살인 누명은 벗고 알래스카 탄광 광부로 새 출발을 합니다.",
        eliza: "엘리자: 살인범 검거와 특급 열차 승객 보호 임무를 성공적으로 완수하여 핑커톤 본부의 수석 특별 수사관으로 승진합니다."
      }
    },
    killerWin: {
      title: "눈보라 속의 탈출: 지워진 황금 탄환 (진범 승리)",
      badge: "FROZEN CRIME",
      bannerImg: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
      epilogues: {
        shane: "셰인: 현장에 남아 있던 피킹 도구와 체포 영장 때문에 원한에 의한 계획 살인범으로 몰려 철창에 갇히게 됩니다.",
        doc: "닥터: 의심을 완전히 피한 채 순금괴 100온스를 챙겨 폭설이 멎자마자 썰매를 타고 캐나다 국경을 넘어 사라집니다.",
        madame: "클로에: 특실 문앞 향수 냄새와 마스터키로 인해 살인 배후 교사범으로 지목되어 전 재산을 압류당합니다.",
        thomas: "토마스: 알리바이를 증명하지 못한 채 흉폭한 경호원이라는 편견 탓에 공범으로 지목되어 무기징역을 선고받습니다.",
        eliza: "엘리자: 신분을 속이고 잠입했다는 이유로 열차 강도단의 내부 첩자로 몰려 탐정 배지를 빼앗깁니다."
      }
    }
  }
};
