import React from "react";
import * as Styles from "./styles";
import Banner1 from "../assets/techbanner11.jpg";
import Banner2 from "../assets/techbanner12.jpg";

const Slider = () => {
  return (
    <>
      <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>

        <div class="carousel-inner">
          <div class="item active">
            <Styles.SliderImg
              src={Banner1}
              alt="Los Angeles"
            ></Styles.SliderImg>
          </div>

          <div class="item">
            <Styles.SliderImg
              src={Banner2}
              alt="Los Angeles"
            ></Styles.SliderImg>
          </div>
        </div>

        <a class="left carousel-control" href="#myCarousel" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#myCarousel" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </>
  );
};

export default Slider;
