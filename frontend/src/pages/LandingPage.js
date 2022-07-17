import React from "react";
import { Route, Link, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Listings_Protected from "./Listings_protected";

function LandingPage({ accessToken, userSignedIn }) {

// const [tournament,setTournament] = useState([])

//   useEffect(() => {
//     const url = process.env.REACT_APP_API_URL + "listings_protected/";
//     const opts = {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${accessToken}`,
//         "Access-Control-Request-Headers": "Content-Type, Authorization",
//       },
//     };

//     fetch(url, opts)
//       .then((res) => res.json())
//       .then((data)=>setTournament(data))
//       .then((data)=>console.log(data))
    


     
//   },[]);
  
//   useEffect(() => {
//     let data =(data)=>{
//         setTournament(data)
//     };
//     data = data
//   }, []);
       


  return  (
    <div>

      <Link to="/listings/">Tournaments</Link>
      <Link to="/listing_create/">Add Tournament Listing</Link>     
    </div>
  );
}

export default LandingPage;
