
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, User, LogOut, Briefcase, Search, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import SearchAutocomplete from '@/components/search/SearchAutocomplete';
import { ThemeToggle } from '@/components/ThemeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    logout();
    navigate('/');
  };
  
  return (
    <header className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold font-heading">
                <span className="text-primary">Serva</span><span className="text-[#10B981]">lize</span>
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex md:flex-1 items-center justify-center px-8">
            <SearchAutocomplete variant="navbar" />
          </div>
          
          <nav className="hidden md:flex items-center space-x-2">
            <ThemeToggle />

            <Link to="/explore" className="text-sm font-medium hover:text-primary px-3 py-2 transition-colors flex items-center">
              <Search className="mr-1 h-4 w-4" />
              Explorar
            </Link>
            <Link to="/categories" className="text-sm font-medium hover:text-primary px-3 py-2 transition-colors flex items-center">
              <Briefcase className="mr-1 h-4 w-4" />
              Categorias
            </Link>
            
            {isAuthenticated && user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-card border-border">
                  <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
                  <DropdownMenuLabel className="text-xs text-muted-foreground">
                    {user.email}
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-border" />
                  <DropdownMenuItem asChild>
                    <Link to="/dashboard">Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-border" />
                  <DropdownMenuItem onClick={handleLogout} className="text-destructive">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Sair</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outline" size="sm" className="gap-2 border-border">
                    <User size={16} />
                    <span>Entrar</span>
                  </Button>
                </Link>
                <Link to="/register">
                  <Button size="sm" className="gap-2">
                    <MapPin size={16} />
                    <span>Cadastrar Serviço</span>
                  </Button>
                </Link>
              </>
            )}
          </nav>
          
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button 
              className=""
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-4 bg-card border-t border-border">
          <div className="mb-4">
            <SearchAutocomplete placeholder="Buscar serviços, profissionais..." />
          </div>
          <nav className="flex flex-col space-y-4">
            <Link to="/explore" className="text-sm font-medium hover:text-primary py-2 transition-colors flex items-center">
              <Search className="mr-2 h-4 w-4" />
              Explorar
            </Link>
            <Link to="/categories" className="text-sm font-medium hover:text-primary py-2 transition-colors flex items-center">
              <Briefcase className="mr-2 h-4 w-4" />
              Categorias
            </Link>
            
            {isAuthenticated && user ? (
              <>
                <div className="flex items-center space-x-3 py-2">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{user.name}</p>
                    <p className="text-xs text-muted-foreground">{user.email}</p>
                  </div>
                </div>
                <Link to="/dashboard" className="py-2">
                  <Button variant="outline" size="sm" className="w-full border-border">
                    Dashboard
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full text-destructive border-border" 
                  onClick={handleLogout}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Sair</span>
                </Button>
              </>
            ) : (
              <>
                <Link to="/login" className="py-2">
                  <Button variant="outline" size="sm" className="w-full gap-2 border-border">
                    <User size={16} />
                    <span>Entrar</span>
                  </Button>
                </Link>
                <Link to="/register" className="py-2">
                  <Button size="sm" className="w-full gap-2">
                    <MapPin size={16} />
                    <span>Cadastrar Serviço</span>
                  </Button>
                </Link>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
