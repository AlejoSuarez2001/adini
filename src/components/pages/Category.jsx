import React from "react";
import { Box } from "@chakra-ui/react";
import Divider from "../atoms/Divider";
import WhatsAppIcon from "../molecules/WhatsAppIcon";
import CartIcon from "../molecules/CartIcon";
import Footer from "../organisms/Footer";
import ProductsSection from "../organisms/ProductsSection";

export default function Category() {

    return (
        <Box>
            <ProductsSection />
            <Divider />
            <Footer />
            <CartIcon />
            <WhatsAppIcon position={"fixed"} />
        </Box>
    );
}
