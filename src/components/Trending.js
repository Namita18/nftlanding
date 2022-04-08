import React from "react";
import Card from "./Card";
import super1 from "../assets/super1.png";
import super2 from "../assets/super2.png";
import super3 from "../assets/super3.png";
 function Trending(props) {
  
  const data = [
    {
      image: super1,
      series: "Gloop Series",
      title: "Purple Man",
      price: 2.99,
      
    },
    {
      image: super2,
      series: "Gloop Series",
      title: "Beige",
      price: 2.99,
      
    },
    {
      image: super3,
      series: "Gloop Series",
      title: "Red Man",
      price: 2.99,
      
    },
    
  ];

  return (
    <div className="trending">
      <div className="title-container">
        <h2 className="title">Trending</h2>
       
      </div>
      <div className="cards">
        {data.map(({ image, series, title, price,  }, index) => (
          <Card
            image={image}
            series={series}
            title={title}
            price={price}
            
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
export default Trending;
