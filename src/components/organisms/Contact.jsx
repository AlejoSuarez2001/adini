import { Box, Button, Flex, Text, Textarea, Input, Icon, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { HiMail } from "react-icons/hi";
import Title from "../molecules/Title";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

export default function Contact() {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const sendEmail = () => {
    const subject = `Contacto desde la web - ${name}`;
    const body = `Hola, mi nombre es ${name}.%0D%0A%0D%0A${message}`;
    const mailtoLink = `mailto:contacto@tudominio.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, "_blank");
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <>
      <Title title="Contáctanos" subtitle="para poder ayudarte" mt="60px" mb="40px" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
        transition={{ duration: 0.8 }}
      >
        <Flex alignItems="center" justifyContent="left">
          <Box
            bg="white"
            p={8}
            pl={{ base: 8, lg: "15%" }}
            mr={{ base: 0, lg: "50px" }}
            borderRadius="md"
            boxShadow="md"
            width="100%"
            maxW="1200px"
          >
            <Flex alignItems="center" mb={6}>
              <Icon as={HiMail} boxSize={8} color="#6c63ff" mr={4} />
              <Text my={0} fontSize="xl" fontWeight="bold" color="#071e37">
                Envíanos tu mensaje
              </Text>
            </Flex>

            <VStack spacing={4} align="stretch">
              <Input
                placeholder="Tu nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                bg="#f9f9f9"
                color="#071e37"
                border="2px solid #e0e0e0"
                _focus={{ borderColor: "#6c63ff" }}
                borderRadius="md"
                p={4}
              />
              <Input
                type="email"
                placeholder="Tu correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                bg="#f9f9f9"
                color="#071e37"
                border="2px solid #e0e0e0"
                _focus={{ borderColor: "#6c63ff" }}
                borderRadius="md"
                p={4}
              />
              <Textarea
                placeholder="Escribe tu mensaje..."
                size="md"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                bg="#f9f9f9"
                color="#071e37"
                resize="vertical"
                maxHeight="200px"
                minHeight="150px"
                border="2px solid #e0e0e0"
                _focus={{ borderColor: "#6c63ff" }}
                borderRadius="md"
                p={4}
              />
              <Flex justifyContent="space-between" align="center">
                <Text fontSize="lg" color="#6c63ff" fontWeight="bold">
                  ¡Gracias por confiar en nosotros!
                </Text>
                <Button
                  bg="#6c63ff"
                  color="white"
                  _hover={{ bg: "#5548e2" }}
                  onClick={sendEmail}
                  isDisabled={!message.trim() || !name.trim() || !email.trim()}
                  rightIcon={<Icon as={FiSend} />}
                  borderRadius="md"
                  p={4}
                >
                  Enviar
                </Button>
              </Flex>
            </VStack>
          </Box>
        </Flex>
      </motion.div>
    </>
  );
}
