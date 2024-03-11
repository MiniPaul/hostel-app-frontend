import React from 'react'

const AdminNavBar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-info">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/addhosteler">Add Hosteler</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="allcomplaint">View Complaints</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="viewall">View Hostelers</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/admin">LogOut</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default AdminNavBar