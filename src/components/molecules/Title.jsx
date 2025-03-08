import { Heading, Text, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

export default function Title({ title, subtitle, mt, mb }) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    return (
        <Flex
            d="flex"
            align={"center"}
            justify={{ base: "center", md: "left" }}
            textAlign={{ base: "center", md: "left" }}
            mx={{ base: "15px", md: "10%" }}
            mb={mb}
            mt={mt}
            ref={ref}
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                transition={{ duration: 0.8 }}
            >
                <Heading fontSize={{ base: "2xl", "2xl": "25px" }} color="primary.500">
                    {title} <Text as="span" color="#3d2b99">{subtitle}</Text>
                </Heading>
            </motion.div>
        </Flex>
    );
}
