
export interface User {
  id: number;
  name: string;
  avatar: string;
  email?: string;
  phone?: string;
}

export interface ServiceProvider {
  id: number;
  name: string;
  avatar: string;
  email?: string;
  phone?: string;
  location?: string;
  about?: string;
  rating?: number;
  reviewCount?: number;
}

export interface Service {
  id: number;
  title: string;
  description?: string;
  provider: ServiceProvider;
  category: string;
  rating: number;
  reviewCount: number;
  location: string;
  image: string;
  images?: string[];
  price?: string;
  appointmentAvailable?: boolean;
  services?: Array<{ name: string; price: string }>;
}

export interface Review {
  id: number;
  user: {
    name: string;
    avatar: string;
  };
  rating: number;
  date: string;
  comment: string;
  providerResponse?: string;
}

export interface Appointment {
  id: number;
  service: Service;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'completed' | 'canceled';
  user?: User;
  provider?: ServiceProvider;
}
