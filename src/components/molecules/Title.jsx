import { Heading, Text, Flex } from "@chakra-ui/react";

export default function Title({ title, subtitle, mt, mb }) {
    return (
        <Flex d="flex" align={"center"} justify={{ base: "center", md: "left" }} textAlign={{ base: "center", md: "left" }} mx={{ base: "15px", md: "10%" }} mb={mb} mt={mt}>
            <Heading fontSize={{ base: "2xl", "2xl": "25px" }} color="primary.500">
                {title} <Text as="span" color="#3d2b99">{subtitle}</Text>
            </Heading>
        </Flex>
    );
}