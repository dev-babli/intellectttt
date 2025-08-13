import React from "react";
import MasterSubServiceTemplate from "../../components/templates/MasterSubServiceTemplate";
import { 
  Speed, 
  TrendingUp, 
  Security, 
  Policy,
  Groups,
  SwitchAccount,
  RocketLaunch,
  Lightbulb,
  CheckCircle,
  SmartToy,
  Psychology,
  Memory,
  Verified,
  GppGood
} from '@mui/icons-material';

const ResponsibleAI = () => {
  return (
    <MasterSubServiceTemplate
      // Hero Section
      heroTitle="AI Advisory & Responsible AI Consulting"
      heroSubtitle="Ethical AI Implementation"
      heroDescription="We help companies build AI with strategy and responsibility. Unlock the power of AI while ensuring ethical standards, governance, and compliance. Our advisory services guide you through the complex landscape of responsible AI implementation."
      heroButtonText="Start Responsible AI Journey"
      heroButtonLink="/contact"
      heroBackgroundImage="/AiGenAi/AIAdvisoryandResponsibleAI.webp"
      heroFeatures={[
        {
          icon: <Policy />,
          title: "Ethical AI Frameworks",
          description: "Build AI systems with ethical principles and governance"
        },
        {
          icon: <Security />,
          title: "Compliance & Security",
          description: "Ensure AI meets regulatory and security requirements"
        },
        {
          icon: <Verified />,
          title: "Risk Assessment",
          description: "Identify and mitigate AI risks proactively"
        }
      ]}
      heroTheme="dark"

      // Problem/Solution Section
      problemSolutionTitle="The Responsible AI Challenge & Our Solution"
      problemSolutionSubtitle="We understand the complexities of ethical AI implementation and have the expertise to guide you through responsible AI development"
      problems={[
        {
          title: "Ethical AI Implementation",
          description: "Lack of clear frameworks and guidelines for implementing AI systems that align with ethical principles and societal values."
        },
        {
          title: "Regulatory Compliance",
          description: "Complex and evolving regulatory landscape for AI systems, including data privacy, bias, and transparency requirements."
        },
        {
          title: "Risk Management",
          description: "Difficulty identifying, assessing, and mitigating risks associated with AI systems including bias, security, and operational risks."
        },
        {
          title: "Governance & Oversight",
          description: "Absence of proper governance structures and oversight mechanisms to ensure AI systems operate responsibly and safely."
        }
      ]}
      solutions={[
        {
          title: "Ethical AI Frameworks",
          description: "Comprehensive frameworks and guidelines for implementing AI systems that align with ethical principles and societal values."
        },
        {
          title: "Compliance & Governance",
          description: "Expert guidance on regulatory compliance and governance structures to ensure AI systems meet legal and ethical standards."
        },
        {
          title: "Risk Assessment & Mitigation",
          description: "Proactive risk identification, assessment, and mitigation strategies for AI systems including bias, security, and operational risks."
        },
        {
          title: "Responsible AI Strategy",
          description: "Strategic planning and implementation guidance for building AI systems with responsibility, transparency, and accountability."
        }
      ]}
      problemSolutionVariant="split"

      // Service Offerings (Benefits/Use Cases)
      serviceOfferingsTitle="Key Benefits of Responsible AI"
      serviceOfferingsSubtitle="Discover how responsible AI practices can protect your business and build trust"
      services={[
        {
          icon: <Policy />,
    title: "Ethical AI Frameworks",
          description: "Develop comprehensive ethical frameworks and guidelines for AI implementation.",
          features: [
            "Ethical principles definition",
            "Bias detection & mitigation",
            "Transparency frameworks",
            "Accountability mechanisms"
          ],
          link: "/contact",
          ctaText: "Learn More"
        },
        {
          icon: <Security />,
          title: "Compliance & Governance",
          description: "Ensure your AI systems meet regulatory requirements and governance standards.",
          features: [
            "Regulatory compliance",
            "Governance structures",
            "Audit frameworks",
            "Policy development"
          ],
          link: "/contact",
          ctaText: "Learn More"
        },
        {
          icon: <Verified />,
          title: "Risk Assessment & Mitigation",
          description: "Identify and mitigate risks associated with AI systems proactively.",
          features: [
            "Risk identification",
            "Impact assessment",
            "Mitigation strategies",
            "Monitoring systems"
          ],
          link: "/contact",
          ctaText: "Learn More"
        },
        {
          icon: <Groups />,
          title: "Stakeholder Engagement",
          description: "Engage stakeholders in responsible AI development and decision-making processes.",
          features: [
            "Stakeholder mapping",
            "Engagement strategies",
            "Communication plans",
            "Feedback mechanisms"
          ],
          link: "/contact",
          ctaText: "Learn More"
        },
        {
          icon: <GppGood />,
          title: "AI Strategy & Advisory",
          description: "Strategic guidance on AI implementation with responsibility and ethics at the core.",
          features: [
            "AI strategy development",
            "Implementation planning",
            "Technology selection",
            "ROI optimization"
          ],
          link: "/contact",
          ctaText: "Learn More"
        },
        {
          icon: <SwitchAccount />,
          title: "Training & Capacity Building",
          description: "Build internal capabilities for responsible AI development and governance.",
          features: [
            "Team training",
            "Best practices",
            "Tool implementation",
            "Ongoing support"
          ],
          link: "/contact",
          ctaText: "Learn More"
        }
      ]}
      serviceOfferingsVariant="default"

      // Benefits Section (Process/Workflow)
      benefitsTitle="How Responsible AI Works"
      benefitsSubtitle="Our proven process for implementing responsible AI practices"
      benefits={[
        {
          icon: <RocketLaunch />,
          title: "Assessment & Strategy",
          description: "Assess your current AI practices and develop a comprehensive responsible AI strategy.",
          features: [
            "Current state assessment",
            "Gap analysis",
            "Strategy development",
            "Roadmap planning"
          ],
          metric: {
            value: "2-3",
            label: "Weeks Assessment"
          }
        },
        {
          icon: <Lightbulb />,
          title: "Framework Development",
          description: "Develop ethical frameworks, governance structures, and compliance mechanisms.",
          features: [
            "Ethical framework design",
            "Governance structure",
            "Policy development",
            "Compliance mechanisms"
          ],
          metric: {
            value: "4-6",
            label: "Weeks Development"
          }
        },
        {
          icon: <CheckCircle />,
          title: "Implementation & Monitoring",
          description: "Implement responsible AI practices and establish ongoing monitoring and oversight.",
          features: [
            "Framework implementation",
            "Monitoring systems",
            "Ongoing oversight",
            "Continuous improvement"
          ],
          metric: {
            value: "Ongoing",
            label: "Monitoring"
          }
        }
      ]}

      // FAQ Section
      faqTitle="Frequently Asked Questions"
      faqSubtitle="Find answers to common questions about Responsible AI and ethical AI implementation"
      faqItems={[
        {
          question: "What is Responsible AI and why is it important?",
          answer: "Responsible AI ensures that AI systems are developed and deployed ethically, safely, and in compliance with regulations. It's important for building trust, avoiding legal issues, and ensuring AI benefits society while minimizing harm."
        },
        {
          question: "How do you ensure AI systems are unbiased and fair?",
          answer: "We implement comprehensive bias detection and mitigation strategies including diverse training data, algorithmic fairness testing, and ongoing monitoring. We also establish governance structures to ensure fairness is maintained over time."
        },
        {
          question: "What regulatory compliance do we need to consider for AI?",
          answer: "AI compliance varies by industry and region. We help you navigate regulations including GDPR, CCPA, industry-specific requirements, and emerging AI-specific regulations. We stay updated on evolving compliance landscapes."
        },
        {
          question: "How do you assess and mitigate AI risks?",
          answer: "We conduct comprehensive risk assessments including technical, operational, ethical, and compliance risks. We develop mitigation strategies and establish monitoring systems to track and address risks proactively."
        },
        {
          question: "What governance structures are needed for responsible AI?",
          answer: "Effective AI governance includes clear roles and responsibilities, decision-making frameworks, oversight mechanisms, and accountability structures. We help you design governance that fits your organization's size and complexity."
        },
        {
          question: "How long does responsible AI implementation take?",
          answer: "Implementation time varies based on organization size and complexity. Typically 8-16 weeks for initial framework development, with ongoing monitoring and improvement. We provide phased implementation approaches."
        }
      ]}

      // Final CTA
      finalCtaTitle="Ready to Build Responsible AI?"
      finalCtaSubtitle="Let's discuss how responsible AI practices can protect your business, build trust, and ensure long-term success."
      finalCtaButtonText="Schedule Responsible AI Consultation"
      finalCtaButtonLink="/contact"

      // Blog & Case Studies
      blogTitle="Responsible AI Insights"
      blogSubtitle="Stay informed with our latest research on ethical AI, governance, and responsible AI practices"
      caseStudyTitle="Responsible AI Success Stories"
      caseStudySubtitle="Discover how we've helped businesses implement responsible AI practices successfully"

      // Theme
      theme="light"
    />
  );
};

export default ResponsibleAI;
