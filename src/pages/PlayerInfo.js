import React, { useEffect } from "react";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function PlayerInfo(accessToken) {
  const [player, setPlayer] = useState([]);
  const urlParams = useParams();

  useEffect(() => {
    const url =
      process.env.REACT_APP_API_URL + `player_detail/${urlParams.id}/`;
    const opts = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(url, opts)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        return data;
      })
      .then((data) => setPlayer(data));
  }, []);


  console.log(accessToken);
  console.log(player);

  return (
    <>
    <Navbar />
    <div className="playerInfo">
      <div className='articleImgContainer'>
        <h1 className="font">{player.name}</h1>
        <img className="playerImg" alt = 'player'src= {player.image}/>
      </div>
      <div className="playerStats">
        <span>Birth Date:</span><h3>{player.birth_date}</h3>
        <span>Country:</span><h3>{player.country}</h3>
        <span>Fargo Rating:</span><h3>{player.fargo}</h3>
        <span>Current Year Earnings</span><h3>{player.current_year_earnings}</h3>
      </div>  
      </div>
      <div className="article">
        <h3>{player.description}</h3>
      </div>
    </>
  )
}

export default PlayerInfo