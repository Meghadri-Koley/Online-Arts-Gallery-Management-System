import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loading" id="loading">
      {/* <div></div> */}  
      {/* <h2>Mosaic Ripple<br>Loading Animation</h2> */}
      <div class="mosaic-loader">
        <div class="cell d-0"></div>
        <div class="cell d-1"></div>
        <div class="cell d-2"></div>
        <div class="cell d-3"></div>
        <div class="cell d-1"></div>
        <div class="cell d-2"></div>
        <div class="cell d-3"></div>
        <div class="cell d-4"></div>
        <div class="cell d-2"></div>
        <div class="cell d-3"></div>
        <div class="cell d-4"></div>
        <div class="cell d-5"></div>
        <div class="cell d-3"></div>
        <div class="cell d-4"></div>
        <div class="cell d-5"></div>
        <div class="cell d-6"></div>
      </div>
    </div>
    // <div class="preloader">
    //   <div class="preloader__square"></div>
    //   <div class="preloader__square"></div>
    //   <div class="preloader__square"></div>
    //   <div class="preloader__square"></div>
    // </div>
  );
};

export default Loader;
