import React from "react";
import Header from "../components/Header/Header";
import TutorialLayout from "../components/TutorialLayout/TutorialLayout";
import Container from "../components/Container/Container";
import Title from "../components/Title/Title";
import CardTutorial from "../components/CardTutorial/CardTutorial";
import ContactSection from "../components/ContactSection/ContactSection";
import Description from "../components/Description/Description";

const TutorialPage = () => {
  return (
    <TutorialLayout>
      <Container>
        <TutorialLayout.Header>
          <Header />
        </TutorialLayout.Header>
        <TutorialLayout.Title>
          <Title>Tutoriales</Title>
        </TutorialLayout.Title>
        <TutorialLayout.CardContainer>
          <CardTutorial
            link="https://www.youtube.com/watch?v=hrw7Yw31Aos"
            title="Reservar turnos"
            userType="user"
            items={[
              "Crear tu cuenta en JugaYa",
              "Buscar clubes por ciudad/deporte",
              "Reservar turnos",
              "Ver estado de las reservas",
            ]}
          />

          <CardTutorial
            link="https://www.youtube.com/watch?v=IyJLwhSqXhI"
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
            link="https://www.youtube.com/watch?v=r3Xq8xI0rSM"
            title="Aceptar o rechazar turnos"
            userType="admin"
            items={[
              "Encontrar los turnos pendientes",
              "Aceptar o rechazar turnos",
              "Ver datos de contacto los jugadores",
            ]}
          />
          <CardTutorial
            link="https://www.youtube.com/watch?v=2pEJSI_0X9E"
            title="Modificar tu datos"
            userType="user"
            items={[
              "Configurar tu nombre",
              "Configurar tu numero de teléfono",
              "Habilitar o deshabilitar las notificaciones",
            ]}
          />
        </TutorialLayout.CardContainer>
        <TutorialLayout.Contact>
          <Description size="medium">
            <b>¿Necesitas ayuda con otro tema?</b>
          </Description>
          <Description size="small">
            Comunicate con nuestro equipo de soporte por{" "}
            <a
              href="https://api.whatsapp.com/send?phone=5493585754749"
              style={{
                textDecoration: "none",
                color: "#91C301",
                marginRight: "4px",
              }}
            >
              Whatsapp
            </a>
            (+5493585754749)
          </Description>
        </TutorialLayout.Contact>
      </Container>
      <ContactSection></ContactSection>
    </TutorialLayout>
  );
};

export default TutorialPage;
