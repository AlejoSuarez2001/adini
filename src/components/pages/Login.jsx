import React, { useEffect, useState } from "react";
import {
  Flex,
  Input,
  Button,
  Heading,
  Spinner,
  FormControl,
  Text,
} from "@chakra-ui/react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showErrors, setShowErrors] = useState(false);
  const [error, setError] = useState(false);
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setShowErrors(true);
      setError("Ambos campos son requeridos");
      return;
    }

    setLoading(true);

    const user = await login(formData);

    if (user) {
      window.location.href = "/admin/productos";
    } else {
      setShowErrors(true);
      setError("Credenciales Incorrectas");
      setLoading(false);
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/admin/productos");
      setLoading(false);
    }
  }, [isAuthenticated]);

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      width="100vw"
      height="100vh"
      pb="25vh"
      bg="secondary.500"
    >
      <Flex
        display="flex"
        shadow="lg"
        p={5}
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        width={["80%", "60%", "50%", "40%", "30%", "20%"]}
        borderRadius="md"
        bg="#fff"
      >
        <form onSubmit={handleSubmit}>
          <FormControl>
            <Heading
              as="h4"
              fontSize={25}
              textAlign="center"
              color="primary.500"
              mb={5}
            >
              Administrador
            </Heading>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              onChange={handleChange}
              mb={3}
            />

            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Contraseña"
              onChange={handleChange}
              mb={3}
            />

            {showErrors && (
              <Text textAlign="center" fontSize={15} color="#f80e0d">
                {error}
              </Text>
            )}

            <Button type="submit" fontSize="sm" variant="tertiary" width="100%" isLoading={loading} loadingText="Ingresando...">
              Ingresar
            </Button>
          </FormControl>
        </form>
      </Flex>
    </Flex>
  );
}
