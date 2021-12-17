import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../api";
import JobCardList from "../jobs/JobCardList";
import "./CompanyCard.css"

// Lists company details including jobs

function CompanyDetail() {
  const { handle } = useParams();

  const [company, setCompany] = useState(null);

  useEffect(function getCompanyAndJobsForUser() {
    async function getCompany() {
      setCompany(await JoblyApi.getCompany(handle));
    }

    getCompany();
  }, [handle]);

  if (!company) return <h3>Loading...</h3>;

  return (
      <div className="CompanyDetail">
        <div className="CompanyTitle text-center m-3">
          <h4>{company.name}</h4>
          <p>{company.description}</p>
        </div>
        <JobCardList jobs={company.jobs} />
      </div>
  );
}

export default CompanyDetail;
