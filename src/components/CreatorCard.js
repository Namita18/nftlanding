import React from "react";
export default function CreatorCard({ image, name, position }) {
  return (
    <div className="Creatorcard">
      <div className="creator-card-image">
        <img src={image} alt="super1" />
      </div>
      <div className="Creatorcard-content">
        <div className="Creatorcard-heading">
          <span className="Creatorcard-series">{position}</span>
          <span className="Creatorcard-top"></span>
        </div>
        <div className="Creatorcard-details">
          <h4 className="Creatorcard-title">{name}</h4>
          <div className="Creatorcard-price">
          </div>
        </div>
        <div className="Creatorcard-sub-details">
          <button> More</button>
        </div>
      </div>
    </div>
  );
}
