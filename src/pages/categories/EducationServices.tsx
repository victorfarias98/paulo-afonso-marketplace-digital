
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ServiceCard from "@/components/services/ServiceCard";
import { Service } from "@/types";

const services: Service[] = [
  {
    id: 1,
    title: "Aulas de Matemática",
    description: "Professor experiente para todos os níveis",
    provider: {
      id: 1,
      name: "Prof. Ricardo Silva",
      avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=100",
    },
    category: "Educação e Aulas",
    rating: 4.9,
    reviewCount: 125,
    location: "Centro, Paulo Afonso",
    image: "https://images.unsplash.com/photo-1596496050827-8299e0220de1?q=80&w=400",
    price: "R$ 60/hora",
    appointmentAvailable: true,
  },
  {
    id: 2,
    title: "Curso de Inglês",
    description: "Aulas personalizadas de inglês",
    provider: {
      id: 2,
      name: "English School",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100",
    },
    category: "Educação e Aulas",
    rating: 4.8,
    reviewCount: 98,
    location: "BTN, Paulo Afonso",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=400",
    price: "R$ 80/hora",
    appointmentAvailable: true,
  },
];

const EducationServices = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Educação e Aulas</h1>
      
      <div className="flex gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Busque por aulas e cursos..." 
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

export default EducationServices;
