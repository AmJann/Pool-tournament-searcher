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

    let featuredNews = news.map((item, i) => {
        return (
      
      <div className="img-container newsImg">
        <Link to={`/news_detail/${item.uuid}`} key={i} className="news">  
          <h3 className='font'>{item.title}</h3>
          <img className='imgNews' alt = 'player' src= {item.image}/>
          <p>{item.description}</p>
        </Link>
      </div>
        
        );
      });
  return (
    <div>
        <Navbar />
        <h1 className='font'>Billiards News Today</h1>
            <div>
                {featuredNews}
            </div>
      
    </div>
  )
}

export default News