import { PASSWORD, USERNAME } from "@/constants";
import { useState } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<string | null>(() =>
    localStorage.getItem("user")
  );

  const login = (username: string, password: string): boolean => {
    if (username === USERNAME && password === PASSWORD) {
      setUser(username);
      localStorage.setItem("user", username);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
