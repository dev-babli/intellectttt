# Mega Menu Component - Refactored

This directory contains the refactored mega menu component, broken down into smaller, more maintainable pieces.

## Structure

```
megaMenu/
├── MegaMenuIntellecttRefactored.jsx    # Main orchestrator component (~200 lines)
├── components/
│   ├── SearchBar.jsx                    # Search functionality component
│   ├── MobileMenu.jsx                   # Mobile menu component
│   └── MegaMenuDropdowns/
│       └── MegaMenuDropdown.jsx         # Reusable mega menu dropdown
├── hooks/
│   ├── useScrollEffect.js               # Scroll effect hook
│   ├── useSearch.js                     # Search functionality hook
│   └── useMobileMenu.js                 # Mobile menu hook
├── styles/
│   └── MegaMenuStyles.js                # All styled components
├── data/
│   ├── navigationData.js                # Navigation menu structure
│   └── searchData.js                    # Search data and configuration
└── index.js                             # Export file
```

## Benefits of Refactoring

### Before (Original)
- **4575 lines** in a single file
- Hard to maintain and debug
- Poor reusability
- Difficult for team collaboration
- Performance issues with large re-renders

### After (Refactored)
- **~200 lines** main component
- **Modular components** with single responsibilities
- **Reusable hooks** for logic separation
- **Separated data** for easy updates
- **Better performance** with smaller components
- **Easier testing** of individual components

## Usage

### Basic Usage
```jsx
import { MegaMenuIntellecttRefactored } from './components/megaMenu';

function App() {
  return (
    <div>
      <MegaMenuIntellecttRefactored />
      {/* Your app content */}
    </div>
  );
}
```

### Using Individual Components
```jsx
import { SearchBar, MobileMenu, useSearch } from './components/megaMenu';

function CustomHeader() {
  const searchProps = useSearch();
  
  return (
    <header>
      <SearchBar {...searchProps} />
      <MobileMenu isOpen={false} onClose={() => {}} />
    </header>
  );
}
```

## Components

### MegaMenuIntellecttRefactored
The main orchestrator component that combines all other components.

**Props:** None (uses internal state and hooks)

### SearchBar
Handles search functionality with dropdown results.

**Props:**
- `isHomePage` (boolean): Whether current page is home
- `scrolled` (boolean): Whether page has scrolled

### MobileMenu
Responsive mobile menu with collapsible sections.

**Props:**
- `isOpen` (boolean): Whether menu is open
- `onClose` (function): Function to close menu

### MegaMenuDropdown
Reusable mega menu dropdown component.

**Props:**
- `isOpen` (boolean): Whether dropdown is open
- `menuName` (string): Name of the menu
- `sections` (array): Menu sections data
- `onMouseEnter` (function): Mouse enter handler
- `onMouseLeave` (function): Mouse leave handler

## Hooks

### useScrollEffect
Manages scroll state for header styling.

**Returns:**
- `scrolled` (boolean): Whether page has scrolled

### useSearch
Manages search functionality and results.

**Returns:**
- `searchQuery` (string): Current search query
- `searchResults` (array): Filtered search results
- `showSearchResults` (boolean): Whether to show results
- `handleSearchChange` (function): Search input change handler
- `handleSearchFocus` (function): Search focus handler
- `handleSearchBlur` (function): Search blur handler
- `handleSearchSubmit` (function): Search submit handler
- `handleSearchKeyDown` (function): Search keyboard handler

### useMobileMenu
Manages mobile menu state and interactions.

**Returns:**
- `isMobileMenuOpen` (boolean): Whether mobile menu is open
- `openSections` (Set): Currently open sections
- `openMegaMenuSections` (Set): Currently open mega menu sections
- `toggleMobileMenu` (function): Toggle mobile menu
- `closeMobileMenu` (function): Close mobile menu
- `toggleSection` (function): Toggle section
- `toggleMegaMenuSection` (function): Toggle mega menu section

## Data Files

### navigationData.js
Contains navigation menu structure for both desktop and mobile.

**Exports:**
- `navigationItems`: Desktop navigation structure
- `mobileMenuItems`: Mobile navigation structure

### searchData.js
Contains search functionality data and configuration.

**Exports:**
- `searchData`: Search results and messages
- `searchCategories`: Available search categories
- `searchConfig`: Search configuration options

## Styling

### MegaMenuStyles.js
Contains all styled components using emotion.

**Exports:**
- Header components (`HeaderContainer`, `HeaderContent`, etc.)
- Navigation components (`Navigation`, `NavItem`, etc.)
- Search components (`SearchContainer`, `SearchInput`, etc.)
- Mobile menu components (`MobileMenuContainer`, `MobileMenuContent`, etc.)
- Mega menu components (`MegaMenuContainer`, `MegaMenuContent`, etc.)

## Migration Guide

To migrate from the original mega menu:

1. **Replace the import:**
   ```jsx
   // Old
   import MegaMenuIntellectt from './components/megaMenu/MegaMenuIntellectt';
   
   // New
   import { MegaMenuIntellecttRefactored } from './components/megaMenu';
   ```

2. **Update the component usage:**
   ```jsx
   // Old
   <MegaMenuIntellectt />
   
   // New
   <MegaMenuIntellecttRefactored />
   ```

3. **Test functionality** to ensure everything works as expected.

## Performance Improvements

- **Smaller bundle size** due to code splitting
- **Faster re-renders** with smaller components
- **Better tree shaking** with modular exports
- **Reduced memory usage** with separated concerns

## Testing

Each component can now be tested independently:

```jsx
import { render, screen } from '@testing-library/react';
import { SearchBar } from './components/megaMenu';

test('SearchBar renders correctly', () => {
  render(<SearchBar isHomePage={true} scrolled={false} />);
  expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
});
```

## Future Enhancements

- Add TypeScript support
- Implement lazy loading for mega menu content
- Add more accessibility features
- Create theme system for styling
- Add animation customization options 