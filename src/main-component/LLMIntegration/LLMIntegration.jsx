import React from "react";
import MasterSubServiceTemplate from "../../components/templates/MasterSubServiceTemplate";
import { 
  Speed, 
  TrendingUp, 
  Psychology, 
  AutoAwesome,
  DataUsage,
  Security,
  RocketLaunch,
  Lightbulb,
  AutoFixHigh,
  SmartToy,
  CheckCircle,
  IntegrationInstructions,
  Memory
} from '@mui/icons-material';

const LLMIntegration = () => {
  return (
    <MasterSubServiceTemplate
      // Hero Section - Minimal
      heroTitle="Gen AI & LLM Integration Consulting"
      heroSubtitle="Transform Your Business with Large Language Models"
      heroDescription="We help companies harness the power of Generative AI and Large Language Models to unlock new growth opportunities, automate complex tasks, and make smarter, faster decisions."
      heroButtonText="Start LLM Integration"
      heroButtonLink="/contact"
      heroBackgroundImage="/herosectionimages/Sliders/Digital Technology.webp"
      heroTextColor="white"

      // Problem/Solution Section
      problemSolutionTitle="The LLM Integration Challenge & Our Solution"
      problemSolutionSubtitle="We understand the complexities of integrating Large Language Models and have the expertise to make them work for your business"
      problems={[
        {
          title: "Content Creation Bottlenecks",
          description: "Manual content creation processes that are slow, expensive, and don't scale with business growth and customer demands."
        },
        {
          title: "Integration Complexity",
          description: "Difficulty connecting LLMs with existing systems, APIs, and ensuring seamless operation across platforms and workflows."
        },
        {
          title: "Cost & Performance Concerns",
          description: "High API costs, latency issues, and uncertainty about ROI and performance optimization for LLM implementations."
        }
      ]}
      solutions={[
        {
          title: "Seamless LLM Integration",
          description: "End-to-end integration services that connect LLMs with your existing infrastructure and business processes."
        },
        {
          title: "Intelligent Content Generation",
          description: "AI-powered content creation that maintains brand voice, quality standards, and delivers personalized experiences."
        },
        {
          title: "Cost Optimization & Performance",
          description: "Advanced optimization techniques to reduce costs, improve performance, and maximize ROI from LLM investments."
        }
      ]}
      problemSolutionVariant="split"

      // Service Offerings (Benefits/Use Cases)
      serviceOfferingsTitle="Key Benefits of LLM Integration"
      serviceOfferingsSubtitle="Discover how Large Language Models can transform your business operations"
      services={[
        {
          icon: <AutoAwesome />,
          title: "Content Generation & Automation",
          description: "Automate content creation for marketing, documentation, and customer communications.",
          features: [
            "Marketing copy generation",
            "Documentation automation",
            "Email campaign creation"
          ],
          link: "/contact",
          ctaText: "Learn More"
        },
        {
          icon: <Psychology />,
          title: "Conversational AI & Chatbots",
          description: "Build intelligent chatbots and virtual assistants that understand and respond naturally.",
          features: [
            "Customer support automation",
            "Sales assistance",
            "FAQ handling"
          ],
          link: "/contact",
          ctaText: "Learn More"
        },
        {
          icon: <DataUsage />,
          title: "Data Analysis & Insights",
          description: "Extract insights from unstructured data using advanced natural language processing.",
          features: [
            "Text analysis",
            "Sentiment analysis",
            "Trend identification"
          ],
          link: "/contact",
          ctaText: "Learn More"
        },
        {
          icon: <IntegrationInstructions />,
          title: "API Integration & Customization",
          description: "Integrate LLMs with your existing systems and customize them for your specific needs.",
          features: [
            "API development",
            "Custom model training",
            "System integration"
          ],
          link: "/contact",
          ctaText: "Learn More"
        },
        {
          icon: <Security />,
          title: "Security & Compliance",
          description: "Ensure your LLM implementations meet security standards and regulatory requirements.",
          features: [
            "Data privacy protection",
            "Access control",
            "Audit trails"
          ],
          link: "/contact",
          ctaText: "Learn More"
        },
        {
          icon: <Memory />,
          title: "Knowledge Management",
          description: "Build intelligent knowledge bases and document management systems powered by LLMs.",
          features: [
            "Document search",
            "Knowledge extraction",
            "Information retrieval"
          ],
          link: "/contact",
          ctaText: "Learn More"
        }
      ]}
      serviceOfferingsVariant="default"

      // Benefits Section (Process/Workflow)
      benefitsTitle="How LLM Integration Works"
      benefitsSubtitle="Our proven process for integrating Large Language Models into your business"
      benefits={[
        {
          icon: <RocketLaunch />,
          title: "Strategy & Planning",
          description: "Define your LLM integration strategy, identify use cases, and plan the implementation roadmap.",
          features: [
            "Use case identification",
            "Technology selection",
            "ROI analysis"
          ],
          metric: {
            value: "1-2",
            label: "Weeks Planning"
          }
        },
        {
          icon: <Lightbulb />,
          title: "Development & Integration",
          description: "Develop custom LLM solutions and integrate them with your existing systems and workflows.",
          features: [
            "API development",
            "System integration",
            "Custom model training"
          ],
          metric: {
            value: "4-8",
            label: "Weeks Development"
          }
        },
        {
          icon: <AutoFixHigh />,
          title: "Deployment & Optimization",
          description: "Deploy LLM solutions in production and continuously optimize for performance and cost.",
          features: [
            "Production deployment",
            "Performance monitoring",
            "Cost optimization"
          ],
          metric: {
            value: "1-2",
            label: "Weeks Deployment"
          }
        }
      ]}

      // FAQ Section
      faqTitle="Frequently Asked Questions"
      faqSubtitle="Find answers to common questions about LLM integration and Generative AI"
      faqItems={[
        {
          question: "What LLM models do you support?",
          answer: "We support all major LLM providers including OpenAI GPT, Anthropic Claude, Google PaLM, and custom models. We help you choose the best model for your specific use case and budget."
        },
        {
          question: "How much does LLM integration cost?",
          answer: "Costs vary based on complexity and usage. We provide detailed cost analysis including development, API costs, and ongoing maintenance. Most clients see ROI within 3-6 months."
        },
        {
          question: "Can LLMs integrate with our existing systems?",
          answer: "Yes, we specialize in integrating LLMs with existing systems through APIs, webhooks, and custom connectors. We ensure seamless integration with your current infrastructure."
        },
        {
          question: "How do you ensure content quality and brand consistency?",
          answer: "We implement quality control systems, brand guidelines, and human oversight to ensure generated content meets your standards. We also provide training and fine-tuning for brand-specific outputs."
        },
        {
          question: "What about data security and privacy?",
          answer: "We implement enterprise-grade security measures including data encryption, access controls, and compliance with industry standards. We can deploy LLMs on-premise or in secure cloud environments."
        },
        {
          question: "How long does LLM integration take?",
          answer: "Typical integration time is 6-10 weeks depending on complexity. This includes planning, development, testing, and deployment phases. We follow agile methodologies for iterative improvements."
        }
      ]}

      // Final CTA
      finalCtaTitle="Ready to Integrate LLMs?"
      finalCtaSubtitle="Let's discuss how Large Language Models can transform your business operations and drive unprecedented efficiency."
      finalCtaButtonText="Schedule LLM Consultation"
      finalCtaButtonLink="/contact"

      // Blog & Case Studies
      blogTitle="LLM Integration Insights"
      blogSubtitle="Stay informed with our latest research on Large Language Models and Generative AI"
      caseStudyTitle="LLM Integration Success Stories"
      caseStudySubtitle="Discover how we've helped businesses achieve remarkable results with LLM integration"

      // Theme
      theme="light"
    />
  );
};

export default LLMIntegration;
