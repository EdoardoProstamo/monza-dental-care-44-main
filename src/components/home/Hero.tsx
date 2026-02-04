import { SITE_CONFIG } from "@/config/siteConfig";
import heroImage from "@/assets/hero-dental.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Studio dentistico moderno e accogliente a Monza"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto text-center px-4">
        <div className="max-w-3xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full border border-primary-foreground/20 mb-6">
            <span className="w-2 h-2 bg-accent rounded-full"></span>
            <span className="text-sm text-primary-foreground/90">{SITE_CONFIG.category} a {SITE_CONFIG.address.city}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            {SITE_CONFIG.name}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-primary-foreground/85 mb-8 max-w-2xl mx-auto leading-relaxed">
            Professionalità, tecnologia e cura per la salute del tuo sorriso nel cuore di Monza.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-md hover:bg-accent/90 transition-all duration-200 shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Prenota una visita
            </a>
            <a
              href="#servizi"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground font-medium rounded-md border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all duration-200"
            >
              Scopri i servizi
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
