import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom'

function Login({setUserSignedIn, setAccessToken}) {
    
    const loginEndpoint = 'api/token/'
    //from backend
    const navigate = useNavigate();
    const [formInfo, setFromInfo] = useState({username:'', password:''})
    const [networkErrMsg, setNetworkErrMsg] = useState(null)
    const [clientErrMsg, setClientErrMsg] = useState(null)

    const statusCodeToErr = (responseObj) => {
        setNetworkErrMsg(`Network Error of code: ${responseObj.status}`)
    }

    const clientFormValidation = (formInfo) => {
        const blankFields = Object.entries(formInfo)
        //turns username, pasword into array of arrays
                                  .filter(kv => kv[1] === '')
        //iterates over array of arrays and checks index 1 of each array
        if (blankFields.length > 0) {
            setClientErrMsg(`${blankFields[0][0]} can not be blank`)
            return false
            //will show error for each field not filled out until all are filled out
        }
        setClientErrMsg(null)
        return true
    }

    const handleChange = (e) => {
        setFromInfo({...formInfo, [e.target.id]: e.target.value})
    }
    //while typing in input it updates target input by id and
    // changes value does not go to database until you hit submit
    const handleLogin = (e) => {
        
        // console.log(formInfo)
        e.preventDefault()

        setNetworkErrMsg(null)

        if (!clientFormValidation(formInfo)) {
            return
        }
        
        const apiUrl = process.env.REACT_APP_API_URL
        //located in .env
        
        fetch( apiUrl + loginEndpoint, 
                {
                    method: 'POST',
                    headers: {
                        'Content-Type':'application/json',
                    },
                    body: JSON.stringify(formInfo)
                }
        )
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    statusCodeToErr(res)
                    return Promise.resolve(null)
                    //promise is a simple form of fetch
                    //this line makes a catch unnecessary
                }
            })
            .then(data => {
                if (!data) {
                    console.log(`problem with network request: ${networkErrMsg}`)
                    //promise.resolve(null) makes it so this line runs
                } else {
                    
                    console.log(data)

                    setUserSignedIn(formInfo.username)     
                    setAccessToken(data.access)
                    console.log(data.access)

                    console.log(formInfo.username)
                    localStorage.setItem("user", JSON.stringify(data))
                    // add tokens to localstorage here
                    navigate('/landing_page');
                 
                    return data
                }
            })
    }
    
    return (
    <div>
        <div className='welcome'>
        <h1 className='font'>Welcome to Tournament Finder</h1>
        </div>
      <div className='loginContainer'> 
      <h3>Login</h3>
        <form onSubmit={handleLogin}>
            <label className='font'>username:</label>
            <input id="username" name="username" type="text" onChange={handleChange}/><br></br>
            {/* onChange changes the state as you type (see handleChange) */}
            <label className='font'>password:</label>
            <input id="password" name="username" type="password" onChange={handleChange}/><br></br>
            <button className="login font" type="submit">Login</button>
        </form>
        <div className='signUpContainer'>
        <Link className='signUpGuest' to="/signup/"> Sign Up </Link>
        <Link className='signUpGuest' to="/landing_page/"> Guest</Link>
        </div>
        </div> 
        <p>{networkErrMsg}</p>
        <p>{clientErrMsg}</p>
    </div>
    );
}

export default Login;