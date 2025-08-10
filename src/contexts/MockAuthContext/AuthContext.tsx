import { createContext } from "react";

type AuthContextType = {
  user: string | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
