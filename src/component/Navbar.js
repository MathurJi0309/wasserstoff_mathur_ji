
import React from 'react'


export const Navbar = () => {


  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid " >
   <div>
   <a className="navbar-brand" href="#m">
    <img src="data:image/png;base64,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" alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/>
    <span>Wasserstoff</span>
    </a>
   </div>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div>
        <form className="d-flex" role="search">
        <input className="form-control me-2 w-20" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
        </div>
      <div>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#l">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#,">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#k">Link</a>
        </li>

      </ul>
      </div>
     
    </div>
    
  </div>
</nav>
    </div>
  )
}
