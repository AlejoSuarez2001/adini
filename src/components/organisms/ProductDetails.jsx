import React, { useEffect, useState } from 'react';
import { Box, Input, IconButton, Image, Text, Button, Spinner, Flex, VStack, Badge, Divider, Icon } from '@chakra-ui/react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProduct } from '../../contexts/ProductContext.jsx';
import { useCart } from '../../contexts/CartContext.jsx';
import { useMessage } from '../../contexts/MessageContext.jsx';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { RxDimensions } from "react-icons/rx";
import { FiExternalLink } from "react-icons/fi";


export default function ProductDetails() {
    const { productId } = useParams();
    const { getProduct } = useProduct();
    const { addMessage } = useMessage();
    
    const { addToCart } = useCart();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();

    const fetchProduct = async () => {
        const response = await getProduct(productId);
        setProduct(response);
        setLoading(false);
    };

    useEffect(() => {
        fetchProduct();
    }, [productId]);

    const sendMessage = () => {
        let message = `Hola, vengo desde la web de *${information?.name}* y me gustaría consultar sobre el siguiente producto y cantidad:\n\n`;

        message += `1. *${product.name}*\nCantidad: *${quantity}*\nPrecio Unitario: $${product.price.toFixed(2)}\nSubtotal: *$${(product.price * quantity).toFixed(2)}*\n`;

        message += `\n---------------------------------------\n\n*Total: $${(product.price * quantity).toFixed(2)}*\n\n`;
        message += `Aguardo su respuesta. ¡Gracias!`;

        const whatsappUrl = `https://wa.me/${information?.phone ? information.phone : ""}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
    };

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
        <Flex justifyContent="center" alignItems="center">
            {loading ? (
                <Flex minHeight={{ base: "400px", md: "600px", lg: "700px", xl: "800px" }} alignItems={"center"} justifyContent={"center"}>
                    <Spinner size="xl" />
                </Flex>
            ) : product?.success === false || product?.isActive === false ? (
                <Text
                    minHeight={{ base: "400px", md: "600px", lg: "700px", xl: "800px" }}
                    fontSize={{ base: "2xl", lg: "3xl" }}
                    color={"#1a365d"}
                    textAlign={"center"}
                    mt={20}
                >
                    No se ha encontrado el producto.
                </Text>
            ) : (
                <Box boxShadow="md" borderTop={"1px solid #f1f1f1"} mt={10} mx={5} p={8} maxWidth={{ base: '500px', md: '1100px' }}>
                    <Flex direction={{ base: 'column', md: 'row' }} alignItems={"start"}>
                        <Image
                            src={`${process.env.REACT_APP_API_URL}/${product.imgPath}`}
                            alt={product.name}
                            borderRadius="md"
                            boxSize={{ base: '300px', md: '400px' }}
                            objectFit="cover"
                            transition="transform 0.3s ease-in-out"
                            _hover={{ transform: "scale(1.02)" }}
                        />

                        <Flex display={{ base: "none", md: "inherit" }} mx={3} direction="column" justifyContent="center" alignItems="center" height="600px">
                            <Divider orientation="vertical" height="100%" />
                        </Flex>

                        <VStack w={{ base: "300px", md: "350px", lg: "500px" }} align="start" spacing={4} ml={{ md: 8 }} mt={{ base: 5, md: 0 }}>
                            <Text m={0} fontSize="2xl" fontWeight="bold">{product.name}</Text>
                            <Badge colorScheme={product.isAvailable ? "green" : "red"}>
                                {product.isAvailable ? "Disponible" : "Sin Stock"}
                            </Badge>
                            <Text m={0} fontSize="2xl" color="gray.600">Precio: ${product.price}</Text>

                            <Text m={0}>{product.description || 'Descripción no disponible.'}</Text>

                            <Divider my={1} />

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
                            <Button
                                onClick={handleAddToCart}
                                isDisabled={!product.isAvailable}
                                bg="gray.600"
                                color="white"
                                _hover={{ bg: "gray.700" }}
                                _active={{ bg: "gray.900" }}
                            >
                                Agregar al carrito
                            </Button>
                            <Button
                                color={"white"}
                                rightIcon={<Icon as={FiExternalLink} />}
                                bg="#38a169"
                                _hover={{ bg: "#24a755" }}
                                onClick={sendMessage}
                                isDisabled={!product.isAvailable}
                            >
                                Consultar
                            </Button>
                            <Button
                                variant="outline"
                                onClick={() => navigate(-1)}
                            >
                                Volver
                            </Button>
                            <VStack mt={5} align="start" spacing={2}>
                                <Flex alignItems="center">
                                    <Icon as={RxDimensions} mr={2} />
                                    <Text m={0} fontWeight="bold">Características:</Text>
                                </Flex>
                                <Text m={0}>Peso: {product.weight ? `${product.weight} kg` : 'Sin definir'}</Text>
                                <Text m={0}>Altura: {product.height ? `${product.height} cm` : 'Sin definir'}</Text>
                                <Text m={0}>Ancho: {product.width ? `${product.width} cm` : 'Sin definir'}</Text>
                                <Text m={0}>Profundidad: {product.depth ? `${product.depth} cm` : 'Sin definir'}</Text>
                            </VStack>
                        </VStack>
                    </Flex>

                </Box>
            )}
        </Flex>
    );
}
