
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/services/ServiceCard";
import { useServices } from "@/hooks/useServices";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SearchAutocomplete from "@/components/search/SearchAutocomplete";

const Explore = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialQuery = queryParams.get('q') || '';
  const { services, isLoading } = useServices();
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  
  // Update URL when search changes
  useEffect(() => {
    const newUrl = searchQuery 
      ? `/explore?q=${encodeURIComponent(searchQuery)}` 
      : '/explore';
    
    window.history.replaceState({}, '', newUrl);
  }, [searchQuery]);
  
  // Filter services based on search query
  const filteredServices = searchQuery
    ? services.filter(service => 
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        service.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.category.toLowerCase().includes(searchQuery.toLowerCase())
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
              <SearchAutocomplete 
                placeholder="Busque por serviços ou profissionais..." 
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
                      id: service.user_id, 
                      name: "Profissional", 
                      avatar: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=100"
                    }}
                    category={service.category}
                    rating={4.5}
                    reviewCount={10}
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
