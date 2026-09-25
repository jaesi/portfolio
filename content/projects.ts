import type { Localized } from "@/lib/i18n";

export type ProjectMeta = {
  period: string;
  team: Localized;
  stack: string[];
};

export type Project = {
  id: string;
  category: Localized;
  title: Localized;
  tags: string[];
  meta: ProjectMeta;
  summary: Localized;
  problem: Localized[];
  process: Localized[];
  result: Localized[];
};

export const projects: Project[] = [
  {
    id: "transit-od",
    category: { ko: "실무", en: "Professional" },
    title: {
      ko: "교통카드 빅데이터 정제 및 통근·통학 OD 데이터 산출",
      en: "Metropolitan Transit Big Data Processing & OD Extraction",
    },
    tags: ["Pandas", "PostgreSQL/DuckDB", "scikit-learn (DBSCAN)", "FastAPI", "JavaScript"],
    meta: {
      period: "2025.05 - 2025.07",
      team: { ko: "1인", en: "Solo (1)" },
      stack: ["Python", "PostgreSQL", "scikit-learn"],
    },
    summary: {
      ko: "수도권 3억 건의 교통카드 원시 데이터를 정제해 통근·통학 이동 패턴을 추출하고, 금융기관에 판매 가능한 데이터 상품으로 완성했습니다.",
      en: "Cleaned 300M metropolitan transit records and extracted commuting/school-trip patterns into a data product sold to a financial institution.",
    },
    problem: [
      {
        ko: "수도권 한 달 기준 약 4억 행의 수단통행 단위 Raw 데이터 — 집계와 상품성을 갖춘 설계가 필요",
        en: "~400M rows/month of raw trip-level data — needed a design that balanced granularity with commercial value",
      },
      {
        ko: "고객사(금융기관)에 생활 패턴 집계 데이터(통근·통학, 체류시간)를 제공해야 하는 목표",
        en: "Goal: deliver customer-ready lifestyle datasets (commuting, school trips, dwell time) to a financial-sector client",
      },
    ],
    process: [
      {
        ko: "원시 데이터 정제 → 정류장 공간 클러스터 조인 → 시간대 윈도우 최빈값/밀도 기반(DBSCAN) 통근·통학 패턴 인식 → OD 테이블 산출",
        en: "Raw data cleaning → spatial cluster join by station → hourly-window mode + density-based (DBSCAN) commute-pattern recognition → OD table generation",
      },
      {
        ko: "출·퇴근 시간 히트맵, 청소년 시간대별 이용패턴 등 데이터 EDA로 패턴 인식 로직 설계",
        en: "Designed pattern-recognition logic via EDA — commuting-hour heatmaps, youth usage patterns by time/weekday",
      },
    ],
    result: [
      {
        ko: "고유 이용자 2,400만 명 중 최종 통근 인원 663만 명(27.3%) 패턴 인식 완료",
        en: "Identified 6.63M commuters (27.3%) out of 24M unique users through pattern recognition",
      },
      {
        ko: "새마을금고에 정기 데이터 상품으로 판매 계약 체결",
        en: "Signed a recurring data-product sales contract with Saemaeul Bank",
      },
      {
        ko: "사내 플랫폼 데이터 마트에 자동화 파이프라인 구축, FastAPI 기반 도달시간·통행량 인터랙티브 웹앱 구현",
        en: "Built an automated pipeline into the internal data mart and an interactive FastAPI web app for travel-time & volume",
      },
    ],
  },
  {
    id: "commercial-avm",
    category: { ko: "실무", en: "Professional" },
    title: {
      ko: "부동산 자동가치산정 모델(AVM) 개발 — 상업용 부동산 시세 예측",
      en: "Automated Real-Estate Valuation Model (AVM) — Commercial Property",
    },
    tags: ["PostgreSQL", "scikit-learn", "Pandas"],
    meta: {
      period: "2025.07 - 2025.09",
      team: { ko: "3인", en: "3 members" },
      stack: ["Python", "PostgreSQL", "scikit-learn"],
    },
    summary: {
      ko: "실거래가 극히 드문 상업용 부동산 시장에서, 임대료 데이터의 다단계 이상치 제거와 군집별 전환율 최적화로 건물 단위 시세 산정 가능성을 검증했습니다.",
      en: "Validated building-level commercial valuation in a market with scarce transactions, via multi-stage outlier removal and per-cluster conversion-rate optimization.",
    },
    problem: [
      {
        ko: "기존 AVM은 주거용에 집중되어 있으나 상업용 부동산 가치 산정 모델에 대한 수요가 높음",
        en: "Existing AVMs focus on residential property, while demand for commercial valuation models is high",
      },
      {
        ko: "상업용 실거래 사례가 주거용 대비 약 1%에 불과해 기존 방법론 적용이 어려움",
        en: "Commercial transaction volume is only ~1% of residential, making existing methodology hard to apply",
      },
    ],
    process: [
      {
        ko: "정규표현식+SQL로 층·호 등 비정형 데이터 정제, 면적/임대료/보증금 극단값 약 35% 제거",
        en: "Standardized floor/unit fields with regex + SQL; removed ~35% of noisy records (area, rent, deposit extremes)",
      },
      {
        ko: "DBSCAN 기반 공간·시간 밀도 이상치 탐지로 추가 7.3% 제거 → 995만 건 정제 완료",
        en: "DBSCAN-based space-time density outlier detection removed a further 7.3% → 9.95M records cleaned",
      },
      {
        ko: "전월세 전환율의 심슨의 역설(건물 내 음의 기울기 vs 전체 양의 선형관계) 발견 → 군집별 분산 최소화 최적화 수식 산출",
        en: "Discovered Simpson's paradox in conversion rates (negative within-building vs. positive overall trend) → derived a per-cluster variance-minimizing formula",
      },
    ],
    result: [
      {
        ko: "건물별 마이크로 전환율을 전국 단위로 산출 완료 — 기존에는 불가능했던 세밀도",
        en: "Computed nationwide building-level micro conversion rates at a granularity previously unattainable",
      },
      {
        ko: "부동산원 표본조사 결과와 비교해 동일 추세 및 세밀한 패턴 포착 확인",
        en: "Confirmed matching trends against official real-estate survey benchmarks, with finer pattern detection",
      },
      {
        ko: "상업용 부동산 시세 산정 가능성을 검증하고 AVM의 적용 범위를 전국 미시 단위로 확장할 근거 확보",
        en: "Validated feasibility and built the case for extending AVM coverage to nationwide micro-level commercial pricing",
      },
    ],
  },
  {
    id: "sejong-vacancy",
    category: { ko: "공모전", en: "Competition" },
    title: {
      ko: "LH 국토도시 데이터 분석과제: 세종신도시 지역 상가 공실률 추정",
      en: "LH National Land & Urban Data Analytics Challenge — Sejong Vacancy Estimation",
    },
    tags: ["PostgreSQL", "scikit-learn", "Pandas", "Geopandas"],
    meta: {
      period: "2024.07 - 2024.09",
      team: { ko: "3인", en: "3 members" },
      stack: ["Python", "Pandas", "Geopandas", "scikit-learn"],
    },
    summary: {
      ko: "표본조사에 의존하던 상가 공실률을 빅데이터 기반으로 필지·연도 단위까지 정밀 산출하고, 향후 18개월 공실률을 예측해 LH 공모전 최우수상을 수상했습니다.",
      en: "Replaced sample-survey vacancy estimates with big-data, parcel-level annual figures and an 18-month forecast — winning the LH competition's top prize.",
    },
    problem: [
      {
        ko: "공실 증가는 심각한 사회 이슈이나, 세종 신도시의 향후 상가 공급량 대비 수요 예측이 부재",
        en: "Rising vacancy is a serious social issue, yet demand forecasts for Sejong's growing commercial supply were missing",
      },
      {
        ko: "데이터 기반 공실률 지표가 없어 조사원의 표본조사에만 의존",
        en: "No data-driven vacancy metric existed — estimates relied solely on manual field surveys",
      },
    ],
    process: [
      {
        ko: "건축물대장 데이터로 공실률 산출식을 정의, 2012~2024년 필지·연도별 공실률 변화를 시계열로 산출",
        en: "Defined a vacancy formula from building registry data; computed parcel-level annual vacancy from 2012–2024",
      },
      {
        ko: "거주인구 분포, 상권 활성화 지수, 업종별 카플란마이어 생존곡선으로 공실 영향 요인 분석",
        en: "Analyzed vacancy drivers via resident-population distribution, commercial vitality index, and Kaplan–Meier survival curves by business type",
      },
      {
        ko: "ARIMA, SARIMA, Prophet 모델 비교 및 Random Forest 기반 피처 중요도 분석",
        en: "Compared ARIMA, SARIMA, and Prophet forecasts; ran Random Forest feature-importance analysis",
      },
    ],
    result: [
      {
        ko: "향후 18개월 공실률 예측 — 전수 조사 수준의 빅데이터로 세종시 전체 상업용 건물 공실률 추정, 기존 표본조사 대비 높은 정확도 확보",
        en: "Forecast 18-month vacancy across all of Sejong's commercial buildings at census-level granularity, beating sample-survey accuracy",
      },
      {
        ko: "피처 중요도: 건폐율(15.5%), 건물 높이(12.4%), 거주인구(8.6%) 순으로 공실률에 영향",
        en: "Top feature importances: building coverage ratio (15.5%), building height (12.4%), resident population (8.6%)",
      },
      {
        ko: "LH COMPAS 국토도시 데이터 분석대전 최우수상 및 WCSE 월드 스마트시티 엑스포 우수상 수상",
        en: "Won the LH COMPAS National Land & Urban Data Analytics Challenge grand prize and a WCSE Excellence Award",
      },
    ],
  },
  {
    id: "layerminder",
    category: { ko: "프로젝트", en: "Project" },
    title: {
      ko: "Layerminder: 생성형 AI 기반 가구 디자인 생성 서비스 개발",
      en: "Layerminder: AI-Powered Furniture Design Generation Service",
    },
    tags: ["Stable Diffusion", "CLIP", "FAISS", "FastAPI", "Supabase"],
    meta: {
      period: "2024.06 - 2024.12",
      team: { ko: "3인 (팀 리드)", en: "3 members (Team Lead)" },
      stack: ["FastAPI", "Next.js", "Supabase", "OpenAI API", "Docker"],
    },
    summary: {
      ko: "가구 디자이너의 제작 과정을 단축하는 생성형 AI 웹 서비스를 팀 리드로 개발 — DB 설계, 백엔드, AI 모델 훈련을 주도했습니다.",
      en: "Led development of a generative-AI web service that shortens furniture designers' workflow — owning DB design, backend, and model training.",
    },
    problem: [
      {
        ko: "기본 파운데이션 모델(Stable Diffusion)로는 실제 제작이 어려운 가구 디자인이 생성됨",
        en: "The base Stable Diffusion model often generated furniture designs that were not actually manufacturable",
      },
    ],
    process: [
      {
        ko: "전문 디자이너가 선정한 1980년대 프렌치 모던 가구 이미지 1만 장으로 LoRA 기반 이미지 학습",
        en: "Fine-tuned with LoRA on 10,000 expert-curated images of 1980s French modern furniture",
      },
      {
        ko: "IP-Adapter를 Stable Diffusion에 적용해 제작 가능성을 높이는 이미지 생성 구조 연구 및 적용",
        en: "Researched and applied IP-Adapter on Stable Diffusion to improve manufacturability of generated images",
      },
      {
        ko: "FastAPI 비동기 백엔드 + Supabase 통합, OpenAI API로 이미지·제품 스토리 생성, SSE 기반 실시간 진행 상황 스트리밍",
        en: "Built an async FastAPI backend with Supabase, used the OpenAI API for image/story generation, and streamed progress via SSE",
      },
    ],
    result: [
      {
        ko: "CLIP·FAISS 임베딩 기반 이미지 추천 시스템 구현, 1차 베타 서비스 완성 및 사용자 30명 테스트 진행",
        en: "Implemented CLIP/FAISS embedding-based image recommendation; shipped a beta and ran testing with 30 users",
      },
      {
        ko: "실사용 피드백을 반영해 웹 UI/UX 개선",
        en: "Iterated on web UI/UX based on real user feedback",
      },
      {
        ko: "아산나눔재단 & 서울대 기후기술 창업 혁신대전 지속가능성장상, 서울 AI 허브 영포럼 배너피칭 2등 수상",
        en: "Won the Asan Nanum Foundation & SNU Climate-Tech Startup Award and placed 2nd at the Seoul AI Hub Young Forum pitch",
      },
    ],
  },
  {
    id: "fashion-cart",
    category: { ko: "논문", en: "Thesis" },
    title: {
      ko: "제로파티 데이터와 CART 의사결정트리 모델을 적용한 패션 추천 시스템",
      en: "Fashion Recommendation System with Zero-Party Data & the CART Decision-Tree Model",
    },
    tags: ["Python", "scikit-learn", "Decision Tree"],
    meta: {
      period: "2023.07 - 2023.12",
      team: { ko: "3인", en: "3 members" },
      stack: ["Python", "scikit-learn"],
    },
    summary: {
      ko: "소비자가 직접 제공한 제로파티 설문 데이터로 CART 결정트리 기반 패션 추천 시스템의 실현 가능성을 검증하고, SSCI급 저널에 게재했습니다.",
      en: "Validated the feasibility of a CART decision-tree fashion recommender using consumer-provided zero-party survey data — published in an SSCI-indexed journal.",
    },
    problem: [
      {
        ko: "서드파티 데이터 수집이 제한되는 흐름 속에서 제로파티 데이터의 중요성이 부각됨",
        en: "As third-party data collection becomes restricted, zero-party data is gaining importance",
      },
      {
        ko: "소비자가 직접 제공한 설문 데이터만으로 결정트리(CART) 기반 추천이 가능한지 검증 필요",
        en: "Needed to verify whether a CART decision-tree recommender works using only consumer-provided survey data",
      },
    ],
    process: [
      {
        ko: "450명 설문 응답 수집 → Feature Engineering/Selection → 피처 계층 지도 및 상관관계 네트워크(|r|≥0.3) 시각화",
        en: "Collected 450 survey responses → feature engineering/selection → visualized feature hierarchy and correlation network (|r| ≥ 0.3)",
      },
      {
        ko: "해석 가능성을 위해 CART 결정트리 선택, max_depth 3~5 구간에서 하이퍼파라미터 탐색 (최종 depth=5, min_sample_leaf=16, entropy)",
        en: "Chose CART for interpretability; tuned hyperparameters around max_depth 3–5 (final: depth=5, min_sample_leaf=16, entropy)",
      },
    ],
    result: [
      {
        ko: "Decision Tree 86.67%, Random Forest 90% 테스트 정확도 달성 (하이퍼파라미터 튜닝 후), F1 Score 0.85",
        en: "Achieved 86.67% (Decision Tree) and 90% (Random Forest) test accuracy after tuning, F1 score 0.85",
      },
      {
        ko: "제로파티 데이터만으로 개인화 추천이 가능함을 검증 — 서드파티 쿠키의 대체재로 활용 가능성 확인",
        en: "Verified personalized recommendation is feasible with zero-party data alone — a viable substitute for third-party cookies",
      },
      {
        ko: "Journal of Fashion Marketing and Management (SSCI, IF 4.9)에 2025년 10월 게재",
        en: "Published in the Journal of Fashion Marketing and Management (SSCI, IF 4.9), October 2025",
      },
    ],
  },
];
