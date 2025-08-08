// Search functionality data and configuration
export const searchData = {
  placeholder: "Search for services, solutions, or insights...",
  noResultsMessage: "No results found. Try a different search term.",
  searchResults: [
    {
      id: 1,
      title: "AI Solutions",
      description: "Comprehensive artificial intelligence solutions for your business",
      url: "/services/ai-solutions",
      category: "Services"
    },
    {
      id: 2,
      title: "Cloud Migration",
      description: "Seamless cloud migration services and consulting",
      url: "/services/cloud-migration",
      category: "Services"
    },
    {
      id: 3,
      title: "Data Analytics",
      description: "Advanced data analytics and business intelligence solutions",
      url: "/services/data-analytics",
      category: "Services"
    },
    {
      id: 4,
      title: "About Us",
      description: "Learn about our company story, mission, and leadership team",
      url: "/about",
      category: "Company"
    },
    {
      id: 5,
      title: "Blog",
      description: "Latest insights, articles, and industry updates",
      url: "/blog",
      category: "Resources"
    },
    {
      id: 6,
      title: "Case Studies",
      description: "Real-world examples of our successful implementations",
      url: "/case-studies",
      category: "Resources"
    },
    {
      id: 7,
      title: "Healthcare Solutions",
      description: "Specialized solutions for healthcare industry",
      url: "/industries/healthcare",
      category: "Industries"
    },
    {
      id: 8,
      title: "Cybersecurity",
      description: "Comprehensive cybersecurity services and solutions",
      url: "/services/cybersecurity",
      category: "Services"
    },
    {
      id: 9,
      title: "Careers",
      description: "Join our team and explore career opportunities",
      url: "/careers",
      category: "Company"
    },
    {
      id: 10,
      title: "Contact Us",
      description: "Get in touch with our team for inquiries and support",
      url: "/contact",
      category: "Support"
    }
  ]
};

export const searchCategories = [
  "All",
  "Services",
  "Company",
  "Resources",
  "Industries",
  "Support"
];

export const searchConfig = {
  maxResults: 10,
  minSearchLength: 2,
  debounceDelay: 300,
  highlightClass: "search-highlight"
}; 