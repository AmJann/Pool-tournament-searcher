import React from 'react'
import Signup from '../components/Signup'

function SignUpPage({setUserSignedIn}) {
  return (
    <div><Signup setUserSignedIn={setUserSignedIn}/></div>
  )
}

export default SignUpPage