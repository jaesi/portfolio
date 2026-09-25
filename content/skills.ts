import type { Localized } from "@/lib/i18n";

export type SkillGroup = { title: Localized; items: string[] };

export const coreCompetencies: SkillGroup[] = [
  {
    title: { ko: "ML 모델 개발", en: "ML Model Development" },
    items: [
      "XGBoost",
      "Random Forest",
      "Decision Tree",
      "ARIMA",
      "YOLOv8",
      "Stable Diffusion",
      "NLP",
    ],
  },
  {
    title: { ko: "데이터 엔지니어링", en: "Data Engineering" },
    items: ["ETL Pipelines", "PostgreSQL", "DuckDB", "6M+ records/day"],
  },
  {
    title: { ko: "MLOps & 배포", en: "MLOps & Deployment" },
    items: ["FastAPI", "Docker", "Model Serving", "Grafana"],
  },
];

export const technicalSkills: SkillGroup[] = [
  {
    title: { ko: "프로그래밍 언어", en: "Programming Languages" },
    items: [
      "Python (pandas, numpy, scikit-learn, PyTorch, geopandas)",
      "SQL (PostgreSQL, DuckDB)",
    ],
  },
  {
    title: { ko: "ML/AI 프레임워크 & 도구", en: "ML/AI Frameworks & Tools" },
    items: [
      "scikit-learn",
      "XGBoost",
      "statsmodels (ARIMA/SARIMA)",
      "DBSCAN",
      "PyTorch",
      "YOLOv8",
      "Stable Diffusion",
      "FAISS",
      "CLIP",
    ],
  },
  {
    title: { ko: "데이터 엔지니어링 & DB", en: "Data Engineering & Databases" },
    items: [
      "ETL Pipeline",
      "PostgreSQL",
      "DuckDB",
      "BlazeGraph (Graph DB)",
      "geopandas / shapely",
    ],
  },
  {
    title: { ko: "MLOps & 백엔드", en: "MLOps & Backend" },
    items: ["FastAPI", "Flask", "Docker / Docker Compose", "Poetry"],
  },
  {
    title: { ko: "시각화 & 모니터링", en: "Visualization & Monitoring" },
    items: ["Grafana", "matplotlib", "seaborn"],
  },
  {
    title: { ko: "협업 도구", en: "Collaboration" },
    items: ["Git", "Notion", "Jira", "Slack"],
  },
];

// Compact tag list for the homepage hero / skills marquee.
export const heroSkillTags = [
  "Python",
  "SQL",
  "scikit-learn",
  "PyTorch",
  "FastAPI",
  "DuckDB",
  "Docker",
  "Git",
];
