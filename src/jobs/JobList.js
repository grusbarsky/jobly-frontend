import React, { useState, useEffect } from "react";
import Search from "../search/SearchForm";
import JoblyApi from "../api";
import JobCardList from "./JobCardList";

// Show list of jobs and form
// when form submits, job filter occurs

function JobList() {

  const [jobs, setJobs] = useState(null);

  useEffect(function getAllJobsOnMount() {
    search();
  }, []);

  async function search(title) {
    let jobs = await JoblyApi.getJobs(title);
    setJobs(jobs);
  }

  if (!jobs) return <h3>Loading...</h3>;

  return (
      <div className="JobList">
        <Search searchFor={search} />
        {jobs.length
            ? <JobCardList jobs={jobs} />
            : <p className="sorry">Sorry, no job matched your search!</p>
        }
      </div>
  );
}

export default JobList;
