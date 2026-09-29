import type { Localized } from "@/lib/i18n";

export type ExperienceHighlight = {
  title: Localized;
  bullets: Localized[];
};

export type ExperienceEntry = {
  company: Localized;
  department: Localized;
  role: Localized;
  period: string;
  highlights: ExperienceHighlight[];
};

export const experience: ExperienceEntry[] = [
  {
    company: { ko: "아웃스탠딩 프로즈 (Outstanding Pros)", en: "Outstanding Pros" },
    department: { ko: "창업팀", en: "Founding Team" },
    role: { ko: "공동창업자 · CEO", en: "Co-Founder & CEO" },
    period: "2025.12 - Present",
    highlights: [
      {
        title: {
          ko: "DoStock: 공시·뉴스 기반 기업 지식그래프 데이터 플랫폼",
          en: "DoStock: Corporate Knowledge-Graph Data Platform",
        },
        bullets: [
          {
            ko: "데이터 상품 기획·온톨로지 설계부터 기관 영업까지 회사 방향성 총괄",
            en: "Leads company direction end to end, from product and ontology design to institutional sales",
          },
          {
            ko: "한국 공시 원문을 파싱해 기업·주주·계열·밸류체인 관계를 그래프로 구조화한 지식그래프 데이터 상품 **Tendril-KO** 설계, **KRX 상장사 2,595개** 커버",
            en: "Designed **Tendril-KO**, a knowledge-graph data product that structures company, shareholder, affiliate, and value-chain relations parsed from Korean corporate filings, covering **2,595 KRX-listed companies**",
          },
          {
            ko: "국내 뉴스 스트림을 실시간 임베딩해 종목·이벤트 단위 시그널로 변환하는 **Bloom-KO** 구축, Tendril-KO 그래프에 연결",
            en: "Built **Bloom-KO**, real-time news-embedding data that converts the Korean news stream into stock- and event-level signals, and linked it into the Tendril-KO graph",
          },
          {
            ko: "B2C 종목추천 서비스(퀀트 전략 조합)로 시작해, 공시·뉴스 기반 지식그래프 **B2B 데이터 사업**으로 피벗",
            en: "Pivoted from an initial B2C stock-recommendation service (combined quant strategies) to a **B2B data business** built on a filings-and-news knowledge graph",
          },
          {
            ko: "딜 어드바이저리, 헤지펀드 퀀트·펀더멘털 팀 등 **3개 채널**에 데이터 상품 공급",
            en: "Supplies the data product to **three channels**: deal advisory teams and hedge fund quant and fundamental teams",
          },
          {
            ko: "Neo4j·Airflow·Directus·PostgreSQL·MinIO 기반 데이터 인프라와 FastAPI 백엔드·Next.js 프런트엔드로 서비스 운영",
            en: "Operated the service on a Neo4j/Airflow/Directus/PostgreSQL/MinIO data infra with a FastAPI backend and Next.js frontend",
          },
        ],
      },
      {
        title: {
          ko: "비즈니스 개발 및 대외 활동",
          en: "Business Development & Outreach",
        },
        bullets: [
          {
            ko: "**삼일PwC Open Innovation 2026** Deal 부문에 지식그래프 기반 딜 소싱·매칭 자동화 제안",
            en: "Proposed knowledge-graph-based deal sourcing and matching automation to **Samil PwC**'s Deal division under Open Innovation 2026",
          },
          {
            ko: "**Neudata**(글로벌 대체데이터 카탈로그), **Point72**(글로벌 헤지펀드) 데이터소싱팀과 지식그래프 데이터 상품 평가 미팅 진행",
            en: "Held data evaluation meetings with **Neudata** (global alternative-data catalog) and **Point72** (global hedge fund) data-sourcing team",
          },
          {
            ko: "예비창업패키지·창업중심대학, **신한퓨처스랩** 등 창업 지원 프로그램 지원",
            en: "Applied to startup support programs including the Pre-Startup Package & Startup-Focused University and **Shinhan Future's Lab**",
          },
          {
            ko: "Cursor Hackathon에 참가해 서비스 소개 데모 영상 제작 및 발표",
            en: "Participated in the Cursor Hackathon, producing and presenting a product demo video",
          },
        ],
      },
    ],
  },
  {
    company: { ko: "빅밸류 (BigValue Inc.)", en: "BigValue Inc." },
    department: { ko: "데이터서비스 본부", en: "Data Services Division" },
    role: { ko: "데이터 사이언티스트", en: "Data Scientist" },
    period: "2025.03 - 2025.11",
    highlights: [
      {
        title: {
          ko: "대규모 교통카드 빅데이터 ETL 파이프라인 구축",
          en: "Large-Scale Transit-Card ETL Pipeline",
        },
        bullets: [
          {
            ko: "데이터 상품 기획부터 판매까지 엔드투엔드 파이프라인을 단독 설계·구축",
            en: "Solo-designed and built an end-to-end pipeline, from data-product planning to sale",
          },
          {
            ko: "일 **600만 건**, 총 **12억 행**(574일치) 교통카드 데이터 처리 시스템 구축",
            en: "Built a system processing **6M records/day**, totaling **1.2B rows** across 574 days",
          },
          {
            ko: "폐쇄망 환경(120GB RAM)에서 **DuckDB** 기반 Python 파이프라인 개발",
            en: "Developed a **DuckDB**-based Python pipeline in an air-gapped environment (120GB RAM)",
          },
          {
            ko: "**DBSCAN** 군집화 알고리즘 기반 통근·통학 이동 패턴 분석 로직 설계",
            en: "Designed commuting/school-trip pattern recognition logic using **DBSCAN** clustering",
          },
          {
            ko: "**새마을금고**에 통근 OD·체류시간 데이터를 월간 정기 공급 계약 체결",
            en: "Signed a recurring monthly data-supply contract with **Saemaeul Bank** for commuting OD and dwell-time data",
          },
        ],
      },
      {
        title: {
          ko: "부동산 자동가치산정 모델(AVM) 운영 및 개선",
          en: "Real-Estate Automated Valuation Model (AVM): Operations & Improvement",
        },
        bullets: [
          {
            ko: "주거용 부동산(아파트, 오피스텔) AVM 모델 운영 및 정확도 개선",
            en: "Operated and improved accuracy of a residential (apartment/officetel) AVM model",
          },
          {
            ko: "토지거래허가제로 인한 실거래 감소 → 시세 평활화 과다 문제 발견 및 분석",
            en: "Identified and analyzed excessive price-smoothing caused by reduced transactions under land-transaction permit regulation",
          },
          {
            ko: "정확도 개선: 전국 17개 시도 중 **12개 시도**에서 MdAPE 감소 (서울 10.5%, 대전 8.8%, 수도권 4.2%)",
            en: "Improved accuracy (MdAPE) in **12 of 17 provinces**, including Seoul (10.5%), Daejeon (8.8%), and the Capital Area (4.2%)",
          },
          {
            ko: "상업용 부동산 시세 예측 초기 연구: 전월세 전환율 모델링, 법정동 세그먼트별 최적화 구조 설계",
            en: "Early-stage research on commercial property pricing: deposit-to-rent conversion-rate modeling by administrative segment",
          },
        ],
      },
      {
        title: {
          ko: "부동산 온톨로지 구축 (PoC)",
          en: "Real-Estate Ontology (PoC)",
        },
        bullets: [
          {
            ko: "건축물·실거래·시세 데이터 통합을 위한 온톨로지 스키마 설계",
            en: "Designed an ontology schema to integrate building, transaction, and market-price data",
          },
          {
            ko: "BlazeGraph 기반 트리플 스토어 구현",
            en: "Implemented a triple store on BlazeGraph",
          },
        ],
      },
    ],
  },
];
