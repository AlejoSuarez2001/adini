import { useRef, useEffect } from "react";
import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";

export default function WebProyect({ title, text, video }) {
    const videoRef = useRef(null);

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
        <Box w="100%" maxW="lg" mb={5} p={4} borderRadius="xl" border={"1px solid #ededed"} boxShadow="md" bg={"white"}>
            <Flex justify="space-between" align="center" mb={3}>
                <Heading size="lg" fontWeight="0" color="gray.700" px={1} py={2}>{title}</Heading>
            </Flex>
            <Box mb={4} rounded="md" overflow="hidden" boxShadow="md">
                <video ref={videoRef} autoPlay muted loop style={{ width: "100%", borderRadius: "8px" }}>
                    <source src={video} type="video/mp4" />
                </video>
            </Box>

            <Box p={4}>
                <Text fontSize="md" color="gray.600" mb={4}>{text}</Text>
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
            </Box>
        </Box>
    );
}
