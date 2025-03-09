import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import Header from "../organisms/Header";
import Banner from "../organisms/Banner";
import Services from "../organisms/Services";
import Technologies from "../organisms/Technologies";
import AboutUs from "../organisms/AboutUs";
import Contact from "../organisms/Contact";
import Portfolio from "../organisms/Portfolio";
import Footer from "../organisms/Footer";
import WhatsAppIcon from "../molecules/WhatsAppIcon";

export default function Home() {
  const [isWhatsAppVisible, setIsWhatsAppVisible] = useState(false);

  const handleScroll = () => {
    const inicio = document.getElementById("inicio");
    if (inicio) {
      const { bottom } = inicio.getBoundingClientRect();
      setIsWhatsAppVisible(bottom < 0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box bg={"quarter.500"}>
      <Header />
      <Box id="inicio">
        <Banner />
      </Box>
      <Box id="servicios">
        <Services />
      </Box>
      <Box id="tecnologias">
        <Technologies />
      </Box>
      <Box id="proyectos">
        <Portfolio />
      </Box>
      <Box id="contacto">
        <Contact />
      </Box>
      <Box id="nosotros">
        <AboutUs />
      </Box>
      <Footer />
      {isWhatsAppVisible && <WhatsAppIcon position={"fixed"} />}
    </Box>
  );
}
