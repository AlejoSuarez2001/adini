import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const techStack = [
    { name: "DOCKER", icon: "/assets/docker.webp" },
    { name: "EXPO", icon: "/assets/expo.webp" },
    { name: "CHAKRA UI", icon: "/assets/chakra.webp" },
    { name: "EXPRESS", icon: "/assets/express.webp" },
    { name: "MATERIAL UI", icon: "/assets/material.webp" },
    { name: "MONGO DB", icon: "/assets/mongo.webp" },
    { name: "NEXT.JS", icon: "/assets/next.webp" },
    { name: "NODE.JS", icon: "/assets/node.webp" },
    { name: "REACT", icon: "/assets/react.webp" },
    { name: "SEQUELIZE", icon: "/assets/sequelize.webp" },
    { name: "SQL", icon: "/assets/sql.webp" },
    { name: "WORDPRESS", icon: "/assets/wordpress.webp" },
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
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
};

export default function Technologies() {
    return (
        <>
            <Heading fontSize={"3xl"} textAlign="center" mb={"50px"}>
                Tecnologías
            </Heading>

            <Box bg="primary.500" p={8} textAlign="center">
                <Box h={400}></Box>
                <Slider
                    {...sliderSettings}
                    style={{
                        margin: "0 13%",
                        marginBottom: "-110px",
                        borderRadius: "0.125rem",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        backgroundColor: "#f7f8ff",
                        paddingBlock: "20px",
                    }}
                >
                    {techStack.map((tech, index) => (
                        <Flex key={index} textAlign="center" p={4}>
                            <Flex align={"center"} justify={"center"}>
                                <img src={tech.icon} alt={tech.name} style={{ width: "50px", height: "50px" }} />
                            </Flex>
                            <Text fontSize="md" fontWeight="bold" color="#0a0a0a" mt={4} mb={2}>
                                {tech.name}
                            </Text>
                        </Flex>
                    ))}
                </Slider>
            </Box>
        </>
    );
}
