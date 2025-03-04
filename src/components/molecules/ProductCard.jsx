import React, { useState } from "react";
import {
    Box,
    Flex,
    Tooltip,
    Image,
    Text,
    Badge,
    Button,
    IconButton,
    Input,
} from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { FaEye, FaPlus, FaMinus, FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../contexts/CartContext";
import { useMessage } from "../../contexts/MessageContext";

export default function ProductCard({ product }) {
    const { addToCart } = useCart();
    const { addMessage } = useMessage();
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (e) => {
        const value = Math.max(1, parseInt(e.target.value) || 1);
        setQuantity(value);
    };

    const incrementQuantity = () => {
        setQuantity((prev) => prev + 1);
    };

    const decrementQuantity = () => {
        setQuantity((prev) => Math.max(1, prev - 1));
    };

    const handleAddToCart = (e) => {
        addToCart(product, quantity);
        addMessage(`${product.name} (${quantity}) se ha añadido al carrito`);
        setQuantity(1);
    };

    return (
        <Box
            width={"275px"}
            boxShadow={"md"}
            overflow="hidden"
            transition="transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out"
            _hover={{ boxShadow: "lg" }}
        >
            <Link to={`/product/${product.id}`} key={product.id} style={{ textDecoration: 'none' }}>
                <Box height="250px" overflow="hidden" position="relative">
                    <Image
                        src={`${process.env.REACT_APP_API_URL}/${product.imgPath}`}
                        alt={product.name}
                        width="100%"
                        height="100%"
                        objectFit="cover"
                        mx="auto"
                        transition="transform 0.3s ease-in-out"
                        _hover={{ transform: "scale(1.1)" }}
                    />
                    {product.isAvailable === false ? (
                        <Badge position="absolute" top="0px" right={"0px"} borderRadius={0} colorScheme="red" px={"5px"}>
                            Sin Stock
                        </Badge>
                    ) : null}
                </Box>
            </Link>

            <Flex flexDirection={"column"} borderBottom={"2px solid #272847"} justifyContent="space-between" bg={"secondary.500"} px={4}>

                <Flex mb={5} mt={6} alignItems={"center"} justifyContent={"center"}>
                    <Text m={0} fontWeight="bold" fontSize="lg" w={"100%"}>
                        {product.name}
                    </Text>
                </Flex>

                <Box height={"1px"} bg={"black"} opacity={".2"} />

                <Flex my={3} justifyContent={"space-between"} alignItems={"center"}>
                    <Text m={0} fontWeight={"bold"} fontSize="xl">${product.price}</Text>

                    <Link to={`/product/${product.id}`} key={product.id} style={{ textDecoration: 'none' }}>
                        <Flex gap={2}>
                            <Tooltip label="Ver producto" aria-label="Ver producto">
                                <IconButton
                                    aria-label="Ver detalles"
                                    icon={<FaEye />}
                                    bg="gray.600"
                                    color="white"
                                    borderRadius="full"
                                    fontSize={{ base: "xl" }}
                                    _hover={{ bg: "gray.700" }}
                                />
                            </Tooltip>
                        </Flex>
                    </Link>

                </Flex>

                <Flex mb={3} justifyContent={"space-between"} alignItems={"center"}>
                    <Flex>
                        <IconButton
                            aria-label="Disminuir cantidad"
                            icon={<FaMinus />}
                            onClick={decrementQuantity}
                            variant="outline"
                            size="sm"
                        />
                        <Input
                            type="number"
                            min={1}
                            value={quantity}
                            onChange={handleQuantityChange}
                            width="60px"
                            textAlign="center"
                            size="sm"
                            mx={2}
                        />
                        <IconButton
                            aria-label="Aumentar cantidad"
                            icon={<FaPlus />}
                            onClick={incrementQuantity}
                            variant="outline"
                            size="sm"
                        />
                    </Flex>
                    <Tooltip label="Añadir al carrito" aria-label="Añadir producto al carrito">
                        <Button
                            rightIcon={<FaShoppingCart />}
                            aria-label="Añadir al carrito"
                            bg="gray.600"
                            color="white"
                            borderRadius="full"
                            fontWeight={"bold"}
                            fontSize={{ base: "lg" }}
                            _hover={{ bg: "gray.700" }}
                            onClick={handleAddToCart}
                            isDisabled={!product.isAvailable}
                        >
                            +
                        </Button>
                    </Tooltip>
                </Flex>
            </Flex>
        </Box>
    );
}
