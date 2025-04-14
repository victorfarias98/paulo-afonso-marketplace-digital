
import { Link } from 'react-router-dom';
import { Scissors, Home, Book, Monitor, Heart, Coffee, ShoppingBag, Car, Utensils, Camera } from 'lucide-react';

const categories = [
  { id: 1, name: 'Beleza e Estética', icon: Scissors, color: 'bg-pink-100 text-pink-500' },
  { id: 2, name: 'Reformas e Construção', icon: Home, color: 'bg-orange-100 text-orange-500' },
  { id: 3, name: 'Educação e Aulas', icon: Book, color: 'bg-blue-100 text-blue-500' },
  { id: 4, name: 'Tecnologia', icon: Monitor, color: 'bg-purple-100 text-purple-500' },
  { id: 5, name: 'Saúde e Bem-estar', icon: Heart, color: 'bg-red-100 text-red-500' },
  { id: 6, name: 'Eventos', icon: Coffee, color: 'bg-yellow-100 text-yellow-500' },
  { id: 7, name: 'Comércio', icon: ShoppingBag, color: 'bg-green-100 text-green-500' },
  { id: 8, name: 'Transporte', icon: Car, color: 'bg-cyan-100 text-cyan-500' },
  { id: 9, name: 'Alimentação', icon: Utensils, color: 'bg-amber-100 text-amber-500' },
  { id: 10, name: 'Fotografia', icon: Camera, color: 'bg-indigo-100 text-indigo-500' },
];

const CategorySection = () => {
  return (
    <section className="py-12 bg-white">
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
              className="flex flex-col items-center justify-center p-4 rounded-lg border border-border hover:border-paulo-blue hover:shadow-md transition-all"
            >
              <div className={`w-12 h-12 rounded-full ${category.color} flex items-center justify-center mb-3`}>
                <category.icon size={20} />
              </div>
              <span className="text-sm font-medium text-center">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
