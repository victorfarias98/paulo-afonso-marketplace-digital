
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ServiceCard from "@/components/services/ServiceCard";
import { Service } from "@/types";

const services: Service[] = [
  {
    id: 1,
    title: "Corte de Cabelo Moderno",
    description: "Cortes modernos para todos os tipos de cabelo",
    provider: {
      id: 1,
      name: "Salão Beauty",
      avatar: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=100",
    },
    category: "Beleza e Estética",
    rating: 4.8,
    reviewCount: 156,
    location: "Centro, Paulo Afonso",
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=400",
    price: "R$ 50",
    appointmentAvailable: true,
  },
  {
    id: 2,
    title: "Manicure e Pedicure",
    description: "Cuidados completos para suas unhas",
    provider: {
      id: 2,
      name: "Espaço Beleza",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100",
    },
    category: "Beleza e Estética",
    rating: 4.9,
    reviewCount: 203,
    location: "BTN, Paulo Afonso",
    image: "https://images.unsplash.com/photo-1610314281149-b6db6965d459?q=80&w=400",
    price: "R$ 70",
    appointmentAvailable: true,
  },
];

const BeautyServices = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Beleza e Estética</h1>
      
      <div className="flex gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Busque por serviços de beleza..." 
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

export default BeautyServices;
