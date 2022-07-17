import React, { useEffect } from 'react'
import {useState} from 'react'
import { useParams, Link } from "react-router-dom";

function ListingDetail(accessToken) {
    const [tournament, setTournament] = useState([]);
    const urlParams = useParams();
  

  
    useEffect(() => {
        const url = process.env.REACT_APP_API_URL + `listing_detail/${urlParams.id}/`;
        const opts = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `jwt ${accessToken.accessToken}`,
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
    }, []);
  

    console.log(accessToken)
    console.log(tournament);
  
    return (
      <div>
        <h1>{tournament ?      
         <div className="listing-container">
          <p>{tournament.director}</p>
          <p>{tournament.title}</p>
          <p>{tournament.phone_number}</p>
          <p>{tournament.email}</p>
          <p>{tournament.venue}</p>
          <p>{tournament.address}</p>
          <p>{tournament.city}</p>
          <p>{tournament.state}</p>
          <p>{tournament.zipcode}</p>
          <p>{tournament.date}</p>
          <p>{tournament.sign_up_time}</p>
          <p>{tournament.start_time}</p>
          <p>{tournament.description}</p>
        </div> 
        : console.log(tournament)}</h1>
         <Link to={`/listing_edit/${tournament.uuid}`} className="link">Edit</Link>
      </div>
      
    );
  }
  


export default ListingDetail