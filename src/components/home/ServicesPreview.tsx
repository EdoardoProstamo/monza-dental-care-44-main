import { Link } from "react-router-dom";
import { SERVICES } from "@/config/siteConfig";
import serviceIgiene from "@/assets/service-igiene.jpg";
import serviceImplanti from "@/assets/service-implanti.jpg";
import serviceEstetica from "@/assets/service-estetica.jpg";

const imageMap: Record<string, string> = {
  "service-igiene": serviceIgiene,
  "service-implanti": serviceImplanti,
  "service-estetica": serviceEstetica,
};

const ServicesPreview = () => {
  // Show only first 3 services on home
  const previewServices = SERVICES.slice(0, 3);

  return (
    <section id="servizi" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            I Nostri Servizi
          </h2>
          <div className="w-12 h-0.5 bg-accent mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Offriamo un'ampia gamma di trattamenti odontoiatrici per prenderci cura della tua salute orale.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {previewServices.map((service, index) => (
            <article
              key={service.id}
              className="service-card group bg-card rounded-lg overflow-hidden border border-border shadow-sm"
              style={{ animationDelay: `${index * 100}ms` }}
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
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            to="/servizi"
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary font-medium rounded-md hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
          >
            Vedi tutti i servizi
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
