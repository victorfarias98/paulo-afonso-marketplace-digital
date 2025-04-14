
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ServiceCard from "@/components/services/ServiceCard";
import { Service } from "@/types";

const services: Service[] = [
  {
    id: 1,
    title: "Pintura Residencial",
    description: "Serviço profissional de pintura para sua casa",
    provider: {
      id: 1,
      name: "Pinturas Profissionais",
      avatar: "https://images.unsplash.com/photo-1618090584176-7132b9911657?q=80&w=100",
    },
    category: "Reformas e Construção",
    rating: 4.7,
    reviewCount: 89,
    location: "Centro, Paulo Afonso",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=400",
    price: "Sob consulta",
    appointmentAvailable: true,
  },
  {
    id: 2,
    title: "Instalação Elétrica",
    description: "Serviços elétricos residenciais e comerciais",
    provider: {
      id: 2,
      name: "Eletricista 24h",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100",
    },
    category: "Reformas e Construção",
    rating: 4.9,
    reviewCount: 156,
    location: "BTN, Paulo Afonso",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=400",
    price: "A partir de R$ 100",
    appointmentAvailable: true,
  },
];

const ConstructionServices = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Reformas e Construção</h1>
      
      <div className="flex gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Busque por serviços de construção..." 
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

export default ConstructionServices;
