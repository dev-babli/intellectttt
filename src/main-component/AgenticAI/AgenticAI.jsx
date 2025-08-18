import React from "react";
import MasterSubServiceTemplate from "../../components/templates/MasterSubServiceTemplate";
import { 
  Speed, 
  TrendingUp, 
  Memory, 
  IntegrationInstructions,
  Sensors,
  Autorenew,
  Security,
  RocketLaunch,
  Lightbulb,
  AutoFixHigh,
  CheckCircle
} from '@mui/icons-material';

const AgenticAI = () => {
  return (
    <MasterSubServiceTemplate
      // Hero Section - Minimal
      heroTitle="Agentic AI & AI Agents Consulting"
      heroSubtitle="Autonomous Systems"
      heroDescription="We help companies harness the power of autonomous AI agents to unlock new growth opportunities, automate complex tasks, and make smarter, faster decisions."
      heroBackgroundImage="/AiGenAi/Agenticagents.webp"
      heroTextColor="white"

      // Problem/Solution Section
      problemSolutionTitle="The Agentic AI Challenge & Our Solution"
      problemSolutionSubtitle="We understand the complexities of building autonomous AI systems and have the expertise to make them work for your business"
      problems={[
        {
          title: "Complex Decision Making",
          description: "Manual decision-making processes that are slow, error-prone, and don't scale with business growth."
        },
        {
          title: "Limited Automation Scope",
          description: "Traditional automation can only handle rule-based tasks, missing opportunities for intelligent, adaptive workflows."
        },
        {
          title: "Integration Complexity",
          description: "Difficulty connecting AI agents with existing systems and ensuring seamless operation across platforms."
        }
      ]}
      solutions={[
        {
          title: "Intelligent Autonomous Agents",
          description: "AI agents that can perceive, reason, plan, and act independently while aligning with business objectives."
        },
        {
          title: "Adaptive Workflow Automation",
          description: "Dynamic automation that learns from experience and adapts to changing business conditions and requirements."
        },
        {
          title: "Seamless System Integration",
          description: "End-to-end integration services that connect AI agents with existing infrastructure and business processes."
        }
      ]}
      problemSolutionVariant="split"

      // Service Offerings (Benefits/Use Cases)
      serviceOfferingsTitle="Key Benefits of Agentic AI"
      serviceOfferingsSubtitle="Discover how autonomous AI agents can transform your business operations"
      services={[
        {
          icon: <Memory />,
          title: "Autonomous Agent Design",
          description: "We specialize in building AI agents that can reason, learn, and act independently.",
          features: [
            "Cognitive reasoning capabilities",
            "Learning and adaptation",
            "Goal-oriented behavior"
          ],
          link: "/contact",
          ctaText: "Learn More"
        },
        {
          icon: <IntegrationInstructions />,
          title: "End-to-End Integration",
          description: "From data pipelines to deployment, we handle the full lifecycle of agentic systems.",
          features: [
            "System architecture design",
            "API integration",
            "Data pipeline setup"
          ],
          link: "/contact",
          ctaText: "Learn More"
        },
        {
          icon: <Speed />,
          title: "Fast & Scalable Solutions",
          description: "Our frameworks are built to scale rapidly across use cases and environments.",
          features: [
            "Horizontal scaling",
            "Performance optimization",
            "Load balancing"
          ],
          link: "/contact",
          ctaText: "Learn More"
        },
        {
          icon: <Sensors />,
          title: "Multimodal Intelligence",
          description: "We create agents that understand and interact using text, voice, images, and IoT data.",
          features: [
            "Natural language processing",
            "Computer vision",
            "Voice recognition"
          ],
          link: "/contact",
          ctaText: "Learn More"
        },
        {
          icon: <Autorenew />,
          title: "Continuous Adaptation",
          description: "Our agents are designed to evolve and improve through real-time feedback loops.",
          features: [
            "Continuous learning",
            "Performance monitoring",
            "Adaptive algorithms"
          ],
          link: "/contact",
          ctaText: "Learn More"
        },
        {
          icon: <Security />,
          title: "Enterprise-Grade Security",
          description: "All solutions are secured by design—ensuring safety, compliance, and data integrity.",
          features: [
            "Access control",
            "Data encryption",
            "Audit trails"
          ],
          link: "/contact",
          ctaText: "Learn More"
        }
      ]}
      serviceOfferingsVariant="default"

      // Benefits Section (Process/Workflow)
      benefitsTitle="How Agentic AI Works"
      benefitsSubtitle="Our proven process for building and deploying intelligent autonomous agents"
      benefits={[
        {
          icon: <RocketLaunch />,
          title: "Agent Design & Planning",
          description: "Define agent capabilities, goals, and decision-making frameworks based on your business requirements.",
          features: [
            "Requirement analysis",
            "Agent architecture design",
            "Decision tree mapping"
          ],
          metric: {
            value: "2-3",
            label: "Weeks Design"
          }
        },
        {
          icon: <Lightbulb />,
          title: "Development & Training",
          description: "Build and train AI agents using advanced machine learning models and reinforcement learning techniques.",
          features: [
            "Model development",
            "Training data preparation",
            "Reinforcement learning"
          ],
          metric: {
            value: "4-6",
            label: "Weeks Development"
          }
        },
        {
          icon: <AutoFixHigh />,
          title: "Integration & Deployment",
          description: "Seamlessly integrate agents with your existing systems and deploy them in production environments.",
          features: [
            "System integration",
            "API development",
            "Testing & validation"
          ],
          metric: {
            value: "1-2",
            label: "Weeks Deployment"
          }
        }
      ]}

      // FAQ Section
      faqTitle="Frequently Asked Questions"
      faqSubtitle="Find answers to common questions about Agentic AI and autonomous agents"
      faqItems={[
        {
          question: "What is the difference between traditional automation and Agentic AI?",
          answer: "Traditional automation follows predefined rules, while Agentic AI can reason, learn, and make decisions independently. AI agents can adapt to new situations, handle complex scenarios, and improve over time through learning."
        },
        {
          question: "How do you ensure AI agents make the right decisions?",
          answer: "We implement multiple layers of safety including goal alignment, human oversight, monitoring systems, and fallback mechanisms. Agents are trained on extensive data and continuously monitored for performance and safety."
        },
        {
          question: "Can AI agents integrate with our existing systems?",
          answer: "Yes, our AI agents are designed to integrate seamlessly with existing systems through APIs, data connectors, and custom integration points. We ensure compatibility with your current infrastructure and workflows."
        },
        {
          question: "How long does it take to build and deploy an AI agent?",
          answer: "Typical development time is 8-12 weeks depending on complexity. This includes design, development, testing, and deployment phases. We follow agile methodologies for iterative improvements."
        },
        {
          question: "What kind of ROI can I expect from Agentic AI?",
          answer: "Our clients typically see 40-60% efficiency improvements and 5-10x faster processing times. ROI varies by use case, but most see payback within 6-12 months of deployment."
        },
        {
          question: "How do you handle security and compliance for AI agents?",
          answer: "We implement enterprise-grade security including encryption, access controls, audit trails, and compliance frameworks. All agents are designed with security-first principles and can meet industry-specific compliance requirements."
        }
      ]}

      // Final CTA
      finalCtaTitle="Ready to Build Intelligent Agents?"
      finalCtaSubtitle="Let's discuss how autonomous AI agents can transform your business operations and drive unprecedented efficiency."
      finalCtaButtonText="Schedule Agentic AI Consultation"
      finalCtaButtonLink="/contact"

      // Theme
      theme="light"
    />
  );
};

export default AgenticAI;
