import React from "react";
function Navbar() {
    return (
     <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand fw-bold fs-4" href="#"><i class="bi bi-cart4"></i>Smart Shopping App</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><b>Home</b></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><b>Product</b></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><b>Order</b></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><b>Contact</b></a>
        </li>
      </ul>
      {/* <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <div className="buttons">
      <a href="" className="btn btn-outline-dark">
        <i className="fa fa-sign-in me-1"></i>Login
      </a>
      <a href="" className="btn btn-outline-dark ms-2">
        <i className="fa fa-sign-in me-2"></i>Register
      </a>
      <a href="" className="btn btn-outline-dark ms-2">
        <i className="fa fa-shopping-cart me-2"></i>Cart
      </a>
      </div>
    </div>
  </div>
</nav>
     </>
    );
  }
  
  export default Navbar;