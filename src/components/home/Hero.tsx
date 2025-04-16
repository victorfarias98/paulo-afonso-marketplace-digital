
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SearchAutocomplete from '@/components/search/SearchAutocomplete';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-paulo-light to-white dark:from-slate-900 dark:to-slate-800 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-paulo-text dark:text-white mb-4 leading-tight">
              Encontre serviços de qualidade em <span className="text-paulo-blue dark:text-paulo-green">Paulo Afonso</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Conectamos você aos melhores profissionais e empresas da cidade. 
              Agende serviços, compare avaliações e impulsione a economia local.
            </p>
            
            <SearchAutocomplete 
              variant="hero" 
              placeholder="O que você precisa hoje?"
              className="mb-8"
            />
            
            <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
              <span>Buscas populares:</span>
              <Link to="/explore?q=diarista" className="text-paulo-blue hover:underline dark:text-paulo-green">Diarista</Link>
              <Link to="/explore?q=eletricista" className="text-paulo-blue hover:underline dark:text-paulo-green">Eletricista</Link>
              <Link to="/explore?q=manicure" className="text-paulo-blue hover:underline dark:text-paulo-green">Manicure</Link>
              <Link to="/explore?q=professor" className="text-paulo-blue hover:underline dark:text-paulo-green">Professor</Link>
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
