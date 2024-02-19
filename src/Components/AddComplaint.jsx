import React, { useState } from 'react'
import HostelerNavBar from './HostelerNavBar'
import axios from 'axios'

const AddComplaint = () => {

    const[input,setInput]= new useState(
        {
            "UserID": sessionStorage.getItem("userid"),
            "complaint": ""
        }
    )

    const inputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
            axios.post("http://localhost:3001/api/complaint/add",input).then(
                (response)=>{
                    if (response.data.status=="success") {
                        alert("Successfully posted")
                        setInput(
                            {
                                "UserID": sessionStorage.getItem("userid"),
                                "complaint": ""
                            }
                        )
                    } else {
                        alert("Something went wrong")
                    }
                }
            )
    }

  return (
    <div>
        <HostelerNavBar/>
        <div className="container">
            <center>
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Complaint </label>
                            <textarea id="" cols="30" rows="5" className="form-control" name="complaint" value={input.complaint} onChange={inputHandler}></textarea>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-1 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readValue}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
            </center>
        </div>
    </div>
  )
}

export default AddComplaint