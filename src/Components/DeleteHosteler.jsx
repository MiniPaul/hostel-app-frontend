import axios from 'axios';
import React, { useState } from 'react'
import AdminNavBar from './AdminNavBar';

const DeleteHosteler = () => {

    const [email , setemail]= new useState('');

    const deleteHandler =async () => {
        const result = window.confirm("Are you sure you want to remove the hosteler?");
    if (result) {
        try {
            const response = await axios.post("http://localhost:3001/api/hostel/delete",email)
            console.log(response)
            if(response.data.status === "success")
            {
                alert("Successfully removed")
            }
        } catch (error) {
            alert("Error")
        }
        console.log("User clicked Yes");
    } else {
        console.log("User clicked No");
    }
};

  return (
    <div>
        <AdminNavBar/>
        <div className="container">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <div className="row g-3">
                    <center>
                        <br />
                        <h1><b><center>Remove Hosteler</center></b></h1>
                        <br />
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Enter Email : </label>
                            <input type="text" className="form-control" name="email" value={email} onChange={(event)=>{setemail(event.target.value)}} />
                        </div>
                        <br /><br />
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-danger" onClick={deleteHandler}>Remove</button>
                        </div>
                    </center>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeleteHosteler