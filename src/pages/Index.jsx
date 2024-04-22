import { Box, Button, Container, Heading, Image, Text, VStack, Link } from "@chakra-ui/react";
import { FaRegNewspaper, FaSignInAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <VStack spacing={8} py={10}>
        <Image src="https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG5ld3N8ZW58MHx8fHwxNzEzODE5MDI2fDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" alt="Business News" boxSize="300px" objectFit="cover" />
        <Heading as="h1" size="2xl" textAlign="center">
          Business & Startup News
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Stay updated with the latest trends in business and startup ecosystems.
        </Text>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading fontSize="xl">Access Premium Content</Heading>
          <Text mt={4}>Subscribe to our newsletter to get unlimited access to exclusive insights and analyses.</Text>
          <Button rightIcon={<FaSignInAlt />} colorScheme="blue" mt={4}>
            Sign Up Now
          </Button>
        </Box>
        <Link href="#" color="teal.500" fontSize="lg">
          <Button leftIcon={<FaRegNewspaper />} colorScheme="green" variant="outline">
            Read Free Articles
          </Button>
        </Link>
      </VStack>
    </Container>
  );
};

export default Index;
