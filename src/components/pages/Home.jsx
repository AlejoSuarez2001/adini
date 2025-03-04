import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import Divider from "../atoms/Divider";
import Header from "../organisms/Header";
import Banner from "../organisms/Banner";
import WhatsAppIcon from "../molecules/WhatsAppIcon";

export default function Home() {
  const [isWhatsAppVisible, setIsWhatsAppVisible] = useState(false);

  const handleScroll = () => {
    const homeBanner = document.getElementById("homeBanner");
    if (homeBanner) {
      const { bottom } = homeBanner.getBoundingClientRect();
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
      <Box id="homeBanner">
        <Banner />
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
