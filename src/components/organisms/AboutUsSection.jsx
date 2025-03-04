import { Box, Button, Flex, Text, VStack, Image } from "@chakra-ui/react";
import { FiExternalLink } from "react-icons/fi";

const AboutUsSection = () => {
const {information} = useInformation()

    return (
        <Box maxWidth={"1000px"} borderTop={"1px solid #f1f1f1"} borderRadius="md" boxShadow="md" p={8} mt={10} mx={5}>
            <Flex alignItems="center" justifyContent="center" mb={10}>
                <Image
                    src="/assets/papLogo.png"
                    alt="Logo de Paso a Paso"
                    height="80px"
                />
            </Flex>
            <VStack spacing={4} textAlign="center">

                <Text fontSize={{ base: "md", md: "lg" }} color="gray.600">
                    Somos "{information?.name}", una empresa distribuidora de venta por mayor con
                    muchos años de experiencia en el rubro. Nos enorgullece ofrecer productos de
                    alta calidad y un servicio excepcional a nuestros clientes.
                </Text>
                <Text fontSize={{ base: "md", md: "lg" }} color="gray.600">
                    Contamos con varias sucursales orientadas al sector gastronómico,
                    cada una diseñada para demostrar nuestra confianza y compromiso con el
                    crecimiento, creemos en construir relaciones sólidas y duraderas con
                    nuestros clientes y proveedores.
                </Text>
                <Text fontSize={{ base: "md", md: "lg" }} color="gray.600">
                    En {information?.name}, estamos dedicados a proporcionar soluciones integrales
                    que impulsan el éxito de tu negocio. ¡Contáctanos hoy mismo para descubrir
                    cómo podemos ayudarte!
                </Text>

            </VStack>
        </Box>
    );
};

export default AboutUsSection;
