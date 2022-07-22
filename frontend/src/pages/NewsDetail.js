import React from 'react'
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function NewsDetail(accessToken) {
    const [news, setNews] = useState([]);
    const urlParams = useParams();
  
    useEffect(() => {
      const url =
        process.env.REACT_APP_API_URL + `news_detail/${urlParams.id}/`;
      const opts = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken.accessToken}`,
          "Access-Control-Request-Headers": "Content-Type, Authorization",
        },
      };
  
      fetch(url, opts)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          return data;
        })
        .then((data) => setNews(data));
    }, []);
  
  
    console.log(accessToken);
    console.log(news);
  return (
    <div>
        <Navbar />
        <div>

        </div>
    </div>
  )
}

export default NewsDetail