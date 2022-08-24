import React from 'react'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

function NewsDetail(accessToken) {
    const [newsDetail, setNewsDetail] = useState([]);
    const urlParams = useParams();
  
    useEffect(() => {
      const url =
        process.env.REACT_APP_API_URL + `news_detail/${urlParams.id}/`;
      const opts = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
  
      fetch(url, opts)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          return data;
        })
        .then((data) => setNewsDetail(data));
    }, []);
  
  
    console.log(accessToken);
    console.log(newsDetail);
  return (
    <div>
        <Navbar />
        <div>
        <div className='articleImgContainer'>   
        <h1 className='font'>{newsDetail.title}</h1>
        <img className='playerImg' src ={newsDetail.image}/>
        </div> 
        <div className='dateAuthor'>
            <div className='author'>Author:{newsDetail.author} |</div>
            <div className='date'>| {newsDetail.date}</div>
        </div>
        <div><p className='font article newsArticle'>{newsDetail.article}</p></div>

        </div>
    </div>
  )
}

export default NewsDetail