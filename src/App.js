import { ChakraProvider } from "@chakra-ui/react";
import theme from "./utils/theme.js";
import Navigation from "./navigation/Navigation.jsx";

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navigation />
    </ChakraProvider>
  );
}
