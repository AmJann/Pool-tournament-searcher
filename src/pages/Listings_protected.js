import React from "react";
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import Navbar from "../components/Navbar";
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

  let tournamentListing = tournament.map((item, i) => {
    return (
  
      <div className="listing-container">
     <Link to={`/listing_detail/${item.uuid}`} key={i} className="listing">  
        <p>{item.title}</p>
        <p>{item.venue}</p>
        <p>{item.city}</p>
        <p>{item.state}</p>
        <p>{item.date}</p>
       </Link>
      </div>
    
    );
  });

  console.log(tournament);

  return (
    <div>
      <Navbar />
      <h1>{tournament[0] ? tournamentListing : ""}</h1>
    </div>
  );
}

export default Listings_Protected;
