import React, { useState } from "react";
import { Box, Flex, Heading, Input, InputGroup, InputLeftElement, Button, Stack, Tag, Text, VStack, HStack, Icon, Container, Textarea, useToast } from "@chakra-ui/react";
import Footer from "../components/Footer";
import { FaSearch, FaEnvelope, FaUser } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

// Example data for developers
const developers = [
  { id: 1, name: "John Doe", location: "San Francisco, CA", technologies: ["React", "Node.js", ".NET"] },
  { id: 2, name: "Jane Smith", location: "New York, NY", technologies: ["Go", "JavaScript"] },
  { id: 3, name: "Emily Johnson", location: "Austin, TX", technologies: ["React", ".NET"] },
  // ... more developers
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDevelopers, setFilteredDevelopers] = useState(developers);
  const [selectedDeveloper, setSelectedDeveloper] = useState(null);
  const [message, setMessage] = useState("");
  const toast = useToast();

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (term.trim() === "") {
      setFilteredDevelopers(developers);
    } else {
      setFilteredDevelopers(developers.filter((dev) => dev.name.toLowerCase().includes(term.toLowerCase()) || dev.technologies.some((tech) => tech.toLowerCase().includes(term.toLowerCase()))));
    }
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    if (selectedDeveloper && message) {
      // Simulate sending a message
      toast({
        title: "Message sent!",
        description: `Your message has been sent to ${selectedDeveloper.name}.`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setMessage(""); // Clear message input after sending
    }
  };

  return (
    <Box>
      <Container maxW="container.xl" p={4}>
        <VStack spacing={8}>
          <Heading as="h1" size="xl">
            React Particles
          </Heading>
          <Text fontSize="xl">Your marketplace for specialized software talent in web technologies.</Text>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Icon as={FaSearch} color="gray.300" />
            </InputLeftElement>
            <Input placeholder="Search developers by name or technology..." value={searchTerm} onChange={handleSearch} />
          </InputGroup>
          <VStack spacing={4} align="stretch">
            {filteredDevelopers.map((dev) => (
              <Flex key={dev.id} borderWidth="1px" borderRadius="lg" p={4} alignItems="center" justifyContent="space-between">
                <Box>
                  <HStack spacing={2}>
                    <Icon as={FaUser} />
                    <Text fontWeight="bold">{dev.name}</Text>
                  </HStack>
                  <HStack spacing={2}>
                    <Icon as={MdLocationOn} />
                    <Text>{dev.location}</Text>
                  </HStack>
                  <HStack spacing={2}>
                    {dev.technologies.map((tech) => (
                      <Tag key={tech} size="sm">
                        {tech}
                      </Tag>
                    ))}
                  </HStack>
                </Box>
                <Button leftIcon={<FaEnvelope />} onClick={() => setSelectedDeveloper(dev)}>
                  Message
                </Button>
              </Flex>
            ))}
          </VStack>
          {selectedDeveloper && (
            <Stack spacing={3}>
              <Heading as="h3" size="lg">
                Send a Message
              </Heading>
              <Text>To: {selectedDeveloper.name}</Text>
              <Textarea placeholder="Write your message..." value={message} onChange={handleMessageChange} />
              <Button colorScheme="blue" onClick={sendMessage}>
                Send Message
              </Button>
            </Stack>
          )}
        </VStack>
      </Container>
      <Footer />
    </Box>
  );
};

export default Index;
