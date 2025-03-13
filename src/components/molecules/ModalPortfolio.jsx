import React, { useState } from "react";
import { Text, Flex, Box, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Image, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaExpand } from "react-icons/fa";

export default function ModalPortfolio({ title, description, isOpen, setIsOpen, imgs, mobile = false }) {
    const [isFullscreen, setIsFullscreen] = useState(false);
    const isMobile = useBreakpointValue({ base: true, md: false });

    const NextArrow = ({ onClick }) => (
        <IconButton
            display={{ base: "none", md: "inherit" }}
            aria-label="Next"
            icon={<ChevronRightIcon boxSize={8} />}
            position="absolute"
            right="-50px"
            top="50%"
            transform="translateY(-50%)"
            zIndex={2}
            onClick={onClick}
            colorScheme="gray"
            variant="ghost"
        />
    );

    const PrevArrow = ({ onClick }) => (
        <IconButton
            display={{ base: "none", md: "inherit" }}
            aria-label="Previous"
            icon={<ChevronLeftIcon boxSize={8} />}
            position="absolute"
            left="-40px"
            top="50%"
            transform="translateY(-50%)"
            zIndex={2}
            onClick={onClick}
            colorScheme="gray"
            variant="ghost"
        />
    );

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
        <>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <ModalOverlay />
                <ModalContent
                    my={{ base: "0.5rem", md: "2.5rem" }}
                    py={{ base: 0, md: 5 }}
                    px={{ base: 0, md: 10, lg: 8 }}
                    maxW={{ base: "95%", md: "80%" }}
                    maxHeight={{ base: "97%", md: "90%" }}
                    overflowY={"auto"}
                >
                    <ModalHeader pb={3} pt={5}>{title}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody p={0}>
                        <Box px={8} py={3}>
                            <Text mb={10}>{description}</Text>
                            <Text mb={0}>*Tecnologias*</Text>
                        </Box>
                        <Flex position={"relative"} my={8} align={"center"} justify={"center"}>
                            <IconButton
                                display={{ base: "inherit", md: "none" }}
                                position="absolute"
                                aria-label="Next"
                                icon={<FaExpand />}
                                right="15px"
                                top="15px"
                                zIndex={2}
                                onClick={() => setIsFullscreen(true)}
                                colorScheme="gray"
                            />
                            <Slider style={{
                                position: "relative",
                                width: "95%",
                                maxWidth: mobile ? "350px" : "auto"
                            }} {...settings}
                            >
                                {imgs.map((img, index) => (
                                    <div key={index} style={{ maxWidth: "1200px" }}>
                                        <Image
                                            src={img}
                                            alt={`Imagen ${index + 1}`}
                                            objectFit="cover"
                                            mt={2}
                                            mb={{ base: 8, sm: 2 }}
                                            borderRadius="md"
                                            mx={"auto"}
                                            cursor={{ base: "pointer", md: "default" }}
                                            onClick={() => isMobile && setIsFullscreen(true)}
                                        />
                                    </div>
                                ))}
                            </Slider>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>

            {isMobile && (
                <Modal isOpen={isFullscreen} onClose={() => setIsFullscreen(false)} size={"full"}>
                    <ModalOverlay />
                    <ModalContent bg={"#f2f2f2"}>
                        <ModalCloseButton />
                        <ModalBody p={0}>
                            <Flex height={"100vh"} align={"center"} justify={"center"}>
                                <Slider style={{ position: "relative", width: mobile ? "80%" : "100%" }} {...settings}>
                                    {imgs.map((img, index) => (
                                        <div key={index} style={{ maxWidth: "1200px" }}>
                                            <Image
                                                src={img}
                                                alt={`Imagen ${index + 1}`}
                                                objectFit="cover"
                                                m={2}
                                                borderRadius="md"
                                                mx={"auto"}
                                                cursor="pointer"
                                                onClick={() => setIsFullscreen(true)}
                                            />
                                        </div>
                                    ))}
                                </Slider>
                            </Flex>
                        </ModalBody>
                    </ModalContent>
                </Modal>
            )}
        </>
    );
}
