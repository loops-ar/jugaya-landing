import React from "react";
import ContactSection from "./components/ContactSection/ContactSection";
import Container from "./components/Container/Container";
import FeaturesSection from "./components/FeaturesSection/FeaturesSection";
import MainSection from "./components/MainSection/MainSection";

function App() {
  return (
    <Container>
      <MainSection></MainSection>
      <FeaturesSection></FeaturesSection>
      <ContactSection></ContactSection>
    </Container>
  );
}

export default App;
