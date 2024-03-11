import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AdminNavBar from './AdminNavBar';

const ViewAllStudent = () => {
    const [hostelers, setHostelers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3001/api/hostel/view");
                console.log("Hosteler's data", response.data);
                setHostelers(response.data);
            } catch (error) {
                console.error("Something went wrong.", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <AdminNavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <br /><br />
                        <h1><b><center>Hosteler's List</center></b></h1>
                        <br /><br />
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>SI No</th>
                                    <th>Name</th>
                                    <th>Phone No.</th>
                                    <th>Email</th>
                                    <th>Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                {hostelers.map((hosteler, index) => (
                                    <tr key={hosteler._id}>
                                        <td>{index + 1}</td>
                                        <td>{hosteler.Name}</td>
                                        <td>{hosteler.Phno}</td>
                                        <td>{hosteler.email}</td>
                                        <td>{hosteler.address}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewAllStudent;
