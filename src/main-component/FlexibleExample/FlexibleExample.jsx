import React from "react";
import useScrollToTop from "../../hooks/useScrollToTop";
import FlexibleTemplate from "../../components/templates/FlexibleTemplate";
import icon from "../../images/icon/magic02.svg";
import about1 from "../../images/bg/image-belowhero.webp";
import about2 from "../../images/bg/abt-cnt_bg.png";

const FlexibleExample = () => {
  // Scroll to top when component mounts
  useScrollToTop();

  const features = [
    {
      icon: "🚀",
      title: "Rapid Deployment",
      description: "Deploy your applications faster with our streamlined development process."
    },
    {
      icon: "🔒",
      title: "Enterprise Security",
      description: "Bank-grade security with compliance and audit trails built-in."
    },
    {
      icon: "📈",
      title: "Scalable Architecture",
      description: "Built to scale with your business growth and changing needs."
    },
    {
      icon: "🔄",
      title: "Continuous Innovation",
      description: "Stay ahead with regular updates and cutting-edge technology."
    }
  ];

  const faqItems = [
    {
      question: "What makes your solutions different?",
      answer: "Our solutions combine deep industry expertise with cutting-edge technology, ensuring both innovation and reliability."
    },
    {
      question: "How long does implementation take?",
      answer: "Implementation timelines vary based on complexity, typically ranging from 4-12 weeks for most solutions."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer comprehensive support including 24/7 monitoring, regular updates, and dedicated account management."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We serve multiple industries including healthcare, finance, manufacturing, and retail with specialized solutions."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      content: "The implementation was seamless and the results exceeded our expectations. Our efficiency improved by 40%.",
      avatar: "/images/team/sarah.jpg"
    },
    {
      name: "Michael Chen",
      role: "VP Engineering, DataFlow",
      content: "Outstanding technical expertise and professional service. Highly recommended for any digital transformation project.",
      avatar: "/images/team/michael.jpg"
    }
  ];

  return (
    <FlexibleTemplate
      // Hero Section Props
      heroTitle="Special Campaign: Digital Transformation Accelerator"
      heroSubtitle="Limited Time Offer"
      heroDescription="Transform your business with our comprehensive digital transformation accelerator program. Get exclusive access to our latest technologies and expert guidance."
      heroButtonText="Get Started Now"
      heroButtonLink="/contact"
      heroBackgroundImage="/images/bg/image-belowhero.webp"
      heroFeatures={[
        "Exclusive Technology Access",
        "Expert Guidance",
        "Rapid Implementation",
        "Ongoing Support"
      ]}
      
      // About Section Props
      showAboutSection={true}
      aboutIcon={icon}
      aboutSubtitle="About This Campaign"
      aboutTitle="Digital Transformation Accelerator"
      aboutContent="Our Digital Transformation Accelerator is a comprehensive program designed to help businesses rapidly modernize their technology infrastructure and processes. This limited-time campaign provides exclusive access to our latest solutions with accelerated implementation timelines."
      aboutImage={about1}
      aboutBadgeImage={about2}
      aboutBadgeNumber="50%"
      aboutBadgeText="Faster implementation"
      
      // Features Section Props
      showFeaturesSection={true}
      features={features}
      
      // FAQ Section Props
      showFaqSection={true}
      faqTitle="Frequently Asked Questions"
      faqSubtitle="Everything you need to know about our Digital Transformation Accelerator"
      faqItems={faqItems}
      
      // Testimonials Props
      showTestimonials={true}
      testimonials={testimonials}
      
      // CTA Section Props
      showCtaSection={true}
      ctaTitle="Ready to Accelerate Your Transformation?"
      ctaDescription="Don't miss this limited-time opportunity to transform your business with our exclusive accelerator program"
      ctaButtonText="Claim Your Spot"
      ctaButtonLink="/contact"
      
      // Layout Options
      layoutStyle="campaign"
      backgroundColor="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      heroStyle="featured"
      
      // Blog & Case Study Props
      showBlogSection={true}
      showCaseStudySection={true}
      blogTitle="Campaign Updates & Insights"
      blogSubtitle="Stay updated with the latest news about our Digital Transformation Accelerator campaign"
      caseStudyTitle="Success Stories"
      caseStudySubtitle="See how other businesses have transformed with our accelerator program"
    />
  );
};

export default FlexibleExample;

