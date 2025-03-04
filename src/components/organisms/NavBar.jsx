import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Button,
  IconButton,
  HStack,
  Text,
  useBreakpointValue,
  Divider,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import CatalogSelect from "../molecules/CatalogSelect";
import CatalogNav from "../molecules/CatalogNav";
import Cart from "./Cart";
import { useCatalog } from '../../contexts/CatalogContext';
import { useCategory } from '../../contexts/CategoryContext';


export default function NavBar() {
  const { downloadInformation, getInformation } = useInformation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getCatalogs, catalogs } = useCatalog();
  const { getCategories } = useCategory();
  const [dataFetched, setDataFetched] = useState(false);
  const [categoriesByCatalog, setCategoriesByCatalog] = useState({});

  const displayMenu = useBreakpointValue({
    base: "none",
    sm: "none",
    md: "none",
    lg: "flex",
  });

  const fixNav = useBreakpointValue({
    base: "sticky",
    lg: "auto",
  });

  const fetchData = async () => {
    await getCatalogs();
    await getInformation();

    const categories = await getCategories();

    if (!catalogs.length === 0) {
      const categoriesMap = catalogs.reduce((acc, catalog) => {
        acc[catalog.id] = [];
        return acc;
      }, {});
      if (!categories) {
        categories.forEach(category => {
          if (!categoriesMap[category.catalog_id]) {
            categoriesMap[category.catalog_id] = [];
          }
          categoriesMap[category.catalog_id].push(category);
        });

        setCategoriesByCatalog(categoriesMap);
      }
    }

    setDataFetched(true);
  };

  useEffect(() => {
    if (!dataFetched) {
      fetchData();
    }
  }, [dataFetched]);

  const handleDownload = async () => {
    try {
      const response = await downloadInformation()
      const url = window.URL.createObjectURL(new Blob([response]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'Catalogos-PAP.pdf');
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error al descargar el PDF de catálogos:', error);
    }
  }

  return (
    <>
      <Flex bg={"#1a365d"} justifyContent={"center"} alignItems={"center"}>
        <Box py={1} px={2} fontSize="sm" color={"white"} textAlign={"center"}>
          Precios especiales al consultar por mayor en productos seleccionados
        </Box>
      </Flex>
      <Box
        bg="#fff"
        boxShadow="md"
        position={fixNav}
        top={0}
        width="100%"
        zIndex={10}
      >
        <Flex
          boxShadow="md"
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
          <HStack
            display={displayMenu}
            flexDirection="row"
            alignItems="center"
            spacing={4}
          >
            <Link to="">
              <Button fontSize="sm" color="primary.500" variant="ghost">
                Inicio
              </Button>
            </Link>
            <Link to="/contacto">
              <Button fontSize="sm" color="primary.500" variant="ghost">
                Contacto
              </Button>
            </Link>
            <Link to="/nosotros">
              <Button fontSize="sm" color="primary.500" variant="ghost">
                Sobre Nosotros
              </Button>
            </Link>
            <Button
              fontSize="sm"
              colorScheme="gray"
              color="primary.500"
              bg="none"
              border="1px solid"
              borderColor="primary.500"
              onClick={handleDownload}
            >
              Descargar Catálogo
            </Button>
          </HStack>
          <Flex alignItems="center" flexDirection="row">
            <Flex position={"relative"}>
              <Cart />
            </Flex>
            <IconButton
              display={{ base: "flex", lg: "none" }}
              fontSize={30}
              icon={<HamburgerIcon color="primary.500" />}
              variant="ghost"
              ms={5}
              onClick={onOpen}
            />
          </Flex>
        </Flex>
      </Box>
      <Flex
        display={displayMenu}
        alignItems={"center"}
        justifyContent={"center"}
        position="sticky"
        top="0px"
        zIndex={5}
        bg="secondary.500"
        boxShadow="md"
      >
        <CatalogNav />
      </Flex>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <Text fontSize="lg" textAlign="center" m={0}>Menú</Text>
          </DrawerHeader>
          <Divider m={0} />
          <DrawerBody py={0}>
            <Link to="">
              <Button
                onClick={onClose}
                fontSize='sm'
                h={"45px"}
                w={"100%"}
                my={1}
                color="primary.500"
                variant="ghost"
              >
                Inicio
              </Button>
            </Link>
            <Divider m={0} />
            {!catalogs || !categoriesByCatalog ? (null) : (
              <CatalogSelect setIsNavOpen={onClose} categoriesByCatalog={categoriesByCatalog} catalogs={catalogs} />
            )}
            <Divider m={0} />
            <Link to="/contacto">
              <Button
                onClick={onClose}
                fontSize='sm'
                h={"45px"}
                w={"100%"}
                my={1}
                color="primary.500"
                variant="ghost"
              >
                Contacto
              </Button>
            </Link>
            <Divider m={0} />
            <Link to="/nosotros">
              <Button
                onClick={onClose}
                fontSize='sm'
                h={"45px"}
                w={"100%"}
                my={1}
                color="primary.500"
                variant="ghost"
              >
                Nosotros
              </Button>
            </Link>
            <Divider m={0} />
            <Button
              onClick={onClose}
              fontSize='sm'
              mt={1}
              mb={3}
              w={"100%"}
              colorScheme="gray"
              color="primary.500"
              bg="none"
              border="1px solid"
              borderColor="primary.500"
            >
              Descargar Catálogo
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
