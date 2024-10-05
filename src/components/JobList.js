import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function JobList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/jobs')
      .then((response) => setJobs(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container">
      <h2>Job Listings</h2>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            <Link to={`/jobs/${index}`}>{job.title} at {job.company}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobList;
