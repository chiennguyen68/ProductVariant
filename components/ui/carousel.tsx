// components/Carousel.js
import React from "react";
import { Carousel } from "shacdnUI";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Carousel {...settings}>
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn8sZtI7wrlEfa49bSTN5a3uk8b4twPve8nA&usqp=CAU"
          alt="Slide 1"
          className="w-full"
        />
      </div>
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn8sZtI7wrlEfa49bSTN5a3uk8b4twPve8nA&usqp=CAU"
          alt="Slide 2"
          className="w-full"
        />
      </div>
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn8sZtI7wrlEfa49bSTN5a3uk8b4twPve8nA&usqp=CAU"
          alt="Slide 3"
          className="w-full"
        />
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
