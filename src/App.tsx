import React from "react";
import ContactSection from "./components/ContactSection/ContactSection";
import FeaturesSection from "./components/FeaturesSection/FeaturesSection";
import MainSection from "./components/MainSection/MainSection";
import PriceSection from "./components/PriceSection/PriceSection";

function App() {
  return (
    <>
      <MainSection></MainSection>
      <FeaturesSection></FeaturesSection>
      <PriceSection></PriceSection>
      <ContactSection></ContactSection>
    </>
  );
}

export default App;
