import React, { useState } from 'react';

function Login({setUserSignedIn}) {
    
    const loginEndpoint = 'login'
    //from backend

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
    //while typing in input it up dates target input by id and
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

                    setUserSignedIn(data.username)

                    // add tokens to localstorage here
                    // redirect here
                }
            })
    }

    return (
    <div>
      <h3>Login</h3>
        <form onSubmit={handleLogin}>
            <label>username:</label>
            <input id="username" name="username" type="text" onChange={handleChange}/>
            {/* onChange changes the state as you type (see handleChange) */}
            <label>password:</label>
            <input id="password" name="username" type="text" onChange={handleChange}/>
            <button type="submit">Login</button>
        </form>
        <p>{networkErrMsg}</p>
        <p>{clientErrMsg}</p>
    </div>
    );
}

export default Login;