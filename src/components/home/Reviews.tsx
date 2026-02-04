import { SITE_CONFIG } from "@/config/siteConfig";

const StarRating = () => {
  return (
    <div className="flex justify-center gap-0.5 mb-5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5 star-gold"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const Reviews = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="section-container text-center">
        <div className="animate-slide-up max-w-3xl mx-auto">

          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-5">
            Valutazioni dei pazienti
          </h2>

          <StarRating />

          <p className="text-lg font-medium text-foreground mb-2">
            Valutazione media: 5,0 su 5,0
          </p>

          <p className="text-sm text-muted-foreground mb-6">
            Dato desunto da recensioni pubblicate e verificabili su Google
          </p>

          {SITE_CONFIG.googleReviewsUrl &&
            SITE_CONFIG.googleReviewsUrl !== "DA INSERIRE" && (
              <div className="mb-6">
                <a
                  href={SITE_CONFIG.googleReviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  Consulta le recensioni su Google
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            )}

          <p className="text-muted-foreground italic mt-6">
            "Professionalità, trasparenza e attenzione alla persona orientano ogni fase del percorso di cura"
          </p>

        </div>
      </div>
    </section>
  );
};

export default Reviews;
