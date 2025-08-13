import React from "react";
import MasterSubServiceTemplate from "../../components/templates/MasterSubServiceTemplate";
import { 
  Speed, 
  TrendingUp, 
  Settings, 
  Cloud,
  Security,
  Analytics,
  RocketLaunch,
  Lightbulb,
  CheckCircle,
  SmartToy,
  Psychology,
  Memory,
  IntegrationInstructions,
  AutoFixHigh,
  DataUsage
} from '@mui/icons-material';

const MLEngineeringMLOps = () => {
  return (
    <MasterSubServiceTemplate
      // Hero Section
      heroTitle="ML Engineering & MLOps Consulting"
      heroSubtitle="Scalable Machine Learning Operations"
      heroDescription="We help companies build, deploy, and maintain scalable machine learning systems. From model development to production deployment and ongoing operations, we provide end-to-end ML engineering and MLOps solutions that drive real business value."
      heroButtonText="Start ML Engineering Journey"
      heroButtonLink="/contact"
      heroBackgroundImage="/herosectionimages/Sliders/Digital Technology.webp"
      heroTextColor="white"
      heroFeatures={[
        {
          icon: <Settings />,
          title: "ML Pipeline Development",
          description: "Build robust, scalable machine learning pipelines"
        },
        {
          icon: <Cloud />,
          title: "Model Deployment",
          description: "Deploy ML models to production with confidence"
        },
        {
          icon: <Analytics />,
          title: "Monitoring & Maintenance",
          description: "Monitor model performance and maintain quality"
        }
      ]}
      heroTheme="dark"

      // Problem/Solution Section
      problemSolutionTitle="The ML Engineering & MLOps Challenge & Our Solution"
      problemSolutionSubtitle="We understand the complexities of building and maintaining production ML systems and have the expertise to make MLOps work for your business"
      problems={[
        {
          title: "Model Development to Production Gap",
          description: "Difficulty transitioning ML models from development to production, leading to deployment delays and operational challenges."
        },
        {
          title: "Scalability & Performance Issues",
          description: "ML systems that don't scale with business growth, causing performance bottlenecks and reliability problems."
        },
        {
          title: "Model Monitoring & Maintenance",
          description: "Lack of proper monitoring and maintenance systems for ML models, leading to performance degradation and drift."
        },
        {
          title: "Infrastructure & Tooling Complexity",
          description: "Complex ML infrastructure and tooling requirements that are difficult to manage and maintain effectively."
        }
      ]}
      solutions={[
        {
          title: "End-to-End ML Pipeline Development",
          description: "Complete ML pipeline development from data ingestion to model deployment and monitoring."
        },
        {
          title: "Scalable ML Infrastructure",
          description: "Cloud-native ML infrastructure that scales with your business and handles production workloads."
        },
        {
          title: "Comprehensive Model Monitoring",
          description: "Advanced monitoring and alerting systems to track model performance and detect issues proactively."
        },
        {
          title: "Automated MLOps Workflows",
          description: "Automated CI/CD pipelines and workflows for ML model development, testing, and deployment."
        }
      ]}
      problemSolutionVariant="split"

      // Service Offerings (Benefits/Use Cases)
      serviceOfferingsTitle="Key Benefits of ML Engineering & MLOps"
      serviceOfferingsSubtitle="Discover how professional ML engineering and MLOps can transform your machine learning operations"
      services={[
        {
          icon: <Settings />,
          title: "ML Pipeline Development",
          description: "Build robust, scalable machine learning pipelines for data processing and model training.",
          features: [
            "Data pipeline development",
            "Feature engineering",
            "Model training automation",
            "Pipeline orchestration"
          ],
          link: "/contact",
          ctaText: "Learn More"
        },
        {
          icon: <Cloud />,
          title: "Model Deployment & Serving",
          description: "Deploy ML models to production with confidence and ensure reliable model serving.",
          features: [
            "Model deployment automation",
            "A/B testing frameworks",
            "Canary deployments",
            "Model versioning"
          ],
          link: "/contact",
          ctaText: "Learn More"
        },
        {
          icon: <Analytics />,
          title: "Model Monitoring & Observability",
          description: "Monitor model performance, detect drift, and maintain model quality in production.",
          features: [
            "Performance monitoring",
            "Drift detection",
            "Alert systems",
            "Model explainability"
          ],
          link: "/contact",
          ctaText: "Learn More"
        },
        {
          icon: <IntegrationInstructions />,
          title: "ML Infrastructure & Tooling",
          description: "Build and manage scalable ML infrastructure and development tools.",
          features: [
            "Cloud infrastructure setup",
            "ML platform development",
            "Tool integration",
            "Resource management"
          ],
          link: "/contact",
          ctaText: "Learn More"
        },
        {
          icon: <Security />,
          title: "ML Security & Governance",
          description: "Ensure ML systems meet security standards and governance requirements.",
          features: [
            "Model security",
            "Data protection",
            "Access controls",
            "Compliance frameworks"
          ],
          link: "/contact",
          ctaText: "Learn More"
        },
        {
          icon: <AutoFixHigh />,
          title: "ML Automation & CI/CD",
          description: "Automate ML workflows and implement continuous integration and deployment.",
          features: [
            "Automated testing",
            "CI/CD pipelines",
            "Workflow automation",
            "Release management"
          ],
          link: "/contact",
          ctaText: "Learn More"
        }
      ]}
      serviceOfferingsVariant="default"

      // Benefits Section (Process/Workflow)
      benefitsTitle="How ML Engineering & MLOps Works"
      benefitsSubtitle="Our proven process for building and maintaining production ML systems"
      benefits={[
        {
          icon: <RocketLaunch />,
          title: "ML Strategy & Architecture",
          description: "Define your ML strategy, architecture, and infrastructure requirements.",
          features: [
            "ML strategy development",
            "Architecture design",
            "Technology selection",
            "Infrastructure planning"
          ],
          metric: {
            value: "2-3",
            label: "Weeks Planning"
          }
        },
        {
          icon: <Lightbulb />,
          title: "Pipeline Development & Training",
          description: "Develop ML pipelines, train models, and implement automation workflows.",
          features: [
            "Pipeline development",
            "Model training",
            "Automation setup",
            "Testing & validation"
          ],
          metric: {
            value: "4-8",
            label: "Weeks Development"
          }
        },
        {
          icon: <CheckCircle />,
          title: "Deployment & Operations",
          description: "Deploy ML systems to production and establish monitoring and maintenance.",
          features: [
            "Production deployment",
            "Monitoring setup",
            "Operations procedures",
            "Ongoing maintenance"
          ],
          metric: {
            value: "1-2",
            label: "Weeks Deployment"
          }
        }
      ]}

      // FAQ Section
      faqTitle="Frequently Asked Questions"
      faqSubtitle="Find answers to common questions about ML Engineering and MLOps"
      faqItems={[
        {
          question: "What is the difference between ML Engineering and MLOps?",
          answer: "ML Engineering focuses on building ML systems and pipelines, while MLOps focuses on deploying, monitoring, and maintaining ML models in production. Both are essential for successful ML implementations."
        },
        {
          question: "How do you ensure ML models perform well in production?",
          answer: "We implement comprehensive monitoring, testing, and validation processes. This includes performance monitoring, drift detection, A/B testing, and automated retraining pipelines to maintain model quality."
        },
        {
          question: "What ML infrastructure and tools do you recommend?",
          answer: "We recommend cloud-native solutions like AWS SageMaker, Azure ML, or Google Vertex AI, combined with open-source tools like MLflow, Kubeflow, and TensorFlow Serving. The choice depends on your specific needs and budget."
        },
        {
          question: "How do you handle model versioning and deployment?",
          answer: "We implement automated CI/CD pipelines for ML models, including versioning, testing, and deployment strategies. This includes canary deployments, A/B testing, and rollback capabilities for safe production deployments."
        },
        {
          question: "What about ML security and compliance?",
          answer: "We implement security measures including data encryption, access controls, model security, and compliance frameworks. We ensure ML systems meet industry-specific regulations and security standards."
        },
        {
          question: "How long does ML Engineering and MLOps implementation take?",
          answer: "Implementation time varies based on complexity and scale. Typical projects take 8-16 weeks including strategy, development, testing, and deployment. We provide phased implementation approaches for complex systems."
        }
      ]}

      // Final CTA
      finalCtaTitle="Ready to Build Production ML Systems?"
      finalCtaSubtitle="Let's discuss how ML Engineering and MLOps can transform your machine learning operations and drive real business value."
      finalCtaButtonText="Schedule ML Engineering Consultation"
      finalCtaButtonLink="/contact"

      // Blog & Case Studies
      blogTitle="ML Engineering & MLOps Insights"
      blogSubtitle="Stay informed with our latest research on ML engineering, MLOps, and production ML systems"
      caseStudyTitle="ML Engineering & MLOps Success Stories"
      caseStudySubtitle="Discover how we've helped businesses achieve remarkable results with production ML systems"

      // Theme
      theme="light"
    />
  );
};

export default MLEngineeringMLOps;
