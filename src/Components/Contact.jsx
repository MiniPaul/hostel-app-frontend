import React from 'react'
import HomeNavBar from './HomeNavBar'

const Contact = () => {
  return (
    <div>
        <HomeNavBar/>
        <div className="container">
            <div className="row">
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <div className="card">
                    <img src="https://controlytics.ai/images/Contact.gif" class="card-img-top" alt="..."></img>
                    </div>
                </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <h1><center>Our Address</center></h1>
                    <p><center>Serenenest Ladies Hostel,</center></p>
                    <p><center>Palm Grove Avenue,</center></p>
                    <p><center>Trivandrum, Kerala 695001,</center></p>
                    <p><center>India</center></p>
                    <br></br>
                    <h2><center>Email Id</center></h2>
                    <p><center>serenenesthostel@gmail.com</center></p>
                    <h2><center>Call Us Now</center></h2>
                    <p><center>Main Contact: +91 1234567890</center></p>
                    <p><center>Alternate Contact: +91 9876543210</center></p>
                    <p><center>Emergency Contact: +91 7418529630</center></p>
                    </div>                    
            </div>
        </div>    
        </div>
  )
}

export default Contact