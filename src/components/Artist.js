import React from "react";
import CreatorCard from "./CreatorCard";
import creator1 from "../assets/creator1.png";
import creator2 from "../assets/creator2.png";
import creator3 from "../assets/creator3.png";
 function Artist() {
  
  const data = [
    {
      image: creator1,
      name: "Joey",
      position: "First",
      
    },
    {
      image: creator2,
      name: "Alex",
      position: "Second",
      
    },
    {
      image: creator3,
      name: "Andy",
      position: "Third",
      
    },
    
  ];

  return (
    <div className="trending">
      <div className="title-container">
        <h2 className="title">Top Creators</h2>
       
      </div>
      <div className="cards">
        {data.map(({ image, name,position  }, index) => (
          <CreatorCard
            image={image}
            name={name}
            position={position}
            
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
export default Artist;
