import { Box, Button, Flex, Text, IconButton, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, VStack } from "@chakra-ui/react";
import { FaArrowRight, FaBars } from "react-icons/fa";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = 120;
      const top = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({
        top: top,
        behavior: "smooth",
      });
      onClose();
    }
  };

  return (
    <Box position="sticky" w="100%" height="auto" zIndex={10} top={0} bg="white">
      <Flex justifyContent="space-between" alignItems="center" py={{ base: 3, lg: 4 }} px={{ base: "30px", lg: "70px" }} boxShadow="md" borderTop="1.75px solid #071e37">
        <Box>
          <Text my={0} fontSize="28px" color="#4d45d6" fontFamily="Poppins, sans-serif">
            Adini
          </Text>
        </Box>

        <Flex display={{ base: "none", lg: "flex" }} gap={12} fontSize="md">
          {['inicio', 'servicios', 'tecnologias', 'proyectos', 'nosotros'].map((section) => (
            <Text key={section} as="button" onClick={() => scrollToSection(section)} p="8px" _hover={{ color: "tertiary.500", cursor: "pointer" }}>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Text>
          ))}
        </Flex>

        <Button
          display={{ base: "none", lg: "flex" }}
          rightIcon={<FaArrowRight />}
          variant="solid"
          bg="tertiary.500"
          color="secondary.500"
          fontSize="md"
          _hover={{ transform: "scale(1.05)", bg: "#5548e6" }}
          onClick={() => scrollToSection("contacto")}
        >
          Contáctanos
        </Button>

        <IconButton
          display={{ base: "flex", lg: "none" }}
          icon={<FaBars />}
          variant="ghost"
          aria-label="Open Menu"
          onClick={onOpen}
          fontSize="22px"
        />

        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menú</DrawerHeader>
            <DrawerBody>
              <VStack spacing={4} align="start">
                {['inicio', 'servicios', 'tecnologias', 'proyectos', 'nosotros', 'contacto'].map((section) => (
                  <Text key={section} as="button" onClick={() => scrollToSection(section)} fontSize="lg" _hover={{ color: "tertiary.500", cursor: "pointer" }}>
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </Text>
                ))}
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  );
}