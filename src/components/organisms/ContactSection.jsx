import {
  Box,
  Button,
  Flex,
  Text,
  Textarea,
  Input,
  Icon,
} from "@chakra-ui/react";
import { useState } from "react";
import { FiExternalLink } from "react-icons/fi";


const ContactSection = () => {
  
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  const sendMessage = () => {
    const defaultMessage = `Hola, soy *${name}*, vengo desde la web de *${information?.name}* y quisiera realizar la siguiente consulta:\n${message}`;
    const whatsappUrl = `https://wa.me/${
      information?.phone ? information.phone : ""
    }?text=${encodeURIComponent(defaultMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Flex alignItems={"center"} justifyContent={"center"}>
      <Box
        bg="secondary.500"
        p={8}
        borderRadius="lg"
        width={{ base: "none", md: "800px" }}
      >
        <Text fontSize="xl" fontWeight="bold" color={"#1a365d"} mb={4}>
          Contáctanos por WhatsApp
        </Text>
        <Text
          mb={4}
          color={"#1a365d"}
          fontSize={{ base: "sm", md: "md", lg: "lg" }}
        >
          Envíanos tu consulta y te contactaremos:
        </Text>
        <Flex direction="column" gap={4}>
          <Input
            placeholder="Ingrese su nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            bg="white"
            color="#1a365d"
          />
          <Textarea
            placeholder="Escriba su mensaje..."
            size="md"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            bg="white"
            color="#1a365d"
            resize="vertical"
            maxHeight="200px"
          />
          <Flex justifyContent={"end"}>
            <Button
              colorScheme="green"
              onClick={sendMessage}
              isDisabled={!message.trim() || !name.trim()}
              rightIcon={<Icon as={FiExternalLink} />}
            >
              Consultar por WhatsApp
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default ContactSection;
