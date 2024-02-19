import React, { useState } from 'react'
import HomeNavBar from './HomeNavBar'
import axios from 'axios'

const Login = () => {

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
        console.log(responds.data)
        if (responds.data.status == "success") {
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
            alert("Invalid username")
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
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                      <label htmlFor="" className="form-label">Email </label> 
                      <input type="text" className="form-control" name="email" value={input.email} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                      <label htmlFor="" className="form-label">Password</label>       
                      <input type="text" className="form-control" name="password" value={input.password} onChange={inputHandler}/>      
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                      <button className="btn btn-success" onClick={readValue}>Log in</button>     
                </div>
                </div>
            </div>
            </center>
        </div>        
    </div>
  )
}

export default Login