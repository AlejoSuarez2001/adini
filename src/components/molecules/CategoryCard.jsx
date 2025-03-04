import {
  Box,
  useBreakpointValue,
  Image,
  Text,
  Stack,
} from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';

export default function CategoryCard({ imageSrc, title, description, link }) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(link);
  }

  return (
    <Box
      onClick={() => handleNavigate()}
      width={"300px"}
      borderWidth="1px"
      cursor={"pointer"}
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      transition="0.2s"
      _hover={{
        boxShadow: "lg",
        bg: "secondary.500",
        transform: "translateY(-5px)"
      }}
    >
      <Box height="300px" overflow="hidden">
        <Image
          src={imageSrc}
          alt={title}
          width="100%"
          height="100%"
          objectFit="cover"
          mx="auto"
        />
      </Box>
      <Stack p={4}>
        <Text
          fontWeight="bold"
          color={"#1a365d"}
          fontSize={useBreakpointValue({ base: "md", md: "lg" })}
          m={0}
        >
          {title}
        </Text>
        <Text
          color={"#1a365d"}
          fontSize={useBreakpointValue({ base: "sm", md: "md" })}
          m={0}
        >
          {description}
        </Text>
      </Stack>
    </Box>
  );
}
