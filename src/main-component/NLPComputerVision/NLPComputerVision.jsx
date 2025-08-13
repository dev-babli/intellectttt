import React from "react";
import MasterSubServiceTemplate from "../../components/templates/MasterSubServiceTemplate";
import { 
  Speed, 
  TrendingUp, 
  Psychology, 
  Visibility,
  DataUsage,
  Security,
  RocketLaunch,
  Lightbulb,
  CheckCircle,
  SmartToy,
  Memory,
  IntegrationInstructions,
  AutoFixHigh,
  Analytics
} from '@mui/icons-material';

const NLPComputerVision = () => {
  return (
    <MasterSubServiceTemplate
      // Hero Section
      heroTitle="NLP & Computer Vision Consulting"
      heroSubtitle="Intelligent Text & Image Understanding"
      heroDescription="We help companies harness the power of Natural Language Processing and Computer Vision to unlock new growth opportunities, automate complex tasks, and make smarter, faster decisions. Transform how your systems understand and process text, images, and video."
      heroButtonText="Start NLP & CV Journey"
      heroButtonLink="/contact"
      heroBackgroundImage="/AiGenAi/NLPComputer-vision.webp"
      heroFeatures={[
        {
          icon: <Psychology />,
          title: "Natural Language Processing",
          description: "Understand and process human language intelligently"
        },
        {
          icon: <Visibility />,
          title: "Computer Vision",
          description: "Extract insights from images and video data"
        },
        {
          icon: <Speed />,
          title: "10x Faster Processing",
          description: "Accelerate text and image analysis workflows"
        }
      ]}
      heroTheme="dark"

      // Problem/Solution Section
      problemSolutionTitle="The NLP & Computer Vision Challenge & Our Solution"
      problemSolutionSubtitle="We understand the complexities of text and image processing and have the expertise to make NLP and Computer Vision work for your business"
      problems={[
        {
          title: "Unstructured Data Overload",
          description: "Massive amounts of text, images, and video data that can't be processed manually, leading to missed insights and opportunities."
        },
        {
          title: "Manual Content Analysis",
          description: "Time-consuming manual analysis of documents, images, and videos that reduces productivity and creates bottlenecks."
        },
        {
          title: "Language & Visual Understanding",
          description: "Difficulty extracting meaning from text, understanding context, and identifying objects and patterns in visual data."
        },
        {
          title: "Integration & Scalability",
          description: "Challenges integrating NLP and Computer Vision systems with existing workflows and scaling them across the organization."
        }
      ]}
      solutions={[
        {
          title: "Intelligent Text Processing",
          description: "Advanced NLP solutions that understand, analyze, and extract insights from text data with high accuracy and speed."
        },
        {
          title: "Visual Intelligence Systems",
          description: "Computer Vision solutions that can identify objects, detect patterns, and extract information from images and video."
        },
        {
          title: "Unified Data Processing",
          description: "Integrated systems that can process both text and visual data, providing comprehensive insights and automation."
        },
        {
          title: "Scalable AI Solutions",
          description: "Enterprise-grade NLP and Computer Vision systems that scale with your business and integrate seamlessly with existing workflows."
        }
      ]}
      problemSolutionVariant="split"

      // Service Offerings (Benefits/Use Cases)
      serviceOfferingsTitle="Key Benefits of NLP & Computer Vision"
      serviceOfferingsSubtitle="Discover how intelligent text and image processing can transform your business operations"
      services={[
        {
          icon: <Psychology />,
          title: "Natural Language Processing",
          description: "Advanced text analysis and language understanding capabilities.",
          features: [
            "Text classification",
            "Sentiment analysis",
            "Named entity recognition",
            "Language translation"
          ],
          link: "/contact",
          ctaText: "Learn More"
        },
        {
          icon: <Visibility />,
          title: "Computer Vision",
          description: "Intelligent image and video analysis and understanding.",
          features: [
            "Object detection",
            "Image classification",
            "Face recognition",
            "Video analytics"
          ],
          link: "/contact",
          ctaText: "Learn More"
        },
        {
          icon: <DataUsage />,
          title: "Document Processing",
          description: "Automated extraction and analysis of information from documents.",
          features: [
            "OCR & text extraction",
            "Form processing",
            "Document classification",
            "Data extraction"
          ],
          link: "/contact",
          ctaText: "Learn More"
        },
        {
          icon: <Analytics />,
          title: "Content Analysis",
          description: "Intelligent analysis of text and visual content for insights.",
          features: [
            "Content moderation",
            "Trend analysis",
            "Quality assessment",
            "Insight extraction"
          ],
          link: "/contact",
          ctaText: "Learn More"
        },
        {
          icon: <IntegrationInstructions />,
          title: "System Integration",
          description: "Seamless integration with existing systems and workflows.",
          features: [
            "API development",
            "Workflow automation",
            "Data pipeline setup",
            "Real-time processing"
          ],
          link: "/contact",
          ctaText: "Learn More"
        },
        {
          icon: <AutoFixHigh />,
          title: "Custom Model Development",
          description: "Tailored NLP and Computer Vision models for your specific needs.",
          features: [
            "Custom training",
            "Domain adaptation",
            "Model optimization",
            "Performance tuning"
          ],
          link: "/contact",
          ctaText: "Learn More"
        }
      ]}
      serviceOfferingsVariant="default"

      // Benefits Section (Process/Workflow)
      benefitsTitle="How NLP & Computer Vision Works"
      benefitsSubtitle="Our proven process for implementing intelligent text and image processing solutions"
      benefits={[
        {
          icon: <RocketLaunch />,
          title: "Data Analysis & Strategy",
          description: "Analyze your text and image data requirements and develop a comprehensive processing strategy.",
          features: [
            "Data assessment",
            "Use case identification",
            "Technology selection",
            "Implementation planning"
          ],
          metric: {
            value: "2-3",
            label: "Weeks Analysis"
          }
        },
        {
          icon: <Lightbulb />,
          title: "Model Development & Training",
          description: "Develop and train custom NLP and Computer Vision models for your specific use cases.",
          features: [
            "Model development",
            "Data preparation",
            "Training & validation",
            "Performance optimization"
          ],
          metric: {
            value: "4-8",
            label: "Weeks Development"
          }
        },
        {
          icon: <CheckCircle />,
          title: "Integration & Deployment",
          description: "Integrate NLP and Computer Vision solutions with your existing systems and deploy them in production.",
          features: [
            "System integration",
            "API development",
            "Testing & validation",
            "Production deployment"
          ],
          metric: {
            value: "1-2",
            label: "Weeks Deployment"
          }
        }
      ]}

      // FAQ Section
      faqTitle="Frequently Asked Questions"
      faqSubtitle="Find answers to common questions about NLP and Computer Vision"
      faqItems={[
        {
          question: "What is the difference between NLP and Computer Vision?",
          answer: "NLP (Natural Language Processing) focuses on understanding and processing text and language, while Computer Vision focuses on analyzing and understanding images and video. Both are AI technologies that help systems understand different types of data."
        },
        {
          question: "What types of data can NLP and Computer Vision process?",
          answer: "NLP can process text data including documents, emails, social media posts, and conversations. Computer Vision can process images, videos, scanned documents, and visual content. Both can handle structured and unstructured data."
        },
        {
          question: "How accurate are NLP and Computer Vision models?",
          answer: "Accuracy depends on the specific use case and data quality. Our models typically achieve 90-95% accuracy for most applications. We continuously improve accuracy through retraining and optimization."
        },
        {
          question: "Can NLP and Computer Vision work together?",
          answer: "Yes, NLP and Computer Vision can be combined for multimodal applications. For example, analyzing documents with both text and images, or processing videos with speech and visual content."
        },
        {
          question: "How do you ensure data privacy and security?",
          answer: "We implement enterprise-grade security measures including data encryption, access controls, and compliance with privacy regulations. We can process data on-premise or in secure cloud environments."
        },
        {
          question: "How long does NLP and Computer Vision implementation take?",
          answer: "Implementation time varies based on complexity and data volume. Typical projects take 6-12 weeks including analysis, development, testing, and deployment. We follow agile methodologies for iterative improvements."
        }
      ]}

      // Final CTA
      finalCtaTitle="Ready to Process Text & Images Intelligently?"
      finalCtaSubtitle="Let's discuss how NLP and Computer Vision can transform your data processing and unlock new insights from your text and visual content."
      finalCtaButtonText="Schedule NLP & CV Consultation"
      finalCtaButtonLink="/contact"

      // Blog & Case Studies
      blogTitle="NLP & Computer Vision Insights"
      blogSubtitle="Stay informed with our latest research on text and image processing technologies"
      caseStudyTitle="NLP & Computer Vision Success Stories"
      caseStudySubtitle="Discover how we've helped businesses achieve remarkable results with intelligent text and image processing"

      // Theme
      theme="light"
    />
  );
};

export default NLPComputerVision;
