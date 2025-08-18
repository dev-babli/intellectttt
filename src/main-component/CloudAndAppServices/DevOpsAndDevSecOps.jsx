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
  Build,
  Code,
  Storage,
  Shield
} from '@mui/icons-material';

const DevOpsAndDevSecOps = () => {
  return (
    <MasterSubServiceTemplate
      // Hero Section - Minimal
      heroTitle="DevOps & DevSecOps"
      heroSubtitle="Secure Automation"
      heroDescription="Automate and secure your development pipeline with modern DevOps practices. Build secure, automated CI/CD pipelines that accelerate delivery while maintaining security and quality standards."
      heroButtonText="DevOps Solutions"
      heroButtonLink="/contact"
      heroBackgroundImage="/dev.webp"
      heroFeatures={[
        "CI/CD Automation",
        "Security Integration",
        "Infrastructure as Code",
        "Monitoring & Alerting"
      ]}

      // Problem/Solution Section
      problemSolutionTitle="The DevOps & DevSecOps Challenge & Our Solution"
      problemSolutionSubtitle="We understand the complexities of DevOps transformation and have the expertise to build secure, automated pipelines"
      problems={[
        {
          title: "Manual Deployment Processes",
          description: "Slow, error-prone manual deployment processes that delay releases and create operational bottlenecks."
        },
        {
          title: "Security Integration Gaps",
          description: "Security practices that are separate from development processes, creating vulnerabilities and compliance risks."
        },
        {
          title: "Infrastructure Management",
          description: "Complex infrastructure management and lack of automation that prevents rapid scaling and deployment."
        }
      ]}
      solutions={[
        {
          title: "Automated CI/CD Pipelines",
          description: "End-to-end automated CI/CD pipelines that accelerate delivery and reduce deployment errors."
        },
        {
          title: "Integrated Security Practices",
          description: "Security integrated into every stage of the development lifecycle with automated security scanning and compliance."
        },
        {
          title: "Infrastructure Automation",
          description: "Automated infrastructure provisioning and management using Infrastructure as Code and modern DevOps tools."
        }
      ]}
      problemSolutionVariant="split"

      // Service Offerings
      serviceOfferingsTitle="Our DevOps & DevSecOps Services"
      serviceOfferingsSubtitle="Comprehensive DevOps and DevSecOps services designed to accelerate delivery and ensure security"
      services={[
        {
          icon: <Build />,
          title: "CI/CD Automation",
          description: "Build automated CI/CD pipelines that accelerate software delivery and improve quality.",
          features: [
            "Pipeline automation",
            "Quality gates",
            "Automated testing"
          ],
          badge: "Most Popular",
          link: "/contact",
          ctaText: "CI/CD Automation"
        },
        {
          icon: <Shield />,
          title: "Security Integration",
          description: "Integrate security into every stage of the development lifecycle with automated scanning.",
          features: [
            "Security scanning",
            "Compliance automation",
            "Vulnerability management"
          ],
          badge: "Trending",
          link: "/contact",
          ctaText: "Security Integration"
        },
        {
          icon: <Code />,
          title: "Infrastructure as Code",
          description: "Automate infrastructure provisioning and management using modern IaC practices and tools.",
          features: [
            "Terraform automation",
            "CloudFormation",
            "Configuration management"
          ],
          link: "/contact",
          ctaText: "Infrastructure as Code"
        },
        {
          icon: <Analytics />,
          title: "Monitoring & Alerting",
          description: "Implement comprehensive monitoring and alerting systems for applications and infrastructure.",
          features: [
            "Application monitoring",
            "Infrastructure monitoring",
            "Proactive alerting"
          ],
          link: "/contact",
          ctaText: "Monitoring & Alerting"
        }
      ]}
      serviceOfferingsVariant="default"

      // Benefits Section
      benefitsTitle="Why Choose Our DevOps & DevSecOps Services"
      benefitsSubtitle="Discover the tangible benefits and outcomes you can expect from our DevOps transformation"
      benefits={[
        {
          icon: <Speed />,
          title: "80% Faster Delivery",
          description: "Automated CI/CD pipelines that significantly reduce deployment time and accelerate time-to-market.",
          features: [
            "Rapid deployment",
            "Automated testing",
            "Quality assurance"
          ],
          metric: {
            value: "80%",
            label: "Faster Delivery"
          }
        },
        {
          icon: <Security />,
          title: "Integrated Security",
          description: "Security integrated into every stage of development with automated scanning and compliance checks.",
          features: [
            "Security by design",
            "Automated scanning",
            "Compliance automation"
          ],
          metric: {
            value: "100%",
            label: "Security Coverage"
          }
        },
        {
          icon: <CheckCircle />,
          title: "Reduced Errors",
          description: "Automated processes that eliminate manual errors and improve deployment reliability.",
          features: [
            "Error reduction",
            "Consistent deployments",
            "Quality improvement"
          ],
          metric: {
            value: "90%",
            label: "Error Reduction"
          }
        }
      ]}

      // Stats Section
      statsTitle="Proven DevOps Results"
      statsSubtitle="Numbers that speak for themselves - real outcomes from our DevOps implementations"
      stats={[
        {
          icon: <Speed />,
          value: "80%",
          label: "Faster Delivery",
          description: "Average improvement in deployment speed"
        },
        {
          icon: <Security />,
          value: "100%",
          label: "Security Coverage",
          description: "Security integrated into all pipelines"
        },
        {
          icon: <CheckCircle />,
          value: "90%",
          label: "Error Reduction",
          description: "Reduction in deployment errors"
        },
        {
          icon: <Build />,
          value: "24/7",
          label: "Automation",
          description: "Continuous automation and monitoring"
        }
      ]}

      // Final CTA
      finalCtaTitle="Ready to Automate Your Development Pipeline?"
      finalCtaSubtitle="Join hundreds of companies that have already transformed their development processes with our DevOps and DevSecOps services. Let's discuss how we can help you achieve similar results."
      finalCtaButtonText="Schedule DevOps Consultation"
      finalCtaButtonLink="/contact"

      // Blog & Case Studies
      blogTitle="DevOps & DevSecOps Insights & Updates"
      blogSubtitle="Stay informed with our latest DevOps research, industry trends, and thought leadership content"
      caseStudyTitle="DevOps Success Stories"
      caseStudySubtitle="Discover how we've helped businesses achieve remarkable results with DevOps transformation"

      // Theme
      theme="light"
    />
  );
};

export default DevOpsAndDevSecOps;
