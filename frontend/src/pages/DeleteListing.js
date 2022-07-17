import React from 'react'

function DeleteListing() {
    
    const urlParams = useParams();
  

  const handleSubmit = ()=>{
    useEffect(() => {
        const url = process.env.REACT_APP_API_URL + `listing_delete/${urlParams.id}/`;
        const opts = {
          method: "DELETE",
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
      
    }, []);}
  return (
    <div>DeleteListing</div>
  )
}

export default DeleteListing