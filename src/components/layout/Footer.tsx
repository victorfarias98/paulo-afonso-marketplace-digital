
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">
              <span className="text-primary">Service</span><span className="text-[#10B981]">Connect</span>
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Conectando profissionais e clientes na cidade de Paulo Afonso.
              Fortaleça a economia local com serviços de qualidade.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Navegação</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Início</Link>
              </li>
              <li>
                <Link to="/explore" className="text-muted-foreground hover:text-primary transition-colors">Explorar</Link>
              </li>
              <li>
                <Link to="/categories" className="text-muted-foreground hover:text-primary transition-colors">Categorias</Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-muted-foreground hover:text-primary transition-colors">Minha Conta</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Categorias Populares</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/categories/1" className="text-muted-foreground hover:text-primary transition-colors">Beleza e Estética</Link>
              </li>
              <li>
                <Link to="/categories/2" className="text-muted-foreground hover:text-primary transition-colors">Reformas e Construção</Link>
              </li>
              <li>
                <Link to="/categories/3" className="text-muted-foreground hover:text-primary transition-colors">Educação e Aulas</Link>
              </li>
              <li>
                <Link to="/categories/4" className="text-muted-foreground hover:text-primary transition-colors">Tecnologia</Link>
              </li>
              <li>
                <Link to="/categories/5" className="text-muted-foreground hover:text-primary transition-colors">Saúde e Bem-estar</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                <span className="text-muted-foreground">contato@serviceconnect.com.br</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                <span className="text-muted-foreground">(75) 3281-0000</span>
              </li>
            </ul>
            <div className="mt-4">
              <Link to="/contact" className="text-sm text-primary hover:text-primary/80 transition-colors">
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
