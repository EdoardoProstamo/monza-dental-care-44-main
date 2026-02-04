import { SITE_CONFIG } from "@/config/siteConfig";
import ctaImage from "@/assets/cta-dental.jpg";

const CTASection = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={ctaImage}
          alt="Reception dello studio dentistico"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 cta-gradient"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Prenota la Tua Visita
        </h2>
        <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
          Siamo a disposizione per rispondere alle tue domande e fissare un appuntamento presso il nostro studio.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-md hover:bg-accent/90 transition-all duration-200 shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {SITE_CONFIG.phoneDisplay}
          </a>

          <a
            href={SITE_CONFIG.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-4 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground font-medium rounded-md border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Apri su Google Maps
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
