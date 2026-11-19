/* =====================================================================
   포트폴리오 데이터 — 유지선 / Software Engineer
   모든 문구는 이 파일에서 관리합니다. 이미지는 assets/images/ 에 넣고 경로를 적습니다.
   detail 의 각 항목은 문자열(문단) 또는 배열(불릿) 둘 다 됩니다.
   2026-11-15 v5: 문장 전체를 자연스러운 한국어로 다듬음. 화살표(→) 나열, "단독 개발", "한 일" 같은 표현 제거.
   2026-11-18 v6: 가운뎃점 나열·긴 줄표·과시형 숫자 정리, 대형시험선(P180) 삭제, 차도선 납품 진행 중 반영.
   제목(title)은 "제품명 - 부제" 형식. main.js / project.js / _build_deck.js 가 " - " 앞부분을 짧은 이름으로 씀.
   ===================================================================== */

window.PORTFOLIO = {

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
    lead: "선박 항법장비 제조사 기술연구소에서 3년째 일하고 있습니다. C#/.NET 기반 장비 제어 소프트웨어와 Vue, Spring 기반 모니터링 시스템을 개발했고, DNV와 ABS 선급 인증 대응 경험이 있습니다.",
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
      { name: "SNMP v2c/v3, Syslog, Trap", level: "실무", note: "10초 주기 폴링, 1분 단위 집계" },
      { name: "Modbus TCP, 접점 입력", level: "활용", note: "접점 입력을 경보로 변환" }
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
        "INS 형식승인 시험용 항법 센서 20종 시뮬레이터 개발",
        "경보관리장치 CAM 개발, StandAlone과 INS 연동형 DNV 형식승인 취득",
        "HD한국조선해양 스마트포털 Lv.1 전 지구 기상 화면 설계와 개발",
        "IACS UR E26/E27 대응 선박용 NMS 개발",
        "ASTERIX CAT240 레이더 영상 코덱과 변환기 개발, 태화호 설치",
        "보안 게이트웨이 DNV 사이버보안 형식승인 제출 문서 작성",
        "차도선 ESS 원격 모니터링 육상 관제 서버와 Web UI 개발 (HD한국조선해양)"
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
    { image: "assets/images/cert-cam-dnv.jpg", title: "DNV 형식승인 TAA00003HV (CAM, MNS-100CA)", desc: "2025.02.26 발급, 2030.02.25까지 유효. IMO MSC.302(87), IEC 62923-1/2 기준. StandAlone과 INS 연동형 두 구성" },
    { image: "assets/images/cert-ins-med.jpg", title: "MED 인증 MEDB00008ST (HiINS 통합항법시스템)", desc: "HD현대마린솔루션 HiINS 구성품에 CAM 포함. 2025.01.10 발급, INS 인증 시험 참여" },
    { image: "assets/images/cert-rina.jpg", title: "RINA Academy Cyber Resilience (IACS UR E26/E27)", desc: "교육 수료, 2026.06.26, No. 2026PU0626T" }
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

  /* 공고의 주요 업무 세 가지와 그에 해당하는 경험. 아래 프로젝트는 이 세 가지로 분류합니다. */
  competencies: [
    {
      id: "control",
      jd: "제품 Control S/W 개발",
      title: "경보관리장치를 IEC 62923에 맞춰 개발하고 DNV 형식승인을 받았습니다",
      bridge: "입력 신호로 상태를 판단해 경보와 제어 신호를 내보내고, 선급 규격을 지켜야 한다는 점에서 파나시아 제품(Scrubber, BWTS, SCR)의 제어 소프트웨어와 하는 일이 비슷합니다.",
      facts: ["CAM DNV 형식승인 (StandAlone, INS 연동형)", "태화호, 한바다호 등 선박 설치와 연동", "항법 센서 20종 시뮬레이터 개발"],
      projects: ["cam-dnv", "ins-simulator"]
    },
    {
      id: "data",
      jd: "Data 처리장치 개발",
      title: "레이더, 네트워크 장비, ESS 데이터를 받아 처리하고 화면에 보여 주는 소프트웨어를 만들었습니다",
      bridge: "선내 DAQ가 모은 데이터를 LTE로 육상 서버에 보내 웹에서 보는 차도선 모니터링은, 위성통신으로 장비 데이터를 모아 리포트를 만드는 파나시아 MSCS와 구조가 비슷합니다.",
      facts: ["Navico 레이더 영상을 CAT240으로 실시간 변환", "네트워크 장비 SNMP 10초 수집, 1분 집계", "척당 약 2,500 포인트를 1초마다 받는 ESS 관제 서버와 화면"],
      projects: ["asterix-cat240", "nms", "ess-remote", "ksoe-lv1"]
    },
    {
      id: "security",
      jd: "S/W 보안 설계 적용",
      title: "IACS UR E26/E27과 IEC 62443 요구사항을 기능으로 만들고 선급 심사 문서를 썼습니다",
      bridge: "2024년 7월 이후 계약한 선박부터 탑재 장비에 E27이 적용됩니다. 네트워크에 연결되는 제어 장비와 MSCS 연동 장비도 같은 요구를 받습니다.",
      facts: ["게이트웨이 DNV SP1 요구 49항목 시험과 판정", "NMS에 계정 정책, 접근 제어, 감사 로그 구현", "ECDIS ABS E27 인증 입회 시험 참여"],
      projects: ["gateway-dnv", "nms", "ecdis-abs"]
    }
  ],

  projects: [
    {
      id: "ins-simulator",
      featured: true,
      competency: "control",
      title: "INS 시뮬레이터 - 항법 센서 20종",
      headline: "형식승인 시험에 쓰는 항법 센서 20종 시뮬레이터",
      subtitle: "INS 형식승인 시험에 필요한 센서 입력을 실물 장비 대신 만들어 보내는 Windows 프로그램입니다. 입사 후 첫 프로젝트였고, 2026년 11월부터 HD현대 공급용 v2로 개선하고 있습니다.",
      org: "엠알씨 기술연구소 (사내)",
      period: "2024.02 ~ 2024.05 (v2 2026.11 ~)",
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
          "INS 형식승인 시험에서는 GPS, 자이로, 속력계, AIS, NAVTEX 같은 센서 문장을 시험 항목마다 정해진 조건으로 넣어야 합니다. 실물 장비로는 원하는 값을 만들기 어렵습니다.",
          "그래서 20종 센서의 NMEA 문장을 만들어 보내는 시뮬레이터를 개발했습니다."
        ],
        myRole: [
          "기획, 설계, 구현, 검증을 맡았습니다.",
          "장비 20종 설정 화면, 장비별 생성 스레드, Serial/UDP 전송 관리를 만들었습니다.",
          "AIS 6bit 인코딩과 VDM/VDO 다중 문장 분할, NAVTEX NRX 문장 분할을 구현했습니다.",
          "IEC 61162-450 TAG block과 멀티캐스트 송신, 전송 모니터, 설정 저장, 덤프 파일 재생 기능을 넣었습니다."
        ],
        approach: [
          "v1(2024)은 장비 20종을 종류당 최대 10대까지 동시에 송신하고, 문장마다 주기, Talker ID, 체크섬 여부를 정할 수 있습니다.",
          "v2(2026)에서는 값을 화면 컨트롤이 아니라 모델(ShipState, DeviceModel, SentenceModel)에 두도록 바꿨습니다.",
          "장비와 문장은 정의 기반 카탈로그로 관리하고, 자선(Own Ship) 공통 상태를 두어 센서끼리 값이 어긋나지 않게 했습니다.",
          "문장별 필드 편집기, 82자 길이 검사, 시나리오 저장, TX/RX 모니터를 추가했습니다. 기존 화면은 --classic 옵션으로 그대로 쓸 수 있습니다."
        ],
        problem: [
          "문제: 장비 여러 대를 동시에 돌리면 수신 장비에서 타임아웃이 났습니다.",
          "원인: 장비마다 루프 하나로 송신했기 때문에, 주기가 불규칙한 AIS 다중 문장이 GPS(1 Hz)와 자이로(10 Hz) 문장을 밀어냈습니다.",
          "해결: 문장마다 별도 스레드에서 송신하도록 바꿔, 한 문장이 늦어져도 다른 문장에는 영향이 없게 했습니다 (2024.07).",
          "v2 작업 중 코드를 다시 읽으면서 UTC 소수부 형식, AIS fill bit, NRX 예약 문자, 82자 제한 같은 규격 오류 18건을 찾아 고쳤습니다."
        ],
        result: [
          "INS DNV 형식승인 시험의 입력원으로 쓰였고, 지금은 사내 표준 시험 도구입니다.",
          "테스트가 없던 코드에 v2에서 단위 테스트 62건을 붙였습니다.",
          "HD현대 공급용 v2를 2026년 11월부터 만들고 있습니다."
        ],
        images: [
          { src: "assets/images/ins-v2-gps.jpg", caption: "v2 (2026) GPS1 화면. 장비 목록과 포트, 주기, 문장별 생성 문자열과 상태, 필드 편집기, 자선 공통 패널, TX/RX 모니터", wide: true },
          { src: "assets/images/ins-v2-gyro.jpg", caption: "v2 GYRO1 화면. HDG, HDT, ROT, THS 문장. 자침 방위는 자선의 진방위, 편차, 자차로 계산" },
          { src: "assets/images/ins-v2-navtex.jpg", caption: "v2 NAVTEX1 화면. NRM 수신 마스크, NRX 3문장 분할, 예약 문자 ^HH 인코딩" },
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
      subtitle: "브리지 장비의 경보를 모아 표시하고 확인(ACK)과 소음(Silence)을 처리하는 CAM입니다. StandAlone과 INS 연동형 두 구성 모두 DNV 형식승인을 받았습니다.",
      org: "엠알씨 기술연구소, DNV, HD현대마린솔루션 HiINS",
      period: "2024.05 ~ 2024.12 (유지보수 2025 ~)",
      role: "3인 팀, 개발과 두 구성의 인증 담당",
      tags: ["C#", ".NET", "IEC 62923-1/2", "IEC 61162-450", "PostgreSQL"],
      thumbnail: "assets/images/cam-01.jpg",
      metrics: [
        { label: "DNV 형식승인", value: "TAA00003HV" },
        { label: "기준", value: "IEC 62923-1/2" },
        { label: "설치", value: "태화호, 한바다호 외" }
      ],
      detail: {
        background: [
          "HD현대마린솔루션 HiINS 통합항법시스템에 들어가는 CAM을 새로 개발했습니다.",
          "IEC 62923-1/2는 경보의 상태 전이, 확인과 소음 조건, 집계와 그룹핑, 재평가 동작을 조항과 시험 방법으로 정해 두고 있고, DNV 심사관이 항목마다 입회해 확인합니다."
        ],
        myRole: [
          "경보 집계와 그룹핑, Top Alert, 재평가, CAM 자체 경보의 확인과 소음 처리를 구현했습니다.",
          "MDCU-100D 접점 입력 파싱과 Dry Contact 시험, CAM/CID 모드 분기와 MFD 전환을 만들었습니다.",
          "Main/Backup 데이터 동기화, Serial 통신, SmartPortal 연동을 맡았습니다.",
          "태화호, 한바다호, HD현대 INS 콘솔 납품 선박에서 장비를 설치하고 연동했습니다."
        ],
        approach: [
          "DNV 시험 항목표를 기준으로 조항과 코드 위치를 대조한 체크리스트를 만들고, 자체 시험을 거친 뒤 심사를 받았습니다.",
          "커밋을 시험 항목 단위로 나누고, 내장 시뮬레이터와 INS 시뮬레이터로 항목별 동작을 재현해 봤습니다.",
          "집계, 그룹핑, 재평가 규칙은 PostgreSQL 규칙 테이블과 메모리 상태로 나눠 관리했습니다."
        ],
        problem: [
          "문제: 그룹 헤더와 개별 경보 사이의 확인 전파 규칙이 코드 곳곳에 흩어져 있어, 시험 항목별로 검증하기 어려웠습니다.",
          "해결: 규칙을 테이블 한곳으로 모으고, 항목마다 재현 시나리오를 만들어 심사 전에 미리 돌려 봤습니다."
        ],
        result: [
          "DNV 형식승인 TAA00003HV (MNS-100CA). 2025.02.26 발급, 2030.02.25까지 유효하며 기능 유형은 BAM P1과 CAM Q1, 구성에 따라 S1과 R1입니다.",
          "HiINS 통합항법시스템(MED 인증 MEDB00008ST)의 구성품으로 들어갔습니다."
        ],
        images: [
          { src: "assets/images/cam-01.jpg", caption: "Active Alert 화면. 우선순위와 카테고리별 경보 목록, 집계 아이콘, 선택한 경보의 상세", wide: true },
          { src: "assets/images/cam-03.jpg", caption: "Active Alert 화면. ECDIS, RADAR, GPS 등 소스별 경보와 확인 상태" },
          { src: "assets/images/cam-02.jpg", caption: "Alert History 화면. 발생, 확인, 해제 시각" },
          { src: "assets/images/ins-07.jpg", caption: "INS 구성. 워크스테이션 5대와 센서 허브" },
          { src: "assets/images/ship-03.jpg", caption: "태화호 교육실 ECDIS 대형 화면 설치 (2025.07)", wide: true },
          { src: "assets/images/ship-01.jpg", caption: "INS 콘솔 장비 랙" }
        ],
        links: []
      }
    },
    {
      id: "ksoe-lv1",
      featured: true,
      competency: "data",
      title: "HD한국조선해양 스마트포털 - Lv.1 Global Scale View",
      headline: "전 지구 기상과 선박 2,000척을 지구본에 표시하는 Lv.1 화면",
      subtitle: "전 지구(Lv.1), 해역(Lv.2), 항만(Lv.3) 화면으로 이어지는 스마트포털에서 Lv.1을 맡았습니다. 0.5° 간격 기상 격자를 지구본 위에 입자 애니메이션과 색상 오버레이로 그리고, 선박 위치와 항로, 밀도를 겹쳐 보여 줍니다.",
      org: "오션웨이즈(엠알씨 자회사), HD한국조선해양 디지털연구랩",
      period: "2025.02 ~ 2025.11 (2차년도 2026.04 ~ 11)",
      role: "7인 팀, Lv.1 프론트엔드 전체와 백엔드 API",
      tags: ["Vue 3", "D3", "Web Worker", "SSE", "Spring Boot", "Docker"],
      thumbnail: "assets/images/sp-lv1-wind.jpg",
      metrics: [
        { label: "기상 격자", value: "0.5°, D+10" },
        { label: "선박", value: "2,000척" },
        { label: "입자", value: "최대 12,000개" }
      ],
      detail: {
        background: [
          "HD한국조선해양의 자율운항선박 차세대 통합브릿지 과제에서 만든 스마트포털 시제품입니다.",
          "Lv.1 전 지구, Lv.2 해역, Lv.3 항만 3D 화면이 한 플랫폼에서 연동되고 INS, IAS, ISS 데이터를 공유합니다.",
          "선상 65인치 터치스크린, 태블릿, 원격운영센터 콘솔에서 씁니다."
        ],
        myRole: [
          "Lv.1 요구사항명세서와 상세설계서를 썼습니다 (2025.04~05).",
          "Lv.1 프론트엔드를 개발했습니다. 지구본 렌더링과 투영, Tilt, N-UP/H-UP, 바람과 조류, 파도 애니메이션과 오버레이가 들어갑니다.",
          "시간 패널, SSE 연동, 즐겨찾기, 항로-기상 시뮬레이션, Mini-Map, Density Map, 터치 조작, 권한 연동, Docker 빌드도 맡았습니다.",
          "백엔드는 Weather API, 항적 조회 API, 항로-기상 시뮬레이션 쿼리를 만들었습니다."
        ],
        approach: [
          "기상 데이터는 NOAA 기반 KSOE DB를 씁니다. 현재값과 D+10 예측을 6시간마다 갱신하고 격자 간격은 0.5°입니다.",
          "AIS는 위성 AIS와 선내 AIS를 이중으로 받고, 자선과 타선, 알람은 SSE로 5초마다 갱신합니다.",
          "입자 이동 계산은 Web Worker에서 하고 메인 스레드에는 좌표 배열만 넘깁니다.",
          "2차년도(2026)에는 Lv.1 기능 보완, 기능 코드 기반 4단계 권한 연동, INS 입출력 데이터 명세서 작성을 했습니다."
        ],
        problem: [
          "문제: 2025년 7월 중간보고에서 축척에 따라 바람 애니메이션이 달라지고, 최대로 확대하면 보이지 않는다는 지적을 받았습니다.",
          "원인: 입자 수, 속도, 수명이 화면 픽셀 기준 상수라서 확대할수록 지리적 이동량이 줄어 멈춘 것처럼 보였습니다. 계산이 메인 스레드에 있어 입자를 늘리면 조작이 끊겼습니다.",
          "해결: 애니메이션 값을 투영 scale에 따라 매 프레임 다시 계산하도록 바꾸고, 입자 계산을 Web Worker로 옮겼습니다. 이제 축척과 관계없이 같은 속도로 보이고, 입자 12,000개에서도 조작이 끊기지 않습니다."
        ],
        result: [
          "7월 수정 요청 8건을 7월 31일까지 반영했고, 10월에 기능을 마쳐 10월 31일과 11월 14일에 완료보고를 했습니다.",
          "요구사항에 없던 Mini-Map, Density Map, AIS 진행방향 예측을 추가로 만들었습니다.",
          "같은 발주처의 2차년도 업그레이드와 차도선 원격 모니터링 과업으로 이어졌습니다."
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
      competency: "security",
      title: "선박용 NMS - IACS UR E26/E27 대응",
      headline: "IACS UR E26/E27 대응 선박용 NMS 설계와 개발",
      subtitle: "선내 네트워크 장비를 SNMP, Syslog, Trap으로 감시하는 자사 제품입니다. 요구사항 정의부터 배포까지 맡았고, 육상관제 포털에도 같은 화면이 들어갑니다.",
      org: "엠알씨 자사 제품, 육상관제 플랫폼 내장",
      period: "2025.12 ~ 2026.03 (개선 2026.09 ~ 11)",
      role: "개발",
      tags: ["Java 17", "Spring Boot", "SNMP4J", "Vue 3", "PostgreSQL", "Docker"],
      thumbnail: "assets/images/nms-dashboard.jpg",
      metrics: [
        { label: "규정 매핑", value: "E26/E27 68건" },
        { label: "폴링", value: "SNMP 10초" },
        { label: "화면", value: "23개" }
      ],
      detail: {
        background: [
          "2024년 7월 이후 계약한 선박에 적용되는 IACS UR E26(선박)과 E27(탑재 장비)은 선내 네트워크 상태 감시와 보안 이벤트 기록을 요구합니다.",
          "LibreNMS 도입도 검토했지만 규정 매핑, 폐쇄망 반입, 육상관제 플랫폼 내장, 라이선스 문제로 자체 개발했습니다."
        ],
        myRole: [
          "요구사항 65건을 정의하고 E26/E27 조항과 매핑했습니다.",
          "화면 23개와 3계층 구조, 엔티티, API를 설계했습니다.",
          "백엔드(Spring Boot, SNMP4J)와 프론트엔드(Vue 3)를 구현했습니다.",
          "Docker 배포본과 단독 실행 패키지, 포털 내장 빌드를 만들고 매뉴얼과 카탈로그를 썼습니다."
        ],
        approach: [
          "보안 요구사항은 설계 단계에서 규정 조항과 함께 정했습니다. 역할 3단계, 암호 10자 이상과 90일 변경, 재사용 금지, 세션 30분, 5회 실패 시 잠금, IP 접근 제어, MAC 화이트리스트, 접근 로그, NTP, 30일 원본 보존과 1년 평균값 보존을 넣었습니다.",
          "SNMP는 10초마다 50개 스레드로 폴링하고, 누적 카운터를 bps로 바꿔 1분 평균을 JDBC 배치로 저장합니다.",
          "LLDP와 SNMP로 물리 연결을 찾아 Zone 단위 토폴로지를 자동으로 그립니다.",
          "한 소스에서 단독 실행판과 포털 내장판을 빌드하고, Docker가 없는 현장을 위해 jar 패키지도 만들었습니다."
        ],
        problem: [
          "문제: 장비가 응답하지 않으면 화면에는 Down으로 나오지만 이벤트가 생기지 않아, 장애와 복구 시각이 남지 않았습니다.",
          "원인: 실시간 통계, 포트 통계, 임계치 판정이 서로 다른 스케줄러에 나뉘어 있어 상태 변화를 잡는 곳이 없었습니다.",
          "해결: 수집 파이프라인을 하나로 합치고 직전 상태와 비교하는 규칙을 한곳에 뒀습니다. 이제 단절, 복구, Link Up/Down 이벤트가 상태가 바뀔 때마다 한 건씩 남습니다."
        ],
        result: [
          "설계 1개월, 구현 2개월로 첫 버전을 만들었고, 2026년 4월 육상관제센터 서비스통합관리시스템에 화면 8개를 넣었습니다. 자사 솔루션으로 납품할 예정입니다.",
          "2026년 10월 개선 요구 11건을 반영했습니다. 단절과 복구 이벤트가 실제로 상태가 바뀐 시각으로 기록되고, 포트 상태는 1분 안에 반영됩니다.",
          "초기에는 API가 permitAll이고 비밀값이 저장소에 들어 있었는데, 모드별 인가, 감사 로그, 계정 잠금, 비밀값 분리로 바꿨습니다."
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
      subtitle: "EUROCONTROL ASTERIX CAT240 인코더/디코더 DLL과, Navico 레이더 스포크를 CAT240 UDP 멀티캐스트로 바꿔 보내는 Navico2Cat240(Windows, Linux)을 만들었습니다. DLL은 자사 RADAR와 ECDIS에 들어갔고, 2026년 9월 태화호에 설치했습니다.",
      org: "엠알씨, HD한국조선해양 스마트포털 2차년도",
      period: "2026.04 ~ 2026.07 (설치 2026.09, 확장 2026.10)",
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
          "스마트포털 2차년도 INS 업데이트 과업입니다. 자사 RADAR와 타사 레이더 사이에서 레이더 영상을 CAT240 표준으로 주고받아야 했습니다.",
          "변환한 스트림은 스마트포털 레이더 오버레이와 자사 ECDIS가 받아 표시합니다."
        ],
        myRole: [
          "CAT240 규격(데이터 항목, UAP, FSPEC, 타임스탬프)을 분석하고 요구사항 정의서 20항목을 썼습니다.",
          "인코더와 디코더가 들어간 코덱 DLL(netstandard2.0)을 개발했습니다.",
          "Navico2Cat240 변환기(.NET 10 Avalonia, C++ NavicoShim)와 Windows 서비스판을 만들고 Linux 설치 안내를 썼습니다.",
          "WPF OpenGL PPI 검증 뷰어를 만들고, 자사 RADAR S/W와 ECDIS에 DLL을 붙여 연동한 뒤 사용설명서를 썼습니다."
        ],
        approach: [
          "코덱 DLL 하나를 변환기, 서비스, 뷰어, RADAR, ECDIS가 같이 쓰고, 인코더/디코더 역할은 설정으로 고릅니다.",
          "스포크 폭은 호스트가 실측값을 넘겨주게 해서 코덱 안에 특정 장비 값을 박아 두지 않았습니다.",
          "검증 뷰어에 rpm, 0° 통과 주기, MSG_INDEX 끊김 횟수 계측을 넣었습니다.",
          "10월 확장에서 셀 해상도, zlib 압축, NB_CELLS 옵션, 진북 기준 방위 보정(규격 3.1.3)을 추가했습니다."
        ],
        problem: [
          "문제: 납품 전 검증에서 변환된 영상의 표적 크기와 거리 축척이 원본과 달랐습니다. 자사 ECDIS와 SPx RadarView 모두 같은 증상이었습니다.",
          "원인 1: 방위 분해능(4,096)과 실제 회전당 스포크 수(2,048)가 달라 스포크 폭이 절반으로 계산됐습니다.",
          "원인 2: 헤더 시간을 나노초로 쓰면 1 ns가 왕복 0.15 m로 끊겨, 근거리 축척이 수십 퍼센트 어긋났습니다.",
          "해결: 실측 스포크 폭을 넘기는 API를 추가하고 헤더 단위를 펨토초로 바꿨습니다. 환산 오차가 1%를 넘으면 경고를 띄웁니다."
        ],
        result: [
          "2026년 8월 중간보고에서 과업을 마쳤고, 9월 10일 태화호에 설치했습니다.",
          "회전당 2,048 스포크, 초당 832 스포크(약 24 rpm) 영상을 실시간으로 변환합니다.",
          "코덱 DLL은 자사 RADAR와 ECDIS에 탑재했습니다."
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
      title: "보안 게이트웨이 - DNV 사이버보안 형식승인 문서",
      headline: "보안 게이트웨이 DNV 사이버보안 형식승인 문서와 보안 기능 시험",
      subtitle: "자사 게이트웨이 MCG-100의 DNV Cyber Secure(SP1) 요구 49항목을 분석하고 시험해 문서로 정리했습니다. 보안 기능 기술서, 하드닝 지침, 시험 절차, 선내 검증 절차 등 제출 문서 10종을 썼습니다.",
      org: "엠알씨 기술연구소, DNV, 펌웨어 공급사",
      period: "2026.09 ~ 진행 중",
      role: "3인 팀, 문서 작성과 보안 기능 시험",
      tags: ["IEC 62443-3-3", "DNV-RU-SHIP Pt.6 Ch.5", "IACS UR E27", "Wireshark, nmap, ZAP"],
      thumbnail: "assets/images/gateway-sp1-summary.jpg",
      metrics: [
        { label: "SP1 요구", value: "49항목" },
        { label: "제출 문서", value: "10종" },
        { label: "공급사 결함 전달", value: "24건" }
      ],
      detail: {
        background: [
          "선급 사이버보안 규정에서 존 경계를 보호하는 장비는 보안 프로파일별 요구사항을 충족해야 합니다.",
          "IEC 62443-3-3을 바탕으로 한 SP1 49항목을 제품 기능과 대조하고, 시험과 검증, 운용 문서를 썼습니다.",
          "이 게이트웨이는 차도선 원격 모니터링과 SDV 플랫폼에도 들어가는 제품입니다."
        ],
        myRole: [
          "보안 기능 기술서, 네트워크 토폴로지, 자산 목록, 하드닝과 설정 지침, 사고 대응과 복구 문서를 썼습니다.",
          "보안 기능 시험 절차(49항목, 102쪽)와 선내 검증 절차(46항목)를 작성했습니다.",
          "보안 개발 수명주기, 변경 관리, 수정 전략 문서도 맡았습니다.",
          "L2 스위치 MCG-90의 SP0 문서(19항목)는 따로 작성했습니다."
        ],
        approach: [
          "하드닝 지침에는 기본 암호 변경, 역할별 계정 분리, 관리 접근 소스 제한, 5회 실패 시 15분 잠금, 암호 90일 변경, HTTPS만 허용, REST API 비활성화, 유휴 10분 로그아웃, 로그 90일 보존, NTP 등 20여 항목을 넣었습니다.",
          "시험 절차는 항목마다 시험 방법과 합격 기준을 Wireshark, nmap, OWASP ZAP, hping3로 확인할 수 있게 썼습니다.",
          "선내 검증 항목은 운항 중 35, 정비 중 5, 공급자 6으로 나눴습니다.",
          "이어서 IEC 62443-4-2 SL-C 1 갭 분석을 할 예정입니다."
        ],
        problem: [
          "문제: 제품 그대로는 충족하지 못하는 요구가 있었습니다. 계정 비활성화 기능이 없고, 암호 정책이 8~31자로 고정되어 있고, 로그인 배너를 바꿀 수 없었습니다. 펌웨어가 외부 공급사 제품이라 우리가 고칠 수도 없었습니다.",
          "해결: 규칙이 인정하는 보완대책으로 문서화했습니다. 계정과 암호 정책은 RADIUS/LDAP 중앙 인증으로 넘기고, 배너는 게시문으로 대신했습니다. 49항목은 충족 36, 보완대책 3, 해당 없음 10으로 판정했습니다.",
          "랩 시험에서 거부 로그 누락, DoS 임계값 오동작, untagged VLAN 누설, HTTP 80 포트 개방 등 24건을 찾아 재현 절차와 함께 공급사에 넘겼습니다."
        ],
        result: [
          "49항목 판정과 영문 제출 문서 10종 패키징을 마쳤고(2026.10.15), DNV 심사를 앞두고 있습니다.",
          "RINA Academy의 Cyber Resilience(IACS UR E26/E27) 교육을 수료했습니다 (2026.06)."
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
      competency: "data",
      title: "차도선 ESS 원격 모니터링 - 육상 관제 서버와 Web UI",
      headline: "차도선 ESS와 추진계를 육상에서 감시하는 관제 서버와 Web UI",
      subtitle: "선내 DAQ가 ESS와 추진계 데이터를 모아 LTE로 육상 서버에 보내면, 웹에서 상태를 보고 진단하는 시스템입니다. HD한국조선해양 EP솔루션기술부 용역으로, Web UI 설계와 구현, 수집 데이터를 가공하는 관제 서버 개발을 맡았습니다.",
      org: "엠알씨, HD한국조선해양 EP솔루션기술부",
      period: "2026.09 ~ 2026.12",
      role: "4인 팀, Web UI와 관제 서버 담당",
      tags: ["Vue 3", "Spring Boot", "InfluxDB", "WebSocket", "three.js", "IACS UR E26/E27"],
      thumbnail: "assets/images/ess-01.jpg",
      metrics: [
        { label: "수집 주기", value: "1초" },
        { label: "수집 포인트", value: "척당 약 2,500" },
        { label: "상태", value: "납품 진행 중" }
      ],
      detail: {
        background: [
          "차도선의 ESS(BADA-100)와 추진계(PEMS)를 육상에서 원격으로 감시하고 진단합니다.",
          "선내 DAQ가 Modbus TCP로 척당 약 2,500 포인트를 1초마다 모아 LTE로 육상 서버에 보냅니다.",
          "제어와 알람은 MQTT, 시계열 데이터는 gRPC로 보내고, 웹에서는 가동 현황, 고장, 위치 이력, ESS 상세, 정기 점검, 보고서를 봅니다."
        ],
        myRole: [
          "요구사양과 화면을 잇는 추적표를 만들고 관제 화면 23개를 설계했습니다.",
          "동작하는 시제품을 먼저 만들어 고객 의견을 받아 가며 화면을 확정했습니다.",
          "REST와 WebSocket 연동, Admin/Operator/Viewer 권한별 화면을 구현했습니다.",
          "수집 서버가 PostgreSQL과 InfluxDB에 저장한 데이터를 관제 서버(Spring Boot)에서 가공해 REST API와 WebSocket으로 화면에 보내는 백엔드를 맡았습니다.",
          "보고서 PDF/Excel/Word 내보내기, 선박 3D 현황, RACK 3D, 셀 온도 히트맵, 다크/라이트 테마, 한/영 전환을 만들었습니다."
        ],
        approach: [
          "Fleet, BANK, RACK(최대 12)으로 이어지는 계층과 다섯 가지 서비스 영역(운용과 성능, 안전과 고장, 에너지, 열과 셀, Rack 진단)을 메뉴 구조에 반영했습니다.",
          "화면마다 요구사양 번호를 붙여 추적표와 바로 연결되게 했습니다.",
          "AI 코딩 도구를 쓰면서도 버전별 백업과 변경 이력을 남겼고, Playwright로 화면 회귀 캡처를 돌려 확인했습니다.",
          "작업 폴더는 ISO 9001 조항 기준으로 나누고, 고객 계정과 금액, 개인정보는 넣지 않았습니다."
        ],
        problem: [
          "문제: 요구사양서가 189항목짜리 표여서 화면을 떠올리기 어려웠고, 문서를 주고받는 데만 1주가 걸렸습니다.",
          "해결: 모사 데이터로 동작하는 시제품을 먼저 만들어 고객이 화면을 눌러 보며 의견을 주게 했습니다. 화면설계서(pptx)는 시제품에서 바로 뽑아서 받은 의견을 그날 반영했습니다."
        ],
        result: [
          "2026년 11월에 Web UI와 API 연동 개발을 마쳤고, 지금 납품을 진행하고 있습니다.",
          "IACS UR E26/E27 대응 요구사항 추적표, 위협 분석, 보안 시험 결과 문서도 만들었습니다."
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
