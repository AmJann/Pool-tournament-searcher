import React from "react";
import { Route, Link, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Listings_Protected from "./Listings_protected";
import LoginPage from "./LoginPage";

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

      <Link className ='link' to="/listings/">Tournaments</Link>
      <Link className ='link' to="/listing_create/">Add Tournament</Link>     
    </div>
  );
}

export default LandingPage;
