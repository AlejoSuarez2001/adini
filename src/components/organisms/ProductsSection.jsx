import React, { useEffect, useState } from "react";
import {
    Box,
    Flex,
    Text,
    Input,
    Select,
    Spinner,
    InputGroup,
    InputRightElement,
    Button,
} from "@chakra-ui/react";
import { useParams } from 'react-router-dom';
import { FaTimes } from "react-icons/fa";
import { useCategory } from "../../contexts/CategoryContext";
import { useProduct } from "../../contexts/ProductContext";
import ProductCard from "../molecules/ProductCard";

export default function ProductsSection() {
    const { categoryId, searchedTerm } = useParams();
    const { getCategory } = useCategory();
    const { getProductsByCategory, getProducts } = useProduct();
    const [category, setCategory] = useState();
    const [products, setProducts] = useState();
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOrder, setSortOrder] = useState('default');

    const fetchCategory = async () => {
        if (categoryId) {
            const category = await getCategory(categoryId);
            setCategory(category);
            if (category?.success !== false) {
                const products = await getProductsByCategory(categoryId);
                setProducts(products);
                setFilteredProducts(products);
                clearSearch()
            }
        } else if (searchedTerm) {
            setSearchQuery(searchedTerm);
            setCategory({ name: 'Todos los productos' });
            const products = await getProducts();
            setProducts(products);
            setFilteredProducts(products);
        } else {
            setCategory({ name: 'Todos los productos' });
            const products = await getProducts();
            setProducts(products);
            setFilteredProducts(products);
            clearSearch()
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchCategory();
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [categoryId]);

    useEffect(() => {
        if (products?.success !== false && products) {
            let filtered = products;

            if (searchQuery) {
                filtered = filtered.filter(product =>
                    product.name.toLowerCase().includes(searchQuery.toLowerCase())
                );
            }

            filtered = filtered.filter(product => product.isActive);

            if (sortOrder === 'asc') {
                filtered = [...filtered].sort((a, b) => a.price - b.price);
            } else if (sortOrder === 'desc') {
                filtered = [...filtered].sort((a, b) => b.price - a.price);
            }

            setFilteredProducts(filtered);
        }
    }, [searchQuery, sortOrder, products]);

    const clearSearch = () => {
        setSearchQuery('');
    };

    return (
        <Flex alignItems={"center"} justifyContent={"center"} >
            <Box
                px={[5, 10]}
                width={"100%"}
                maxWidth={"1500px"}
                minHeight={{ base: "400px", md: "600px", lg: "700px", xl: "800px" }}
            >
                {loading ? (
                    <Flex minHeight={{ base: "400px", md: "600px", lg: "700px", xl: "800px" }} alignItems={"center"} justifyContent={"center"}>
                        <Spinner size="xl" />
                    </Flex>
                ) : category?.success === false ? (
                    <Text
                        fontSize={{ base: "2xl", lg: "3xl" }}
                        color={"#1a365d"}
                        textAlign={"center"}
                        mt={20}
                    >
                        No se ha encontrado la categoría.
                    </Text>
                ) : (
                    <>
                        <Text
                            fontSize={{ base: "2xl", lg: "3xl" }}
                            color={"#1a365d"}
                            borderBottom={"1px solid #1a365d"}
                            fontWeight={"bold"}
                            textAlign={"center"}
                            mt={12}
                            pb={5}
                        >
                            {category?.name}
                        </Text>
                        <Flex justifyContent={"space-between"} mb={12} gap={4}>
                            <InputGroup maxWidth={"400px"}>
                                <Input
                                    placeholder="Buscar productos"
                                    value={searchQuery}
                                    fontSize={{ base: "sm", md: "md" }}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                {searchQuery && (
                                    <InputRightElement>
                                        <Button size="sm" p="0" onClick={clearSearch}>
                                            <FaTimes />
                                        </Button>
                                    </InputRightElement>
                                )}
                            </InputGroup>
                            <Select
                                maxWidth={"400px"}
                                placeholder="Sin ordenar"
                                value={sortOrder}
                                fontSize={{ base: "sm", md: "md" }}
                                onChange={(e) => setSortOrder(e.target.value)}
                            >
                                <option value="asc">Precio: Ascendente</option>
                                <option value="desc">Precio: Descendente</option>
                            </Select>
                        </Flex>
                        <Flex justifyContent="center" gap={10} wrap={"wrap"} alignItems="flex-start">
                            {filteredProducts?.length > 0 ? (
                                filteredProducts.map(product => (
                                    <ProductCard key={product.id} product={product} />
                                ))
                            ) : (
                                <Text>No se encontraron productos.</Text>
                            )}
                        </Flex>
                    </>
                )}
            </Box>
        </Flex>
    );
}
