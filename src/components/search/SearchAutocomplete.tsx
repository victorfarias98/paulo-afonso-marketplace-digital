
import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';
import { useServices } from '@/hooks/useServices';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Button } from '@/components/ui/button';

interface SearchAutocompleteProps {
  placeholder?: string;
  className?: string;
  variant?: 'default' | 'navbar' | 'hero';
}

const SearchAutocomplete = ({ 
  placeholder = "Buscar serviços...", 
  className = "", 
  variant = "default" 
}: SearchAutocompleteProps) => {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { services, isLoading } = useServices();
  const navigate = useNavigate();

  // Filter services based on search query
  const filteredServices = searchQuery
    ? services.filter(service => 
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        service.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  // Handle keyboard shortcut to open search
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const handleSelect = (serviceId: string) => {
    navigate(`/services/${serviceId}`);
    setOpen(false);
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/explore?q=${encodeURIComponent(searchQuery)}`);
      setOpen(false);
    }
  };

  return (
    <>
      {variant === 'navbar' ? (
        <div className={`relative flex w-full max-w-sm items-center ${className}`}>
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder={placeholder}
            className="w-full pl-10"
            onClick={() => setOpen(true)}
            readOnly
          />
          <kbd className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 hidden md:inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-xs font-medium opacity-100">
            <span className="text-xs">⌘</span>K
          </kbd>
        </div>
      ) : variant === 'hero' ? (
        <div className={`relative flex flex-col md:flex-row gap-4 ${className}`}>
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input 
              type="search" 
              placeholder={placeholder} 
              className="w-full pl-10 h-12 text-base"
              onClick={() => setOpen(true)}
              readOnly
            />
          </div>
          <Button 
            className="h-12 px-6 bg-paulo-blue hover:bg-paulo-dark text-white" 
            onClick={() => setOpen(true)}
          >
            Buscar
          </Button>
        </div>
      ) : (
        <div className={`relative ${className}`}>
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder={placeholder}
            className="w-full pl-10"
            onClick={() => setOpen(true)}
            readOnly
          />
        </div>
      )}

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput 
          placeholder="Busque por serviços ou profissionais..." 
          value={searchQuery}
          onValueChange={setSearchQuery}
        />
        <CommandList>
          <CommandEmpty>
            {isLoading ? 'Carregando...' : 'Nenhum resultado encontrado.'}
          </CommandEmpty>
          <CommandGroup heading="Serviços">
            {filteredServices.slice(0, 10).map((service) => (
              <CommandItem
                key={service.id}
                onSelect={() => handleSelect(service.id)}
                className="flex justify-between"
              >
                <div className="flex flex-col">
                  <span>{service.title}</span>
                  <span className="text-xs text-muted-foreground">{service.category}</span>
                </div>
                <span className="text-sm font-medium">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(service.price || 0)}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <div className="py-2 px-2 border-t">
            <Button 
              onClick={handleSearch} 
              className="w-full bg-paulo-blue hover:bg-paulo-dark"
              disabled={!searchQuery.trim()}
            >
              <Search className="mr-2 h-4 w-4" />
              Buscar por "{searchQuery}"
            </Button>
          </div>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default SearchAutocomplete;
