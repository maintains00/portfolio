/* =====================================================================
   포트폴리오 데이터 — 유지선 / Software Engineer
   모든 문구는 이 파일에서 관리합니다. 이미지는 assets/images/ 에 넣고 경로를 적습니다.
   detail 의 각 항목은 문자열(문단) 또는 배열(불릿) 둘 다 됩니다.
   ===================================================================== */

window.PORTFOLIO = {

  settings: {
    showTodoBar: false,
    siteTitle: "유지선 — 조선·해양 SW 개발자",
    footerNote: "HTML · CSS · JavaScript로 직접 제작. 첫 화면의 NMEA 문장과 체크섬은 브라우저에서 실시간 생성."
  },

  profile: {
    name: "유지선",
    nameEn: "Jiseon Yu",
    title: "Software Engineer",
    focus: "C# / .NET · Vue 3 · Spring Boot · 선급 인증",
    tagline: "조선·해양 SW 개발자 유지선입니다.",
    taglineEm: "",
    lead: "선박 항법장비 제조사 기술연구소에서 3년째 일하고 있습니다. C#/.NET으로 장비 제어 소프트웨어를, Vue/Spring으로 모니터링 시스템을 만들었고, DNV·ABS 선급 인증 과정을 직접 거쳤습니다.",
    years: "2년 10개월",
    careerLabel: "3년차",
    careerSince: "2024.02 — 현재",
    location: "부산",
    availability: "협의 후 입사 가능",
    contact: {
      email: "wltjs4870@naver.com",
      phone: "",
      github: "",
      linkedin: "",
      blog: ""
    },
    intro: [
      "2024년 2월 MRC 기술연구소에 입사했습니다. 첫 업무는 INS 형식승인 시험에 쓸 항법 센서 시뮬레이터였고, 20종 장비의 NMEA 문장을 생성하는 C# 프로그램을 3개월 동안 혼자 만들었습니다. 지금도 사내 표준 시험 도구로 쓰입니다.",
      "이후 경보관리장치 CAM을 2인 팀으로 개발해 DNV 형식승인을 받았고, HD한국조선해양 스마트포털의 전 지구 기상 화면을 설계·개발했습니다. 2026년에는 IACS UR E26/E27 대응 NMS를 혼자 개발했고, ASTERIX CAT240 레이더 영상 코덱을 만들어 선박에 설치했습니다.",
      "현재는 보안 게이트웨이의 DNV 사이버보안 인증 문서와 전기추진 차도선 원격 모니터링 Web UI를 진행하고 있습니다."
    ],
    strengths: [
      { title: "장비 제어 SW · C# / .NET", desc: "NMEA 0183/450, AIS, ASTERIX CAT240 등 해상 통신 프로토콜 구현. 멀티스레드 송수신, 상태 머신, 코덱 DLL 모듈화." },
      { title: "모니터링 시스템 · Vue 3 / Spring Boot", desc: "SNMP 수집 파이프라인, D3·Web Worker 기반 실시간 시각화, 역할 권한과 감사 로그, Docker·폐쇄망 배포." },
      { title: "선급 규격 · 인증", desc: "IEC 62923, IACS UR E26/E27, IEC 62443 요구사항 분석과 시험 절차 작성. DNV 형식승인 취득, ABS·DNV 사이버보안 심사 대응." }
    ]
  },

  skills: [
    { group: "언어 · 프레임워크", items: [
      { name: "C# / .NET", level: "주력", note: "WinForms, WPF, Avalonia · 멀티스레드 통신 · DLL" },
      { name: "JavaScript / Vue 3", level: "실무", note: "Pinia, D3, Web Worker, SSE, three.js" },
      { name: "Java / Spring Boot", level: "실무", note: "REST API, JPA, Spring Security, SNMP4J" },
      { name: "C++", level: "활용", note: "Navico Radar SDK 연동 브리지" }
    ]},
    { group: "통신 · 프로토콜", items: [
      { name: "IEC 61162-1 / 450 (NMEA)", level: "주력", note: "문장 생성·파싱·체크섬, UDP 멀티캐스트, TAG block" },
      { name: "AIS ITU-R M.1371", level: "실무", note: "6bit 인코딩, VDM/VDO 다중 문장" },
      { name: "ASTERIX CAT240", level: "주력", note: "인코더·디코더, 초당 832 스포크" },
      { name: "SNMP v2c/v3 · Syslog · Trap", level: "실무", note: "10초 폴링, 1분 집계" },
      { name: "Modbus TCP · 접점 · BNWAS", level: "활용", note: "접점 입력 → Alert, Emergency Call" }
    ]},
    { group: "규격 · 인증", items: [
      { name: "IEC 62923-1/2 (BAM / CAM)", level: "주력", note: "DNV 형식승인 TAA00003HV" },
      { name: "IACS UR E26 / E27", level: "실무", note: "NMS 요구 68건 매핑, ECDIS ABS 인증 참여, RINA 교육 수료" },
      { name: "IEC 62443 · DNV-RU-SHIP Pt.6 Ch.5", level: "실무", note: "SP1 요구 49항목 판정, 제출 문서 10종" }
    ]},
    { group: "데이터 · 도구", items: [
      { name: "PostgreSQL", level: "실무", note: "메인/백업 이중화, 시계열 배치 저장" },
      { name: "Git · Docker · MSTest · Playwright", level: "실무", note: "폐쇄망 배포, 단위 테스트, 회귀 캡처" },
      { name: "Wireshark · nmap · OWASP ZAP · hping3", level: "활용", note: "보안 기능 시험" }
    ]}
  ],

  experience: [
    {
      company: "(주)엠알씨 MRC Inc. 기술연구소",
      role: "연구원 · Software Engineer",
      period: "2024.02 — 현재",
      summary: "선박 항법장비(INS, ECDIS, RADAR, CAM) 제조사. 2025년은 연구소가 설립한 자회사 (주)오션웨이즈 소속으로 같은 업무 수행.",
      bullets: [
        "INS 시뮬레이터(항법 센서 20종) 단독 개발 — DNV INS 형식승인 시험 입력원",
        "경보관리장치 CAM 개발(2인) — STANDALONE·INS 연동 DNV 형식승인 취득",
        "HD한국조선해양 스마트포털 Lv.1 전 지구 기상 화면 설계·개발",
        "선박용 NMS 단독 개발 — IACS UR E26/E27 대응, 장비 약 100대 감시",
        "ASTERIX CAT240 레이더 영상 코덱·변환기 개발, 태화호 설치",
        "보안 게이트웨이 DNV 사이버보안 형식승인 제출 문서 10종 작성",
        "전기추진 차도선 ESS 원격 모니터링 육상 관제 Web UI 23화면 (HD한국조선해양)"
      ]
    }
  ],

  education: [
    { school: "한서대학교", major: "항공소프트웨어공학과", period: "2019.03 — 2024.02", note: "학사 · 4.19 / 4.5" }
  ],

  certifications: [
    { name: "RINA Academy — Cyber Resilience IACS UR E26/E27 (교육 수료)", date: "2026.06" },
    { name: "정보처리기사 (한국산업인력공단)", date: "2022.06" },
    { name: "TOEIC 830", date: "2022.02" },
    { name: "TOEIC Speaking Intermediate Mid 1", date: "2023.03" }
  ],

  credentials: [
    { image: "assets/images/cert-cam-dnv.jpg", title: "DNV 형식승인 TAA00003HV — CAM (MNS-100CA)", desc: "2025.02.26 발급 · 2030.02.25 만료 · IMO MSC.302(87), IEC 62923-1/2 · STANDALONE·INS 연동" },
    { image: "assets/images/cert-ins-med.jpg", title: "MED 인증 MEDB00008ST — HiINS 통합항법시스템", desc: "HD현대마린솔루션 HiINS 구성품으로 CAM 포함 · 2025.01.10 발급 · INS 인증 시험 참여" },
    { image: "assets/images/cert-rina.jpg", title: "RINA Academy — Cyber Resilience IACS UR E26/E27", desc: "교육 수료 · 2026.06.26 · No. 2026PU0626T" }
  ],

  jobFit: {
    company: "파나시아 (PANASIA)",
    position: "ES연구팀 · SW 개발 담당",
    note: "공고의 주요 업무 · 우대사항별 해당 경험",
    items: [
      { requirement: "제품 Control S/W 개발", evidence: "경보관리장치 CAM — Alert 상태 머신·그룹핑·재평가 로직을 IEC 62923 기준으로 구현, DNV 형식승인, 선박 설치·연동", projects: ["cam-dnv", "ins-simulator"] },
      { requirement: "Data 처리장치 개발", evidence: "항법 센서 20종 NMEA 생성기 · 초당 832 스포크 레이더 영상 CAT240 변환 · 장비 100대 SNMP 수집·집계 · 척당 2,500 포인트/초 ESS 관제 화면", projects: ["ins-simulator", "asterix-cat240", "nms", "ess-remote"] },
      { requirement: "S/W 보안 설계 적용", evidence: "IACS UR E26/E27 요구 68건 NMS 기능 구현 · 게이트웨이 DNV SP1 49항목 판정, 하드닝·시험 절차 문서 10종 · ECDIS ABS E27 인증 참여", projects: ["nms", "gateway-dnv"] },
      { requirement: "C#, C++, Python 코드 분석·개발", evidence: "C# 주력 · C++ 레이더 SDK 브리지 · 8,000줄 레거시 전수 분석, 규격 오류 18건·품질 문제 11건 수정", projects: ["ins-simulator", "asterix-cat240"] },
      { requirement: "경력 3년 이상", evidence: "2024.02 입사 · 전 기간 선박 장비 S/W 개발 · 2027.02 만 3년", projects: [] },
      { requirement: "우대: 어학", evidence: "TOEIC 830 (2022.02) · TOEIC Speaking IM1 (2023.03) · DNV 외국인 심사관과 직접 소통하며 CAM 형식승인 시험 진행", projects: ["cam-dnv"] }
    ]
  },

  /* 공고 문장 ↔ 경험 1:1 매칭을 역량 3개로 묶은 목차. 공고 '주요 업무' 세 줄이 그대로 제목이 됩니다. */
  competencies: [
    {
      id: "control",
      jd: "제품 Control S/W 개발",
      title: "규격 조항을 코드로 옮겨 장비 제어·경보 S/W를 만들고, 선급 형식승인까지 통과",
      bridge: "선박 항법장비의 Control S/W와 파나시아 제품(Scrubber · BWTS · SCR)의 Control S/W는 구조가 같습니다. 센서·접점 입력 → 상태 판단 → 경보·제어 출력, 그리고 선급 규격 준수.",
      facts: ["DNV 형식승인 2구성 취득 (CAM)", "IEC 62923 조항별 점검 → 41건 수정", "센서 20종 시뮬레이터 단독 개발"],
      projects: ["cam-dnv", "ins-simulator", "p180"]
    },
    {
      id: "data",
      jd: "Data 처리장치 개발",
      title: "장비 데이터를 수집·변환·저장·표시하는 파이프라인을 프로토콜 단에서 화면까지 구현",
      bridge: "선내 DAQ → LTE → 육상 서버 → 웹으로 이어지는 ESS 원격 모니터링은 파나시아 MSCS(위성통신으로 장비 데이터 수집 → 리포트)와 같은 구조입니다.",
      facts: ["레이더 영상 초당 832 스포크 → CAT240 변환", "장비 100대 SNMP 10초 폴링 · 1분 집계", "척당 2,500 포인트/초 관제 화면 23종"],
      projects: ["asterix-cat240", "nms", "ess-remote", "ksoe-lv1"]
    },
    {
      id: "security",
      jd: "S/W 보안 설계 적용",
      title: "IACS UR E26/E27 · IEC 62443 요구를 설계 단계에서 기능으로 정의하고 선급 심사 문서로 정리",
      bridge: "2024.07 이후 계약 선박부터 탑재 장비에 E27이 적용됩니다. 네트워크에 연결되는 Control S/W와 MSCS 연동 장비는 같은 요구를 받습니다.",
      facts: ["DNV SP1 요구 49항목 판정 · 제출 문서 10종", "E26/E27 요구 68건을 NMS 기능으로 구현", "ABS ECDIS E27 인증 시험 참여"],
      projects: ["gateway-dnv", "nms", "ecdis-abs"]
    }
  ],

  /* 입사 후 90일 제안 — 2026-11-15 사용자 요청으로 모든 산출물에서 제외. 데이터만 보관(렌더링 안 함). */
  plan_disabled: {
    title: "입사 후 90일 제안",
    note: "공고 문장과 공개 자료(worldpanasia.com)로 세운 가정입니다. 실제 제품 구조를 보고 조정합니다.",
    items: [
      {
        jd: "제품 Control S/W 개발",
        title: "제품 시험용 신호 시뮬레이터",
        what: "Control S/W에 들어가는 센서·접점·Modbus 입력을 PC에서 만들어, 실물 장비 없이 기능 시험과 선급 시험 항목을 재현하는 도구.",
        why: "INS 시뮬레이터가 사내 표준 시험 도구가 된 것과 같은 방식. 시험 항목별 시나리오를 저장해 재생하면 회귀 시험이 됩니다.",
        steps: [
          { when: "30일", what: "제품 1종의 입력 신호 목록과 시험 항목 정리" },
          { when: "60일", what: "신호 생성 · 시나리오 재생 도구 v1" },
          { when: "90일", what: "시험 항목별 시나리오 세트, 팀 공유" }
        ],
        basis: ["ins-simulator", "cam-dnv"],
        mock: "sim"
      },
      {
        jd: "Data 처리장치 개발",
        title: "현장 데이터 덤프 · 재생 도구",
        what: "장비가 보내는 원시 데이터를 현장에서 파일로 저장하고, 사무실에서 같은 속도로 재생하는 도구. 현장 불량을 사무실에서 재현합니다.",
        why: "INS 시뮬레이터 덤프 재생, Navico2Cat240 Dump/Log, NMS 상태 차분 규칙에서 같은 방식을 썼습니다.",
        steps: [
          { when: "30일", what: "데이터 처리장치 1종의 입출력 프로토콜 파악" },
          { when: "60일", what: "캡처 · 재생 모듈, 재생 중 상태 변화 이벤트 기록" },
          { when: "90일", what: "현장 서비스 문의 1건을 덤프로 재현해 원인 확인" }
        ],
        basis: ["asterix-cat240", "nms", "ins-simulator"],
        mock: "dump"
      },
      {
        jd: "S/W 보안 설계 적용",
        title: "E27 요구 ↔ 제품 기능 매핑표",
        what: "IACS UR E27 요구 30항목과 IEC 62443-3-3 요구를 제품 기능과 대조한 판정표(충족 · 보완대책 · 해당 없음)와 하드닝 체크리스트.",
        why: "게이트웨이 SP1 49항목 판정, NMS 68건 매핑에서 쓴 표 형식 그대로. 선급 심사 문서의 출발점이 됩니다.",
        steps: [
          { when: "30일", what: "네트워크 연결 제품 1종의 자산 · 인터페이스 목록" },
          { when: "60일", what: "요구 항목별 판정표 초안" },
          { when: "90일", what: "보완대책 · 시험 절차 초안, 심사 대응 문서 목차" }
        ],
        basis: ["gateway-dnv", "nms", "ecdis-abs"],
        mock: "map"
      }
    ]
  },

  closing: {
    title: "정리",
    lines: [
      "공고의 세 업무 모두 결과물로 끝낸 적이 있습니다. 제어 S/W는 DNV 형식승인, 데이터 처리는 선박 설치, 보안 설계는 선급 심사 제출 문서로.",
      "경력은 2024.02부터 3년차(2년 10개월), 2027.02에 만 3년. 전 기간 선박 장비 S/W 개발."
    ]
  },

  projects: [
    {
      id: "ins-simulator",
      featured: true,
      competency: "control",
      title: "INS 시뮬레이터 — 항법 센서 20종",
      headline: "실물 센서 없이 형식승인 시험을 돌릴 수 있도록, 항법 센서 20종 시뮬레이터를 3개월에 단독 개발",
      subtitle: "INS 형식승인 시험에 센서 입력을 공급하는 Windows 프로그램. 입사 첫 프로젝트, 3개월 단독 개발. 2026년 HD현대 공급용 v2로 개선.",
      org: "엠알씨 기술연구소 · 사내",
      period: "2024.02 — 2024.05 · v2 2026.11 —",
      role: "단독 개발",
      tags: ["C#", ".NET WinForms", "IEC 61162-1/450", "ITU-R M.1371", "멀티스레드"],
      thumbnail: "assets/images/ins-v2-gps.jpg",
      metrics: [
        { label: "장비", value: "20종 × 10대" },
        { label: "단위 테스트 (v2)", value: "62건" },
        { label: "규격 오류 수정 (v2)", value: "18건" }
      ],
      detail: {
        background: [
          "INS 형식승인 시험은 GPS·자이로·속력계·AIS·NAVTEX 등 센서 문장을 항목별 조건에 맞게 입력해야 함. 실물 장비로는 원하는 값을 만들기 어려움",
          "실물 장비 없이 20종 센서의 NMEA 문장을 생성·송신하는 시뮬레이터 개발"
        ],
        myRole: [
          "기획 · 설계 · 구현 · 검증 전체 (1인)",
          "장비 폼 20종, 장비별 생성 스레드, Serial/UDP 전송 관리자",
          "AIS 6bit 인코딩과 VDM/VDO 다중 문장 분할, NAVTEX NRX 분할",
          "IEC 61162-450 TAG block · 멀티캐스트, 전송 모니터, 설정 저장, 덤프 재생"
        ],
        approach: [
          "v1 (2024): 장비 20종 × 최대 10대 동시 송신, 문장별 주기·Talker ID·체크섬 옵션",
          "v2 (2026): 값의 원본을 화면 컨트롤에서 모델(ShipState · DeviceModel · SentenceModel)로 분리",
          "v2: 장비·문장을 정의 기반 카탈로그로 선언, Own Ship 공통 상태로 센서 간 값 불일치 제거",
          "v2: 문장별 필드 편집기, 82자 길이 검사, 시나리오 저장, TX/RX 모니터, 단위 테스트 62건",
          "기존 화면은 --classic 옵션으로 병행 유지"
        ],
        problem: [
          "문제: 장비를 여러 대 동시에 돌리면 수신 장비에서 타임아웃 발생",
          "원인: 장비 단위 루프 하나로 송신하여 다중 문장 AIS(가변 주기)가 GPS 1 Hz · 자이로 10 Hz 문장의 주기를 밀어냄",
          "해결: 문장별 독립 스레드로 송신 구조 변경 → 한 문장의 지연이 다른 문장에 영향 없음 (2024.07)",
          "v2 전수 분석: 규격 오류 18건(UTC 소수부 형식, 위치 연산 기준, AIS fill bit, NRX 예약 문자, 82자 길이 등) · 품질 문제 11건 수정"
        ],
        result: [
          "INS DNV 형식승인 시험 입력원으로 사용, 이후 사내 표준 시험 도구",
          "v2: 단위 테스트 0 → 62건, 규격 오류 18 → 0건",
          "HD현대 공급용 v2 (2026.11)"
        ],
        images: [
          { src: "assets/images/ins-v2-gps.jpg", caption: "v2 (2026) — GPS1. 장비 목록과 포트·주기, 문장별 생성 문자열·상태·길이, 필드 단위 편집기, 공통 Own Ship 패널, TX/RX 모니터", wide: true },
          { src: "assets/images/ins-v2-gyro.jpg", caption: "v2 — GYRO1. HDG·HDT·ROT·THS. 자침 방위는 Own Ship 진방위·편차·자차에서 계산" },
          { src: "assets/images/ins-v2-navtex.jpg", caption: "v2 — NAVTEX1. NRM 수신 마스크, NRX 3문장 분할, 예약 문자 ^HH 인코딩" },
          { src: "assets/images/ins-v1-gps.jpg", caption: "v1 (2024) — GPS 설정. 값이 화면 컨트롤에 묶여 있던 구조", wide: true },
          { src: "assets/images/ins-v1-ais.jpg", caption: "v1 — AIS Class A. 모니터에 6bit 인코딩된 VDM 다중 문장" }
        ],
        links: []
      }
    },
    {
      id: "cam-dnv",
      featured: true,
      competency: "control",
      title: "경보관리장치 CAM — DNV 형식승인",
      headline: "IEC 62923 조항을 코드로 옮겨 경보관리장치를 개발하고, STANDALONE · INS 연동 두 구성의 DNV 형식승인을 취득",
      subtitle: "브리지 장비 경보를 통합 표시하고 확인·소음 처리하는 CAM(IEC 62923-1/2). 2인 개발, STANDALONE · INS 연동 두 구성 DNV 형식승인.",
      org: "엠알씨 기술연구소 · DNV · HD현대마린솔루션 HiINS",
      period: "2024.05 — 2024.12 · 유지보수 2025 —",
      role: "2인 중 1 · 두 구성 인증 담당",
      tags: ["C#", ".NET", "IEC 62923-1/2", "IEC 61162-450", "PostgreSQL"],
      thumbnail: "assets/images/cam-01.jpg",
      metrics: [
        { label: "DNV 형식승인", value: "TAA00003HV" },
        { label: "2024년 커밋", value: "66건" },
        { label: "설치", value: "태화호 · 한바다호 외" }
      ],
      detail: {
        background: [
          "HD현대마린솔루션 HiINS 통합항법시스템의 구성 장비로 CAM 신규 개발",
          "IEC 62923-1/2: Alert 상태 전이, ACK/Silence 조건, 집계·그룹핑·재평가를 조항과 시험 방법으로 규정. DNV 심사관이 항목별 입회"
        ],
        myRole: [
          "DNV 시험 항목 대응 — CAM-MA-025, MB-007~015, MC-001/002/009",
          "Aggregation · Grouping, Top Alert, Revaluation, CAM 생성 Alert의 ACK/Silence",
          "MDCU-100D 접점 파싱과 Dry Contact 시험, CAM/CID 분기와 MFD 전환",
          "Main/Backup 데이터 동기화, Serial 통신, SmartPortal 연동",
          "태화호 · 한바다호 · HD현대 INS 콘솔 납품 선박 설치·연동"
        ],
        approach: [
          "시험 항목표 기준으로 조항별 요구와 코드 위치를 대조한 체크리스트 작성 → 자체 시험 후 심사",
          "시험 항목 ID 단위로 커밋, 내장 시뮬레이터와 INS 시뮬레이터로 항목별 동작 재현",
          "집계·그룹핑·재평가 규칙은 PostgreSQL 규칙 테이블 + 메모리 상태로 분리, 폼 간 통신은 delegate/event"
        ],
        problem: [
          "문제: 그룹핑 헤더와 개별 Alert의 ACK 전파 규칙이 코드에 분산되어 시험 항목 단위 검증이 어려움",
          "해결: 규칙을 테이블로 모으고 항목 ID별로 재현 시나리오를 만들어 심사 전 자체 검증",
          "2026년 국방과학연구소 대형시험선(P180) 납품용 IEC 62923 적합성 재점검에 같은 방법 적용 — 치명 11건 · 중요 30건 수정"
        ],
        result: [
          "DNV 형식승인 TAA00003HV — MNS-100CA, 2025.02.26 발급, 2030.02.25 만료, BAM P1 + CAM Q1, S1 · R1",
          "HiINS(MED 인증 MEDB00008ST) 구성품으로 설치"
        ],
        images: [
          { src: "assets/images/cam-01.jpg", caption: "Active Alert — 우선순위·카테고리별 경보 목록, 집계 아이콘, 선택 경보 상세", wide: true },
          { src: "assets/images/cam-03.jpg", caption: "Active Alert — ECDIS·RADAR·GPS 소스별 경보와 ACK 상태" },
          { src: "assets/images/cam-02.jpg", caption: "Alert History — 발생·확인·해제 시각" },
          { src: "assets/images/ins-07.jpg", caption: "INS 구성 — 워크스테이션 5대와 센서 허브" },
          { src: "assets/images/ship-03.jpg", caption: "태화호 교육실 — ECDIS 대형 화면 설치 (2025.07)", wide: true },
          { src: "assets/images/ship-01.jpg", caption: "INS 콘솔 장비 랙" }
        ],
        links: []
      }
    },
    {
      id: "ksoe-lv1",
      featured: true,
      competency: "data",
      title: "HD한국조선해양 스마트포털 — Lv.1 Global Scale View",
      headline: "전 지구 기상 격자와 선박 2,000척을 지구본 한 화면에 — 스마트포털 Lv.1을 요구사항부터 Docker 빌드까지 설계·개발",
      subtitle: "전 지구(Lv.1) → 해역(Lv.2) → 항만(Lv.3)으로 이어지는 통합 화면 중 Lv.1 담당. 0.5° 전 지구 기상 격자를 지구본 위 입자 애니메이션과 오버레이로 표시하고 선박 위치·항로·밀도를 겹침.",
      org: "오션웨이즈(엠알씨 자회사) · HD한국조선해양 디지털연구랩",
      period: "2025.02 — 2025.11 · 2차년도 2026.04 — 11",
      role: "7인 팀 · Lv.1 프론트엔드 전체 · 백엔드 Lv.1 API",
      tags: ["Vue 3", "D3", "Web Worker", "SSE", "Spring Boot", "Docker"],
      thumbnail: "assets/images/sp-lv1-wind.jpg",
      metrics: [
        { label: "기상 격자", value: "0.5° · D+10 · 3시간" },
        { label: "입자", value: "최대 12,000개" },
        { label: "AIS 영역", value: "9,000 km · 2,000척" }
      ],
      detail: {
        background: [
          "HD한국조선해양 자율운항선박 차세대 통합브릿지 과제의 스마트포털 시제품",
          "Lv.1 전 지구 · Lv.2 해역 · Lv.3 항만 3D 세 화면이 하나의 플랫폼으로 연동, INS·IAS·ISS 데이터 공유",
          "선상 65인치 터치스크린, 태블릿, 원격운영센터 콘솔에서 사용"
        ],
        myRole: [
          "Lv.1 요구사항명세서 · 상세설계서 작성 (2025.04~05)",
          "Lv.1 프론트엔드 — 지구본 렌더링·투영·Tilt·N-UP/H-UP, 바람·조류·파도 애니메이션과 오버레이",
          "시간 패널, SSE 연동, 즐겨찾기, 항로-기상 시뮬레이션, Mini-Map, Density Map, 터치 조작, 권한 연동, Docker 빌드",
          "백엔드 Weather · 항적 조회 API, 항로-기상 시뮬레이션 쿼리"
        ],
        approach: [
          "기상: NOAA 기반 KSOE DB (현재값 + D+10 예측, 6시간 갱신, 0.5° 격자)",
          "AIS: 위성 AIS + 선내 AIS 이중화, 자선·타선·알람은 SSE로 5초 갱신",
          "입자 이동 계산을 Web Worker로 분리, 좌표 배열만 메인 스레드로 전달",
          "2차년도(2026): Lv.1 고도화, 기능 코드 기반 4단계 권한 연동, INS 입출력 데이터 명세서"
        ],
        problem: [
          "문제: 2025.07 중간보고에서 \"축척에 따라 바람 애니메이션이 달라지고 최대 확대에서는 보이지 않는다\"는 지적",
          "원인: 입자 수·속도·수명이 화면 픽셀 기준 상수라 확대할수록 지리적 이동량이 줄어 입자가 멈춘 듯 보임. 입자 계산이 메인 스레드에 있어 늘리면 조작이 끊김",
          "해결: 애니메이션 파라미터를 투영 scale의 함수로 선언해 매 프레임 계산, 입자 계산은 Web Worker로 이동 → 어느 축척에서도 같은 물리량으로 표시, 입자 12,000개에서도 조작 지연 없음"
        ],
        result: [
          "7월 수정 요청 8건 7.31 반영, 10월 기능 완료, 10.31 · 11.14 완료보고",
          "요구 외 Mini-Map, Density Map, AIS 진행방향 예측 추가 개발",
          "같은 발주처에서 2차년도 업그레이드, 레이더 영상 변환, 차도선 원격 모니터링 과업 수주"
        ],
        images: [
          { src: "assets/images/sp-lv1-wind.jpg", caption: "Lv.1 Global Scale View — 전 지구 바람 입자 애니메이션과 풍속 오버레이(0~50 m/s), 자선 위치", wide: true },
          { src: "assets/images/sp-lv1-currents.jpg", caption: "Lv.1 — 조류 오버레이(0~1.5 m/s). 레이어마다 색상 스케일과 입자 파라미터를 별도 정의", wide: true },
          { src: "assets/images/sp-lv2-ocean.jpg", caption: "Lv.2 Ocean Scale View — 해역 축척의 바람장과 자선·타선 (연동 화면)" },
          { src: "assets/images/sp-lv3-vts.jpg", caption: "Lv.3 VTS Scale View — 항만 3D 지형·건물 위 자선과 안전 반경 (연동 화면)" }
        ],
        links: []
      }
    },
    {
      id: "nms",
      featured: true,
      competency: "security",
      title: "선박용 NMS — IACS UR E26/E27 대응",
      headline: "IACS UR E26/E27 요구 68건을 기능으로 구현한 선박용 NMS를 설계 1개월 + 구현 2개월에 단독 개발",
      subtitle: "선내 네트워크 장비를 SNMP · Syslog · Trap으로 감시하는 자사 제품. E26/E27 요구 68건을 기능으로 구현. 요구사항 · 설계 · 백엔드 · 프론트엔드 · 배포 단독 수행, 육상관제 포털에 내장.",
      org: "엠알씨 · 자사 제품 · 육상관제 플랫폼 내장",
      period: "2025.12 — 2026.03 · 개선 2026.09 — 11",
      role: "단독 개발",
      tags: ["Java 17", "Spring Boot", "SNMP4J", "Vue 3", "PostgreSQL", "Docker"],
      thumbnail: "assets/images/nms-dashboard.jpg",
      metrics: [
        { label: "규정 매핑", value: "E26 17 + E27 51건" },
        { label: "개발 기간", value: "설계 1개월 + 구현 2개월" },
        { label: "감시 장비", value: "약 100대 · 10초 폴링" }
      ],
      detail: {
        background: [
          "2024.07 이후 계약 선박에 적용되는 IACS UR E26(선박) · E27(탑재 장비)은 선내 네트워크 상태 감시와 보안 이벤트 기록을 요구",
          "LibreNMS 검토 → 규정 매핑, 폐쇄망 반입, 육상관제 플랫폼 내장, 라이선스 문제로 자체 개발 결정"
        ],
        myRole: [
          "요구사항 65건 정의 (계정·접근 제어 28, 대시보드 10, 토폴로지 6, 자산 8, 로그 9, 시스템 4) + E26/E27 조항 매핑",
          "23화면 설계, 3계층 아키텍처 · 엔티티 · API 설계",
          "백엔드(Spring Boot, SNMP4J) · 프론트엔드(Vue 3) 구현",
          "Docker · 단독 패키지 배포, 육상관제 포털 내장 빌드, 매뉴얼 · 카탈로그"
        ],
        approach: [
          "보안 요구를 설계 단계에서 규정 조항과 함께 정의 — 역할 3단계, 암호 10자·90일·재사용 금지, 세션 30분, 5회 오입력 잠금, IP 접근 제어, MAC 화이트리스트, 접근 로그, NTP, 30일 초 단위 + 1년 평균 보존",
          "SNMP 10초 폴링 50 스레드, 누적 카운터 → bps 환산, 1분 평균 JDBC 배치 저장",
          "LLDP/SNMP로 물리 연결 탐지 → Zone 단위 토폴로지 자동 구성",
          "한 소스에서 단독 실행 / 포털 내장 두 제품 빌드, 도커 없는 현장용 jar 단독 패키지"
        ],
        problem: [
          "문제: 2026.10 영업·CS 요청 — 장비가 응답하지 않으면 Down으로 표시되지만 이벤트가 생성되지 않아 장애·복구 시각이 기록에 남지 않음 (12대 Down, 마지막 단절 이벤트는 두 달 전)",
          "원인: 실시간 통계, 포트 통계, 임계치 판정이 서로 다른 스케줄러에 분산되어 상태 변화를 감지하는 단일 지점이 없음",
          "해결: 수집 파이프라인을 하나로 통합하고 직전 상태와 비교하는 차분 규칙을 한곳에 배치 → 단절·복구·Link Up/Down 이벤트를 상태 변화 시 1건 생성, SNMP 카운터 리셋 시 bps 오계산 방어 포함"
        ],
        result: [
          "설계 1개월 + 구현 2개월에 23화면 제품 완성, 2026.04 육상관제센터 서비스통합관리시스템에 8화면 내장",
          "개선 요구 11건(REQ-001~011) 2026.10 반영 — 단절·복구 이벤트가 상태 전이 시각으로 기록, 포트 상태 1분 이내 반영",
          "API permitAll · 비밀값 커밋 상태 → 모드별 인가, 감사 로그, 계정 잠금, 비밀값 분리"
        ],
        images: [
          { src: "assets/images/nms-dashboard.jpg", caption: "대시보드 — 토폴로지 요약, 이벤트 심각도별 집계, 트래픽·CPU·메모리 Top5 (육상관제 포털 내장 버전)", wide: true },
          { src: "assets/images/nms-topology.jpg", caption: "네트워크 토폴로지 — Zone(서버실·상황실) 자동 구성, 장애 장비 강조, Tree/Graph 전환", wide: true },
          { src: "assets/images/nms-switch.jpg", caption: "스위치 상세 — 장비 정보, 포트 30개 상태와 In/Out, CPU·메모리, 포트별 트래픽" },
          { src: "assets/images/nms-events.jpg", caption: "이벤트 로그 — Info/Caution/Warning/Critical, 카테고리·장비·위험도 필터" },
          { src: "assets/images/nms-devices.jpg", caption: "장비 목록 — 제조사, 타입, IP, 가동 시간, 구역" }
        ],
        links: []
      }
    },
    {
      id: "asterix-cat240",
      featured: true,
      competency: "data",
      title: "레이더 영상 코덱 — ASTERIX CAT240",
      headline: "레이더 스포크 초당 832개를 ASTERIX CAT240으로 실시간 변환하는 코덱 DLL과 변환기를 만들어 태화호에 설치",
      subtitle: "EUROCONTROL ASTERIX CAT240 인코더·디코더 DLL과, Navico 레이더 스포크를 CAT240 UDP 멀티캐스트로 변환하는 Navico2Cat240(Windows · Linux). 자사 RADAR · ECDIS에 DLL 탑재, 태화호 설치.",
      org: "엠알씨 · HD한국조선해양 스마트포털 2차년도",
      period: "2026.04 — 2026.07 · 설치 2026.09 · 확장 2026.10",
      role: "단독 개발",
      tags: ["C#", ".NET 10 Avalonia", "ASTERIX CAT240", "Navico Radar SDK", "C++", "UDP 멀티캐스트"],
      thumbnail: "assets/images/asterix-radar-cat240.jpg",
      metrics: [
        { label: "처리량", value: "초당 832 스포크" },
        { label: "요구사항", value: "20항목" },
        { label: "코드", value: "코덱 11,419 + 변환기 14,226줄" }
      ],
      detail: {
        background: [
          "스마트포털 2차년도 INS 업데이트 과업 — 자사 RADAR와 타사 레이더 간 영상을 CAT240 표준으로 송수신",
          "출력 스트림은 스마트포털 레이더 오버레이와 자사 ECDIS에서 수신·표시"
        ],
        myRole: [
          "CAT240 규정 분석 (I240/000~140, UAP · FSPEC · 타임스탬프), 요구사항 정의서 20항목",
          "코덱 DLL (netstandard2.0) — 인코더 · 디코더",
          "Navico2Cat240 변환기 (.NET 10 Avalonia + C++ NavicoShim), Windows 서비스판, Linux 설치 안내",
          "WPF OpenGL PPI 검증 뷰어, 자사 RADAR S/W · ECDIS에 DLL 탑재 연동, 사용설명서"
        ],
        approach: [
          "코덱 DLL을 변환기 · 서비스 · 뷰어 · RADAR · ECDIS가 공유, 인코더/디코더 역할과 exe/dll 형태는 설정으로 선택",
          "호스트가 실측 스포크 폭을 전달하는 송신 API — 코덱에 특정 장비 상수를 두지 않음",
          "검증 뷰어에 rpm, 0° 통과 주기, MSG_INDEX 단절 수 계측 추가",
          "10월 확장: 셀 해상도 · zlib 압축 · NB_CELLS 옵션, 진북 기준 방위 보정 (규격 3.1.3)"
        ],
        problem: [
          "문제: 납품 전 검증에서 변환 영상의 표적 크기와 거리 축척이 원본과 다름 (자사 ECDIS, SPx RadarView 양쪽)",
          "원인 1: Navico SDK 방위 분해능은 4,096이지만 회전당 실제 스포크는 2,048개 → 스포크 폭이 절반으로 계산되어 표적이 가늘어짐",
          "원인 2: 영상 헤더를 나노초 단위로 쓰면 1 ns = 왕복 0.15 m 양자화 → 근거리 거리 축척 수십 % 오차",
          "해결: 실측 스포크 폭 전달 API 추가, 헤더 단위를 펨토초로 변경 (셀 643 m 이하 오차 0, 환산 오차 1% 초과 시 경고), 랜카드 분리 시 송신으로 집계되던 카운터 수정"
        ],
        result: [
          "ECDIS · SPx 양쪽에서 원본과 동일한 표적 크기 · 거리, 2026.08 중간보고 과업 완료, 2026.09.10 태화호 설치",
          "회전당 2,048 스포크 · 초당 832 스포크 · 약 24 rpm → I240/052 가변 블록(최대 65,024바이트) 실시간 변환"
        ],
        images: [
          { src: "assets/images/asterix-radar-cat240.jpg", caption: "자사 RADAR S/W(MNS-100R) — 수신한 ASTERIX CAT240 영상을 PPI에 표시. 코덱 DLL 탑재", wide: true },
          { src: "assets/images/asterix-navico2cat240.jpg", caption: "Navico2Cat240 — 레이더 접속, CAT240 멀티캐스트 송신 설정(SAC/SIC, 해상도, zlib, 방위 기준), 송수신 통계, Dump/Log", wide: true, fit: "contain" }
        ],
        links: []
      }
    },
    {
      id: "gateway-dnv",
      featured: true,
      competency: "security",
      title: "보안 게이트웨이 — DNV 사이버보안 형식승인 문서",
      headline: "게이트웨이의 DNV SP1 보안 요구 49항목을 직접 시험해 판정하고, 심사 제출 문서 10종을 작성",
      subtitle: "자사 게이트웨이 MCG-100의 DNV Cyber Secure(SP1) 요구 49항목 분석 · 시험 · 문서화. 보안 기능 기술서, 하드닝 지침, 시험 절차, 선내 검증 절차 등 제출 문서 10종 작성.",
      org: "엠알씨 기술연구소 · DNV · 펌웨어 공급사 협업",
      period: "2026.09 — 진행 중",
      role: "작성 2인 중 1 · Prepared Engineer",
      tags: ["IEC 62443-3-3 / 4-2", "DNV-RU-SHIP Pt.6 Ch.5", "IACS UR E27", "Wireshark · nmap · ZAP · hping3"],
      thumbnail: "assets/images/gateway-sp1-summary.jpg",
      metrics: [
        { label: "SP1 요구", value: "49항목 판정" },
        { label: "제출 문서", value: "10종" },
        { label: "공급사 결함 전달", value: "24건" }
      ],
      detail: {
        background: [
          "선급 사이버보안 규정상 존 경계 보호 장비는 보안 프로파일별 요구를 충족해야 함",
          "IEC 62443-3-3 기반 SP1 49항목을 제품 기능과 대조하고 시험 · 검증 · 운용 문서 작성",
          "차도선 원격 모니터링, SDV 플랫폼의 게이트웨이로도 사용되는 제품"
        ],
        myRole: [
          "F021 보안 기능 기술서, F030 토폴로지, F071 자산 목록, F141 하드닝 · 설정 지침, F142 사고 대응 · 복구",
          "F252 보안 기능 시험 절차 (49항목, 102쪽), F253 선내 검증 절차 (46항목)",
          "F259 보안 개발 수명주기, I320 변경 관리, Z100 수정 전략",
          "L2 스위치 MCG-90 SP0 세트 (19항목) 별도"
        ],
        approach: [
          "하드닝 지침 20여 항목 — 기본 암호 변경, 역할 계정 분리, 관리 접근 소스 제한, 5회/15분 잠금, 암호 주기 90일, HTTPS만 허용, REST API 비활성, 유휴 10분, 전 정책 로그, 로그 90일 보존, NTP",
          "시험 절차: 항목별 시험 방법과 합격 기준을 Wireshark · nmap · OWASP ZAP · hping3 기준으로 작성",
          "선내 검증: 운항 중 35 · 정비 중 5 · 공급자 6항목",
          "후속: IEC 62443-4-2 SL-C 1 갭 분석"
        ],
        problem: [
          "문제: 제품이 그대로 충족하지 못하는 요구 — 계정 비활성화 없음, 암호 정책 8~31자 고정, 로그인 배너 편집 불가. 펌웨어는 외부 공급사 제품이라 직접 수정 불가",
          "해결: 규칙이 인정하는 보완대책 문서화 — RADIUS/LDAP 중앙 인증으로 계정·암호 정책 위임, 게시문으로 배너 대체 → 충족 36 · 보완대책 3 · 해당 없음 10으로 49항목 판정",
          "랩 검증에서 거부 로그 누락, DoS 임계값 오동작, untagged VLAN 누설, HTTP 80 포트 개방 등 24건 확인 → 재현 절차와 함께 공급사 전달"
        ],
        result: [
          "49항목 판정 완료, 제출 문서 10종 영문 패키징 (2026.10.15), DNV 심사 진행 중",
          "RINA Academy Cyber Resilience IACS UR E26/E27 교육 수료 (2026.06)"
        ],
        images: [
          { src: "assets/images/gateway-sp1-summary.jpg", caption: "SP1 요구 49항목 판정 결과와 제출 문서 10종 (인증서 발급 후 교체 예정)", wide: true }
        ],
        links: []
      }
    },
    {
      id: "ess-remote",
      featured: true,
      competency: "data",
      title: "전기추진 차도선 ESS 원격 모니터링 — 육상 관제 Web UI",
      headline: "요구사양 189항목을 동작하는 프로토타입으로 바꿔 6주 안에 관제 화면 23종 설계를 고객과 확정",
      subtitle: "선내 DAQ가 ESS · 추진계 데이터를 수집해 LTE로 육상 서버에 전송하고 웹에서 관제하는 시스템. HD한국조선해양 EP솔루션기술부 용역. Web UI 23화면 설계 · 구현, API 연동 담당.",
      org: "엠알씨 · HD한국조선해양 EP솔루션기술부",
      period: "2026.09 — 2026.12",
      role: "Web UI 담당",
      tags: ["Vue 3", "WebSocket", "REST", "three.js", "IACS UR E26/E27"],
      thumbnail: "assets/images/ess-01.jpg",
      metrics: [
        { label: "화면", value: "23종 · 피드백 7차" },
        { label: "수집", value: "1초 · 척당 2,500 포인트" },
        { label: "납품", value: "2026.12" }
      ],
      detail: {
        background: [
          "전기추진 선박의 ESS(BADA-100)와 추진계(PEMS)를 육상에서 원격 감시 · 진단",
          "선내 DAQ — Modbus TCP, 척당 약 2,500 포인트 1초 수집 → LTE → 육상 서버 (MQTT 제어·알람, gRPC 시계열)",
          "웹: 가동 현황, 고장, 위치 이력, ESS 상세, 정기 점검, 보고서"
        ],
        myRole: [
          "요구사항-화면 추적표, 23화면 설계",
          "동작 프로토타입과 디자인 패키지, 고객 피드백 7차 반영",
          "REST · WebSocket 연동, Admin/Operator/Viewer 권한 화면",
          "보고서 PDF · Excel · Word 내보내기, 선박 3D 현황, RACK 3D, 셀 단위 히트맵, 다크·라이트 테마, 한·영 전환"
        ],
        approach: [
          "Fleet → BANK → RACK(최대 12) 계층과 5대 서비스 영역(운용·성능, 안전·고장, 에너지, 열·셀, Rack 진단)을 메뉴 구조에 반영",
          "화면마다 요구사양 근거를 붙여 요구사항 추적표의 출발점으로 사용",
          "AI 코딩 도구 활용 — 버전별 백업, 변경 이력, Playwright 회귀 캡처 59화면, 튜토리얼 236단계 자동 점검으로 검증",
          "작업 폴더 ISO 9001 조항 기준 구성, 고객 계정 · 금액 · 개인정보 비포함 규칙"
        ],
        problem: [
          "문제: 계약부터 Web Beta까지 6주 안에 화면 설계를 고객과 확정해야 하는데, 요구사양서는 189항목 표 형식이라 화면을 떠올리기 어렵고 문서 왕복에 1주 소요",
          "해결: 모사 데이터로 동작하는 프로토타입을 먼저 만들어 고객이 직접 조작하며 피드백, 디자인 패키지와 화면설계서(pptx)는 프로토타입에서 자동 생성 → 피드백 당일 반영"
        ],
        result: [
          "고객 피드백 7차를 거쳐 23화면 설계 확정, Web UI와 API 연동 완료, 2026.12 납품",
          "IACS UR E26/E27 대응 요구사항 추적표 · 위협 분석 · 보안 시험 결과 포함 문서 세트 납품"
        ],
        images: [
          { src: "assets/images/ess-01.jpg", caption: "선박 3D 현황 — 이동식 ESS 2기, 추진 전동기 상태, 운항 정보, 최근 알람", wide: true },
          { src: "assets/images/ess-02.jpg", caption: "HOME — Fleet 요약, 선택 선박 3D, 항로 지도, 에너지 사용량, Alarm Center" },
          { src: "assets/images/ess-03.jpg", caption: "BADA-100 현황 — Fleet 전체 BANK 표, BANK별 SOC·SOH, 미확인 고장·알람" },
          { src: "assets/images/ess-04.jpg", caption: "ESS 상세 — BANK의 RACK 12기 3D 배열, 셀 전압·온도, 시스템 상태", wide: true },
          { src: "assets/images/ess-05.jpg", caption: "RACK 상세 — 모듈 × 셀 전압 격자, 모듈별 온도, Rack I/O" },
          { src: "assets/images/ess-06.jpg", caption: "온도 히트맵 — Rack × Module 셀 온도 평균" },
          { src: "assets/images/ess-07.jpg", caption: "PEMS — 전기추진 전력 흐름 단선도, 전력 분배, 장비 상태", wide: true },
          { src: "assets/images/ess-08.jpg", caption: "Powermap — 온도 × SOC 별 충·방전 허용 전력" },
          { src: "assets/images/ess-09.jpg", caption: "트렌드 분석 — Usable SOC, Rated SOC, SOH, 시스템 전압. CSV · Parquet 내려받기" },
          { src: "assets/images/ess-10.jpg", caption: "MAP — 선단 지도, 선박 위치와 SOC" },
          { src: "assets/images/ess-11.jpg", caption: "데이터 수신 현황 — 선박별 수신 주기·지연·유실, LTE 단절 시 선내 임시 저장 후 재전송" },
          { src: "assets/images/ess-12.jpg", caption: "Fleet 운영보고서 — A4 미리보기, PDF · Excel · Word 내보내기" },
          { src: "assets/images/ess-13.jpg", caption: "ESS 및 사용자 관리 — BANK 관리, DAQ 연결, 감사 로그 (Admin)" },
          { src: "assets/images/ess-14.jpg", caption: "다크 모드 — 관제실용", wide: true }
        ],
        links: []
      }
    },
    {
      id: "p180",
      featured: false,
      competency: "control",
      title: "국방과학연구소 대형시험선(HHI P180) — CAM 규정 적합성 재점검",
      headline: "납품 경로에서만 드러나는 IEC 62923 불일치 41건을 조항별 점검으로 찾아 재구현",
      subtitle: "BNWAS 연동 납품 모드 신설, IEC 62923-1/2 조항별 적합성 점검(치명 11 · 중요 30건) 후 재구현. 2026.11 커밋 50건.",
      org: "엠알씨 · HD현대중공업 건조 · 국방과학연구소",
      period: "2026.03 — 진행 중",
      role: "CAM 담당",
      tags: ["C#", "IEC 62923-1/2", "BNWAS"],
      thumbnail: "",
      metrics: [],
      detail: {
        background: ["HD현대중공업이 건조하는 국방과학연구소 대형시험선에 ECDIS · CONNING · BAMS(CAM) 납품"],
        myRole: ["전자해도체계-선박정보전시장치 연동합의서, BAMS-BNWAS 접점 연동 합의서 작성 · 협의", "P180 납품 모드와 재구현"],
        approach: [
          "ALARM이 UNACK 30초 초과 시 BNWAS Emergency Call 작동 · 해제, 실제 조작 감지 시에만 EVE 송신하는 납품 모드",
          "재평가 런타임, 규칙 DB 계층, Main/Backup 동기화, Legacy 변환, 재기동 상태 복원, 자체 고장 경보, 내장 시뮬레이터 재구현"
        ],
        problem: ["문제: 인증 이후 변경과 P180 경로(MDCU 접점, BNWAS)에서만 드러나는 규정 불일치", "해결: IEC 62923-1/2 조항별 적합성 점검 → 치명 11건 · 중요 30건 수정"],
        result: ["진행 중"],
        images: [],
        links: []
      }
    },
    {
      id: "ecdis-abs",
      featured: false,
      competency: "security",
      title: "ECDIS ABS 사이버보안 인증 참여 — IACS UR E27",
      headline: "ECDIS의 ABS E27 인증 시험 절차서 작성에 참여하고 검사관 입회 시험 수행",
      subtitle: "팀장 주관 ECDIS(MNS-100E) ABS 인증. 시험 절차서 작성과 입회 시험 참여.",
      org: "엠알씨 · ABS",
      period: "2025.08 — 2026.02",
      role: "절차서 작성 참여 · 시험 참여",
      tags: ["IACS UR E27", "IEC 62443-3-3", "ABS"],
      thumbnail: "",
      metrics: [],
      detail: {
        background: ["2024.07 이후 계약 선박부터 적용되는 E27 요구 — ECDIS가 Table 1 요구 30항목을 충족함을 ABS로부터 인증"],
        myRole: ["시험 절차서(CSI-TED-004) 작성 참여", "2026.02.02 ABS 검사관 입회 시험 참여"],
        approach: [],
        problem: [],
        result: ["2026.02 ABS 입회 시험 완료, 이후 심사 코멘트 대응"],
        images: [],
        links: []
      }
    }
  ]
};
