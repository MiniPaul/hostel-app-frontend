import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AdminNavBar from './AdminNavBar'

const AddHosteler = () => {

  const navigate=useNavigate()

  const [Name,setName] = new useState('')
  const [Phno,setPhno] = new useState('')  
  const [email,setemail] = new useState('')
  const [address,setaddress] = new useState('')
  const [father,setfather] = new useState('')
  const [mother,setmother] = new useState('')
  const [pcontact,setpcontact] = new useState('')
  const [pemail,setpemail] = new useState('')
  const [RoomNo,setRoomNo] = new useState('')
  const [Course,setCourse] = new useState('')
  const [password,setpassword] = new useState('')


  const submitHandler = async()=>{
    try {
      const response = await axios.post("http://localhost:3001/api/hostel/addstud",{Name,Phno,email,address,father,mother,pcontact,pemail,RoomNo,Course,password})
      console.log(response)
      if(response.data.status == "success"){
        alert("Successfully Added")
      }
    } catch (error) {
      alert("Something went wrong")
    }
  }


  return (
    <div>
      <AdminNavBar/>
        <div className="container">
          <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="form-label">Name</label>
                  <input type="text" className="form-control" name="Name" value={Name} onChange={(event)=>setName(event.target.value)}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="form-label">Phone Number</label>
                  <input type="text" className="form-control" name="Phno" value={Phno} onChange={(event)=>{setPhno(event.target.value)}} />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="form-label">Email</label>
                  <input type="text" className="form-control" name="email" value={email} onChange={(event)=>{setemail(event.target.value)}} />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="form-label">Address</label>
                  <input type="text" className="form-control" name="address" value={address} onChange={(event)=>{setaddress(event.target.value)}} />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="form-label">Father's Name</label>
                  <input type="text" className="form-control" name="father" value={father} onChange={(event)=>{setfather(event.target.value)}} />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="form-label">Mother's Name</label>
                  <input type="text" className="form-control" name="mother" value={mother} onChange={(event)=>{setmother(event.target.value)}} />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="form-label">Parent Contact number</label>
                  <input type="text" className="form-control"  name="pcontact" value={pcontact} onChange={(event)=>{setpcontact(event.target.value)}}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="form-label">Parent Email</label>
                  <input type="text" className="form-control" name="pemail" value={pemail} onChange={(event)=>{setpemail(event.target.value)}} />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="form-label">Room Number</label>
                  <input type="text" className="form-control" name="RoomNo" value={RoomNo} onChange={(event)=>{setRoomNo(event.target.value)}} />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="form-label">Course Name</label>
                  <input type="text" className="form-control" name="Course" value={Course} onChange={(event)=>{setCourse(event.target.value)}} />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="form-label">Password</label>
                  <input type="text" className="form-control" name="password" value={password} onChange={(event)=>{setpassword(event.target.value)}} />
                </div>
                <div className="row g-3">
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button className="btn btn-success" onClick={submitHandler}>Submit</button>
                  </div>
                  </div>             
              </div>
            </div>
          </div>

        </div>
    </div>
  )
}

export default AddHosteler