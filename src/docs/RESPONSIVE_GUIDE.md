# Responsive Design Guide

## Overview

This guide provides comprehensive responsive design implementation for the Intellectt website, ensuring optimal user experience across all devices and screen sizes.

## Breakpoints

### Standard Breakpoints

- **Extra Small (xs)**: 0px - 575px (Mobile phones)
- **Small (sm)**: 576px - 767px (Large phones)
- **Medium (md)**: 768px - 991px (Tablets)
- **Large (lg)**: 992px - 1199px (Small desktops)
- **Extra Large (xl)**: 1200px - 1399px (Large desktops)
- **Extra Extra Large (xxl)**: 1400px+ (Very large screens)

## Responsive Components

### 1. ResponsiveWrapper

A container component that provides consistent responsive behavior.

```jsx
import ResponsiveWrapper from "../components/ResponsiveWrapper/ResponsiveWrapper";

<ResponsiveWrapper>
  <YourContent />
</ResponsiveWrapper>;
```

### 2. Responsive Grid System

CSS Grid-based responsive layout system.

```jsx
import { ResponsiveGrid } from "../components/ResponsiveWrapper/ResponsiveWrapper";

<ResponsiveGrid>
  <Card />
  <Card />
  <Card />
</ResponsiveGrid>;
```

### 3. Responsive Text

Automatically scales text based on screen size.

```jsx
import { ResponsiveText } from "../components/ResponsiveWrapper/ResponsiveWrapper";

<ResponsiveText size="1.5rem" color="#333">
  Your text content
</ResponsiveText>;
```

### 4. Responsive Button

Touch-friendly buttons with proper sizing.

```jsx
import { ResponsiveButton } from "../components/ResponsiveWrapper/ResponsiveWrapper";

<ResponsiveButton padding="0.75rem 1.5rem" fontSize="1rem">
  Click Me
</ResponsiveButton>;
```

## Responsive Hooks

### 1. useResponsive

Main responsive hook providing screen size and breakpoint information.

```jsx
import { useResponsive } from "../hooks/useResponsive";

const MyComponent = () => {
  const { isMobile, isTablet, isDesktop, breakpoint, responsive } =
    useResponsive();

  return (
    <div style={{ fontSize: responsive.text.base }}>
      {isMobile ? "Mobile View" : "Desktop View"}
    </div>
  );
};
```

### 2. useResponsiveVisibility

Controls component visibility based on screen size.

```jsx
import { useResponsiveVisibility } from "../hooks/useResponsive";

const MyComponent = () => {
  const { hideOnMobile, showOnDesktop } = useResponsiveVisibility();

  return (
    <>
      <div style={{ display: hideOnMobile ? "none" : "block" }}>
        Desktop Only Content
      </div>
      <div style={{ display: showOnDesktop ? "none" : "block" }}>
        Mobile Only Content
      </div>
    </>
  );
};
```

### 3. useResponsiveLayout

Provides responsive layout utilities.

```jsx
import { useResponsiveLayout } from "../hooks/useResponsive";

const MyComponent = () => {
  const { gridColumns, containerMaxWidth, headerHeight } =
    useResponsiveLayout();

  return (
    <div style={{ maxWidth: containerMaxWidth }}>
      <div style={{ gridTemplateColumns: `repeat(${gridColumns.lg}, 1fr)` }}>
        {/* Grid content */}
      </div>
    </div>
  );
};
```

## CSS Classes

### Responsive Utility Classes

#### Display Classes

```css
.d-none-mobile     /* Hide on mobile */
/* Hide on mobile */
.d-block-mobile    /* Show on mobile */
.d-flex-mobile; /* Flex on mobile */
```

#### Text Alignment Classes

```css
.text-center-mobile /* Center text on mobile */
/* Center text on mobile */
.text-left-mobile  /* Left align on mobile */
.text-right-mobile; /* Right align on mobile */
```

#### Spacing Classes

```css
.p-mobile-0        /* No padding on mobile */
/* No padding on mobile */
.p-mobile-1        /* Small padding on mobile */
.p-mobile-2        /* Medium padding on mobile */
.p-mobile-3        /* Large padding on mobile */
.p-mobile-4        /* Extra large padding on mobile */
.p-mobile-5        /* Maximum padding on mobile */

.m-mobile-0        /* No margin on mobile */
.m-mobile-1        /* Small margin on mobile */
.m-mobile-2        /* Medium margin on mobile */
.m-mobile-3        /* Large margin on mobile */
.m-mobile-4        /* Extra large margin on mobile */
.m-mobile-5; /* Maximum margin on mobile */
```

## Component-Specific Responsive Rules

### Header/Mega Menu

- **Desktop**: Full navigation with mega menus
- **Tablet**: Collapsed navigation with hamburger menu
- **Mobile**: Hamburger menu with slide-out navigation
- **Small Mobile**: Optimized touch targets and spacing

### Footer

- **Desktop**: 4-column layout with full content
- **Tablet**: 2-column layout with stacked sections
- **Mobile**: Single-column layout with reduced spacing
- **Small Mobile**: Minimal spacing and smaller text

### Content Sections

- **Desktop**: Full-width content with sidebars
- **Tablet**: Reduced padding and margins
- **Mobile**: Single-column layout with minimal spacing
- **Small Mobile**: Optimized for readability

## Performance Optimizations

### Mobile Performance

- Reduced animations on mobile devices
- Disabled parallax effects on small screens
- Optimized image loading for mobile networks
- Reduced JavaScript execution on mobile

### Touch Targets

- Minimum 44px touch targets on mobile
- Proper spacing between interactive elements
- Optimized button and link sizes

### Accessibility

- High contrast mode support
- Reduced motion support for users with vestibular disorders
- Proper focus management on mobile
- Screen reader compatibility

## Testing Checklist

### Mobile Testing

- [ ] Test on various mobile devices (iPhone, Android)
- [ ] Test different screen orientations
- [ ] Verify touch targets are properly sized
- [ ] Check text readability on small screens
- [ ] Test navigation functionality
- [ ] Verify form inputs work properly

### Tablet Testing

- [ ] Test on iPad and Android tablets
- [ ] Verify responsive breakpoints work correctly
- [ ] Check content layout and spacing
- [ ] Test navigation and interactions

### Desktop Testing

- [ ] Test on various screen sizes (1024px, 1366px, 1920px)
- [ ] Verify mega menu functionality
- [ ] Check hover states and animations
- [ ] Test keyboard navigation

### Cross-Browser Testing

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile browsers (Safari iOS, Chrome Android)

## Best Practices

### 1. Mobile-First Design

- Start with mobile layout and enhance for larger screens
- Use progressive enhancement
- Prioritize content for mobile users

### 2. Performance

- Optimize images for different screen sizes
- Use lazy loading for non-critical content
- Minimize JavaScript on mobile devices

### 3. Accessibility

- Ensure proper contrast ratios
- Provide alternative text for images
- Support keyboard navigation
- Test with screen readers

### 4. User Experience

- Maintain consistent navigation across devices
- Provide clear call-to-action buttons
- Optimize loading times
- Ensure smooth transitions

## Implementation Examples

### Responsive Card Component

```jsx
import {
  ResponsiveCard,
  ResponsiveText,
} from "../components/ResponsiveWrapper/ResponsiveWrapper";

const ResponsiveCardExample = () => {
  return (
    <ResponsiveCard padding="1.5rem" borderRadius="12px">
      <ResponsiveText size="1.25rem" color="#333">
        Card Title
      </ResponsiveText>
      <ResponsiveText size="1rem" color="#666">
        Card content that scales appropriately across devices.
      </ResponsiveText>
    </ResponsiveCard>
  );
};
```

### Responsive Form Component

```jsx
import {
  ResponsiveForm,
  ResponsiveInput,
  ResponsiveButton,
} from "../components/ResponsiveWrapper/ResponsiveWrapper";

const ResponsiveFormExample = () => {
  return (
    <ResponsiveForm>
      <ResponsiveInput
        placeholder="Enter your email"
        padding="0.75rem 1rem"
        fontSize="1rem"
      />
      <ResponsiveButton padding="0.75rem 1.5rem" fontSize="1rem">
        Submit
      </ResponsiveButton>
    </ResponsiveForm>
  );
};
```

### Responsive Layout with Hooks

```jsx
import { useResponsive, useResponsiveLayout } from "../hooks/useResponsive";

const ResponsiveLayoutExample = () => {
  const { isMobile, responsive } = useResponsive();
  const { gridColumns } = useResponsiveLayout();

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${gridColumns.lg}, 1fr)`,
        gap: responsive.spacing.lg,
        padding: responsive.padding.base,
      }}
    >
      {/* Grid items */}
    </div>
  );
};
```

## Troubleshooting

### Common Issues

1. **Content Overflowing**

   - Use `overflow-x: hidden` on body
   - Implement proper container max-widths
   - Use responsive units (rem, em, %) instead of fixed pixels

2. **Touch Target Issues**

   - Ensure minimum 44px touch targets
   - Add proper spacing between interactive elements
   - Test on actual mobile devices

3. **Performance Issues**

   - Optimize images for mobile
   - Reduce JavaScript bundle size
   - Use lazy loading for non-critical content

4. **Layout Breaking**
   - Use CSS Grid and Flexbox for layouts
   - Implement proper breakpoints
   - Test on various screen sizes

### Debug Tools

- Chrome DevTools Device Simulation
- Firefox Responsive Design Mode
- BrowserStack for cross-device testing
- Lighthouse for performance auditing

## Maintenance

### Regular Updates

- Test responsive design monthly
- Update breakpoints as needed
- Monitor performance metrics
- Gather user feedback on mobile experience

### Documentation

- Keep this guide updated
- Document any new responsive patterns
- Share best practices with the team
- Maintain a component library with responsive examples
