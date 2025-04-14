
import { Link } from 'react-router-dom';
import ServiceCard, { ServiceProps } from '@/components/services/ServiceCard';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

// Mock data
const featuredServices: ServiceProps[] = [
  {
    id: 1,
    title: "Corte e Hidratação Capilar",
    provider: {
      id: 101,
      name: "Salão Beleza Natural",
      avatar: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&q=75&fit=crop&w=64"
    },
    category: "Beleza",
    rating: 4.8,
    reviewCount: 124,
    location: "Centro, Paulo Afonso",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&q=75&fit=crop&w=600",
    price: "A partir de R$ 50"
  },
  {
    id: 2,
    title: "Serviços de Eletricista Residencial",
    provider: {
      id: 102,
      name: "Carlos Técnico",
      avatar: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&q=75&fit=crop&w=64"
    },
    category: "Serviços",
    rating: 4.9,
    reviewCount: 87,
    location: "Bairro Tancredo Neves, Paulo Afonso",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&q=75&fit=crop&w=600",
    price: "A partir de R$ 80"
  },
  {
    id: 3,
    title: "Aulas de Matemática e Física",
    provider: {
      id: 103,
      name: "Prof. Amanda Silva",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&q=75&fit=crop&w=64"
    },
    category: "Educação",
    rating: 5.0,
    reviewCount: 56,
    location: "BTN, Paulo Afonso",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&q=75&fit=crop&w=600",
    price: "R$ 60/hora"
  },
  {
    id: 4,
    title: "Desenvolvimento de Sites e Apps",
    provider: {
      id: 104,
      name: "TechPaulo Solutions",
      avatar: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&q=75&fit=crop&w=64"
    },
    category: "Tecnologia",
    rating: 4.7,
    reviewCount: 23,
    location: "Centro, Paulo Afonso",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&q=75&fit=crop&w=600",
    price: "Sob consulta"
  }
];

const FeaturedServices = () => {
  return (
    <section className="py-12 bg-paulo-gray">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="section-title">Serviços em Destaque</h2>
          <Link to="/explore">
            <Button variant="outline" className="flex items-center gap-2">
              <span>Ver Todos</span>
              <ChevronRight size={16} />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredServices.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
