import React from "react";
import { useEffect, useState } from "react";
import "../listings.css";

function Listings_Protected() {
  const [tournament, setTournament] = useState([]);

  function getData(accessToken) {
    const url = process.env.REACT_APP_API_URL + "listings_protected/";
    const opts = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `jwt ${accessToken}`,
        "Access-Control-Request-Headers": "Content-Type, Authorization",
      },
    };

    fetch(url, opts)
      .then((res) => res.json())
      .then((data) => {
          console.log(data)
          return data
        })
      .then((data) => setTournament(data))
      
     
  }

  useEffect(() => {
    getData();
    
  }, []);

  let tournamentListing = tournament.map((item) => {
    return (
      <div className="listing-container">
        <p>{item.director}</p>
        <p>{item.phone_number}</p>
        <p>{item.email}</p>
        <p>{item.venue}</p>
        <p>{item.address}</p>
        <p>{item.city}</p>
        <p>{item.state}</p>
        <p>{item.zipcode}</p>
        <p>{item.date}</p>
        <p>{item.sign_up_time}</p>
        <p>{item.start_time}</p>
        <p>{item.description}</p>
      </div>
    );
  });

  console.log(tournament);

  return (
    <div>
      <h1>{tournament[0] ? tournamentListing : ""}</h1>
    </div>
  );
}

export default Listings_Protected;
