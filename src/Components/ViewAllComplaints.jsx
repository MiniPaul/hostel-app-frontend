import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AdminNavBar from './AdminNavBar';

const ViewAllComplaints = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get("http://localhost:3001/api/complaint/viewall");
                console.log(response.data)
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        getData();
    }, []);
    
  return (
    <div>
        <AdminNavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <br /><br />
                        <h1><b><center>Hosteler's Complaints</center></b></h1>
                    <div>
                    {
                        data.map((value,index)=>{
                            return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3"> 
                            <div class="abc" >
                            <div class="card border-success mb-3">
                            <div class="card-body text-success">
                                <p class="card-text">Email :{value.UserID.email}</p>
                                <p class="card-text">Post :{value.complaint}</p>
                            </div>
                            </div>
                        </div>
                        </div>
                        })                            
                    }
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default ViewAllComplaints