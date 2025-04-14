
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-paulo-blue font-heading">
                Paulo<span className="text-paulo-green">Afonso</span>
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex md:flex-1 items-center justify-center px-8">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                type="search" 
                placeholder="Buscar serviços, profissionais..." 
                className="w-full pl-10"
              />
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-4">
            <Link to="/explore" className="text-sm font-medium hover:text-paulo-blue">
              Explorar
            </Link>
            <Link to="/categories" className="text-sm font-medium hover:text-paulo-blue">
              Categorias
            </Link>
            <Link to="/dashboard">
              <Button variant="outline" size="sm" className="gap-2">
                <User size={16} />
                <span>Entrar</span>
              </Button>
            </Link>
            <Link to="/register">
              <Button size="sm" className="bg-paulo-blue hover:bg-paulo-dark">
                Cadastrar Serviço
              </Button>
            </Link>
          </nav>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-4 bg-background border-t">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              type="search" 
              placeholder="Buscar serviços, profissionais..." 
              className="w-full pl-10"
            />
          </div>
          <nav className="flex flex-col space-y-4">
            <Link to="/explore" className="text-sm font-medium hover:text-paulo-blue py-2">
              Explorar
            </Link>
            <Link to="/categories" className="text-sm font-medium hover:text-paulo-blue py-2">
              Categorias
            </Link>
            <Link to="/dashboard" className="py-2">
              <Button variant="outline" size="sm" className="w-full gap-2">
                <User size={16} />
                <span>Entrar</span>
              </Button>
            </Link>
            <Link to="/register" className="py-2">
              <Button size="sm" className="w-full bg-paulo-blue hover:bg-paulo-dark">
                Cadastrar Serviço
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
