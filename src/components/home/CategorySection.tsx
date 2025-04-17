
import { Link } from 'react-router-dom';
import { Scissors, Home, Book, Monitor, Heart, Coffee, ShoppingBag, Car, Utensils, Camera } from 'lucide-react';

const categories = [
  { id: 1, name: 'Beleza e Estética', icon: Scissors, color: 'bg-primary/10 text-primary' },
  { id: 2, name: 'Reformas e Construção', icon: Home, color: 'bg-primary/10 text-primary' },
  { id: 3, name: 'Educação e Aulas', icon: Book, color: 'bg-primary/10 text-primary' },
  { id: 4, name: 'Tecnologia', icon: Monitor, color: 'bg-primary/10 text-primary' },
  { id: 5, name: 'Saúde e Bem-estar', icon: Heart, color: 'bg-primary/10 text-primary' },
  { id: 6, name: 'Eventos', icon: Coffee, color: 'bg-primary/10 text-primary' },
  { id: 7, name: 'Comércio', icon: ShoppingBag, color: 'bg-primary/10 text-primary' },
  { id: 8, name: 'Transporte', icon: Car, color: 'bg-primary/10 text-primary' },
  { id: 9, name: 'Alimentação', icon: Utensils, color: 'bg-primary/10 text-primary' },
  { id: 10, name: 'Fotografia', icon: Camera, color: 'bg-primary/10 text-primary' },
];

const CategorySection = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="section-title">Categorias</h2>
          <p className="text-muted-foreground">Explore serviços e produtos por categoria</p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={`/categories/${category.id}`}
              className="flex flex-col items-center justify-center p-4 rounded-lg border border-border bg-card hover:border-primary hover:shadow-md hover:shadow-primary/10 transition-all"
            >
              <div className={`w-12 h-12 rounded-full ${category.color} flex items-center justify-center mb-3`}>
                <category.icon size={20} />
              </div>
              <span className="text-sm font-medium text-center text-foreground">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
