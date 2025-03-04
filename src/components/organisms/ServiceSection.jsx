import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { FaShoppingBasket, FaHeadset, FaTruck, FaStar, FaIndustry } from "react-icons/fa";

const ServiceSection = () => {
    return (
        <Box
            bg="#272847"
            h="auto"
            display="flex"
            justifyContent="center"
            alignItems="center"
            py={{ base: 10, md: 45 }}
            px={5}
        >
            <Flex
                justifyContent="center"
                alignItems="center"
                gap={10}
                wrap="wrap"
                maxW="1200px"
                mx="auto"
            >
                <Flex direction="column" align="center" color="white">
                    <Icon as={FaShoppingBasket} boxSize={10} />
                    <Text fontSize={{ base: "xs", md: "sm" }} mt={3}>Stock de Productos</Text>
                </Flex>
                <Flex direction="column" align="center" color="white">
                    <Icon as={FaHeadset} boxSize={10} />
                    <Text fontSize={{ base: "xs", md: "sm" }} mt={3}>Atención al Cliente</Text>
                </Flex>
                <Flex direction="column" align="center" color="white">
                    <Icon as={FaTruck} boxSize={10} />
                    <Text fontSize={{ base: "xs", md: "sm" }} mt={3}>Distribución y Logística</Text>
                </Flex>
                <Flex direction="column" align="center" color="white">
                    <Icon as={FaStar} boxSize={10} />
                    <Text fontSize={{ base: "xs", md: "sm" }} mt={3}>Productos de Alta Calidad</Text>
                </Flex>
                <Flex direction="column" align="center" color="white">
                    <Icon as={FaIndustry} boxSize={10} />
                    <Text fontSize={{ base: "xs", md: "sm" }} mt={3}>Infraestructura Óptima</Text>
                </Flex>
            </Flex>
        </Box>
    );
};

export default ServiceSection;
