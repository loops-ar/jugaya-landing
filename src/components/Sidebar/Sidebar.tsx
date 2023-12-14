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
    <StyledSidebar>
      <StyledSidebarIcon
        src="lista.svg"
        onClick={() => setIsOpen(!isOpen)}
      ></StyledSidebarIcon>
      <StyledSidebarMenuContainer isOpen={isOpen}>
        <StyledSidebarMenuButton onClick={() => navigate("/")}>
          Inicio
        </StyledSidebarMenuButton>
        <StyledSidebarMenuButton
          onClick={() => {
            navigate("/tutorial");
          }}
        >
          Tutorial
        </StyledSidebarMenuButton>
        {window.location.pathname === "/" ? (
          <>
            <StyledSidebarMenuButtonLink
              as="a"
              href="#features"
              onClick={() => setIsOpen(!isOpen)}
            >
              Características
            </StyledSidebarMenuButtonLink>
          </>
        ) : null}
        <StyledSidebarMenuButtonLink
          as="a"
          href="#contact"
          onClick={() => setIsOpen(!isOpen)}
        >
          Contactos
        </StyledSidebarMenuButtonLink>
      </StyledSidebarMenuContainer>
    </StyledSidebar>
  );
};

export default Sidebar;
