import React from "react";
import * as Styles from "./styles";
import TeamWork from "../assets/teamwork.png";

const AboutUs = () => {
  return (
    <>
      <Styles.AboutUsContainer>
        <Styles.AboutUsRow>
          <Styles.AboutUsCol>
            <Styles.AboutUsCol1>
              <Styles.AboutUsImg
                src={TeamWork}
                alt="teamwork"
              ></Styles.AboutUsImg>
            </Styles.AboutUsCol1>
            <Styles.AboutUsCol1>
              <Styles.AboutHeading>
                ABOUT
                <Styles.HeadSpan>SLV TECHNOLOGIES</Styles.HeadSpan>
              </Styles.AboutHeading>
              <Styles.AboutTxt>About Us</Styles.AboutTxt>
              <Styles.AboutDec>
                We are a team of IT professionals willing to provide online job
                support & online training to the candidates globally who are in
                need and we almost cover more than 99+ courses in IT.
              </Styles.AboutDec>
              <Styles.AboutTxt>Our Vision</Styles.AboutTxt>
              <Styles.AboutDec>
                Magister sign is a master and leading training runner to
                consistently deliver high-quality training focused on improving
                trainee satisfaction.
              </Styles.AboutDec>
              <Styles.AboutTxt>Our Mission</Styles.AboutTxt>
              <Styles.AboutDec>
                Our mission is to deliver skills and knowledge that
                significantly increase our course participants to grow
                themselves.
              </Styles.AboutDec>
            </Styles.AboutUsCol1>
          </Styles.AboutUsCol>
        </Styles.AboutUsRow>
      </Styles.AboutUsContainer>
    </>
  );
};

export default AboutUs;
