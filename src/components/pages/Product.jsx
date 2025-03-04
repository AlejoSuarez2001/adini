import React from "react";
import { Box } from "@chakra-ui/react";
import Divider from "../atoms/Divider";
import WhatsAppIcon from "../molecules/WhatsAppIcon";
import CartIcon from "../molecules/CartIcon";
import Footer from "../organisms/Footer";
import ProductDetails from "../organisms/ProductDetails";

export default function Product() {

    return (
        <Box>
            <ProductDetails />
            <Divider />
            <Footer />
            <CartIcon />
            <WhatsAppIcon position={"fixed"} />
        </Box>
    );
}
