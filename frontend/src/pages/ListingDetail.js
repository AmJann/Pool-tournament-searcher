import React, { useEffect } from "react";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Map from "../components/Map";
import Marker from "../components/Marker";

function ListingDetail(accessToken, center, zoom, position) {
  const [tournament, setTournament] = useState([]);
  const urlParams = useParams();

  useEffect(() => {
    const url =
      process.env.REACT_APP_API_URL + `listing_detail/${urlParams.id}/`;
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
        console.log(data);
        return data;
      })
      .then((data) => setTournament(data));
  }, []);

  const render = (Status) => {
    return <h1>{Status}</h1>;
  };

  console.log(accessToken);
  console.log(tournament);

  return (
    <div>
      <h1>
        {tournament ? (
          <div className="listing-container">
            <h1>{tournament.venue}</h1>
            <h2>{tournament.title}</h2>
            <div className="tournamentInfo">
              <p>
                <span className="value">Director: </span> {tournament.director}
              </p>
              <p>
                {" "}
                <span className="value">Day: </span>
                {tournament.date}
              </p>
              <p>
                <span className="value">Sign up time: </span>{" "}
                {tournament.sign_up_time}
              </p>
              <p>
                <span className="value">Start time: </span>{" "}
                {tournament.start_time}
              </p>
              <span className="value">Description: </span>
              <p>{tournament.description}</p>
            </div>
            <span className="value">Address: </span>
            <div className="address">
              <p>
                {tournament.address} {tournament.city}, {tournament.state}{" "}
                {tournament.zipcode}
              </p>
            </div>
            <h1 className="value">Contact info:</h1>
            <div className="contactInfo">
              <div className="phone"><span className="value">Phone: </span>{tournament.phone_number}</div>
              <div className="email"><span className="value">Email: </span>{tournament.email}</div>
            </div>
            <div>
            <Link to={`/listing_edit/${tournament.uuid}`} className="link">
              Edit
            </Link>
            <Link to={`/listing_delete/${tournament.uuid}`} className="link">
              Delete
            </Link>
            </div>
          </div>
        ) : (
          console.log(tournament)
        )}
      </h1>

      {/* <Wrapper apiKey={"AIzaSyDxDTiSWxZsKIe7tjVtHEv7kSl_OorxI-E"}>
        <Map center={center} zoom={zoom}>
          <Marker position={position} />
        </Map>
      </Wrapper> */}
    </div>
  );
}

export default ListingDetail;
