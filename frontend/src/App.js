import {useEffect, useState} from 'react'
import './App.css'
import Login from './components/Login';
import {Route, Link} from 'react-router-dom'

function App() {

  useEffect(()=>{
    const accessToken ="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU3NDk3MzQ5LCJpYXQiOjE2NTc0OTcwNDksImp0aSI6IjA5MjBlYzUzZmNlNjQ3MTBiMjE4MmNjYzNmMTJjY2Y4IiwidXNlcl9pZCI6MX0.0yYT5JFJw8rYO_OWG3B3BiQKTuDrIUGj5KeU4fHgMno";
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

  })
  return (
    <div className="App">
     <Login />
    </div>
  );
}

export default App;
