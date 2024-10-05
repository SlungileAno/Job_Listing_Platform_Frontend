import './style/JobStyling.css';
import './style/Home.css';
import './style/AddJob.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AddJob from './components/AddJob';
import JobList from './components/JobList';
import JobDetails from './components/JobDetails';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-job" element={<AddJob />} />
        <Route path="/jobs" element={<JobList />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
      </Routes>
     
    </div>
  
  );

  
}

export default App;
