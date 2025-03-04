import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  List,
  Button,
  Badge,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  IconButton,
  ListItem,
  Icon,
  Divider,
} from "@chakra-ui/react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useCart } from "../../contexts/CartContext";
import { FiExternalLink } from "react-icons/fi";


export default function Cart({ border = "base" }) {
  const { cart, addToCart, removeFromCart, totalAmount } = useCart();
  
  const [drawerOpen, setDrawerOpen] = useState(false);

  const totalProducts = cart.reduce((total, item) => total + item.quantity, 0);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleRemove = (item) => {
    removeFromCart(item, 1);
  };

  const handleAdd = (item) => {
    addToCart(item, 1);
  };

  const handleRemoveAll = (item) => {
    removeFromCart(item, item.quantity);
  };

  const sendMessage = () => {
    let message = `Hola, vengo desde la web de *${information?.name}* y me gustaría consultar sobre los siguientes productos y cantidades:\n\n`;

    cart.forEach((item, index) => {
      message += `${index + 1}. *${item.name}*\nCantidad: *${
        item.quantity
      }*\nPrecio Unitario: $${item.price.toFixed(2)}\nSubtotal: *$${(
        item.price * item.quantity
      ).toFixed(2)}*\n`;
    });

    message += `\n---------------------------------------\n\n*Total: $${totalAmount.toFixed(
      2
    )}*\n\n`;
    message += `Aguardo su respuesta. ¡Gracias!`;

    const whatsappUrl = `https://wa.me/${
      information?.phone ? information.phone : ""
    }?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <IconButton
        onClick={toggleDrawer(true)}
        borderRadius={border}
        aria-label="open drawer"
        icon={<MdOutlineShoppingCart color="044978" />}
        fontSize={27.5}
        variant="ghost"
      />
      <Badge
        position="absolute"
        right="0px"
        bg="gray.600"
        color="white"
        fontSize="xs"
        borderRadius="full"
      >
        {totalProducts}
      </Badge>

      <Drawer
        isOpen={drawerOpen}
        placement="right"
        onClose={toggleDrawer(false)}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader py={5}>
            <Text fontSize="lg" textAlign="center" m={0}>
              Carrito
            </Text>
          </DrawerHeader>
          <Divider m={0} />
          <DrawerBody>
            {cart.length > 0 ? (
              <>
                <List p={0} mx={0} my={1}>
                  {cart.map((item, index) => (
                    <ListItem
                      key={index}
                      d="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      mb={5}
                    >
                      <Flex justifyContent={"space-between"}>
                        <Box>
                          <Text m={0} fontSize="md">
                            x{item.quantity} {item.name}
                          </Text>
                        </Box>
                        <Box
                          _hover={{ color: "red.600" }}
                          _active={{
                            transform: "scale(0.95)",
                            color: "red.800",
                          }}
                        >
                          <IoMdClose
                            onClick={() => handleRemoveAll(item)}
                            ml={2}
                            bg={"transparent"}
                            cursor={"pointer"}
                            fontSize={"sm"}
                          />
                        </Box>
                      </Flex>
                      <Flex
                        my={2}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                      >
                        <Box>
                          <Text m={0} fontSize="sm" color="gray.500">
                            ${item.price} c/u
                          </Text>
                          <Text m={0} fontSize="sm" color="gray.500">
                            ${item.price * item.quantity}
                          </Text>
                        </Box>
                        <Box>
                          <IconButton
                            aria-label="Disminuir cantidad"
                            icon={<FaMinus />}
                            onClick={() => handleRemove(item)}
                            size="sm"
                          />
                          <IconButton
                            aria-label="Aumentar cantidad"
                            ml={2}
                            onClick={() => handleAdd(item)}
                            icon={<FaPlus />}
                            size="sm"
                          />
                        </Box>
                      </Flex>
                    </ListItem>
                  ))}
                </List>
              </>
            ) : (
              <Box p={4} textAlign="center">
                <Text fontSize="md" color="gray.500">
                  Su carrito de está vacío
                </Text>
              </Box>
            )}
          </DrawerBody>
          <Divider m={0} />
          <DrawerFooter>
            <Flex w={"100%"} flexDirection={"column"}>
              <Flex justifyContent="space-between" alignItems={"center"} px={1}>
                <Text fontSize="lg" fontWeight="bold">
                  Total:
                </Text>
                <Text fontSize="lg" fontWeight="bold">
                  ${totalAmount.toFixed(2)}
                </Text>
              </Flex>

              <Flex justifyContent="flex-end">
                <Button variant="outline" mr={3} onClick={toggleDrawer(false)}>
                  Cerrar
                </Button>
                <Button
                  color={"white"}
                  rightIcon={<Icon as={FiExternalLink} />}
                  bg="#38a169"
                  _hover={{ bg: "#24a755" }}
                  isDisabled={cart.length === 0}
                  onClick={sendMessage}
                >
                  Consultar
                </Button>
              </Flex>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
