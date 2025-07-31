# Mobile Implementation Guide

## Overview

This document explains the mobile implementation for the Intellectt website, which automatically switches to a mobile-optimized version when the screen size is 768px or below (tablet size and smaller).

## Architecture

### Responsive Switch System

The website uses a `ResponsiveSwitch` component that automatically detects screen size and switches between desktop and mobile versions:

```jsx
// App.js
<ResponsiveSwitch>
  {/* Desktop version content */}
  <DesktopComponents />
</ResponsiveSwitch>
```

### Mobile Detection Hook

The `useMobileDetection` hook provides mobile-specific utilities and behaviors:

```jsx
import { useMobileDetection } from "../hooks/useMobileDetection";

const { isMobile, mobileUtils, mobileBehaviors } = useMobileDetection();
```

## Mobile Version Features

### 1. Mobile Header

- Fixed header with logo and hamburger menu
- Optimized for touch interactions
- Proper z-index layering

### 2. Mobile Sidebar Navigation

- Full-screen slide-out navigation
- Collapsible sections with smooth animations
- Touch-friendly navigation items
- Search functionality

### 3. Mobile Content Sections

- **Hero Section**: Gradient background with call-to-action
- **Services Section**: Card-based layout with descriptions
- **Industries Section**: Industry-specific cards
- **Mobile Footer**: Simplified footer with essential links

### 4. Mobile-Optimized Components

#### Mobile Header

```jsx
<MobileHeader>
  <MobileLogo>
    <img src="logo.svg" alt="Intellectt" />
  </MobileLogo>
  <MobileMenuButton onClick={toggleSidebar}>
    <Menu size={24} />
  </MobileMenuButton>
</MobileHeader>
```

#### Mobile Sidebar

```jsx
<MobileSidebar isOpen={isSidebarOpen}>
  <MobileSidebarHeader>
    <MobileLogo />
    <MobileSidebarClose onClick={closeSidebar}>
      <X size={20} />
    </MobileSidebarClose>
  </MobileSidebarHeader>
  <MobileNav>{/* Navigation sections */}</MobileNav>
</MobileSidebar>
```

#### Mobile Cards

```jsx
<MobileCard>
  <MobileCardTitle>Service Title</MobileCardTitle>
  <MobileCardText>Service description</MobileCardText>
</MobileCard>
```

## Breakpoints

### Mobile Breakpoint: 768px

- **Desktop**: > 768px (Desktop version)
- **Mobile**: ≤ 768px (Mobile version)

### Additional Mobile Breakpoints

- **Tablet**: 768px - 1024px
- **Large Mobile**: 576px - 767px
- **Small Mobile**: ≤ 480px
- **Extra Small Mobile**: ≤ 360px

## Mobile-Specific CSS Classes

### Layout Classes

```css
.mobile-grid          /* Single column grid */
/* Single column grid */
.mobile-flex          /* Vertical flexbox */
.mobile-section       /* Mobile-optimized sections */
.mobile-card; /* Mobile-optimized cards */
```

### Text Classes

```css
.mobile-text-small    /* 14px */
/* 14px */
.mobile-text-medium   /* 16px */
.mobile-text-large    /* 18px */
.mobile-text-xlarge; /* 20px */
```

### Heading Classes

```css
.mobile-heading-small  /* 1.25rem */
/* 1.25rem */
.mobile-heading-medium /* 1.5rem */
.mobile-heading-large; /* 2rem */
```

### Utility Classes

```css
.mobile-hidden         /* Hide on mobile */
.mobile-visible        /* Show on mobile */
.mobile-text-center    /* Center text */
.mobile-p-{0-5}        /* Padding utilities */
.mobile-m-{0-5}        /* Margin utilities */
```

## Mobile Hooks

### useMobileDetection

Provides mobile detection and utilities:

```jsx
const {
  isMobile,
  isTablet,
  isSmallMobile,
  screenWidth,
  mobileUtils,
  mobileBehaviors,
  mobileLayout,
} = useMobileDetection();
```

### Mobile Utilities

```jsx
// Font sizes
mobileUtils.fontSize.small; // 14px
mobileUtils.fontSize.medium; // 16px
mobileUtils.fontSize.large; // 18px
mobileUtils.fontSize.xlarge; // 20px

// Spacing
mobileUtils.spacing.small; // 8px
mobileUtils.spacing.medium; // 12px
mobileUtils.spacing.large; // 16px
mobileUtils.spacing.xlarge; // 24px

// Padding
mobileUtils.padding.small; // 8px 12px
mobileUtils.padding.medium; // 12px 16px
mobileUtils.padding.large; // 16px 20px

// Border radius
mobileUtils.borderRadius.small; // 4px
mobileUtils.borderRadius.medium; // 6px
mobileUtils.borderRadius.large; // 8px

// Shadows
mobileUtils.shadow.small; // Light shadow
mobileUtils.shadow.medium; // Medium shadow
mobileUtils.shadow.large; // Heavy shadow
```

### Mobile Behaviors

```jsx
// Disable hover effects on mobile
mobileBehaviors.disableHover;

// Use touch-friendly interactions
mobileBehaviors.useTouchInteractions;

// Reduce animations for better performance
mobileBehaviors.reduceAnimations;

// Use mobile-optimized scrolling
mobileBehaviors.useMobileScrolling;

// Optimize for mobile networks
mobileBehaviors.optimizeForMobile;
```

