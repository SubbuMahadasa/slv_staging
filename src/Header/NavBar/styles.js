import styled from "styled-components";

export const TopHeadContainer = styled.div`
  background-color: #fff;
`;

export const TopHeadRow = styled.div`
 
`;

export const Nav1 = styled.li`
 @media (max-width: 768px) {
  text-align: center;
  line-height: 32px;
  cursor : pointer;
  &:hover {
    color: #fff;
    background : #000;
  }
 }
list-style : none;
 font-family : poppins;
 font-size : 14px;
 color : #000;
 letter-spacing:1px;
 font-weight: 600;
 cursor : pointer;
  &:hover {
    color: #105b72c2;
    
  }
`;



export const LogoArea = styled.img`
`;


export const TopHeadCol = styled.div`
 display : grid;
 grid-template-columns : 4fr 8fr;
 align-items : center;
`;

export const TopHeadCol2 = styled.div`
 
`;

export const TopHeadCol1 = styled.div`
 
`;

export const Col2ul = styled.ul`
 display : flex;
 list-style : none;
 justify-content: space-around;
 align-items: center;

 @media (max-width: 768px) {
    display : none !important;
  }

`;

export const TopHeadCol3 = styled.div`

 @media (min-width: 768px) {
    display : none !important;
  }
`;

export const TopHeadColSub = styled.p`
text-align : center;
font-size : 30px;
`;

export const MobMenu = styled.p`
@media (min-width: 768px) {
    display : none !important;
  }
`;





