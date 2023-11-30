import React from "react";
import MainSection from "../components/MainSection/MainSection";
import FeaturesSection from "../components/FeaturesSection/FeaturesSection";
import PriceSection from "../components/PriceSection/PriceSection";
import ContactSection from "../components/ContactSection/ContactSection";

const HomePage = () => {
  return (
    <>
      <MainSection></MainSection>
      <FeaturesSection></FeaturesSection>
      <PriceSection></PriceSection>
      <ContactSection></ContactSection>
    </>
  );
};

export default HomePage;
