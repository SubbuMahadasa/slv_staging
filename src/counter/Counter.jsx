import React from "react";
import * as Styles from "./styles";

const Counter = () => {
  return (
    <>
      <Styles.CounterContainer>
        <Styles.CounterRow>
          <Styles.CounterCol>
            <Styles.CounterCol1>
              <Styles.CounterIcon>
                <i class="fa fa-book"></i>
              </Styles.CounterIcon>
              <Styles.CounterNum>55+</Styles.CounterNum>
              <Styles.CounterText>Courses</Styles.CounterText>
            </Styles.CounterCol1>
            <Styles.CounterCol1>
              <Styles.CounterIcon>
                <i class="fa fa-smile-o"></i>
              </Styles.CounterIcon>
              <Styles.CounterNum>100+</Styles.CounterNum>
              <Styles.CounterText>Happy Clients</Styles.CounterText>
            </Styles.CounterCol1>
            <Styles.CounterCol1>
              <Styles.CounterIcon>
                <i class="fa fa-desktop"></i>
              </Styles.CounterIcon>
              <Styles.CounterNum>250+</Styles.CounterNum>
              <Styles.CounterText>Placements</Styles.CounterText>
            </Styles.CounterCol1>
            <Styles.CounterCol1>
              <Styles.CounterIcon>
                <i class="fa fa-server"></i>
              </Styles.CounterIcon>
              <Styles.CounterNum>15+</Styles.CounterNum>
              <Styles.CounterText>Development Projects</Styles.CounterText>
            </Styles.CounterCol1>
          </Styles.CounterCol>
        </Styles.CounterRow>
      </Styles.CounterContainer>
    </>
  );
};

export default Counter;
