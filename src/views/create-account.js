import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import { Helmet } from 'react-helmet'

import './create-account.css'

const CreateAccount = (props) => {
  const url="https://64d4f96db592423e4694f88f.mockapi.io/users"
  const [data,setData] = useState({
    name:"",
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
    Axios.post(url,{
      name: data.name,
      email: data.email,
      password: data.password
    })
    .then(res=>{
      console.log(res.data)
    })
  }
  return (
    <div className="create-account-container">
      <Helmet>
        <title>Active Online Software Page</title>
        <meta property="og:title" content="Active Online Software Page" />
      </Helmet>
      <div className="create-account-container1">
        <span className="create-account-account">Create Acccount</span>
        <span className="create-account-name">Name</span>
        <input
          onChange={(e)=>handle(e)}
          id="name"
          value = {data.name}
          type="text"
          required
          placeholder="Full Name"
          className="create-account-name1 input"
        />
        <span className="create-account-email">Email</span>
        <input
          onChange={(e)=>handle(e)}
          id="email"
          value = {data.email}
          type="email"
          required
          placeholder="Email Address"
          className="create-account-email1 input"
        />
        <span className="create-account-password">Password</span>
        <input
          onChange={(e)=>handle(e)}
          id="password"
          value = {data.password}
          type="password"
          required
          placeholder="Password"
          className="create-account-password1 input"
        />
        <input type="checkbox" className="create-account-checkbox" />
        <span className="create-account-text">Remember Me</span>
        <button onClick={(e)=>submit(e)} type="submit" className="create-account-button button">
          Sign Up
        </button>
        <span className="create-account-text1">Already have an account?</span>
        <Link to="/account-login" className="create-account-navlink">
          Login
        </Link>
      </div>
    </div>
  )
}

export default CreateAccount
