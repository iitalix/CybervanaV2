import React from 'react';
import { useHistory } from 'react-router-dom';

const SearchResult = ({ result, clearSearch }) => {
  const { push } = useHistory();

  const goToCurrent = () => {
    push(`/vehicles/${result.id}`);
    clearSearch();
  };

  return (
    <div className='search-result' onClick={goToCurrent}>
      <p>{result.make} {result.model}</p>
    </div>
  );
};

export default SearchResult;
