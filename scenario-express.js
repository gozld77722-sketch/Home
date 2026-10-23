// scenario-express.js
export default {
  id: "express",
  title: "황야의 설원 특급: 사라진 황금 탄환",
  subtitle: "눈보라 협곡에 고립된 호화 열차 특실 살인 사건",
  era: "1898년 알래스카 설원 열차",
  victim: "알렉산더 드레이크 (금광 재벌)",
  killerId: "vivian", // 진범 ID: 비비안 스칼렛

  prologue: {
    bannerImg: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
    location: "노던 오로라 익스프레스 1호 특실 및 식당칸",
    story: [
      "1898년 혹한의 알래스카, 시속 100km의 눈보라로 철로가 얼어붙고 협곡 철교가 끊기며 특급 열차가 설원에 고립되었습니다.",
      "밤 10시 정각, 알래스카 최대 금광을 소유한 거물 알렉산더 드레이크가 1호 특실 소파에서 심장에 관통상을 입고 숨진 채 발견되었습니다.",
      "피해자의 개인 금고에 들어 있던 '순금괴 10개'와 그가 자랑하던 '황금 리볼버'에서 발사된 탄환 1발이 온데간데없이 사라졌습니다.",
      "영하 30도의 살인적인 고립 속, 열차 안에 갇힌 5명의 승객. 오직 진범만이 거짓말을 할 수 있습니다. 엔진 불이 꺼지기 전 진범을 찾아내야 합니다."
    ]
  },

  characters: [
    {
      id: "thomas",
      name: "토마스 베일리",
      role: "열차 차장 / 전직 철도 엔지니어",
      isKiller: false,
      isDefault: true,
      avatarImg: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
      description: "20년 무사고 운행을 자랑하는 베테랑 차장. 열차 마스터키와 비상 장비를 관리함.",
      secret: "당신은 드레이크에게 거액의 철도 건설 채권을 강탈당해 파산 위기에 처해 있었습니다. 21:35경 마스터키로 1호 특실에 들어가 채권 증서를 되찾으려 했으나, 드레이크는 이미 가슴에 피를 흘리며 숨져 있었습니다. 당신은 겁에 질려 금고 문을 닫고 도망쳤습니다.",
      timeline: [
        "21:10 - 기관실에서 눈보라 상황을 점검함",
        "21:35 - 마스터키로 1호 특실에 들어갔다가 시신을 보고 경악해 도망침",
        "22:05 - 비비안의 비명을 듣고 객실로 달려감"
      ],
      alibiCards: [
        { id: "tho_1", name: "전 구역 개폐용 열차 마스터키", desc: "1호 특실을 포함해 열차의 모든 문을 열 수 있는 황동 열쇠 꾸러미.", img: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=600&q=80" },
        { id: "tho_2", name: "강탈당한 베일리의 철도 채권", desc: "드레이크가 토마스 차장의 집과 철도 지분을 가로챈 불공정 계약서 원본.", img: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80" },
        { id: "tho_3", name: "석탄재 묻은 차장 제복 소매", desc: "기관실 보일러를 정비하며 묻은 시커먼 석탄 그을음과 기름때.", img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80" },
        { id: "tho_4", name: "토마스의 점검용 회중시계", desc: "열차 운행 스케줄을 기록한 흠집 난 은제 회중시계.", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80" },
        { id: "tho_5", name: "비상 신호탄 권총", desc: "조난 시 외부에 쏘아 올리기 위해 구비된 붉은 조명탄 총기.", img: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&w=600&q=80" }
      ]
    },
    {
      id: "vivian",
      name: "비비안 스칼렛",
      role: "미모의 도박사 / 댄서",
      isKiller: true, // ★ 진범
      isDefault: true,
      avatarImg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      description: "샌프란시스코 카지노에서 명성을 떨치던 여성 승객. 화려한 외모 뒤에 냉철한 사격술을 숨김.",
      secret: "★ 당신이 진범입니다! 3년 전 드레이크는 클론다이크에서 당신의 아버지를 살해하고 금광 채굴권을 독식했습니다. 당신은 복수를 위해 신분을 위장하고 열차에 탑승했습니다. 21:20경 소음기 역할을 할 벨벳 쿠션으로 총구를 감싼 뒤, 드레이크의 황금 리볼버를 빼앗아 그의 심장을 쏘았습니다. 금괴 10개와 탄환 탄피를 눈보라 치는 환기창 밖으로 던져 증거를 인멸했습니다.",
      timeline: [
        "21:00 - 식당칸에서 샴페인을 마시며 승객들과 대화함",
        "21:20 - 1호 특실에 침입해 쿠션으로 총성을 줄여 드레이크를 사살",
        "21:40 - 화장실 환풍구 뒤에 피 묻은 장갑을 숨기고 식당칸으로 복귀"
      ],
      alibiCards: [
        { id: "viv_1", name: "구멍 뚫린 그을린 벨벳 쿠션", desc: "총구의 화약 화염과 총성을 줄이기 위해 밀착 소음기로 사용된 방석 쿠션.", img: "https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=600&q=80" },
        { id: "viv_2", name: "비비안 아버지의 금광 광업권", desc: "드레이크의 서명으로 강탈당했던 비비안 선친의 클론다이크 채굴권 문서.", img: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80" },
        { id: "viv_3", name: "화약 냄새가 밴 레이스 장갑", desc: "총을 발사할 때 미세한 화약 잔류물이 묻어난 비비안의 고급 검은 장갑.", img: "https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=600&q=80" },
        { id: "viv_4", name: "탄피 1개가 빈 황금 리볼버", desc: "드레이크의 특실 바닥에 떨어진 6연발 중 1발만 발사된 황금 리볼버 권총.", img: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&w=600&q=80" },
        { id: "viv_5", name: "비비안의 모피 코트 안감 혈흔", desc: "근접 사격 시 튀어 모피 코트 안쪽 밑단에 묻은 극미량의 핏자국.", img: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=600&q=80" }
      ]
    },
    {
      id: "raymond",
      name: "레이먼드 클라크",
      role: "지질학 교수 / 광산 감정사",
      isKiller: false,
      isDefault: true,
      avatarImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      description: "드레이크의 의뢰를 받아 알래스카 광맥 지도를 제작해 온 저명한 지질학자.",
      secret: "당신은 드레이크가 소유한 금광이 사실 금이 거의 나오지 않는 폐광이며, 드레이크가 투자자들을 속여 가짜 주식을 팔아넘기려 한다는 비밀을 알고 있었습니다. 침묵의 대가로 1만 달러를 요구하는 협박 편지를 보냈으나 살해하지는 않았습니다.",
      timeline: [
        "21:05 - 개인 침실에서 광맥 지도와 암석 표본을 정리",
        "21:30 - 드레이크의 문 밑으로 협박 메모를 밀어 넣음",
        "22:05 - 사건 소식을 듣고 복도로 뛰어나옴"
      ],
      alibiCards: [
        { id: "ray_1", name: "폐광 감정 보고서 원본", desc: "드레이크의 신규 광산이 사기성 폐광임을 증명하는 분석 데이터.", img: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80" },
        { id: "ray_2", name: "교수의 지질조사용 망치", desc: "가방에 들어 있던 끝이 뾰족한 단단한 강철 지질 탐사용 해머.", img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80" },
        { id: "ray_3", name: "1만 달러 비밀 요구 각서", desc: "침묵을 지키는 대가로 시애틀 은행에 거액 입금을 요구한 자필 메모 사본.", img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80" },
        { id: "ray_4", name: "알래스카 비밀 금광 매장 지도", desc: "진짜 금맥의 위치가 암호로 표시된 가죽 표지의 지도.", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80" },
        { id: "ray_5", name: "교수의 깨진 돋보기 안경", desc: "당황해 복도 바닥에 떨어뜨려 렌즈 한쪽이 깨진 안경.", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80" }
      ]
    },
    {
      id: "olga",
      name: "올가 이바노바",
      role: "러시아 망명 귀족 / 모피 무역상",
      isKiller: false,
      isDefault: true,
      avatarImg: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
      description: "러시아 제국에서 망명해 알래스카에서 모피 무역을 하는 베일에 싸인 귀부인.",
      secret: "당신은 드레이크가 소지하고 있던 전설적인 '로마노프 황실 에메랄드 목걸이'가 당신 가문에서 약탈당한 가보임을 알고 있었습니다. 21:15경 호신용 단검을 품고 특실에 잠입해 목걸이만 훔쳐 당신의 모피 트렁크 밑바닥에 숨겼습니다.",
      timeline: [
        "21:00 - 식당칸에서 비비안과 차를 마심",
        "21:15 - 드레이크가 자리를 비운 틈에 에메랄드 목걸이를 훔쳐 나옴",
        "22:05 - 객실에서 숨을 죽이고 있다가 웅성거림에 밖으로 나옴"
      ],
      alibiCards: [
        { id: "olg_1", name: "트렁크 속 로마노프 에메랄드 목걸이", desc: "올가가 드레이크의 금고에서 훔쳐 숨겨둔 눈부신 녹색 보석 목걸이.", img: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&w=600&q=80" },
        { id: "olg_2", name: "러시아 은제 세공 단검", desc: "올가의 핸드백에 들어 있던 보석이 박힌 호신용 날카로운 단도.", img: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=600&q=80" },
        { id: "olg_3", name: "위조된 러시아 제국 여권", desc: "망명 신분을 감추고 캐나다 국경을 넘기 위해 제작된 위조 통행증.", img: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80" },
        { id: "olg_4", name: "올가의 모피 숄에 묻은 눈송이", desc: "특실 복도 창문 틈으로 들어온 눈보라가 녹아내린 물방울 자국.", img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80" },
        { id: "olg_5", name: "상페테르부르크 은행 예금증서", desc: "가문 재산을 몰래 스위스로 빼돌리기 위해 작성된 환어음 증서.", img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80" }
      ]
    },
    {
      id: "jack",
      name: "잭 도슨",
      role: "열차 경비원 / 전직 보안관 (5인 전용)",
      isKiller: false,
      isDefault: false,
      avatarImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      description: "열차의 보안과 승객들의 안전을 총괄하는 거친 성격의 전직 보안관.",
      secret: "당신은 드레이크가 수송 중인 순금괴 10개를 중간 역에서 강도단과 짜고 탈취하려던 음모를 꾸미고 있었습니다. 사건 당시 열차 화물칸 문을 몰래 따두느라 현장에 없었기에 알리바이를 입증하기 곤란합니다.",
      timeline: [
        "21:10 - 2등칸 순찰을 돌며 승객들을 통제",
        "21:40 - 화물칸 빗장을 풀어 강도단이 들어올 수 있도록 준비",
        "22:00 - 총성 없는 사망 소식을 듣고 현장 통제에 나섬"
      ],
      alibiCards: [
        { id: "jac_1", name: "화물칸 자물쇠 절단기", desc: "철제 빗장을 강제로 자르기 위해 숨겨두었던 대형 볼트 커터 장비.", img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80" },
        { id: "jac_2", name: "열차 강도단과의 밀약 전보", desc: "설원 협곡 정차 시 금괴를 빼돌리기로 약속한 강도단의 암호 전보.", img: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80" },
        { id: "jac_3", name: "콜트 45구경 리볼버", desc: "잭의 홀스터에 꽂혀 있던 총알이 모두 채워진 제식 권총.", img: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&w=600&q=80" },
        { id: "jac_4", name: "보안관 배지와 가죽 조끼", desc: "알래스카 준주 보안관 시절 수여받은 낡은 별 모양 황동 배지.", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80" },
        { id: "jac_5", name: "화물칸 순찰 일지", desc: "사건 시각 동안 '이상 무'로 미리 적어둔 조작된 보안 일지.", img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80" }
      ]
    }
  ],

  clues: [
    { id: "e_c01", name: "피해자의 심장 관통 총상", desc: "영거리에서 심장을 정확히 저격당해 즉사함. 주변 섬유에 탄흔이 남음.", img: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=600&q=80" },
    { id: "e_c02", name: "소음기로 쓰인 그을린 벨벳 쿠션", desc: "총알이 관통하며 검게 탄 구멍이 난 쿠션. 화약 냄새가 짙게 풍김.", img: "https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=600&q=80" },
    { id: "e_c03", name: "바닥에 떨어진 황금 리볼버", desc: "피해자 소유의 커스텀 리볼버. 6발 중 단 1발만 발사된 채 버려져 있음.", img: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&w=600&q=80" },
    { id: "e_c04", name: "특실 환풍구 바깥의 눈 덮인 순금괴", desc: "열차 지붕 위 환기창 틈새 눈 속에 아슬아슬하게 걸려 있던 순금 골드바 1개.", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80" },
    { id: "e_c05", name: "비비안의 레이스 장갑 화약 잔류물", desc: "질산염 화학 테스트 결과 총기 발사 화약이 묻어난 것으로 판명된 장갑.", img: "https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=600&q=80" },
    { id: "e_c06", name: "금고 안에 남아 있는 협박 편지", desc: "레이먼드 교수의 필적으로 1만 달러를 요구한 폐광 사기 폭로 메모.", img: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80" },
    { id: "e_c07", name: "올가의 트렁크 밑바닥 에메랄드", desc: "피해자의 금고에서 도난당한 것으로 확인된 시가 5만 달러 상당의 러시아 목걸이.", img: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&w=600&q=80" },
    { id: "e_c08", name: "화물칸 문의 풀려 있는 빗장", desc: "외부 강도단과 결탁해 잭 경비원이 미리 풀어둔 화물칸 잠금장치.", img: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=600&q=80" },
    { id: "e_c09", name: "피해자의 멈춰 선 21시 20분 회중시계", desc: "총격의 충격으로 태엽이 망가지며 21시 20분에 정확히 멈춘 드레이크의 시계.", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80" },
    { id: "e_c10", name: "열차 마스터키의 미세한 지문", desc: "토마스 차장의 지문이 묻어 있는 1호 특실 개폐 잠금장치.", img: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=600&q=80" },
    { id: "e_c11", name: "열차 통로 카펫의 붉은 핏자국", desc: "범인이 범행 후 빠져나오며 신발 밑창에 묻혀 남긴 미세한 혈흔 점들.", img: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=600&q=80" },
    { id: "e_c12", name: "클론다이크 광산 강탈 살인 기사", desc: "3년 전 비비안의 부친이 드레이크의 음모로 의문사했다는 옛 신문 기사 스크랩.", img: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80" },
    { id: "e_c13", name: "1호 특실 소파 뒤 탄환 파편", desc: "피해자의 흉부를 관통한 후 소파 원목 프레임에 박힌 황금 합금 탄두.", img: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&w=600&q=80" },
    { id: "e_c14", name: "화장실 배수구의 피 묻은 세면 수건", desc: "범행 후 손에 튄 피를 급히 닦아내고 배수 파이프에 밀어 넣은 수건.", img: "https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=600&q=80" },
    { id: "e_c15", name: "열차 식당칸의 샴페인 주문서", desc: "비비안이 21시경 주문했으나 21시 15분부터 21시 35분까지 자리가 비어 있던 기록.", img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80" },
    { id: "e_c16", name: "교수의 가방 속 암석 샘플", desc: "폐광산에서 채취한 가치가 없는 석영 결정 덩어리들.", img: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=600&q=80" },
    { id: "e_c17", name: "올가의 은제 단검 집", desc: "날카로운 단도가 꽂혀 있었으나 혈흔 반응은 음성으로 판명된 칼집.", img: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=600&q=80" },
    { id: "e_c18", name: "잭의 주머니 속 무전기 암호표", desc: "열차 강도단과 접선 신호를 주고받기 위해 작성된 플래시 신호표.", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80" },
    { id: "e_c19", name: "토마스 차장의 채권 강탈 각서", desc: "드레이크의 협박으로 강제 날인된 토마스의 전 재산 담보 문서.", img: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80" },
    { id: "e_c20", name: "눈보라에 얼어붙은 특실 외벽 창문", desc: "바깥에서는 접근할 수 없도록 얼음이 얼어붙어 밀실 상태였던 창틀.", img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80" },
    { id: "e_c21", name: "피해자의 위조된 투자 계약서", desc: "폐광을 호화 금광으로 둔갑시켜 수만 달러를 사취하려던 증권 서류.", img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80" },
    { id: "e_c22", name: "비비안의 핸드백 속 모피 털 올", desc: "피해자의 옷깃에 붙어 있던 붉은 여우 모피 코트의 미세 털 가닥.", img: "https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=600&q=80" },
    { id: "e_c23", name: "끊어진 열차 비상 제동선", desc: "협곡 앞에서 열차를 세우지 못하도록 누군가가 고의로 손상한 공기압 밸브.", img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80" },
    { id: "e_c24", name: "금고 다이얼의 지워진 지문 흔적", desc: "범행 후 손수건이나 장갑으로 닦아내 지문이 전혀 남아 있지 않은 금고 손잡이.", img: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=600&q=80" }
  ],

  endings: {
    truth: "사건의 진실: 알렉산더 드레이크를 사살한 진범은 **'비비안 스칼렛'**입니다. 비비안은 3년 전 자신의 아버지를 모살하고 금광을 가로챈 드레이크에게 복수하기 위해, 밤 9시 20분경 식당칸을 빠져나와 1호 특실에 침입했습니다. 그녀는 소음을 줄이기 위해 벨벳 쿠션으로 총구를 감싸고 드레이크의 심장을 관통 사살했습니다. 이후 복수의 대가로 금괴를 빼돌려 눈보라 치는 환풍구 바깥으로 던지고 태연히 식당칸으로 돌아왔습니다.",
    citizenWin: {
      title: "설원의 응징: 황금 탄환의 종착역 (시민 승리)",
      badge: "JUSTICE IN BLIZZARD",
      bannerImg: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
      epilogues: {
        thomas: "토마스: 억울하게 빼앗겼던 철도 채권을 돌려받고 무사히 열차를 종착역으로 이끌어 승객들의 영웅이 됩니다.",
        vivian: "비비안: 복수의 총성을 숨기려 했던 쿠션과 장갑의 화약 잔류물이 결정타가 되어 연방 보안관에 체포되어 재판을 받게 됩니다.",
        raymond: "레이먼드: 협박 혐의는 드러났으나 폐광 사기 진상을 폭로한 공로를 인정받아 학계로 복귀합니다.",
        olga: "올가: 도난당했던 가문의 에메랄드를 무사히 되찾고 캐나다를 거쳐 안전한 자유의 땅으로 망명합니다.",
        jack: "잭: 강도단과 결탁한 정황이 밝혀져 보안관 직을 박탈당하고 알래스카 연방 교도소에 수감됩니다."
      }
    },
    killerWin: {
      title: "눈보라 속의 침묵: 비비안의 복수극 (진범 승리)",
      badge: "AVENGER IN THE SNOW",
      bannerImg: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80",
      epilogues: {
        thomas: "토마스: 마스터키와 채권 원한 때문에 치밀한 계획 살인범으로 지목되어 차가운 철창에 갇히게 됩니다.",
        vivian: "비비안: 수사망을 따돌리고 부친의 복수를 완벽히 매듭지은 뒤, 눈보라가 멎자 숨겨둔 금괴를 챙겨 유유히 열차를 떠납니다.",
        raymond: "레이먼드: 금고에 남겨진 협박 편지 때문에 토마스와 공모한 혐의로 평생 쌓은 명예를 잃고 감옥에 갇힙니다.",
        olga: "올가: 목걸이를 훔친 사실이 발각되며 강도 살인범의 공범으로 몰려 모든 귀금속을 몰수당합니다.",
        jack: "잭: 강도단과의 접선이 탄로 나며 살인 사건의 주동자로 몰려 종신형을 선고받습니다."
      }
    }
  }
};
