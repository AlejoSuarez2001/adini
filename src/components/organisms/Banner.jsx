import { Box, Text, Button, VStack, HStack, Flex } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import WhatsAppIcon from "../molecules/WhatsAppIcon";
import TranslateButton from "../molecules/TranslateButton";
import { useTranslation } from "react-i18next";
import { FiCode } from "react-icons/fi";

const floatingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeOut" } },
};

const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

const testimonialVariants = {
    enter: { opacity: 0, x: 20 },
    center: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.5, ease: "easeIn" } },
};

export default function BannerSection() {
    const [index, setIndex] = useState(0);
    const { t } = useTranslation();

    const testimonials = t("banner.reviews", { returnObjects: true });

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            const offset = 120;
            const top = section.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({
                top: top,
                behavior: "smooth",
            });
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [testimonials.length]);

    return (
        <Box position="relative" overflow="hidden" boxShadow={"md"}>
            <Box
                height={550}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="flex-start"
                color="white"
                backgroundImage="url('/assets/images/banner.webp')"
                backgroundSize="cover"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                px={{ base: 6, md: 12 }}
                position="relative"
            >
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    bg="linear-gradient(to right, rgba(7, 30, 55, 0.9), rgba(7, 30, 55, 0.5))"
                />
                <Flex w={"100%"} justifyContent={"space-around"} alignItems={"center"} >
                    <VStack
                        align="flex-start"
                        zIndex={2}
                        maxW="700px"
                        spacing={6}
                        as={motion.div}
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                    >
                        <HStack spacing={2}>
                            <FiCode size={20} />
                            <Text m={0} fontSize={{ base: "sm", md: "md" }} fontWeight="bold" textTransform="uppercase">
                                {t(`banner.span`)}
                            </Text>
                        </HStack>
                        <Text fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold" lineHeight="1.2">
                            {t(`banner.titulo`)}
                        </Text>
                        <Text fontSize={{ base: "md", md: "lg" }} opacity={0.9}>
                            {t(`banner.subtitulo`)}
                        </Text>
                        <Button
                            variant="solid"
                            bg="tertiary.500"
                            color="secondary.500"
                            fontSize="md"
                            _hover={{
                                transform: "scale(1.05)",
                                bg: "#5548e6",
                            }}
                            onClick={() => scrollToSection("contacto")}
                        >
                            {t(`banner.boton`)}
                        </Button>
                    </VStack>
                    <Flex display={{ base: "none", lg: "flex" }} gap={6} flexDir={"column"} w={"700px"} align={"center"} justify={"center"}>
                        <Flex
                            w="350px"
                            px={1}
                            h="200px"
                            bg="rgba(255, 255, 255, 0.2)"
                            borderRadius="md"
                            backdropFilter="blur(10px)"
                            boxShadow="lg"
                            justifyContent="center"
                            alignItems="center"
                            textAlign="center"
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={index}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    variants={testimonialVariants}
                                    style={{ padding: "0 10px" }}
                                >
                                    <Text m={0} fontSize="lg" fontStyle="italic" fontWeight="medium" color="white">
                                        "{testimonials[index]}"
                                    </Text>
                                </motion.div>
                            </AnimatePresence>
                        </Flex>
                        <Flex gap={2}>
                            {testimonials.map((_, i) => (
                                <Box
                                    key={i}
                                    w={3}
                                    h={3}
                                    bg={i === index ? "white" : "gray.400"}
                                    borderRadius="50%"
                                    transition="all 0.3s"
                                />
                            ))}
                        </Flex>
                    </Flex>
                </Flex>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={floatingVariants}
                    style={{
                        position: "absolute",
                        top: "20%",
                        left: "-70px",
                        width: "120px",
                        height: "120px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                        opacity: 0.6,
                    }}
                />
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={floatingVariants}
                    style={{
                        position: "absolute",
                        bottom: "15%",
                        right: "-70px",
                        width: "120px",
                        height: "120px",
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                        borderRadius: "50%",
                        opacity: 0.6,
                    }}
                />
                <WhatsAppIcon position="absolute" />
                <TranslateButton position="absolute" />
            </Box>
        </Box >
    );
}
