import { createContext, useContext, useState } from 'react';

interface Roles {
  mentee: boolean;
  mentor: boolean;
}

// Define the interface for AuthUser
interface AuthUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  username: string;
  avatar?: string; // optional property with a default value
  roles: Roles;
  isAdmin: boolean;
  createdAt?: string; // optional timestamp
  updatedAt?: string; // optional timestamp
}

// Define the interface for AuthContextType
interface AuthContextType {
  authUser: AuthUser | null;
  setAuthUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

interface AuthContextProviderProps {
  children: React.ReactNode;
}

export const useAuthContext = (): AuthContextType | undefined => {
  return useContext(AuthContext);
};

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const [authUser, setAuthUser] = useState<AuthUser | null>(() => {
    try {
      const storedUser = localStorage.getItem('auth-user-info');
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error('Error parsing auth user info from localStorage', error);
      return null;
    }
  });

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
