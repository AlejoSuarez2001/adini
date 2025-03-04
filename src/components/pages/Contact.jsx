import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import Divider from "../atoms/Divider";
import WhatsAppIcon from "../molecules/WhatsAppIcon";
import CartIcon from "../molecules/CartIcon";
import Footer from "../organisms/Footer";
import ContactSection from "../organisms/ContactSection";

export default function Contact() {

    return (
        <Box>
            <Text
                fontSize={{ base: "2xl", lg: "3xl" }}
                color={"#1a365d"}
                fontWeight={"bold"}
                textAlign={"center"}
                mt={12}
                mb={0}
            >
                Contacto
            </Text>
            <Flex flexDirection={"column"} justifyContent={"center"} alignItems={"center"} minHeight={{ base: "400px", md: "500px" }} >
                <ContactSection />
            </Flex>
            <Divider />
            <Footer />
            <CartIcon />
            <WhatsAppIcon position={"fixed"} />
        </Box>
    );
}
