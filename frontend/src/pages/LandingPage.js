import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";




function LandingPage() {

  const [player, setPlayer] = useState([]);
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
      <h2 className="font">{item.name}</h2>
      <img alt = 'player' src= {item.image}/>
    </Link>
  </div>
    
    );
  });

//  const featuredTournament = tournament[0]? <div className = 'featuredTournamentsContainer'>
//     <div>
//         <Link to={`/listing_detail/${tournament.uuid}`} className="featuredTournament">
//           <h3>{tournament[0].title}</h3>
//           <img alt='8 ball'src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRzJTfzF5LTIlzEU3Ypx28hp5R5KUBafvWI_VWy3-_3ghYqSiBP3hsEt5aFv8mV6UcQCg&usqp=CAU"/>
//         </Link>
//      </div>
//      <div>
//         <Link to={`/listing_detail/${tournament.uuid}`} className="featuredTournament">
//           <h3>{tournament[1].title}</h3>
//           <img alt='8 ball'src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRzJTfzF5LTIlzEU3Ypx28hp5R5KUBafvWI_VWy3-_3ghYqSiBP3hsEt5aFv8mV6UcQCg&usqp=CAU"/>
//         </Link>
//      </div>
//      <div>
//         <Link to={`/listing_detail/${tournament.uuid}`} className="featuredTournament">
//           <h3>{tournament[2].title}</h3>
//           <img alt='8 ball'src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRzJTfzF5LTIlzEU3Ypx28hp5R5KUBafvWI_VWy3-_3ghYqSiBP3hsEt5aFv8mV6UcQCg&usqp=CAU"/>
//         </Link>
//      </div>

//     </div>: null

  return  (
    <div>
    <div className="navBarContainerLandingPage">
      <Navbar />  
    </div>
    <h1 className="featuredPlayersTitle font">Featured Players</h1>
    <div className="featuredPlayersContainer">
    {player[0] ? featuredPlayers : ""}
    </div>
    <h1 className="font">Featured Tournaments</h1>
    <div className="featuredTournamentContainer">
    <div className="img-container"> 
    <h3 className="font">Junior BCA 9-Ball Championship's</h3>
    <img alt='8 ball'src="https://us.123rf.com/450wm/artforeveryone/artforeveryone1707/artforeveryone170700329/82978034-shiny-yellow-nine-pool-billiard-ball-icon-vector-isolated.jpg?ver=6"/>
    </div>
    
    <div className="img-container"> 
    <h3 className="font">WPBA 8-Ball Championship's</h3>
    <img alt='8 ball'src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRzJTfzF5LTIlzEU3Ypx28hp5R5KUBafvWI_VWy3-_3ghYqSiBP3hsEt5aFv8mV6UcQCg&usqp=CAU"/>
    </div>
    
    <div className="img-container"> 
    <h3 className="font">One Pocket SE Regional Qualifiers</h3>
    <img alt='8 ball'src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRzJTfzF5LTIlzEU3Ypx28hp5R5KUBafvWI_VWy3-_3ghYqSiBP3hsEt5aFv8mV6UcQCg&usqp=CAU"/>
    </div>
    </div>
    </div>

  );
}

export default LandingPage;
