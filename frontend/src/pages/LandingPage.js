import React from 'react'
import {Route, Link, Routes} from 'react-router-dom'
import {useEffect, useState} from 'react'
import Listings_Protected from './Listings_Protected';

function LandingPage({accessToken,userSignedIn}) {
      useEffect(() => {
    
    const url = process.env.REACT_APP_API_URL + 'listings_protected/';
    const opts = {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
        'Access-Control-Request-Headers': 'Content-Type, Authorization'
      }
    }

    fetch(url, opts)
    .then(res => res.json())
    .then(data => console.log(data))

});
  return (
    <div>
        <Link to="/listings_protected/"> Tournaments | </Link>
        <Routes>
        <Route  exact path="/listings_protected/*"  element={<Listings_Protected accessToken={accessToken} userSignedIn={userSignedIn}/>}/>
        </Routes>
    </div>
  )
}

export default LandingPage