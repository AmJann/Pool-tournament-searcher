import React from 'react'
import { useParams, useNavigate } from "react-router-dom";
import {useState} from 'react'
import Navbar from '../components/Navbar';

function EditListing(accessToken) {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [tournament, setTournament] = useState([]);
    const [formData, setFormData] = useState({
      director: "",
      title:"",
      phone_number: "",
      email: "",
      venue: "",
      address: "",
      city: "",
      state: "",
      zipcode: "",
      date: "",
      sign_up_time: "",
      start_time: "",
      description: "",
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.id]: e.target.value });
      console.log(formData)
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const url = process.env.REACT_APP_API_URL + `listing_detail/${urlParams.id}/`;
      const opts = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken.accessToken}`,
          "Access-Control-Request-Headers": "Content-Type, Authorization"
        },
        body: JSON.stringify(formData),
      };
      fetch(url, opts)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            return data
          })
        .then((data) => setTournament(data))
        .finally(tournament ? navigate('/landing_page/'): null)
    };
    console.log(accessToken)
    console.log(tournament)
    return (
     <>
     <Navbar />
     <h1>Edit {formData.title} Tournament</h1>
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <div className='Edit'><span className='editKey'>Director:</span><input id="director" type="text" placeholder="director" value={formData.director} onChange={handleChange} /></div>
          <div className='Edit'><span className='editKey'>Title:</span><input id="title" type="text" placeholder="tournament name" value={formData.title} onChange={handleChange} /></div>
          <div className='Edit'><span className='editKey'>Phone:</span><input id="phone_number" type="text" placeholder="phone number" value={formData.phone_number} onChange={handleChange} /></div>
          <div className='Edit'><span className='editKey'>E-mail:</span><input id="email" type="email" placeholder="email" value={formData.email} onChange={handleChange} /></div>
          <div className='Edit'><span className='editKey'>Venue:</span><input id="venue" type="text" placeholder="venue" value={formData.venue} onChange={handleChange} /></div>
          <div className='Edit'><span className='editKey'>Address:</span><input id="address" type="text" placeholder="address" value={formData.address} onChange={handleChange} /></div>
          <div className='Edit'><span className='editKey'>City:</span><input id="city" type="text" placeholder="city" value={formData.city} onChange={handleChange} /></div>
          <div className='Edit'><span className='editKey'>State:</span><input id="state" type="text" placeholder="state" value={formData.state} onChange={handleChange} /></div>
          <div className='Edit'><span className='editKey'>Zipcode:</span><input id="zipcode" type="text" placeholder="zipcode" value={formData.zipcode} onChange={handleChange} /></div>
          <div className='Edit'><span className='editKey'>Date:</span><input id="date" type="date" placeholder="date" value={formData.date} onChange={handleChange}/></div>
          <div className='Edit'><span className='editKey'>Sign up time:</span><input id="sign_up_time" type="text" placeholder="sign up time" value={formData.sign_up_time} onChange={handleChange} /></div>
          <div className='Edit'><span className='editKey'>Start time:</span><input id="start_time" type="text" placeholder="start time" value={formData.start_time} onChange={handleChange} /></div>
          <div className='Edit'><span className='editKey'>Description:</span><input id="description" type="text" placeholder="description" value={formData.description} onChange={handleChange} /></div>
          <button className ="submit button" type="submit" value="Submit">Submit</button>
        </form>
      </div>
      </>
    );
  }

export default EditListing