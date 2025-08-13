import React from "react";
import MasterMainServiceTemplate from "../../components/templates/MasterMainServiceTemplate";
import { 
  Speed, 
  TrendingUp, 
  Cloud, 
  Security, 
  Analytics, 
  AutoAwesome,
  SmartToy,
  DataUsage,
  Psychology,
  CheckCircle,
  Memory,
  IntegrationInstructions,
  Sensors,
  Autorenew,
  RocketLaunch,
  Lightbulb,
  AutoFixHigh
} from '@mui/icons-material';

const AIAndGenAIPpractice = () => {
  return (
    <MasterMainServiceTemplate
      // Hero Section - Minimal
      heroTitle="AI & Gen AI Industrialization Consulting"
      heroSubtitle="Transform Your Business"
      heroDescription="Unlock the power of artificial intelligence and generative AI to automate processes, gain insights, and drive unprecedented growth."
      heroButtonText="Start Your AI Journey"
      heroButtonLink="/contact"
      heroBackgroundImage="/herosectionimages/Sliders/Digital Technology.webp"
      heroTextColor="white"

      // Problem/Solution Section
      problemSolutionTitle="The AI Challenge & Our Solution"
      problemSolutionSubtitle="We understand the complexities of AI implementation and have the expertise to make it work for your business"
      problems={[
        {
          title: "AI Implementation Complexity",
          description: "Overwhelming technical requirements, integration challenges, and uncertainty about ROI and success metrics."
        },
        {
          title: "Data Silos & Fragmentation",
          description: "Critical business data scattered across multiple systems, preventing actionable insights and unified decision-making."
        },
        {
          title: "Manual Process Bottlenecks",
          description: "Time-consuming manual tasks reducing productivity and creating operational inefficiencies that impact customer experience."
        }
      ]}
      solutions={[
        {
          title: "End-to-End AI Implementation",
          description: "Complete AI transformation services from strategy to deployment, with proven methodologies and guaranteed ROI tracking."
        },
        {
          title: "Unified Data Platform",
          description: "Centralized data management with real-time analytics, breaking down silos and providing a single source of truth for all business intelligence."
        },
        {
          title: "Intelligent Process Automation",
          description: "AI-powered workflow automation that handles repetitive tasks, freeing your team to focus on strategic initiatives and innovation."
        }
      ]}
      problemSolutionVariant="split"

      // Service Offerings
      serviceOfferingsTitle="Our AI & Gen AI Services"
      serviceOfferingsSubtitle="Comprehensive artificial intelligence solutions designed to transform every aspect of your business"
      services={[
        {
          icon: <SmartToy />,
          title: "Agentic AI & AI Agents",
          description: "Building intelligent, autonomous AI-driven agents that can perform complex tasks and make decisions independently.",
          features: [
            "Autonomous decision making",
            "Task automation",
            "Intelligent workflows"
          ],
          badge: "Most Popular",
          link: "/service/ai-and-gen-ai/agents",
          ctaText: "Explore Agentic AI"
        },
        {
          icon: <AutoAwesome />,
          title: "Gen AI & LLM Integration",
          description: "Integrating Generative AI and Large Language Models into business systems for enhanced capabilities.",
          features: [
            "LLM integration",
            "Content generation",
            "Natural language processing"
          ],
          badge: "Trending",
          link: "/service/ai-and-gen-ai/llm",
          ctaText: "Discover GenAI"
        },
        {
          icon: <Psychology />,
          title: "NLP & Computer Vision",
          description: "Natural language processing and computer vision solutions for understanding text, images, and video.",
          features: [
            "Text analysis & processing",
            "Image recognition",
            "Video analytics"
          ],
          link: "/service/ai-and-gen-ai/nlp",
          ctaText: "Learn More"
        },
        {
          icon: <DataUsage />,
          title: "ML Engineering & MLOps",
          description: "End-to-end machine learning engineering and operations for scalable AI solutions.",
          features: [
            "ML pipeline development",
            "Model deployment",
            "Monitoring & maintenance"
          ],
          link: "/service/ai-and-gen-ai/mlops",
          ctaText: "Explore MLOps"
        },
        {
          icon: <Speed />,
          title: "AI Automation (AI + RPA)",
          description: "Intelligent process automation combining AI and RPA for streamlined workflows.",
          features: [
            "Process automation",
            "Intelligent workflows",
            "Cognitive automation"
          ],
          link: "/service/ai-and-gen-ai/automation",
          ctaText: "Learn More"
        },
        {
          icon: <Security />,
          title: "AI Advisory & Responsible AI",
          description: "Strategic AI guidance with a focus on ethics, governance, and responsible implementation.",
          features: [
            "Ethical AI frameworks",
            "Governance & compliance",
            "Risk assessment"
          ],
          link: "/service/ai-and-gen-ai/responsible",
          ctaText: "Explore Advisory"
        }
      ]}
      serviceOfferingsVariant="default"

      // Benefits Section
      benefitsTitle="Why Choose Our AI Solutions"
      benefitsSubtitle="Discover the tangible benefits and outcomes you can expect from our AI-powered transformation"
      benefits={[
        {
          icon: <Speed />,
          title: "10x Faster Processing",
          description: "Accelerate workflows and decision-making processes with intelligent automation and real-time processing capabilities.",
          features: [
            "Automated data processing",
            "Real-time analytics",
            "Instant decision support"
          ],
          metric: {
            value: "10x",
            label: "Performance Gain"
          }
        },
        {
          icon: <TrendingUp />,
          title: "30% Cost Reduction",
          description: "Optimize operations and reduce manual overhead through intelligent automation and process optimization.",
          features: [
            "Reduced manual work",
            "Optimized resource allocation",
            "Lower operational costs"
          ],
          metric: {
            value: "30%",
            label: "Cost Savings"
          }
        },
        {
          icon: <Analytics />,
          title: "Data-Driven Insights",
          description: "Transform raw data into actionable insights that drive better business decisions and strategic planning.",
          features: [
            "Predictive analytics",
            "Trend identification",
            "Performance optimization"
          ],
          metric: {
            value: "95%",
            label: "Accuracy Rate"
          }
        }
      ]}

      // Stats Section
      statsTitle="Proven AI Results"
      statsSubtitle="Numbers that speak for themselves - real outcomes from our AI implementations"
      stats={[
        {
          icon: <Speed />,
          value: "10x",
          label: "Faster Processing",
          description: "Average performance improvement across all AI implementations"
        },
        {
          icon: <TrendingUp />,
          value: "30%",
          label: "Cost Reduction",
          description: "Average operational cost savings for our clients"
        },
        {
          icon: <Analytics />,
          value: "95%",
          label: "Accuracy Rate",
          description: "Average accuracy of our machine learning models"
        },
        {
          icon: <CheckCircle />,
          value: "100%",
          label: "Client Satisfaction",
          description: "Clients who would recommend our AI solutions"
        }
      ]}

      // Testimonials
      testimonialsTitle="What Our AI Clients Say"
      testimonialsSubtitle="Real feedback from businesses that have transformed their operations with our AI solutions"
      testimonials={[
        {
          name: "Sarah Johnson",
          company: "TechCorp Solutions",
          content: "Intellectt's AI implementation transformed our entire business. We're now processing data 10x faster and making decisions with unprecedented accuracy. The ROI was immediate and continues to grow.",
          rating: 5
        },
        {
          name: "Michael Chen",
          company: "InnovateTech",
          content: "The machine learning solutions from Intellectt helped us predict market trends with 95% accuracy. Our revenue increased by 40% within the first quarter of implementation.",
          rating: 5
        },
        {
          name: "Emily Rodriguez",
          company: "DataFlow Systems",
          content: "Their generative AI solutions revolutionized our content creation process. We're now producing 5x more content with higher quality and engagement rates.",
          rating: 5
        }
      ]}

      // FAQ Section
      faqTitle="Frequently Asked Questions"
      faqSubtitle="Find answers to common questions about our AI solutions and implementation process"
      faqItems={[
        {
          question: "How long does AI implementation typically take?",
          answer: "Implementation timelines vary based on complexity, but most projects are completed within 8-12 weeks. We follow an agile methodology that allows for iterative improvements and quick wins."
        },
        {
          question: "What kind of ROI can I expect from AI implementation?",
          answer: "Our clients typically see 30-50% cost reduction and 10x performance improvements within the first 6 months. ROI varies by use case, but we provide detailed projections during the planning phase."
        },
        {
          question: "Do I need to have technical expertise to use AI solutions?",
          answer: "No technical expertise required. We design our AI solutions to be user-friendly and provide comprehensive training and support. Our team handles all technical complexity behind the scenes."
        },
        {
          question: "How do you ensure data security and privacy?",
          answer: "We implement enterprise-grade security measures including encryption, access controls, and compliance with industry standards. All data processing follows strict privacy protocols and regulatory requirements."
        },
        {
          question: "Can AI solutions integrate with my existing systems?",
          answer: "Yes, our AI solutions are designed to integrate seamlessly with existing systems and workflows. We use APIs and standard protocols to ensure smooth integration without disrupting current operations."
        },
        {
          question: "What ongoing support do you provide after implementation?",
          answer: "We provide 24/7 technical support, regular maintenance, model updates, and continuous optimization. Our team monitors performance and proactively suggests improvements to maximize your AI investment."
        }
      ]}

      // Final CTA
      finalCtaTitle="Ready to Transform Your Business with AI?"
      finalCtaSubtitle="Join hundreds of companies that have already revolutionized their operations with our AI solutions. Let's discuss how we can help you achieve similar results."
      finalCtaButtonText="Schedule AI Consultation"
      finalCtaButtonLink="/contact"

      // Blog & Case Studies
      blogTitle="AI Insights & Updates"
      blogSubtitle="Stay informed with our latest AI research, industry trends, and thought leadership content"
      caseStudyTitle="AI Success Stories"
      caseStudySubtitle="Discover how we've helped businesses achieve remarkable results with AI implementation"

      // Theme
      theme="light"
    />
  );
};

export default AIAndGenAIPpractice;
