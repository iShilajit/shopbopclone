import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../Carousal/Slider.css'
import { itemsData } from "../data/indexdata";

export default class MultipleItemsTwo extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
    return (
      <div className="w-[1000px] m-auto p-[15px]">
        <Slider {...settings}>
          {itemsData.map((endslider) => {
            return (
              <div key={endslider.sid}>
                <div className="mx-[60px] h-[300px]">
                    <div className="w-[224px] h-[224px]">
                        <img src={endslider.itemImg} alt="" />
                    </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}