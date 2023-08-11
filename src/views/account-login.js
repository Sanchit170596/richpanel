import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import { Helmet } from 'react-helmet'
import './account-login.css'
import {history} from '../index';
const AccountLogin = (props) => {
  const url="https://64d4f96db592423e4694f88f.mockapi.io/users"
  const [data,setData] = useState({
    email:"",
    password:""
  })
  
  function handle(e){
    const newdata={...data}
    newdata[e.target.id]= e.target.value
    setData(newdata)
  }
  function submit(e){
    e.preventDefault();
    axios.get(url)
            .then((response) => {
              const obj = response.data;
              const find_user = obj.find(i => i.email === data.email);
              if(find_user.password===data.password){
                history.push("/subscription"); 
                window.location.reload();
              }
            });
  }
  return (
    <div className="account-login-container">
      <Helmet>
        <title>Account-Login - Active Online Software Page</title>
        <meta
          property="og:title"
          content="Account-Login - Active Online Software Page"
        />
      </Helmet>
      <div className="account-login-container1">
        <span className="account-login-account">Login to your account</span>
        <span className="account-login-email">Email</span>
        <input
          onChange={(e)=>handle(e)}
          id="email"
          value = {data.email}
          type="email"
          required
          placeholder="Email Address"
          className="account-login-email1 input"
        />
        <span className="account-login-password">Password</span>
        <input
          onChange={(e)=>handle(e)}
          id="password"
          value = {data.password}
          type="password"
          required
          placeholder="Password"
          className="account-login-password1 input"
        />
        <input type="checkbox" className="account-login-checkbox" />
        <span className="account-login-text">Remember Me</span>
        <button onClick={(e)=>submit(e)} type="submit" className="account-login-button button">
          Login
        </button>
        <span className="account-login-text1">New to MyApp?</span>
        <Link to="/" className="account-login-navlink">
          Signup
        </Link>
      </div>
    </div>
  )
}

export default AccountLogin
