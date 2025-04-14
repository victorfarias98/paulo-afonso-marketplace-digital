
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ServiceCard from "@/components/services/ServiceCard";
import { Service } from "@/types";

const services: Service[] = [
  {
    id: 1,
    title: "Personal Trainer",
    description: "Treinos personalizados e acompanhamento",
    provider: {
      id: 1,
      name: "Academia Fit",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100",
    },
    category: "Saúde e Bem-estar",
    rating: 5.0,
    reviewCount: 67,
    location: "Centro, Paulo Afonso",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=400",
    price: "R$ 100/hora",
    appointmentAvailable: true,
  },
  {
    id: 2,
    title: "Nutricionista",
    description: "Consultas e planos alimentares",
    provider: {
      id: 2,
      name: "Dra. Ana Nutrição",
      avatar: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=100",
    },
    category: "Saúde e Bem-estar",
    rating: 4.9,
    reviewCount: 89,
    location: "BTN, Paulo Afonso",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=400",
    price: "R$ 150/consulta",
    appointmentAvailable: true,
  },
];

const HealthServices = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Saúde e Bem-estar</h1>
      
      <div className="flex gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Busque por serviços de saúde..." 
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

export default HealthServices;
