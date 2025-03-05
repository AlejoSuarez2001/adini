import { Link, Box, Button, Flex, Text } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

export default function Header() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = 120;
      const top = section.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: top,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box position="sticky" w="100%" height="auto" zIndex={10} top={0} bg="white">
      <Flex justifyContent="space-between" alignItems="center" py={4} px={{ base: "30px", lg: "70px" }} boxShadow="md" borderTop="1.75px solid #071e37">
        <Box>
          <Text my={0} fontSize="28px" color="#4d45d6" fontFamily="Poppins, sans-serif">
            Adini
          </Text>
        </Box>

        <Flex gap={12} fontSize="md">
          <Text as="button" onClick={() => scrollToSection("inicio")} p="8px" _hover={{ color: "tertiary.500", cursor: "pointer" }}>Inicio</Text>
          <Text as="button" onClick={() => scrollToSection("servicios")} p="8px" _hover={{ color: "tertiary.500", cursor: "pointer" }}>Servicios</Text>
          <Text as="button" onClick={() => scrollToSection("proyectos")} p="8px" _hover={{ color: "tertiary.500", cursor: "pointer" }}>Proyectos</Text>
          <Text as="button" onClick={() => scrollToSection("tecnologias")} p="8px" _hover={{ color: "tertiary.500", cursor: "pointer" }}>Tecnologías</Text>
          <Text as="button" onClick={() => scrollToSection("equipo")} p="8px" _hover={{ color: "tertiary.500", cursor: "pointer" }}>Nuestro Equipo</Text>
        </Flex>

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
          onClick={() => scrollToSection("contacto")}
        >
          Contáctanos
        </Button>
      </Flex>
    </Box>
  );
}
