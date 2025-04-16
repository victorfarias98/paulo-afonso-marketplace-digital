
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Users, Star, TrendingUp, BarChart3, Settings, Plus, FileText } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import ServiceRegistrationForm from '@/components/services/ServiceRegistrationForm';

// Define the missing data for services
const serviceData = {
  services: [
    { name: "Corte Feminino", price: "R$ 50" },
    { name: "Corte Masculino", price: "R$ 30" },
    { name: "Hidratação", price: "R$ 40" },
    { name: "Escova", price: "R$ 35" },
    { name: "Coloração", price: "R$ 80" }
  ]
};

// Define the missing reviews data
const reviews = [
  {
    id: 1,
    user: {
      name: "Maria Silva",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&q=75&fit=crop&w=64"
    },
    rating: 5,
    date: "15/03/2023",
    comment: "Excelente atendimento! Amei o resultado do meu corte e a hidratação deixou meu cabelo super macio.",
    providerResponse: "Obrigada pela avaliação, Maria! Estamos sempre buscando oferecer o melhor serviço."
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
  }
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  // Check if user is authenticated, if not redirect to login
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);
  
  // If not authenticated, don't render the dashboard
  if (!isAuthenticated || !user) {
    return null;
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-paulo-gray">
        <div className="page-container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Sidebar */}
            <div className="hidden md:block">
              <Card>
                <CardHeader>
                  <div className="flex flex-col items-center">
                    <img 
                      src={user.avatar || "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&q=75&fit=crop&w=128"}
                      alt={user.name}
                      className="w-24 h-24 rounded-full mb-3"
                    />
                    <CardTitle>{user.name}</CardTitle>
                    <div className="flex items-center mt-1 text-yellow-500">
                      <Star size={14} fill="currentColor" />
                      <Star size={14} fill="currentColor" />
                      <Star size={14} fill="currentColor" />
                      <Star size={14} fill="currentColor" />
                      <Star size={14} className="text-muted" strokeWidth={1} />
                      <span className="ml-1 text-sm text-muted-foreground">(4.8)</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-1">
                  <Button variant="outline" className="w-full justify-start mb-4">
                    <Settings size={16} className="mr-2" />
                    Editar Perfil
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("overview")}>
                    <TrendingUp size={16} className="mr-2" />
                    Visão Geral
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("calendar")}>
                    <Calendar size={16} className="mr-2" />
                    Agendamentos
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("services")}>
                    <BarChart3 size={16} className="mr-2" />
                    Serviços
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("register-service")}>
                    <FileText size={16} className="mr-2" />
                    Cadastrar Serviço
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("reviews")}>
                    <Star size={16} className="mr-2" />
                    Avaliações
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("customers")}>
                    <Users size={16} className="mr-2" />
                    Clientes
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            {/* Main content */}
            <div className="md:col-span-3">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid grid-cols-6 mb-6">
                  <TabsTrigger value="overview">Visão Geral</TabsTrigger>
                  <TabsTrigger value="calendar">Agenda</TabsTrigger>
                  <TabsTrigger value="services">Serviços</TabsTrigger>
                  <TabsTrigger value="register-service">Cadastrar</TabsTrigger>
                  <TabsTrigger value="reviews">Avaliações</TabsTrigger>
                  <TabsTrigger value="customers">Clientes</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">
                          Agendamentos Hoje
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold">5</div>
                        <p className="text-xs text-muted-foreground mt-1">+2 que ontem</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">
                          Novos Clientes
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold">12</div>
                        <p className="text-xs text-muted-foreground mt-1">Esta semana</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">
                          Avaliação Média
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold">4.8</div>
                        <div className="flex items-center text-yellow-500 mt-1">
                          <Star size={14} fill="currentColor" />
                          <Star size={14} fill="currentColor" />
                          <Star size={14} fill="currentColor" />
                          <Star size={14} fill="currentColor" />
                          <Star size={14} className="text-muted" strokeWidth={1} />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-6">
                    <Card>
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <CardTitle>Próximos agendamentos</CardTitle>
                          <Button variant="outline" size="sm">Ver todos</Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {[1, 2, 3].map((_, index) => (
                            <div key={index} className="flex items-start justify-between border-b border-border pb-4 last:border-none last:pb-0">
                              <div className="flex items-center">
                                <div className="bg-muted w-10 h-10 rounded-full flex items-center justify-center mr-3">
                                  <Clock size={16} />
                                </div>
                                <div>
                                  <p className="font-medium">Maria Silva</p>
                                  <p className="text-sm text-muted-foreground">Corte Feminino</p>
                                </div>
                              </div>
                              <div className="text-right">
                                <p className="font-medium">Hoje, 15:00</p>
                                <p className="text-sm text-muted-foreground">Duração: 1h</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <CardTitle>Avaliações recentes</CardTitle>
                          <Button variant="outline" size="sm">Ver todas</Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {[1, 2].map((_, index) => (
                            <div key={index} className="border-b border-border pb-4 last:border-none last:pb-0">
                              <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center">
                                  <img 
                                    src={`https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&q=75&fit=crop&w=64`}
                                    alt="User"
                                    className="w-8 h-8 rounded-full mr-2"
                                  />
                                  <p className="font-medium">Ana Beatriz</p>
                                </div>
                                <div className="flex items-center text-yellow-500">
                                  {[1, 2, 3, 4, 5].map((star) => (
                                    <Star 
                                      key={star} 
                                      size={14} 
                                      className={star <= 5 ? "text-yellow-500" : "text-gray-300"} 
                                      fill={star <= 5 ? "currentColor" : "none"} 
                                    />
                                  ))}
                                </div>
                              </div>
                              <p className="text-sm text-muted-foreground">
                                "Melhor salão da cidade! Profissionais muito atenciosos e resultado perfeito..."
                              </p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                
                <TabsContent value="services">
                  <Card>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle>Seus serviços</CardTitle>
                        <Button 
                          className="bg-paulo-blue hover:bg-paulo-dark"
                          onClick={() => setActiveTab("register-service")}
                        >
                          <Plus size={16} className="mr-2" />
                          Novo Serviço
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {serviceData.services.map((service, index) => (
                          <div 
                            key={index}
                            className="flex justify-between items-center bg-white p-4 rounded-lg border border-border"
                          >
                            <div>
                              <p className="font-medium">{service.name}</p>
                              <p className="text-sm text-muted-foreground">Duração: 1h</p>
                            </div>
                            <div className="flex items-center gap-4">
                              <span className="text-paulo-blue font-semibold">{service.price}</span>
                              <Button variant="outline" size="sm">
                                Editar
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                {/* New Tab: Service Registration */}
                <TabsContent value="register-service">
                  <ServiceRegistrationForm />
                </TabsContent>
                
                <TabsContent value="calendar">
                  <Card>
                    <CardHeader>
                      <CardTitle>Calendário de Agendamentos</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center py-8">
                        <Calendar size={64} className="mx-auto text-muted-foreground mb-4" />
                        <p className="text-lg font-medium mb-2">Calendário em desenvolvimento</p>
                        <p className="text-muted-foreground mb-4">
                          A visualização de calendário completa estará disponível em breve.
                        </p>
                        <Button className="bg-paulo-blue hover:bg-paulo-dark">
                          Ver agendamentos como lista
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="reviews">
                  <Card>
                    <CardHeader>
                      <CardTitle>Gerenciar Avaliações</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {reviews.map(review => (
                          <div key={review.id} className="border border-border rounded-lg p-4">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex items-center">
                                <img
                                  src={review.user.avatar}
                                  alt={review.user.name}
                                  className="w-10 h-10 rounded-full mr-3"
                                />
                                <div>
                                  <p className="font-medium">{review.user.name}</p>
                                  <p className="text-xs text-muted-foreground">{review.date}</p>
                                </div>
                              </div>
                              <div className="flex items-center bg-yellow-50 px-2 py-1 rounded">
                                <Star size={16} className="text-yellow-500" fill="currentColor" />
                                <span className="ml-1 text-sm font-medium">{review.rating}</span>
                              </div>
                            </div>
                            
                            <div className="mb-4">
                              <p className="text-sm">{review.comment}</p>
                            </div>
                            
                            {review.providerResponse ? (
                              <div className="bg-muted p-3 rounded-md border-l-4 border-paulo-blue mb-3">
                                <p className="text-xs font-medium mb-1">Sua resposta:</p>
                                <p className="text-sm">{review.providerResponse}</p>
                              </div>
                            ) : (
                              <Button variant="outline" className="text-sm" size="sm">
                                Responder avaliação
                              </Button>
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="customers">
                  <Card>
                    <CardHeader>
                      <CardTitle>Lista de Clientes</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center py-8">
                        <Users size={64} className="mx-auto text-muted-foreground mb-4" />
                        <p className="text-lg font-medium mb-2">Gerenciamento de clientes em desenvolvimento</p>
                        <p className="text-muted-foreground mb-4">
                          O gerenciamento completo de clientes estará disponível em breve.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
