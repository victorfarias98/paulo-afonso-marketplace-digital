
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from '@/components/ui/button';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-paulo-gray">
      <div className="text-center max-w-md px-4">
        <h1 className="text-6xl font-bold text-paulo-blue mb-4">404</h1>
        <p className="text-2xl font-medium mb-6">Página não encontrada</p>
        <p className="text-muted-foreground mb-8">
          A página que você está procurando não existe ou foi removida. 
          Por favor, volte para a página inicial.
        </p>
        <Link to="/">
          <Button className="bg-paulo-blue hover:bg-paulo-dark">
            Voltar para a página inicial
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
