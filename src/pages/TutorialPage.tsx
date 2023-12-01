import React, { useState } from "react";
import Header from "../components/Header/Header";
import TutorialLayout from "../components/TutorialLayout/TutorialLayout";
import Container from "../components/Container/Container";
import Title from "../components/Title/Title";
import CardTutorial from "../components/CardTutorial/CardTutorial";
import ContactSection from "../components/ContactSection/ContactSection";

const TutorialPage = () => {
  return (
    <TutorialLayout>
      <Container>
        <TutorialLayout.Header>
          <Header />
        </TutorialLayout.Header>
        <TutorialLayout.Title>
          <Title>Tutorial</Title>
        </TutorialLayout.Title>
        <TutorialLayout.CardContainer>
          <CardTutorial
            onClick={() => console.log("click")}
            title="Crear y modificar turnos"
            userType="admin"
            items={[
              "Cargar turnos pedidos fuera de la App",
              "Crear turnos fijos",
              "Eliminar turnos existentes",
              "Usar el calendario de turnos",
            ]}
          />
          <CardTutorial
            onClick={() => console.log("click")}
            title="Aceptar o rechazar turnos"
            userType="admin"
            items={[
              "Encontrar los turnos pendientes",
              "Aceptar o rechazar turnos",
              "Ver datos de contacto los jugadores",
            ]}
          />
          <CardTutorial
            onClick={() => console.log("click")}
            title="Modificar tu datos"
            userType="user"
            items={[
              "Configurar tu nombre",
              "Configurar tu numero de teléfono",
              "Ver datos de contacto los jugadores",
              "Habilitar o deshabilitar las notificaciones",
            ]}
          />
          <CardTutorial
            onClick={() => console.log("click")}
            title="Reservar turnos"
            userType="user"
            items={[
              "Crear tu cuenta en JugaYa",
              "Buscar clubes por ciudad/deporte",
              "Reservar turnos",
              "Ver estado de las reservas",
            ]}
          />
        </TutorialLayout.CardContainer>

        <ContactSection></ContactSection>
      </Container>
    </TutorialLayout>
  );
};

export default TutorialPage;
