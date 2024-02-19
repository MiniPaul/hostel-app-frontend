import React, { useState } from 'react'

const AdminLogin = () => {

    const[input, setInput]= new useState(
        {
            "UserName": "",
            "Password": ""        
        }
    )


    const inputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }

    const readValue = ()=>{
        console.log(input)
        if(input.UserName == "admin" && input.Password == "admin") {
            setInput(
                {
                    "UserName": "",
                    "Password": ""        
                }
            )
        } else {
            alert("Invalid username or password")
        }
    }

  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">UserName</label>
                            <input type="text" className="form-control" name="UserName" value={input.UserName} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Password</label>
                            <input type="text" className="form-control" name="Password" value={input.Password} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-info" onClick={readValue}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminLogin