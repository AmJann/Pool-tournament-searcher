import React from 'react'
import { Link, useParams } from 'react-router-dom';

function DeleteListing(accessToken) {
    
    const urlParams = useParams();
  

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(accessToken)
        const url = process.env.REACT_APP_API_URL + `listing_delete/${urlParams.id}/`;
        const opts = {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken.accessToken}`,
            "Access-Control-Request-Headers": "Content-Type, Authorization",
          },
        };
    
        fetch(url, opts)
          .then((res) => res.json())
          .then((data) => {
              console.log(data)
              return data
            })
            
      
   }
  return (
    <div>
        <h1>Are you sure you want to <span id ='delete'>delete</span> this tournament listing?</h1>
        <form onSubmit={handleSubmit}>
    <div className="buttons">
  
        <input className="button delete" type="submit" value="Confirm" />
        <Link to={`/listings/`} className="link">Cancel</Link>
    </div>
</form>
    </div>
  )
}

export default DeleteListing