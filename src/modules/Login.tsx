import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, VStack, Heading, Text } from "@chakra-ui/react";
import { useAuth } from "@/contexts/MockAuthContext";
import { CHARACTER_ROUTE } from "@/constants/navLinks";
import { TextField } from "@/_components";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (login(username, password)) {
        navigate(CHARACTER_ROUTE);
      } else {
        alert("Invalid username or password");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      minH="100vh"
      w="100vw"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="gray.50"
      _dark={{ bg: "gray.900" }}
      position="relative"
      overflow="hidden"
    >
      {/* Animated Background Pattern */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        backgroundImage="url('https://subsonic.com/c/33-category_default/rick-and-morty.jpg')"
        animation="float 20s ease-in-out infinite"
      />

      <Box
        w="full"
        maxW="450px"
        p={10}
        borderRadius="2xl"
        boxShadow="2xl"
        bg="white"
        border="1px"
        borderColor="gray.200"
        _dark={{ bg: "gray.800", borderColor: "gray.700" }}
        position="relative"
        zIndex="1"
        backdropFilter="blur(10px)"
        transform="translateY(0)"
        transition="all 0.3s ease"
        _hover={{ transform: "translateY(-2px)", boxShadow: "3xl" }}
      >
        <VStack gap={8} w="full">
          <Box textAlign="center" mb={4}>
            <Heading
              size="xl"
              bgGradient="linear(to-r, blue.400, purple.500)"
              bgClip="text"
              fontWeight="bold"
              color="gray.950"
            >
              Rick & Morty
            </Heading>
            <Text color="gray.500" _dark={{ color: "gray.500" }} fontSize="sm">
              Explore the multiverse
            </Text>
          </Box>

          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <VStack gap={6} w="full">
              <Box w="full">
                <TextField
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  maxW="100%"
                />
              </Box>

              <Box w="full">
                <TextField
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  maxW="100%"
                />
              </Box>

              <Button
                type="submit"
                loading={isLoading}
                width="100%"
                variant="solid"
                bg="blue.500"
                color="white"
                _hover={{ bg: "blue.600" }}
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </VStack>
          </form>

          {/* Enhanced Demo Credentials */}
          <Box
            p={6}
            borderRadius="xl"
            bg="blue.50"
            border="1px"
            borderColor="blue.200"
            _dark={{ bg: "gray.700", borderColor: "gray.600" }}
            w="full"
            textAlign="center"
          >
            <Text
              fontSize="sm"
              color="blue.700"
              _dark={{ color: "gray.400" }}
              fontWeight="medium"
            >
              <strong>Demo Credentials</strong>
            </Text>
            <VStack gap={1} mt={2}>
              <Text
                fontSize="xs"
                color="blue.600"
                _dark={{ color: "gray.500" }}
              >
                Username:{" "}
                <code
                  style={{
                    background: "rgba(59, 130, 246, 0.1)",
                    padding: "2px 6px",
                    borderRadius: "4px",
                  }}
                >
                  admin
                </code>
              </Text>
              <Text
                fontSize="xs"
                color="blue.600"
                _dark={{ color: "gray.500" }}
              >
                Password:{" "}
                <code
                  style={{
                    background: "rgba(59, 130, 246, 0.1)",
                    padding: "2px 6px",
                    borderRadius: "4px",
                  }}
                >
                  1234
                </code>
              </Text>
            </VStack>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
};

export default Login;
