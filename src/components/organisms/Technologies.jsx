import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import { FaDesktop, FaMobileAlt } from "react-icons/fa";
import Title from "../molecules/Title";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const techStack = [
    { name: "Docker", icon: "/assets/docker.webp" },
    { name: "Expo", icon: "/assets/expo.webp" },
    { name: "Chakra UI", icon: "/assets/chakra.webp" },
    { name: "Express", icon: "/assets/express.webp" },
    { name: "Material UI", icon: "/assets/material.webp" },
    { name: "MongoDB", icon: "/assets/mongo.webp" },
    { name: "Next.js", icon: "/assets/next.webp" },
    { name: "Node.js", icon: "/assets/node.webp" },
    { name: "React", icon: "/assets/react.webp" },
    { name: "Sequelize", icon: "/assets/sequelize.webp" },
    { name: "SQL", icon: "/assets/sql.webp" },
    { name: "WordPress", icon: "/assets/wordpress.webp" },
    { name: "TypeScript", icon: "/assets/ts.webp" },
];

const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 4,
            },
        },
        {
            breakpoint: 780,
            settings: {
                slidesToShow: 3,
            },
        },
    ],
};

export default function Technologies() {
    const getMargin = () => {
        return window.innerWidth <= 780 ? "0" : "0 13%";
    };
    const getDisplay = () => {
        return window.innerWidth <= 1000 ? "none" : "auto";
    };

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <>
            <Title title="Herramientas" subtitle="que impulsan tu éxito" mb="50px" />

            <Box position={"relative"} bg={{ base: "#071e37", lg: "linear-gradient(-90deg, #071e37 97%, #6c63ff 80%)" }} p={8} pt={4}>
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }}
                    transition={{ duration: 0.8 }}
                    style={{ display: getDisplay(), position: "absolute", top: "-70px", right: "80px", width: "140px" }}
                >
                    <img
                        src={"/assets/flechas.png"}
                    />
                </motion.div>


                <Box py={10} px={{ base: 4, md: 10, lg: 10, xl: "9%" }} color="white">
                    <Flex direction="column" gap={10}>
                        <Flex
                            justify={{ base: "center", md: "start" }}
                            align="center"
                            gap={6}
                            px={4}
                            direction={{ base: "column", md: "row" }}
                        >
                            <Box
                                bg="whiteAlpha.200"
                                p={4}
                                borderRadius="full"
                                boxShadow="lg"
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                mb={{ base: 4, md: 0 }}
                            >
                                <Icon as={FaDesktop} w={{ base: 16, md: 24 }} h={{ base: 16, md: 24 }} color="white" />
                            </Box>
                            <Box ml={{ base: 0, md: 6 }} textAlign={{ base: "center", md: "left" }} maxW="500px">
                                <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold" mb={2}>
                                    Desarrollo Web
                                </Text>
                                <Box h={"1px"} bg={"white"} mb={4} />
                                <Text fontSize={{ base: "sm", md: "md" }} color="gray.300">
                                    Desarrollamos sitios web rápidos, interactivos y optimizados para todo tipo de dispositivos, utilizando tecnologías como React, Next.js y Express para ofrecer experiencias de usuario excepcionales y alto rendimiento.
                                </Text>
                            </Box>
                        </Flex>

                        <Flex
                            justify={{ base: "center", md: "end" }}
                            align="center"
                            gap={{ base: 6, lg: 10 }}
                            direction={{ base: "column", md: "row-reverse" }}
                            px={4}
                        >
                            <Box
                                bg="whiteAlpha.200"
                                p={4}
                                borderRadius="full"
                                boxShadow="lg"
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                mb={{ base: 4, md: 0 }}
                            >
                                <Icon as={FaMobileAlt} w={{ base: 16, md: 24 }} h={{ base: 16, md: 24 }} color="white" />
                            </Box>
                            <Box ml={{ base: 0, md: 6 }} textAlign={{ base: "center", md: "right" }} maxW="500px">
                                <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold" mb={2}>
                                    Desarrollo Móvil
                                </Text>
                                <Box h={"1px"} bg={"white"} mb={4} />
                                <Text fontSize={{ base: "sm", md: "md" }} color="gray.300">
                                    Creemos aplicaciones móviles nativas y híbridas con Expo y React Native, optimizadas para ofrecer un rendimiento rápido y una experiencia fluida en dispositivos móviles.
                                </Text>
                            </Box>
                        </Flex>
                    </Flex>
                </Box>
                <Slider
                    {...sliderSettings}
                    style={{
                        margin: getMargin(),
                        marginBottom: "-110px",
                        borderRadius: "0.250rem",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        backgroundColor: "#ffffff",
                        paddingBlock: "20px",
                    }}
                >
                    {techStack.map((tech, index) => (
                        <Flex key={index} textAlign="center" p={4}>
                            <Flex align={"center"} justify={"center"}>
                                <img
                                    src={tech.icon}
                                    alt={tech.name}
                                    style={{
                                        width: "50px",
                                        height: "50px",
                                        filter: "drop-shadow(2px 2px 8px rgba(0, 0, 0, 0.2))"
                                    }}
                                />
                            </Flex>
                            <Text fontSize={{ base: "xs", md: "md" }} fontWeight="bold" color="#0a0a0a" mt={4} mb={2}>
                                {tech.name}
                            </Text>
                        </Flex>
                    ))}
                </Slider>
            </Box>
        </>
    );
}
