import React, { useState } from "react";
import * as Styles from "./styles";
import Logo from "../../assets/logo.png";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Styles.TopHeadContainer>
        <Styles.TopHeadRow>
          <Styles.TopHeadCol>
            <Styles.TopHeadCol1>
              <Styles.LogoArea src={Logo}></Styles.LogoArea>
            </Styles.TopHeadCol1>

            <Styles.TopHeadCol3>
              <Styles.TopHeadColSub>
                {menuOpen ? (
                  <i class="fa fa-close" onClick={() => setMenuOpen(false)}></i>
                ) : (
                  <i class="fa fa-bars" onClick={() => setMenuOpen(true)}></i>
                )}
              </Styles.TopHeadColSub>
            </Styles.TopHeadCol3>
            <Styles.TopHeadCol2>
              <Styles.Col2ul>
                <Styles.Nav1>HOME</Styles.Nav1>
                <Styles.Nav1>ABOUT</Styles.Nav1>
                <Styles.Nav1>IT TRAINING</Styles.Nav1>
                <Styles.Nav1>PROJECT SUPPORT</Styles.Nav1>
                <Styles.Nav1>PLACEMENTS</Styles.Nav1>
                <Styles.Nav1>WEB DEVELOPMENT</Styles.Nav1>
                <Styles.Nav1>CONTACT</Styles.Nav1>
              </Styles.Col2ul>
            </Styles.TopHeadCol2>
          </Styles.TopHeadCol>
          {menuOpen && (
            <Styles.MobMenu>
              <Styles.Nav1>HOME</Styles.Nav1>
              <Styles.Nav1>ABOUT</Styles.Nav1>
              <Styles.Nav1>IT TRAINING</Styles.Nav1>
              <Styles.Nav1>PROJECT SUPPORT</Styles.Nav1>
              <Styles.Nav1>PLACEMENTS</Styles.Nav1>
              <Styles.Nav1>WEB DEVELOPMENT</Styles.Nav1>
              <Styles.Nav1>CONTACT</Styles.Nav1>
            </Styles.MobMenu>
          )}
        </Styles.TopHeadRow>
      </Styles.TopHeadContainer>
    </>
  );
};

export default NavBar;
