import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CreateListing(accessToken, userSignedIn) {
  const navigate = useNavigate();
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
    const url = process.env.REACT_APP_API_URL + "listing_create/";
    const opts = {
      method: "POST",
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
      .finally(tournament ? navigate('/listings/'): null)
  };
  console.log(accessToken)
  console.log(tournament)
  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <input id="director" type="text" placeholder="name" value={formData.director} onChange={handleChange} />
        <input id="title" type="text" placeholder="tournament name" value={formData.title} onChange={handleChange} />
        <input id="phone_number" type="text" placeholder="phone number" value={formData.phone_number} onChange={handleChange} />
        <input id="email" type="email" placeholder="email" value={formData.email} onChange={handleChange} />
        <input id="venue" type="text" placeholder="venue" value={formData.venue} onChange={handleChange} />
        <input id="address" type="text" placeholder="address" value={formData.address} onChange={handleChange} />
        <input id="city" type="text" placeholder="city" value={formData.city} onChange={handleChange} />
        <input id="state" type="text" placeholder="state" value={formData.state} onChange={handleChange} />
        <input id="zipcode" type="text" placeholder="zipcode" value={formData.zipcode} onChange={handleChange} />
        <input id="date" type="date" placeholder="date" value={formData.date} onChange={handleChange}/>
        <input id="sign_up_time" type="text" placeholder="sign up time" value={formData.sign_up_time} onChange={handleChange} />
        <input id="start_time" type="text" placeholder="start time" value={formData.start_time} onChange={handleChange} />
        <input id="description" type="text" placeholder="description" value={formData.description} onChange={handleChange} />
        <button type="submit" value="Submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateListing;
