import {
  Box,
  Button,
  Flex,
  Text,
  Textarea,
  Input,
  Icon
} from "@chakra-ui/react";
import { useState } from "react";
import { FiSend } from "react-icons/fi";
import Title from "../molecules/Title";

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

  return (
    <>
      <Title title="Contáctanos" subtitle="para poder ayudarte" mt="60px" mb="40px" />

      <Flex alignItems="center" justifyContent="center">
        <Box
          bg="white"
          p={8}
          borderRadius="lg"
          boxShadow="lg"
          width={"100%"}
          maxW={"1000px"}
        >
          <Text fontSize="xl" fontWeight="bold" color="#071e37" mb={4}>
            Envíanos tu mensaje
          </Text>

          <Flex direction="column" gap={4}>
            <Input
              placeholder="Tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              bg="#f2f2f2"
              color="#071e37"
              border="none"
              _focus={{ border: "2px solid #6c63ff" }}
            />
            <Input
              type="email"
              placeholder="Tu correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              bg="#f2f2f2"
              color="#071e37"
              border="none"
              _focus={{ border: "2px solid #6c63ff" }}
            />
            <Textarea
              placeholder="Escribe tu mensaje..."
              size="md"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              bg="#f2f2f2"
              color="#071e37"
              resize="vertical"
              maxHeight="200px"
              border="none"
              _focus={{ border: "2px solid #6c63ff" }}
            />
            <Flex justifyContent="space-between" align={"center"}>
              <Text fontSize="xl" fontWeight="bold" color="#071e37" m={0}>
                ¡Gracias por confiar en nosotros!
              </Text>
              <Button
                bg="#6c63ff"
                color="white"
                _hover={{ bg: "#5548e2" }}
                onClick={sendEmail}
                isDisabled={!message.trim() || !name.trim() || !email.trim()}
                rightIcon={<Icon as={FiSend} />}
              >
                Enviar mensaje
              </Button>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </>
  );
}
