import React, { useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/sections/HeroSection';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Button, 
  Chip,
  useTheme,
  useMediaQuery,
  Fade,
  Slide,
  Zoom
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { 
  Cloud, 
  Brain, 
  Database, 
  Factory, 
  Heart, 
  Users, 
  Shield, 
  TrendingUp,
  ArrowForward,
  Star,
  CheckCircle
} from '@mui/icons-material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    category: "AI & Generative AI",
    icon: <Brain sx={{ fontSize: { xs: 32, md: 40 }, color: '#667eea' }} />,
    color: "#667eea",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    services: [
      {
        name: "AI & Gen AI Practice",
        path: "/service/ai-and-gen-ai",
        description: "Comprehensive AI and generative AI solutions",
        features: ["LLM Integration", "Agentic AI", "NLP & Computer Vision", "ML Engineering & MLOps", "AI Automation", "Responsible AI"]
      },
      {
        name: "LLM Integration",
        path: "/service/ai-and-gen-ai/llm",
        description: "Large Language Model integration and optimization"
      },
      {
        name: "Agentic AI",
        path: "/service/ai-and-gen-ai/agents",
        description: "Intelligent autonomous agents for business automation"
      },
      {
        name: "NLP & Computer Vision",
        path: "/service/ai-and-gen-ai/nlp",
        description: "Natural language processing and computer vision solutions"
      },
      {
        name: "ML Engineering & MLOps",
        path: "/service/ai-and-gen-ai/mlops",
        description: "Machine learning engineering and operations"
      },
      {
        name: "AI Automation",
        path: "/service/ai-and-gen-ai/automation",
        description: "Intelligent process automation with AI"
      },
      {
        name: "Responsible AI",
        path: "/service/ai-and-gen-ai/responsible",
        description: "Ethical AI development and governance"
      }
    ]
  },
  {
    category: "Cloud & Application Services",
    icon: <Cloud sx={{ fontSize: { xs: 32, md: 40 }, color: '#4facfe' }} />,
    color: "#4facfe",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    services: [
      {
        name: "Cloud & App Services",
        path: "/service/cloud-and-application-services",
        description: "Modern cloud and application development solutions",
        features: ["Cloud Engineering", "DevOps & DevSecOps", "App Modernization", "API Integration"]
      },
      {
        name: "Cloud Engineering",
        path: "/service/cloud-and-application-services/engineering",
        description: "Scalable cloud infrastructure and engineering"
      },
      {
        name: "DevOps & DevSecOps",
        path: "/service/cloud-and-application-services/devops",
        description: "Development operations with security integration"
      },
      {
        name: "App Modernization",
        path: "/service/cloud-and-application-services/modernization",
        description: "Legacy application modernization and migration"
      },
      {
        name: "API Integration",
        path: "/service/cloud-and-application-services/api",
        description: "API development and integration services"
      }
    ]
  },
  {
    category: "SAP Services",
    icon: <Database sx={{ fontSize: { xs: 32, md: 40 }, color: '#a8edea' }} />,
    color: "#a8edea",
    gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    services: [
      {
        name: "SAP Services",
        path: "/service/sap-services",
        description: "Comprehensive SAP solutions and services",
        features: ["S4HANA Migration", "BTP Development", "SAP Managed Support"]
      },
      {
        name: "S4HANA Migration",
        path: "/service/sap-services/s4hana",
        description: "SAP S4HANA migration and implementation"
      },
      {
        name: "BTP Development",
        path: "/service/sap-services/btp",
        description: "SAP Business Technology Platform development"
      },
      {
        name: "SAP Managed Support",
        path: "/service/sap-services/ams",
        description: "SAP application management and support"
      }
    ]
  },
  {
    category: "Data & Analytics",
    icon: <TrendingUp sx={{ fontSize: { xs: 32, md: 40 }, color: '#ff9a9e' }} />,
    color: "#ff9a9e",
    gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
    services: [
      {
        name: "Data & Analytics",
        path: "/service/data-and-analytics",
        description: "Advanced data analytics and business intelligence",
        features: ["Data Engineering & ETL", "BI Dashboards", "Data Governance", "Data Tools Integration"]
      },
      {
        name: "Data Engineering & ETL",
        path: "/service/data-and-analytics/etl",
        description: "Data engineering and ETL pipeline development"
      },
      {
        name: "Business Intelligence",
        path: "/service/data-and-analytics/bi",
        description: "BI dashboards and reporting solutions"
      },
      {
        name: "Data Governance & Security",
        path: "/service/data-and-analytics/governance",
        description: "Data governance, security, and compliance"
      },
      {
        name: "Data Tools Integration",
        path: "/service/data-and-analytics/tools",
        description: "Data tools integration and optimization"
      }
    ]
  },
  {
    category: "Engineering Services",
    icon: <Factory sx={{ fontSize: { xs: 32, md: 40 }, color: '#667eea' }} />,
    color: "#667eea",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    services: [
      {
        name: "Engineering Services",
        path: "/service/engineering-services",
        description: "Comprehensive engineering services for medical device development and manufacturing",
        features: ["R&D & Product Development", "Manufacturing Setup", "Quality Management", "Regulatory Affairs"]
      },
      {
        name: "R&D & Product Development",
        path: "/service/engineering-services",
        description: "Research and development for medical devices"
      },
      {
        name: "Manufacturing Line Setup",
        path: "/service/engineering-services",
        description: "Advanced manufacturing line setup and optimization"
      },
      {
        name: "Quality Management Systems",
        path: "/service/engineering-services",
        description: "Quality management and regulatory compliance"
      },
      {
        name: "Regulatory Affairs",
        path: "/service/engineering-services",
        description: "FDA submissions and regulatory compliance"
      }
    ]
  },
  {
    category: "Healthcare & Life Sciences IT",
    icon: <Heart sx={{ fontSize: { xs: 32, md: 40 }, color: '#ff6b6b' }} />,
    color: "#ff6b6b",
    gradient: "linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)",
    services: [
      {
        name: "Healthcare & Life Sciences IT",
        path: "/service/healthcare-and-life-sciences-it",
        description: "IT solutions for healthcare and life sciences",
        features: ["HL7 FHIR Integration", "Clinical Data Platforms", "AI Imaging", "Compliance & Regulatory"]
      },
      {
        name: "HL7 FHIR Integration",
        path: "/service/healthcare-and-life-sciences-it/hl7",
        description: "Healthcare data standards and FHIR integration"
      },
      {
        name: "Clinical Data Platforms",
        path: "/service/healthcare-and-life-sciences-it/data",
        description: "Clinical data management and analytics platforms"
      },
      {
        name: "AI Imaging & Diagnostics",
        path: "/service/healthcare-and-life-sciences-it/ai",
        description: "AI-powered medical imaging and diagnostics"
      },
      {
        name: "Compliance & Regulatory IT",
        path: "/service/healthcare-and-life-sciences-it/compliance",
        description: "Healthcare compliance and regulatory IT solutions"
      }
    ]
  },
  {
    category: "Managed IT Services",
    icon: <Shield sx={{ fontSize: { xs: 32, md: 40 }, color: '#4ecdc4' }} />,
    color: "#4ecdc4",
    gradient: "linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)",
    services: [
      {
        name: "Managed IT Services",
        path: "/service/managed-it-services",
        description: "Comprehensive managed IT services",
        features: ["Infrastructure & Network", "Application Support", "ITSM Service Desk", "Managed Resources"]
      },
      {
        name: "Infrastructure & Network",
        path: "/service/managed-it-services/infra",
        description: "IT infrastructure and network management"
      },
      {
        name: "Application Support",
        path: "/service/managed-it-services/support",
        description: "Application support and maintenance"
      },
      {
        name: "ITSM Service Desk",
        path: "/service/managed-it-services/itsm",
        description: "IT service management and service desk"
      },
      {
        name: "Managed Resources",
        path: "/service/managed-it-services/tms",
        description: "Managed talent and resource services"
      }
    ]
  },
  {
    category: "Talent Solutions",
    icon: <Users sx={{ fontSize: { xs: 32, md: 40 }, color: '#f093fb' }} />,
    color: "#f093fb",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    services: [
      {
        name: "Talent Solutions",
        path: "/service/talent-solutions",
        description: "Comprehensive talent and staffing solutions",
        features: ["IT Staff Augmentation", "Healthcare Staffing", "Direct Hire", "Corp-to-Corp"]
      },
      {
        name: "IT Staff Augmentation",
        path: "/service/talent-solutions/staffing",
        description: "IT staff augmentation and consulting"
      },
      {
        name: "Healthcare Staffing",
        path: "/service/talent-solutions/healthcare",
        description: "Healthcare and life sciences staffing"
      },
      {
        name: "Direct Hire & Contract",
        path: "/service/talent-solutions/direct-hire",
        description: "Direct hire and contract-to-hire solutions"
      },
      {
        name: "Corp-to-Corp & W2",
        path: "/service/talent-solutions/corp",
        description: "Corp-to-corp and W2 employment solutions"
      }
    ]
  }
];

const ServicesPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    // GSAP animations for service cards
    gsap.fromTo('.service-card', 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.services-grid',
          start: 'top 80%',
          end: 'bottom 20%',
        }
      }
    );
  }, []);

  const handleServiceClick = (path) => {
    navigate(path);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
          color: 'white',
          py: { xs: 6, sm: 8, md: 10, lg: 12 },
          px: { xs: 2, sm: 3, md: 4 },
          minHeight: { xs: '60vh', md: '50vh' },
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Box sx={{ textAlign: 'center', maxWidth: '800px', mx: 'auto' }}>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 800,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem', lg: '4rem' },
                mb: { xs: 2, md: 3 },
                lineHeight: { xs: 1.1, md: 1.2 },
                letterSpacing: '-0.02em',
              }}
            >
              Our Services
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: { xs: 3, md: 4 },
                opacity: 0.9,
                lineHeight: 1.6,
                fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
              }}
            >
              Comprehensive technology solutions designed to transform your business and drive innovation across all industries.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Services Grid */}
      <Box sx={{ 
        py: { xs: 6, sm: 8, md: 10 }, 
        px: { xs: 2, sm: 3, md: 4 },
        background: '#f8fafc'
      }}>
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              fontWeight: 700,
              color: '#0f172a',
              mb: { xs: 4, md: 6 },
              fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem', lg: '3rem' },
              lineHeight: { xs: 1.2, md: 1.1 },
              letterSpacing: '-0.01em',
            }}
          >
            Service Categories
          </Typography>

          <Grid container spacing={{ xs: 3, md: 4 }} className="services-grid">
            {servicesData.map((category, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <Card
                  className="service-card"
                  sx={{
                    height: '100%',
                    borderRadius: 3,
                    overflow: 'hidden',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                    transition: 'all 0.3s ease',
                    border: '1px solid rgba(0,0,0,0.05)',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: '0 16px 48px rgba(0,0,0,0.12)',
                      borderColor: category.color,
                    },
                  }}
                  onClick={() => handleServiceClick(category.services[0].path)}
                >
                  <Box
                    sx={{
                      background: category.gradient,
                      p: { xs: 3, md: 4 },
                      color: 'white',
                      textAlign: 'center',
                    }}
                  >
                    <Box sx={{ mb: 2 }}>
                      {category.icon}
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        fontSize: { xs: '1.125rem', md: '1.25rem' },
                        lineHeight: 1.3,
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {category.category}
                    </Typography>
                  </Box>
                  
                  <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
                    <Box sx={{ mb: 2 }}>
                      {category.services[0].features?.map((feature, idx) => (
                        <Chip
                          key={idx}
                          label={feature}
                          size="small"
                          sx={{
                            mr: 1,
                            mb: 1,
                            background: 'rgba(59, 130, 246, 0.1)',
                            color: '#1e40af',
                            fontSize: '0.75rem',
                            fontWeight: 500,
                          }}
                        />
                      ))}
                    </Box>
                    
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#64748b',
                        lineHeight: 1.6,
                        fontSize: { xs: '0.8rem', md: '0.875rem' },
                        mb: 2,
                      }}
                    >
                      {category.services[0].description}
                    </Typography>
                    
                    <Button
                      variant="outlined"
                      size="small"
                      endIcon={<ArrowForward sx={{ fontSize: 16 }} />}
                      sx={{
                        borderColor: category.color,
                        color: category.color,
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        '&:hover': {
                          background: category.color,
                          color: 'white',
                          borderColor: category.color,
                        },
                      }}
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
};

export default ServicesPage; 