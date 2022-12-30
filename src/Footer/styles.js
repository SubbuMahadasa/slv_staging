import styled from "styled-components";

export const FooterContainer = styled.div`
 background : #111;
`;

export const FooterRow = styled.div`

 width: 85%;
    margin: 0px auto;
`;

export const FooterCol = styled.div`

@media (min-width: 768px) {
    display : grid;
 grid-template-columns: repeat(3, 1fr);
align-items : center;
  }

 
`;

export const FooterCol1 = styled.div`
 margin : 0px auto;
 widht : 80%;
 padding-top : 45px;
`;

export const FooterColHead = styled.div`color : #fff;
 letter-spacing : 1px;
 font-weight : 700;
 font-size : 16px;
 font-family : poppins;`;

 export const FooterDesc = styled.div`
 color : #aeaeae;
 letter-spacing : 1px;
 font-size : 12px;
 padding-top : 20px;
 font-family : poppins;`;

  export const FooterIcons = styled.div`
 grid-template-columns: repeat(3,0.1fr);
    display: grid;
padding-top : 10px;
 `;

 export const FooterIcons1 = styled.div`
 background-color: #3B5998;
 margin: 6px;
    background-color: #3B5998;
    border-radius: 49%;
    text-align: center;
    font-size: 18px;
    color: #fff;
 `;

 export const CopyrightArea = styled.div`
 background : #000 !important;
 color : #fff;
 text-align : center;
 margin-top : 25px;
 padding : 10px;
 `;

 