import React, { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import data from "../../data.json";
import { Dialog } from "../components/ui/dialog";
import SignInForm from "../components/sign-in-form";
import SignUpForm from "../components/sign-up-form";

type AuthMode = "sign-in" | "sign-up";

interface AuthContextType {
  isAuthenticated: boolean;
  signIn: (email: string, password: string) => boolean;
  signUp: (email: string, password: string) => boolean;
  requireAuth: (callback: () => void) => void;
  switchAuthMode: (mode: AuthMode) => void;
  authMode: AuthMode;
  isDialogMode: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [showAuthModal, setShowAuthModal] = useState<boolean>(false);
  const [authMode, setAuthMode] = useState<AuthMode>("sign-in");

  const signIn = (email: string, password: string): boolean => {
    const user = data.users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      setIsAuthenticated(true);
      setShowAuthModal(false);
      return true;
    } else {
      setIsAuthenticated(false);
      return false;
    }
  };

  const signUp = (email: string, password: string): boolean => {
    if (!email || !password) {
      return false;
    }

    const existingUser = data.users.find((user) => user.email === email);

    if (existingUser) {
      return false;
    }

    setIsAuthenticated(true);
    setShowAuthModal(false);
    return true;
  };

  const requireAuth = (callback: () => void) => {
    if (!isAuthenticated) {
      setAuthMode("sign-in");
      setShowAuthModal(true);
    } else {
      callback();
    }
  };

  const switchAuthMode = (mode: AuthMode) => {
    setAuthMode(mode);
  };

  const value: AuthContextType = {
    isAuthenticated,
    signIn,
    signUp,
    requireAuth,
    switchAuthMode,
    authMode,
    isDialogMode: showAuthModal,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
      <Dialog
        open={showAuthModal}
        onOpenChange={setShowAuthModal}
        disableInteraction
      >
        {authMode === "sign-in" ? <SignInForm /> : <SignUpForm />}
      </Dialog>
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
