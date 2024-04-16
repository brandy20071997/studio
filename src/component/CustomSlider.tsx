import React from "react";
import Slider from "react-slick";
import GeneralCards from "./Cards";

export default function CustomSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
   
    className: "slider-container",
 
    slide: "slide-item"
  };
  return (
    <div className="m-5 p-5">
      <h1 className="CF">POPULAR <br/> RECIPES</h1>
      <Slider {...settings} >
      <div>
        <h3><GeneralCards/></h3>
      </div>
      <div>
        <h3><GeneralCards/></h3>
      </div>
      <div>
        <h3><GeneralCards/></h3>
      </div>
      <div>
        <h3><GeneralCards/></h3>
      </div>
      <div>
        <h3><GeneralCards/></h3>
      </div>
      <div>
        <h3><GeneralCards/></h3>
      </div>
    </Slider>

    </div>
    
  )
}