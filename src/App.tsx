import React from "react";
import ContactSection from "./components/ContactSection/ContactSection";
import FeaturesSection from "./components/FeaturesSection/FeaturesSection";
import MainSection from "./components/MainSection/MainSection";

function App() {
  return (
    <>
      <img src="/img/phone-1.png" alt="logo" />
      <MainSection></MainSection>
      <FeaturesSection></FeaturesSection>
      <ContactSection></ContactSection>
    </>
  );
}

export default App;
