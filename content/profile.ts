import type { Localized } from "@/lib/i18n";

export const profile = {
  name: { ko: "문재식", en: "Jaesik Moon" } satisfies Localized,
  title: {
    ko: "ML Engineer / Data Scientist",
    en: "ML Engineer / Data Scientist",
  } satisfies Localized,
  tagline: {
    ko: "정해진 문제보다, 아직 풀리지 않은 한계에 도전하며 세상을 바꾸고 싶습니다.",
    en: "I thrive on challenges beyond well-defined problems — structuring complex realities to push past unsolved limits.",
  } satisfies Localized,
  summary: {
    ko: "대규모 데이터 파이프라인 구축과 ML 모델 개발 경험을 보유한 ML Engineer입니다. 실무에서 일 600만 건 규모의 교통카드 데이터 ETL 파이프라인을 단독 설계·구축하여 새마을금고 정기 데이터 공급 시스템을 완성했으며, 부동산 AVM 모델 운영 및 개선에 기여했습니다. 컴퓨터 비전(YOLOv8), 시계열 예측(ARIMA/Prophet), 머신러닝 모델링 등 다양한 프로젝트를 수행했으며, SSCI급 논문 출판과 LH 공모전 최우수상 등을 통해 연구 역량과 실행력을 입증했습니다.",
    en: "ML Engineer with hands-on experience building large-scale data pipelines and ML models. Solo-designed and built an ETL pipeline processing 6 million transit-card records per day to power a recurring data-supply contract with a financial institution, and contributed to operating and improving a real-estate automated valuation model (AVM). Delivered projects spanning computer vision (YOLOv8), time-series forecasting (ARIMA/Prophet), and applied ML — backed by an SSCI-indexed publication and a top-prize win in a national LH data analytics competition.",
  } satisfies Localized,
  location: { ko: "서울, 대한민국", en: "Seoul, South Korea" } satisfies Localized,
  email: "answotlr54@gmail.com",
  phone: "010-4704-8542",
  github: "https://github.com/jaesi",
  linkedin: "https://www.linkedin.com/in/jae-sik-moon-b84b812a6",
  birthDate: "1996.05.24",
};

export type EducationEntry = {
  school: Localized;
  degree: Localized;
  period: string;
};

export const education: EducationEntry[] = [
  {
    school: { ko: "서울대학교", en: "Seoul National University" },
    degree: {
      ko: "환경대학원 도시환경설계학과 & 융합전공 스마트시티 글로벌, 석사 졸업",
      en: "M.S., Urban Environmental Design & Smart City Global Convergence",
    },
    period: "2023.03 - 2025.02",
  },
  {
    school: { ko: "세종대학교", en: "Sejong University" },
    degree: {
      ko: "건축공학과 & 교육학과 복수전공, 학사 졸업",
      en: "B.S./B.A., Architectural Engineering & Education (dual major)",
    },
    period: "2015.03 - 2023.02",
  },
];

export type AwardEntry = { title: Localized; period: string };

export const awards: AwardEntry[] = [
  {
    title: {
      ko: "LH COMPAS 국토도시 데이터 분석대전 최우수상",
      en: "LH COMPAS National Land & Urban Data Analytics Challenge — Grand Prize",
    },
    period: "2024.07 - 2024.09",
  },
  {
    title: {
      ko: "WCSE 월드 스마트시티 엑스포 우수상",
      en: "World Smart City Expo (WCSE) — Excellence Award",
    },
    period: "2024",
  },
  {
    title: {
      ko: "현대 아산나눔재단 & 서울대 기후기술 창업 혁신대전 지속가능성장상",
      en: "Asan Nanum Foundation & SNU Climate-Tech Startup Innovation Expo — Sustainable Growth Award",
    },
    period: "2024",
  },
  {
    title: {
      ko: "서울 AI 허브 영포럼 배너피칭 2등",
      en: "Seoul AI Hub Young Forum — Banner Pitching, 2nd Place",
    },
    period: "2025",
  },
];

export type CertificationGroup = { issuer: string; items: string[] };

export const certifications: CertificationGroup[] = [
  {
    issuer: "AWS Training and Certification",
    items: [
      "AWS Generative AI Essentials",
      "DevOps Engineering on AWS",
      "Practical Data Science with Amazon SageMaker",
      "Generative AI on AWS",
    ],
  },
  {
    issuer: "NVIDIA Deep Learning Institute",
    items: [
      "Fundamentals of Deep Learning",
      "Applications of AI for Anomaly Detection",
      "Building Intelligent Recommender Systems",
    ],
  },
];

export type PublicationEntry = {
  title: Localized;
  venue: Localized;
  date: string;
  url?: string;
};

export const publications: PublicationEntry[] = [
  {
    title: {
      ko: "소비자의 제로파티 데이터와 CART 의사결정트리 모델을 적용한 패션 추천 시스템 개발",
      en: "Development of a Fashion Recommendation System with Consumers' Zero-Party Data Applying the CART Decision-Tree Model",
    },
    venue: {
      ko: "Journal of Fashion Marketing and Management (SSCI, IF 4.9)",
      en: "Journal of Fashion Marketing and Management (SSCI, IF 4.9)",
    },
    date: "2025.10",
    url: "https://doi.org/10.1108/JFMM-07-2024-0284",
  },
  {
    title: {
      ko: "생활인구의 개념과 활용 트렌드",
      en: "The Concept and Application Trends of the \"Living Population\"",
    },
    venue: {
      ko: "Journal of Environmental Studies",
      en: "Journal of Environmental Studies",
    },
    date: "2024.09",
  },
];

export const languages: { label: Localized; level: Localized }[] = [
  {
    label: { ko: "영어", en: "English" },
    level: {
      ko: "Business Proficient (TOEIC Speaking IH 150, New TEPS 415)",
      en: "Business Proficient (TOEIC Speaking IH 150, New TEPS 415)",
    },
  },
];
