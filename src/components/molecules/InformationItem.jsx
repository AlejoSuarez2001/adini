import { Box, Image, Text, Button, Stack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";


const InformationItem = ({ direction, right, left, backgroundColor, textColor, img, title, description, link, marginL, marginR }) => {

    const navigate = useNavigate();

    const handleSearch = (searchedTerm) => {
        if (searchedTerm.trim() !== "") {
            navigate(`/products/${searchedTerm}`);
        }
    };

    return (
        <Box
            mx={{ base: "25px", md: "50px" }}
            ml={{ md: marginL }}
            mr={{ md: marginR }}
        >
            <Box
                display="flex"
                flexDirection={{ base: "column-reverse", md: direction }}
                alignItems="center"
                justifyContent="center"
                minHeight={"280px"}
                p={5}
                bg={backgroundColor}
                borderRadius="xl"
                boxShadow="lg"
                position={"relative"}
            >
                <Box
                    flex={{ base: "1", lg: "2" }}
                    mr={{ md: marginL }}
                    ml={{ md: marginR }}
                    p={{ base: 3, md: 3 }}
                >
                    <Text fontSize="2xl" fontWeight="bold" color={textColor}>
                        {title}
                    </Text>
                    <Text mt={2} color={textColor} fontSize={{ base: "xs", sm: "sm", md: "md", lg: "lg" }}>
                        {description}
                    </Text>
                    <Button
                        bg="gray.600"
                        color="white"
                        fontSize={{ base: "xs", sm: "sm", md: "md", lg: "lg" }}
                        _hover={{ bg: "gray.700" }}
                        mt={1}
                        onClick={() => handleSearch(link)}
                    >
                        Ver Productos
                    </Button>
                </Box>

                <Box flex="1" p={3} display="flex" justifyContent="center">
                    <Stack direction="column" spacing={5} maxWidth={{ base: "330px", md: "275px" }}
                    >
                        <Image
                            position={{ base: "auto", md: "absolute" }}
                            top={{ base: "none", md: "-17.5px", xl: "-80px" }}
                            right={{ base: "none", md: right }}
                            left={{ base: "none", md: left }}
                            marginTop={{ base: "-55px", md: "0" }}
                            src={img}
                            maxWidth={{ md: "275px", xl: "350px" }}
                            borderRadius="md"
                            objectFit="cover"
                        />
                    </Stack>
                </Box>
            </Box>
        </Box>
    );
};

export default InformationItem;
