import { useState, useEffect, useCallback } from 'react';
import { searchData, searchConfig } from '../data/searchData';

export const useSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false);

  const getSearchResults = useCallback(() => {
    if (searchQuery.length < searchConfig.minSearchLength) {
      return [];
    }

    const query = searchQuery.toLowerCase();
    const filteredResults = searchData.searchResults.filter(item => 
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query)
    );

    return filteredResults.slice(0, searchConfig.maxResults);
  }, [searchQuery]);

  useEffect(() => {
    const results = getSearchResults();
    setSearchResults(results);
    setShowSearchResults(results.length > 0 && isSearchFocused);
  }, [searchQuery, isSearchFocused, getSearchResults]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchFocus = () => {
    setIsSearchFocused(true);
    setShowSearchResults(searchQuery.length >= searchConfig.minSearchLength);
  };

  const handleSearchBlur = () => {
    // Delay hiding results to allow for clicks
    setTimeout(() => {
      setIsSearchFocused(false);
      setShowSearchResults(false);
    }, 200);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchResults.length > 0) {
      // Navigate to first result or perform search action
      console.log('Search submitted:', searchQuery);
    }
  };

  const handleSearchKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearchSubmit(e);
    } else if (e.key === 'Escape') {
      setSearchQuery('');
      setShowSearchResults(false);
      setIsSearchFocused(false);
    }
  };

  return {
    searchQuery,
    searchResults,
    isSearchFocused,
    showSearchResults,
    handleSearchChange,
    handleSearchFocus,
    handleSearchBlur,
    handleSearchSubmit,
    handleSearchKeyDown,
    setSearchQuery,
    setShowSearchResults
  };
}; 