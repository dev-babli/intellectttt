import icon1 from "../images/icon/1.png";
import icon2 from "../images/icon/2.png";
import icon3 from "../images/icon/3.png";
import icon4 from "../images/icon/4.png";
import icon5 from "../images/icon/5.png";
import icon6 from "../images/icon/6.png";
// import icon7 from "../images/icon/7.png";
// import icon6 from "../images/icon/line-chart.gif";

import sicon1 from "../images/icons/genai.png";
import sicon2 from "../images/icons/Cloud.png";
import sicon3 from "../images/icons/sap.png";
import sicon4 from "../images/icons/analytics.png";

import sdicon1 from "../images/icons/genai.png";
import sdicon2 from "../images/icons/Cloud.png";
import sdicon3 from "../images/icons/sap.png";
import sdicon4 from "../images/icons/ManagedIT-Services.png";
import sdicon5 from "../images/icons/analytics.png";
import sdicon6 from "../images/icons/engineering.png";
import sdicon7 from "../images/icons/dna.png";
import sdicon8 from "../images/icons/talent.png";

import simg1 from "../images/service/service-img02.jpg";
import simg2 from "../images/service/service-img01.jpg";
import simg3 from "../images/service/service-img03.jpg";
import simg4 from "../images/service/service-img04.jpg";

import scicon1 from "../images/icon/airdrop-white.svg";
import scicon2 from "../images/icon/cloud-add.svg";
import scicon3 from "../images/icon/check02.svg";
import scicon4 from "../images/icon/finger-scan.svg";
import scicon5 from "../images/icon/ranking.svg";

import cdicon1 from "../images/icon/cd-ser_icon01.svg";
import cdicon2 from "../images/icon/cd-ser_icon02.svg";
import cdicon3 from "../images/icon/cd-ser_icon03.svg";
import cdicon4 from "../images/icon/cd-ser_icon04.svg";
import cdicon5 from "../images/icon/cd-ser_icon05.svg";
import cdicon6 from "../images/icon/cd-ser_icon06.svg";
import cdicon7 from "../images/icon/cd-ser_icon08.svg";
import cdicon8 from "../images/icon/cd-ser_icon09.svg";

