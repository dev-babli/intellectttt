// Page Templates API - Centralized data management for all page templates

// Template Types
export const TEMPLATE_TYPES = {
  MAIN_SERVICE: 'main-service',
  SUB_SERVICE: 'sub-service', 
  INDUSTRY: 'industry',
  FLEXIBLE: 'flexible'
};

// Template Configuration Schema
export const TEMPLATE_SCHEMA = {
  // Common Properties
  id: 'string',
  type: 'string', // TEMPLATE_TYPES
  slug: 'string',
  title: 'string',
  metaTitle: 'string',
  metaDescription: 'string',
  metaKeywords: 'string[]',
  
  // Hero Section
  hero: {
    title: 'string',
    subtitle: 'string',
    description: 'string',
    buttonText: 'string',
    buttonLink: 'string',
    backgroundImage: 'string',
    features: 'string[]'
  },
  
  // Content Sections
  sections: {
    about: {
      show: 'boolean',
      icon: 'string',
      subtitle: 'string',
      title: 'string',
      content: 'string',
      image: 'string',
      badge: {
        image: 'string',
        number: 'string',
        text: 'string'
      }
    },
    features: {
      show: 'boolean',
      items: 'array'
    },
    workProcess: {
      show: 'boolean',
      heading: 'string',
      description: 'string',
      buttonText: 'string',
      buttonLink: 'string',
      items: 'array',
      shapeImages: 'array'
    },
    services: {
      show: 'boolean',
      items: 'array',
      limit: 'number',
      showButton: 'boolean',
      buttonText: 'string',
      buttonLink: 'string'
    },
    serviceCards: {
      show: 'boolean',
      items: 'array',
      title: 'string',
      subtitle: 'string'
    },
    testimonials: {
      show: 'boolean',
      items: 'array'
    },
    faq: {
      show: 'boolean',
      title: 'string',
      subtitle: 'string',
      items: 'array'
    },
    cta: {
      show: 'boolean',
      title: 'string',
      description: 'string',
      buttonText: 'string',
      buttonLink: 'string'
    },
    alliances: {
      show: 'boolean'
    }
  },
  
  // Blog & Case Studies
  content: {
    blog: {
      show: 'boolean',
      title: 'string',
      subtitle: 'string'
    },
    caseStudies: {
      show: 'boolean',
      title: 'string',
      subtitle: 'string'
    }
  },
  
  // Layout Options (for Flexible Template)
  layout: {
    style: 'string', // 'default', 'minimal', 'featured', 'campaign'
    backgroundColor: 'string',
    heroStyle: 'string' // 'standard', 'minimal', 'featured', 'video'
  },
  
  // Custom Sections (for Flexible Template)
  customSections: 'array',
  
  // SEO & Analytics
  seo: {
    canonicalUrl: 'string',
    ogImage: 'string',
    structuredData: 'object'
  },
  
  // Performance & Caching
  performance: {
    cacheStrategy: 'string', // 'static', 'dynamic', 'hybrid'
    preload: 'boolean',
    priority: 'number' // 1-10
  }
};

