import React from "react";
import Header from "../components/Header/Header";
import TutorialLayout from "../components/TutorialLayout/TutorialLayout";
import Container from "../components/Container/Container";
import Title from "../components/Title/Title";
import CardTutorial from "../components/CardTutorial/CardTutorial";

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
            title="Crear y modificar turnos"
            userType="admin"
            items={[
              "Cargar turnos pedidos fuera de la App",
              "Crear turnos fijos",
              "Eliminar turnos existentes",
              "Usar el calendario de turnos",
            ]}
          />
        </TutorialLayout.CardContainer>
      </Container>
    </TutorialLayout>
  );
};

export default TutorialPage;
