import axios from 'axios'
import React, { useEffect, useState } from 'react'
import HostelerNavBar from './HostelerNavBar'

const ViewmyComplaint = () => {

    const[input,setInput]= new useState(
        {
            "UserID": sessionStorage.getItem("userid")
        }
    )

    const inputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.name})
    }

    const[data,setData]= new useState([])

    const getData=()=>{
        axios.post("http://localhost:3001/api/complaint/viewmycomplaint").then(
            (response)=>{
                setData(response.data) 
            }
        )
    }
    useEffect(()=>{getData()},[])

    const deletePost = (id)=>{
        let data = {"_id":id}
        axios.post("http://localhost:3001/api/complaint/delete",data).then((response)=>
        {
          if (response.data.status=="success") {
            getData()
          } else {
            alert("Something went wrong")
          }
        })
      }

  return (
    <div>
        <HostelerNavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <br /><br /><h1><center>My Complaints</center></h1>
                    <div>
                    {
                        data.map((value,index)=>{
                            return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3"> 
                            <div class="card border-success mb-3">
                            <div class="card-body text-success">
                            <p class="card-text">Post:{value.complaint}</p>
                            <p class="card-text">Posted Date:{value.complaintDate}</p>
                            <button className="btn btn-danger" onClick={()=>{deletePost(value._id)}}>Delete</button>
                            </div>
                        </div>
                        </div>
                        })                    }
                </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewmyComplaint

