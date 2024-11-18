import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../images/one.jpg";
import slide2 from "../images/two.jpg";
import slide3 from "../images/three.jpg";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    { id: 1, image: slide1, alt: "Slide 1" },
    { id: 2, image: slide2, alt: "Slide 2" },
    { id: 3, image: slide3, alt: "Slide 3" },
  ];

  return (
    <Slider {...settings} className="my-4">
      {slides.map((slide) => (
        <div key={slide.id}>
          <img src={slide.image} alt={slide.alt} className="w-full h-64 object-cover" />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
