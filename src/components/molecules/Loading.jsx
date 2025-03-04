import { Spinner, Box } from "@chakra-ui/react";

export default function Loading() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" width="100%">
      <Spinner color="primary.500" size="lg" />
    </Box>
  );
}
