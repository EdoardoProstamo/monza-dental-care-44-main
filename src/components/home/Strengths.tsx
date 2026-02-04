import { STRENGTHS } from "@/config/siteConfig";
import studioImage from "@/assets/studio-dental.jpg";

const icons = [
  // Esperienza
  <svg key="exp" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>,
  // Tecnologie
  <svg key="tech" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>,
  // Personalizzato
  <svg key="pers" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>,
  // Ambiente
  <svg key="amb" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>,
];

const Strengths = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <img
              src={studioImage}
              alt="Sala operatoria dello studio dentistico con attrezzature moderne"
              className="rounded-lg shadow-elegant w-full"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-lg -z-10"></div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Perché Sceglierci
            </h2>
            <div className="w-12 h-0.5 bg-accent mb-6"></div>
            <p className="text-muted-foreground mb-8">
              Il nostro studio combina competenza clinica, tecnologie avanzate e un approccio attento al paziente per garantire le migliori cure odontoiatriche.
            </p>

            {/* Strengths Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {STRENGTHS.map((strength, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-background rounded-lg flex items-center justify-center text-primary border border-border">
                    {icons[index]}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {strength.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {strength.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strengths;
