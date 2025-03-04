import React from "react";
import { Flex, Heading, Box, Button } from "@chakra-ui/react";
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
      <Heading as="h1" fontSize={48} font color="primary">
        {information?.name}
      </Heading>
      <h2>404 - Página No Encontrada</h2>
      <p style={{ textAlign: "center" }}>
        Lo sentimos, no hemos podido encontrar la página que buscas.
      </p>
      <Button
        bg="gray.600"
        color="white"
        fontSize={{ base: "sm", md: "md" }}
        _hover={{ bg: "gray.700" }}
        mt={1}
        onClick={goHome}
      >
        Volver al Inicio
      </Button>
    </Flex>
  );
}
