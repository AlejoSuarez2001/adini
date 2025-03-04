import { Box, Flex, Text, Image } from "@chakra-ui/react";

const BrandSection = () => {
    return (
        <Flex alignItems="center" justifyContent="center" flexDirection="column" px={{ base: 5, md: "50px", lg: "100px" }}>
            <Box maxW="1200px" borderRadius="lg">
                <Box>
                    <Image
                        borderRadius="lg"
                        src="/assets/brandsResponsive.png"
                        alt="Portada"
                        objectFit="cover"
                        w="100%"
                        h="auto"
                        display={{ base: "block", md: "none" }}
                    />
                    <Image
                        borderRadius="lg"
                        src="/assets/brandsDesktop.png"
                        alt="Portada"
                        objectFit="cover"
                        w="100%"
                        h="auto"
                        display={{ base: "none", md: "block" }}
                    />
                </Box>
                <Flex borderBottomRadius={"lg"} bg="#272847" justifyContent={"center"} alignItems={"center"} py={3}>
                    <Text m={0} fontSize={{ base: "md", md: "lg", lg: "xl" }} color="white" textAlign="center">
                        <Text as="span" fontWeight="bold">Marcas</Text> que <Text as="span" fontWeight="bold">confían</Text> en nosotros
                    </Text>
                </Flex>
            </Box>
        </Flex>
    );
};

export default BrandSection;
