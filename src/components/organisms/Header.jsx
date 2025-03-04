import { Link, Box, Button, Flex, Text } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

export default function Header() {

  return (
    <>
      <Box position={"sticky"} w={"100%"} height={"auto"} zIndex={10} top={0} bg={"white"}>
        <Flex justifyContent={"space-between"} alignItems={"center"} py={4} px={{ base: "30px", lg: "70px" }} boxShadow="md" borderTop={"1.75px solid #4d45d6"} >
          <Box>
            <Text my={0} fontSize="28px" color="#4d45d6" fontFamily="Poppins, sans-serif">
              Adini
            </Text>
          </Box>

          <Flex gap={12} fontSize="md">
            <Link href="#inicio" p={"8px"} _hover={{ color: "tertiary.500" }}>Inicio</Link>
            <Link href="#servicios" p={"8px"} _hover={{ color: "tertiary.500" }}>Servicios</Link>
            <Link href="#proyectos" p={"8px"} _hover={{ color: "tertiary.500" }}>Proyectos</Link>
            <Link href="#tecnologias" p={"8px"} _hover={{ color: "tertiary.500" }}>Tecnologías</Link>
            <Link href="#equipo" p={"8px"} _hover={{ color: "tertiary.500" }}>Nuestro Equipo</Link>
          </Flex>

          <a href="#contacto">
            <Button
              rightIcon={<FaArrowRight />}
              variant="solid"
              bg="tertiary.500"
              color="secondary.500"
              fontSize="md"
              _hover={{
                transform: "scale(1.05)",
                bg: "#5548e6",
              }}
            >
              Contáctanos
            </Button>
          </a>
        </Flex>
      </Box>
    </>
  );
}
