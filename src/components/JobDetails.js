import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function JobDetails() {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/jobs/${id}`)
      .then((response) => setJob(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!job) return <div>Loading...</div>;

  return (
    <div>
      <h2>{job.title}</h2>
      <p>Company: {job.company}</p>
      <p>{job.description}</p>
    </div>
  );
}

export default JobDetails;
