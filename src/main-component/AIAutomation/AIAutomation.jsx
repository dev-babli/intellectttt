import React from "react";
import MasterSubServiceTemplate from "../../components/templates/MasterSubServiceTemplate";
import { 
  Speed, 
  TrendingUp, 
  AutoFixHigh, 
  IntegrationInstructions,
  Security,
  Analytics,
  RocketLaunch,
  Lightbulb,
  CheckCircle,
  SupportAgent
} from '@mui/icons-material';

const AIAutomation = () => {
  return (
    <MasterSubServiceTemplate
      // Hero Section
      heroTitle="AI Automation (AI + RPA)"
      heroSubtitle="Process Automation"
      heroDescription="We help companies harness the power of AI and RPA to unlock new growth opportunities, automate complex tasks, and make smarter, faster decisions. Combine the precision of RPA with the intelligence of AI for unprecedented automation capabilities."
      heroBackgroundImage="/AiGenAi/AIAutomation.webp"
      heroTextColor="white"
      heroFeatures={[
        {
          icon: <AutoFixHigh />,
          title: "Intelligent Automation",
          description: "Combine AI and RPA for smart process automation"
        },
        {
          icon: <Speed />,
          title: "10x Faster Processing",
          description: "Accelerate workflows with intelligent automation"
        },
        {
          icon: <Analytics />,
          title: "Cognitive Capabilities",
          description: "Handle unstructured data and complex decisions"
        }
      ]}
      heroTheme="dark"

      // Problem/Solution Section
      problemSolutionTitle="The AI Automation Challenge & Our Solution"
      problemSolutionSubtitle="We understand the complexities of combining AI and RPA and have the expertise to make intelligent automation work for your business"
      problems={[
        {
          title: "Limited Traditional Automation",
          description: "Rule-based automation that can't handle complex scenarios, unstructured data, or adaptive decision-making processes."
        },
        {
          title: "Manual Process Bottlenecks",
          description: "Time-consuming manual tasks reducing productivity and creating operational inefficiencies that impact customer experience."
        },
        {
          title: "Integration Complexity",
          description: "Difficulty connecting AI and RPA systems with existing infrastructure and ensuring seamless operation across platforms."
        },
        {
          title: "Scalability & Maintenance",
          description: "Automation solutions that don't scale with business growth and require constant maintenance and updates."
        }
      ]}
      solutions={[
        {
          title: "Intelligent Process Automation",
          description: "AI-powered automation that can handle complex scenarios, unstructured data, and adaptive decision-making."
        },
        {
          title: "End-to-End Workflow Automation",
          description: "Complete automation of business processes from data entry to decision-making and action execution."
        },
        {
    title: "Seamless System Integration",
          description: "Advanced integration services that connect AI and RPA with existing systems and business processes."
        },
        {
          title: "Scalable & Maintainable Solutions",
          description: "Automation frameworks that scale with your business and include self-maintenance capabilities."
        }
      ]}
      problemSolutionVariant="split"

      // Service Offerings (Benefits/Use Cases)
      serviceOfferingsTitle="Key Benefits of AI Automation"
      serviceOfferingsSubtitle="Discover how AI + RPA can transform your business operations"
      services={[
        {
          icon: <AutoFixHigh />,
          title: "Intelligent Process Automation",
          description: "Combine AI and RPA to automate complex business processes with cognitive capabilities.",
          features: [
            "Cognitive automation",
            "Decision-making automation",
            "Process optimization",
            "Workflow automation"
          ],
          link: "/contact",
          ctaText: "Learn More"
        },
        {
          icon: <IntegrationInstructions />,
          title: "End-to-End Integration",
          description: "Seamlessly integrate AI and RPA with your existing systems and business processes.",
          features: [
            "System integration",
            "API development",
            "Data pipeline setup",
            "Workflow orchestration"
          ],
          link: "/contact",
          ctaText: "Learn More"
        },
        {
          icon: <Speed />,
          title: "Fast & Scalable Solutions",
          description: "Build automation solutions that scale rapidly across use cases and environments.",
          features: [
            "Horizontal scaling",
            "Performance optimization",
            "Load balancing",
            "Resource management"
          ],
          link: "/contact",
          ctaText: "Learn More"
        },
        {
          icon: <Analytics />,
    title: "Cognitive Capabilities",
          description: "Handle unstructured data, natural language, and complex decision-making processes.",
          features: [
            "Document processing",
            "Natural language understanding",
            "Image recognition",
            "Predictive analytics"
          ],
          link: "/contact",
          ctaText: "Learn More"
        },
        {
          icon: <Security />,
          title: "Enterprise-Grade Security",
          description: "Ensure your automation solutions meet security standards and compliance requirements.",
          features: [
            "Access control",
            "Data encryption",
            "Audit trails",
            "Compliance frameworks"
          ],
          link: "/contact",
          ctaText: "Learn More"
        },
        {
          icon: <SupportAgent />,
          title: "Customer Service Automation",
          description: "Automate customer interactions and support processes with intelligent AI capabilities.",
          features: [
            "Chatbot automation",
            "Ticket processing",
            "Customer onboarding",
            "Support workflow automation"
          ],
          link: "/contact",
          ctaText: "Learn More"
        }
      ]}
      serviceOfferingsVariant="default"

      // Benefits Section (Process/Workflow)
      benefitsTitle="How AI Automation Works"
      benefitsSubtitle="Our proven process for implementing intelligent automation solutions"
      benefits={[
        {
          icon: <RocketLaunch />,
          title: "Process Analysis & Design",
          description: "Analyze your current processes and design intelligent automation solutions that optimize workflows.",
          features: [
            "Process mapping",
            "Automation opportunity identification",
            "ROI analysis",
            "Implementation planning"
          ],
          metric: {
            value: "2-3",
            label: "Weeks Analysis"
          }
        },
        {
          icon: <Lightbulb />,
          title: "Development & Integration",
          description: "Develop AI and RPA solutions and integrate them with your existing systems and workflows.",
          features: [
            "AI model development",
            "RPA bot creation",
            "System integration",
            "Testing & validation"
          ],
          metric: {
            value: "4-8",
            label: "Weeks Development"
          }
        },
        {
          icon: <CheckCircle />,
          title: "Deployment & Optimization",
          description: "Deploy automation solutions in production and continuously optimize for performance and efficiency.",
          features: [
            "Production deployment",
            "Performance monitoring",
            "Continuous optimization",
            "Maintenance & updates"
          ],
          metric: {
            value: "1-2",
            label: "Weeks Deployment"
          }
        }
      ]}

      // FAQ Section
      faqTitle="Frequently Asked Questions"
      faqSubtitle="Find answers to common questions about AI Automation and RPA"
      faqItems={[
        {
          question: "What is the difference between traditional RPA and AI + RPA?",
          answer: "Traditional RPA follows predefined rules, while AI + RPA can handle unstructured data, make decisions, and adapt to changing scenarios. AI adds cognitive capabilities to automation, making it more intelligent and flexible."
        },
        {
          question: "What types of processes can be automated with AI + RPA?",
          answer: "AI + RPA can automate virtually any business process including document processing, customer service, data entry, decision-making, and complex workflows. We analyze your processes to identify the best automation opportunities."
        },
        {
          question: "How do you ensure automation solutions are secure and compliant?",
          answer: "We implement enterprise-grade security measures including encryption, access controls, audit trails, and compliance frameworks. All automation solutions are designed with security-first principles."
        },
        {
          question: "Can AI automation integrate with our existing systems?",
          answer: "Yes, our AI automation solutions are designed to integrate seamlessly with existing systems through APIs, connectors, and custom integration points. We ensure compatibility with your current infrastructure."
        },
        {
          question: "What kind of ROI can I expect from AI automation?",
          answer: "Our clients typically see 40-70% cost reduction and 5-15x faster processing times. ROI varies by process complexity, but most see payback within 6-12 months of implementation."
        },
        {
          question: "How long does AI automation implementation take?",
          answer: "Typical implementation time is 8-16 weeks depending on complexity. This includes analysis, development, testing, and deployment phases. We follow agile methodologies for iterative improvements."
        }
      ]}

      // Final CTA
      finalCtaTitle="Ready to Automate with AI?"
      finalCtaSubtitle="Let's discuss how AI + RPA can transform your business operations and drive unprecedented efficiency."
      finalCtaButtonText="Schedule AI Automation Consultation"
      finalCtaButtonLink="/contact"

      // Theme
      theme="light"
    />
  );
};

export default AIAutomation;
