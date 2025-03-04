import { Flex } from "@chakra-ui/react";
import Cart from "../organisms/Cart";

const CartIcon = () => {
    return (
        <Flex
            display={{ base: "none", lg: "flex" }}
            position="fixed"
            bottom="80px"
            right="20px"
            bg="secondary.500"
            borderRadius="full"
            justifyContent="center"
            p={"3px"}
            _hover={{ bg: "#e7e9ff" }}
        >
            <Cart border="full" />
        </Flex>
    );
};

export default CartIcon;
