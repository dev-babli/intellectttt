import icon1 from "../images/icon/magic02.svg";
import icon2 from "../images/icon/magic02.svg";
import icon3 from "../images/icon/magic02.svg";
import icon4 from "../images/icon/magic02.svg";
import icon5 from "../images/icon/magic02.svg";
import icon6 from "../images/icon/magic02.svg";
import icon7 from "../images/icon/magic02.svg";
// import icon6 from "../images/icon/line-chart.gif";

import sicon1 from "../images/icon/ser-icon01.svg";
import sicon2 from "../images/icon/ser-icon02.svg";
import sicon3 from "../images/icon/ser-icon03.svg";
import sicon4 from "../images/icon/ser-icon04.svg";

import sdicon1 from "../images/icon/da-fea_icon01.svg";
import sdicon2 from "../images/icon/da-fea_icon02.svg";
import sdicon3 from "../images/icon/da-fea_icon03.svg";
import sdicon4 from "../images/icon/da-fea_icon04.svg";

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
    title: "Product Engineering",
    slug: "product-engineering",
    thumb1: "Strategy",
    thumb2: "Consultation",
    description: "We help bring your product vision to life with scalable and reliable software engineering.",
  },
  {
    id: "2",
    sImg: icon2,
    title: "Cloud Engineering",
    slug: "cloud-engineering",
    thumb1: "Management",
    thumb2: "Migration",
    description: "Our cloud experts manage and migrate your infrastructure securely to the cloud.",
  },
  {
    id: "3",
    sImg: icon3,
    title: "Data & AI",
    slug: "data-and-ai",
    thumb1: "Landing Page",
    thumb2: "Plugins",
    description: "Transform data into insights and build AI-powered solutions to improve business outcomes.",
  },
  {
    id: "4",
    sImg: icon4,
    title: "Enterprise Automation",
    slug: "enterprise-automation",
    thumb1: "Consultation",
    thumb2: "Solutions",
    description: "Automate workflows and systems to increase efficiency and reduce operational costs.",
  },
  {
    id: "5",
    sImg: icon5,
    title: "Quality Assurance",
    slug: "quality-assurance",
    thumb1: "Website",
    thumb2: "Mobile App",
    description: "Ensure reliability, performance, and user satisfaction through rigorous testing processes.",
  },

  // 👨‍💼 IT & Business Services
  {
    id: "6",
    sImg: icon6,
    title: "Enterprise Support",
    slug: "enterprise-support",
    description: "End-to-end support for enterprise IT environments across infrastructure, apps, and users.",
  },
  {
    id: "7",
    sImg: simg1,
    sIcon: sicon1,
    title: "IT Management",
    slug: "it-management",
  },
  {
    id: "8",
    sImg: simg2,
    sIcon: sicon2,
    title: "Data Tracking & Security",
    slug: "data-tracking-security",
  },
  {
    id: "9",
    sImg: simg3,
    sIcon: sicon3,
    title: "Custom CRM Services",
    slug: "custom-crm-services",
  },
  {
    id: "10",
    sImg: simg4,
    sIcon: sicon4,
    title: "Website Development",
    slug: "website-development",
  },

  // 📊 Data & AI Services
  {
    id: "11",
    sIcon: sdicon1,
    title: "Data Source Identification",
    slug: "data-source-identification",
    description: "We identify valuable data sources to drive smarter decisions and better automation.",
  },
  {
    id: "12",
    sIcon: sdicon2,
    title: "Data Ecosystem Setup",
    slug: "data-ecosystem-setup",
    description: "Set up your data warehouse and analytics platform to unlock business insights.",
  },
  {
    id: "13",
    sIcon: sdicon3,
    title: "AI Solution Design",
    slug: "ai-solution-design",
    description: "Design custom AI tools to automate decisions, optimize operations, and predict trends.",
  },
  {
    id: "14",
    sIcon: sdicon4,
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


const HealthcareServices = [
  {
    id: "1",
    sImg: icon1,
    title: "EHR Integration",
    slug: "ehr-integration",
    thumb1: "Interoperability",
    thumb2: "Compliance",
    description: "We integrate Electronic Health Records (EHR) systems with scalable, secure, and standards-based interfaces.",
  },
  {
    id: "2",
    sImg: icon2,
    title: "Telemedicine Platforms",
    slug: "telemedicine-platforms",
    thumb1: "Remote Care",
    thumb2: "HIPAA",
    description: "We build HIPAA-compliant video consultation and virtual care solutions for remote patient engagement.",
  },
  {
    id: "3",
    sImg: icon3,
    title: "Healthcare CRM Systems",
    slug: "healthcare-crm",
    thumb1: "Patient Engagement",
    thumb2: "Automation",
    description: "Streamline communication and automate follow-ups with intelligent CRM systems for healthcare providers.",
  },
  {
    id: "4",
    sImg: icon4,
    title: "Medical IoT & Wearables",
    slug: "medical-iot-wearables",
    thumb1: "Remote Monitoring",
    thumb2: "IoMT",
    description: "We develop connected solutions for medical wearables, health tracking devices, and remote vitals monitoring.",
  },
  {
    id: "5",
    sImg: icon5,
    title: "Health Data Analytics",
    slug: "health-data-analytics",
    thumb1: "AI Insights",
    thumb2: "Predictive Care",
    description: "Enable actionable insights from health data using machine learning, NLP, and advanced reporting dashboards.",
  },
  {
    id: "6",
    sImg: icon6,
    title: "Compliance & Security Solutions",
    slug: "healthcare-security-compliance",
    thumb1: "HIPAA",
    thumb2: "ISO 13485",
    description: "Ensure your health systems meet compliance standards through robust access control and audit mechanisms.",
  },
];


const AerospaceServices = [
  {
    id: "1",
    sImg: icon1,
    title: "Mission-Critical Software",
    slug: "mission-critical-software",
    thumb1: "Real-Time",
    thumb2: "High Reliability",
    description: "We develop high-assurance, fault-tolerant software for avionics and aerospace control systems.",
  },
  {
    id: "2",
    sImg: icon2,
    title: "Embedded Systems Engineering",
    slug: "embedded-systems-aerospace",
    thumb1: "RTOS",
    thumb2: "Firmware",
    description: "Design and develop embedded firmware for guidance, navigation, and control systems in aircrafts and satellites.",
  },
  {
    id: "3",
    sImg: icon3,
    title: "Aerospace Simulation Tools",
    slug: "aerospace-simulation",
    thumb1: "Flight Sim",
    thumb2: "Hardware-in-Loop",
    description: "Build complex simulation systems for aircraft testing, digital twin modeling, and operator training.",
  },
  {
    id: "4",
    sImg: icon4,
    title: "Secure Defense Networks",
    slug: "defense-network-security",
    thumb1: "Encryption",
    thumb2: "Zero Trust",
    description: "Design secure, resilient communication networks for defense infrastructure with end-to-end encryption.",
  },
  {
    id: "5",
    sImg: icon5,
    title: "Supply Chain Intelligence",
    slug: "aerospace-supply-chain",
    thumb1: "Predictive",
    thumb2: "Logistics AI",
    description: "Optimize aerospace manufacturing & maintenance supply chains with intelligent tracking and forecasting tools.",
  },
  {
    id: "6",
    sImg: icon6,
    title: "Compliance & Airworthiness Automation",
    slug: "aerospace-compliance",
    thumb1: "AS9100",
    thumb2: "DO-178C",
    description: "Automate documentation, traceability, and audit trails to meet industry standards and regulatory approvals.",
  },
];


const ManufacturingServices = [
  {
    id: "1",
    sImg: icon1,
    title: "Smart Factory Solutions",
    slug: "smart-factory-solutions",
    thumb1: "IoT",
    thumb2: "Automation",
    description: "We build connected smart factory ecosystems with real-time monitoring, control systems, and automation.",
  },
  {
    id: "2",
    sImg: icon2,
    title: "Predictive Maintenance Platforms",
    slug: "predictive-maintenance",
    thumb1: "AI Analytics",
    thumb2: "Sensor Data",
    description: "Use sensor data and machine learning to prevent equipment failures and reduce unplanned downtime.",
  },
  {
    id: "3",
    sImg: icon3,
    title: "MES & ERP Integrations",
    slug: "mes-erp-integration",
    thumb1: "SCADA",
    thumb2: "SAP/Oracle",
    description: "Connect Manufacturing Execution Systems with ERPs to ensure seamless data flow and resource planning.",
  },
  {
    id: "4",
    sImg: icon4,
    title: "Digital Twin Development",
    slug: "digital-twin-automotive",
    thumb1: "Simulation",
    thumb2: "Real-Time",
    description: "Create digital replicas of physical machines or vehicles for performance monitoring and process simulation.",
  },
  {
    id: "5",
    sImg: icon5,
    title: "Autonomous & ADAS Software",
    slug: "autonomous-vehicle-software",
    thumb1: "ADAS",
    thumb2: "Edge AI",
    description: "Develop software for Advanced Driver-Assistance Systems and autonomous vehicle navigation/control systems.",
  },
  {
    id: "6",
    sImg: icon6,
    title: "Quality Control Automation",
    slug: "automated-quality-control",
    thumb1: "Computer Vision",
    thumb2: "Inspection",
    description: "Implement AI-driven visual inspection tools to detect defects and improve quality assurance in manufacturing lines.",
  },
];


const BankingServices = [
  {
    id: "1",
    sImg: icon1,
    title: "Core Banking Modernization",
    slug: "core-banking-modernization",
    thumb1: "Cloud-Native",
    thumb2: "Secure",
    description: "We modernize legacy core banking systems into scalable, API-driven, cloud-native architectures.",
  },
  {
    id: "2",
    sImg: icon2,
    title: "Digital Wallet & UPI Integration",
    slug: "upi-wallet-integration",
    thumb1: "Payments",
    thumb2: "Mobile",
    description: "Build seamless, secure payment platforms including UPI, wallets, QR, and card processing systems.",
  },
  {
    id: "3",
    sImg: icon3,
    title: "AI-Powered Fraud Detection",
    slug: "fraud-detection-ai",
    thumb1: "Machine Learning",
    thumb2: "Risk Scoring",
    description: "Leverage AI to detect suspicious patterns in real-time and flag potential financial frauds proactively.",
  },
  {
    id: "4",
    sImg: icon4,
    title: "Robo-Advisory Platforms",
    slug: "robo-advisory-platforms",
    thumb1: "WealthTech",
    thumb2: "AI Advisory",
    description: "Deliver personalized financial advice using algorithmic engines and customer investment profiling.",
  },
  {
    id: "5",
    sImg: icon5,
    title: "RegTech & Compliance Automation",
    slug: "regtech-automation",
    thumb1: "KYC/AML",
    thumb2: "Audit Trails",
    description: "Automate compliance processes including KYC, AML, and reporting with regulatory-ready architectures.",
  },
  {
    id: "6",
    sImg: icon6,
    title: "Blockchain-based Solutions",
    slug: "blockchain-fintech",
    thumb1: "Ledger",
    thumb2: "Smart Contracts",
    description: "Develop decentralized apps for secure transactions, digital identity, and cross-border settlements.",
  },
];
const engineering = [
  {
    id: "1",
    sImg: icon1,
    title: "Cloud-Native Application Development",
    slug: "cloud-native-development",
    thumb1: "Microservices",
    thumb2: "Containers",
    description: "Design and deploy scalable cloud-native applications using Kubernetes, Docker, and serverless architecture across Azure, AWS, and GCP.",
  },
  {
    id: "2",
    sImg: icon2,
    title: "Infrastructure as Code (IaC)",
    slug: "infrastructure-as-code",
    thumb1: "Terraform",
    thumb2: "CI/CD",
    description: "Automate infrastructure provisioning and configuration using Terraform, CloudFormation, and ARM templates for repeatable, version-controlled environments.",
  },
  {
    id: "3",
    sImg: icon3,
    title: "Multi-Cloud Architecture & Migration",
    slug: "multi-cloud-migration",
    thumb1: "Azure / AWS / GCP",
    thumb2: "Zero Downtime",
    description: "Migrate on-premise or legacy systems to Azure, AWS, or GCP with robust planning, hybrid cloud strategy, and minimal downtime.",
  },
  {
    id: "4",
    sImg: icon4,
    title: "DevOps & Automation",
    slug: "devops-automation",
    thumb1: "CI/CD Pipelines",
    thumb2: "Monitoring",
    description: "Implement DevOps best practices using GitHub Actions, Jenkins, Azure DevOps, and native tools to enable automated builds, testing, and deployments.",
  },
  {
    id: "5",
    sImg: icon5,
    title: "Cloud Security & Governance",
    slug: "cloud-security-governance",
    thumb1: "Identity & Access",
    thumb2: "Compliance",
    description: "Strengthen cloud security with role-based access, policy enforcement, encryption, and regulatory compliance frameworks like HIPAA, SOC 2, and GDPR.",
  },
  {
    id: "6",
    sImg: icon6,
    title: "Cost Optimization & FinOps",
    slug: "cloud-cost-optimization",
    thumb1: "Cost Visibility",
    thumb2: "Efficiency",
    description: "Analyze cloud spend, optimize usage, and implement budgeting, tagging, and resource right-sizing using FinOps best practices.",
  },
];

const devOpsAndDevsec = [
  {
    id: "1",
    sImg: icon1,
    title: "Cloud-Native Application Development",
    slug: "cloud-native-development",
    thumb1: "Microservices",
    thumb2: "Containers",
    description:
      "Build and deploy resilient cloud-native applications leveraging Kubernetes, Docker, and serverless frameworks across Azure, AWS, and GCP.",
  },
  {
    id: "2",
    sImg: icon2,
    title: "Infrastructure as Code (IaC)",
    slug: "infrastructure-as-code",
    thumb1: "Terraform",
    thumb2: "CI/CD Automation",
    description:
      "Streamline infrastructure setup using tools like Terraform, AWS CloudFormation, and Azure ARM templates with GitOps and CI/CD integration.",
  },
  {
    id: "3",
    sImg: icon3,
    title: "Multi-Cloud Architecture & Migration",
    slug: "multi-cloud-migration",
    thumb1: "Azure / AWS / GCP",
    thumb2: "Zero Downtime",
    description:
      "Seamlessly migrate and modernize legacy systems to a secure multi-cloud environment using hybrid strategies and minimal downtime techniques.",
  },
  {
    id: "4",
    sImg: icon4,
    title: "DevOps & Automation",
    slug: "devops-automation",
    thumb1: "CI/CD Pipelines",
    thumb2: "Monitoring & Logging",
    description:
      "Implement DevOps pipelines with Jenkins, GitHub Actions, Azure DevOps, and GitLab CI, enabling end-to-end automation, observability, and faster delivery.",
  },
  {
    id: "5",
    sImg: icon5,
    title: "DevSecOps & Cloud Security",
    slug: "devsecops-cloud-security",
    thumb1: "Shift-Left Security",
    thumb2: "Compliance & Governance",
    description:
      "Integrate security in every stage of your SDLC using SAST, DAST, container scanning, IAM, and compliance frameworks like NIST, SOC 2, and ISO 27001.",
  },
  {
    id: "6",
    sImg: icon6,
    title: "Cloud Cost Optimization & FinOps",
    slug: "cloud-cost-optimization",
    thumb1: "Billing Insights",
    thumb2: "Resource Right-Sizing",
    description:
      "Maximize ROI with real-time cost monitoring, budget enforcement, idle resource cleanup, and FinOps-driven cloud financial governance.",
  },
];

const appModernization = [
  {
    id: "1",
    sImg: icon1,
    title: "Cloud-Native Application Development",
    slug: "cloud-native-development",
    thumb1: "Microservices",
    thumb2: "Containers",
    description:
      "Accelerate modernization by building cloud-native applications using microservices and containers across Azure, AWS, and GCP.",
    content:
      "We help organizations reimagine their legacy systems as cloud-native apps—modular, containerized, and highly scalable. Using Kubernetes, Docker, and serverless platforms, we build applications optimized for speed, resilience, and portability. Our approach decouples monoliths into services, improving agility and enabling continuous delivery in cloud and hybrid environments."
  },
  {
    id: "2",
    sImg: icon2,
    title: "Infrastructure as Code (IaC)",
    slug: "infrastructure-as-code",
    thumb1: "Terraform",
    thumb2: "CI/CD Automation",
    description:
      "Support modernization efforts with IaC tools like Terraform, CloudFormation, and ARM templates for repeatable, scalable cloud infrastructure.",
    content:
      "Modern apps require modern infrastructure. We use Infrastructure as Code (IaC) to define and manage scalable environments across clouds. From bootstrapping environments with Terraform to integrating deployment with CI/CD tools, we eliminate manual provisioning, reduce configuration drift, and ensure your infrastructure evolves with your applications."
  },
  {
    id: "3",
    sImg: icon3,
    title: "Multi-Cloud Architecture & Migration",
    slug: "multi-cloud-migration",
    thumb1: "Azure / AWS / GCP",
    thumb2: "Modernization Strategy",
    description:
      "Migrate and refactor monolithic applications into multi-cloud or hybrid environments with minimal risk and downtime.",
    content:
      "We modernize legacy workloads by designing migration strategies that balance risk, cost, and performance. Whether you're moving from on-premise or between clouds, we support lift-and-shift, replatforming, or full re-architectures. Our multi-cloud readiness ensures flexibility, high availability, and vendor neutrality for your modern apps."
  },
  {
    id: "4",
    sImg: icon4,
    title: "DevOps for Modern Apps",
    slug: "devops-automation",
    thumb1: "Automated Pipelines",
    thumb2: "Agile Delivery",
    description:
      "Modernize delivery pipelines with DevOps tools to support rapid iterations, testing, and deployment of microservices-based applications.",
    content:
      "We implement modern CI/CD pipelines to match the velocity of microservices development. Leveraging Jenkins, GitHub Actions, GitLab, and Azure DevOps, we enable rapid build-test-release cycles. Integrated monitoring and feedback loops ensure quality and uptime across frequent releases in modern cloud environments."
  },
  {
    id: "5",
    sImg: icon5,
    title: "Secure & Compliant Architecture",
    slug: "devsecops-cloud-security",
    thumb1: "Security by Design",
    thumb2: "Zero Trust",
    description:
      "Embed security into every layer of your modernized applications—code, containers, APIs, and data—while aligning with compliance standards.",
    content:
      "App modernization must not compromise security. We embed security controls into the development lifecycle using DevSecOps principles—covering source code analysis, dependency scanning, container security, and zero-trust network architecture. We align with industry standards like ISO 27001, SOC 2, and HIPAA to protect your data and ensure compliance from day one."
  },
  {
    id: "6",
    sImg: icon6,
    title: "Application Performance & Cost Optimization",
    slug: "app-performance-cost-optimization",
    thumb1: "Scalability",
    thumb2: "Efficiency",
    description:
      "Boost application performance and reduce cloud spend through intelligent scaling, load distribution, and resource optimization.",
    content:
      "We fine-tune modernized applications for performance and cost-efficiency. This includes autoscaling strategies, load balancer tuning, database optimization, and memory profiling. Combined with FinOps practices, we provide visibility into usage patterns, identify waste, and align performance with business priorities."
  }
];

const apiIntegrationServices = [
  {
    id: "1",
    sImg: icon1,
    title: "Custom API Development",
    slug: "custom-api-development",
    thumb1: "REST / GraphQL",
    thumb2: "API-First Design",
    description:
      "Design and build secure, scalable APIs using REST, GraphQL, or gRPC to enable seamless data exchange and digital experiences.",
    content:
      "We specialize in building modern APIs that form the backbone of connected digital ecosystems. Our API-first approach ensures loose coupling, reusability, and agility across systems. Whether you're exposing internal services or integrating third-party platforms, we ensure your APIs are well-documented, version-controlled, and protected with rate limiting, authentication, and authorization protocols."
  },
  {
    id: "2",
    sImg: icon2,
    title: "Integration Platform Enablement",
    slug: "integration-platform-enablement",
    thumb1: "iPaaS",
    thumb2: "Enterprise Messaging",
    description:
      "Implement integration platforms (MuleSoft, Boomi, Azure Logic Apps, etc.) to unify applications, data, and services across hybrid environments.",
    content:
      "We deploy and configure leading Integration Platform as a Service (iPaaS) solutions to enable scalable, low-code integrations. Our expertise spans MuleSoft, Dell Boomi, Azure Integration Services, and AWS AppFlow. With reusable connectors, enterprise messaging patterns, and real-time synchronization, we ensure agility and reliability in business operations across SaaS and on-prem systems."
  },
  {
    id: "3",
    sImg: icon3,
    title: "Legacy System Integration",
    slug: "legacy-system-integration",
    thumb1: "Adapters",
    thumb2: "ESB / Middleware",
    description:
      "Bridge legacy systems with modern applications using APIs, middleware, and connectors to extend functionality and avoid disruption.",
    content:
      "We help enterprises unlock value from legacy systems by exposing them through modern integration patterns. Whether via custom adapters, ESBs (like IBM Integration Bus or TIBCO), or REST API layers, we abstract complexity while maintaining business continuity. Our solutions enable real-time data sync and process orchestration between old and new tech stacks."
  },
  {
    id: "4",
    sImg: icon4,
    title: "API Management & Governance",
    slug: "api-management-governance",
    thumb1: "Security & Throttling",
    thumb2: "Analytics & Lifecycle",
    description:
      "Implement full-lifecycle API management using platforms like Apigee, Azure API Management, or AWS API Gateway.",
    content:
      "We provide robust API management frameworks to control access, enforce security policies, and monitor API consumption. Our services include gateway configuration, API versioning, caching, and developer portal setup. Governance practices ensure consistent standards, compliance, and reliable performance across your growing API ecosystem."
  },
  {
    id: "5",
    sImg: icon5,
    title: "Event-Driven & Asynchronous Integration",
    slug: "event-driven-integration",
    thumb1: "Kafka / PubSub",
    thumb2: "Loose Coupling",
    description:
      "Enable real-time, decoupled communication between services using event-driven architecture and message queues.",
    content:
      "For high-throughput and responsive integrations, we leverage platforms like Apache Kafka, AWS SNS/SQS, and Google Pub/Sub. Our event-driven designs support microservices, stream processing, and asynchronous workflows that scale effortlessly and remain resilient under load. Ideal for IoT, e-commerce, and distributed systems needing real-time responsiveness."
  },
  {
    id: "6",
    sImg: icon6,
    title: "B2B & Third-Party Integrations",
    slug: "b2b-third-party-integrations",
    thumb1: "EDI / Webhooks",
    thumb2: "Secure APIs",
    description:
      "Connect to external partners and services with secure APIs, webhooks, and EDI to streamline supply chain, payments, and logistics.",
    content:
      "We build secure, standards-compliant integrations with external systems such as payment gateways, logistics providers, ERPs, and CRMs. Whether via EDI, OAuth-secured APIs, or real-time webhooks, we ensure data is exchanged accurately and securely, helping automate B2B transactions and improve ecosystem collaboration."
  }
];

const managedITServices = [
  {
    id: "1",
    sImg: icon1,
    title: "24/7 IT Helpdesk & NOC Support",
    slug: "it-helpdesk-noc-support",
    thumb1: "Always-On Support",
    thumb2: "Incident Response",
    description:
      "Round-the-clock helpdesk and NOC operations to resolve incidents, minimize downtime, and ensure service continuity.",
    content:
      "Our 24/7 Helpdesk and Network Operations Center (NOC) deliver real-time incident management, user support, and issue escalation. We handle L1–L3 tickets, provide remote resolution, and ensure continuous availability of critical infrastructure with SLA-driven performance."
  },
  {
    id: "2",
    sImg: icon2,
    title: "Infrastructure & Network Monitoring (24/7 NOC)",
    slug: "infrastructure-network-monitoring",
    thumb1: "Real-Time Dashboards",
    thumb2: "Alerting & Correlation",
    description:
      "Monitor infrastructure and networks 24/7 for performance, security, and availability with proactive alerting and resolution.",
    content:
      "We provide centralized monitoring of servers, switches, routers, endpoints, and cloud resources using enterprise-grade tools. Our NOC team ensures early detection of anomalies, automated alert correlation, root cause analysis, and rapid incident resolution to maintain uptime and service health."
  },
  {
    id: "3",
    sImg: icon3,
    title: "Advanced Network Security & Compliance",
    slug: "network-security-compliance",
    thumb1: "Intrusion Detection",
    thumb2: "Patch Management",
    description:
      "Secure your IT infrastructure with continuous monitoring, vulnerability scanning, and compliance enforcement.",
    content:
      "We implement layered network defenses with firewall management, IDS/IPS, and endpoint protection. Regular patching, threat intelligence integration, and compliance audits (HIPAA, ISO, etc.) help ensure infrastructure resilience against evolving cyber threats."
  },
  {
    id: "4",
    sImg: icon4,
    title: "Cloud Infrastructure Monitoring & Optimization",
    slug: "cloud-monitoring-optimization",
    thumb1: "Multi-Cloud Visibility",
    thumb2: "Performance Tuning",
    description:
      "End-to-end visibility across AWS, Azure, and GCP with tools to optimize cost, availability, and performance.",
    content:
      "We monitor your public, private, or hybrid cloud infrastructure for latency, availability, and misconfigurations. With real-time metrics, performance tuning, and cost tracking, our NOC ensures optimal cloud operations and fast resolution of incidents or anomalies."
  },
  {
    id: "5",
    sImg: icon5,
    title: "Backup Monitoring & Disaster Recovery (BDR)",
    slug: "backup-monitoring-bdr",
    thumb1: "Daily Backup Verification",
    thumb2: "Failover Readiness",
    description:
      "Continuously track backup success, replication status, and recovery readiness for business continuity.",
    content:
      "Our team monitors backup jobs daily, ensures RTO/RPO alignment, and conducts regular failover testing. Whether using Veeam, Acronis, or cloud-native backup tools, we validate data integrity and enable rapid recovery from hardware failures, ransomware, or disasters."
  },
  {
    id: "6",
    sImg: icon6,
    title: "IT Asset Discovery & Lifecycle Monitoring",
    slug: "asset-lifecycle-monitoring",
    thumb1: "Real-Time Inventory",
    thumb2: "Usage & Health Tracking",
    description:
      "Track infrastructure assets in real-time—including health, utilization, and lifecycle events—for better control and planning.",
    content:
      "We use automated discovery tools to track IT assets across your environment. From onboarding to retirement, our services cover license tracking, utilization metrics, warranty alerts, and vendor SLAs—ensuring maximum ROI and operational visibility."
  }
];

const nocSupport = [
  {
    id: "1",
    sImg: icon1,
    title: "24/7 IT Helpdesk & NOC Support",
    slug: "it-helpdesk-noc-support",
    thumb1: "Always-On Support",
    thumb2: "Incident Response",
    description:
      "Round-the-clock helpdesk and NOC operations to resolve incidents, minimize downtime, and ensure service continuity.",
    content:
      "Our 24/7 Helpdesk and Network Operations Center (NOC) deliver real-time incident management, user support, and issue escalation. We handle L1–L3 tickets, provide remote resolution, and ensure continuous availability of critical infrastructure with SLA-driven performance."
  },
  {
    id: "2",
    sImg: icon2,
    title: "Infrastructure & Network Monitoring (24/7 NOC)",
    slug: "infrastructure-network-monitoring",
    thumb1: "Real-Time Dashboards",
    thumb2: "Alerting & Correlation",
    description:
      "Monitor infrastructure and networks 24/7 for performance, security, and availability with proactive alerting and resolution.",
    content:
      "We provide centralized monitoring of servers, switches, routers, endpoints, and cloud resources using enterprise-grade tools. Our NOC team ensures early detection of anomalies, automated alert correlation, root cause analysis, and rapid incident resolution to maintain uptime and service health."
  },
  {
    id: "3",
    sImg: icon3,
    title: "Advanced Network Security & Compliance",
    slug: "network-security-compliance",
    thumb1: "Intrusion Detection",
    thumb2: "Patch Management",
    description:
      "Secure your IT infrastructure with continuous monitoring, vulnerability scanning, and compliance enforcement.",
    content:
      "We implement layered network defenses with firewall management, IDS/IPS, and endpoint protection. Regular patching, threat intelligence integration, and compliance audits (HIPAA, ISO, etc.) help ensure infrastructure resilience against evolving cyber threats."
  },
  {
    id: "4",
    sImg: icon4,
    title: "Cloud Infrastructure Monitoring & Optimization",
    slug: "cloud-monitoring-optimization",
    thumb1: "Multi-Cloud Visibility",
    thumb2: "Performance Tuning",
    description:
      "End-to-end visibility across AWS, Azure, and GCP with tools to optimize cost, availability, and performance.",
    content:
      "We monitor your public, private, or hybrid cloud infrastructure for latency, availability, and misconfigurations. With real-time metrics, performance tuning, and cost tracking, our NOC ensures optimal cloud operations and fast resolution of incidents or anomalies."
  },
  {
    id: "5",
    sImg: icon5,
    title: "Backup Monitoring & Disaster Recovery (BDR)",
    slug: "backup-monitoring-bdr",
    thumb1: "Daily Backup Verification",
    thumb2: "Failover Readiness",
    description:
      "Continuously track backup success, replication status, and recovery readiness for business continuity.",
    content:
      "Our team monitors backup jobs daily, ensures RTO/RPO alignment, and conducts regular failover testing. Whether using Veeam, Acronis, or cloud-native backup tools, we validate data integrity and enable rapid recovery from hardware failures, ransomware, or disasters."
  },
  {
    id: "6",
    sImg: icon6,
    title: "IT Asset Discovery & Lifecycle Monitoring",
    slug: "asset-lifecycle-monitoring",
    thumb1: "Real-Time Inventory",
    thumb2: "Usage & Health Tracking",
    description:
      "Track infrastructure assets in real-time—including health, utilization, and lifecycle events—for better control and planning.",
    content:
      "We use automated discovery tools to track IT assets across your environment. From onboarding to retirement, our services cover license tracking, utilization metrics, warranty alerts, and vendor SLAs—ensuring maximum ROI and operational visibility."
  },
  {
    id: "7",
    sImg: icon7, // Replace with actual icon
    title: "Application Support (L1–L3)",
    slug: "application-support-l1-l3",
    thumb1: "Issue Resolution",
    thumb2: "Application Monitoring",
    description:
      "Comprehensive L1–L3 support for enterprise applications, ensuring performance, uptime, and user satisfaction.",
    content:
      "Our team provides application-level support across all tiers—from basic user queries (L1), to in-depth troubleshooting (L2), and advanced fixes or vendor coordination (L3). We ensure minimal disruption through proactive monitoring, regular patching, and seamless escalation handling to maintain application performance and business continuity."
  }
];

const serviceDesk = [
  {
    id: "1",
    sImg: icon1,
    title: "24/7 Service Desk & NOC Operations",
    slug: "24x7-service-desk-noc",
    thumb1: "Continuous Support",
    thumb2: "Incident Management",
    description:
      "Around-the-clock Service Desk and NOC operations ensuring IT stability, swift incident response, and SLA adherence.",
    content:
      "Our integrated 24/7 Service Desk and Network Operations Center (NOC) deliver multi-tiered support, managing L1–L3 incidents with real-time escalation, ticket lifecycle tracking, and KPI-driven resolution. We act as a central hub for user support, infrastructure stability, and IT service continuity."
  },
  {
    id: "2",
    sImg: icon2,
    title: "Proactive Infrastructure & Network Monitoring",
    slug: "infrastructure-network-monitoring",
    thumb1: "Service Health Dashboards",
    thumb2: "Event Correlation & Escalation",
    description:
      "Enterprise-wide infrastructure and network monitoring to prevent outages and meet business SLAs.",
    content:
      "We offer centralized 24x7 monitoring of IT assets—servers, switches, endpoints, and cloud services—using ITSM-aligned tools. Our NOC team correlates alerts, automates responses, performs root-cause analysis, and ensures quick restoration of services, keeping business-critical systems always available."
  },
  {
    id: "3",
    sImg: icon3,
    title: "Network Security Operations & Compliance Assurance",
    slug: "network-security-operations",
    thumb1: "Threat Monitoring",
    thumb2: "Audit Readiness",
    description:
      "Secure IT environments through continuous security operations and compliance-driven service practices.",
    content:
      "Our CoE integrates security into NOC operations with real-time threat detection (IDS/IPS), firewall policies, endpoint protection, and regular patch management. We support compliance with HIPAA, ISO, SOC 2, and more through structured audits, controls, and risk mitigation strategies."
  },
  {
    id: "4",
    sImg: icon4,
    title: "Cloud Operations Monitoring & Optimization",
    slug: "cloud-ops-monitoring",
    thumb1: "Cloud Health Visibility",
    thumb2: "Performance Governance",
    description:
      "Comprehensive visibility and management across AWS, Azure, and GCP environments with performance optimization.",
    content:
      "Our team monitors hybrid/multi-cloud workloads in real time, identifying latency, performance bottlenecks, and configuration drift. We support FinOps practices, enable proactive alerting, and drive service reliability with continuous optimization aligned to ITSM change and incident workflows."
  },
  {
    id: "5",
    sImg: icon5,
    title: "Backup Monitoring & Business Continuity (BDR)",
    slug: "bdr-monitoring",
    thumb1: "Recovery Assurance",
    thumb2: "Data Resilience",
    description:
      "Ensure business continuity through monitored backups, recovery validation, and DR readiness.",
    content:
      "Our Service Desk & NOC validate backup operations daily, align with RTO/RPO goals, and test failovers periodically. Supporting platforms like Veeam, Acronis, and cloud-native backups, we ensure operational continuity through verified restore capabilities and disaster recovery planning."
  },
  {
    id: "6",
    sImg: icon6,
    title: "IT Asset Lifecycle & CMDB Integration",
    slug: "asset-lifecycle-cmdb",
    thumb1: "Real-Time Discovery",
    thumb2: "Configuration Tracking",
    description:
      "Automated asset discovery and lifecycle monitoring integrated with CMDB for improved control and visibility.",
    content:
      "We track IT assets across their lifecycle—from acquisition to decommission—using auto-discovery tools and integrating with the CMDB. Our CoE ensures software compliance, usage optimization, contract/vendor tracking, and alignment with ITIL Configuration and Asset Management best practices."
  },
  {
    id: "7",
    sImg: icon7,
    title: "Enterprise Application Support (L1–L3)",
    slug: "enterprise-app-support",
    thumb1: "User Assistance",
    thumb2: "Escalation Handling",
    description:
      "Structured L1–L3 support for enterprise applications aligned with ITSM workflows and SLAs.",
    content:
      "Our Service Desk provides L1–L3 application support across key business systems—resolving incidents, monitoring performance, applying patches, and coordinating with vendors when needed. With structured ticket flows, knowledge bases, and escalation paths, we ensure application reliability and user satisfaction."
  }
];

const managedResourceServicesCard = [
  {
    id: "1",
    sImg: icon1,
    title: "CAD/CAE Automation Solutions",
    slug: "cad-cae-automation",
    thumb1: "Design Efficiency",
    thumb2: "Process Automation",
    description:
      "Automate repetitive CAD/CAE workflows to accelerate design cycles and improve precision.",
    content:
      "Our experts develop custom automation scripts and integrations to streamline design and simulation tasks within tools like CATIA, NX, SolidWorks, Ansys, and HyperMesh. This reduces manual effort, increases productivity, and ensures consistent output across projects."
  },
  {
    id: "2",
    sImg: icon2,
    title: "PLM Implementation & Customization",
    slug: "plm-services",
    thumb1: "Digital Thread",
    thumb2: "Platform Optimization",
    description:
      "Deploy and tailor PLM platforms like Teamcenter, Windchill, and ENOVIA to meet your business needs.",
    content:
      "We offer end-to-end PLM services—from implementation and integration to module customization and support. Our solutions ensure product data consistency, BOM management, and seamless collaboration across engineering, manufacturing, and service functions."
  },
  {
    id: "3",
    sImg: icon3,
    title: "Simulation Process Integration",
    slug: "simulation-integration",
    thumb1: "Multi-Physics Integration",
    thumb2: "Faster Decision-Making",
    description:
      "Integrate CAE tools into your engineering process for faster, more accurate simulations.",
    content:
      "We help automate simulation pipelines, connecting CAD and CAE environments to reduce turnaround times and manual intervention. Our solutions support FEA, CFD, and EM simulations—enabling better product insights early in the design phase."
  },
  {
    id: "4",
    sImg: icon4,
    title: "Engineering Resource Augmentation",
    slug: "engineering-augmentation",
    thumb1: "PLM & CAD Specialists",
    thumb2: "Flexible Models",
    description:
      "Augment your engineering team with skilled PLM, CAD, and CAE professionals as per project needs.",
    content:
      "We provide domain-aligned resources including CAD designers, PLM analysts, simulation engineers, and data migration experts. Our flexible engagement models help you scale your team quickly without compromising on quality or domain expertise."
  },
  {
    id: "5",
    sImg: icon5,
    title: "Model-Based Engineering Services",
    slug: "model-based-engineering",
    thumb1: "MBSE & Digital Twin",
    thumb2: "System Simulation",
    description:
      "Implement model-based approaches for systems engineering, analysis, and design validation.",
    content:
      "Our MBSE services support the development of system models, digital twins, and simulation environments. We enable early validation, traceability, and stakeholder collaboration across the entire product lifecycle—improving innovation and reducing errors."
  },
  {
    id: "6",
    sImg: icon6,
    title: "Data Migration & Legacy System Modernization",
    slug: "plm-data-migration",
    thumb1: "Legacy PLM Support",
    thumb2: "Data Consistency",
    description:
      "Migrate legacy engineering data securely and efficiently to modern PLM systems.",
    content:
      "We handle complex data migration from legacy systems to platforms like Teamcenter, Windchill, and ENOVIA—ensuring integrity, security, and minimal downtime. Our structured approach guarantees validation, error handling, and compliance with industry standards."
  }
];
const AutomationServices = [
  {
    id: "1",
    sImg: icon1,
    title: "CAD/CAE Automation Solutions",
    slug: "cad-cae-automation",
    thumb1: "Design Efficiency",
    thumb2: "Process Automation",
    description:
      "Automate repetitive CAD/CAE workflows to accelerate design cycles and improve precision.",
    content:
      "Our experts develop custom automation scripts and integrations to streamline design and simulation tasks within tools like CATIA, NX, SolidWorks, Ansys, and HyperMesh. This reduces manual effort, increases productivity, and ensures consistent output across projects.",
  },
  {
    id: "2",
    sImg: icon2,
    title: "PLM Implementation & Customization",
    slug: "plm-services",
    thumb1: "Digital Thread",
    thumb2: "Platform Optimization",
    description:
      "Deploy and tailor PLM platforms like Teamcenter, Windchill, and ENOVIA to meet your business needs.",
    content:
      "We offer end-to-end PLM services—from implementation and integration to module customization and support. Our solutions ensure product data consistency, BOM management, and seamless collaboration across engineering, manufacturing, and service functions.",
  },
  {
    id: "3",
    sImg: icon3,
    title: "Simulation Process Integration",
    slug: "simulation-integration",
    thumb1: "Multi-Physics Integration",
    thumb2: "Faster Decision-Making",
    description:
      "Integrate CAE tools into your engineering process for faster, more accurate simulations.",
    content:
      "We help automate simulation pipelines, connecting CAD and CAE environments to reduce turnaround times and manual intervention. Our solutions support FEA, CFD, and EM simulations—enabling better product insights early in the design phase.",
  },
  {
    id: "4",
    sImg: icon4,
    title: "Engineering Resource Augmentation",
    slug: "engineering-augmentation",
    thumb1: "PLM & CAD Specialists",
    thumb2: "Flexible Models",
    description:
      "Augment your engineering team with skilled PLM, CAD, and CAE professionals as per project needs.",
    content:
      "We provide domain-aligned resources including CAD designers, PLM analysts, simulation engineers, and data migration experts. Our flexible engagement models help you scale your team quickly without compromising on quality or domain expertise.",
  },
  {
    id: "5",
    sImg: icon5,
    title: "Model-Based Engineering Services",
    slug: "model-based-engineering",
    thumb1: "MBSE & Digital Twin",
    thumb2: "System Simulation",
    description:
      "Implement model-based approaches for systems engineering, analysis, and design validation.",
    content:
      "Our MBSE services support the development of system models, digital twins, and simulation environments. We enable early validation, traceability, and stakeholder collaboration across the entire product lifecycle—improving innovation and reducing errors.",
  },
  {
    id: "6",
    sImg: icon6,
    title: "Data Migration & Legacy System Modernization",
    slug: "plm-data-migration",
    thumb1: "Legacy PLM Support",
    thumb2: "Data Consistency",
    description:
      "Migrate legacy engineering data securely and efficiently to modern PLM systems.",
    content:
      "We handle complex data migration from legacy systems to platforms like Teamcenter, Windchill, and ENOVIA—ensuring integrity, security, and minimal downtime. Our structured approach guarantees validation, error handling, and compliance with industry standards.",
  },
];

const mesIotServiceCards = [
  {
    id: "1",
    sImg: icon1,
    title: "MES Implementation & Integration",
    slug: "mes-implementation",
    thumb1: "Real-Time Visibility",
    thumb2: "System Interoperability",
    description:
      "Seamlessly integrate Manufacturing Execution Systems (MES) with ERP, SCADA, and shop-floor systems.",
    content:
      "We implement MES platforms like Siemens Opcenter, Rockwell FactoryTalk, and GE Proficy. Our team ensures smooth integration with enterprise systems, enabling production tracking, order execution, and quality control with real-time feedback and traceability."
  },
  {
    id: "2",
    sImg: icon2,
    title: "Industrial IoT (IIoT) Solutions",
    slug: "iiot-solutions",
    thumb1: "Sensor Connectivity",
    thumb2: "Data-Driven Decisions",
    description:
      "Connect machines, sensors, and devices to unlock real-time insights and enable smart manufacturing.",
    content:
      "We design and deploy IIoT architectures using MQTT, OPC-UA, and edge gateways. Our solutions collect, process, and transmit factory-floor data to cloud or on-prem systems—enabling predictive maintenance, OEE analysis, and anomaly detection."
  },
  {
    id: "3",
    sImg: icon3,
    title: "Edge Computing for Smart Factories",
    slug: "edge-computing",
    thumb1: "Low Latency",
    thumb2: "Offline Reliability",
    description:
      "Deploy edge computing solutions for real-time analytics and decision-making at the source.",
    content:
      "Our edge solutions process high-volume sensor and machine data locally to reduce latency and network dependency. This enables mission-critical applications such as quality checks, machine learning inference, and downtime prevention—even in bandwidth-limited environments."
  },
  {
    id: "4",
    sImg: icon4,
    title: "Predictive Maintenance & Condition Monitoring",
    slug: "predictive-maintenance",
    thumb1: "Reduced Downtime",
    thumb2: "Sensor Analytics",
    description:
      "Leverage IoT data and AI models to predict equipment failures before they happen.",
    content:
      "We implement predictive maintenance systems by combining sensor telemetry with machine learning algorithms. Our solutions monitor vibration, temperature, pressure, and other parameters to proactively identify wear-and-tear risks and schedule maintenance efficiently."
  },
  {
    id: "5",
    sImg: icon5,
    title: "Digital Twin & Factory Simulation",
    slug: "digital-twin",
    thumb1: "Virtual Replication",
    thumb2: "Process Optimization",
    description:
      "Create real-time digital replicas of assets, machines, or entire production lines for simulation and control.",
    content:
      "We build digital twins that mirror physical operations, allowing manufacturers to simulate changes, analyze system behavior, and optimize production without disrupting operations. Our solutions enhance decision-making across planning, quality, and throughput."
  },
  {
    id: "6",
    sImg: icon6,
    title: "Legacy System Modernization",
    slug: "legacy-modernization",
    thumb1: "System Uplift",
    thumb2: "Future-Ready",
    description:
      "Upgrade or integrate outdated shop-floor systems to be compatible with modern MES and IoT platforms.",
    content:
      "We help manufacturers transition from siloed, outdated systems to interconnected, data-driven environments. Our experts modernize PLCs, HMI/SCADA, and proprietary databases—ensuring full compliance, scalability, and compatibility with modern Industry 4.0 frameworks."
  }
];

const digitalTwinSmartFactoryCards = [
  {
    id: "1",
    sImg: icon1,
    title: "Digital Twin Development",
    slug: "digital-twin-development",
    thumb1: "Real-Time Simulation",
    thumb2: "Data Synchronization",
    description:
      "Build virtual replicas of assets, processes, or systems for monitoring and optimization.",
    content:
      "We design and deploy Digital Twins that mirror physical environments in real-time. From machines and production lines to entire facilities, our solutions enable simulation, predictive analysis, and data-driven decision-making."
  },
  {
    id: "2",
    sImg: icon2,
    title: "Smart Factory Enablement",
    slug: "smart-factory-enablement",
    thumb1: "Connected Operations",
    thumb2: "Automation at Scale",
    description:
      "Digitally transform your factory with real-time data, robotics, and adaptive production systems.",
    content:
      "We modernize manufacturing plants by integrating IoT sensors, edge devices, MES, and automation systems. Our smart factory frameworks provide visibility, traceability, and responsiveness—fueling productivity and reducing waste."
  },
  {
    id: "3",
    sImg: icon3,
    title: "Digital Thread Integration",
    slug: "digital-thread",
    thumb1: "Lifecycle Connectivity",
    thumb2: "Data Continuity",
    description:
      "Establish a seamless digital thread from design to production to after-sales service.",
    content:
      "Our solutions connect CAD/PLM, MES, ERP, and IoT systems to create an uninterrupted flow of data across the product lifecycle. This empowers traceability, closed-loop feedback, and faster innovation cycles."
  },
  {
    id: "4",
    sImg: icon4,
    title: "Predictive & Prescriptive Analytics",
    slug: "predictive-analytics",
    thumb1: "AI-Driven Insights",
    thumb2: "Operational Intelligence",
    description:
      "Use advanced analytics to predict failures, optimize processes, and automate decision-making.",
    content:
      "We implement AI/ML models on top of Digital Twin and IoT data to identify patterns, prevent downtimes, and recommend process improvements—enabling data-driven operations with continuous learning."
  },
  {
    id: "5",
    sImg: icon5,
    title: "Immersive Visualization (AR/VR)",
    slug: "immersive-visualization",
    thumb1: "AR-Enabled Maintenance",
    thumb2: "VR Training Simulations",
    description:
      "Enhance user interaction with digital assets through Augmented and Virtual Reality experiences.",
    content:
      "Our AR/VR-enabled Digital Twins allow maintenance teams and engineers to visualize equipment behavior, simulate changes, and train in safe virtual environments—boosting understanding and minimizing downtime."
  },
  {
    id: "6",
    sImg: icon6,
    title: "System Integration & Cybersecurity",
    slug: "smart-factory-integration",
    thumb1: "Secure Architecture",
    thumb2: "End-to-End Connectivity",
    description:
      "Ensure secure, scalable integration of factory systems and protect against cyber threats.",
    content:
      "We offer full-stack integration of Digital Twin platforms with MES, SCADA, ERP, and cloud infrastructure. Our cybersecurity frameworks ensure encrypted data flows, role-based access, and compliance with global standards like NIST and ISA/IEC 62443."
  }
];

const industry40SolutionCards = [
  {
    id: "1",
    sImg: icon1,
    title: "Smart Factory Enablement",
    slug: "smart-factory",
    thumb1: "Connected Machines",
    thumb2: "Real-Time Operations",
    description:
      "Digitally transform your shop floor with IoT, AI, and automation technologies.",
    content:
      "We design and implement smart factory architectures that connect machines, sensors, and systems. Our solutions deliver visibility, traceability, and automation across the production lifecycle—reducing downtime and driving operational efficiency."
  },
  {
    id: "2",
    sImg: icon2,
    title: "Industrial IoT (IIoT) Integration",
    slug: "iiot-integration",
    thumb1: "Sensor Networks",
    thumb2: "Edge & Cloud Sync",
    description:
      "Connect physical assets to digital platforms for real-time data insights and control.",
    content:
      "Our IIoT services integrate sensor data using protocols like OPC-UA, MQTT, and REST APIs, enabling centralized monitoring, predictive maintenance, and event-based alerts. We support hybrid edge-cloud architectures for flexibility and scalability."
  },
  {
    id: "3",
    sImg: icon3,
    title: "AI & Advanced Analytics",
    slug: "ai-analytics",
    thumb1: "Predictive Intelligence",
    thumb2: "Process Optimization",
    description:
      "Unlock actionable insights from operational data using AI, ML, and analytics dashboards.",
    content:
      "We build data pipelines and AI models to monitor process deviations, predict equipment failures, and optimize production variables. Our visual dashboards provide stakeholders with KPIs, OEE metrics, and real-time anomaly detection."
  },
  {
    id: "4",
    sImg: icon4,
    title: "Digital Twin Solutions",
    slug: "digital-twin",
    thumb1: "Virtual Simulation",
    thumb2: "Real-Time Sync",
    description:
      "Simulate and control physical assets through real-time virtual replicas.",
    content:
      "We develop digital twins for machines, production lines, and systems—enabling simulation, remote monitoring, and performance prediction. This enhances quality, reduces rework, and supports continuous improvement initiatives."
  },
  {
    id: "5",
    sImg: icon5,
    title: "Cyber-Physical System Integration",
    slug: "cyber-physical-integration",
    thumb1: "Human-Machine Interface",
    thumb2: "Secure Connectivity",
    description:
      "Bridge physical and digital systems to enable intelligent automation and control.",
    content:
      "We integrate PLCs, SCADA, MES, and cloud applications into unified architectures. Our solutions support bidirectional data flow, secure connectivity, and real-time control—laying the foundation for smart, adaptive operations."
  },
  {
    id: "6",
    sImg: icon6,
    title: "Cloud & Edge Infrastructure",
    slug: "cloud-edge",
    thumb1: "Scalable Platforms",
    thumb2: "Low-Latency Processing",
    description:
      "Deploy resilient cloud and edge computing environments for high-performance data operations.",
    content:
      "We architect cloud-native and edge-based solutions to collect, process, and act on industrial data. Our platforms support latency-sensitive applications, secure data handling, and rapid deployment across global manufacturing sites."
  }
];

const itStaffAugmentationCards = [
  {
    id: "1",
    sImg: icon1,
    title: "Full-Stack Development Experts",
    slug: "full-stack-developers",
    thumb1: "Frontend & Backend",
    thumb2: "API & Database",
    description:
      "Get experienced developers across modern stacks like MERN, MEAN, Java, Python, and .NET.",
    content:
      "Our talent pool includes full-stack engineers who can design, build, and maintain scalable applications from UI to database. We support web, mobile, and enterprise software development tailored to your tech stack and business needs."
  },
  {
    id: "2",
    sImg: icon2,
    title: "Cloud & DevOps Engineers",
    slug: "cloud-devops-resources",
    thumb1: "CI/CD Automation",
    thumb2: "AWS, Azure, GCP",
    description:
      "Augment your teams with certified DevOps professionals for scalable cloud infrastructure.",
    content:
      "We provide DevOps engineers proficient in automating deployments, infrastructure as code (IaC), containerization, and monitoring. Our experts work across AWS, Azure, GCP, and Kubernetes environments to improve speed, stability, and security."
  },
  {
    id: "3",
    sImg: icon3,
    title: "UI/UX Designers & Frontend Engineers",
    slug: "frontend-designers",
    thumb1: "Modern Interfaces",
    thumb2: "React, Angular, Vue",
    description:
      "Hire creative professionals to deliver high-performance, user-centric digital experiences.",
    content:
      "From wireframing and prototyping to building pixel-perfect UIs, our designers and frontend developers ensure engaging, responsive, and accessible digital products. Tools include Figma, Adobe XD, and frameworks like Tailwind, MUI, and Chakra UI."
  },
  {
    id: "4",
    sImg: icon4,
    title: "QA & Test Automation Specialists",
    slug: "qa-testing-automation",
    thumb1: "Manual & Automated QA",
    thumb2: "Selenium, Cypress, JMeter",
    description:
      "Ensure application quality with skilled testers who can integrate into your agile teams.",
    content:
      "Our QA engineers conduct functional, regression, performance, and security testing using both manual and automated tools. They’re well-versed in frameworks like Selenium, Postman, Playwright, and CI tools to maintain software reliability and release confidence."
  },
  {
    id: "5",
    sImg: icon5,
    title: "Data Engineers & Analysts",
    slug: "data-resources",
    thumb1: "ETL & Warehousing",
    thumb2: "Analytics & BI",
    description:
      "Scale your data strategy with engineers skilled in data pipelines, modeling, and analytics.",
    content:
      "We offer data professionals who specialize in ETL, big data, data lakes, and BI dashboards. Technologies covered include SQL, Python, Spark, Power BI, and Snowflake—driving better decisions and business intelligence."
  },
  {
    id: "6",
    sImg: icon6,
    title: "Flexible Engagement Models",
    slug: "staffing-models",
    thumb1: "Onsite / Offshore / Hybrid",
    thumb2: "Short & Long-Term",
    description:
      "Choose how you want to scale—contract, contract-to-hire, or full-time equivalents (FTEs).",
    content:
      "We support flexible staffing models tailored to your project timelines and budgets. Whether you need one developer or a dedicated team, we enable quick ramp-up, seamless integration, and full visibility into performance and delivery."
  }
];
const healthcareStaffingCards = [
  {
    id: "1",
    sImg: icon1,
    title: "Clinical & Regulatory Staffing",
    slug: "clinical-regulatory-staffing",
    thumb1: "Clinical Trial Support",
    thumb2: "FDA / EMA Compliance",
    description:
      "Deploy experts across clinical research, medical writing, pharmacovigilance, and regulatory affairs.",
    content:
      "We provide contract and FTE resources for roles including Clinical Research Associates (CRAs), Regulatory Affairs Specialists, Medical Writers, and Drug Safety Associates. Our professionals are trained in ICH-GCP, FDA, and EMA guidelines."
  },
  {
    id: "2",
    sImg: icon2,
    title: "Healthcare IT & EHR Talent",
    slug: "healthcare-it-staffing",
    thumb1: "EHR Systems",
    thumb2: "HIPAA-Compliant Talent",
    description:
      "Hire experienced professionals for Electronic Health Record (EHR) systems, telemedicine, and digital health initiatives.",
    content:
      "Our pool includes certified Epic, Cerner, and Meditech consultants, along with developers, analysts, and integration specialists. We ensure all placements are HIPAA-compliant and experienced in healthcare workflows and infrastructure."
  },
  {
    id: "3",
    sImg: icon3,
    title: "Life Sciences R&D Staffing",
    slug: "lifesciences-research-staffing",
    thumb1: "Biotech & Pharma",
    thumb2: "Lab & Research",
    description:
      "Support your research and product development lifecycle with domain-aligned scientists and analysts.",
    content:
      "We source skilled professionals in molecular biology, biostatistics, bioinformatics, and analytical chemistry. From early discovery to commercial readiness, we provide staff who understand regulated lab environments and scientific rigor."
  },
  {
    id: "4",
    sImg: icon4,
    title: "Quality Assurance & Validation",
    slug: "qa-validation",
    thumb1: "GxP Validation",
    thumb2: "CSV, QA, QMS",
    description:
      "Ensure regulatory and quality compliance with skilled QA engineers and validation experts.",
    content:
      "We deliver professionals with expertise in Computer System Validation (CSV), Quality Management Systems (QMS), SOP documentation, and internal audits. Our consultants are experienced in GxP, 21 CFR Part 11, and ISO standards."
  },
  {
    id: "5",
    sImg: icon5,
    title: "Medical Device & Regulatory Engineering",
    slug: "med-device-staffing",
    thumb1: "FDA Class I-III",
    thumb2: "Risk Management",
    description:
      "Access engineers and compliance professionals for medical device development and regulatory submission.",
    content:
      "We provide mechanical, electrical, and software engineers familiar with ISO 13485, IEC 62304, and FDA design controls. Our resources support product development, DHF documentation, risk management, and 510(k)/CE submission preparation."
  },
  {
    id: "6",
    sImg: icon6,
    title: "Flexible Engagement Models",
    slug: "engagement-models-healthcare",
    thumb1: "Contract / FTE / Project-Based",
    thumb2: "Onsite / Offshore / Hybrid",
    description:
      "Choose how you want to scale your team—on-demand, contract-to-hire, or fully managed teams.",
    content:
      "We offer adaptable staffing models to meet dynamic resourcing needs while maintaining regulatory compliance. Our delivery teams ensure fast onboarding, background verification, and policy alignment specific to healthcare and life sciences."
  }
];

const directHireCards = [
  {
    id: "1",
    sImg: icon1,
    title: "Permanent Staffing Solutions",
    slug: "permanent-staffing",
    thumb1: "Full-Time Professionals",
    thumb2: "Culture-Fit Hiring",
    description:
      "Hire experienced professionals aligned to your long-term business goals and culture.",
    content:
      "We help organizations build strong internal teams by providing access to high-quality full-time candidates. Our sourcing process includes technical evaluation, behavioral screening, and culture-fit assessments to ensure long-term retention and success."
  },
  {
    id: "2",
    sImg: icon2,
    title: "Contract-to-Hire Staffing",
    slug: "contract-to-hire",
    thumb1: "Try-Before-You-Hire",
    thumb2: "Flexible Conversion",
    description:
      "Evaluate talent on the job before making a full-time hiring decision.",
    content:
      "Our contract-to-hire model allows you to onboard resources on a short-term basis with the flexibility to convert them into permanent hires based on performance and fit. This reduces hiring risk and accelerates team productivity."
  },
  {
    id: "3",
    sImg: icon3,
    title: "Executive & Leadership Hiring",
    slug: "executive-hiring",
    thumb1: "CxO & Director Roles",
    thumb2: "Confidential Search",
    description:
      "Source top-tier executive talent for mission-critical leadership roles.",
    content:
      "Our executive search services are tailored for sensitive, high-impact leadership roles across functions. We conduct discreet, targeted searches to identify candidates with strategic vision, domain expertise, and proven leadership capabilities."
  },
  {
    id: "4",
    sImg: icon4,
    title: "Technology & Engineering Talent",
    slug: "tech-engineering-hiring",
    thumb1: "Product & Platform Engineers",
    thumb2: "Cloud, AI, DevOps",
    description:
      "Build your core technology teams with skilled engineers and architects.",
    content:
      "We specialize in hiring software engineers, solution architects, DevOps engineers, data scientists, and cloud experts. Whether you need talent for product development, modernization, or platform support, we deliver resources that align with your tech stack and velocity."
  },
  {
    id: "5",
    sImg: icon5,
    title: "Domain-Specific Hiring",
    slug: "domain-specific-talent",
    thumb1: "BFSI, Healthcare, Retail",
    thumb2: "Pre-vetted Resources",
    description:
      "Access professionals with deep domain experience tailored to your industry.",
    content:
      "From fintech developers to healthcare analysts and retail product managers, we provide talent with proven industry expertise. Our domain-aligned hiring ensures faster onboarding, contextual understanding, and operational effectiveness from day one."
  },
  {
    id: "6",
    sImg: icon6,
    title: "Scalable Hiring Engagements",
    slug: "scalable-hiring",
    thumb1: "High-Volume Hiring",
    thumb2: "Custom SLAs & TATs",
    description:
      "Scale hiring operations rapidly across locations and functions.",
    content:
      "We support high-volume hiring initiatives with dedicated recruitment teams, structured onboarding processes, and SLA-driven performance. Whether you’re building a new center of excellence or scaling delivery operations, our engagement models support aggressive timelines."
  }
];

const corpToCorpCards = [
  {
    id: "1",
    sImg: icon1,
    title: "Corp-to-Corp Staffing",
    slug: "corp-to-corp",
    thumb1: "Vendor-Based Engagement",
    thumb2: "Independent Entities",
    description:
      "Partner with incorporated consultants or vendor companies under a B2B contract.",
    content:
      "Our Corp-to-Corp staffing model enables businesses to engage highly skilled consultants through their incorporated entities. This model is ideal for contract-based projects where compliance, tax handling, and liability remain with the vendor. We ensure proper documentation, rate negotiation, and onboarding in line with IRS and client policies."
  },
  {
    id: "2",
    sImg: icon2,
    title: "W2 Employment Model",
    slug: "w2-staffing",
    thumb1: "Payroll on Our Rolls",
    thumb2: "Benefit Administration",
    description:
      "Hire candidates directly employed by us under W2 for full-time or contract roles.",
    content:
      "Under our W2 staffing model, professionals are onboarded as our full-time employees with complete payroll, tax deductions, benefits, and compliance handled by us. This approach ensures talent reliability and reduces administrative burden for clients, especially in long-term or managed service engagements."
  },
  {
    id: "3",
    sImg: icon3,
    title: "Compliance & Documentation",
    slug: "compliance-docs",
    thumb1: "1099, W-8/W-9, E-Verify",
    thumb2: "Right-to-Work Checks",
    description:
      "Stay fully compliant with federal, state, and client-specific employment regulations.",
    content:
      "We rigorously validate all documentation—SSN verification, E-Verify, W-9/W-8BEN, and employment authorization. Whether W2 or C2C, our process ensures adherence to IRS, USCIS, and client onboarding policies. We maintain audit trails and manage renewals proactively."
  },
  {
    id: "4",
    sImg: icon4,
    title: "Rate & Tax Classification Guidance",
    slug: "rate-tax-guidance",
    thumb1: "Pay Rate Structuring",
    thumb2: "Tax Class Validation",
    description:
      "Optimize your rate models and tax classifications for smooth project execution.",
    content:
      "Our team provides consultative support on how to classify resources correctly (W2 vs. C2C vs. 1099), structure rates, and ensure correct deductions. This reduces misclassification risks and helps you stay within budget while meeting compliance standards."
  },
  {
    id: "5",
    sImg: icon5,
    title: "Project-Based Deployment",
    slug: "project-based",
    thumb1: "Short-Term Assignments",
    thumb2: "Task-Oriented Staffing",
    description:
      "Deploy contract resources for specific project milestones or short-term deliverables.",
    content:
      "Whether you need a Salesforce developer for a 3-month implementation or a cloud architect for migration planning, our flexible W2/C2C deployment model ensures quick ramp-up and goal-based delivery. Engagements can scale with project scope and timelines."
  },
  {
    id: "6",
    sImg: icon6,
    title: "Vendor Ecosystem Management",
    slug: "vendor-ecosystem",
    thumb1: "VMS/ MSP Support",
    thumb2: "Sub-Vendor Coordination",
    description:
      "Streamline communication and compliance across multiple C2C vendors.",
    content:
      "We assist clients working within VMS/MSP frameworks by coordinating sub-vendors, maintaining timesheet accuracy, and handling onboarding/offboarding workflows efficiently. This ensures smooth collaboration across your extended vendor ecosystem."
  }
];


const HealthcareServicesIT = [
  {
    id: "1",
    sImg: icon1,
    title: "Integrated Health Record Systems",
    slug: "integrated-health-records",
    thumb1: "Data Interoperability",
    thumb2: "Secure Exchange",
    description:
      "We create unified platforms that connect EHR/EMR systems for secure, real-time access across healthcare networks.",
  },
  {
    id: "2",
    sImg: icon2,
    title: "Virtual Care & Telehealth Solutions",
    slug: "virtual-care-telehealth",
    thumb1: "Digital Clinics",
    thumb2: "Patient Access",
    description:
      "Launch reliable telehealth platforms that support virtual visits, e-prescriptions, and seamless provider-patient interactions.",
  },
  {
    id: "3",
    sImg: icon3,
    title: "Patient Engagement & CRM Platforms",
    slug: "patient-crm-solutions",
    thumb1: "Smart Workflows",
    thumb2: "Personalized Outreach",
    description:
      "Deploy healthcare-specific CRM tools that enhance engagement, streamline appointments, and automate communication touchpoints.",
  },
  {
    id: "4",
    sImg: icon4,
    title: "IoMT & Connected Health Devices",
    slug: "connected-health-iomt",
    thumb1: "Smart Devices",
    thumb2: "Live Monitoring",
    description:
      "Build IoMT ecosystems for wearables, sensors, and remote monitoring to support preventive and chronic care programs.",
  },
  {
    id: "5",
    sImg: icon5,
    title: "AI-Driven Health Analytics",
    slug: "ai-health-analytics",
    thumb1: "Predictive Models",
    thumb2: "Clinical Insights",
    description:
      "Leverage AI and big data to forecast trends, identify risks, and improve clinical and operational decision-making.",
  },
  {
    id: "6",
    sImg: icon6,
    title: "Regulatory Compliance & Cybersecurity",
    slug: "healthcare-compliance-cybersecurity",
    thumb1: "Data Protection",
    thumb2: "Risk Management",
    description:
      "Safeguard patient data and ensure end-to-end compliance with HIPAA, GDPR, ISO 13485, and NIST standards.",
  },
];

const RetailEcommerceServices = [
  {
    id: "1",
    sImg: icon1,
    title: "E-commerce Platform Development",
    slug: "ecommerce-platform-development",
    thumb1: "Multi-Channel",
    thumb2: "Scalable Architecture",
    description: "Build robust, scalable e-commerce platforms that support multiple sales channels and payment gateways.",
  },
  {
    id: "2",
    sImg: icon2,
    title: "Omnichannel Retail Solutions",
    slug: "omnichannel-retail-solutions",
    thumb1: "Seamless Experience",
    thumb2: "Inventory Sync",
    description: "Create unified shopping experiences across online, mobile, and physical stores with real-time inventory synchronization.",
  },
  {
    id: "3",
    sImg: icon3,
    title: "AI-Powered Personalization",
    slug: "ai-personalization-retail",
    thumb1: "Recommendation Engines",
    thumb2: "Customer Insights",
    description: "Implement AI-driven recommendation systems and personalized marketing campaigns to boost customer engagement and sales.",
  },
  {
    id: "4",
    sImg: icon4,
    title: "Supply Chain & Inventory Management",
    slug: "supply-chain-inventory",
    thumb1: "Real-Time Tracking",
    thumb2: "Demand Forecasting",
    description: "Optimize supply chain operations with intelligent inventory management, demand forecasting, and automated reordering systems.",
  },
  {
    id: "5",
    sImg: icon5,
    title: "Mobile Commerce & Apps",
    slug: "mobile-commerce-apps",
    thumb1: "Native & PWA",
    thumb2: "Payment Integration",
    description: "Develop mobile-first shopping experiences with native apps and Progressive Web Apps (PWAs) for enhanced customer engagement.",
  },
  {
    id: "6",
    sImg: icon6,
    title: "Analytics & Business Intelligence",
    slug: "retail-analytics-bi",
    thumb1: "Customer Behavior",
    thumb2: "Performance Metrics",
    description: "Leverage data analytics to understand customer behavior, optimize pricing strategies, and improve operational efficiency.",
  },
];

const EnergyUtilitiesServices = [
  {
    id: "1",
    sImg: icon1,
    title: "Smart Grid Solutions",
    slug: "smart-grid-solutions",
    thumb1: "IoT Integration",
    thumb2: "Real-Time Monitoring",
    description: "Implement intelligent grid systems with IoT sensors, real-time monitoring, and automated demand response capabilities.",
  },
  {
    id: "2",
    sImg: icon2,
    title: "Renewable Energy Management",
    slug: "renewable-energy-management",
    thumb1: "Solar & Wind",
    thumb2: "Energy Storage",
    description: "Develop platforms for renewable energy integration, storage optimization, and grid balancing for sustainable power systems.",
  },
  {
    id: "3",
    sImg: icon3,
    title: "Energy Analytics & Forecasting",
    slug: "energy-analytics-forecasting",
    thumb1: "Predictive Models",
    thumb2: "Load Balancing",
    description: "Use AI and machine learning to predict energy demand, optimize generation, and improve grid reliability and efficiency.",
  },
  {
    id: "4",
    sImg: icon4,
    title: "Customer Energy Management",
    slug: "customer-energy-management",
    thumb1: "Smart Meters",
    thumb2: "Usage Insights",
    description: "Empower customers with smart metering, usage analytics, and energy management tools for better consumption control.",
  },
  {
    id: "5",
    sImg: icon5,
    title: "Grid Security & Cybersecurity",
    slug: "grid-security-cybersecurity",
    thumb1: "Threat Detection",
    thumb2: "Compliance",
    description: "Protect critical infrastructure with advanced cybersecurity solutions, threat detection, and regulatory compliance frameworks.",
  },
  {
    id: "6",
    sImg: icon6,
    title: "Asset Management & Maintenance",
    slug: "asset-management-maintenance",
    thumb1: "Predictive Maintenance",
    thumb2: "Equipment Health",
    description: "Implement predictive maintenance systems to monitor equipment health, prevent failures, and optimize asset lifecycle management.",
  },
];

const EducationTrainingServices = [
  {
    id: "1",
    sImg: icon1,
    title: "Learning Management Systems (LMS)",
    slug: "learning-management-systems",
    thumb1: "Course Management",
    thumb2: "Student Engagement",
    description: "Build comprehensive LMS platforms that support course creation, student tracking, and interactive learning experiences.",
  },
  {
    id: "2",
    sImg: icon2,
    title: "Virtual Classroom & Collaboration Tools",
    slug: "virtual-classroom-collaboration",
    thumb1: "Real-Time Interaction",
    thumb2: "Video Conferencing",
    description: "Develop virtual learning environments with video conferencing, whiteboarding, and collaborative tools for remote education.",
  },
  {
    id: "3",
    sImg: icon3,
    title: "Adaptive Learning & AI Tutoring",
    slug: "adaptive-learning-ai-tutoring",
    thumb1: "Personalized Learning",
    thumb2: "AI-Powered",
    description: "Create intelligent tutoring systems that adapt to individual learning styles and provide personalized educational experiences.",
  },
  {
    id: "4",
    sImg: icon4,
    title: "Assessment & Analytics Platforms",
    slug: "assessment-analytics-platforms",
    thumb1: "Progress Tracking",
    thumb2: "Performance Analytics",
    description: "Build assessment tools and analytics dashboards to track student progress, identify learning gaps, and improve outcomes.",
  },
  {
    id: "5",
    sImg: icon5,
    title: "Mobile Learning & Microlearning",
    slug: "mobile-learning-microlearning",
    thumb1: "Bite-Sized Content",
    thumb2: "Mobile-First",
    description: "Develop mobile learning apps and microlearning modules for on-the-go education and skill development.",
  },
  {
    id: "6",
    sImg: icon6,
    title: "Corporate Training & Skill Development",
    slug: "corporate-training-skill-development",
    thumb1: "Employee Upskilling",
    thumb2: "Certification Tracking",
    description: "Create corporate training platforms with skill assessment, certification tracking, and compliance management for workforce development.",
  },
];

const LogisticsTransportationServices = [
  {
    id: "1",
    sImg: icon1,
    title: "Fleet Management & Tracking",
    slug: "fleet-management-tracking",
    thumb1: "Real-Time GPS",
    thumb2: "Route Optimization",
    description: "Implement comprehensive fleet management systems with GPS tracking, route optimization, and driver performance monitoring.",
  },
  {
    id: "2",
    sImg: icon2,
    title: "Supply Chain Visibility & Analytics",
    slug: "supply-chain-visibility-analytics",
    thumb1: "End-to-End Tracking",
    thumb2: "Predictive Analytics",
    description: "Create end-to-end supply chain visibility platforms with real-time tracking, predictive analytics, and performance optimization.",
  },
  {
    id: "3",
    sImg: icon3,
    title: "Warehouse Management Systems (WMS)",
    slug: "warehouse-management-systems",
    thumb1: "Inventory Control",
    thumb2: "Automation",
    description: "Develop intelligent WMS solutions for inventory management, order fulfillment, and warehouse automation optimization.",
  },
  {
    id: "4",
    sImg: icon4,
    title: "Last-Mile Delivery Optimization",
    slug: "last-mile-delivery-optimization",
    thumb1: "Route Planning",
    thumb2: "Customer Experience",
    description: "Optimize last-mile delivery with intelligent route planning, real-time updates, and enhanced customer communication.",
  },
  {
    id: "5",
    sImg: icon5,
    title: "Transportation Management Systems (TMS)",
    slug: "transportation-management-systems",
    thumb1: "Multi-Modal",
    thumb2: "Cost Optimization",
    description: "Build TMS platforms for multi-modal transportation planning, cost optimization, and carrier management.",
  },
  {
    id: "6",
    sImg: icon6,
    title: "IoT & Smart Logistics",
    slug: "iot-smart-logistics",
    thumb1: "Sensor Networks",
    thumb2: "Condition Monitoring",
    description: "Implement IoT solutions for cargo monitoring, temperature control, and real-time condition tracking across the supply chain.",
  },
];

// Comprehensive IoT Services array combining all IoT-related services
const IoTServices = [
  ...mesIotServiceCards,
  ...digitalTwinSmartFactoryCards,
  {
    id: "7",
    sImg: icon1,
    title: "Smart City IoT Solutions",
    slug: "smart-city-iot",
    thumb1: "Urban Intelligence",
    thumb2: "Connected Infrastructure",
    description: "Build intelligent city infrastructure with IoT sensors for traffic management, environmental monitoring, and public safety.",
    content: "We develop smart city solutions that connect urban infrastructure through IoT networks. Our platforms enable real-time monitoring of traffic, air quality, waste management, and public utilities—creating more efficient, sustainable, and livable cities."
  },
  {
    id: "8",
    sImg: icon2,
    title: "Healthcare IoT & Wearables",
    slug: "healthcare-iot-wearables",
    thumb1: "Remote Monitoring",
    thumb2: "Patient Care",
    description: "Connect medical devices and wearables for remote patient monitoring and personalized healthcare.",
    content: "Our healthcare IoT solutions integrate medical devices, wearables, and monitoring systems to enable remote patient care, continuous health tracking, and early intervention. We ensure HIPAA compliance and secure data transmission for sensitive health information."
  },
  {
    id: "9",
    sImg: icon3,
    title: "Energy IoT & Smart Grid",
    slug: "energy-iot-smart-grid",
    thumb1: "Grid Intelligence",
    thumb2: "Energy Optimization",
    description: "Implement smart grid solutions with IoT sensors for energy monitoring, demand response, and grid optimization.",
    content: "We build intelligent energy management systems that monitor consumption, predict demand, and optimize distribution. Our IoT solutions enable real-time grid monitoring, automated demand response, and integration with renewable energy sources."
  },
  {
    id: "10",
    sImg: icon4,
    title: "Logistics IoT & Supply Chain",
    slug: "logistics-iot-supply-chain",
    thumb1: "End-to-End Tracking",
    thumb2: "Condition Monitoring",
    description: "Enable real-time tracking and monitoring across the entire supply chain with IoT sensors.",
    content: "Our logistics IoT solutions provide end-to-end visibility across supply chains with real-time tracking, temperature monitoring, and condition alerts. We help optimize routes, reduce losses, and improve delivery reliability through connected sensors and analytics."
  }
];

// AI & GenAI Services - using existing Services array with AI focus
const aiGenAIServices = Services.filter(service => 
  service.title.includes("AI") || 
  service.title.includes("Data") || 
  service.title.includes("Machine Learning") ||
  service.title.includes("Automation")
);

// Cloud & Application Services - using existing engineering array
const cloudAppServices = engineering;

// Data & Analytics Services - using existing Services array with data focus
const dataAnalyticsServices = Services.filter(service => 
  service.title.includes("Data") || 
  service.title.includes("Analytics") ||
  service.title.includes("AI")
);

// LLM Integration Services - using existing Services array with AI/ML focus
const llmIntegrationServices = Services.filter(service => 
  service.title.includes("AI") || 
  service.title.includes("Machine Learning") ||
  service.title.includes("Data")
);

export { Services,
  HealthcareServices,
  AerospaceServices,
  ManufacturingServices,
  BankingServices,
  engineering,
  devOpsAndDevsec,
  appModernization,
apiIntegrationServices,managedITServices, nocSupport, serviceDesk, managedResourceServicesCard, AutomationServices, mesIotServiceCards, digitalTwinSmartFactoryCards, industry40SolutionCards, itStaffAugmentationCards,healthcareStaffingCards,directHireCards, corpToCorpCards, HealthcareServicesIT, RetailEcommerceServices, EnergyUtilitiesServices, EducationTrainingServices, LogisticsTransportationServices, IoTServices, aiGenAIServices, cloudAppServices, dataAnalyticsServices, llmIntegrationServices };
