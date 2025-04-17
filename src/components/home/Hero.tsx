
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SearchAutocomplete from '@/components/search/SearchAutocomplete';

const Hero = () => {
  return (
    <section className="gradient-bg py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              Encontre serviços de qualidade em <span className="text-primary">Paulo Afonso</span>
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
              <Link to="/explore?q=diarista" className="text-primary hover:underline">Diarista</Link>
              <Link to="/explore?q=eletricista" className="text-primary hover:underline">Eletricista</Link>
              <Link to="/explore?q=manicure" className="text-primary hover:underline">Manicure</Link>
              <Link to="/explore?q=professor" className="text-primary hover:underline">Professor</Link>
            </div>
          </div>
          
          <div className="hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600" 
              alt="Profissionais Paulo Afonso" 
              className="w-full h-auto rounded-lg shadow-lg border border-border/50"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
