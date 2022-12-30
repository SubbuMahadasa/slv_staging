import React from "react";
import * as Styles from "./styles";
import Banner1 from "../assets/customer-1.png";

const Testimonials = () => {
  return (
    <>
      <Styles.TestimonialsHead>WHAT CLIENT’S SAY</Styles.TestimonialsHead>
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
            <Styles.SliderDesc>
              The course was an excellent opportunity to review & discuss each
              of the knowledge areas. Mike shows a genuine interest in the
              groups success & really makes an effort for the team. I am very
              happy to have mike as a facilitator & a subject matter expert.
              Great stories
            </Styles.SliderDesc>
          </div>

          <div class="item">
            <Styles.SliderImg
              src={Banner1}
              alt="Los Angeles"
            ></Styles.SliderImg>
            <Styles.SliderDesc>
              It is amazing how well can the instructor explains all the
              concepts, liked the structure of the training. We received all the
              content, and attention was given to all the students.
            </Styles.SliderDesc>
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

export default Testimonials;
