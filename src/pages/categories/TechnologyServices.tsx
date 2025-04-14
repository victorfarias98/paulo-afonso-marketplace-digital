
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ServiceCard from "@/components/services/ServiceCard";
import { Service } from "@/types";

const services: Service[] = [
  {
    id: 1,
    title: "Desenvolvimento de Sites",
    description: "Criação de sites profissionais e responsivos",
    provider: {
      id: 1,
      name: "WebTech Solutions",
      avatar: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=100",
    },
    category: "Tecnologia",
    rating: 4.9,
    reviewCount: 45,
    location: "Centro, Paulo Afonso",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=400",
    price: "Sob consulta",
    appointmentAvailable: true,
  },
  {
    id: 2,
    title: "Manutenção de Computadores",
    description: "Serviços de reparo e manutenção",
    provider: {
      id: 2,
      name: "TechCare",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100",
    },
    category: "Tecnologia",
    rating: 4.7,
    reviewCount: 78,
    location: "BTN, Paulo Afonso",
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?q=80&w=400",
    price: "A partir de R$ 80",
    appointmentAvailable: true,
  },
];

const TechnologyServices = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Tecnologia</h1>
      
      <div className="flex gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Busque por serviços de tecnologia..." 
            className="pl-10 w-full"
          />
        </div>
        <Button>Buscar</Button>
      </div>

      <div className="flex flex-wrap gap-6">
        {services.map((service) => (
          <div key={service.id} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)]">
            <ServiceCard 
              id={service.id}
              title={service.title}
              provider={service.provider}
              category={service.category}
              rating={service.rating}
              reviewCount={service.reviewCount}
              location={service.location}
              image={service.image}
              price={service.price}
              appointmentAvailable={service.appointmentAvailable}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologyServices;
