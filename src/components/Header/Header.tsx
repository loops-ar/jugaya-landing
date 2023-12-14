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
        <img src="/img/logo-black.svg" alt="logo"></img>
        <StyledContainerLinks>
          <StyledLink onClick={() => navigate("/")}>Inicio</StyledLink>
          <StyledLink onClick={() => navigate("/#features")}>
            Características
          </StyledLink>
          <StyledLink onClick={() => navigate("/#price")}>Precios</StyledLink>
          <StyledLink onClick={() => navigate("/tutorial")}>
            Tutoriales
          </StyledLink>
          <StyledLink onClick={() => navigate("#contact")}>Contacto</StyledLink>
        </StyledContainerLinks>
      </StyledHeader>
      <StyledSidebarContainer>
        <img src="/img/logo-black.svg" alt="logo"></img>
        <Sidebar></Sidebar>
      </StyledSidebarContainer>
    </>
  );
};

export default Header;
