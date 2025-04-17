
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Scissors, Wrench, GraduationCap, Laptop, Heart } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Beleza e Estética",
    icon: Scissors,
    description: "Cabeleireiros, manicures, maquiadores e mais",
    count: 45,
    path: "/categories/beauty"
  },
  {
    id: 2,
    name: "Reformas e Construção",
    icon: Wrench,
    description: "Pedreiros, pintores, eletricistas e encanadores",
    count: 32,
    path: "/categories/construction"
  },
  {
    id: 3,
    name: "Educação e Aulas",
    icon: GraduationCap,
    description: "Professores particulares e cursos",
    count: 28,
    path: "/categories/education"
  },
  {
    id: 4,
    name: "Tecnologia",
    icon: Laptop,
    description: "Assistência técnica, desenvolvimento e design",
    count: 25,
    path: "/categories/technology"
  },
  {
    id: 5,
    name: "Saúde e Bem-estar",
    icon: Heart,
    description: "Personal trainers, nutricionistas e terapeutas",
    count: 37,
    path: "/categories/health"
  },
];

const Categories = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Categorias de Serviços</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <Link key={category.id} to={category.path}>
              <Card className="hover:shadow-lg hover:shadow-primary/10 transition-shadow border-border bg-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-foreground">{category.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{category.description}</p>
                      <span className="text-sm text-primary">{category.count} profissionais</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
