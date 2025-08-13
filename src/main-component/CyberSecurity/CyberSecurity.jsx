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
  Shield,
  Lock,
  Visibility,
  Warning,
  People,
  FlashOn
} from '@mui/icons-material';

const CyberSecurity = () => {
  return (
    <MasterMainServiceTemplate
      // Hero Section - Minimal
      heroTitle="Cybersecurity Excellence"
      heroSubtitle="Protect Your Digital Assets"
      heroDescription="Comprehensive cybersecurity solutions designed to protect your organization from evolving threats. From threat detection to incident response, we help you build a robust security posture."
      heroButtonText="Secure Your Business"
      heroButtonLink="/contact"
      heroBackgroundImage="/images/bg/image-belowhero.webp"
      heroFeatures={[
        "Threat Detection & Response",
        "Identity & Access Management",
        "Security Monitoring",
        "Vulnerability Assessment"
      ]}

      // Problem/Solution Section
      problemSolutionTitle="The Cybersecurity Challenge & Our Solution"
      problemSolutionSubtitle="We understand the complexities of cybersecurity and have the expertise to protect your business"
      problems={[
        {
          title: "Evolving Threat Landscape",
          description: "Sophisticated cyber threats that constantly evolve, making traditional security measures insufficient."
        },
        {
          title: "Security Gaps & Vulnerabilities",
          description: "Unidentified security weaknesses and gaps in existing infrastructure that expose organizations to risks."
        },
        {
          title: "Compliance & Regulatory Requirements",
          description: "Complex compliance requirements and regulatory standards that are difficult to maintain and audit."
        }
      ]}
      solutions={[
        {
          title: "Advanced Threat Protection",
          description: "Comprehensive threat detection and response systems that adapt to evolving cyber threats in real-time."
        },
        {
          title: "Proactive Security Posture",
          description: "Regular security assessments, vulnerability management, and proactive threat hunting to prevent attacks."
        },
        {
          title: "Compliance & Governance",
          description: "End-to-end compliance management with automated monitoring and reporting for regulatory requirements."
        }
      ]}
      problemSolutionVariant="split"

      // Service Offerings
      serviceOfferingsTitle="Our Cybersecurity Services"
      serviceOfferingsSubtitle="Comprehensive cybersecurity solutions designed to protect your organization from all types of threats"
      services={[
        {
          icon: <Shield />,
          title: "Threat Detection & Response",
          description: "Advanced security monitoring and rapid incident response to protect your digital assets.",
          features: [
            "Real-time monitoring",
            "Incident response",
            "Threat intelligence"
          ],
          badge: "Most Popular",
          link: "/service/cybersecurity/threat-detection",
          ctaText: "Explore Detection"
        },
        {
          icon: <Lock />,
          title: "Identity & Access Management",
          description: "Comprehensive IAM solutions to secure user access and prevent unauthorized entry.",
          features: [
            "User authentication",
            "Access control",
            "Privilege management"
          ],
          badge: "Trending",
          link: "/service/cybersecurity/iam",
          ctaText: "IAM Solutions"
        },
        {
          icon: <Visibility />,
          title: "Security Monitoring",
          description: "24/7 security monitoring with real-time alerts and proactive threat prevention.",
          features: [
            "24/7 monitoring",
            "Real-time alerts",
            "Proactive prevention"
          ],
          link: "/service/cybersecurity/monitoring",
          ctaText: "Security Monitoring"
        },
        {
          icon: <Warning />,
          title: "Vulnerability Assessment",
          description: "Regular security audits and penetration testing to identify and fix vulnerabilities.",
          features: [
            "Security audits",
            "Penetration testing",
            "Vulnerability management"
          ],
          link: "/service/cybersecurity/vulnerability",
          ctaText: "Assessment"
        },
        {
          icon: <People />,
          title: "Security Training",
          description: "Employee security awareness training to build a security-first culture.",
          features: [
            "Awareness training",
            "Phishing simulation",
            "Security culture"
          ],
          link: "/service/cybersecurity/training",
          ctaText: "Security Training"
        },
        {
          icon: <FlashOn />,
          title: "Incident Response",
          description: "Rapid response protocols and recovery strategies for security incidents.",
          features: [
            "Response protocols",
            "Recovery strategies",
            "Forensic analysis"
          ],
          link: "/service/cybersecurity/incident-response",
          ctaText: "Incident Response"
        }
      ]}
      serviceOfferingsVariant="default"

      // Benefits Section
      benefitsTitle="Why Choose Our Cybersecurity Solutions"
      benefitsSubtitle="Discover the tangible benefits and outcomes you can expect from our security transformation"
      benefits={[
        {
          icon: <Security />,
          title: "99.9% Threat Detection",
          description: "Advanced threat detection capabilities that identify and neutralize threats before they impact your business.",
          features: [
            "Real-time detection",
            "Automated response",
            "Threat intelligence"
          ],
          metric: {
            value: "99.9%",
            label: "Detection Rate"
          }
        },
        {
          icon: <TrendingUp />,
          title: "60% Risk Reduction",
          description: "Comprehensive security measures that significantly reduce your organization's cyber risk exposure.",
          features: [
            "Risk assessment",
            "Mitigation strategies",
            "Continuous monitoring"
          ],
          metric: {
            value: "60%",
            label: "Risk Reduction"
          }
        },
        {
          icon: <CheckCircle />,
          title: "Compliance Excellence",
          description: "Full compliance with industry standards and regulatory requirements with automated monitoring and reporting.",
          features: [
            "Regulatory compliance",
            "Automated reporting",
            "Audit readiness"
          ],
          metric: {
            value: "100%",
            label: "Compliance Rate"
          }
        }
      ]}

      // Stats Section
      statsTitle="Proven Security Results"
      statsSubtitle="Numbers that speak for themselves - real outcomes from our cybersecurity implementations"
      stats={[
        {
          icon: <Security />,
          value: "99.9%",
          label: "Threat Detection",
          description: "Average threat detection rate across all security implementations"
        },
        {
          icon: <TrendingUp />,
          value: "60%",
          label: "Risk Reduction",
          description: "Average reduction in cyber risk exposure for our clients"
        },
        {
          icon: <CheckCircle />,
          value: "100%",
          label: "Compliance Rate",
          description: "Clients achieving full regulatory compliance"
        },
        {
          icon: <Speed />,
          value: "<5min",
          label: "Response Time",
          description: "Average incident response time for security threats"
        }
      ]}

      // Final CTA
      finalCtaTitle="Ready to Secure Your Business?"
      finalCtaSubtitle="Join hundreds of companies that have already protected their operations with our cybersecurity solutions. Let's discuss how we can help you achieve similar results."
      finalCtaButtonText="Schedule Security Consultation"
      finalCtaButtonLink="/contact"

      // Blog & Case Studies
      blogTitle="Cybersecurity Insights & Updates"
      blogSubtitle="Stay informed with our latest security research, threat intelligence, and thought leadership content"
      caseStudyTitle="Security Success Stories"
      caseStudySubtitle="Discover how we've helped businesses achieve remarkable results with cybersecurity implementation"

      // Theme
      theme="light"
    />
  );
};

export default CyberSecurity;
