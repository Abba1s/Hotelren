import React from "react";
import first from "../../assets/1.jpg"
import second from "../../assets/2.jpeg"
import third from "../../assets/3.jpg"
import fourth from "../../assets/4.jpg"
import "./featured.css"

const Featured = () => {
  return (
    <>
      <div className="featured">
        <div className="featuredItem">
          <img src={first} alt="" className="featuredImg" />
          <div className="featuredDesc">
            <h3>Karachi</h3>
            <h4>345 Properties</h4>
          </div>
          
        </div>
        <div className="featuredItem">
          <img src={second} alt="" className="featuredImg" />
          <div className="featuredDesc">
            <h3>Lahore</h3>
            <h4>453 Properties</h4>
          </div>
         
        </div>
        <div className="featuredItem">
          <img src={third} alt="" className="featuredImg" />
          <div className="featuredDesc">
            <h3>Peshawar</h3>
            <h4>57 Properties</h4>
          </div>
         
        </div>
      </div>
    </>
  );
};

export default Featured;
