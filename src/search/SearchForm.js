import React, { useState } from "react";

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
        <form className="d-flex justify-content-center my-3" onSubmit={handleSubmit}>
            <input
              className="form-control form-control-p-2 form-control-lg w-50"
              name="searchTerm"
              placeholder="Enter search term"
              value={searchTerm}
              onChange={handleChange}
            />
          <button type="submit" className="btn btn-primary p-2">
            Submit
          </button>
        </form>
  );
}

export default SearchForm;
