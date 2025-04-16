
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Service } from '@/types/supabase';
import { useAuth } from '@/context/AuthContext';

// Função para buscar todos os serviços para a página explore
export const fetchAllServices = async () => {
  const { data, error } = await supabase
    .from('services')
    .select('*');
  
  if (error) {
    throw error;
  }
  
  return data as Service[];
};

// Função para buscar serviços por categoria
export const fetchServicesByCategory = async (category: string) => {
  const { data, error } = await supabase
    .from('services')
    .select('*')
    .eq('category', category);
  
  if (error) {
    throw error;
  }
  
  return data as Service[];
};

// Função para buscar um serviço específico por ID
export const fetchServiceById = async (id: string) => {
  const { data, error } = await supabase
    .from('services')
    .select('*')
    .eq('id', id)
    .single();
  
  if (error) {
    throw error;
  }
  
  return data as Service;
};

// Hook para buscar os serviços do usuário
export const useUserServices = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState<Service[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      if (!user) {
        setServices([]);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('services')
          .select('*')
          .eq('user_id', user.id);
        
        if (error) {
          throw error;
        }
        
        setServices(data as Service[]);
      } catch (err: any) {
        setError(err);
        console.error('Error fetching services:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, [user]);

  return { services, loading, error };
};

// Hook usando react-query para dados de serviços
export const useServices = () => {
  const { isLoading, data: services, error } = useQuery({
    queryKey: ['services'],
    queryFn: fetchAllServices
  });

  return {
    services: services || [],
    isLoading,
    error
  };
};

// Hook para serviços por categoria
export const useServicesByCategory = (category: string) => {
  const { isLoading, data: services, error } = useQuery({
    queryKey: ['services', category],
    queryFn: () => fetchServicesByCategory(category)
  });

  return {
    services: services || [],
    isLoading,
    error
  };
};

// Hook para um serviço específico
export const useService = (id: string) => {
  const { isLoading, data: service, error } = useQuery({
    queryKey: ['service', id],
    queryFn: () => fetchServiceById(id),
    enabled: !!id
  });

  return {
    service,
    isLoading,
    error
  };
};
