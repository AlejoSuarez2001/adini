import { useRef, useEffect } from "react";
import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const MotionBox = motion(Flex);

export default function WebProyect({ title, text, video }) {
    const videoRef = useRef(null);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.4,
    });

    function handleVideoEnded() {
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play();
        }
    }

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.addEventListener("ended", handleVideoEnded);
        }
        return () => {
            if (videoRef.current) {
                videoRef.current.removeEventListener("ended", handleVideoEnded);
            }
        };
    }, []);

    return (
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
        >
            <Box>
                <Flex justify="center" align="center" mb={3}>
                    <Heading fontSize="2xl" fontWeight="0" color="gray.700" px={1} py={2}>{title}</Heading>
                </Flex>
                <Box mb={4} rounded="md" overflow="hidden" boxShadow="md">
                    <video ref={videoRef} autoPlay muted loop style={{ width: "100%", borderRadius: "8px" }}>
                        <source src={video} type="video/mp4" />
                    </video>
                </Box>
                <Box p={4} pb={0}>
                    <Text fontSize="md" color="gray.600" mb={4}>{text}</Text>
                </Box>
            </Box>
            <Flex mt={6} justify="flex-end">
                <Button
                    leftIcon={<ViewIcon />}
                    variant="solid"
                    px={3}
                    bg="tertiary.500"
                    color="secondary.500"
                    fontSize="md"
                    _hover={{ transform: "scale(1.05)", bg: "#5548e6" }}
                    onClick={() => ("")}
                >
                    Ver detalles
                </Button>
            </Flex>
        </MotionBox>
    );
}
