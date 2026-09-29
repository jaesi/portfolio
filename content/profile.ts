import type { Localized } from "@/lib/i18n";

export const profile = {
  name: { ko: "문재식", en: "Jace Moon" } satisfies Localized,
  title: {
    ko: "Founder / ML Engineer",
    en: "Founder / ML Engineer",
  } satisfies Localized,
  tagline: {
    ko: "정해진 문제보다, 아직 풀리지 않은 한계에 도전하며 세상을 바꾸고 싶습니다.",
    en: "I thrive on challenges beyond well-defined problems, structuring complex realities to push past unsolved limits.",
  } satisfies Localized,
  summary: {
    ko: "데이터 상품을 기획하고 만드는 Founder이자 ML Engineer입니다. 2025년 12월 아웃스탠딩 프로즈를 공동창업해, 공시·뉴스 데이터를 온톨로지 기반 지식그래프로 연결한 기업 데이터 플랫폼 'DoStock'을 만들고 있습니다. 이전 빅밸류에서는 일 600만 건 규모의 교통카드 ETL 파이프라인을 단독 구축해 금융기관과 정기 데이터 공급 계약을 성사시켰습니다.",
    en: "Founder and ML Engineer who builds data products end to end. Co-founded Outstanding Pros in December 2025, building DoStock, an ontology-driven knowledge-graph platform that connects corporate filings and news into a B2B data product. Previously at BigValue, solo-built an ETL pipeline processing 6M transit-card records per day that landed a recurring data-supply contract with a financial institution.",
  } satisfies Localized,
  location: { ko: "서울, 대한민국", en: "Seoul, South Korea" } satisfies Localized,
  email: "jace@outstanding-pros.xyz",
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
      en: "LH COMPAS National Land & Urban Data Analytics Challenge, Grand Prize",
    },
    period: "2024.07 - 2024.09",
  },
  {
    title: {
      ko: "WCSE 월드 스마트시티 엑스포 우수상",
      en: "World Smart City Expo (WCSE), Excellence Award",
    },
    period: "2024",
  },
  {
    title: {
      ko: "현대 아산나눔재단 & 서울대 기후기술 창업 혁신대전 지속가능성장상",
      en: "Asan Nanum Foundation & SNU Climate-Tech Startup Innovation Expo, Sustainable Growth Award",
    },
    period: "2024",
  },
  {
    title: {
      ko: "서울 AI 허브 영포럼 배너피칭 2등",
      en: "Seoul AI Hub Young Forum, Banner Pitching, 2nd Place",
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
