import { useRef, useEffect } from "react";
import { Box, Flex, Text, Heading, Button } from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";

export default function MobileProyect({ title, text, video1, video2 }) {
    const videoRef1 = useRef(null);
    const videoRef2 = useRef(null);

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
        <Box w="100%" maxW="lg" mb={5} p={4} borderRadius="xl" border={"1px solid #ededed"} boxShadow="md" bg={"white"}>
            <Flex justify="space-between" align="center" mb={2}>
                <Heading size="lg" fontWeight="0" color="gray.700" px={1} py={2}>{title}</Heading>
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

            <Box>
                <Text fontSize="md" color="gray.600" mb={4}>{text}</Text>
                <Flex mt={4} justify="flex-end">
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
