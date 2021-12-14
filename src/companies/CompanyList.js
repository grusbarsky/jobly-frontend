import React, { useState, useEffect } from "react";
import SearchForm from "../search/SearchForm";
import JoblyApi from "../api";
import CompanyCard from "./CompanyCard";
import "./CompanyCard.css"

// Shows all companies and a form
// on form submit, filter companies

function CompanyList() {

  const [companies, setCompanies] = useState(null);

  useEffect(function getCompaniesOnMount() {
    search();
  }, []);

  async function search(name) {
    let companies = await JoblyApi.getCompanies(name);
    setCompanies(companies);
  }

  if (!companies) return <h3>Loading...</h3>;

  return (
      <div className="CompanyList">
        <SearchForm searchFor={search} />
        {companies.length
            ? (
                <div className="CompanyList-list">
                  {companies.map(c => (
                      <CompanyCard
                          key={c.handle}
                          handle={c.handle}
                          name={c.name}
                          description={c.description}
                          logoUrl={c.logoUrl}
                      />
                  ))}
                </div>
            ) : (
                <p className="lead">Sorry, no results match your search!</p>
            )}
      </div>
  );
}

export default CompanyList;
