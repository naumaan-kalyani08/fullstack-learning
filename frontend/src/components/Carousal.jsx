import React from "react";
import { Carousel } from "antd";

const ReusableCarousel = () => {
  return (
    <div className="h-70 bg-red-200">
      <Carousel autoplay>
        <div className="h-70 bg-gray-200">
          <h3>Slide 1</h3>
        </div>
        <div className="h-70 bg-gray-300">
          <h3>Slide 2</h3>
        </div>
        <div className="h-70 bg-gray-400">
          <h3>Slide 3</h3>
        </div>
        <div className="h-70 bg-gray-500">
          <h3>Slide 4</h3>
        </div>
      </Carousel>
    </div>
  );
};

export default ReusableCarousel;
