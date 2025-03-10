import { Box, Button, Flex, Text, Divider, IconButton, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, VStack } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

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
        <Box onClick={() => scrollToSection("inicio")} cursor={"pointer"}>
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
          leftIcon={<HiMail />}
          variant="solid"
          bg="tertiary.500"
          color="secondary.500"
          fontSize="md"
          _hover={{ transform: "scale(1.05)", bg: "#5548e6" }}
          onClick={() => scrollToSection("contacto")}
        >
          contacto@adini.com.ar
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
          <DrawerOverlay bg="rgba(0, 0, 0, 0.4)" />
          <DrawerContent bg="white" p={4}>
            <DrawerCloseButton size="lg" color="gray.600" _hover={{ color: "black" }} />
            <DrawerHeader px={6} fontSize="xl" fontWeight="bold" color="gray.700">
              Menú
            </DrawerHeader>

            <Divider opacity={1} mt={2} />

            <DrawerBody>
              <Flex direction="column" justify={"space-between"} h={"100%"}>
                <Flex direction="column" gap={6}>
                  {["inicio", "servicios", "tecnologias", "proyectos", "nosotros"].map((section) => (
                    <Text
                      key={section}
                      as="button"
                      textAlign={"left"}
                      onClick={() => scrollToSection(section)}
                      fontSize="md"
                      fontWeight="medium"
                      color="gray.700"
                      transition="0.3s ease-in-out"
                      _hover={{ color: "tertiary.500", transform: "translateX(5px)" }}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </Text>
                  ))}

                </Flex>
                <Box>
                  <Button
                    leftIcon={<HiMail />}
                    variant="solid"
                    bg="tertiary.500"
                    color="white"
                    fontSize="sm"
                    w="full"
                    p={0}
                    _hover={{ transform: "scale(1.05)", bg: "#5548e6" }}
                    onClick={() => scrollToSection("contacto")}
                  >
                    contacto@adini.com.ar
                  </Button>

                  <Divider opacity={1} />
                  <Flex align={"center"} justify={"center"}>
                    <Text my={0} fontSize="25px" color="#4d45d6" fontFamily="Poppins, sans-serif">
                      Adini
                    </Text>
                  </Flex>
                </Box>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  );
}