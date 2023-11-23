import React, { Component } from "react";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "230px",
      slidesToShow: 1,
      speed: 500,
      arrows: true,
    };
    const t = [1, 2, 3, 4, 5, 6, 7];
    return (
      <div>
        <h2>Center Mode</h2>
        <Slider {...settings}>
          {t.map((num, index) => {
            return (
              <div className="bg-sky-500 px-2 py-3" key={index}>
                <h3 className="bg-teal-400">{num}</h3>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
