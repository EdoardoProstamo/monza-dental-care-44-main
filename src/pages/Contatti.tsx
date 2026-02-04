import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_CONFIG } from "@/config/siteConfig";

const Contatti = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16 md:pt-20">
        {/* Hero */}
        <section className="py-16 md:py-20 bg-secondary">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Contatti
            </h1>
            <div className="w-12 h-0.5 bg-accent mx-auto mb-4"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Siamo a disposizione per rispondere alle tue domande e fissare un appuntamento.
            </p>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {/* Address */}
                <div className="bg-card rounded-lg p-8 border border-border">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-semibold text-foreground mb-3">Indirizzo</h2>
                  <address className="not-italic text-muted-foreground leading-relaxed mb-4">
                    <p>{SITE_CONFIG.address.street}</p>
                    <p>{SITE_CONFIG.address.cap} {SITE_CONFIG.address.city} ({SITE_CONFIG.address.province})</p>
                    <p>{SITE_CONFIG.address.country}</p>
                  </address>
                  <a
                    href={SITE_CONFIG.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-sm transition-colors duration-200"
                  >
                    Apri su Google Maps
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                {/* Phone */}
                <div className="bg-card rounded-lg p-8 border border-border">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-semibold text-foreground mb-3">Telefono</h2>
                  <p className="text-muted-foreground mb-4">
                    Per prenotare un appuntamento o richiedere informazioni:
                  </p>
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors duration-200"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {SITE_CONFIG.phoneDisplay}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="mt-8 bg-card rounded-lg p-8 border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Orari di Apertura</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {SITE_CONFIG.hours.map((item) => (
                    <div key={item.day} className="flex justify-between py-2 border-b border-border last:border-0">
                      <span className="font-medium text-foreground">{item.day}</span>
                      <span className="text-muted-foreground">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contatti;
