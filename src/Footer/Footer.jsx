import React from "react";
import * as Styles from "./styles";

const Footer = () => {
  return (
    <>
      <Styles.FooterContainer>
        <Styles.FooterRow>
          <Styles.FooterCol>
            <Styles.FooterCol1>
              <Styles.FooterColHead> ABOUT MAGISTER SIGN</Styles.FooterColHead>
              <Styles.FooterDesc>
                Magister sign is a master and leading training runner to
                consistently deliver high-quality training focused on improving
                trainee satisfaction. We are striving continuously for
                excellence in education.
              </Styles.FooterDesc>
              <Styles.FooterIcons>
                <Styles.FooterIcons1>
                  <i class="fa fa-facebook-f"></i>
                </Styles.FooterIcons1>
                <Styles.FooterIcons1>
                  <i class="fa fa-linkedin"></i>
                </Styles.FooterIcons1>
                <Styles.FooterIcons1>
                  <i class="fa fa-twitter"></i>
                </Styles.FooterIcons1>
              </Styles.FooterIcons>
            </Styles.FooterCol1>
            <Styles.FooterCol1>
              <Styles.FooterColHead> CONTACT</Styles.FooterColHead>
              <Styles.FooterDesc>
                <b>Phone:</b> + IND : +91-733722 8283 <br />
                <br /> <b>Phone:</b> USA : +1 (732) 984 7078 <br />
                <br />
                <b>Email:</b> : krishna@magistersign.com
              </Styles.FooterDesc>
            </Styles.FooterCol1>
            <Styles.FooterCol1>
              <Styles.FooterColHead> NEWSLETTER</Styles.FooterColHead>
              <Styles.FooterDesc>
                Please subscribe to our Newsletter for more information
                regarding Trainings, Support and Placement services.
              </Styles.FooterDesc>
            </Styles.FooterCol1>
          </Styles.FooterCol>
          <Styles.CopyrightArea>
            ©2017. Magister Sign All rights reserved.
          </Styles.CopyrightArea>
        </Styles.FooterRow>
      </Styles.FooterContainer>
    </>
  );
};

export default Footer;
