// scenario-cruise.js (1932년 지중해 초호화 유람선 일루전호 마술사 살인 사건 정식 버전)
export default {
  id: "cruise",
  title: "일루전 크루즈: 사라진 마술사의 마지막 트릭",
  subtitle: "폭풍우 속 지중해 유람선 수조 탈출 쇼 도중 벌어진 밀실 마술사 살인 사건",
  era: "1932년 지중해 횡단 초호화 여객선 S.S. 일루전호",
  victim: "율리안 발렌티노 (전설의 탈출 마술사)",
  killerId: "claire",

  theme: {
    card: {
      borderClass: "border border-violet-800/60 hover:border-violet-400",
      banner: "images/cruise/banner.jpg",
      bannerAlt: "지중해 초호화 유람선 일루전호",
      era: "1932 지중해 호화 유람선",
      eraClass: "text-[10px] font-bold text-violet-300 bg-black/60 px-2 py-0.5 rounded border border-violet-900/60",
      title: "일루전 크루즈",
      titleClass: "text-base font-bold text-violet-200",
      players: "2~5인",
      playersClass: "text-[9px] text-violet-400 px-1.5 py-0.5 rounded bg-violet-950 border border-violet-800",
      blurb: "거친 폭풍우에 갇힌 호화 유람선 대극장. 사슬에 묶인 채 수중 탈출 마술을 선보이던 천재 마술사가 커튼이 걷히자 차가운 시신으로 변해 있었다.",
      buttonClass: "w-full py-2 bg-gradient-to-r from-violet-900 to-violet-700 hover:from-violet-800 hover:to-violet-600 text-violet-100 text-xs font-bold rounded-lg shadow transition flex items-center justify-center",
      buttonIconClass: "fa-solid fa-play mr-1.5 text-violet-300"
    },
    lobby: {
      tag: "일루전 크루즈",
      tagClass: "text-[11px] font-bold px-2 py-0.5 rounded bg-violet-950 text-violet-300 border border-violet-800",
      fallbackBanner: "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=600&q=80",
      subtitle: "The Final Illusion on High Seas",
      titleFallback: "일루전 크루즈"
    }
  },

  prologue: {
    bannerImg: "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=80",
    location: "여객선 일루전호 메인 대극장 무대 및 VIP 대기실",
    story: [
      "1932년 가을, 모나코를 출발해 알렉산드리아로 향하던 초호화 여객선 S.S. 일루전호가 지중해 한복판에서 거대한 폭풍우를 만나 통신이 두절되었습니다.",
      "밤 10시 30분, 선상 대극장에서 하이라이트 공연인 '수중 사슬 탈출 마술'을 선보이던 세계적인 마술사 율리안 발렌티노가 암막 커튼이 걷히자 유리 수조 안에서 숨진 채 발견되었습니다.",
      "수조의 자물쇠는 단단히 잠겨 있었고 무대 위에는 아무도 접근하지 못했던 완벽한 눈속임의 현장. 단순 익사로 보였던 그의 목덜미에는 미세한 독침 자국과 함께 수조 물속에 푸른 약물 흔적이 퍼져 있었습니다.",
      "육지까지 꼬박 이틀이 걸리는 망망대해 위, 마술사의 비밀을 공유하던 5명의 용의자 중 잔혹한 트릭을 설계한 진범을 찾아내야 합니다."
    ]
  },

  characters: [
    {
      id: "marcus",
      name: "마커스 벨",
      role: "일루전호 선장 / 전직 해군 대령",
      isKiller: false,
      isDefault: true,
      avatarImg: "images/cruise/avatar-marcus.jpg",
      description: "엄격한 규율과 명예를 중시하는 일루전호의 베테랑 선장. 이번 항해를 끝으로 은퇴를 앞두고 있습니다.",
      secret: "당신은 막대한 도박 빚을 갚기 위해 율리안과 짜고 이번 항해에서 가짜 해난 사고를 위장해 선박 보험금과 화물 금괴를 빼돌리려 했습니다. 22:10경 무대 뒤 분전반실에서 율리안과 밀회하며 작전 변경을 다투었을 뿐 살해하지는 않았습니다.",
      timeline: [
        "21:50 - 조타실에서 폭풍우 항로 변경을 지시한 뒤 갑판 순찰을 나섬",
        "22:10 - 대극장 무대 뒤 분전반실에서 율리안과 밀회하며 언쟁을 벌임",
        "22:32 - 공연장 비명 소리를 듣고 VIP 객석에서 무대 위로 뛰어 올라감"
      ],
      alibiCards: [
        { id: "mar_1", name: "조타실 항해 일지 서명", desc: "21시 50분까지 조타실에서 폭풍우 경보를 기록한 선장의 자필 서명.", img: "images/cruise/alibi-mar_1.jpg" },
        { id: "mar_2", name: "은밀한 화물 보험 계약서", desc: "일루전호 침몰 시 거액의 보상금이 선장 개인 계좌로 입금되는 이면 약정서.", img: "images/cruise/alibi-mar_2.jpg" },
        { id: "mar_3", name: "소매에 묻은 기름때와 쇠녹", desc: "무대 뒤 분전반실의 낡은 철제 배관과 부딪히며 제복 소매에 묻은 얼룩.", img: "images/cruise/alibi-mar_3.jpg" },
        { id: "mar_4", name: "고장 난 선장용 크로노미터", desc: "22시 12분 율리안과 멱살을 잡다 부딪혀 바늘이 멈춰버린 은제 회중시계.", img: "images/cruise/alibi-mar_4.jpg" },
        { id: "mar_5", name: "금고 열쇠 꾸러미", desc: "선박 화물칸의 모든 잠금장치를 열 수 있는 선장 전용 마스터 열쇠 묶음.", img: "images/cruise/alibi-mar_5.jpg" }
      ]
    },
    {
      id: "claire",
      name: "클레어 르블랑",
      role: "수석 마술 조수 / 율리안의 연인",
      isKiller: true,
      isDefault: true,
      avatarImg: "images/cruise/avatar-claire.jpg",
      description: "5년째 율리안과 호흡을 맞춰온 매혹적인 수석 조수. 모든 마술 장치의 설계도를 꿰뚫고 있습니다.",
      secret: "★ 당신이 진범입니다! 율리안은 3년 전 파리 공연 당시 당신의 친오빠이자 스승이었던 전임 마술사의 산소 공급 밸브를 고의로 잠가 죽이고 그의 모든 마술 특허를 가로챘습니다. 진실을 알게 된 당신은 오늘 밤 수조 탈출 마술의 비밀 트릭을 역이용했습니다. 수조 하단 배수관에 연결된 예비 호흡 호스 내부에 치사량의 신경 마비 독액을 미리 발라두어, 율리안이 암막 속에서 숨을 들이마시는 순간 몸이 굳어 익사하도록 만들었습니다. 수조 밑바닥 이중 거울 아래 숨겨둔 독액 주입기와 가짜 호흡 마우스피스를 들키지 않도록 끝까지 숨기십시오.",
      timeline: [
        "22:00 - 대극장 무대 소품실에서 수조 수온과 자물쇠 장치를 최종 점검함",
        "22:20 - 수중 탈출 마술 시작과 함께 무대 왼편에서 암막 커튼 줄을 당김",
        "22:30 - 3분의 카운트다운이 끝나고 커튼을 열자마자 쓰러진 율리안을 보고 비명을 지름"
      ],
      alibiCards: [
        { id: "cla_1", name: "무대 자물쇠 점검 체크리스트", desc: "수조에 채워진 5개의 자물쇠가 모두 정상적인 마술용 가짜 열쇠임을 확인한 표.", img: "images/cruise/alibi-cla_1.jpg" },
        { id: "cla_2", name: "젖어 있는 무대 의상 소매", desc: "공연 직전 수조 수온을 손으로 확인하느라 젖었다고 주장하는 실크 드레스 소매.", img: "images/cruise/alibi-cla_2.jpg" },
        { id: "cla_3", name: "파리 극장 사고 신문 스크랩", desc: "3년 전 율리안의 스승이 수중 마술 중 의문사했다는 기사가 오려진 옛 신문 조각.", img: "images/cruise/alibi-cla_3.jpg" },
        { id: "cla_4", name: "향수병에 담긴 푸른 액체", desc: "화장대 파우치 속에 든 진한 보랏빛 향수병. 입구 주변에 기름진 잔여물이 묻어 있음.", img: "images/cruise/alibi-cla_4.jpg" },
        { id: "cla_5", name: "암막 커튼 로프의 송진 자국", desc: "공연 내내 무대 왼편에서 커튼 로프를 쥐고 있었음을 보여주는 손바닥의 붉은 마찰흔.", img: "images/cruise/alibi-cla_5.jpg" }
      ]
    },
    {
      id: "victor",
      name: "빅터 크레인",
      role: "라이벌 마술사 / VIP 승객",
      isKiller: false,
      isDefault: true,
      avatarImg: "images/cruise/avatar-victor.jpg",
      description: "율리안과 업계 정상을 다투는 냉소적인 젊은 마술사. 라이벌의 신작 마술을 보기 위해 승선했습니다.",
      secret: "당신은 율리안의 수중 탈출 마술 비법을 훔쳐 다음 달 뉴욕 공연에 먼저 선보이기 위해 대극장 천장 조명 캣워크에 몰래 올라가 쌍안경으로 암막 너머를 훔쳐보고 있었습니다. 살해는 하지 않았으나 무단 침입과 비밀 촬영이 들통날까 봐 거짓말을 하고 있습니다.",
      timeline: [
        "22:05 - 2층 객석 발코니에서 샴페인을 마시며 승객들과 인사를 나눔",
        "22:18 - 공연 암전 틈을 타 대극장 천장 조명 캣워크 사다리로 몰래 올라감",
        "22:31 - 비명이 터지자 사다리를 타고 내려와 객석 통로에 서 있던 척 합류함"
      ],
      alibiCards: [
        { id: "vic_1", name: "초소형 망원 쌍안경", desc: "어두운 극장 천장에서 무대 위를 정밀하게 내려다볼 수 있는 독일제 야간 쌍안경.", img: "images/cruise/alibi-vic_1.jpg" },
        { id: "vic_2", name: "빈 샴페인 잔과 영수증", desc: "22시 05분 2층 라운지 웨이터가 발급한 고급 샴페인 주문 영수증.", img: "images/cruise/alibi-vic_2.jpg" },
        { id: "vic_3", name: "손바닥의 검은 천장 먼지", desc: "대극장 상부 조명 철제 캣워크 난간을 붙잡고 이동하다 묻은 두꺼운 그을음.", img: "images/cruise/alibi-vic_3.jpg" },
        { id: "vic_4", name: "율리안의 특허 침해 소송장", desc: "빅터의 대표 마술이 표절이라며 거액의 위자료를 청구한 율리안 측 변호사의 경고장.", img: "images/cruise/alibi-vic_4.jpg" },
        { id: "vic_5", name: "수중 마술 트릭 스케치북", desc: "율리안의 수조 바닥 구조를 위에서 내려다보며 급하게 그려 넣은 연필 스케치.", img: "images/cruise/alibi-vic_5.jpg" }
      ]
    },
    {
      id: "sofia",
      name: "소피아 모레티",
      role: "오페라 디바 / 율리안의 전 약혼녀",
      isKiller: false,
      isDefault: true,
      avatarImg: "images/cruise/avatar-sofia.jpg",
      description: "유럽 사교계를 사로잡은 화려한 소프라노 가수. 율리안의 파혼 선언 이후 앙숙이 되었습니다.",
      secret: "당신은 율리안이 보관하고 있던 당신의 과거 사생활 사진과 비밀 사채 차용증을 되찾기 위해 공연 도중 율리안의 VIP 대기실 금고를 뒤졌습니다. 금고에서 서류를 태워버린 뒤 돌아왔을 뿐 무대 쪽에는 가지 않았습니다.",
      timeline: [
        "21:55 - 1부 오페라 축하 무대를 마치고 분장실로 돌아가 의상을 갈아입음",
        "22:22 - 공연이 시작되자 복도 마스터키로 율리안의 VIP 대기실에 몰래 침입함",
        "22:30 - 대기실 재떨이에서 서류를 불태운 뒤 복도로 나왔다가 비명 소리를 들음"
      ],
      alibiCards: [
        { id: "sof_1", name: "고급 진주 목걸이와 브로치", desc: "1부 무대 의상 그대로 착용하고 있던 화려한 보석 장신구 세트.", img: "images/cruise/alibi-sof_1.jpg" },
        { id: "sof_2", name: "스튜어디스의 복도 목격담", desc: "22시 25분경 VIP 객실 복도 끝에서 소피아의 뒷모습을 보았다는 승무원의 메모.", img: "images/cruise/alibi-sof_2.jpg" },
        { id: "sof_3", name: "드레스 밑단의 재와 그을음", desc: "대기실 재떨이에서 비밀 서류를 급히 태우다 실크 치맛단에 튄 검은 재 흔적.", img: "images/cruise/alibi-sof_3.jpg" },
        { id: "sof_4", name: "파혼 위자료 청구 포기 각서", desc: "율리안이 소피아의 약점을 빌미로 강제 서명하게 만든 불평등 합의문.", img: "images/cruise/alibi-sof_4.jpg" },
        { id: "sof_5", name: "장미 향기가 밴 실크 손수건", desc: "소피아가 항상 지니고 다니는 이탈리아산 다마스크 장미 향수 손수건.", img: "images/cruise/alibi-sof_5.jpg" }
      ]
    },
    {
      id: "henri",
      name: "앙리 뒤퐁",
      role: "무대 장치 총괄 엔지니어 (5인 전용)",
      isKiller: false,
      isDefault: false,
      avatarImg: "images/cruise/avatar-henri.jpg",
      description: "율리안 전속 무대 기술자. 거대한 유리 수조와 유압 리프트 장치를 직접 제작하고 관리합니다.",
      secret: "당신은 율리안이 신작 마술 장치 설계 도면을 가로채고 약속한 수당을 떼먹자 앙심을 품었습니다. 오늘 밤 공연 중 수조 유압 리프트가 고장 나 망신을 당하게 만들려고 무대 하부 기계실의 압력 밸브를 일부러 느슨하게 풀어두었습니다. 단순 기계 고장을 유도했을 뿐 살인은 전혀 의도하지 않았습니다.",
      timeline: [
        "22:00 - 대극장 무대 하부 유압 기계실에서 수조 리프트 압력을 점검함",
        "22:21 - 공연이 시작되자 무대 하부 밸브를 몽키스패너로 살짝 풀어둠",
        "22:33 - 무대 위로 뛰어 올라가 수조 유압 장치를 수동으로 비상 하강시킴"
      ],
      alibiCards: [
        { id: "hen_1", name: "기계실 압력 게이지 점검표", desc: "22시 정각 수조 유압 리프트의 정상 수치를 기록한 엔지니어의 작업 일지.", img: "images/cruise/alibi-hen_1.jpg" },
        { id: "hen_2", name: "작업복 주머니의 몽키스패너", desc: "기름때가 잔뜩 묻어 있는 무대 유압 배관 조절용 중형 스패너.", img: "images/cruise/alibi-hen_2.jpg" },
        { id: "hen_3", name: "미지급 기술 설계 수당 청구서", desc: "율리안이 서명을 거부하고 찢어버린 3만 프랑 상당의 장치 제작비 청구서.", img: "images/cruise/alibi-hen_3.jpg" },
        { id: "hen_4", name: "구두 밑창의 푸른 물감 자국", desc: "무대 하부 기계실 바닥에 흘려진 방수 페인트가 묻은 작업화 밑창.", img: "images/cruise/alibi-hen_4.jpg" },
        { id: "hen_5", name: "비상 수조 배수 레버 열쇠", desc: "수조의 물을 10초 만에 강제로 빼낼 수 있는 비상 배수관 개폐 핸들.", img: "images/cruise/alibi-hen_5.jpg" }
      ]
    }
  ],

  clues: [
    { id: "c_c01", name: "유리 수조 속 율리안의 시신", desc: "손발의 수갑은 풀려 있으나 몸이 뻣뻣하게 굳은 채 수조 중간에 떠 있음. 목덜미에 작은 바늘 자국이 보임.", img: "images/cruise/clue-c_c01.jpg" },
    { id: "c_c02", name: "수조 하단 이중 거울 아래 비밀 호스", desc: "관객 눈에 보이지 않게 수조 바닥 거울 틈새로 연결된 투명한 비상 호흡용 공기 호스.", img: "images/cruise/clue-c_c02.jpg" },
    { id: "c_c03", name: "마우스피스 안쪽의 푸른 독액 잔여물", desc: "비밀 호흡 호스 끝부분 마우스피스 내부에 발라져 있던 지용성 신경 마비 독액 흔적.", img: "images/cruise/clue-c_c03.jpg" },
    { id: "c_c04", name: "소품실 쓰레기통의 빈 유리 앰플", desc: "클레어가 사용하는 보랏빛 향수병과 똑같은 모양이지만 라벨이 뜯긴 소형 유리 앰플.", img: "images/cruise/clue-c_c04.jpg" },
    { id: "c_c05", name: "무대 암막 커튼 안쪽의 물방울", desc: "암막이 쳐진 3분 동안 수조 위쪽 뚜껑이 열렸다가 닫힌 듯한 젖은 손자국.", img: "images/cruise/clue-c_c05.jpg" },
    { id: "c_c06", name: "분전반실 바닥의 금장 단추", desc: "22시 10분경 율리안과 누군가 몸싸움을 벌이다 떨어진 마커스 선장의 제복 단추.", img: "images/cruise/clue-c_c06.jpg" },
    { id: "c_c07", name: "선장실 책상의 암호화된 전보", desc: "모나코의 보험 사기 브로커로부터 '폭풍우 좌표를 이용해 계획을 실행하라'고 온 전보.", img: "images/cruise/clue-c_c07.jpg" },
    { id: "c_c08", name: "천장 조명 캣워크의 만년필", desc: "대극장 천장 철제 난간 틈새에 떨어져 있던 빅터 크레인의 이니셜이 새겨진 만년필.", img: "images/cruise/clue-c_c08.jpg" },
    { id: "c_c09", name: "빅터의 코트 속 훔친 설계도 사본", desc: "율리안의 수중 탈출 마술 특허 도면을 몰래 베껴 그린 빅터의 비밀 노트.", img: "images/cruise/clue-c_c09.jpg" },
    { id: "c_c10", name: "VIP 대기실 재떨이의 불탄 사진", desc: "소피아의 은밀한 사생활이 찍힌 흑백 사진과 사채 차용증이 타다 남은 잿더미.", img: "images/cruise/clue-c_c10.jpg" },
    { id: "c_c11", name: "VIP 대기실 문손잡이의 장미 향수", desc: "공연 도중 누군가 대기실에 침입했음을 보여주는 짙은 이탈리아산 장미 향기.", img: "images/cruise/clue-c_c11.jpg" },
    { id: "c_c12", name: "무대 하부 기계실의 풀린 유압 너트", desc: "앙리가 스패너로 고의로 느슨하게 풀어두어 유압 오일이 새고 있는 리프트 밸브.", img: "images/cruise/clue-c_c12.jpg" },
    { id: "c_c13", name: "앙리의 작업대 위 협박 메모", desc: "'내 설계도를 훔친 대가를 오늘 밤 무대에서 똑똑히 치르게 해주마'라고 적힌 메모.", img: "images/cruise/clue-c_c13.jpg" },
    { id: "c_c14", name: "수조에 채워진 5개의 특수 자물쇠", desc: "외부에서는 열쇠 없이 절대 열 수 없지만 안쪽 핀을 누르면 즉시 열리는 마술용 자물쇠.", img: "images/cruise/clue-c_c14.jpg" },
    { id: "c_c15", name: "클레어의 개인 화장대 이중 서랍", desc: "3년 전 파리 극장 사고 당시 숨진 전임 마술사 '앙드레 르블랑'과 클레어가 함께 찍은 남매 사진.", img: "images/cruise/clue-c_c15.jpg" },
    { id: "c_c16", name: "율리안의 비밀 금고 속 특허 양도서", desc: "전임 마술사 앙드레의 서명이 위조되어 율리안 명의로 모든 마술 특허가 넘어간 계약서.", img: "images/cruise/clue-c_c16.jpg" },
    { id: "c_c17", name: "선박 의무실의 독극물 관리 대장", desc: "항해 출발 전 선상 의무실에서 희귀 신경 마비제 한 병이 분실되었다는 기록.", img: "images/cruise/clue-c_c17.jpg" },
    { id: "c_c18", name: "무대 왼편 커튼 로프 주변의 푸른 얼룩", desc: "클레어가 서 있던 무대 왼편 바닥에 떨어진 소량의 푸른빛 기름 방울.", img: "images/cruise/clue-c_c18.jpg" },
    { id: "c_c19", name: "선장의 기름 묻은 손수건", desc: "분전반실에서 율리안과 다툰 뒤 선장이 손의 기름때를 닦아 휴지통에 버린 손수건.", img: "images/cruise/clue-c_c19.jpg" },
    { id: "c_c20", name: "객실 복도 비상벨 차단 기록", desc: "22시 20분 공연 암전과 동시에 무대 뒤편 비상 호출 벨이 꺼져 있던 제어판 기록.", img: "images/cruise/clue-c_c20.jpg" },
    { id: "c_c21", name: "율리안의 수첩 속 협박 메모", desc: "'클레어가 파리 사건의 진실을 캐묻기 시작했다. 이번 항해가 끝나면 정리해야겠다'는 메모.", img: "images/cruise/clue-c_c21.jpg" },
    { id: "c_c22", name: "대극장 2층 발코니의 식은 샴페인", desc: "빅터가 천장 캣워크로 올라가기 전 객석 난간에 올려둔 미지근해진 샴페인 잔.", img: "images/cruise/clue-c_c22.jpg" },
    { id: "c_c23", name: "비상 배수관 레버의 먼지", desc: "사건이 끝날 때까지 아무도 비상 배수 레버를 건드리지 않았음을 보여주는 두꺼운 먼지층.", img: "images/cruise/clue-c_c23.jpg" },
    { id: "c_c24", name: "폭풍우 기상 관측 무전 기록", desc: "지중해 저기압으로 인해 향후 36시간 동안 외부 구조선 접근이 불가능하다는 무전 기록.", img: "images/cruise/clue-c_c24.jpg" }
  ],

  endings: {
    truth: "사건의 진실: 천재 마술사 율리안 발렌티노를 수조 속에서 살해한 진범은 수석 조수 **'클레어 르블랑'**입니다. 클레어는 3년 전 파리 공연에서 자신의 친오빠를 살해하고 마술 특허를 가로챈 율리안에게 복수하기 위해, 수중 탈출 마술의 핵심 트릭인 이중 거울 아래 예비 호흡 호스 마우스피스에 치사량의 신경 마비 독액을 미리 발라두었습니다. 암막이 쳐진 뒤 율리안이 수갑을 풀고 숨을 쉬기 위해 호스를 문 순간 전신이 마비되어 수조 안에서 익사했으며, 소품실의 빈 독액 앰플과 클레어의 화장대 속 남매 사진이 결정적 증거가 되었습니다.",
    citizenWin: {
      title: "걷힌 암막 커튼: 완벽한 트릭의 붕괴 (시민 승리)",
      badge: "JUSTICE OVERRIDE",
      bannerImg: "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=80",
      epilogues: {
        marcus: "마커스: 살인 누명은 벗었으나 선박 보험 사기 모의가 드러나 선장직에서 파면되고 알렉산드리아 항구에서 경찰에 인계됩니다.",
        claire: "클레어: 수조의 비밀 호흡 호스와 독액 앰플 트릭이 모두 간파당하며 오빠를 위한 복수극의 전모를 자백하고 수갑을 찹니다.",
        victor: "빅터: 표절 시비와 무단 침입으로 망신을 당했지만 율리안의 죽음 이후 유일한 세계 최고 마술사 자리를 차지하게 됩니다.",
        sofia: "소피아: 불리한 사생활 사진과 차용증을 모두 불태워 없앤 덕분에 스캔들 위기에서 벗어나 화려한 오페라 무대로 복귀합니다.",
        henri: "앙리: 기계 고장을 유도한 잘못은 반성했으나 살인 혐의를 벗고 새 선사의 수석 무대 엔지니어로 스카우트됩니다."
      }
    },
    killerWin: {
      title: "지중해의 마지막 환상: 가라앉은 진실 (진범 승리)",
      badge: "FATAL SYSTEM ERROR",
      bannerImg: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      epilogues: {
        marcus: "마커스: 분전반실의 단추와 보험 사기 전보 때문에 돈을 노리고 마술사를 살해한 주범으로 몰려 종신형을 선고받습니다.",
        claire: "클레어: 모두의 시선을 다른 용의자들에게 돌리는 데 완벽히 성공하고, 알렉산드리아에 도착하자마자 오빠의 특허권을 되찾아 자취를 감춥니다.",
        victor: "빅터: 천장 캣워크에서 트릭을 훔쳐보던 정황 때문에 공중에서 독침을 쏜 암살범으로 지목되어 마술계에서 영구 추방됩니다.",
        sofia: "소피아: 파혼 원한과 대기실 침입 흔적 때문에 치정에 눈이 먼 살인자로 몰려 화려했던 디바의 삶을 마감합니다.",
        henri: "앙리: 수조 유압 밸브를 조작한 흔적이 발각되면서 살인 트릭을 설계한 기술 공범으로 지목되어 차가운 철창에 갇힙니다."
      }
    }
  }
};