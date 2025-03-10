import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Title from "../molecules/Title";

const teamMembers = [
    {
        name: "Agustín Acevedo",
        role: "Graphic Designer",
        image: "/assets/images/user.jpeg",
    },
    {
        name: "Alejo Suarez",
        role: "Soft - Engineer",
        image: "/assets/images/user.jpeg",
    },
    {
        name: "Gabriel Olivieri",
        role: "Web Developer",
        image: "/assets/images/user.jpeg",
    },
    {
        name: "Juan Ignacio Diaz",
        role: "Product Manager",
        image: "/assets/images/user.jpeg",
    },
    {
        name: "Gonzalo Suarez",
        role: "Soft - Engineer",
        image: "/assets/images/user.jpeg",
    },
    {
        name: "Daniel Piñero",
        role: "Web Developer",
        image: "/assets/images/user.jpeg",
    },
    {
        name: "Guido Gelván",
        role: "Product Manager",
        image: "/assets/images/user.jpeg",
    }
];

export default function AboutUs() {
    return (
        <>
            <Title title="Nuestro equipo" subtitle="comprometido con tu éxito" mt="60px" mb="60px" />

            <Flex align={"center"} justify={"center"}>
                <Box maxW={"1200px"} textAlign="center" mx={{ base: "20px", md: "50px" }}>
                    <Flex justify="center" wrap="wrap" gap={{ base: "60px", md: 20 }}>
                        {teamMembers.map((member, index) => (
                            <Box key={index} textAlign="center">
                                <Image
                                    boxShadow={"md"}
                                    src={member.image}
                                    alt={member.name}
                                    borderRadius="full"
                                    boxSize={{ base: "130px", md: "180px" }}
                                    mx="auto"
                                    mb={4}
                                    borderBottom={"1px solid #071e37"}
                                />
                                <Text m={0} fontWeight="bold" fontSize={{ base: "sm", md: "xl" }}>{member.name}</Text>
                                <Box my={2} h={"1px"} bg={"tertiary.500"}></Box>
                                <Text color="gray.500" fontSize={{ base: "xs", md: "md" }}>{member.role}</Text>
                            </Box>
                        ))}
                    </Flex>
                </Box>
            </Flex >
        </>
    );
}
