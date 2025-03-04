import {
  Box,
  Button,
  Image,
  VStack,
  Divider,
  Spacer,
  Icon,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import {
  FiBox,
  FiLayers,
  FiList,
  FiInfo,
  FiLogOut,
  FiUsers,
} from "react-icons/fi";

export default function AdminDesktopNavBar() {
  const navigate = useNavigate();
  const { logout, userInfo } = useAuth();

  return (
    <Box
      as="nav"
      display={"block"}
      position="fixed"
      left="0"
      top="0"
      height="100vh"
      width={{ lg: "25%", xl: "20%", "2xl": "15%" }}
      bg="secondary.500"
      padding="4"
    >
      <VStack height="100%">
        <Box width="100%" display="flex" justifyContent="center">
          <Image
            mt={3}
            mb={5}
            src="/assets/papLogo.png"
            alt="PAP Logo"
            style={{ height: "60px" }}
          />
        </Box>
        <Button
          onClick={() => navigate("/admin/productos")}
          justifyContent="flex-start"
          fontSize="sm"
          color="primary.500"
          _hover={{ bg: "#dcdefc" }}
          variant="ghost"
          width="100%"
          leftIcon={<Icon as={FiBox} boxSize={5} />}
        >
          Productos
        </Button>
        <Button
          onClick={() => navigate("/admin/categorias")}
          justifyContent="flex-start"
          fontSize="sm"
          color="primary.500"
          _hover={{ bg: "#dcdefc" }}
          variant="ghost"
          width="100%"
          leftIcon={<Icon as={FiLayers} boxSize={5} />}
        >
          Categorías
        </Button>
        <Button
          onClick={() => navigate("/admin/catalogos")}
          justifyContent="flex-start"
          fontSize="sm"
          color="primary.500"
          _hover={{ bg: "#dcdefc" }}
          variant="ghost"
          width="100%"
          leftIcon={<Icon as={FiList} boxSize={5} />}
        >
          Catálogos
        </Button>
        <Divider p={0} m={0} borderColor="#dcdefc" borderWidth={1} />
        <Button
          onClick={() => navigate("/admin/informacion")}
          justifyContent="flex-start"
          fontSize="sm"
          color="primary.500"
          _hover={{ bg: "#dcdefc" }}
          variant="ghost"
          width="100%"
          leftIcon={<Icon as={FiInfo} boxSize={5} />}
        >
          Información General
        </Button>
        {userInfo.role === "admin" && (
          <>
            <Divider p={0} m={0} borderColor="#dcdefc" borderWidth={1} />
            <Button
              onClick={() => navigate("/admin/usuarios")}
              justifyContent="flex-start"
              fontSize="sm"
              color="primary.500"
              _hover={{ bg: "#dcdefc" }}
              variant="ghost"
              width="100%"
              leftIcon={<Icon as={FiUsers} boxSize={5} />}
            >
              Usuarios
            </Button>
          </>
        )}
        <Spacer />
        <Button
          fontSize="sm"
          color="red.500"
          _hover={{ bg: "#fde8e8" }}
          variant="ghost"
          width="100%"
          onClick={() => {
            logout();
            navigate("/admin");
          }}
          leftIcon={<Icon as={FiLogOut} boxSize={5} />}
        >
          Cerrar Sesión
        </Button>
      </VStack>
    </Box>
  );
}
