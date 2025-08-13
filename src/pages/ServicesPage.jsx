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
    icon: <Brain sx={{ fontSize: 40, color: '#667eea' }} />,
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
    icon: <Cloud sx={{ fontSize: 40, color: '#4facfe' }} />,
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
    icon: <Database sx={{ fontSize: 40, color: '#a8edea' }} />,
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
    icon: <TrendingUp sx={{ fontSize: 40, color: '#ff9a9e' }} />,
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
    category: "Engineering & Manufacturing IT",
    icon: <Factory sx={{ fontSize: 40, color: '#667eea' }} />,
    color: "#667eea",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    services: [
      {
        name: "Engineering & Manufacturing IT",
        path: "/service/engineering-and-manufacturing-it",
        description: "IT solutions for engineering and manufacturing",
        features: ["PLM & CAD Automation", "MES Integration & IoT", "Digital Twins", "Industry 4.0"]
      },
      {
        name: "PLM & CAD Automation",
        path: "/service/engineering-and-manufacturing-it/plm",
        description: "Product lifecycle management and CAD automation"
      },
      {
        name: "MES Integration & IoT",
        path: "/service/engineering-and-manufacturing-it/mes",
        description: "Manufacturing execution system and IoT integration"
      },
      {
        name: "Digital Twins",
        path: "/service/engineering-and-manufacturing-it/twins",
        description: "Digital twin technology and implementation"
      },
      {
        name: "Industry 4.0 Solutions",
        path: "/service/engineering-and-manufacturing-it/industry4",
        description: "Industry 4.0 and smart manufacturing solutions"
      }
    ]
  },
  {
    category: "Healthcare & Life Sciences IT",
    icon: <Heart sx={{ fontSize: 40, color: '#ff6b6b' }} />,
    color: "#ff6b6b",
    gradient: "linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)",
    services: [
      {
        name: "Healthcare & Life Sciences IT",
        path: "/service/healthcare-and-life-sciences-it",
        description: "IT solutions for healthcare and life sciences",
        features: ["HL7 & FHIR Integration", "Clinical Data Platforms", "AI Imaging & Diagnostics", "Compliance & Regulatory"]
      },
      {
        name: "HL7 & FHIR Integration",
        path: "/service/healthcare-and-life-sciences-it/hl7",
        description: "Healthcare data standards and integration"
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
    icon: <Shield sx={{ fontSize: 40, color: '#4facfe' }} />,
    color: "#4facfe",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    services: [
      {
        name: "Managed IT Services",
        path: "/service/managed-it-services",
        description: "Comprehensive managed IT services",
        features: ["Infrastructure & Network Monitoring", "Application Support", "ITSM Service Desk", "Managed Resource Services"]
      },
      {
        name: "Infrastructure & Network Monitoring",
        path: "/service/managed-it-services/infra",
        description: "IT infrastructure and network monitoring services"
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
        name: "Managed Resource Services",
        path: "/service/managed-it-services/tms",
        description: "Managed talent and resource services"
      }
    ]
  },
  {
    category: "Talent Solutions",
    icon: <Users sx={{ fontSize: 40, color: '#a8edea' }} />,
    color: "#a8edea",
    gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
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
        description: "IT talent augmentation and staffing services"
      },
      {
        name: "Healthcare Staffing",
        path: "/service/talent-solutions/healthcare",
        description: "Healthcare and life sciences staffing"
      },
      {
        name: "Direct Hire & Contract-to-Hire",
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
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    // Animate service categories
    gsap.fromTo('.service-category', 
      { y: 100, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.services-grid',
          start: 'top 80%'
        }
      }
    );

    // Animate service cards
    gsap.fromTo('.service-card', 
      { scale: 0.8, opacity: 0 },
      { 
        scale: 1, 
        opacity: 1, 
        duration: 0.6, 
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.services-grid',
          start: 'top 70%'
        }
      }
    );
  }, []);

  const handleServiceClick = (path) => {
    navigate(path);
  };

  return (
    <Layout>
      {/* Hero Section from Homepage */}
      <HeroSection />

      {/* Services Grid */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#f8fafc' }}>
        <Container maxWidth="xl">
          <Grid container spacing={4} className="services-grid">
            {servicesData.map((category, categoryIndex) => (
              <Grid item xs={12} key={categoryIndex}>
                <Fade in timeout={1000} style={{ transitionDelay: `${categoryIndex * 200}ms` }}>
                  <Box className="service-category">
                    {/* Category Header */}
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 4,
                        p: 3,
                        background: category.gradient,
                        borderRadius: 3,
                        color: 'white',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
                      }}
                    >
                      <Box sx={{ mr: 3 }}>
                        {category.icon}
                      </Box>
                      <Box>
                        <Typography
                          variant="h3"
                          sx={{
                            fontWeight: 800,
                            fontSize: { xs: '2.7rem', md: '3.75rem' },
                            mb: 1
                          }}
                        >
                          {category.category}
                        </Typography>
                        <Typography
                          variant="h6"
                          sx={{
                            opacity: 0.9,
                            fontWeight: 400,
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                          }}
                        >
                          {category.services.length} specialized services
                        </Typography>
                      </Box>
                    </Box>

                    {/* Services Grid */}
                    <Grid container spacing={3}>
                      {category.services.map((service, serviceIndex) => (
                        <Grid item xs={12} sm={6} md={4} key={serviceIndex}>
                          <Slide direction="up" in timeout={800} style={{ transitionDelay: `${serviceIndex * 100}ms` }}>
                            <Card
                              className="service-card"
                              sx={{
                                height: '100%',
                                cursor: 'pointer',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                transform: hoveredCard === `${categoryIndex}-${serviceIndex}` ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                                boxShadow: hoveredCard === `${categoryIndex}-${serviceIndex}` 
                                  ? '0 20px 40px rgba(0,0,0,0.15)' 
                                  : '0 4px 20px rgba(0,0,0,0.08)',
                                '&:hover': {
                                  boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                                }
                              }}
                              onMouseEnter={() => setHoveredCard(`${categoryIndex}-${serviceIndex}`)}
                              onMouseLeave={() => setHoveredCard(null)}
                              onClick={() => handleServiceClick(service.path)}
                            >
                              <CardMedia
                                component="img"
                                height="200"
                                image={`/herosectionimages/${categoryIndex === 0 ? 'ai-technology.jpg' : 
                                       categoryIndex === 1 ? 'cloud-computing-illustration.jpg' :
                                       categoryIndex === 2 ? 'saas-concept-collage.jpg' :
                                       categoryIndex === 3 ? 'data-analytics-concept.jpg' :
                                       categoryIndex === 4 ? 'engineers-brainstorming-ways-use-ai.jpg' :
                                       categoryIndex === 5 ? 'ai-human-collaboration.jpg' :
                                       categoryIndex === 6 ? 'cloud-computing-illustration.jpg' :
                                       'woman-scrolling-laptop.jpg'}`}
                                alt={service.name}
                                sx={{
                                  filter: 'brightness(0.8) contrast(1.1)',
                                  transition: 'all 0.3s ease'
                                }}
                              />
                              <CardContent sx={{ p: 3 }}>
                                <Typography
                                  variant="h5"
                                  sx={{
                                    fontWeight: 700,
                                    mb: 2,
                                    color: category.color,
                                    fontSize: { xs: '1.2rem', md: '1.4rem' }
                                  }}
                                >
                                  {service.name}
                                </Typography>
                                <Typography
                                  variant="body1"
                                  sx={{
                                    color: 'text.secondary',
                                    mb: 3,
                                    lineHeight: 1.6,
                                    fontSize: { xs: '0.9rem', md: '1rem' }
                                  }}
                                >
                                  {service.description}
                                </Typography>
                                
                                {/* Features list for main services */}
                                {service.features && (
                                  <Box sx={{ mb: 3 }}>
                                    <Typography
                                      variant="body2"
                                      sx={{
                                        fontWeight: 600,
                                        mb: 1,
                                        color: 'text.primary'
                                      }}
                                    >
                                      Key offerings:
                                    </Typography>
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                      {service.features.map((feature, featureIndex) => (
                                        <Chip
                                          key={featureIndex}
                                          label={feature}
                                          size="small"
                                          sx={{
                                            backgroundColor: `${category.color}15`,
                                            color: category.color,
                                            fontWeight: 500,
                                            fontSize: '0.75rem'
                                          }}
                                        />
                                      ))}
                                    </Box>
                                  </Box>
                                )}

                                <Button
                                  variant="contained"
                                  endIcon={<ArrowForward />}
                                  sx={{
                                    background: category.gradient,
                                    color: 'white',
                                    fontWeight: 600,
                                    textTransform: 'none',
                                    borderRadius: 2,
                                    px: 3,
                                    py: 1,
                                    '&:hover': {
                                      background: category.gradient,
                                      transform: 'translateX(4px)',
                                      boxShadow: '0 8px 25px rgba(0,0,0,0.2)'
                                    },
                                    transition: 'all 0.3s ease'
                                  }}
                                >
                                  Learn More
                                </Button>
                              </CardContent>
                            </Card>
                          </Slide>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          py: { xs: 6, md: 10 },
          textAlign: 'center',
          color: 'white'
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: '2rem', md: '3rem' }
            }}
          >
            Ready to Transform Your Business?
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              opacity: 0.9,
              maxWidth: '600px',
              mx: 'auto'
            }}
          >
            Let's discuss how our comprehensive services can accelerate your digital transformation journey
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/contact')}
              sx={{
                backgroundColor: 'white',
                color: '#667eea',
                fontWeight: 600,
                px: 4,
                py: 2,
                fontSize: '1.1rem',
                textTransform: 'none',
                borderRadius: 3,
                '&:hover': {
                  backgroundColor: '#f8f9fa',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                },
                transition: 'all 0.3s ease'
              }}
            >
              Get Started Today
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => navigate('/contact')}
              sx={{
                borderColor: 'white',
                color: 'white',
                fontWeight: 600,
                px: 4,
                py: 2,
                fontSize: '1.1rem',
                textTransform: 'none',
                borderRadius: 3,
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  transform: 'translateY(-2px)'
                },
                transition: 'all 0.3s ease'
              }}
            >
              Schedule a Consultation
            </Button>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};

export default ServicesPage; 