import {
  Box,
  Flex,
  Button,
  Text,
  Icon,
  IconButton,
  Divider,
  VStack,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
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

export default function AdminMobileNavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const btnRef = useRef();
  const { logout, userInfo } = useAuth();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <Box display="block">
      <Box bg="#fff" boxShadow="md" position="fixed" width="100%" zIndex={10}>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          py="15px"
          px={[7.5, 8, 8, 16, 16, 24]}
          position="relative"
          zIndex={10}
        >
          <Link to="">
            <img
              onClick={onClose}
              src="/assets/papLogo.png"
              alt="PAP Logo"
              style={{ cursor: "pointer", height: "45px" }}
            />
          </Link>
          <Flex alignItems="center" flexDirection="row">
            <IconButton
              ref={btnRef}
              fontSize={30}
              icon={<HamburgerIcon color="primary.500" />}
              variant="ghost"
              ms={5}
              onClick={onOpen}
            />
          </Flex>
        </Flex>
      </Box>

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader>
              <Text fontSize="lg" textAlign="center" m={0}>
                Menú
              </Text>
            </DrawerHeader>
            <Divider m={0} />
            <DrawerBody
              pt={0}
              pb={2}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-between"}
            >
              <VStack spacing={0}>
                <Button
                  h={"45px"}
                  my={1}
                  fontSize="sm"
                  color="primary.500"
                  variant="ghost"
                  width="100%"
                  onClick={() => {
                    navigate("/admin/productos");
                    onClose();
                  }}
                  leftIcon={<Icon as={FiBox} boxSize={5} />}
                >
                  Productos
                </Button>
                <Button
                  h={"45px"}
                  my={1}
                  fontSize="sm"
                  color="primary.500"
                  variant="ghost"
                  width="100%"
                  onClick={() => {
                    navigate("/admin/categorias");
                    onClose();
                  }}
                  leftIcon={<Icon as={FiLayers} boxSize={5} />}
                >
                  Categorías
                </Button>
                <Button
                  h={"45px"}
                  my={1}
                  fontSize="sm"
                  color="primary.500"
                  variant="ghost"
                  width="100%"
                  onClick={() => {
                    navigate("/admin/catalogos");
                    onClose();
                  }}
                  leftIcon={<Icon as={FiList} boxSize={5} />}
                >
                  Catálogos
                </Button>
                <Divider />
                <Button
                  h={"45px"}
                  my={1}
                  fontSize="sm"
                  color="primary.500"
                  variant="ghost"
                  width="100%"
                  onClick={() => {
                    navigate("/admin/informacion");
                    onClose();
                  }}
                  leftIcon={<Icon as={FiInfo} boxSize={5} />}
                >
                  Información General
                </Button>
                {userInfo.role === "admin" && (
                  <>
                    <Divider />
                    <Button
                      h={"45px"}
                      my={1}
                      fontSize="sm"
                      color="primary.500"
                      variant="ghost"
                      width="100%"
                      onClick={() => {
                        navigate("/admin/usuarios");
                        onClose();
                      }}
                      leftIcon={<Icon as={FiUsers} boxSize={5} />}
                    >
                      Usuarios
                    </Button>
                  </>
                )}
              </VStack>
              <Box>
                <Divider m={0} />
                <Button
                  h={"45px"}
                  my={1}
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
              </Box>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
}
