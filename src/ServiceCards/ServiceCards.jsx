import React from "react";
import * as Styles from "./styles";
import Training from "../assets/training.png";
import Placement from "../assets/placement.png";
import Development from "../assets/development.png";
import Support from "../assets/support.png";

const ServiceCards = () => {
  return (
    <>
      <Styles.CardContainer>
        <Styles.CardRow>
          <Styles.CardHead>OUR CORE FEATURES</Styles.CardHead>
          <Styles.CardsInfo>
            Our Online Training platform helps the fresh students as well as
            those who wish to upskill themselves to move into different domains.
          </Styles.CardsInfo>
          <Styles.CardCol>
            <Styles.CardCol1>
              <Styles.CardArea>
                <Styles.CardImg src={Training} alt="training"></Styles.CardImg>
                <Styles.CardTitle>TRAINING</Styles.CardTitle>
                <Styles.CardDesc>
                  Our training portal reaches out to the individuals who wish to
                  train themselves in the sought-after courses
                </Styles.CardDesc>
                <Styles.Readmore>READ MORE</Styles.Readmore>
              </Styles.CardArea>
            </Styles.CardCol1>
            <Styles.CardCol1>
              <Styles.CardArea>
                <Styles.CardImg src={Placement} alt="training"></Styles.CardImg>
                <Styles.CardTitle>PLACEMENTS</Styles.CardTitle>
                <Styles.CardDesc>
                  We help IT professionals by providing them online Job Support
                  in 99+ technologies.
                </Styles.CardDesc>
                <Styles.Readmore>READ MORE</Styles.Readmore>
              </Styles.CardArea>
            </Styles.CardCol1>
            <Styles.CardCol1>
              <Styles.CardArea>
                <Styles.CardImg
                  src={Development}
                  alt="training"
                ></Styles.CardImg>
                <Styles.CardTitle>DEVELOPMENT</Styles.CardTitle>
                <Styles.CardDesc>
                  Our placement portal finding a suitable job for you to grow on
                  your career.
                </Styles.CardDesc>
                <Styles.Readmore>READ MORE</Styles.Readmore>
              </Styles.CardArea>
            </Styles.CardCol1>
            <Styles.CardCol1>
              <Styles.CardArea>
                <Styles.CardImg src={Support} alt="training"></Styles.CardImg>
                <Styles.CardTitle>SUPPORT</Styles.CardTitle>
                <Styles.CardDesc>
                  A product is one that is 100% error free whereas a software
                  product doesn’t necessarily satisfy this argument
                </Styles.CardDesc>
                <Styles.Readmore>READ MORE</Styles.Readmore>
              </Styles.CardArea>
            </Styles.CardCol1>
          </Styles.CardCol>
        </Styles.CardRow>
      </Styles.CardContainer>
    </>
  );
};

export default ServiceCards;
