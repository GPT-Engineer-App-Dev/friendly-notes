import React, { useState } from "react";
import { Box, Heading, Button, Flex, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, ModalCloseButton, FormControl, FormLabel, Input, Textarea, useDisclosure, Card, CardBody, Text } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

const Index = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmit = (e) => {
    e.preventDefault();
    setNotes([...notes, { title, content }]);
    setTitle("");
    setContent("");
    onClose();
  };

  return (
    <Flex h="100vh" bg="gray.100">
      <Box w="250px" bg="purple.50" p={4}>
        <Heading size="md" mb={4}>
          Categories
        </Heading>
        {/* Categories will be added here */}
      </Box>
      <Box flex={1} p={4}>
        <Flex justify="space-between" align="center" mb={4}>
          <Heading>My Notes</Heading>
          <Button leftIcon={<FaPlus />} colorScheme="purple" onClick={onOpen}>
            New Note
          </Button>
        </Flex>
        <Flex wrap="wrap">
          {notes.map((note, index) => (
            <Card key={index} w="300px" m={2} bg="white" boxShadow="md">
              <CardBody>
                <Heading size="md" mb={2}>
                  {note.title}
                </Heading>
                <Text>{note.content}</Text>
              </CardBody>
            </Card>
          ))}
        </Flex>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create New Note</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit}>
            <ModalBody>
              <FormControl mb={4}>
                <FormLabel>Title</FormLabel>
                <Input value={title} onChange={(e) => setTitle(e.target.value)} required />
              </FormControl>
              <FormControl>
                <FormLabel>Content</FormLabel>
                <Textarea value={content} onChange={(e) => setContent(e.target.value)} required />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="purple" type="submit">
                Create
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default Index;
