
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

type User = {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  services?: Service[];
};

type Service = {
  id: string;
  title: string;
  description: string;
  category: string;
  location: string;
  price: string;
  image?: string;
  services: Array<{ name: string; price: string }>;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  login: (user: User) => void;
  logout: () => void;
  addService: (service: Omit<Service, "id">) => void;
  updateService: (serviceId: string, updatedService: Partial<Service>) => void;
  removeService: (serviceId: string) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    // Check if the user is already logged in
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Error parsing user from localStorage:", error);
        localStorage.removeItem("user");
      }
    }
  }, []);

  const login = (userData: User) => {
    // Initialize services array if not present
    const userWithServices = {
      ...userData,
      services: userData.services || []
    };
    
    setUser(userWithServices);
    setIsAuthenticated(true);
    localStorage.setItem("user", JSON.stringify(userWithServices));
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("user");
  };

  const addService = (service: Omit<Service, "id">) => {
    if (!user) return;

    const newService = {
      ...service,
      id: Math.random().toString(36).substr(2, 9)
    };

    const updatedUser = {
      ...user,
      services: [...(user.services || []), newService]
    };

    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
  };

  const updateService = (serviceId: string, updatedService: Partial<Service>) => {
    if (!user || !user.services) return;

    const updatedServices = user.services.map(service => 
      service.id === serviceId ? { ...service, ...updatedService } : service
    );

    const updatedUser = {
      ...user,
      services: updatedServices
    };

    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
  };

  const removeService = (serviceId: string) => {
    if (!user || !user.services) return;

    const updatedServices = user.services.filter(service => service.id !== serviceId);

    const updatedUser = {
      ...user,
      services: updatedServices
    };

    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
  };

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        isAuthenticated, 
        login, 
        logout, 
        addService, 
        updateService, 
        removeService 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
