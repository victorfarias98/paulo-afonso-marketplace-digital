import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Save, Plus, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/context/AuthContext";
import { ServiceItem, ServiceInsert } from "@/types/supabase";
import { Json } from "@/integrations/supabase/types";

// Form validation schema
const serviceSchema = z.object({
  title: z.string().min(3, { message: "O título deve ter pelo menos 3 caracteres" }),
  description: z.string().min(10, { message: "A descrição deve ter pelo menos 10 caracteres" }),
  category: z.string({ required_error: "Selecione uma categoria" }),
  location: z.string().min(3, { message: "A localização é obrigatória" }),
  price: z.string().min(1, { message: "O preço é obrigatório" }),
  image: z.string().optional(),
  services: z.array(
    z.object({
      name: z.string().min(1, { message: "Nome do serviço é obrigatório" }),
      price: z.string().min(1, { message: "Preço do serviço é obrigatório" })
    })
  ).min(1, { message: "Adicione pelo menos um serviço" })
});

type ServiceFormValues = z.infer<typeof serviceSchema>;

const defaultService = {
  name: "",
  price: ""
};

const ServiceRegistrationForm = () => {
  const { toast } = useToast();
  const { addService } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<ServiceFormValues>({
    resolver: zodResolver(serviceSchema),
    defaultValues: {
      title: "",
      description: "",
      category: "",
      location: "",
      price: "",
      image: "",
      services: [{ ...defaultService }]
    },
  });

  const services = form.watch("services");

  const onSubmit = async (data: ServiceFormValues) => {
    setIsSubmitting(true);
    
    try {
      await addService({
        title: data.title,
        description: data.description,
        category: data.category,
        location: data.location,
        price: data.price,
        image: data.image || null,
        services: data.services as unknown as Json
      });
      
      form.reset();
    } catch (error) {
      console.error("Error adding service:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const addServiceItem = () => {
    const currentServices = form.getValues("services");
    form.setValue("services", [...currentServices, { ...defaultService }]);
  };

  const removeServiceItem = (index: number) => {
    const currentServices = form.getValues("services");
    if (currentServices.length > 1) {
      form.setValue(
        "services",
        currentServices.filter((_, i) => i !== index)
      );
    } else {
      toast({
        title: "Erro ao remover",
        description: "Você deve ter pelo menos um serviço cadastrado",
        variant: "destructive",
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Cadastro de Serviço</CardTitle>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Título do Serviço</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: Salão de Beleza Ana" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Categoria</FormLabel>
                    <Select 
                      onValueChange={field.onChange} 
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione uma categoria" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="beauty">Beleza</SelectItem>
                        <SelectItem value="construction">Construção</SelectItem>
                        <SelectItem value="education">Educação</SelectItem>
                        <SelectItem value="technology">Tecnologia</SelectItem>
                        <SelectItem value="health">Saúde</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descrição</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Descreva seu serviço em detalhes..." 
                      className="min-h-[120px]" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Localização</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: São Paulo, SP" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preço base</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: R$ 50,00" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>URL da imagem</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="https://exemplo.com/imagem.jpg" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <FormLabel>Serviços Oferecidos</FormLabel>
                <Button 
                  type="button" 
                  variant="outline" 
                  size="sm" 
                  onClick={addServiceItem}
                >
                  <Plus size={16} className="mr-1" />
                  Adicionar Serviço
                </Button>
              </div>
              
              {services.map((_, index) => (
                <div 
                  key={index}
                  className="flex gap-2 items-start mb-2"
                >
                  <div className="flex-1">
                    <FormField
                      control={form.control}
                      name={`services.${index}.name`}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Nome do serviço" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="flex-1">
                    <FormField
                      control={form.control}
                      name={`services.${index}.price`}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Preço" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => removeServiceItem(index)}
                    className="mt-1"
                  >
                    <Trash2 size={16} className="text-red-500" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
          
          <CardFooter>
            <Button 
              type="submit" 
              className="bg-paulo-blue hover:bg-paulo-dark"
              disabled={isSubmitting}
            >
              <Save size={16} className="mr-2" />
              {isSubmitting ? "Salvando..." : "Salvar Serviço"}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};

export default ServiceRegistrationForm;
