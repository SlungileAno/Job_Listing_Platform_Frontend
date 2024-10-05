import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddJob() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const job = { title, description, company };
    axios.post('http://localhost:5000/jobs', job)
      .then(() => navigate('/jobs'))
      .catch((err) => console.error(err));
  };

  return (

        <div class="container">

            <h1>Add Job Post</h1>

            <form onSubmit={handleSubmit}>
                  <label for = "jobTittle">Job tittle</label>
                       <input type = "text" id = "jobTittle" name = "jobTittle" placeholder ="Enter job tittle" value={title} onChange={(e) => setTitle(e.target.value)} required></input>
                  <label for = "company">Company</label>
                       <input type = "text" id = "company" name = "company" placeholder ="Enter company name"  value={company} onChange={(e) => setCompany(e.target.value)} required></input>
                  <label for = "location">Location</label>
                       <input type = "text" id = "location" name="location" placeholder ="Enter job location" value={location} onChange={(e) => setLocation(e.target.value)}  required></input>
                  <label for = "description">Job description</label>
                    <textarea id = "description" name = "description" rows = "10" placeholder ="Enter job desription" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>

                    <input type = "submit" value= "Add Job"></input>
            </form>

        </div>

    



   );
}

export default AddJob;