// Example Page Data
export const EXAMPLE_PAGES = {
  // Main Service Page Example
  'data-analytics': {
    id: 'data-analytics',
    type: TEMPLATE_TYPES.MAIN_SERVICE,
    slug: 'data-analytics',
    title: 'Data & Analytics Industrialization Consulting',
    metaTitle: 'Data & Analytics Services | Intellectt',
    metaDescription: 'Transform your data into actionable insights with our comprehensive data and analytics services.',
    metaKeywords: ['data analytics', 'business intelligence', 'data engineering', 'ETL'],
    
    hero: {
      title: 'Data & Analytics Industrialization Consulting',
      subtitle: 'Data-Driven Insights',
      description: 'Build. Evaluate. Generate. Transform your data into actionable insights with our comprehensive data and analytics services.',
      buttonText: 'Explore Solutions',
      buttonLink: '/contact',
      backgroundImage: '/images/bg/image-belowhero.webp',
      features: [
        'Data Engineering & ETL',
        'Business Intelligence',
        'Advanced Analytics',
        'Data Governance'
      ]
    },
    
    sections: {
      about: {
        show: true,
        icon: '/images/icon/magic02.svg',
        subtitle: 'About Us',
        title: 'Data & Analytics Solutions',
        content: 'Transform your data into actionable insights with our comprehensive data and analytics services.',
        image: '/images/bg/image-belowhero.webp',
        badge: {
          image: '/images/bg/abt-cnt_bg.png',
          number: '200+',
          text: 'Data projects delivered successfully'
        }
      },
      features: {
        show: false,
        items: []
      },
      workProcess: {
        show: false,
        heading: '',
        description: '',
        buttonText: '',
        buttonLink: '',
        items: [],
        shapeImages: []
      },
      services: {
        show: false,
        items: [],
        limit: 6,
        showButton: true,
        buttonText: 'Schedule a Strategy Call',
        buttonLink: '/contact'
      },
      serviceCards: {
        show: true,
        items: [
          {
            title: 'Azure Data Lake, Snowflake & Power BI',
            description: 'Unify, store, and visualize data at scale with enterprise-grade data platforms.',
            buttonText: 'Explore',
            image: '/images/1d.webp',
            url: '/service/data-and-analytics/tools',
            features: ['Data warehousing', 'Real-time analytics', 'Advanced visualization']
          },
          {
            title: 'Business Intelligence & Dashboards',
            description: 'Turn raw data into powerful insights with interactive dashboards.',
            buttonText: 'Explore',
            image: '/images/2d.webp',
            url: '/service/data-and-analytics/bi',
            features: ['Interactive dashboards', 'Real-time reporting', 'KPI tracking']
          }
        ],
        title: 'Data & Analytics Solutions',
        subtitle: 'Comprehensive data and analytics services designed to transform your business intelligence'
      },
      testimonials: {
        show: false,
        items: []
      },
      faq: {
        show: false,
        title: '',
        subtitle: '',
        items: []
      },
      cta: {
        show: true,
        title: 'Ready to Transform Your Business?',
        description: 'Let\'s discuss how our solutions can drive your digital transformation',
        buttonText: 'Start Your Journey',
        buttonLink: '/contact'
      },
      alliances: {
        show: true
      }
    },
    
    content: {
      blog: {
        show: true,
        title: 'Latest Insights & Updates',
        subtitle: 'Stay informed with our latest industry insights, technical articles, and thought leadership content'
      },
      caseStudies: {
        show: true,
        title: 'Success Stories',
        subtitle: 'Discover how we\'ve helped businesses achieve their digital transformation goals'
      }
    },
    
    seo: {
      canonicalUrl: 'https://intellectt.com/service/data-analytics',
      ogImage: '/images/og/data-analytics.jpg',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Data & Analytics Services',
        description: 'Comprehensive data and analytics services'
      }
    },
    
    performance: {
      cacheStrategy: 'static',
      preload: true,
      priority: 8
    }
  },
  
  // Sub Service Page Example
  'business-intelligence-dashboards': {
    id: 'business-intelligence-dashboards',
    type: TEMPLATE_TYPES.SUB_SERVICE,
    slug: 'business-intelligence-dashboards',
    title: 'Business Intelligence & Dashboards',
    metaTitle: 'BI & Dashboard Solutions | Intellectt',
    metaDescription: 'Empower decision-making with intelligent dashboards & BI solutions.',
    metaKeywords: ['business intelligence', 'dashboards', 'power bi', 'tableau'],
    
    hero: {
      title: 'Business Intelligence & Dashboards',
      subtitle: 'Empower Decision-Making with Intelligent Dashboards & BI Solutions',
      description: '',
      buttonText: 'TALK TO OUR EXPERTS',
      buttonLink: '/contact',
      backgroundImage: '/Business-Intelligence.webp',
      features: []
    },
    
    sections: {
      about: {
        show: false
      },
      features: {
        show: true,
        items: [
          {
            icon: 'QueryStatsIcon',
            title: 'Unified Data Access',
            description: 'Integrate and centralize data from CRMs, ERPs, cloud apps, and databases.'
          },
          {
            icon: 'DashboardCustomizeIcon',
            title: 'Interactive Dashboards',
            description: 'Design responsive, user-friendly dashboards with drill-down capabilities.'
          }
        ]
      },
      workProcess: {
        show: false
      },
      services: {
        show: false
      },
      serviceCards: {
        show: false
      },
      testimonials: {
        show: false
      },
      faq: {
        show: false
      },
      cta: {
        show: true,
        title: 'Ready to Get Started?',
        description: 'Let\'s discuss your specific requirements and how we can help',
        buttonText: 'Schedule a Consultation',
        buttonLink: '/contact'
      },
      alliances: {
        show: false
      }
    },
    
    content: {
      blog: {
        show: true,
        title: 'Latest Insights & Updates',
        subtitle: 'Stay informed with our latest industry insights, technical articles, and thought leadership content'
      },
      caseStudies: {
        show: true,
        title: 'Success Stories',
        subtitle: 'Discover how we\'ve helped businesses achieve their digital transformation goals'
      }
    }
  },
  
  // Industry Page Example
  'banking-financial': {
    id: 'banking-financial',
    type: TEMPLATE_TYPES.INDUSTRY,
    slug: 'banking-financial',
    title: 'Banking & Financial Services',
    metaTitle: 'Banking & Financial IT Solutions | Intellectt',
    metaDescription: 'Build secure, compliant, and scalable digital financial experiences.',
    metaKeywords: ['banking', 'financial services', 'fintech', 'compliance'],
    
    hero: {
      title: 'Banking & Financial Services',
      subtitle: 'Build. Evaluate. Generate.',
      description: 'Empowering financial institutions with secure, compliant, and innovative technology solutions.',
      buttonText: 'TALK TO OUR EXPERTS',
      buttonLink: '/contact',
      backgroundImage: '/Banking-and-Finance.webp',
      features: [
        'Core Banking Modernization',
        'Digital Wallet & UPI Integration',
        'AI-Powered Fraud Detection',
        'RegTech & Compliance'
      ]
    },
    
    sections: {
      about: {
        show: false
      },
      features: {
        show: false
      },
      workProcess: {
        show: true,
        heading: 'Securing Financial Innovation with Technology',
        description: 'Our proven 5-step process helps banks and fintechs deliver secure, compliant, and scalable digital financial experiences.',
        buttonText: 'Connect with Fintech Experts',
        buttonLink: '/contact',
        items: [
          {
            id: '01',
            title: 'Discovery & Regulatory Alignment',
            subTitle: 'We begin with deep discovery of your digital infrastructure, risk posture, and regulatory landscape.',
            icon: '/images/process/image01.png'
          }
        ],
        shapeImages: ['/images/shape/process-shape01.png']
      },
      services: {
        show: true,
        items: 'BankingServices', // Reference to cardService.js
        limit: 6,
        showButton: true,
        buttonText: 'Schedule a Strategy Call',
        buttonLink: '/contact'
      },
      serviceCards: {
        show: false
      },
      testimonials: {
        show: false
      },
      faq: {
        show: false
      },
      cta: {
        show: true,
        title: 'Transform Your Financial Operations',
        description: 'Let\'s discuss how our industry expertise can drive your digital transformation',
        buttonText: 'Get Industry Insights',
        buttonLink: '/contact'
      },
      alliances: {
        show: true
      }
    },
    
    content: {
      blog: {
        show: true,
        title: 'Industry Insights & Updates',
        subtitle: 'Stay informed with our latest industry-specific insights, trends, and thought leadership content'
      },
      caseStudies: {
        show: true,
        title: 'Industry Success Stories',
        subtitle: 'Discover how we\'ve helped businesses in your industry achieve their digital transformation goals'
      }
    }
  }
};

