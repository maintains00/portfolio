/* =====================================================================
   포트폴리오 데이터 — 유지선 / Software Engineer
   모든 문구는 이 파일에서 관리합니다. 이미지는 assets/images/ 에 넣고 경로를 적습니다.
   detail 의 각 항목은 문자열(문단) 또는 배열(불릿) 둘 다 됩니다.
   2026-11-15 v5: 문장 전체를 자연스러운 한국어로 다듬음. 화살표(→) 나열, "단독 개발", "한 일" 같은 표현 제거.
   2026-11-18 v6: 가운뎃점 나열·긴 줄표·과시형 숫자 정리, 대형시험선(P180) 삭제, 차도선 납품 진행 중 반영.
   제목(title)은 "제품명 - 부제" 형식. main.js / project.js / _build_deck.js 가 " - " 앞부분을 짧은 이름으로 씀.
   ===================================================================== */

window.PORTFOLIO = {

  /* 메인 페이지 프로젝트 순서. PPT·경력기술서 04장과 동일 */
  projectOrder: ["ess-remote", "asterix-cat240", "cam-dnv", "ins-simulator", "nms", "ksoe-lv1", "gateway-dnv"],

  settings: {
    showTodoBar: false,
    siteTitle: "유지선 | 조선·해양 SW 개발자",
    footerNote: ""
  },

  profile: {
    name: "유지선",
    nameEn: "Jiseon Yu",
    title: "Software Engineer",
    focus: "C#/.NET, Vue 3, Spring Boot, 선급 인증",
    tagline: "조선·해양 SW 개발자 유지선입니다.",
    taglineEm: "",
    lead: "선박 항법장비 기술연구소 3년차. C#/.NET 장비 제어 소프트웨어와 Web 기반 모니터링 시스템 개발, DNV·ABS 선급 인증 대응.",
    years: "2년 10개월",
    careerLabel: "3년차",
    careerSince: "2024.02 ~ 현재",
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
      "2024년 2월 엠알씨 기술연구소에 입사했습니다. 첫 업무는 INS 형식승인 시험에 쓸 항법 센서 시뮬레이터였습니다. 20종 장비의 NMEA 문장을 만들어 보내는 C# 프로그램으로, 지금도 사내 시험 도구로 쓰고 있습니다.",
      "그 뒤 경보관리장치 CAM을 개발해 DNV 형식승인을 받았고, 2025년에는 HD한국조선해양 스마트포털의 전 지구 기상 화면을 맡았습니다. 2026년에는 IACS UR E26/E27 대응 NMS와 ASTERIX CAT240 레이더 영상 코덱을 개발했고, 코덱은 9월에 태화호에 설치했습니다.",
      "11월에 차도선 원격 모니터링 Web UI 개발을 마치고 납품을 진행하고 있습니다. 보안 게이트웨이의 DNV 사이버보안 형식승인 제출 문서도 준비를 마쳐 심사를 앞두고 있습니다."
    ],
    strengths: [
      { title: "장비 제어 SW (C#/.NET)", desc: "NMEA 0183/450, AIS, ASTERIX CAT240 같은 해상 통신 프로토콜을 구현했습니다. 멀티스레드 송수신, 상태 관리, 코덱 DLL 분리 경험이 있습니다." },
      { title: "모니터링 시스템 (Vue 3, Spring Boot)", desc: "SNMP 수집, D3와 Web Worker를 쓴 실시간 시각화, 역할별 권한과 감사 로그, 폐쇄망 Docker 배포를 해 봤습니다." },
      { title: "선급 규격과 인증", desc: "IEC 62923, IACS UR E26/E27, IEC 62443 요구사항을 분석하고 시험 절차를 썼습니다. DNV 형식승인을 받았고, ABS와 DNV 사이버보안 심사를 준비했습니다." }
    ]
  },

  skills: [
    { group: "언어 · 프레임워크", items: [
      { name: "C# / .NET", level: "주력", note: "WinForms, WPF, Avalonia. 멀티스레드 통신, DLL 분리" },
      { name: "JavaScript / Vue 3", level: "실무", note: "Pinia, D3, Web Worker, SSE, three.js" },
      { name: "Java / Spring Boot", level: "실무", note: "REST API, JPA, Spring Security, SNMP4J" },
      { name: "C++", level: "활용", note: "Navico Radar SDK 연동부" }
    ]},
    { group: "통신 · 프로토콜", items: [
      { name: "IEC 61162-1 / 450 (NMEA)", level: "주력", note: "문장 생성과 파싱, 체크섬, UDP 멀티캐스트, TAG block" },
      { name: "AIS ITU-R M.1371", level: "실무", note: "6bit 인코딩, VDM/VDO 다중 문장" },
      { name: "ASTERIX CAT240", level: "주력", note: "인코더와 디코더, 초당 832 스포크 실시간 변환" },
      { name: "SNMP v2c/v3, Syslog, Trap", level: "실무", note: "10초 주기 폴링, 1분 단위 집계" }
    ]},
    { group: "규격 · 인증", items: [
      { name: "IEC 62923-1/2 (BAM / CAM)", level: "주력", note: "DNV 형식승인 TAA00003HV" },
      { name: "IACS UR E26 / E27", level: "실무", note: "NMS 요구사항 매핑, ECDIS ABS 인증 참여, RINA 교육 수료" },
      { name: "IEC 62443, DNV-RU-SHIP Pt.6 Ch.5", level: "실무", note: "SP1 요구 49항목 판정, 형식승인 제출 문서 작성" }
    ]},
    { group: "데이터 · 도구", items: [
      { name: "PostgreSQL", level: "실무", note: "Main/Backup 이중화, 시계열 데이터 배치 저장" },
      { name: "Git, Docker, MSTest, Playwright", level: "실무", note: "폐쇄망 배포, 단위 테스트, 화면 회귀 캡처" },
      { name: "Wireshark, nmap, OWASP ZAP, hping3", level: "활용", note: "보안 기능 시험" }
    ]}
  ],

  experience: [
    {
      company: "(주)엠알씨 MRC Inc. 기술연구소",
      role: "연구원 (Software Engineer)",
      period: "2024.02 ~ 현재",
      summary: "선박 항법장비(INS, ECDIS, RADAR, CAM)를 만드는 회사입니다. 2025년 한 해는 기술연구소가 세운 자회사 (주)오션웨이즈로 전출되어 같은 업무를 했고, 2026년 1월 엠알씨로 복귀했습니다.",
      bullets: [
        "INS 시뮬레이터 (2024.02 ~ 05): 형식승인 시험 입력원, 사내 표준 시험 도구",
        "경보관리장치 CAM (2024.05 ~ 12): DNV 형식승인 두 구성",
        "스마트포털 Lv.1 (2025.02 ~ 11): HD한국조선해양, 전 지구 기상 화면",
        "선박용 NMS (2025.12 ~ 2026.05): IACS UR E26/E27 대응",
        "ASTERIX CAT240 레이더 영상 코덱 (2026.05 ~ 07): 2026.09 실선 설치",
        "보안 게이트웨이 DNV 사이버보안 인증 (2026.09 ~): SP1 49항목 판정, 제출 문서 10종",
        "차도선 원격 모니터링 (2026.09 ~ 12): HD한국조선해양, 납품 진행 중"
      ]
    }
  ],

  education: [
    { school: "한서대학교", major: "항공소프트웨어공학과", period: "2019.03 ~ 2024.02", note: "학사, 학점 4.19 / 4.5" }
  ],

  certifications: [
    { name: "RINA Academy Cyber Resilience, IACS UR E26/E27 (교육 수료)", date: "2026.06" },
    { name: "정보처리기사 (한국산업인력공단)", date: "2022.06" },
    { name: "TOEIC Speaking IM2", date: "2026.11" },
    { name: "TOEIC 830", date: "2022.02" }
  ],

  credentials: [
    { image: "assets/images/cert-cam-dnv.jpg", title: "DNV 형식승인 TAA00003HV (경보관리장치 CAM)", desc: "2025.02.26 발급, 2030.02.25까지 유효. IMO MSC.302(87), IEC 62923-1/2 기준. StandAlone과 INS 연동형 두 구성" },
    { image: "assets/images/cert-ins-med.jpg", title: "MED 인증 MEDB00008ST (HiINS)", desc: "HD현대마린솔루션 HiINS 통합항법시스템 구성품에 CAM 포함. 2025.01.10 발급, INS 인증 시험 참여" },
    { image: "assets/images/cert-rina.jpg", title: "RINA Academy Cyber Resilience 교육", desc: "IACS UR E26/E27. 2026.06.26 수료, No. 2026PU0626T" }
  ],

  /* 예전 경력기술서 03장(지원 직무 적합성)에서만 쓰던 데이터. 웹과 PPT에는 표시하지 않음. */
  jobFit: {
    company: "파나시아 (PANASIA)",
    position: "ES연구팀 SW 개발 담당",
    note: "공고의 주요 업무와 우대사항별 해당 경험",
    items: [
      { requirement: "제품 Control S/W 개발", evidence: "경보관리장치 CAM의 경보 처리(집계, 그룹핑, 재평가)를 IEC 62923 기준으로 구현해 DNV 형식승인을 받았고, 선박에 설치해 연동했습니다.", projects: ["cam-dnv", "ins-simulator"] },
      { requirement: "Data 처리장치 개발", evidence: "항법 센서 20종 NMEA 생성기, 레이더 영상 CAT240 변환, 네트워크 장비 SNMP 수집과 집계, 척당 약 2,500 포인트를 받는 ESS 관제 서버와 화면을 만들었습니다.", projects: ["ins-simulator", "asterix-cat240", "nms", "ess-remote"] },
      { requirement: "S/W 보안 설계 적용", evidence: "IACS UR E26/E27 요구사항을 NMS 기능으로 구현했고, 게이트웨이의 DNV SP1 요구 49항목을 판정해 하드닝 지침과 시험 절차 등 제출 문서를 썼습니다. ECDIS의 ABS E27 인증에도 참여했습니다.", projects: ["nms", "gateway-dnv"] },
      { requirement: "C#, C++, Python 코드 분석·개발", evidence: "C#이 주력이고 C++로 레이더 SDK 연동부를 만들었습니다. 시뮬레이터 v2를 만들면서 기존 코드를 다시 읽어 규격 오류 18건을 고쳤습니다.", projects: ["ins-simulator", "asterix-cat240"] },
      { requirement: "경력 3년 이상", evidence: "2024년 2월 입사해 전 기간 선박 장비 S/W를 개발했습니다. 2027년 2월에 만 3년이 됩니다.", projects: [] },
      { requirement: "우대: 어학", evidence: "TOEIC 830 (2022.02), TOEIC Speaking IM2 (2026.11). CAM 형식승인 시험을 외국인 DNV 심사관과 영어로 진행했습니다.", projects: ["cam-dnv"] }
    ]
  },

  /* 주요 업무 네 가지. 경력기술서 02장, PPT Overview 와 같은 분류와 순서. (2026-11-22 v7: 공고 항목 표기 제거) */
  competencies: [
    {
      id: "control",
      title: "장비 제어 S/W 개발 (C# / .NET)",
      bridge: "경보 처리 로직, 접점 입력과 Serial·UDP 통신, Main/Backup 동기화, 형식승인 시험용 센서 시뮬레이터",
      facts: ["경보관리장치 DNV 형식승인 (StandAlone, INS 연동형)", "항법 센서 20종 시뮬레이터, 사내 표준 시험 도구"],
      projects: ["cam-dnv", "ins-simulator"]
    },
    {
      id: "data",
      title: "장비 데이터 수집·변환",
      bridge: "레이더 영상 ASTERIX CAT240 실시간 변환, SNMP 10초 수집과 1분 집계, 상태 변화 이벤트 기록",
      facts: ["회전당 2,048 스포크, 초당 832 스포크 변환", "선내 네트워크 장비 상태 수집과 단절·복구 이벤트"],
      projects: ["asterix-cat240", "nms"]
    },
    {
      id: "monitor",
      title: "원격 모니터링 시스템 (백엔드·프론트엔드)",
      bridge: "차도선 ESS·추진계 관제 서버와 화면, 육상관제센터 내장 화면, 전 지구 기상 화면",
      facts: ["실제 장비를 연결한 연동 시험", "Spring Boot, Vue 3, REST·WebSocket"],
      projects: ["ess-remote", "nms", "ksoe-lv1"]
    },
    {
      id: "security",
      title: "선급 인증 대응과 보안 설계",
      bridge: "DNV 형식승인 시험 대응, E26/E27 요구사항 설계 반영, 사이버보안 인증 문서 작성",
      facts: ["IEC 62923 조항과 코드를 대조한 자체 시험 후 DNV 입회 시험", "보안 게이트웨이 SP1 49항목 판정, 제출 문서 10종"],
      projects: ["cam-dnv", "nms", "gateway-dnv"]
    }
  ],

  projects: [
    {
      id: "ins-simulator",
      featured: true,
      competency: "control",
      title: "INS 시뮬레이터 - 항법 센서 20종",
      headline: "형식승인 시험에 쓰는 항법 센서 20종 시뮬레이터",
      subtitle: "INS 형식승인 시험에 필요한 센서 20종의 NMEA 문장을 실물 장비 없이 만들어 보내는 프로그램. 입사 후 첫 과제",
      org: "엠알씨 기술연구소 (사내)",
      period: "2024.02 ~ 2024.05 (v2 개선 2026.11 ~)",
      role: "개발",
      tags: ["C#", ".NET WinForms", "IEC 61162-1/450", "ITU-R M.1371", "멀티스레드"],
      thumbnail: "assets/images/ins-v2-gps.jpg",
      metrics: [
        { label: "센서", value: "20종" },
        { label: "동시 송신", value: "종류당 10대" },
        { label: "단위 테스트 (v2)", value: "62건" }
      ],
      detail: {
        background: [
          "형식승인 시험은 센서 문장을 항목마다 정해진 조건으로 넣어야 함",
          "실물 장비로는 원하는 값을 만들기 어려워 시뮬레이터 개발"
        ],
        myRole: [
          "장비 20종 설정 화면, 문장별 송신 스레드, Serial/UDP 전송 관리",
          "AIS 6bit 인코딩과 VDM/VDO 다중 문장 분할, NAVTEX NRX 문장 분할",
          "IEC 61162-450 TAG block과 멀티캐스트 송신, 덤프 파일 재생"
        ],
        approach: [],
        problem: [
          "문제: 여러 대 동시 송신 시 수신 장비 타임아웃",
          "원인: 장비당 루프 하나라 AIS 다중 문장이 GPS·자이로 문장을 밀어냄",
          "해결: 문장마다 별도 스레드로 송신"
        ],
        result: [
          "INS DNV 형식승인 시험의 입력원, 이후 사내 표준 시험 도구",
          "v2(2026.11 ~)에서 규격 오류 18건 수정, 단위 테스트 62건 추가"
        ],
        images: [
          { src: "assets/images/ins-v2-gps.jpg", caption: "v2 (2026) GPS1 화면. 장비 목록과 포트, 주기, 문장별 생성 문자열과 상태, 필드 편집기, 자선 공통 패널, TX/RX 모니터", wide: true },
          { src: "assets/images/ins-v2-gyro.jpg", caption: "v2 GYRO1 화면. HDG, HDT, ROT, THS 문장. 자침 방위는 자선의 진방위, 편차, 자차로 계산" },
          { src: "assets/images/ins-v2-navtex.jpg", caption: "v2 NAVTEX1 화면. NRM 수신 마스크, NRX 3문장 분할, 예약 문자 ^HH 인코딩" },
          { src: "assets/images/ins-v2-ais-run.jpg", caption: "v2 AIS2 화면, 장비 10대 동시 송신 중. 메시지 1의 필드별 값, 비트 수, 인코딩 값. 메시지 5는 VDO 2문장으로 나눠 송신" },
          { src: "assets/images/ins-v2-ports.jpg", caption: "포트 설정. UDP 유니캐스트와 멀티캐스트, 450 체크 시 IEC 61162-450 헤더(UdPbC, TAG block) 송신, PC의 COM 포트 통신 설정" },
          { src: "assets/images/ins-v1-gps.jpg", caption: "v1 (2024) GPS 설정 화면. 값이 화면 컨트롤에 묶여 있던 구조", wide: true },
          { src: "assets/images/ins-v1-ais.jpg", caption: "v1 AIS Class A 화면. 모니터에 6bit 인코딩된 VDM 다중 문장이 보임" }
        ],
        links: []
      }
    },
    {
      id: "cam-dnv",
      featured: true,
      competency: "control",
      title: "경보관리장치 CAM - DNV 형식승인",
      headline: "IEC 62923 경보관리장치 개발과 DNV 형식승인",
      subtitle: "브리지 장비의 경보를 모아 표시하고 ACK와 Silence를 처리하는 경보관리장치. StandAlone과 INS 연동형 두 구성 DNV 형식승인",
      org: "엠알씨 기술연구소, DNV, HD현대마린솔루션 HiINS",
      period: "2024.05 ~ 2024.12 (유지보수 2025 ~)",
      role: "3명 / 경보 처리 개발, 인증 참여",
      tags: ["C#", ".NET", "IEC 62923-1/2", "IEC 61162-450", "PostgreSQL"],
      thumbnail: "assets/images/cam-01.jpg",
      metrics: [
        { label: "DNV 형식승인", value: "TAA00003HV" },
        { label: "기준", value: "IEC 62923-1/2" },
        { label: "유효 기간", value: "2030.02까지" }
      ],
      detail: {
        background: [
          "HD현대마린솔루션 HiINS 통합항법시스템의 구성 장비로 신규 개발",
          "IEC 62923-1/2 조항마다 DNV 심사관 입회 시험"
        ],
        myRole: [
          "IEC 62923 규정에 따른 경보 처리 로직 개발 (집계·그룹핑, Top Alert, ACK·Silence)",
          "MDCU-100D 접점 입력, CAM/CID 모드 분기, Main/Backup 동기화, Serial 통신",
          "납품 선박 설치와 INS 콘솔 연동"
        ],
        approach: [],
        problem: [
          "문제: 확인 전파 규칙이 코드 곳곳에 흩어져 항목별 검증이 어려움",
          "해결: 규칙을 테이블 한곳으로 모으고 항목별 재현 시나리오로 자체 시험 후 심사"
        ],
        result: [
          "DNV 형식승인 TAA00003HV (2025.02 발급, 2030.02까지 유효)",
          "HiINS 통합항법시스템(MED 인증)의 구성품"
        ],
        images: [
          { src: "assets/images/cam-01.jpg", caption: "Active Alert 화면. 우선순위와 카테고리별 경보 목록, 집계 아이콘, 선택한 경보의 상세", wide: true },
          { src: "assets/images/cam-03.jpg", caption: "Active Alert 화면. ECDIS, RADAR, GPS 등 소스별 경보와 확인 상태" },
          { src: "assets/images/cam-02.jpg", caption: "Alert History 화면. 발생, 확인, 해제 시각" },
          { src: "assets/images/ins-07.jpg", caption: "INS 구성. 워크스테이션 5대와 센서 허브" },
          { src: "assets/images/cam-dnv-test-2405.jpg", caption: "CAM DNV 형식승인 시험 (2024.05.30). 사내 시험실에서 DNV 심사관 입회로 진행" },
          { src: "assets/images/ship-03.jpg", caption: "태화호 교육실 ECDIS 대형 화면 설치 (2025.07)", wide: true },
          { src: "assets/images/ship-01.jpg", caption: "INS 콘솔 장비 랙" }
        ],
        links: []
      }
    },
    {
      id: "ksoe-lv1",
      featured: true,
      competency: "monitor",
      title: "HD한국조선해양 스마트포털 - Lv.1 Global Scale View",
      headline: "전 지구 기상과 선박 2,000척을 지구본에 표시하는 Lv.1 화면",
      subtitle: "스마트포털 Lv.1 화면. 0.5° 기상 격자를 입자 애니메이션으로 그리고 선박 위치와 항로를 함께 표시",
      org: "오션웨이즈(엠알씨 자회사), HD한국조선해양 디지털연구랩",
      period: "2025.02 ~ 2025.11 (2차년도 2026.04 ~ 11)",
      role: "7명 / Lv.1 Globe Scale View 개발",
      tags: ["Vue 3", "D3", "Web Worker", "SSE", "Spring Boot", "Docker"],
      thumbnail: "assets/images/sp-lv1-wind.jpg",
      metrics: [
        { label: "기상 격자", value: "0.5°, D+10" },
        { label: "선박", value: "2,000척" },
        { label: "입자", value: "최대 12,000개" }
      ],
      detail: {
        background: [
          "HD한국조선해양 자율운항선박 통합브릿지 과제의 스마트포털 시제품",
          "Lv.1 전 지구, Lv.2 해역, Lv.3 항만 화면이 한 플랫폼에서 연동"
        ],
        myRole: [
          "Lv.1 요구사항명세서와 상세설계서 작성",
          "지구본 렌더링, 바람·조류·파도 애니메이션, SSE 연동, 항로-기상 시뮬레이션",
          "Weather API, 항적 조회 API, Docker 빌드"
        ],
        approach: [],
        problem: [
          "문제: 확대하면 바람 애니메이션이 멈춘 것처럼 보임 (2025.07 중간보고 지적)",
          "원인: 입자 속도가 픽셀 기준 상수, 계산이 메인 스레드에 있음",
          "해결: 투영 배율로 매 프레임 재계산, 입자 계산을 Web Worker로 분리"
        ],
        result: [
          "수정 요청 8건 반영, 2025.10 기능 완료",
          "같은 발주처의 2차년도, 레이더 영상, 차도선 과업으로 이어짐"
        ],
        images: [
          { src: "assets/images/sp-lv1-wind.jpg", caption: "Lv.1 Global Scale View. 전 지구 바람 입자 애니메이션과 풍속 오버레이(0~50 m/s), 자선 위치", wide: true },
          { src: "assets/images/sp-lv1-currents.jpg", caption: "Lv.1 조류 오버레이(0~1.5 m/s). 레이어마다 색상 스케일과 입자 설정을 따로 둠", wide: true },
          { src: "assets/images/sp-lv2-ocean.jpg", caption: "Lv.2 Ocean Scale View. 해역 축척의 바람장과 자선, 타선 (연동 화면)" },
          { src: "assets/images/sp-lv3-vts.jpg", caption: "Lv.3 VTS Scale View. 항만 3D 지형과 건물 위의 자선과 안전 반경 (연동 화면)" }
        ],
        links: []
      }
    },
    {
      id: "nms",
      featured: true,
      competency: "data",
      title: "선박용 NMS - IACS UR E26/E27 대응",
      headline: "IACS UR E26/E27 대응 선박용 NMS 설계와 개발",
      subtitle: "선내 네트워크 장비를 SNMP, Syslog, Trap으로 감시하는 자사 NMS. 육상관제 포털에도 같은 화면 내장",
      org: "엠알씨 자사 제품, 육상관제 플랫폼 내장",
      period: "2025.12 ~ 2026.05",
      role: "개발 (요구사항 정의부터 배포까지)",
      tags: ["Java 17", "Spring Boot", "SNMP4J", "Vue 3", "PostgreSQL", "Docker"],
      thumbnail: "assets/images/nms-dashboard.jpg",
      metrics: [
        { label: "규정 매핑", value: "E26/E27 68건" },
        { label: "폴링", value: "SNMP 10초" },
        { label: "화면", value: "23개" }
      ],
      detail: {
        background: [
          "IACS UR E26/E27이 요구하는 선내 네트워크 감시와 보안 이벤트 기록",
          "LibreNMS 검토 후 규정 매핑, 폐쇄망, 플랫폼 내장 문제로 자체 개발"
        ],
        myRole: [
          "요구사항 65건 정의, E26/E27 조항 매핑 68건",
          "화면 23개와 3계층 구조, API 설계",
          "백엔드(Spring Boot, SNMP4J)와 프론트엔드(Vue 3) 구현, Docker 배포"
        ],
        approach: [],
        problem: [
          "문제: 장비가 응답하지 않아도 이벤트가 남지 않음",
          "원인: 통계와 임계치 판정이 다른 스케줄러에 나뉘어 상태 변화를 잡는 곳이 없음",
          "해결: 수집 파이프라인을 하나로 합치고 직전 상태와 비교해 이벤트 기록"
        ],
        result: [
          "설계 1개월, 구현 2개월로 첫 버전 완성",
          "2026.04 육상관제센터 시스템에 내장, 자사 솔루션으로 납품 예정"
        ],
        images: [
          { src: "assets/images/nms-dashboard.jpg", caption: "대시보드. 토폴로지 요약, 심각도별 이벤트 집계, 트래픽과 CPU, 메모리 Top5 (육상관제 포털 내장 버전)", wide: true },
          { src: "assets/images/nms-topology.jpg", caption: "네트워크 토폴로지. Zone(서버실, 상황실) 자동 구성, 장애 장비 강조, Tree/Graph 전환", wide: true },
          { src: "assets/images/nms-switch.jpg", caption: "스위치 상세. 장비 정보, 포트 30개의 상태와 In/Out, CPU와 메모리, 포트별 트래픽" },
          { src: "assets/images/nms-events.jpg", caption: "이벤트 로그. Info, Caution, Warning, Critical 4단계와 카테고리, 장비, 위험도 필터" },
          { src: "assets/images/nms-devices.jpg", caption: "장비 목록. 제조사, 타입, IP, 가동 시간, 구역" }
        ],
        links: []
      }
    },
    {
      id: "asterix-cat240",
      featured: true,
      competency: "data",
      title: "레이더 영상 코덱 - ASTERIX CAT240",
      headline: "Navico 레이더 영상을 ASTERIX CAT240으로 바꾸는 코덱과 변환기",
      subtitle: "레이더 영상을 ASTERIX CAT240 표준으로 인코딩·디코딩하는 코덱 DLL과 Navico 레이더 변환기. 자사 RADAR와 ECDIS에 탑재",
      org: "엠알씨, HD한국조선해양 스마트포털 2차년도",
      period: "2026.05 ~ 2026.07 (설치 2026.09)",
      role: "개발",
      tags: ["C#", ".NET 10 Avalonia", "ASTERIX CAT240", "Navico Radar SDK", "C++", "UDP 멀티캐스트"],
      thumbnail: "assets/images/asterix-radar-cat240.jpg",
      metrics: [
        { label: "회전당", value: "2,048 스포크" },
        { label: "처리량", value: "초당 832 스포크" },
        { label: "설치", value: "태화호 2026.09" }
      ],
      detail: {
        background: [
          "스마트포털 2차년도 INS 업데이트 과업",
          "자사 RADAR와 타사 레이더 사이에서 영상을 CAT240 표준으로 교환"
        ],
        myRole: [
          "CAT240 규격 분석, 요구사항 정의서 20항목",
          "인코더·디코더 코덱 DLL, Navico2Cat240 변환기(Windows, Linux)와 서비스판",
          "PPI 검증 뷰어, RADAR·ECDIS에 DLL 연동"
        ],
        approach: [],
        problem: [
          "문제: 변환 영상의 표적 크기와 거리 축척이 원본과 다름",
          "원인: 방위 분해능(4,096)과 실제 스포크 수(2,048) 불일치, 헤더 시간 단위(ns) 오차",
          "해결: 실측 스포크 폭 API 추가, 시간 단위를 펨토초로 변경"
        ],
        result: [
          "회전당 2,048 스포크, 초당 832 스포크 실시간 변환",
          "2026.09 실선 설치, 코덱 DLL을 자사 RADAR와 ECDIS에 탑재"
        ],
        images: [
          { src: "assets/images/asterix-radar-cat240.jpg", caption: "자사 RADAR S/W(MNS-100R). 수신한 ASTERIX CAT240 영상을 PPI에 표시. 코덱 DLL 탑재", wide: true },
          { src: "assets/images/asterix-navico2cat240.jpg", caption: "Navico2Cat240. 레이더 접속, CAT240 멀티캐스트 송신 설정(SAC/SIC, 해상도, zlib, 방위 기준), 송수신 통계, Dump/Log", wide: true, fit: "contain" }
        ],
        links: []
      }
    },
    {
      id: "gateway-dnv",
      featured: true,
      competency: "security",
      title: "보안 게이트웨이 - DNV 사이버보안 인증",
      headline: "보안 게이트웨이 DNV 사이버보안 인증 문서와 보안 기능 시험",
      subtitle: "자사 게이트웨이의 DNV Cyber Secure(SP1) 요구 49항목을 시험하고 제출 문서 10종 작성",
      org: "엠알씨 기술연구소, DNV, 펌웨어 공급사",
      period: "2026.09 ~ 진행 중",
      role: "3명 / 제출 문서, 보안 기능 시험",
      tags: ["IEC 62443-3-3", "DNV-RU-SHIP Pt.6 Ch.5", "IACS UR E27", "Wireshark, nmap, ZAP"],
      thumbnail: "assets/images/gateway-sp1-summary.jpg",
      metrics: [
        { label: "SP1 요구", value: "49항목" },
        { label: "제출 문서", value: "10종" },
        { label: "공급사 결함 전달", value: "24건" }
      ],
      detail: {
        background: [
          "존 경계를 보호하는 장비는 보안 프로파일별 요구를 충족해야 함",
          "IEC 62443-3-3 기반 SP1 49항목을 제품 기능과 대조"
        ],
        myRole: [
          "보안 기능 기술서, 하드닝 지침, 사고 대응과 복구 등 영문 제출 문서 10종",
          "보안 기능 시험 절차(49항목)와 선내 검증 절차(46항목) 작성",
          "랩 시험에서 찾은 결함 24건을 재현 절차와 함께 공급사에 전달"
        ],
        approach: [],
        problem: [
          "문제: 계정 비활성화, 암호 정책 등 제품 그대로는 충족하지 못하는 요구. 펌웨어는 외부 공급사 제품이라 자체 수정 불가",
          "해결: 규칙이 인정하는 보완대책으로 문서화. 계정과 암호 정책은 RADIUS/LDAP 중앙 인증으로 대체"
        ],
        result: [
          "49항목 판정: 충족 36, 보완대책 3, 해당 없음 10",
          "제출 문서 10종 패키징(2026.10.15), DNV 심사 예정"
        ],
        images: [
          { src: "assets/images/gateway-sp1-summary.jpg", caption: "SP1 요구 49항목 판정 결과와 제출 문서 10종 (인증서가 나오면 교체 예정)", wide: true }
        ],
        links: []
      }
    },
    {
      id: "ess-remote",
      featured: true,
      competency: "monitor",
      title: "차도선 ESS 원격 모니터링 - 육상 관제 서버와 Web UI",
      headline: "차도선 ESS와 추진계를 육상에서 감시하는 관제 서버와 Web UI",
      subtitle: "HD한국조선해양 EP솔루션기술부 용역. 관제 서버와 Web UI 개발",
      org: "엠알씨, HD한국조선해양 EP솔루션기술부",
      period: "2026.09 ~ 2026.12",
      role: "4명 / 관제 서버, Web UI",
      tags: ["Vue 3", "Spring Boot", "InfluxDB", "WebSocket", "three.js", "IACS UR E26/E27"],
      thumbnail: "assets/images/ess-01.jpg",
      metrics: [
        { label: "수집 주기", value: "1초" },
        { label: "수집 포인트", value: "척당 약 2,500" },
        { label: "상태", value: "납품 진행 중" }
      ],
      detail: {
        background: [
          "선내 DAQ가 모은 데이터를 LTE로 육상 서버에 전송, 웹에서 상태 확인과 진단",
          "제어와 알람은 MQTT, 시계열은 gRPC로 수신. 웹에서 가동 현황, 고장, ESS 상세, 보고서 확인"
        ],
        myRole: [
          "수집 서버가 PostgreSQL과 InfluxDB에 저장한 데이터를 관제 서버에서 가공해 REST와 WebSocket으로 제공",
          "관제 화면 설계, Admin/Operator/Viewer 권한별 화면, 보고서 PDF·Excel·Word 내보내기",
          "실제 장비를 연결한 연동 시험에서 데이터가 유실되는 지점과 프로토콜 불일치 해결"
        ],
        approach: [],
        problem: [
          "문제: 표 형식 요구사양서만으로는 고객과 화면 협의가 진척되지 않음",
          "해결: 동작하는 시제품을 먼저 만들어 고객이 조작해 보며 의견을 내게 함"
        ],
        result: [
          "관제 화면 설계 확정, Web UI와 관제 서버 API 연동 완료",
          "2026.11 개발 완료, 납품 진행 중"
        ],
        images: [
          { src: "assets/images/ess-01.jpg", caption: "선박 3D 현황. 이동식 ESS 2기, 추진 전동기 상태, 운항 정보, 최근 알람", wide: true },
          { src: "assets/images/ess-02.jpg", caption: "HOME. Fleet 요약, 선택한 선박의 3D, 항로 지도, 에너지 사용량, Alarm Center" },
          { src: "assets/images/ess-03.jpg", caption: "BADA-100 현황. Fleet 전체 BANK 표, BANK별 SOC와 SOH, 미확인 고장과 알람" },
          { src: "assets/images/ess-04.jpg", caption: "ESS 상세. BANK의 RACK 12기 3D 배열, 셀 전압과 온도, 시스템 상태", wide: true },
          { src: "assets/images/ess-05.jpg", caption: "RACK 상세. 모듈과 셀 전압 격자, 모듈별 온도, Rack I/O" },
          { src: "assets/images/ess-06.jpg", caption: "온도 히트맵. Rack과 Module별 셀 온도 평균" },
          { src: "assets/images/ess-07.jpg", caption: "PEMS. 추진계 전력 흐름 단선도, 전력 분배, 장비 상태", wide: true },
          { src: "assets/images/ess-08.jpg", caption: "Powermap. 온도와 SOC에 따른 충·방전 허용 전력" },
          { src: "assets/images/ess-09.jpg", caption: "트렌드 분석. Usable SOC, Rated SOC, SOH, 시스템 전압. CSV와 Parquet 내려받기" },
          { src: "assets/images/ess-10.jpg", caption: "MAP. 선단 지도, 선박 위치와 SOC" },
          { src: "assets/images/ess-11.jpg", caption: "데이터 수신 현황. 선박별 수신 주기와 지연, 유실. LTE가 끊기면 선내에 임시 저장했다가 다시 보냄" },
          { src: "assets/images/ess-12.jpg", caption: "Fleet 운영보고서. A4 미리보기, PDF, Excel, Word 내보내기" },
          { src: "assets/images/ess-13.jpg", caption: "ESS와 사용자 관리. BANK 관리, DAQ 연결, 감사 로그 (Admin)" },
          { src: "assets/images/ess-14.jpg", caption: "다크 모드. 관제실용", wide: true }
        ],
        links: []
      }
    },
    {
      id: "ecdis-abs",
      featured: false,
      competency: "security",
      title: "ECDIS ABS 사이버보안 인증 참여 - IACS UR E27",
      headline: "ECDIS ABS 사이버보안 인증의 시험 절차서 작성과 입회 시험 참여",
      subtitle: "팀장이 주관한 ECDIS(MNS-100E) ABS 인증입니다. 시험 절차서 작성에 참여했고, 입회 시험을 함께 했습니다.",
      org: "엠알씨, ABS",
      period: "2025.08 ~ 2026.02",
      role: "3인 팀, 절차서 작성과 시험 참여",
      tags: ["IACS UR E27", "IEC 62443-3-3", "ABS"],
      thumbnail: "",
      metrics: [],
      detail: {
        background: ["2024년 7월 이후 계약한 선박부터 적용되는 E27에 따라, ECDIS가 Table 1의 요구 30항목을 충족한다는 것을 ABS로부터 인증받는 과제입니다."],
        myRole: ["시험 절차서(CSI-TED-004) 작성에 참여했습니다.", "2026년 2월 2일 ABS 검사관 입회 시험에 참여했습니다."],
        approach: [],
        problem: [],
        result: ["2026년 2월 ABS 입회 시험을 마쳤고, 심사 코멘트에 대응하고 있습니다."],
        images: [],
        links: []
      }
    }
  ]
};
