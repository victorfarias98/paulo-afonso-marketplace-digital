
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import CategorySection from '@/components/home/CategorySection';
import FeaturedServices from '@/components/home/FeaturedServices';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <CategorySection />
        <FeaturedServices />
        
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="section-title">Impulsionando a Economia Local</h2>
              <p className="text-lg text-muted-foreground mb-8">
                O Paulo Afonso Digital é uma iniciativa para fortalecer o comércio e os serviços locais, 
                conectando profissionais autônomos e pequenas empresas aos moradores da cidade.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="p-4">
                  <div className="text-4xl font-bold text-paulo-blue">500+</div>
                  <p className="text-muted-foreground">Profissionais Cadastrados</p>
                </div>
                <div className="p-4">
                  <div className="text-4xl font-bold text-paulo-blue">50+</div>
                  <p className="text-muted-foreground">Categorias de Serviços</p>
                </div>
                <div className="p-4">
                  <div className="text-4xl font-bold text-paulo-blue">2000+</div>
                  <p className="text-muted-foreground">Serviços Agendados</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="bg-paulo-light py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="section-title">Como Funciona</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="bg-paulo-blue bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-paulo-blue text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Busque serviços</h3>
                <p className="text-muted-foreground">
                  Encontre profissionais qualificados de acordo com suas necessidades
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="bg-paulo-blue bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-paulo-blue text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Compare e escolha</h3>
                <p className="text-muted-foreground">
                  Compare avaliações, preços e disponibilidade antes de decidir
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="bg-paulo-blue bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-paulo-blue text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Agende online</h3>
                <p className="text-muted-foreground">
                  Escolha a data e horário e receba confirmação instantânea
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
