import React from "react";

function Search({ setSearchItem }) {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchItem(e.target.value)}
        className="form-control"
      />
    </div>
  );
}

export default Search;
