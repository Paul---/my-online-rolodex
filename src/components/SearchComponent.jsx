import React from "react";

const SearchComponent = ({ searchField, changeSearchField }) => {
  const updateSearchTerm = e => {
    changeSearchField(e.target.value);
  };

  const placeholder = `Search Contacts Here`;

  return (
    <div style={{ paddingBottom: "8px" }}>
      <input
        className="tc"
        type="search"
        value={searchField}
        placeholder={placeholder}
        onChange={updateSearchTerm}
      />
    </div>
  );
};

export default SearchComponent;
