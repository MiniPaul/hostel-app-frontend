import React, { useEffect, useState } from 'react';
import HostelerNavBar from './HostelerNavBar';
import axios from 'axios';

const ViewMyProfile = () => {
    const [userData, setUserData] = useState({
        Name: '',
        Phno: '',
        email: '',
        address: '',
        father: '',
        mother: '',
        pcontact: '',
        pemail: '',
        RoomNo: ''
    });

    useEffect(() => {
        const getdata = async () => {
            try {
                const ID = sessionStorage.getItem("userid");
                const response = await axios.post("http://localhost:3001/api/hostel/myprofile", { _id: ID });
                console.log("User Data is : ", response.data);
                setUserData(response.data); 
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        getdata();
    }, []);

    return (
        <div>
            <HostelerNavBar />
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <h1><b><center>My Profile</center></b></h1>
                            <table className="table table-success table-striped">
                                <tbody>
                                    <tr>
                                        <td>Name</td>
                                        <td>{userData.Name}</td>
                                    </tr>
                                    <tr>
                                        <td>Phone No.</td>
                                        <td>{userData.Phno}</td>
                                    </tr>
                                    <tr>
                                        <td>Email</td>
                                        <td>{userData.email}</td>
                                    </tr>
                                    <tr>
                                        <td>Address</td>
                                        <td>{userData.address}</td>
                                    </tr>
                                    <tr>
                                        <td>Father</td>
                                        <td>{userData.father}</td>
                                    </tr>
                                    <tr>
                                        <td>Mother</td>
                                        <td>{userData.mother}</td>
                                    </tr>
                                    <tr>
                                        <td>Parent Contact</td>
                                        <td>{userData.pcontact}</td>
                                    </tr>
                                    <tr>
                                        <td>Parent Email</td>
                                        <td>{userData.pemail}</td>
                                    </tr>
                                    <tr>
                                        <td>Room No.</td>
                                        <td>{userData.RoomNo}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewMyProfile;
