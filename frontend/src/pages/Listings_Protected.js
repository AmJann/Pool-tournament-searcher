import React from 'react'
import{useEffect} from 'react'

function Listings_Protected(accessToken) {
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
        
    </div>
  )
}

export default Listings_Protected