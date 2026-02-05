import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SERVICES, SITE_CONFIG } from "@/config/siteConfig";
import serviceIgiene from "@/assets/service-igiene.jpg";
import serviceImplanti from "@/assets/service-implanti.jpg";
import serviceEstetica from "@/assets/service-estetica.jpg";
import serviceImplantologia from "@/assets/Implantologia.png";
import serviceProtesiDentali from "@/assets/Protesi-Dentali.png";
import serviceEndodonzia from "@/assets/Endodonzia.png";
import serviceOdontoiatriaConservativa from "@/assets/OdontoiatriaConservativa.png";

const imageMap: Record<string, string> = {
  "service-igiene": serviceIgiene,
  "service-implanti": serviceImplanti,
  "service-estetica": serviceEstetica,
  "Implantologia.png": serviceImplantologia,
  "Protesi-Dentali.png": serviceProtesiDentali,
  "Endodonzia.png": serviceEndodonzia,
  "OdontoiatriaConservativa.png": serviceOdontoiatriaConservativa,
};

const Servizi = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16 md:pt-20">
        {/* Hero */}
        <section className="py-16 md:py-20 bg-secondary">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              I Nostri Servizi
            </h1>
            <div className="w-12 h-0.5 bg-accent mx-auto mb-4"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Offriamo un'ampia gamma di trattamenti odontoiatrici per soddisfare ogni esigenza, dalla prevenzione all'estetica dentale.
            </p>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICES.map((service, index) => (
                <article
                  key={service.id}
                  className="service-card group bg-card rounded-lg overflow-hidden border border-border shadow-sm"
                >
                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={imageMap[service.image]}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-foreground mb-3">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-primary">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Hai Bisogno di un Appuntamento?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Contattaci per maggiori informazioni sui nostri servizi o per prenotare una visita.
            </p>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-md hover:bg-accent/90 transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Chiama {SITE_CONFIG.phoneDisplay}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Servizi;
