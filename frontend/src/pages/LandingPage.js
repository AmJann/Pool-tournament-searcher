import React from "react";

import { useEffect, useState } from "react";
import Listings_Protected from "./Listings_protected";
import Navbar from "../components/Navbar";
import Aloysius_Yapp from "../images/Aloysius_Yapp.jpeg"
import Kelly_Fisher from "../images/Kelly_Fisher.jpeg"
import Fedor_Gorst from '../images/Fedor_Gorst.jpeg'
import Joshua_Filler from '../images/Joshua_Filler.jpeg'



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
    <div className="navBarContainerLandingPage">
      <Navbar />  
    </div>
    <h2 className="featuredPlayersTitle">Featured Players</h2>
    <div className="featuredPlayersContainer">
    <div className="img-container horizontalImg">
      <h3>Aloysius Yapp</h3>
      <img src= {Aloysius_Yapp}/>
    </div>
    <div className="img-container">
    <h3>Joshua Filler</h3>
      <img src= {Joshua_Filler}/>
    </div>
    <div className="img-container horizontalImg">
    <h3>Fedor Gorst</h3>
      <img src= {Fedor_Gorst}/>
    </div>
    </div>
    <h2>Featured Tournaments</h2>
    <div className = 'featuredTournamentsContainer'>
     <h1>Tournament</h1>

    </div>
    </div>

  );
}

export default LandingPage;
