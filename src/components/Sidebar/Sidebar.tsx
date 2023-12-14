import React, { useState } from "react";
import {
  StyledSidebar,
  StyledSidebarIcon,
  StyledSidebarMenuButton,
  StyledSidebarMenuButtonLink,
  StyledSidebarMenuContainer,
} from "./Sidebar.styles";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <StyledSidebar onClick={() => setIsOpen(!isOpen)}>
      <StyledSidebarIcon src="lista.svg"></StyledSidebarIcon>
      <StyledSidebarMenuContainer isOpen={isOpen}>
        <StyledSidebarMenuButton
          onClick={() => {
            navigate("/");
          }}
        >
          Inicio
        </StyledSidebarMenuButton>
        <StyledSidebarMenuButtonLink
          onClick={() => {
            navigate("/#features");
          }}
        >
          Características
        </StyledSidebarMenuButtonLink>
        <StyledSidebarMenuButtonLink
          onClick={() => {
            navigate("/#price");
          }}
        >
          Precios
        </StyledSidebarMenuButtonLink>
        <StyledSidebarMenuButton
          onClick={() => {
            setIsOpen(false);
            navigate("/tutorial");
          }}
        >
          Tutoriales
        </StyledSidebarMenuButton>
        <StyledSidebarMenuButtonLink
          onClick={() => {
            navigate("#contact");
          }}
        >
          Contacto
        </StyledSidebarMenuButtonLink>
      </StyledSidebarMenuContainer>
    </StyledSidebar>
  );
};

export default Sidebar;
