import React from 'react';
import { Search, X } from 'lucide-react';
import { useSearch } from '../hooks/useSearch';
import { searchData } from '../data/searchData';
import { 
  SearchContainer, 
  SearchInput, 
  SearchResults, 
  SearchResultItem 
} from '../styles/MegaMenuStyles';

const SearchBar = ({ isHomePage, scrolled }) => {
  const {
    searchQuery,
    searchResults,
    showSearchResults,
    handleSearchChange,
    handleSearchFocus,
    handleSearchBlur,
    handleSearchSubmit,
    handleSearchKeyDown,
    setSearchQuery,
    setShowSearchResults
  } = useSearch();

  const handleResultClick = (url) => {
    // Navigate to the selected result
    window.location.href = url;
    setSearchQuery('');
    setShowSearchResults(false);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setShowSearchResults(false);
  };

  return (
    <SearchContainer>
      <form onSubmit={handleSearchSubmit}>
        <SearchInput
          type="text"
          placeholder={searchData.placeholder}
          value={searchQuery}
          onChange={handleSearchChange}
          onFocus={handleSearchFocus}
          onBlur={handleSearchBlur}
          onKeyDown={handleSearchKeyDown}
          style={{
            background: isHomePage && !scrolled ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
            border: isHomePage && !scrolled ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(0, 0, 0, 0.1)',
            color: isHomePage && !scrolled ? '#ffffff' : '#000000'
          }}
        />
      </form>
      
      {searchQuery && (
        <button
          onClick={clearSearch}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: isHomePage && !scrolled ? '#ffffff' : '#000000',
            padding: '4px'
          }}
        >
          <X size={16} />
        </button>
      )}

      {showSearchResults && (
        <SearchResults>
          {searchResults.length > 0 ? (
            searchResults.map((result) => (
              <SearchResultItem
                key={result.id}
                onClick={() => handleResultClick(result.url)}
              >
                <h4>{result.title}</h4>
                <p>{result.description}</p>
                <small style={{ color: '#718096' }}>{result.category}</small>
              </SearchResultItem>
            ))
          ) : (
            <SearchResultItem>
              <p style={{ color: '#718096', fontStyle: 'italic' }}>
                {searchData.noResultsMessage}
              </p>
            </SearchResultItem>
          )}
        </SearchResults>
      )}
    </SearchContainer>
  );
};

export default SearchBar; 