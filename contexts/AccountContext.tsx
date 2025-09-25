import React, { createContext, ReactNode, useContext, useState } from "react";

// Definimos los posibles tipos de cuenta
type AccountType = "usuario" | "profesional" | null;

interface AccountContextType {
  accountType: AccountType;
  setAccountType: (type: AccountType) => void;
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

const AccountContext = createContext<AccountContextType | undefined>(undefined);

export const AccountProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [accountType, setAccountTypeState] = useState<AccountType>(null);

  const login = () => setIsAuthenticated(true);
  const logout = () => {
    setIsAuthenticated(false);
    setAccountTypeState(null); // Limpiamos tipo de cuenta al cerrar sesión
  };

  const setAccountType = (type: AccountType) => setAccountTypeState(type);

  return (
    <AccountContext.Provider
      value={{ accountType, setAccountType, isAuthenticated, login, logout }}
    >
      {children}
    </AccountContext.Provider>
  );
};

// Hook personalizado
export const useAccount = () => {
  const context = useContext(AccountContext);
  if (!context) {
    throw new Error("useAccount debe usarse dentro de AccountProvider");
  }
  return context;
};
