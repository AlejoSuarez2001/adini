import {
  Box,
  IconButton,
  Input,
  HStack,
  Heading,
  useDisclosure,
  Select,
  Image,
  Switch,
  Text,
  InputGroup,
  InputRightElement,
  Button,
  FormLabel,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Loading from "../molecules/Loading";


export default function AdminInformation() {
  const { getInformation, updateInformation, information } = useInformation();
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    instagram: "",
    location: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleUpdate = async () => {
    setLoading(true);
    await updateInformation(formData);
    setLoading(false);
  };

  async function fetchData() {
    await getInformation();
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setFormData(information);
  }, [information]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Box display="flex" flexDirection="column" m={{ base: 8, md: 16 }}>
          <Heading mb={10}>Información General</Heading>
          <Box>
            <Box mb={5} width="100%" maxWidth="400px">
              <FormLabel fontWeight={600} htmlFor="name">
                Nombre de Empresa
              </FormLabel>
              <InputGroup>
                <InputRightElement>
                  <i
                    style={{ color: "#212529", fontSize: 20 }}
                    className="bi bi-building"
                  ></i>
                </InputRightElement>
                <Input
                  name="name"
                  value={formData?.name}
                  onChange={handleChange}
                  size="md"
                  mb={5}
                />
              </InputGroup>

              <FormLabel fontWeight={600} htmlFor="name">
                Correo Electrónico
              </FormLabel>
              <InputGroup>
                <InputRightElement>
                  <i
                    style={{ color: "#212529", fontSize: 20 }}
                    className="bi bi-envelope"
                  ></i>
                </InputRightElement>
                <Input
                  name="email"
                  value={formData?.email}
                  onChange={handleChange}
                  size="md"
                  mb={5}
                />
              </InputGroup>

              <FormLabel fontWeight={600} htmlFor="phone">
                Número de Celular
              </FormLabel>
              <InputGroup>
                <InputRightElement>
                  <i
                    style={{ color: "#212529", fontSize: 20 }}
                    className="bi bi-telephone"
                  ></i>
                </InputRightElement>
                <Input
                  name="phone"
                  value={formData?.phone}
                  onChange={handleChange}
                  size="md"
                  mb={5}
                />
              </InputGroup>

              <FormLabel fontWeight={600} htmlFor="location">
                Ubicación
              </FormLabel>
              <InputGroup>
                <InputRightElement>
                  <i
                    style={{ color: "#212529", fontSize: 20 }}
                    className="bi bi-geo-alt"
                  ></i>
                </InputRightElement>
                <Input
                  name="location"
                  value={formData?.location}
                  onChange={handleChange}
                  size="md"
                  mb={5}
                />
              </InputGroup>

              <FormLabel fontWeight={600} htmlFor="instagram">
                Instagram
              </FormLabel>
              <InputGroup>
                <InputRightElement>
                  <i
                    style={{ color: "#212529", fontSize: 20 }}
                    className="bi bi-instagram"
                  ></i>
                </InputRightElement>
                <Input
                  name="instagram"
                  value={formData?.instagram}
                  onChange={handleChange}
                  size="md"
                  mb={5}
                />
              </InputGroup>
              <Button
                colorScheme="blue"
                isDisabled={loading}
                onClick={() => {
                  handleUpdate();
                }}
              >
                Guardar
              </Button>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}
