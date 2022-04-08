import React from "react";
import Card from "./Card";
import art1 from "../assets/art1.png";
import art2 from "../assets/art2.jpg";
import art3 from "../assets/art3.jpg";
 function Trending(props) {
  
  const data = [
    {
      image: art1,
      series: "Gloop Series",
      title: "Purple Man",
      price: 2.99,
      
    },
    {
      image: art2,
      series: "Gloop Series",
      title: "Beige",
      price: 2.99,
      
    },
    {
      image: art3,
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
