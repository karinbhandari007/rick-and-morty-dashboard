import { system } from "@/constants";
import { ChakraProvider } from "@chakra-ui/react";
import type { ReactNode } from "react";

type ProviderProps = {
  children: ReactNode;
};

export const Provider = ({ children }: ProviderProps) => {
  return <ChakraProvider value={system}>{children}</ChakraProvider>;
};
