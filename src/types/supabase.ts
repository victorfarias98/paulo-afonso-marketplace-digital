
import type { Database } from '@/integrations/supabase/types';

// Define types based on the Database generated type
export type Profile = Database['public']['Tables']['profiles']['Row'];
export type Service = Database['public']['Tables']['services']['Row'];
export type ServiceInsert = Database['public']['Tables']['services']['Insert'];
export type ServiceUpdate = Database['public']['Tables']['services']['Update'];

// Define User type for the application
export type User = {
  id: string;
  name: string;
  email: string;
  avatar?: string;
};

// For service sub-items
export type ServiceItem = {
  name: string;
  price: string;
};
