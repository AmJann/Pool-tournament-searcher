import React from "react";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import Listings_Protected from "./Listings_protected";
import Navbar from "../components/Navbar";
import Aloysius_Yapp from "../images/Aloysius_Yapp.jpeg"
import Kelly_Fisher from "../images/Kelly_Fisher.jpeg"
import Fedor_Gorst from '../images/Fedor_Gorst.jpeg'
import Joshua_Filler from '../images/Joshua_Filler.jpeg'



function LandingPage() {

  const [player, setPlayer] = useState([]);

  function getData(accessToken) {
    const url = process.env.REACT_APP_API_URL + "landing_page/";
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
      .then((data) => setPlayer(data))
      
     console.log(player)
  }

  useEffect(() => {
    getData();
    
  }, []);
       
  let featuredPlayers = player.map((item, i) => {
    return (
  
  <div className="img-container">
    <Link to={`/player_detail/${item.uuid}`} key={i} className="player">  
      <h3>{item.name}</h3>
      <img src= {item.image}/>
    </Link>
  </div>
    
    );
  });

  return  (
    <div>
    <div className="navBarContainerLandingPage">
      <Navbar />  
    </div>
    <h2 className="featuredPlayersTitle">Featured Players</h2>
    <div className="featuredPlayersContainer">
    {player[0] ? featuredPlayers : ""}
    </div>
    <h2>Featured Tournaments</h2>
    <div className = 'featuredTournamentsContainer'>
     <h1>Tournament</h1>

    </div>
    </div>

  );
}

export default LandingPage;
