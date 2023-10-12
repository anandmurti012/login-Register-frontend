import React, { useState } from 'react';
import './register.css';
import axios from 'axios';
import { useNavigate  } from "react-router-dom";

export default function Register({setLoginUser}) {
//Note:- Old version is useHistory() that support react v5, Now it is react v6 that support useNavigate() instead of useHistory()
  // const history  = useHistory()     //This will not work now   
  const navigate  = useNavigate()

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: ""
  })

  const inputChangeHandler = (event) => {
    // console.log(event.target);
    const { name, value } = event.target;
    // console.log(name, value);
    setUser({
      ...user,
      [name] : value
    })
  }

 
  const registerUser = () =>{
    const {name, email, password, reEnterPassword} = user
    //Using If else we are doing validation. once validation is done the it will go for the post request that is axios.post(" ...url...")
    if(name && email && password && (password === reEnterPassword)){
      axios.post("http://localhost:3003/register",user)
      .then(res => {alert(res.data.message)
        navigate("/login")
      })
      //Note:- we are passing 'user' here , It means in backend all the 'user' data will be found...
    }else{
      alert("invalid inputs")
    }
  }
  //=============
  // axios.get('your-url', { timeout: 5000 })
  // .then(response => console.log(response))
  // .catch(error => console.error(error));
  //====================

  return (
    <>
    <div className='container'>
    <div className='register'>
      <h2>Register</h2>
      {console.log("Userr", user)}
      <input type='text' name='name' value={user.name} placeholder='Your Name' onChange={inputChangeHandler} ></input>
      <input type='text' name='email' value={user.email} placeholder='Your Email' onChange={inputChangeHandler} ></input>
      <input type='password' name='password' value={user.password} placeholder='Your Password' onChange={inputChangeHandler} ></input>
      <input type='password' name='reEnterPassword' value={user.reEnterPassword} placeholder='Re-enter your Password' onChange={inputChangeHandler} ></input>
      <div className='button' onClick={registerUser}>Register</div>
      <div>or,</div>
      {/* Note:- History.push("/") is deprecated to navigate("/"),   history.push is a an old version that support react V5 but here we are using react v6 */}
      {/* <div className='button' onClick={ () => history.push("/login")}>Login</div> */}
      <div className='button' onClick={ () => navigate("/login")}>Login</div>
    </div>
    </div>
    </>
  )
}
