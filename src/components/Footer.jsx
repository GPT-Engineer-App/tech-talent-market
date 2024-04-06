import React from "react";
import { Box, Text, VStack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" mt={8} py={4} borderTopWidth="1px">
      <VStack spacing={2}>
        <Text fontWeight="bold">React Particles</Text>
        <Text>123 Main St, Anytown, USA</Text>
        <Text>© 2024 React Particles. All rights reserved.</Text>
      </VStack>
    </Box>
  );
};

export default Footer;
