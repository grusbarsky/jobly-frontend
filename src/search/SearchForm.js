import React, { useState } from "react";
import "./searchform.css"

// show search form and pass props

function SearchForm({ searchFor }) {

  const [searchTerm, setSearchTerm] = useState("");

  function handleSubmit(evt) {
    // take off empty spaces
    evt.preventDefault();
    searchFor(searchTerm.trim() || undefined);
    setSearchTerm(searchTerm.trim());
  }

  function handleChange(evt) {
    setSearchTerm(evt.target.value);
  }

  return (
        <form className="form search-form" onSubmit={handleSubmit}>
          <input
              className="form-input"
              name="searchTerm"
              placeholder="Enter search term"
              value={searchTerm}
              onChange={handleChange}
          />
          <button type="submit" className="btn search-btn">
            Submit
          </button>
        </form>
      
  );
}

export default SearchForm;