### Mobile Layout

```jsx
// Single column layout
mobileLayout.useSingleColumn;

// Stack elements vertically
mobileLayout.stackVertically;

// Use full width
mobileLayout.useFullWidth;

// Reduce padding
mobileLayout.reducePadding;

// Use mobile-optimized grid
mobileLayout.useMobileGrid;
```

## Mobile Performance Optimizations

### 1. Touch Targets

- Minimum 44px touch targets
- Proper spacing between interactive elements
- Touch-friendly button sizes

### 2. Performance

- Reduced animations on mobile
- Optimized image loading
- Minimal JavaScript execution
- Mobile-optimized CSS

### 3. Accessibility

- High contrast mode support
- Reduced motion support
- Proper focus management
- Screen reader compatibility

### 4. Network Optimization

- Optimized for mobile networks
- Reduced bundle size
- Lazy loading for non-critical content

## Mobile Navigation Structure

### Main Navigation Sections

1. **WHAT WE DO**

   - AI & GenAI Practice
   - Cloud & Application Services
   - SAP Services
   - Managed IT Services
   - Data & Analytics

2. **WHO WE WORK WITH**

   - Healthcare & Life Sciences
   - Manufacturing & Automotive
   - Aerospace & Defense
   - Banking & Financial Services

3. **INSIGHTS**

   - Blog
   - Case Studies

4. **WHO WE ARE**

   - About Us
   - Leadership Team
   - Global Presence

5. **CAREERS**

   - Current Openings
   - Life at Company

6. **Contact Us**
   - Direct link to contact page

## Mobile Content Structure

### Hero Section

- Gradient background
- Compelling headline
- Call-to-action button
- Mobile-optimized typography

### Services Section

- Card-based layout
- Service descriptions
- Touch-friendly interactions

### Industries Section

- Industry-specific cards
- Brief descriptions
- Visual hierarchy

### Footer

- Simplified layout
- Essential links
- Company information

## Testing Checklist

### Mobile Testing

- [ ] Test on various mobile devices (iPhone, Android)
- [ ] Test different screen orientations
- [ ] Verify touch targets are properly sized
- [ ] Check text readability on small screens
- [ ] Test navigation functionality
- [ ] Verify form inputs work properly
- [ ] Test sidebar navigation
- [ ] Check performance on slow networks

### Tablet Testing

- [ ] Test on iPad and Android tablets
- [ ] Verify responsive breakpoints work correctly
- [ ] Check content layout and spacing
- [ ] Test navigation and interactions

### Cross-Browser Testing

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile browsers (Safari iOS, Chrome Android)

## Implementation Examples

### Using Mobile Detection Hook

```jsx
import { useMobileDetection } from "../hooks/useMobileDetection";

const MyComponent = () => {
  const { isMobile, mobileUtils } = useMobileDetection();

  return (
    <div
      style={{
        fontSize: mobileUtils.fontSize.medium,
        padding: mobileUtils.padding.medium,
        borderRadius: mobileUtils.borderRadius.medium,
      }}
    >
      {isMobile ? "Mobile Content" : "Desktop Content"}
    </div>
  );
};
```

### Mobile-Optimized Button

```jsx
const MobileButton = ({ children, onClick }) => {
  const { mobileUtils } = useMobileDetection();

  return (
    <button
      onClick={onClick}
      style={{
        padding: mobileUtils.padding.medium,
        fontSize: mobileUtils.fontSize.medium,
        borderRadius: mobileUtils.borderRadius.medium,
        minHeight: mobileUtils.buttonSize,
        minWidth: mobileUtils.buttonSize,
      }}
    >
      {children}
    </button>
  );
};
```

### Mobile-Optimized Card

```jsx
const MobileCard = ({ title, content }) => {
  const { mobileUtils } = useMobileDetection();

  return (
    <div
      className="mobile-card"
      style={{
        padding: mobileUtils.padding.large,
        borderRadius: mobileUtils.borderRadius.large,
        boxShadow: mobileUtils.shadow.medium,
      }}
    >
      <h3 style={{ fontSize: mobileUtils.fontSize.large }}>{title}</h3>
      <p style={{ fontSize: mobileUtils.fontSize.medium }}>{content}</p>
    </div>
  );
};
```

## Troubleshooting

### Common Mobile Issues

1. **Touch Target Too Small**

   - Ensure minimum 44px touch targets
   - Add proper spacing between elements
   - Use mobile-optimized button sizes

2. **Text Too Small**

   - Use mobile-optimized font sizes
   - Ensure proper contrast ratios
   - Test readability on actual devices

3. **Performance Issues**

   - Reduce animations on mobile
   - Optimize images for mobile
   - Minimize JavaScript execution

4. **Navigation Issues**
   - Test sidebar functionality
   - Verify touch interactions
   - Check navigation flow

### Debug Tools

- Chrome DevTools Device Simulation
- Firefox Responsive Design Mode
- BrowserStack for cross-device testing
- Lighthouse for performance auditing

## Maintenance

### Regular Updates

- Test mobile functionality monthly
- Update mobile breakpoints as needed
- Monitor mobile performance metrics
- Gather user feedback on mobile experience

### Documentation

- Keep this guide updated
- Document any new mobile patterns
- Share best practices with the team
- Maintain mobile component library
