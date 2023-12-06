import React from "react";
import SearchResult from "./SearchResult";
import "../Search/SearchBar.css"

const ResultsList = ({ results, clearSearch }) => {
  return (
    <div className="results-list">
      {results.length === 0 ? (
        <div className="no-results">No results found</div>
      ) : (
        results.map((result, id) => (
          <SearchResult result={result} key={id} clearSearch={clearSearch} />
        ))
      )}
    </div>
  );
};

export default ResultsList;
