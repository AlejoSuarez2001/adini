import { Box, Heading, List, ListItem, ListIcon } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

export default function Service({ title, image, serviceList }) {
  return (
    <Box
      p={6}
      boxShadow="lg"
      borderRadius="md"
      bg="white"
      borderLeft={"1px solid #f3f3f3"}
      borderRight={"1px solid #f3f3f3"}
      maxW="sm"
      textAlign="center"
      borderBottom={"4px solid #6c63ff"}
      transition="transform 0.2s ease-in-out"
      _hover={{ transform: "translateY(-5px)" }}
    >
      <Box>
        <img
          src={image}
          alt={title}
          style={{ marginTop: "-130px", width: "100%", borderRadius: "8px" }}
        />
      </Box>
      <Heading textAlign={"left"} mt={8} mb={6} size="md" >
        {title}
      </Heading>
      <List p={0} spacing={2} textAlign="left">
        {serviceList.map((item, idx) => (
          <ListItem key={idx}>
            <ListIcon as={CheckCircleIcon} color="tertiary.500" />
            {item}
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
