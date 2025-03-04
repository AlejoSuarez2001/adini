import { Box, Flex, Icon, Text, Divider } from "@chakra-ui/react";
import { FaSearch, FaShoppingCart, FaTruck } from "react-icons/fa";

const GuideSection = () => {
    return (
        <Box bg="#272847" py={10} px={5} color="white">
            <Flex justify="center" mb={6}>
                <Text fontSize="lg" fontWeight="bold" textAlign="center">
                    - Proceso de Compra -
                </Text>
            </Flex>

            <Flex flexDirection={{ base: "column", sm: "row" }} gap={1} justify="space-around" align={{ base: "center", sm: "top" }}>
                <Flex direction="column" align="center" flex={1}>
                    <Icon as={FaSearch} boxSize={6} mb={2} />
                    <Text fontWeight="bold" textAlign={"center"}>1. Realizá tu Consulta</Text>
                    <Text fontSize="sm" textAlign="center">
                        Busque y consulte por los productos que le interesan.
                    </Text>
                </Flex>

                <Divider display={{ sm: "none" }} borderColor="gray.600" width={"85%"} />

                <Flex direction="column" align="center" flex={1} mt={{ base: 5, sm: 0 }}>
                    <Icon as={FaShoppingCart} boxSize={6} mb={2} />
                    <Text fontWeight="bold" textAlign={"center"}>2. Gestionamos tu Compra</Text>
                    <Text fontSize="sm" textAlign="center">
                        Le responderemos a la brevedad con la información necesaria.
                    </Text>
                </Flex>

                <Divider display={{ sm: "none" }} borderColor="gray.600" width={"85%"} />

                <Flex direction="column" align="center" flex={1} mt={{ base: 5, sm: 0 }}>
                    <Icon as={FaTruck} boxSize={6} mb={2} />
                    <Text fontWeight="bold" textAlign={"center"}>3. Realizamos el Envío</Text>
                    <Text fontSize="sm" textAlign="center">
                        Recibe los productos en tu destino.
                    </Text>
                </Flex>
            </Flex>
        </Box>
    );
};

export default GuideSection;
