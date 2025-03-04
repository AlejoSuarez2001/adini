import { Box, Flex, Text, Link, Stack, Divider, Icon } from "@chakra-ui/react";
import { FaInstagram } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

const Footer = () => {
    
    const navigate = useNavigate()

    return (
        <Box bg="#272847" color="white" py={10} pl={5} pr={{ base: 5, md: "90px" }}>
            <Flex
                direction={{ base: "column", md: "row" }}
                justify="space-between"
                align="center"
                mb={6}
            >
                <Text fontSize="xl" fontWeight="bold" mb={{ base: 4, md: 0 }}>
                    {information?.name ? information.name : "Paso a Paso"}
                </Text>

                <Divider display={{ md: "none" }} borderColor="gray.600" />

                <Stack direction={{ base: "column", md: "row" }} spacing={6} textAlign={{ base: "center", md: "left" }}>
                    <Link onClick={() => navigate("/contacto")} _hover={{ textDecoration: "none", color: "gray.300" }}>
                        Contacto
                    </Link>
                    <Link onClick={() => navigate("/nosotros")} _hover={{ textDecoration: "none", color: "gray.300" }}>
                        Sobre Nosotros
                    </Link>
                    <Link
                        _hover={{ textDecoration: "none", color: "gray.300" }}
                        href={information?.email ? `mailto:${information.email}` : undefined}
                    >
                        {information?.email ? information.email : ""}
                    </Link>
                    <Link href={information?.instagram ? information.instagram : "https://www.instagram.com/"} isExternal>
                        <Icon as={FaInstagram} w={5} h={5} _hover={{ color: "gray.300" }} />
                    </Link>
                </Stack>
            </Flex>

            <Divider borderColor="gray.600" />

            <Flex
                direction={{ base: "column", md: "row" }}
                justify="space-between"
                align="center"
                mt={6}
            >
                <Text fontSize="sm" textAlign={{ base: "center", md: "left" }} mb={{ base: 4, md: 0 }}>
                    © {new Date().getFullYear()} {information?.name}. Todos los derechos reservados.
                </Text>
            </Flex>
        </Box>
    );
};

export default Footer;
