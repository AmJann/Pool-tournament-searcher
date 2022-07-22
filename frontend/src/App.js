import {useEffect, useState} from 'react'
import './App.css'
import Login from './components/Login';
import SignUpPage from './pages/SignUpPage';
import {Route, Link, Routes, Navigate} from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import Listings_protected from './pages/Listings_protected';
import CreateListing from './pages/CreateListing';
import ListingDetail from './pages/ListingDetail';
import EditListing from './pages/EditListing';
import DeleteListing from './pages/DeleteListing';
import News from './pages/News'
import PlayerInfo from './pages/PlayerInfo';
import NewsDetail from './pages/NewsDetail';

function App() {
  const [userSignedIn, setUserSignedIn] = useState(null)
  const [accessToken, setAccessToken]= useState(null);
  const [redirected, setRedirected]= useState(null)

  return (

    <div className="App">
    
<Routes>
      <Route  exact path="/" element={<Login userSignedIn={userSignedIn} setUserSignedIn={setUserSignedIn} setAccessToken={setAccessToken}/>}/>
      <Route  exact path="/signup" element={ <SignUpPage userSignedIn={userSignedIn} setUserSignedIn={setUserSignedIn} setAccessToken={setAccessToken}/>}/>
      <Route  exact path="/landing_page/"  element={<LandingPage accessToken={accessToken} userSignedIn={userSignedIn}/>}/>
      <Route exact path="/listings/" element={ <Listings_protected accessToken={accessToken} userSignedIn={userSignedIn} />}/> 
      <Route exact path="/listing_create/" element={ <CreateListing accessToken={accessToken} userSignedIn={userSignedIn} />}/> 
      <Route exact path="/listing_detail/:id" element={ <ListingDetail accessToken={accessToken} userSignedIn={userSignedIn} />}/>
      <Route exact path="/listing_edit/:id" element={ <EditListing accessToken={accessToken} userSignedIn={userSignedIn} />}/>
      <Route exact path="/listing_delete/:id" element={ <DeleteListing accessToken={accessToken} userSignedIn={userSignedIn} />}/>
      <Route exact path="/news" element={ <News accessToken={accessToken} userSignedIn={userSignedIn} />}/>
      <Route exact path="/player_detail/:id" element={ <PlayerInfo accessToken={accessToken} userSignedIn={userSignedIn} />}/>
      <Route exact path="/news_detail/:id" element={ <NewsDetail accessToken={accessToken} userSignedIn={userSignedIn} />}/>
      
      
</Routes>


      {  userSignedIn ? (
        <div>
        <nav className='userSignedIn'>
          <span>signed in as: {userSignedIn}</span><br></br>
        </nav>
        </div>
        

        

          
        ) :      
        <div className='userSignedIn'>

        <span>invalid login</span>
        <footer>
        </footer>
        </div> 
      }


    </div>

    
  );
}

export default App;
