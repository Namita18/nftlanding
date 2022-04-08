import React from "react";
import home from "../assets/home.png";
export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="content">
          <h1 className="title">Create, Sell & Collect your Own Creative NFT</h1>
          <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="homebtn">
          <button>Sign Up</button>

          <button>Create NFT</button></div>
          <div className="homedes">
          <span > <strong>  +32k Users</strong> </span>
          
           <span > <strong>  +20k Buyers</strong> </span>
        
           </div>
           
        </div>
        <div className="image-container">
          <div className="image">
            <img src={home} alt="home image" />
          </div>
          
        </div>
      </div>
    </div>
  );
}
