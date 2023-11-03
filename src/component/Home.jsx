import React from "react";
import Products from "./Products";
const Home=() =>{
    return (
     <div className="hero" >
    <div class="card bg-dark text-white border-0">
  <img src="image3.webp" class="card-img" alt="Background" height="350px"/>
  <div className="card-img-overlay d-flex flex-column justify-content-centre">
    <div className="container">
    <h5 class="card-title display-3 fw-border mb-0">NEW SEASON ARRIVAL</h5>
    <p class="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
    </div>
  </div>
</div>
<Products/>
     </div>
    );
  }
  
  export default Home;