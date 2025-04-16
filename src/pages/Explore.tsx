
import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ServiceCard from "@/components/services/ServiceCard";
import { useServices } from "@/hooks/useServices";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Explore = () => {
  const { services, isLoading } = useServices();
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter services based on search query
  const filteredServices = searchQuery
    ? services.filter(service => 
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        service.description?.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : services;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Explore os Serviços</h1>
          
          <div className="flex gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Busque por serviços ou profissionais..." 
                className="pl-10 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button onClick={() => setSearchQuery("")} variant="outline">
              Limpar
            </Button>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <p>Carregando serviços...</p>
            </div>
          ) : filteredServices.length > 0 ? (
            <div className="flex flex-wrap gap-6">
              {filteredServices.map((service) => (
                <div key={service.id} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)]">
                  <ServiceCard 
                    id={service.id}
                    title={service.title}
                    provider={{
                      id: service.user_id, // This is a string, but our ServiceCard expects a number
                      name: "Profissional", // This would ideally come from a join with profiles
                      avatar: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=100"
                    }}
                    category={service.category}
                    rating={4.5} // This would come from a reviews table
                    reviewCount={10} // This would come from a reviews table
                    location={service.location}
                    image={service.image || "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=400"}
                    price={service.price}
                    appointmentAvailable={true}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">
                Nenhum serviço encontrado. Tente uma busca diferente.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Explore;
