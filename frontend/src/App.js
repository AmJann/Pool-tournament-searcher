import {useEffect, useState} from 'react'
import './App.css'
import Login from './components/Login';
import SignUpPage from './pages/SignUpPage';
import {Route, Link, Routes} from 'react-router-dom'
import LandingPage from './pages/LandingPage';

function App() {
  const [userSignedIn, setUserSignedIn] = useState(null)
  const [accessToken, setAccessToken]= useState(null);
//   useEffect(() => {
    
//     const url = process.env.REACT_APP_API_URL + 'listings_protected/';
//     const opts = {
//       method: 'GET',
//       mode: 'no-cors',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${accessToken}`,
//         'Access-Control-Request-Headers': 'Content-Type, Authorization'
//       }
//     }

//     fetch(url, opts)
//     .then(res => res.json())
//     .then(data => console.log(data))

// });
  return (

    <div className="App">
      <Routes>
      <Route  exact path="/" element={<Login userSignedIn={userSignedIn} setUserSignedIn={setUserSignedIn} setAccessToken={setAccessToken}/>}/>
          
      
      <Route  exact path="/signup" element={ <SignUpPage userSignedIn={userSignedIn} setUserSignedIn={setUserSignedIn} setAccessToken={setAccessToken}/>}/>
         
     
      <Route  exact path="/landing_page/*"  element={<LandingPage accessToken={accessToken} userSignedIn={userSignedIn}/>}/>
          
     
</Routes>
      <div>
      <Link to="/signup/"> Sign Up | </Link>
      <Link to="/landing_page/*"> Guest</Link>

      </div>

      {userSignedIn ? (
        <nav>
          <span>signed in as: {userSignedIn}</span>
        </nav>  
        ) : <span>invalid login</span>
      }


    </div>

    
  );
}

export default App;
