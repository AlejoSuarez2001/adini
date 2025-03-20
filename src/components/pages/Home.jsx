import React, { useEffect, useState } from "react";
import { Box, Button } from "@chakra-ui/react";
import Header from "../organisms/Header";
import Banner from "../organisms/Banner";
import Services from "../organisms/Services";
import Technologies from "../organisms/Technologies";
import AboutUs from "../organisms/AboutUs";
import Contact from "../organisms/Contact";
import Portfolio from "../organisms/Portfolio";
import Footer from "../organisms/Footer";
import WhatsAppIcon from "../molecules/WhatsAppIcon";
import { useTranslation } from "react-i18next";

export default function Home() {
  const [isWhatsAppVisible, setIsWhatsAppVisible] = useState(false);
  const { t, i18n } = useTranslation();

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

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "es" : "en");
  };

  return (
    <>
      <Header />
      <Box bg={"quarter.500"} overflowX={"hidden"}>
        <Box id="inicio">
          <Banner />
        </Box>
        <Box>
          <Button mt={4} colorScheme="blue" onClick={changeLanguage}>
            {t("button")}
          </Button>
        </Box>
        <Box id="servicios">
          <Services />
        </Box>
        <Box id="tecnologías">
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
    </>
  );
}
