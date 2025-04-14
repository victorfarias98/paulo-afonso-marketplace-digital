
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BookingForm from '@/components/booking/BookingForm';
import ReviewCard, { ReviewProps } from '@/components/reviews/ReviewCard';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, MapPin, Phone, Mail, Share2, Heart, Calendar } from 'lucide-react';

// Mock data for this example
const serviceData = {
  id: 1,
  title: "Corte e Hidratação Capilar",
  description: "Serviço completo de corte de cabelo com hidratação profunda, finalização e escova. Utilizamos produtos de alta qualidade para garantir resultados duradouros e cabelos saudáveis.",
  provider: {
    id: 101,
    name: "Salão Beleza Natural",
    avatar: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&q=75&fit=crop&w=64",
    phone: "(75) 99999-9999",
    email: "contato@belezanatural.com",
    location: "Rua das Flores, 123 - Centro, Paulo Afonso",
    about: "Salão especializado em tratamentos capilares naturais, com mais de 10 anos de experiência no mercado de Paulo Afonso."
  },
  category: "Beleza",
  rating: 4.8,
  reviewCount: 124,
  location: "Centro, Paulo Afonso",
  images: [
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&q=75&fit=crop&w=800",
    "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&q=75&fit=crop&w=500",
    "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&q=75&fit=crop&w=500"
  ],
  price: "A partir de R$ 50",
  services: [
    { name: "Corte Feminino", price: "R$ 50" },
    { name: "Corte Masculino", price: "R$ 30" },
    { name: "Hidratação", price: "R$ 40" },
    { name: "Escova", price: "R$ 35" },
    { name: "Coloração", price: "R$ 80" }
  ]
};

const reviews: ReviewProps[] = [
  {
    id: 1,
    user: {
      name: "Maria Silva",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&q=75&fit=crop&w=64"
    },
    rating: 5,
    date: "15/03/2023",
    comment: "Excelente atendimento! Amei o resultado do meu corte e a hidratação deixou meu cabelo super macio."
  },
  {
    id: 2,
    user: {
      name: "João Pereira",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&q=75&fit=crop&w=64"
    },
    rating: 4,
    date: "02/02/2023",
    comment: "Muito bom o serviço, só demorou um pouco mais do que o esperado.",
    providerResponse: "Obrigado pelo feedback, João! Estamos trabalhando para melhorar nosso tempo de atendimento."
  },
  {
    id: 3,
    user: {
      name: "Ana Beatriz",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&q=75&fit=crop&w=64"
    },
    rating: 5,
    date: "20/01/2023",
    comment: "Melhor salão da cidade! Profissionais muito atenciosos e resultado perfeito. Recomendo demais!"
  }
];

const ServiceDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState("details");
  const [mainImage, setMainImage] = useState(serviceData.images[0]);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="page-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <h1 className="text-3xl font-bold">{serviceData.title}</h1>
              
              <div className="flex items-center flex-wrap gap-3">
                <div className="flex items-center bg-yellow-50 px-2 py-1 rounded">
                  <Star size={16} className="text-yellow-500" fill="currentColor" />
                  <span className="ml-1 text-sm font-medium">{serviceData.rating}</span>
                  <span className="ml-1 text-xs text-muted-foreground">({serviceData.reviewCount} avaliações)</span>
                </div>
                
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin size={14} className="mr-1" />
                  <span>{serviceData.location}</span>
                </div>
                
                <div className="flex items-center text-sm text-green-600">
                  <Calendar size={14} className="mr-1" />
                  <span>Agendamento disponível</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="w-full h-80 rounded-lg overflow-hidden">
                  <img 
                    src={mainImage} 
                    alt={serviceData.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex gap-3 overflow-x-auto pb-3">
                  {serviceData.images.map((image, index) => (
                    <div 
                      key={index}
                      className={`w-24 h-24 rounded overflow-hidden cursor-pointer border-2 ${mainImage === image ? 'border-paulo-blue' : 'border-transparent'}`}
                      onClick={() => setMainImage(image)}
                    >
                      <img 
                        src={image} 
                        alt={`${serviceData.title} ${index + 1}`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="w-full grid grid-cols-3">
                  <TabsTrigger value="details">Detalhes</TabsTrigger>
                  <TabsTrigger value="services">Serviços & Preços</TabsTrigger>
                  <TabsTrigger value="reviews">Avaliações</TabsTrigger>
                </TabsList>
                
                <TabsContent value="details" className="py-4">
                  <h3 className="text-xl font-medium mb-3">Sobre o serviço</h3>
                  <p className="text-muted-foreground mb-6">{serviceData.description}</p>
                  
                  <h3 className="text-xl font-medium mb-3">Sobre o profissional</h3>
                  <div className="flex items-start mb-4">
                    <img 
                      src={serviceData.provider.avatar} 
                      alt={serviceData.provider.name} 
                      className="w-16 h-16 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-medium">{serviceData.provider.name}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{serviceData.provider.about}</p>
                      <div className="text-sm space-y-1">
                        <div className="flex items-center">
                          <MapPin size={14} className="mr-1 text-paulo-blue" />
                          <span>{serviceData.provider.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Phone size={14} className="mr-1 text-paulo-blue" />
                          <span>{serviceData.provider.phone}</span>
                        </div>
                        <div className="flex items-center">
                          <Mail size={14} className="mr-1 text-paulo-blue" />
                          <span>{serviceData.provider.email}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="services" className="py-4">
                  <h3 className="text-xl font-medium mb-4">Serviços disponíveis</h3>
                  <div className="space-y-3">
                    {serviceData.services.map((service, index) => (
                      <div 
                        key={index}
                        className="flex justify-between items-center border-b border-border py-3 last:border-none"
                      >
                        <span className="font-medium">{service.name}</span>
                        <span className="text-paulo-blue font-semibold">{service.price}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="reviews" className="py-4">
                  <h3 className="text-xl font-medium mb-4">Avaliações de clientes</h3>
                  <div className="space-y-4">
                    {reviews.map(review => (
                      <ReviewCard key={review.id} {...review} />
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            <div className="space-y-6">
              <div className="sticky top-20">
                <BookingForm 
                  serviceId={serviceData.id}
                  serviceName={serviceData.title}
                />
                
                <div className="mt-4 flex gap-2">
                  <Button variant="outline" className="flex-1 flex items-center justify-center gap-2">
                    <Heart size={16} />
                    <span>Favorito</span>
                  </Button>
                  <Button variant="outline" className="flex-1 flex items-center justify-center gap-2">
                    <Share2 size={16} />
                    <span>Compartilhar</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetails;
