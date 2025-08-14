import React from "react";
import MasterSubServiceTemplate from "../../components/templates/MasterSubServiceTemplate";
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
  Shield,
  Policy,
  Build,
  Compliance
} from '@mui/icons-material';

const DataGovernanceSecurity = () => {
  return (
    <MasterSubServiceTemplate
      // Hero Section - Minimal
      heroTitle="Data Governance & Security"
      heroSubtitle="Compliance & Protection"
      heroDescription="Ensure compliant, secure, and reliable data with comprehensive governance frameworks and security protocols. Protect your data assets with enterprise-grade governance, security compliance, and privacy protection."
      heroButtonText="Governance"
      heroButtonLink="/contact"
      heroBackgroundImage="/Data-&-Analytics.webp"
      heroFeatures={[
        "Data Governance",
        "Security Compliance",
        "Privacy Protection",
        "Risk Management"
      ]}

      // Problem/Solution Section
      problemSolutionTitle="The Data Governance & Security Challenge & Our Solution"
      problemSolutionSubtitle="We understand the complexities of data governance and have the expertise to protect your data assets"
      problems={[
        {
          title: "Data Security Vulnerabilities",
          description: "Increasing data security threats and vulnerabilities that expose sensitive information and create compliance risks."
        },
        {
          title: "Compliance Complexity",
          description: "Complex regulatory requirements and compliance standards that are difficult to implement and maintain across systems."
        },
        {
          title: "Governance Gaps",
          description: "Lack of comprehensive data governance frameworks that prevent proper data management and quality control."
        }
      ]}
      solutions={[
        {
          title: "Comprehensive Data Security",
          description: "Enterprise-grade security measures and protocols that protect data assets and prevent security breaches."
        },
        {
          title: "Regulatory Compliance Framework",
          description: "Complete compliance frameworks that meet regulatory requirements and ensure data protection standards."
        },
        {
          title: "Data Governance Strategy",
          description: "Comprehensive data governance strategy with policies, procedures, and controls for effective data management."
        }
      ]}
      problemSolutionVariant="split"

      // Service Offerings
      serviceOfferingsTitle="Our Data Governance & Security Services"
      serviceOfferingsSubtitle="Comprehensive data governance and security services designed to protect your data assets"
      services={[
        {
          icon: <Policy />,
          title: "Data Governance",
          description: "Implement comprehensive data governance frameworks with policies, procedures, and quality controls.",
          features: [
            "Governance frameworks",
            "Policy development",
            "Quality controls"
          ],
          badge: "Most Popular",
          link: "/contact",
          ctaText: "Data Governance"
        },
        {
          icon: <Shield />,
          title: "Security Compliance",
          description: "Ensure compliance with security standards and regulatory requirements across all data systems.",
          features: [
            "Security standards",
            "Regulatory compliance",
            "Audit readiness"
          ],
          badge: "Trending",
          link: "/contact",
          ctaText: "Security Compliance"
        },
        {
          icon: <Security />,
          title: "Privacy Protection",
          description: "Implement privacy protection measures and data anonymization techniques for sensitive information.",
          features: [
            "Privacy measures",
            "Data anonymization",
            "Consent management"
          ],
          link: "/contact",
          ctaText: "Privacy Protection"
        },
        {
          icon: <Build />,
          title: "Risk Management",
          description: "Develop comprehensive risk management strategies for data security and compliance monitoring.",
          features: [
            "Risk assessment",
            "Compliance monitoring",
            "Incident response"
          ],
          link: "/contact",
          ctaText: "Risk Management"
        }
      ]}
      serviceOfferingsVariant="default"

      // Benefits Section
      benefitsTitle="Why Choose Our Data Governance & Security Services"
      benefitsSubtitle="Discover the tangible benefits and outcomes you can expect from our governance and security solutions"
      benefits={[
        {
          icon: <Security />,
          title: "100% Compliance",
          description: "Complete compliance with regulatory requirements and security standards across all data systems and processes.",
          features: [
            "Regulatory compliance",
            "Security standards",
            "Audit readiness"
          ],
          metric: {
            value: "100%",
            label: "Compliance Rate"
          }
        },
        {
          icon: <Shield />,
          title: "Zero Security Breaches",
          description: "Enterprise-grade security measures that prevent data breaches and protect sensitive information effectively.",
          features: [
            "Breach prevention",
            "Data protection",
            "Security monitoring"
          ],
          metric: {
            value: "Zero",
            label: "Security Breaches"
          }
        },
        {
          icon: <CheckCircle />,
          title: "Comprehensive Governance",
          description: "Complete data governance framework that ensures data quality, consistency, and proper management across the organization.",
          features: [
            "Data quality",
            "Consistency management",
            "Proper controls"
          ],
          metric: {
            value: "100%",
            label: "Governance Coverage"
          }
        }
      ]}

      // Stats Section
      statsTitle="Proven Governance & Security Results"
      statsSubtitle="Numbers that speak for themselves - real outcomes from our governance and security implementations"
      stats={[
        {
          icon: <Security />,
          value: "100%",
          label: "Compliance Rate",
          description: "Complete regulatory compliance achieved"
        },
        {
          icon: <Shield />,
          value: "Zero",
          label: "Security Breaches",
          description: "Zero security breaches across implementations"
        },
        {
          icon: <CheckCircle />,
          value: "100%",
          label: "Governance Coverage",
          description: "Complete data governance framework coverage"
        },
        {
          icon: <Policy />,
          value: "50+",
          label: "Policies Implemented",
          description: "Data governance policies across organizations"
        }
      ]}

      // Final CTA
      finalCtaTitle="Ready to Protect Your Data Assets?"
      finalCtaSubtitle="Join hundreds of companies that have already secured their data with our governance and security services. Let's discuss how we can help you achieve similar results."
      finalCtaButtonText="Schedule Governance Consultation"
      finalCtaButtonLink="/contact"

      // Blog & Case Studies
      blogTitle="Data Governance & Security Insights & Updates"
      blogSubtitle="Stay informed with our latest governance and security research, industry trends, and thought leadership content"
      caseStudyTitle="Governance & Security Success Stories"
      caseStudySubtitle="Discover how we've helped businesses achieve remarkable results with data governance and security"

      // Theme
      theme="light"
    />
  );
};

export default DataGovernanceSecurity;
