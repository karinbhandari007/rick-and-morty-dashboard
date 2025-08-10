import { Box, Button, Flex, VStack, Text } from "@chakra-ui/react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/MockAuthContext";
import { navItems } from "@/constants";
import { LOGIN_ROUTE } from "@/constants/navLinks";

interface ISidebarContentProps {
  onClose: () => void;
}

export const SidebarContent: React.FC<ISidebarContentProps> = ({ onClose }) => {
  const location = useLocation();
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate(LOGIN_ROUTE);
  };

  return (
    <Box
      w={{ base: "full", md: 64 }}
      h="full"
      bg="gray.800"
      color="white"
      p="6"
      pos="relative"
      borderRight="1px"
      borderColor="gray.700"
      _dark={{ bg: "gray.900", borderColor: "gray.600" }}
      overflowY="auto"
    >
      <VStack align="start" gap={8} h="full">
        {/* User Info */}
        <Box
          w="full"
          p={4}
          bg="gray.700"
          _dark={{ bg: "gray.800", borderColor: "gray.700" }}
          borderRadius="xl"
          border="1px"
          borderColor="gray.600"
          display="flex"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            w="12"
            h="12"
            bg="blue.500"
            borderRadius="full"
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontSize="lg"
            fontWeight="bold"
            color="white"
            mb={3}
          >
            {(user || "A")[0].toUpperCase()}
          </Box>
          <Text fontSize="sm" color="gray.300" mb={1}>
            Welcome back,
          </Text>
          <Text fontWeight="bold" color="white" fontSize="md">
            {user || "Admin"}
          </Text>
          <Text fontSize="xs" color="gray.400" mt={1}>
            Dashboard User
          </Text>
        </Box>

        <Box h="1px" bg="gray.600" w="full" />

        {/* Navigation */}
        <VStack align="start" gap={3} w="full" flex={1}>
          <Text
            fontSize="xs"
            color="gray.400"
            fontWeight="bold"
            textTransform="uppercase"
            letterSpacing="wide"
            mb={2}
          >
            Navigation
          </Text>
          {navItems.map(({ label, to, description }) => (
            <Button
              key={to}
              as={RouterLink}
              to={to}
              variant={location.pathname === to ? "solid" : "ghost"}
              justifyContent="flex-start"
              w="full"
              onClick={onClose}
              h="auto"
              p={4}
              borderRadius="lg"
              _hover={{
                bg: location.pathname === to ? "blue.600" : "gray.700",
                _dark: {
                  bg: location.pathname === to ? "blue.600" : "gray.800",
                },
                transform: "translateX(4px)",
              }}
              _active={{
                bg: "blue.700",
              }}
              transition="all 0.2s ease"
              position="relative"
              overflow="hidden"
              _before={{
                content: '""',
                position: "absolute",
                left: 0,
                top: 0,
                bottom: 0,
                width: location.pathname === to ? "4px" : "0px",
                bg: "blue.400",
                transition: "width 0.2s ease",
              }}
            >
              <Flex align="center" w="full">
                <Box textAlign="left" flex={1}>
                  <Text fontWeight="semibold">{label}</Text>
                  <Text fontSize="xs" color="gray.400" mt={1}>
                    {description}
                  </Text>
                </Box>
              </Flex>
            </Button>
          ))}
        </VStack>

        <Box h="1px" bg="gray.600" w="full" />

        {/* Logout */}
        <Box w="full">
          <Button
            onClick={handleLogout}
            width="100%"
            variant="solid"
            bg="red.500"
            color="white"
            opacity={0.5}
            _hover={{ bg: "red.600", opacity: 1 }}
          >
            Logout
          </Button>
        </Box>
      </VStack>
    </Box>
  );
};
