import styled from "styled-components";
import CounterBg from '../assets/counterbg.jpg';


export const CounterContainer = styled.div`
    padding : 3rem;
    background: url(${CounterBg});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height : auto;
`;

export const CounterRow = styled.div`
`;

export const CounterCol = styled.div`
@media (min-width: 768px) {
    display : grid;
grid-template-columns : repeat(4, 1fr);
align-items : center;
  }



`;

export const CounterCol1 = styled.div`
margin : 25px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  text-align: center;
  background-color: #333;
  color: white;
`;

export const CounterIcon = styled.p`
font-size: 32px;
`;

export const CounterNum = styled.p`
font-size: 22px;
    font-weight: 700;
    font-family: 'Poppins'
`;

export const CounterText = styled.p`
font-size: 18px;
    font-weight: 700;
    font-family: 'Poppins';
    letter-spacing : 1px;
`;