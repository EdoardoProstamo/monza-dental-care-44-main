import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_CONFIG } from "@/config/siteConfig";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16 md:pt-20">
        {/* Hero */}
        <section className="py-12 md:py-16 bg-secondary">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">
              Informativa sul trattamento dei dati personali
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto">
            <article className="max-w-3xl mx-auto prose prose-slate">
              <div className="space-y-8 text-muted-foreground">
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-3">1. Titolare del Trattamento</h2>
                  <p>
                    Il Titolare del trattamento dei dati personali è:<br />
                    <strong className="text-foreground">{SITE_CONFIG.name}</strong><br />
                    {SITE_CONFIG.address.full}<br />
                    Telefono: {SITE_CONFIG.phoneDisplay}<br />
                    P.IVA: {SITE_CONFIG.piva}
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-3">2. Tipologie di Dati Raccolti</h2>
                  <p>
                    Il presente sito web non raccoglie dati personali degli utenti in forma automatica. 
                    Non sono presenti form di contatto, cookie di profilazione o strumenti di analytics.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-3">3. Dati di Navigazione</h2>
                  <p>
                    I sistemi informatici e le procedure software preposte al funzionamento di questo sito web 
                    acquisiscono, nel corso del loro normale esercizio, alcuni dati personali la cui trasmissione 
                    è implicita nell'uso dei protocolli di comunicazione di Internet (es. indirizzi IP).
                  </p>
                  <p>
                    Questi dati non sono raccolti per essere associati a interessati identificati, ma per loro 
                    stessa natura potrebbero permettere di identificare gli utenti. Tali dati vengono utilizzati 
                    esclusivamente per ricavare informazioni statistiche anonime sull'uso del sito.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-3">4. Diritti dell'Interessato</h2>
                  <p>
                    Ai sensi degli articoli 15 e seguenti del Regolamento UE 2016/679 (GDPR), l'interessato ha il 
                    diritto di ottenere la conferma dell'esistenza di dati personali che lo riguardano e la loro 
                    comunicazione in forma intelligibile.
                  </p>
                  <p>L'interessato ha inoltre diritto di ottenere:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>l'aggiornamento, la rettificazione o l'integrazione dei dati;</li>
                    <li>la cancellazione, la trasformazione in forma anonima o il blocco dei dati;</li>
                    <li>la portabilità dei dati;</li>
                    <li>l'opposizione al trattamento per motivi legittimi.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-3">5. Modifiche alla Privacy Policy</h2>
                  <p>
                    Il Titolare si riserva il diritto di apportare modifiche alla presente Privacy Policy 
                    in qualunque momento, dandone pubblicità agli utenti su questa pagina.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-3">6. Contatti</h2>
                  <p>
                    Per qualsiasi informazione relativa alla presente Privacy Policy, l'interessato può contattare 
                    il Titolare telefonicamente al numero {SITE_CONFIG.phoneDisplay}.
                  </p>
                </div>

                <p className="text-sm text-muted-foreground pt-4 border-t border-border">
                  Ultimo aggiornamento: Febbraio 2026
                </p>
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
