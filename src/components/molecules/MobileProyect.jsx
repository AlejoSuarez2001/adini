import { useRef, useEffect, useState } from "react";
import { Box, Flex, Text, Heading, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const MotionBox = motion(Flex);

export default function MobileProyect({ title, text, video1, video2 }) {
    const videoRef1 = useRef(null);
    const videoRef2 = useRef(null);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.4,
    });
    const [isOpen, setIsOpen] = useState(false);

    function handleVideoEnded(ref) {
        return () => {
            if (ref.current) {
                ref.current.currentTime = 0;
                ref.current.play();
            }
        };
    }

    useEffect(() => {
        const video1RefCurrent = videoRef1.current;
        const video2RefCurrent = videoRef2.current;

        if (video1RefCurrent) {
            video1RefCurrent.addEventListener("ended", handleVideoEnded(videoRef1));
        }
        if (video2RefCurrent) {
            video2RefCurrent.addEventListener("ended", handleVideoEnded(videoRef2));
        }

        return () => {
            if (video1RefCurrent) {
                video1RefCurrent.removeEventListener("ended", handleVideoEnded(videoRef1));
            }
            if (video2RefCurrent) {
                video2RefCurrent.removeEventListener("ended", handleVideoEnded(videoRef2));
            }
        };
    }, []);

    return (
        <>
            <MotionBox
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                transition={{ duration: 0.5 }}
                direction={"column"}
                justifyContent={"space-between"}
                w="100%"
                maxW="lg"
                mb={5} p={4}
                borderRadius="md"
                boxShadow="md"
                bg={"white"}
                cursor={"pointer"}
                borderTop={"2px solid #5548e6"}
                borderBottom={"2px solid #5548e6"}
                _hover={{ boxShadow: "lg", bg: "#f8f7ff" }}
                onClick={() => setIsOpen(true)}
            >
                <Box>
                    <Flex justify="center" align="center" mb={2}>
                        <Heading fontSize="2xl" fontWeight="0" color="gray.700" px={1} py={2}>{title}</Heading>
                    </Flex>
                    <Flex w="100%" rounded="md" mb={4} justify="space-between" gap={4}>
                        <Box flex="1" borderRadius="lg" overflow="hidden" boxShadow="md">
                            <video ref={videoRef1} autoPlay muted loop style={{ width: "100%" }}>
                                <source src={video1} type="video/mp4" />
                            </video>
                        </Box>
                        <Box flex="1" borderRadius="lg" overflow="hidden" boxShadow="md">
                            <video ref={videoRef2} autoPlay muted loop style={{ width: "100%" }}>
                                <source src={video2} type="video/mp4" />
                            </video>
                        </Box>
                    </Flex>
                    <Box p={4} pb={0}>
                        <Text fontSize="md" color="gray.600" mb={4}>{text}</Text>
                    </Box>
                </Box>
                <Flex mt={4} justify="flex-end">
                    <Button
                        leftIcon={<ViewIcon />}
                        variant="solid"
                        px={3}
                        bg="tertiary.500"
                        color="secondary.500"
                        fontSize="md"
                        _hover={{ transform: "scale(1.05)", bg: "#5548e6" }}
                        onClick={() => setIsOpen(true)}
                    >
                        Más detalles
                    </Button>
                </Flex>
            </MotionBox>

            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <ModalOverlay />
                <ModalContent p={5}>
                    <ModalHeader>{title}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text mb={4}>{text}</Text>
                        <Text textAlign={"center"} fontWeight={"bold"} my={20}>Imágenes del Proyecto</Text>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}
