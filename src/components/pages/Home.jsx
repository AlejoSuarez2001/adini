import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import Divider from "../atoms/Divider";
import Header from "../organisms/Header";
import Banner from "../organisms/Banner";
import Services from "../organisms/Services";
import Technologies from "../organisms/Technologies";
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
    <Box>
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

      <Divider />

      <Divider />

      <Divider />

      <Divider />

      <Divider />

      <Divider />
      <Box h={"1000px"}></Box>
      {isWhatsAppVisible && <WhatsAppIcon position={"fixed"} />}
    </Box>
  );
}
