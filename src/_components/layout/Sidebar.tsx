import {
  Box,
  Flex,
  Drawer,
  DrawerTrigger,
  Portal,
  DrawerHeader,
  Heading,
  DrawerCloseTrigger,
  CloseButton,
  DrawerBody,
} from "@chakra-ui/react";
import { SidebarContent } from "./SidenavContent";

interface ISidenavProps {
  drawerOpen: boolean;
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Sidenav: React.FC<ISidenavProps> = ({
  drawerOpen,
  setDrawerOpen,
}) => (
  <>
    <Box
      display={{ base: "none", md: "block" }}
      w="64"
      pos="sticky"
      top="0"
      height="calc(100vh - 80px)" // header height = 80px
    >
      <SidebarContent onClose={() => setDrawerOpen(false)} />
    </Box>
    <Drawer.Root
      open={drawerOpen}
      onOpenChange={() => setDrawerOpen(!drawerOpen)}
    >
      <DrawerTrigger asChild>
        {/* Hidden because we use the hamburger icon in Header */}
        <Box display="none" />
      </DrawerTrigger>

      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <DrawerHeader>
              <Flex justify="space-between" align="center">
                <Heading size="md">Menu</Heading>
                <DrawerCloseTrigger asChild>
                  <CloseButton />
                </DrawerCloseTrigger>
              </Flex>
            </DrawerHeader>
            <DrawerBody p={0}>
              <SidebarContent onClose={() => setDrawerOpen(false)} />
            </DrawerBody>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  </>
);
