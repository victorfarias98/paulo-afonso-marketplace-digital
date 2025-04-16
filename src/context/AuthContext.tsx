import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { supabase } from "@/integrations/supabase/client";
import { User, Service, ServiceItem, ServiceInsert } from "@/types/supabase";
import { useToast } from "@/hooks/use-toast";

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, name: string, businessName: string) => Promise<void>;
  logout: () => Promise<void>;
  addService: (service: ServiceInsert) => Promise<void>;
  updateService: (serviceId: string, updatedService: Partial<ServiceInsert>) => Promise<void>;
  removeService: (serviceId: string) => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const { toast } = useToast();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .single();
        
        if (profile) {
          setUser({
            id: profile.id,
            name: profile.name || '',
            email: profile.email || '',
            avatar: profile.avatar
          });
          setIsAuthenticated(true);
        }
      }
    };

    checkUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === 'SIGNED_IN' && session) {
          const { data: profile } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', session.user.id)
            .single();
          
          if (profile) {
            setUser({
              id: profile.id,
              name: profile.name || '',
              email: profile.email || '',
              avatar: profile.avatar
            });
            setIsAuthenticated(true);
          }
        } else if (event === 'SIGNED_OUT') {
          setUser(null);
          setIsAuthenticated(false);
        }
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        throw error;
      }

      if (data.user) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', data.user.id)
          .single();
        
        if (profile) {
          setUser({
            id: profile.id,
            name: profile.name || '',
            email: profile.email || '',
            avatar: profile.avatar
          });
          setIsAuthenticated(true);
        }
      }
    } catch (error: any) {
      toast({
        title: "Erro ao fazer login",
        description: error.message || "Verifique suas credenciais e tente novamente.",
        variant: "destructive",
      });
      throw error;
    }
  };

  const signUp = async (email: string, password: string, name: string, businessName: string) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name,
            businessName,
          },
        },
      });

      if (error) {
        throw error;
      }

      if (data.user) {
        toast({
          title: "Cadastro realizado com sucesso!",
          description: "Verifique seu email para confirmar a conta.",
        });
      }
    } catch (error: any) {
      toast({
        title: "Erro ao fazer cadastro",
        description: error.message || "Tente novamente mais tarde.",
        variant: "destructive",
      });
      throw error;
    }
  };

  const logout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        throw error;
      }
      setUser(null);
      setIsAuthenticated(false);
    } catch (error: any) {
      toast({
        title: "Erro ao sair",
        description: error.message || "Tente novamente mais tarde.",
        variant: "destructive",
      });
    }
  };

  const addService = async (service: ServiceInsert) => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('services')
        .insert({
          ...service,
          user_id: user.id,
        })
        .select();

      if (error) {
        throw error;
      }

      toast({
        title: "Serviço cadastrado com sucesso!",
        description: `${service.title} foi adicionado à sua lista de serviços.`,
      });
    } catch (error: any) {
      toast({
        title: "Erro ao cadastrar serviço",
        description: error.message || "Tente novamente mais tarde.",
        variant: "destructive",
      });
    }
  };

  const updateService = async (serviceId: string, updatedService: Partial<ServiceInsert>) => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('services')
        .update(updatedService)
        .eq('id', serviceId)
        .eq('user_id', user.id);

      if (error) {
        throw error;
      }

      toast({
        title: "Serviço atualizado com sucesso!",
        description: "As alterações foram salvas.",
      });
    } catch (error: any) {
      toast({
        title: "Erro ao atualizar serviço",
        description: error.message || "Tente novamente mais tarde.",
        variant: "destructive",
      });
    }
  };

  const removeService = async (serviceId: string) => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('services')
        .delete()
        .eq('id', serviceId)
        .eq('user_id', user.id);

      if (error) {
        throw error;
      }

      toast({
        title: "Serviço removido com sucesso!",
        description: "O serviço foi removido da sua lista.",
      });
    } catch (error: any) {
      toast({
        title: "Erro ao remover serviço",
        description: error.message || "Tente novamente mais tarde.",
        variant: "destructive",
      });
    }
  };

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        isAuthenticated, 
        login, 
        signUp,
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
