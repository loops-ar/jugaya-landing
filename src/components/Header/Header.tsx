import React from "react";
import {
  StyledContainerLinks,
  StyledHeader,
  StyledLink,
  StyledSidebarContainer,
} from "./Header.styles";
import { useNavigate } from "react-router";
import Sidebar from "../Sidebar/Sidebar";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <StyledHeader>
        <img src="/img/logo-black.svg"></img>
        <StyledContainerLinks>
          <StyledLink onClick={() => navigate("/")}>Inicio</StyledLink>
          {window.location.pathname === "/" ? (
            <>
              <StyledLink href="#features">Características</StyledLink>
            </>
          ) : null}
          <StyledLink onClick={() => navigate("/tutorial")}>
            Tutorial
          </StyledLink>
          <StyledLink href="#contact">Contacto</StyledLink>
        </StyledContainerLinks>
      </StyledHeader>
      <StyledSidebarContainer>
        <img src="/img/logo-black.svg"></img>
        <Sidebar></Sidebar>
      </StyledSidebarContainer>
    </>
  );
};

export default Header;
