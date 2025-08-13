import React from 'react';
import MasterMainServiceTemplate from '../templates/MasterMainServiceTemplate';
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
  CheckCircle
} from '@mui/icons-material';

const AIExamplePage = () => {
  return (
    <MasterMainServiceTemplate
      // Hero Section
      heroTitle="AI-Powered Business Transformation"
      heroSubtitle="Next-Generation Intelligence"
      heroDescription="Unlock the power of artificial intelligence to automate, optimize, and innovate across your entire organization. From machine learning to generative AI, we deliver cutting-edge solutions that drive real business results."
      heroButtonText="Start Your AI Journey"
      heroButtonLink="/contact"
      heroBackgroundImage="/public/images/ai-brain-network.jpg"
      heroFeatures={[
        {
          icon: <Speed />,
          title: "10x Faster Processing",
          description: "Accelerate workflows with intelligent automation"
        },
        {
          icon: <TrendingUp />,
          title: "30% Cost Reduction",
          description: "Optimize operations and reduce manual overhead"
        },
        {
          icon: <Analytics />,
          title: "Real-time Insights",
          description: "Make data-driven decisions with AI-powered analytics"
        }
      ]}
      heroTheme="dark"

      // Problem/Solution Section
      problemSolutionTitle="The AI Challenge & Our Solution"
      problemSolutionSubtitle="We understand the complexities of AI implementation and have the expertise to make it work for your business"
      problems={[
        {
          title: "Data Silos & Fragmentation",
          description: "Critical business data scattered across multiple systems, preventing actionable insights and unified decision-making."
        },
        {
          title: "Manual Process Bottlenecks",
          description: "Time-consuming manual tasks reducing productivity and creating operational inefficiencies that impact customer experience."
        },
        {
          title: "Lack of Predictive Capabilities",
          description: "Reactive decision-making instead of proactive strategies, missing opportunities and failing to anticipate market changes."
        },
        {
          title: "AI Implementation Complexity",
          description: "Overwhelming technical requirements, integration challenges, and uncertainty about ROI and success metrics."
        }
      ]}
      solutions={[
        {
          title: "Unified Data Platform",
          description: "Centralized data management with real-time analytics, breaking down silos and providing a single source of truth for all business intelligence."
        },
        {
          title: "Intelligent Process Automation",
          description: "AI-powered workflow automation that handles repetitive tasks, freeing your team to focus on strategic initiatives and innovation."
        },
        {
          title: "Predictive Analytics Engine",
          description: "Advanced machine learning models that forecast trends, identify patterns, and provide actionable insights for proactive decision-making."
        },
        {
          title: "End-to-End AI Implementation",
          description: "Complete AI transformation services from strategy to deployment, with proven methodologies and guaranteed ROI tracking."
        }
      ]}
      problemSolutionVariant="split"

      // Service Offerings
      serviceOfferingsTitle="Our AI Solutions"
      serviceOfferingsSubtitle="Comprehensive artificial intelligence services designed to transform every aspect of your business"
      services={[
        {
          icon: <SmartToy />,
          title: "Machine Learning Solutions",
          description: "Custom ML models tailored to your specific business needs, from predictive analytics to recommendation engines.",
          features: [
            "Custom model development",
            "Predictive analytics",
            "Recommendation systems",
            "Anomaly detection"
          ],
          badge: "Most Popular",
          link: "/services/machine-learning",
          ctaText: "Explore ML Solutions"
        },
        {
          icon: <AutoAwesome />,
          title: "Generative AI",
          description: "Transform content creation, customer interactions, and creative processes with cutting-edge generative AI technology.",
          features: [
            "Content generation",
            "Chatbot development",
            "Image and video creation",
            "Code generation"
          ],
          badge: "Trending",
          link: "/services/generative-ai",
          ctaText: "Discover GenAI"
        },
        {
          icon: <DataUsage />,
          title: "Data Analytics & BI",
          description: "Turn your data into actionable insights with advanced analytics, visualization, and business intelligence solutions.",
          features: [
            "Real-time dashboards",
            "Advanced analytics",
            "Data visualization",
            "KPI tracking"
          ],
          link: "/services/data-analytics",
          ctaText: "Learn More"
        },
        {
          icon: <Psychology />,
          title: "Natural Language Processing",
          description: "Enable your systems to understand, interpret, and generate human language for enhanced customer experiences.",
          features: [
            "Sentiment analysis",
            "Text classification",
            "Language translation",
            "Document processing"
          ],
          link: "/services/nlp",
          ctaText: "Explore NLP"
        }
      ]}
      serviceOfferingsVariant="featured"

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
            "Instant decision support",
            "Streamlined workflows"
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
            "Lower operational costs",
            "Improved efficiency"
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
            "Performance optimization",
            "Strategic planning"
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

export default AIExamplePage;

