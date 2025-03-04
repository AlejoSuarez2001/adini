import { Box, Flex } from "@chakra-ui/react";
import InformationItem from "../molecules/InformationItem";

const InformationSection = () => {

    return (
        <Flex justifyContent={"center"} alignItems={"center"}>
            <Box>
                <Box height={{ base: 0, xl: 70 }} />
                <InformationItem
                    direction="row"
                    right="50px"
                    left="none"
                    backgroundColor="#faf6ed"
                    textColor="#1a365d"
                    marginR="none"
                    marginL="25%"
                    img="/assets/cream.png"
                    title="Dulce de Leche"
                    description="Versatilidad, firmeza y alto rendimiento, tanto para aplicaciones de pastelería como de cocina. Aseguran estabilidad y resultados uniformes en todas las preparaciones."
                    link="dulce de leche"
                />
                <Box height={{ base: 70, xl: 140 }} />
                <InformationItem
                    direction="row-reverse"
                    right="none" left="50px"
                    backgroundColor="#ffeac5"
                    textColor="#1a365d"
                    marginR="25%"
                    marginL="none"
                    img="/assets/burger.png"
                    title="Cheddar Líquido y Feteado"
                    description="Fundido ideal, textura cremosa y sabor auténtico y equilibrado para lograr las hamburguesas perfectas."
                    link="cheddar"
                />
            </Box>
        </Flex>
    );
};

export default InformationSection;