const Services = [
  // 🔧 Core Engineering Services
  {
    id: "1",
    sImg: icon1,
    title: "Agentic AI and AI Agents",
    slug: "/service/ai-and-gen-ai/agents",
    thumb1: "Strategy",
    thumb2: "Consultation",
    description: "Building intelligent, autonomous AI-driven agents",
  },
  {
    id: "2",
    sImg: icon2,
    title: "AI advisroy and responsible AI",
    slug: "/service/ai-and-gen-ai/responsible",
    thumb1: "Management",
    thumb2: "Migration",
    description: "Strategic AI guidance with a focus on ethics",
  },
  {
    id: "3",
    sImg: icon3,
    title: "AI Automation",
    slug: "/service/ai-and-gen-ai/automation",
    thumb1: "Landing Page",
    thumb2: "Plugins",
    description: "Streamlining workflows using smart AI automation.",
  },
  {
    id: "4",
    sImg: icon4,
    title: "Gen AI & LLM Integration",
    slug: "/service/ai-and-gen-ai/llm",
    thumb1: "Consultation",
    thumb2: "Solutions",
    description: "Integrating GenAI and LLMs into business systems.",
  },
  {
    id: "5",
    sImg: icon5,
    title: "ML Enginerring & ML Ops",
    slug: "/service/ai-and-gen-ai/mlops",
    thumb1: "Website",
    thumb2: "Mobile App",
    description: "End-to-end machine learning engineering and ops",
  },

  // 👨‍💼 IT & Business Services
  {
    id: "6",
    sImg: icon6,
    title: "NLP & Computer Vision",
    slug: "/service/ai-and-gen-ai/nlp",
    description: "AI solutions in language processing and vision.",
  },
  {
    id: "7",
    sImg: simg1,
    sIcon: sicon1,
    title: "AI & Gen AI",
    slug: "/service/ai-and-gen-ai",
  },
  {
    id: "8",
    sImg: simg2,
    sIcon: sicon2,
    title: "Cloud & Application ",
    slug: "/service/cloud-and-application-services",
  },
  {
    id: "9",
    sImg: simg3,
    sIcon: sicon3,
    title: "SAP",
    slug: "/service/sap-services",
  },
  {
    id: "10",
    sImg: simg4,
    sIcon: sicon4,
    title: "Data & Analytics",
    slug: "/service/data-and-analytics",
  },

  // 📊 Data & AI Services
  {
    id: "11",
    sIcon: sdicon1,
    title: "Azure Data Lake, Snowflake & Power BI",
    slug: "data-source-identification",
    description: "Unify, store, and visualize data at scale.",
  },
  {
    id: "12",
    sIcon: sdicon2,
    title: "Business Intelligence & Dashboards",
    slug: "data-ecosystem-setup",
    description: "Turn raw data into powerful insights.",
  },
  {
    id: "13",
    sIcon: sdicon3,
    title: "Data Engineering & ETL",
    slug: "ai-solution-design",
    description: "Build and streamline trusted data pipelines.",
  },
  {
    id: "14",
    sIcon: sdicon4,
    title: "Data Governance & Security",
    slug: "business-wide-adoption",
    description: "Ensure compliant, secure, and reliable data.",
  },
  {
    id: "144",
    sIcon: sdicon5,
    title: "Business-wide Adoption",
    slug: "business-wide-adoption",
    description: "Help teams embrace data-driven transformation across the entire organization.",
  },
  {
    id: "145",
    sIcon: sdicon6,
    title: "Business-wide Adoption",
    slug: "business-wide-adoption",
    description: "Help teams embrace data-driven transformation across the entire organization.",
  },
  {
    id: "146",
    sIcon: sdicon7,
    title: "Business-wide Adoption",
    slug: "business-wide-adoption",
    description: "Help teams embrace data-driven transformation across the entire organization.",
  },
  {
    id: "147",
    sIcon: sdicon8,
    title: "Business-wide Adoption",
    slug: "business-wide-adoption",
    description: "Help teams embrace data-driven transformation across the entire organization.",
  },

  // 🔐 Security Solutions
  {
    id: "15",
    sIcon: scicon1,
    title: "Secure Your Network",
    slug: "secure-your-network",
    features: [
      "Consistently secure the enterprise",
      "Apply AI to prevent evasive threats",
      "Simplify network security operations",
      "Adopt Zero Trust across the network",
      "Simplify with AI-powered SASE",
    ],
  },
  {
    id: "16",
    sIcon: scicon2,
    title: "Secure Your Cloud",
    slug: "secure-your-cloud",
    features: [
      "End-to-end cloud security",
      "Real-time threat detection",
      "Identity & access management",
      "Data encryption & privacy",
      "Compliance & governance",
    ],
  },
  {
    id: "17",
    sIcon: scicon3,
    title: "Transform Your SOC",
    slug: "transform-your-soc",
    features: [
      "Accelerate threat detection",
      "Automate security processes",
      "Streamline incident response",
      "Manage attack surfaces",
      "Integrate security monitoring",
    ],
  },
  {
    id: "18",
    sIcon: scicon4,
    title: "Threat Intel & Response",
    slug: "threat-intel-response",
    features: [
      "Get expert-led defense",
      "Move from reactive to proactive",
      "Access world-class intel",
      "Rapid incident response",
      "Leverage expert experience",
    ],
  },
  {
    id: "19",
    sIcon: scicon5,
    title: "Solutions by Industry",
    slug: "solutions-by-industry",
    features: [
      "Public sector",
      "Financial services",
      "Manufacturing",
      "SMB solutions",
      "Healthcare",
    ],
  },

  // ⚙️ Infrastructure & DevOps
  {
    id: "20",
    sIcon: cdicon1,
    title: "Infrastructure Design",
    slug: "infrastructure-design",
  },
  {
    id: "21",
    sIcon: cdicon2,
    title: "Cost Optimization",
    slug: "cost-optimization",
    bgClass: "cd-dot_bg2",
  },
  {
    id: "22",
    sIcon: cdicon3,
    title: "Infrastructure as Code",
    slug: "infrastructure-as-code",
    bgClass: "cd-dot_bg3",
  },
  {
    id: "23",
    sIcon: cdicon4,
    title: "Continuous Integration",
    slug: "continuous-integration",
    bgClass: "cd-dot_bg4",
  },
  {
    id: "24",
    sIcon: cdicon5,
    title: "Continuous Deployment",
    slug: "continuous-deployment",
  },
  {
    id: "25",
    sIcon: cdicon6,
    title: "Blue-Green Deployment",
    slug: "blue-green-deployment",
    bgClass: "cd-dot_bg2",
  },
  {
    id: "26",
    sIcon: "", // Missing icon, optional fallback
    title: "Data Consistency",
    slug: "data-consistency",
    bgClass: "cd-dot_bg3",
  },
  {
    id: "27",
    sIcon: cdicon7,
    title: "Data Integrity",
    slug: "data-integrity",
    bgClass: "cd-dot_bg4",
  },
  {
    id: "28",
    sIcon: cdicon8,
    title: "Redundancy",
    slug: "redundancy",
  },
];


export default Services;