import React from 'react'
import { Link } from 'react-router-dom'

const HomeNavBar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-secondary">
  <div className="container-fluid">
  <a class="navbar-brand" href="#">
      <img  src="https://i.etsystatic.com/9277560/r/il/fa6ea2/2460108844/il_1080xN.2460108844_qf6r.jpg" alt="Logo" width="30" height="30" class="d-inline-block align-text-top"></img>
      </a><b>SereneNest Hostel</b>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Log in</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
<br/>
    </div>
  )
}

export default HomeNavBar