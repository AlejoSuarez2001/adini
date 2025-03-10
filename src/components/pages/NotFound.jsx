import React from "react";
import { Flex, Button, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      h="100vh"
      w="100vw"
      p={3}
    >
      <Text my={0} fontSize="5xl" color="#4d45d6" fontFamily="Poppins, sans-serif">
        Adini
      </Text>
      <h2 style={{ textAlign: "center" }}>404 - Página No Encontrada</h2>
      <p style={{ textAlign: "center" }}>
        Lo sentimos, no hemos podido encontrar la página que buscas.
      </p>
      <Button
        variant="solid"
        bg="tertiary.500"
        color="secondary.500"
        fontSize="md"
        _hover={{ transform: "scale(1.05)", bg: "#5548e6" }}
        onClick={goHome}
      >
        Volver al Inicio
      </Button>
    </Flex>
  );
}
