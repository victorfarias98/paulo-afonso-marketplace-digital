
import { Link } from 'react-router-dom';
import { Search, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-paulo-light to-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-paulo-text mb-4 leading-tight">
              Encontre serviços de qualidade em <span className="text-paulo-blue">Paulo Afonso</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Conectamos você aos melhores profissionais e empresas da cidade. 
              Agende serviços, compare avaliações e impulsione a economia local.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input 
                  type="search" 
                  placeholder="O que você precisa hoje?" 
                  className="w-full pl-10 h-12 text-base"
                />
              </div>
              <Button className="h-12 px-6 bg-paulo-blue hover:bg-paulo-dark text-white">
                Buscar
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
              <span>Buscas populares:</span>
              <Link to="/search?q=diarista" className="text-paulo-blue hover:underline">Diarista</Link>
              <Link to="/search?q=eletricista" className="text-paulo-blue hover:underline">Eletricista</Link>
              <Link to="/search?q=manicure" className="text-paulo-blue hover:underline">Manicure</Link>
              <Link to="/search?q=professor" className="text-paulo-blue hover:underline">Professor</Link>
            </div>
          </div>
          
          <div className="hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600" 
              alt="Profissionais Paulo Afonso" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
