import React from "react";
import { Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Image, IconButton } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ModalPortfolio({ title, description, isOpen, setIsOpen, imgs }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <ModalOverlay />
            <ModalContent my={{ base: "0.5rem", md: "2.5rem" }} p={5} maxW={{ base: "95%", md: "80%" }} maxHeight={{ base: "97%", md: "90%" }} overflowY={"auto"}>
                <ModalHeader>{title}</ModalHeader>
                <ModalCloseButton />
                <ModalBody py={8}>
                    <Text mb={10}>{description}</Text>
                    <Slider style={{border: "3px solid #6c63ff"}} {...settings}>
                        {imgs.map((img, index) => (
                            <div key={index}>
                                <Image
                                    src={img}
                                    alt={`Imagen ${index + 1}`}
                                    objectFit="cover"
                                    m={2}
                                    borderRadius="md"
                                />
                            </div>
                        ))}
                    </Slider>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}
