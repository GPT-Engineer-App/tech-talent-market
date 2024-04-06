import React from "react";
import { Box, Heading } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box as="nav" bg="blue.500" py={4}>
      <Heading as="h1" size="xl" color="white" textAlign="center">
        React Particles
      </Heading>
    </Box>
  );
};

export default Navbar;
