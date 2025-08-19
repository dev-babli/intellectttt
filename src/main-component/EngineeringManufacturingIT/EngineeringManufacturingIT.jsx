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
  AutoFixHigh,
  Build,
  Engineering,
  Factory,
  PrecisionManufacturing,
  Science,
  Biotech,
  MedicalServices,
  Verified,
  Assignment,
  Support,
  Assessment,
  Policy
} from '@mui/icons-material';

const EngineeringManufacturingIT = () => {
  return (
    <MasterMainServiceTemplate
      // Hero Section - Minimal
      heroTitle="Engineering Services"
      heroSubtitle="Home Engineering Services"
      heroDescription="We lead in R&D and new product development, specializing in design, prototyping, and testing for medical devices. With a focus on innovation and precision, we collaborate closely with clients to transform ideas into market-ready solutions."
      heroButtonText="Engineering Services"
      heroButtonLink="/contact"
      heroBackgroundImage="/Manufacturing-and-Automotive.webp"
      heroTextColor="white"
      heroFeatures={[
        "R&D Excellence",
        "Product Development",
        "Medical Devices",
        "Innovation"
      ]}

      // Problem/Solution Section
      problemSolutionTitle="Engineering Challenges & Our Solutions"
      problemSolutionSubtitle="We understand the complexities of engineering and manufacturing, providing comprehensive solutions for medical device development and production"
      problems={[
        {
          title: "Complex Product Development",
          description: "Challenges in transforming innovative ideas into market-ready medical devices with proper design, prototyping, and testing."
        },
        {
          title: "Manufacturing Setup Issues",
          description: "Difficulties in setting up advanced manufacturing lines with proper layout design, equipment selection, and validation."
        },
        {
          title: "Quality & Compliance",
          description: "Ensuring regulatory compliance, quality management, and meeting stringent safety standards for medical devices."
        }
      ]}
      solutions={[
        {
          title: "Comprehensive R&D Services",
          description: "End-to-end product development from design to prototyping and testing with focus on innovation and precision."
        },
        {
          title: "Advanced Manufacturing Setup",
          description: "Complete manufacturing line setup with clean room design, equipment installation, and comprehensive training."
        },
        {
          title: "Quality & Regulatory Excellence",
          description: "Robust quality management systems and regulatory compliance ensuring safety and efficacy standards."
        }
      ]}
      problemSolutionVariant="split"

      // Service Offerings
      serviceOfferingsTitle="Our Engineering Services"
      serviceOfferingsSubtitle="Comprehensive engineering solutions for medical device development and manufacturing"
      services={[
        {
          icon: <Science />,
          title: "R&D & Product Development",
          description: "We lead in R&D and new product development, specializing in design, prototyping, and testing for medical devices. With a focus on innovation and precision, we collaborate closely with clients to transform ideas into market-ready solutions.",
          features: [
            "Design & prototyping",
            "Testing & validation",
            "Innovation focus"
          ],
          badge: "Core Service",
          link: "/contact",
          ctaText: "Learn More"
        },
        {
          icon: <Factory />,
          title: "Manufacturing Line Setup",
          description: "We excel in setting up advanced manufacturing lines tailored to medical device production needs. From layout design to equipment selection and validation, we ensure efficiency, compliance, and scalability.",
          features: [
            "Layout design",
            "Equipment selection",
            "Clean room design"
          ],
          badge: "Essential",
          link: "/contact",
          ctaText: "Learn More"
        },
        {
          icon: <Engineering />,
          title: "Process Development",
          description: "Our process development expertise focuses on optimizing workflows and ensuring regulatory compliance. Using advanced quality engineering techniques and data analytics, we drive continuous improvement.",
          features: [
            "Workflow optimization",
            "Regulatory compliance",
            "Quality engineering"
          ],
          link: "/contact",
          ctaText: "Learn More"
        },
        {
          icon: <Verified />,
          title: "Quality Management",
          description: "Quality is our priority, with rigorous quality management practices, risk assessment, and statistical analysis to validate designs and processes. We adhere to regulatory standards and industry best practices.",
          features: [
            "Risk assessment",
            "Statistical analysis",
            "Regulatory standards"
          ],
          link: "/contact",
          ctaText: "Learn More"
        },
        {
          icon: <Policy />,
          title: "Quality Management Systems",
          description: "We specialize in designing and implementing robust Quality Management Systems (QMS) compliant with ISO standards, FDA regulations, and industry guidelines. Our comprehensive solutions include document control, CAPA processes, training, and supplier qualification.",
          features: [
            "ISO compliance",
            "FDA regulations",
            "Document control"
          ],
          link: "/contact",
          ctaText: "Learn More"
        },
        {
          icon: <Support />,
          title: "Remediation Strategies",
          description: "We excel in swift and effective remediation strategies, addressing non-conformities and regulatory deficiencies. Our transparent and collaborative approach ensures rapid resolution, process improvement, and sustained compliance.",
          features: [
            "Non-conformity resolution",
            "Process improvement",
            "Sustained compliance"
          ],
          link: "/contact",
          ctaText: "Learn More"
        },
        {
          icon: <Assessment />,
          title: "Audit Preparation",
          description: "Our meticulous audit preparation services guarantee readiness and confidence during regulatory audits. We conduct thorough gap analyses, mock audits, and documentation support for compliance and risk minimization.",
          features: [
            "Gap analysis",
            "Mock audits",
            "Documentation support"
          ],
          link: "/contact",
          ctaText: "Learn More"
        },
        {
          icon: <Assignment />,
          title: "CAPA Implementation",
          description: "We assist in interpreting audit findings, prioritizing corrective actions, and implementing CAPA plans for sustainable improvement. Our focus on preventive measures and proactive solutions helps maintain compliance.",
          features: [
            "Corrective actions",
            "Preventive measures",
            "Sustainable improvement"
          ],
          link: "/contact",
          ctaText: "Learn More"
        },
        {
          icon: <MedicalServices />,
          title: "Regulatory Affairs",
          description: "Our regulatory affairs expertise guides clients through FDA submissions, CE marking, and regulatory strategy development for timely approvals and market access. Stay updated on regulatory changes and receive comprehensive support.",
          features: [
            "FDA submissions",
            "CE marking",
            "Regulatory strategy"
          ],
          link: "/contact",
          ctaText: "Learn More"
        }
      ]}
      serviceOfferingsVariant="default"

      // Benefits Section
      benefitsTitle="Why Choose Our Engineering Services"
      benefitsSubtitle="Discover the tangible benefits and outcomes you can expect from our comprehensive engineering solutions"
      benefits={[
        {
          icon: <RocketLaunch />,
          title: "Innovation Leadership",
          description: "Leading R&D and new product development with cutting-edge designs, rapid prototyping, and rigorous testing for safety and efficacy.",
          features: [
            "Cutting-edge designs",
            "Rapid prototyping",
            "Rigorous testing"
          ],
          metric: {
            value: "100%",
            label: "Innovation Focus"
          }
        },
        {
          icon: <Factory />,
          title: "Advanced Manufacturing",
          description: "Setting up advanced manufacturing lines with clean room design, equipment installation, and comprehensive training for optimized productivity.",
          features: [
            "Clean room design",
            "Equipment installation",
            "Comprehensive training"
          ],
          metric: {
            value: "Efficient",
            label: "Manufacturing"
          }
        },
        {
          icon: <CheckCircle />,
          title: "Quality Excellence",
          description: "Rigorous quality management practices, risk assessment, and statistical analysis ensuring every device meets stringent quality and safety standards.",
          features: [
            "Quality management",
            "Risk assessment",
            "Safety standards"
          ],
          metric: {
            value: "99.9%",
            label: "Quality Assurance"
          }
        }
      ]}

      // Stats Section
      statsTitle="Proven Engineering Results"
      statsSubtitle="Numbers that speak for themselves - real outcomes from our engineering implementations"
      stats={[
        {
          icon: <Science />,
          value: "100+",
          label: "Products Developed",
          description: "Medical devices successfully developed and launched"
        },
        {
          icon: <Factory />,
          value: "50+",
          label: "Manufacturing Lines",
          description: "Advanced manufacturing lines set up and optimized"
        },
        {
          icon: <CheckCircle />,
          value: "99.9%",
          label: "Quality Assurance",
          description: "Quality control and regulatory compliance achieved"
        },
        {
          icon: <Policy />,
          value: "100%",
          label: "Regulatory Success",
          description: "FDA and CE marking approvals obtained"
        }
      ]}

      // Final CTA
      finalCtaTitle="Ready to Transform Your Engineering?"
      finalCtaSubtitle="Join hundreds of companies that have already achieved success with our comprehensive engineering services. Let's discuss how we can help you develop innovative medical devices and set up efficient manufacturing processes."
      finalCtaButtonText="Schedule Engineering Consultation"
      finalCtaButtonLink="/contact"

      // Blog & Case Studies
      blogTitle="Engineering Insights & Updates"
      blogSubtitle="Stay informed with our latest engineering research, industry trends, and thought leadership content"
      caseStudyTitle="Engineering Success Stories"
      caseStudySubtitle="Discover how we've helped businesses achieve remarkable results with our comprehensive engineering services"

      // Theme
      theme="light"
    />
  );
};

export default EngineeringManufacturingIT;
