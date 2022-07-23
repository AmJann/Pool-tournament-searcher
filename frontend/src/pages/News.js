import React from 'react'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from '../components/Navbar'

function News() {
    const [news, setNews] = useState([]);

    function getData(accessToken) {
      const url = process.env.REACT_APP_API_URL + "news/";
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
        .then((data) => setNews(data))
        
       console.log(news)
    }
  
    useEffect(() => {
      getData();
      
    }, []);
  return (
    <div>
        <Navbar />
      
    </div>
  )
}

export default News