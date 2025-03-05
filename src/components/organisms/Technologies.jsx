import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Slider from "react-slick";
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

    return (
        <>
            <Heading fontSize={"3xl"} textAlign="center" mb={"50px"}>
                Tecnologías
            </Heading>

            <Box bg="primary.500" p={8} textAlign="center">
                <Box h={400} color={"white"}> Comming Soon...</Box>
                <Slider
                    {...sliderSettings}
                    style={{
                        margin: getMargin(),
                        marginBottom: "-110px",
                        borderRadius: "0.125rem",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        backgroundColor: "#f7f8ff",
                        paddingBlock: "20px",
                    }}
                    css={{
                        "@media (min-width: 780px)": {
                            margin: "0",
                        },
                    }}
                >
                    {techStack.map((tech, index) => (
                        <Flex key={index} textAlign="center" p={4}>
                            <Flex align={"center"} justify={"center"}>
                                <img src={tech.icon} alt={tech.name} style={{ width: "50px", height: "50px" }} />
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
