import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { Sidenav } from "./Sidebar";
import { Header } from "./Header";

interface IDashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<IDashboardLayoutProps> = ({
  children,
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <Flex
      minH="100vh"
      w="100vw"
      direction="column"
      bg="gray.50"
      _dark={{ bg: "gray.900" }}
    >
      <Header onOpen={() => setDrawerOpen(true)} />

      <Flex flex="1">
        <Sidenav drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />

        <Box
          p="8"
          overflowY="scroll"
          height="calc(100vh - 80px)"
          w={{ base: "100%", md: "calc(100% - 256px)" }}
        >
          <Box
            p="8"
            overflowY="scroll"
            bg="white"
            _dark={{ bg: "gray.800", borderColor: "gray.700" }}
            mx="auto"
            borderRadius="xl"
            m={6}
            boxShadow="lg"
            border="1px"
            borderColor="gray.200"
          >
            {children}
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};
