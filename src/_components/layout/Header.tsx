import { Box, Flex, Heading, IconButton, Image, Text } from "@chakra-ui/react";

interface IHeaderProps {
  onOpen: () => void;
}

export const Header: React.FC<IHeaderProps> = ({ onOpen }) => (
  <Flex
    as="header"
    align="center"
    justify="space-between"
    py="2"
    pl="2"
    pr="8"
    bg="white"
    borderBottom="1px"
    borderColor="gray.200"
    _dark={{ bg: "gray.800", borderColor: "gray.700" }}
    boxShadow="sm"
    backdropFilter="blur(10px)"
  >
    <Flex align="center" gap={4}>
      <Image
        src="/logo.jpg"
        alt="logo"
        objectFit="contain"
        width="100%"
        height="70px"
      />
      <Box w="full">
        <Heading
          size="md"
          bgGradient="linear(to-r, blue.500, purple.500)"
          bgClip="text"
          fontWeight="bold"
          color="gray.950"
        >
          Rick & Morty
        </Heading>
        <Text fontSize="xs" color="gray.500" _dark={{ color: "gray.400" }}>
          Character & Episode Database
        </Text>
      </Box>
    </Flex>

    <IconButton
      aria-label="Open menu"
      variant="ghost"
      onClick={onOpen}
      display={{ base: "flex", md: "none" }}
      _hover={{ bg: "gray.100", _dark: { bg: "gray.700" } }}
      borderRadius="lg"
    >
      <Box fontSize="20px" color="gray.950">
        ☰
      </Box>
    </IconButton>
  </Flex>
);
