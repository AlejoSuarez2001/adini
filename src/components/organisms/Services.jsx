import { Box, Flex, Heading, Text, VStack, Icon, List, ListItem, ListIcon } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

const services = [
    {
        title: "Análisis y Desarrollo",
        image: "/assets/p.png",
    },
    {
        title: "Análisis y Desarrollo",
        image: "/assets/p.png",
    },
    {
        title: "Análisis y Desarrollo",
        image: "/assets/p.png",
    },
];

const serviceList = [
    "Desarrollo de Aplicaciones Web",
    "Desarrollo de E-commerce",
    "Desarrollo Multiplataforma",
    "Mantenimiento de Aplicaciones Web",
    "Implementación de Soluciones Open-Source",
];

export default function Services() {
    return (
        <Box p={10}>
            <Heading textAlign="center" mb={8}>Servicios Ofrecidos</Heading>
            <Flex justify="center" gap={20} wrap="wrap">
                {services.map((service, index) => (
                    <Box
                        key={index}
                        p={6}
                        boxShadow="lg"
                        borderRadius="md"
                        bg="white"
                        maxW="md"
                        textAlign="center"
                    >
                        <Box mb={4}>
                            <img src={service.image} alt={service.title} style={{ width: "100%", borderRadius: "8px" }} />
                        </Box>
                        <Heading mb={6} size="md">{service.title}</Heading>
                        <List spacing={2} textAlign="left">
                            {serviceList.map((item, idx) => (
                                <ListItem key={idx}>
                                    <ListIcon as={CheckCircleIcon} color="tertiary.500" />
                                    {item}
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                ))}
            </Flex>
        </Box>
    );
}
