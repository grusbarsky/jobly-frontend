import React from "react";
import { Link } from "react-router-dom";
import "./CompanyCard.css"

// company snapshot

function CompanyCard({ name, description, logoUrl, handle }) {

  console.log(logoUrl)

  return (
    <div className='CompanyCard card w-50 mx-auto my-3 shadow-sm'>
      <Link className="CompanyLink" to={`/companies/${handle}`}>
        <div className="card-body">
          <h5 className="card-title">
            {name}
            {logoUrl && <img src={logoUrl}
                             className="logo float-end" />}
          </h5>
          <p className='description'><small>{description}</small></p>
        </div>
      </Link>
    </div>
  );
}

export default CompanyCard;