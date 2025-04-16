
import { Link } from 'react-router-dom';
import ServiceCard from '@/components/services/ServiceCard';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { useServices } from '@/hooks/useServices';
import { useState, useEffect } from 'react';
import { Service } from '@/types/supabase';

const FeaturedServices = () => {
  const { services, isLoading } = useServices();
  const [featuredServices, setFeaturedServices] = useState<Service[]>([]);
  
  useEffect(() => {
    if (services && services.length > 0) {
      // Mostrar apenas os primeiros 4 serviços ou menos se não houver 4
      setFeaturedServices(services.slice(0, 4));
    }
  }, [services]);

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
        
        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <p>Carregando serviços...</p>
          </div>
        ) : featuredServices.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service) => (
              <ServiceCard 
                key={service.id} 
                id={service.id}
                title={service.title}
                provider={{
                  id: service.user_id,
                  name: "Profissional", // Idealmente, isso viria da tabela de perfis
                  avatar: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=100"
                }}
                category={service.category}
                rating={4.5} // Isso viria de uma tabela de avaliações
                reviewCount={10} // Isso viria de uma tabela de avaliações
                location={service.location}
                image={service.image || "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=400"}
                price={service.price}
                appointmentAvailable={true}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p>Nenhum serviço disponível no momento.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedServices;
