import styled from "styled-components";

export const CardContainer = styled.div`
  
`;

export const CardRow = styled.div`
  margin-bottom : 40px;
`;

export const CardCol = styled.div`

 @media (min-width: 768px) {
    display : grid;
  grid-template-columns: repeat(4, 1fr);
  align-items : center;
  }
  
`;

export const CardCol1 = styled.div`

`;
export const CardTitle = styled.p`
margin-top : 15px;
font-size : 18px;
font-family : poppins;
font-weight : 700;
`;


export const CardArea = styled.p`
    margin-top : 15px;
  text-align : center;
`;

export const CardDesc = styled.p`
    margin-top : 7px;
    text-align : center;
    padding: 18px;
    color: #666666;
    font-weight: 400;
    font-size: 15px;
    line-height: 28px;
    font-family : poppins;
`;

export const Readmore = styled.p`
    width: 40%;
    color: #fff;
    background: #000;
    margin: 0px auto;
    padding: 8px;
`;



export const CardHead = styled.p`
    margin : 15px;
  text-align : center;
  font-size : 25px;
font-family : poppins;
font-weight : 900;
`;


export const CardsInfo = styled.p`
text-align : center;
font-family : poppins;
width : 50%;
margin : 0px auto;
      font-style: normal;
    font-size: 15px;
    line-height: 29px;
    font-weight: 300;
    color: #555;
`;

export const CardImg = styled.img`
  
`;
