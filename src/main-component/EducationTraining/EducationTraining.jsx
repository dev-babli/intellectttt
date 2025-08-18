import React from "react";
import IndustryTemplate from "../../components/templates/IndustryTemplate";
import { 
  School, 
  Speed, 
  TrendingUp, 
  AutoAwesome,
  Cloud,
  Security,
  Analytics,
  DataUsage,
  Assessment,
  Compliance,
  Education,
  DigitalTransformation,
  Automation,
  DataAnalytics,
  AI,
  MachineLearning,
  API,
  MobileFriendly,
  Web,
  Storage,
  IntegrationInstructions,
  Learning,
  VirtualClassroom
} from '@mui/icons-material';

const EducationTraining = () => {
  return (
    <IndustryTemplate
      // Hero Section
      heroTitle="Education & Training"
      heroSubtitle="Digital Learning Solutions"
      heroDescription="Enhance education delivery with digital learning platforms, AI-powered personalization, and virtual classroom solutions. Transform learning experiences with modern technology and data-driven insights."
      heroButtonText="TALK TO OUR EXPERTS"
      heroButtonLink="/contact"
      heroBackgroundImage="/cloud-computing.webp"
      heroFeatures={[
        "Digital Learning Platforms",
        "AI-Powered Personalization",
        "Virtual Classrooms",
        "Learning Analytics"
      ]}

      // Services Component Props - Industry Solutions
      showServicesComponent={true}
      services={[
        {
          title: "Learning Management Systems",
          description: "Comprehensive LMS platforms with course management, student tracking, and assessment capabilities.",
          image: "/images/lms-platform.webp",
          features: ["Course Management", "Student Tracking", "Assessment Tools", "Content Delivery"],
          link: "/services/lms-platform",
          badge: "LMS"
        },
        {
          title: "Virtual Classroom Solutions",
          description: "Interactive virtual classroom platforms with video conferencing, collaboration tools, and real-time engagement.",
          image: "/images/virtual-classroom.webp",
          features: ["Video Conferencing", "Collaboration Tools", "Real-time Engagement", "Screen Sharing"],
          link: "/services/virtual-classroom",
          badge: "Virtual"
        },
        {
          title: "AI-Powered Learning Analytics",
          description: "Intelligent analytics platforms for student performance tracking, personalized learning paths, and predictive insights.",
          image: "/images/learning-analytics.webp",
          features: ["Performance Tracking", "Personalized Learning", "Predictive Insights", "Adaptive Content"],
          link: "/services/learning-analytics",
          badge: "Analytics"
        },
        {
          title: "E-Learning Content Development",
          description: "Interactive e-learning content with multimedia, gamification, and adaptive learning technologies.",
          image: "/images/e-learning-content.webp",
          features: ["Multimedia Content", "Gamification", "Adaptive Learning", "Interactive Modules"],
          link: "/services/e-learning-content",
          badge: "Content"
        },
        {
          title: "Student Information Systems",
          description: "Comprehensive SIS platforms for enrollment management, academic records, and administrative operations.",
          image: "/images/student-information.webp",
          features: ["Enrollment Management", "Academic Records", "Administrative Operations", "Reporting"],
          link: "/services/student-information",
          badge: "SIS"
        },
        {
          title: "Training & Certification Platforms",
          description: "Professional training platforms with certification tracking, skill assessment, and compliance management.",
          image: "/images/training-certification.webp",
          features: ["Certification Tracking", "Skill Assessment", "Compliance Management", "Progress Monitoring"],
          link: "/services/training-certification",
          badge: "Training"
        }
      ]}
      servicesLimit={6}
      servicesShowButton={true}
      servicesButtonText="Schedule a Strategy Call"
      servicesButtonLink="/contact"
    />
  );
};

export default EducationTraining;
