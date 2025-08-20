import React from "react";
import MasterSubServiceTemplate from "../../components/templates/MasterSubServiceTemplate";
import { 
  Sensors,
  Build,
  Science,
  TrendingUp,
  Business,
  CheckCircle,
  Speed,
  AutoAwesome,
  Cloud,
  Memory,
  Wifi
} from '@mui/icons-material';

const EmbeddedIoT = () => {
  return (
    <MasterSubServiceTemplate
      // Hero Section
      heroTitle="Embedded Systems & IoT Solutions"
      heroSubtitle="Intelligence at the Edge"
      heroDescription="Enabling intelligence at the edge and beyond. We build reliable and connected embedded platforms that power everything from smart devices to industrial systems."
      heroButtonText="Start IoT Project"
      heroButtonLink="/contact"
      heroBackgroundImage="/Manufacturing-and-Automotive.webp"
      heroTextColor="white"
      heroFeatures={[
        "Embedded Firmware & OTA Updates",
        "PCB Layout & SI/PI Design",
        "Edge AI Integration",
        "IoT Gateways & Cloud Connectivity"
      ]}

      // Problem/Solution Section
      problemSolutionTitle="The Embedded IoT Challenge & Our Solution"
      problemSolutionSubtitle="We understand the complexities of embedded systems and IoT integration and have the expertise to build reliable, connected solutions"
      problems={[
        {
          title: "Complex Embedded Development",
          description: "Complex embedded system development that requires expertise in hardware, firmware, and software integration."
        },
        {
          title: "IoT Connectivity Challenges",
          description: "IoT connectivity challenges including wireless protocols, security, and cloud integration requirements."
        },
        {
          title: "Edge Computing Requirements",
          description: "Edge computing requirements for real-time processing and AI model integration at the device level."
        }
      ]}
      solutions={[
        {
          title: "End-to-End Embedded Solutions",
          description: "Comprehensive embedded system development from hardware design to firmware and software integration."
        },
        {
          title: "IoT Platform Integration",
          description: "Seamless IoT platform integration with cloud connectivity and device management capabilities."
        },
        {
          title: "Edge AI Implementation",
          description: "Advanced edge AI implementation for intelligent device operation and real-time decision making."
        }
      ]}
      problemSolutionVariant="split"

      // Service Offerings
      serviceOfferingsTitle="Our Embedded Systems & IoT Services"
      serviceOfferingsSubtitle="Comprehensive embedded and IoT services designed to build reliable, connected platforms"
      services={[
        {
          icon: <Memory />,
          title: "Embedded Firmware & OTA Updates",
          description: "Advanced embedded firmware development with over-the-air update capabilities for remote device management.",
          features: [
            "Real-time embedded firmware",
            "Over-the-air (OTA) updates",
            "Device management systems",
            "Firmware optimization"
          ],
          badge: "Most Popular",
          link: "/contact",
          ctaText: "Embedded Firmware"
        },
        {
          icon: <Wifi />,
          title: "Wireless Protocol Stacks",
          description: "Implementation of wireless protocol stacks including BLE, Zigbee, RF, and Wi-Fi for IoT connectivity.",
          features: [
            "BLE (Bluetooth Low Energy)",
            "Zigbee and mesh networks",
            "RF communication protocols",
            "Wi-Fi and cellular connectivity"
          ],
          badge: "Connectivity",
          link: "/contact",
          ctaText: "Wireless Protocols"
        },
        {
          icon: <Build />,
          title: "PCB Layout & SI/PI Design",
          description: "Advanced PCB layout design with signal integrity and power integrity optimization for reliable operation.",
          features: [
            "High-speed PCB design",
            "Signal integrity analysis",
            "Power integrity optimization",
            "EMI/EMC compliance"
          ],
          link: "/contact",
          ctaText: "PCB Design"
        },
        {
          icon: <Science />,
          title: "Safety-Critical Design",
          description: "Safety-critical embedded system design for applications requiring high reliability and fault tolerance.",
          features: [
            "Fault-tolerant design",
            "Safety certification support",
            "Redundancy implementation",
            "Reliability engineering"
          ],
          link: "/contact",
          ctaText: "Safety Design"
        },
        {
          icon: <AutoAwesome />,
          title: "Edge AI Integration",
          description: "Integration of AI models at the edge for intelligent device operation and real-time decision making.",
          features: [
            "AI model optimization",
            "Sensor fusion algorithms",
            "Real-time inference",
            "Edge computing platforms"
          ],
          link: "/contact",
          ctaText: "Edge AI"
        },
        {
          icon: <Cloud />,
          title: "IoT Gateways & Cloud Connectivity",
          description: "IoT gateway development and cloud connectivity solutions for device management and data analytics.",
          features: [
            "IoT gateway development",
            "Cloud platform integration",
            "Device security architecture",
            "Data ingestion pipelines"
          ],
          link: "/contact",
          ctaText: "IoT Gateways"
        }
      ]}

      // Benefits Section
      benefitsTitle="Why Choose Our Embedded IoT Services"
      benefitsSubtitle="Discover the advantages of partnering with our expert embedded systems team"
      benefits={[
        {
          icon: <CheckCircle />,
          title: "Full-Stack Expertise",
          description: "Expert teams with deep knowledge across hardware, firmware, and software development."
        },
        {
          icon: <Speed />,
          title: "Rapid Prototyping",
          description: "Fast prototyping capabilities that accelerate development and reduce time-to-market."
        },
        {
          icon: <AutoAwesome />,
          title: "Advanced Technologies",
          description: "Cutting-edge technologies including edge AI, 5G, and advanced wireless protocols."
        },
        {
          icon: <Cloud />,
          title: "Scalable Solutions",
          description: "Scalable embedded solutions that grow with your business and technology requirements."
        }
      ]}

      // Stats Section
      statsTitle="Embedded IoT Excellence"
      statsSubtitle="Numbers that demonstrate our embedded systems capabilities"
      stats={[
        {
          number: "1000+",
          label: "Devices Deployed",
          description: "Embedded devices successfully deployed"
        },
        {
          number: "99.9%",
          label: "Uptime",
          description: "Reliability and system uptime"
        },
        {
          number: "50+",
          label: "Protocols Supported",
          description: "Wireless protocols and standards"
        },
        {
          number: "24/7",
          label: "Monitoring",
          description: "Round-the-clock device monitoring"
        }
      ]}

      // Final CTA
      finalCtaTitle="Ready to Build Intelligent Connected Devices?"
      finalCtaSubtitle="Let's discuss how our embedded systems expertise can help create reliable, intelligent IoT solutions"
      finalCtaButtonText="Start Embedded Project"
      finalCtaButtonLink="/contact"
    />
  );
};

export default EmbeddedIoT;
