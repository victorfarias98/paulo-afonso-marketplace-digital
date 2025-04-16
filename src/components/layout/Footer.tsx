
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">ServiceConnect</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Conectando profissionais e clientes na cidade de Paulo Afonso.
              Fortaleça a economia local com serviços de qualidade.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary hover:text-primary/80">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-primary hover:text-primary/80">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-primary hover:text-primary/80">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Navegação</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-primary">Início</Link>
              </li>
              <li>
                <Link to="/explore" className="hover:text-primary">Explorar</Link>
              </li>
              <li>
                <Link to="/categories" className="hover:text-primary">Categorias</Link>
              </li>
              <li>
                <Link to="/dashboard" className="hover:text-primary">Minha Conta</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Categorias Populares</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/categories/1" className="hover:text-primary">Beleza e Estética</Link>
              </li>
              <li>
                <Link to="/categories/2" className="hover:text-primary">Reformas e Construção</Link>
              </li>
              <li>
                <Link to="/categories/3" className="hover:text-primary">Educação e Aulas</Link>
              </li>
              <li>
                <Link to="/categories/4" className="hover:text-primary">Tecnologia</Link>
              </li>
              <li>
                <Link to="/categories/5" className="hover:text-primary">Saúde e Bem-estar</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                <span>contato@serviceconnect.com.br</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                <span>(75) 3281-0000</span>
              </li>
            </ul>
            <div className="mt-4">
              <Link to="/contact" className="text-sm text-primary hover:underline">
                Fale Conosco
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ServiceConnect. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
