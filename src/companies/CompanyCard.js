import React from "react";
import { Link } from "react-router-dom";
import "./CompanyCard.css"

// company snapshot

function CompanyCard({ name, description, logoUrl, handle }) {

  console.log(logoUrl)

  return (
    <div className='card-parent'>
      <Link className="CompanyCard" to={`/companies/${handle}`}>
        <div className="company-body">
          <h6 className="card-title">
            {name}
            {logoUrl && <img src={logoUrl}
                             alt={name}
                             className="logo" />}
          </h6>
          <p className='description'><small>{description}</small></p>
        </div>
      </Link>
    </div>
  );
}

export default CompanyCard;