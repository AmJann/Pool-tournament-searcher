import React from 'react'
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div className='NavbarContainer'>
      <div>
      <Link className = 'link tournamentFinder'to= '/landing_page/'>Tournament Finder</Link>
      <Link className ='link' to="/listings/">Tournaments</Link>
      <Link className ='link' to="/listing_create/">Add Tournament</Link> 
      <Link className ='link' to="/news/">News</Link>  
      <Link className ='link' to="/">Login/Sign-up</Link>  
      </div>
    </div>
  )
}

export default Navbar