// API Functions
export const PageTemplateAPI = {
  // Get page data by slug
  getPageBySlug: async (slug) => {
    // In a real implementation, this would fetch from CMS or database
    return EXAMPLE_PAGES[slug] || null;
  },
  
  // Get all pages of a specific type
  getPagesByType: async (type) => {
    return Object.values(EXAMPLE_PAGES).filter(page => page.type === type);
  },
  
  // Get page template component based on type
  getTemplateComponent: (type) => {
    switch (type) {
      case TEMPLATE_TYPES.MAIN_SERVICE:
        return import('../templates/MainServiceTemplate');
      case TEMPLATE_TYPES.SUB_SERVICE:
        return import('../templates/SubServiceTemplate');
      case TEMPLATE_TYPES.INDUSTRY:
        return import('../templates/IndustryTemplate');
      case TEMPLATE_TYPES.FLEXIBLE:
        return import('../templates/FlexibleTemplate');
      default:
        throw new Error(`Unknown template type: ${type}`);
    }
  },
  
  // Validate page data against schema
  validatePageData: (pageData) => {
    // Implementation for schema validation
    const errors = [];
    
    if (!pageData.id) errors.push('Missing required field: id');
    if (!pageData.type) errors.push('Missing required field: type');
    if (!pageData.slug) errors.push('Missing required field: slug');
    if (!pageData.title) errors.push('Missing required field: title');
    
    return {
      isValid: errors.length === 0,
      errors
    };
  },
  
  // Generate SEO metadata
  generateSEO: (pageData) => {
    return {
      title: pageData.metaTitle || pageData.title,
      description: pageData.metaDescription,
      keywords: pageData.metaKeywords?.join(', '),
      canonical: pageData.seo?.canonicalUrl,
      ogImage: pageData.seo?.ogImage,
      structuredData: pageData.seo?.structuredData
    };
  }
};

// Hook for using page templates
export const usePageTemplate = (slug) => {
  const [pageData, setPageData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  
  React.useEffect(() => {
    const fetchPageData = async () => {
      try {
        setLoading(true);
        const data = await PageTemplateAPI.getPageBySlug(slug);
        if (data) {
          setPageData(data);
        } else {
          setError('Page not found');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchPageData();
  }, [slug]);
  
  return { pageData, loading, error };
};

export default PageTemplateAPI;

