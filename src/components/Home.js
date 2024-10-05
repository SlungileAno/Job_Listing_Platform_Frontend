import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <div className="home-content">
      <h1>Welcome to the Job Listing Platform</h1>
      <p>Navigate through the platform to add new job listings, view existing jobs, or see details of each job.</p>
      <Link to="/add-job">ADD JOB<br/></Link><br/>
      
      <Link to="/jobs">VIEW JOBS</Link>
      
    </div>
    </div>
  );
}

export default Home;
