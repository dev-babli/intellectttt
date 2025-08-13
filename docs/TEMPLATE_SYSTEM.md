# 🎨 Page Template System Documentation

## 📋 Overview

This document outlines the comprehensive page template system designed to standardize different types of content while maintaining visual variety and engagement. The system consists of **4 distinct templates** that are **visually different** but maintain the **same core functionality**.

## 🎯 Template Types

### 1. **Main Service Pages Template** (`MainServiceTemplate`)
- **Purpose**: Top-level services with authoritative, conversion-optimized design
- **Visual Style**: Bold gradients, prominent CTAs, comprehensive content sections
- **Use Cases**: Primary service offerings, flagship solutions
- **Key Features**: Hero with gradient overlay, floating about section, prominent service cards, work process timeline

### 2. **Sub-Service Pages Template** (`SubServiceTemplate`)
- **Purpose**: Services under main services with technical focus and internal linking
- **Visual Style**: Compact design, technical emphasis, related services
- **Use Cases**: Specific solutions, technical implementations, feature details
- **Key Features**: Technical hero, features grid, data section, technology logos, related services

### 3. **Industries Pages Template** (`IndustryTemplate`)
- **Purpose**: Industry-specific pages emphasizing use cases and proof points
- **Visual Style**: Industry-focused colors, process workflows, testimonials
- **Use Cases**: Banking, Healthcare, Manufacturing, etc.
- **Key Features**: Industry hero, work process, industry solutions, testimonials, industry-specific CTAs

### 4. **Flexible Template** (`FlexibleTemplate`)
- **Purpose**: Modular design for special promotions, campaigns, or feature highlights
- **Visual Style**: Highly customizable with multiple layout options
- **Use Cases**: Campaigns, special features, custom layouts
- **Key Features**: Multiple hero styles, customizable sections, FAQ support, custom sections

## 🏗️ Architecture

### Component Structure
```
src/
├── components/
│   ├── templates/
│   │   ├── MainServiceTemplate.jsx
│   │   ├── SubServiceTemplate.jsx
│   │   ├── IndustryTemplate.jsx
│   │   ├── FlexibleTemplate.jsx
│   │   └── TemplateExample.jsx
│   └── common/
│       ├── ModernHeroSection.jsx
│       ├── ModernServiceCard.jsx
│       └── ServicePageTemplate.jsx
├── api/
│   ├── pageTemplates.js
│   └── cardService.js
└── docs/
    └── TEMPLATE_SYSTEM.md
```

### Data Flow
```
API/CMS → pageTemplates.js → Template Component → Rendered Page
```

## 📊 API Schema

### Page Data Structure
```javascript
{
  id: 'string',
  type: 'main-service' | 'sub-service' | 'industry' | 'flexible',
  slug: 'string',
  title: 'string',
  metaTitle: 'string',
  metaDescription: 'string',
  metaKeywords: ['string'],
  
  hero: {
    title: 'string',
    subtitle: 'string',
    description: 'string',
    buttonText: 'string',
    buttonLink: 'string',
    backgroundImage: 'string',
    features: ['string']
  },
  
  sections: {
    about: { /* About section config */ },
    features: { /* Features section config */ },
    workProcess: { /* Work process config */ },
    services: { /* Services component config */ },
    serviceCards: { /* Service cards config */ },
    testimonials: { /* Testimonials config */ },
    faq: { /* FAQ section config */ },
    cta: { /* CTA section config */ },
    alliances: { /* Alliances section config */ }
  },
  
  content: {
    blog: { /* Blog section config */ },
    caseStudies: { /* Case studies config */ }
  },
  
  layout: {
    style: 'default' | 'minimal' | 'featured' | 'campaign',
    backgroundColor: 'string',
    heroStyle: 'standard' | 'minimal' | 'featured' | 'video'
  },
  
  seo: {
    canonicalUrl: 'string',
    ogImage: 'string',
    structuredData: 'object'
  },
  
  performance: {
    cacheStrategy: 'static' | 'dynamic' | 'hybrid',
    preload: 'boolean',
    priority: 'number'
  }
}
```

## 🚀 Implementation Guide

### 1. Basic Usage

```javascript
import { usePageTemplate } from '../api/pageTemplates';
import TemplateExample from '../components/templates/TemplateExample';

// In your router
<Route path="/template/:slug" element={<TemplateExample />} />
```

### 2. Creating a New Page

```javascript
import { createNewPage, TEMPLATE_TYPES } from '../api/pageTemplates';

const newPageData = {
  id: 'new-service',
  type: TEMPLATE_TYPES.MAIN_SERVICE,
  slug: 'new-service',
  title: 'New Service',
  hero: {
    title: 'New Service Title',
    subtitle: 'Service Subtitle',
    // ... other hero properties
  },
  sections: {
    about: {
      show: true,
      title: 'About Our Service',
      // ... other about properties
    },
    // ... other sections
  }
};

const result = await createNewPage(newPageData);
```

### 3. Updating an Existing Page

```javascript
import { updatePage } from '../api/pageTemplates';

const updates = {
  hero: {
    title: 'Updated Title',
    description: 'Updated description'
  }
};

const result = await updatePage('existing-slug', updates);
```

## 🎨 Visual Design Patterns

