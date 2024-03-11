import React, { useState } from 'react'
import HomeNavBar from './HomeNavBar'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate()

  const[input,setInput]=new useState(
    {
      "email":"",
      "password":""
    }
  )

  const inputHandler=(event)=>{
    setInput({...input,[event.target.name]:event.target.value})
  }

  const readValue=()=>{
    axios.post("http://localhost:3001/api/hostel/login",input).then(
      (responds)=>{
        console.log(responds.data.userData)
        if (responds.data.status == "success") {
          
          sessionStorage.setItem("userid",responds.data.userData._id)

          navigate("/profile")

          setInput(
            {
              "email":" ",
              "password":" "
            }
          )
        } else {
          if (responds.data.status=="Incorrect Password") {
            alert("Invalid password")
          } else {
            alert("Invalid email")
          }
        }
      }
    )
  }
  return (
    <div >
        <HomeNavBar/>
        <div className="container" >
          <center>
            <div className="row">
              <div className="container" bg-dark>
                <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                      <label htmlFor="" className="form-label">Email </label> 
                      <input type="text" className="form-control" name="email" value={input.email} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                      <label htmlFor="" className="form-label">Password</label>       
                      <input type="text" className="form-control" name="password" value={input.password} onChange={inputHandler}/>      
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                      <button className="btn btn-success" onClick={readValue}>Log in</button>     
                </div>
                <div className="div">
                  <Link to="/admin">Admin Login</Link>
                </div>
                </div>
                </div>
            </div>
            </center>
        </div>        
    </div>
  )
}

export default Login