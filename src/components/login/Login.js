import React, { useState } from 'react'
import './login.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Login({setLoginUser}) {

  //Note:- Old version is useHistory() that support react v5, Now it is react v6 that support useNavigate() instead of useHistory()
  // const history  = useHistory()     //This will not work now   
  const navigate = useNavigate()

  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const inputChangeHandler = (event) => {
    // console.log(event.target);
    const { name, value } = event.target;
    // console.log(name, value);
    setUser({
      ...user,
      [name]: value
    })
  }

  const loginUser = () => {

    axios.post("http://localhost:3003/login", user)
      .then(res => {
        alert(res.data.message)
        setLoginUser(res.data.user)
        navigate("/")
      })
  }
  return (
    <div className='login'>
      <h2>Login</h2>
      {console.log("User", user)}
      <input type='text' name='email' value={user.email} placeholder='Enter your Email' onChange={inputChangeHandler} ></input>
      <input type='password' name='password' value={user.password} placeholder='Enter your Password' onChange={inputChangeHandler} ></input>
      <div className='button' onClick={loginUser}>Login</div>
      <div>or,</div>
      {/* Note:- History.push("/register") is deprecated to navigate("/register"),   history.push is a an old version that support
         react V5 but here we are using react v6 */}
      {/* <div className='button' onClick={ () => history.push("/register")}>Login</div> */}
      <div className='button' onClick={() => navigate("/register")}>Register</div>
    </div>
  )
}