### Color Schemes
- **Main Service**: Deep blues (#1e293b, #334155) with red accents (#dc2626)
- **Sub Service**: Technical grays (#475569, #64748b) with blue accents (#3b82f6)
- **Industry**: Industry-specific colors (Banking: #1e40af, Healthcare: #059669)
- **Flexible**: Customizable with multiple style options

### Layout Patterns
- **Hero Sections**: Full-width with gradient overlays and floating elements
- **Content Sections**: Rounded containers with consistent spacing
- **Cards**: Modern grid layouts with hover effects
- **CTAs**: Prominent buttons with gradient backgrounds

### Responsive Design
- Mobile-first approach
- Flexible grid systems
- Adaptive typography
- Touch-friendly interactions

## 🔧 Technical Features

### Performance Optimizations
- **Code Splitting**: Templates loaded dynamically
- **Image Optimization**: Responsive images with WebP support
- **Caching Strategies**: Static, dynamic, and hybrid caching
- **Preloading**: Critical resources preloaded

### SEO Features
- **Structured Data**: Schema.org markup
- **Meta Tags**: Dynamic meta title, description, keywords
- **Canonical URLs**: Proper canonical URL handling
- **Open Graph**: Social media optimization

### Accessibility
- **ARIA Labels**: Proper accessibility markup
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader**: Screen reader friendly
- **Color Contrast**: WCAG compliant color schemes

## 📱 Mobile Responsiveness

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Mobile Optimizations
- Touch-friendly buttons (44px minimum)
- Simplified navigation
- Optimized images
- Reduced animations

## 🔄 Content Management

### CMS Integration
The template system is designed to work with headless CMS platforms:

- **Strapi**: REST API integration
- **Sanity**: GROQ queries
- **Contentful**: Content Delivery API
- **Custom APIs**: RESTful API endpoints

### Content Workflow
1. **Content Creation**: Create content in CMS
2. **Template Selection**: Choose appropriate template
3. **Data Mapping**: Map CMS data to template schema
4. **Preview & Testing**: Preview changes
5. **Publishing**: Deploy to production

## 🧪 Testing Strategy

### Unit Tests
- Template component rendering
- Props validation
- Error handling

### Integration Tests
- API data flow
- Template switching
- SEO generation

### E2E Tests
- User interactions
- Mobile responsiveness
- Performance metrics

## 📈 Analytics & Tracking

### Performance Metrics
- **Core Web Vitals**: LCP, FID, CLS
- **Page Load Times**: Template-specific metrics
- **User Engagement**: Time on page, scroll depth

### Conversion Tracking
- **CTA Clicks**: Button click tracking
- **Form Submissions**: Contact form analytics
- **Page Conversions**: Goal completion tracking

## 🔮 Future Enhancements

### Planned Features
- **A/B Testing**: Template variant testing
- **Personalization**: Dynamic content based on user behavior
- **AI Integration**: Automated content optimization
- **Advanced Analytics**: Detailed user journey tracking

### Scalability Improvements
- **Micro-frontends**: Template-based micro-frontend architecture
- **Edge Computing**: CDN-based template delivery
- **Progressive Enhancement**: Enhanced features for modern browsers

## 📚 Examples

### Main Service Page Example
```javascript
// Data & Analytics page
{
  type: 'main-service',
  hero: {
    title: 'Data & Analytics Industrialization Consulting',
    subtitle: 'Data-Driven Insights',
    features: ['Data Engineering & ETL', 'Business Intelligence', 'Advanced Analytics']
  },
  sections: {
    about: { show: true, /* ... */ },
    serviceCards: { show: true, /* ... */ },
    cta: { show: true, /* ... */ }
  }
}
```

### Sub Service Page Example
```javascript
// Business Intelligence page
{
  type: 'sub-service',
  hero: {
    title: 'Business Intelligence & Dashboards',
    subtitle: 'Empower Decision-Making with Intelligent Dashboards'
  },
  sections: {
    features: { show: true, /* ... */ },
    dataSection: { show: true, /* ... */ },
    technologyLogos: { show: true }
  }
}
```

### Industry Page Example
```javascript
// Banking & Financial page
{
  type: 'industry',
  hero: {
    title: 'Banking & Financial Services',
    features: ['Core Banking Modernization', 'Digital Wallet & UPI Integration']
  },
  sections: {
    workProcess: { show: true, /* ... */ },
    services: { show: true, /* ... */ },
    testimonials: { show: true, /* ... */ }
  }
}
```

## 🤝 Contributing

### Development Guidelines
1. **Template Consistency**: Maintain consistent prop interfaces
2. **Performance**: Optimize for Core Web Vitals
3. **Accessibility**: Follow WCAG guidelines
4. **Documentation**: Update documentation for changes

### Code Standards
- **ESLint**: Follow project ESLint configuration
- **Prettier**: Use Prettier for code formatting
- **TypeScript**: Consider TypeScript for type safety
- **Testing**: Write tests for new features

## 📞 Support

For questions or issues with the template system:
- **Documentation**: Check this document first
- **Issues**: Create GitHub issues for bugs
- **Discussions**: Use GitHub discussions for questions
- **Email**: Contact the development team

---

**Last Updated**: December 2024
**Version**: 1.0.0
**Maintainer**: Development Team

