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
            en: "Solo-designed and built an end-to-end pipeline — from data-product planning to sale",
          },
          {
            ko: "일 600만 건, 총 12억 행(574일치) 교통카드 데이터 처리 시스템 구축",
            en: "Built a system processing 6M records/day — 1.2B rows across 574 days total",
          },
          {
            ko: "폐쇄망 환경(120GB RAM)에서 DuckDB 기반 Python 파이프라인 개발",
            en: "Developed a DuckDB-based Python pipeline in an air-gapped environment (120GB RAM)",
          },
          {
            ko: "DBSCAN 군집화 알고리즘 기반 통근·통학 이동 패턴 분석 로직 설계",
            en: "Designed commuting/school-trip pattern recognition logic using DBSCAN clustering",
          },
          {
            ko: "새마을금고에 통근 OD·체류시간 데이터를 월간 정기 공급 계약 체결",
            en: "Signed a recurring monthly data-supply contract with Saemaeul Bank for commuting OD & dwell-time data",
          },
        ],
      },
      {
        title: {
          ko: "부동산 자동가치산정 모델(AVM) 운영 및 개선",
          en: "Real-Estate Automated Valuation Model (AVM) — Operations & Improvement",
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
            ko: "정확도 개선: 전국 17개 시도 중 12개 시도에서 MdAPE 감소 (서울 10.5%, 대전 8.8%, 수도권 4.2%)",
            en: "Improved accuracy (MdAPE) in 12 of 17 provinces — Seoul 10.5%, Daejeon 8.8%, Capital Area 4.2%",
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
