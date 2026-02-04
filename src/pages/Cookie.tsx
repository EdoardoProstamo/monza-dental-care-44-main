import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_CONFIG } from "@/config/siteConfig";

const Cookie = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16 md:pt-20">
        {/* Hero */}
        <section className="py-12 md:py-16 bg-secondary">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Cookie Policy
            </h1>
            <p className="text-muted-foreground">
              Informativa sull'uso dei cookie
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto">
            <article className="max-w-3xl mx-auto prose prose-slate">
              <div className="space-y-8 text-muted-foreground">
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-3">1. Cosa Sono i Cookie</h2>
                  <p>
                    I cookie sono piccoli file di testo che i siti visitati inviano al terminale dell'utente 
                    (computer, tablet, smartphone), dove vengono memorizzati per essere poi ritrasmessi agli 
                    stessi siti alla visita successiva.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-3">2. Cookie Utilizzati da Questo Sito</h2>
                  <p>
                    Questo sito web <strong className="text-foreground">non utilizza cookie di profilazione</strong> né 
                    cookie di terze parti per finalità di marketing o tracciamento degli utenti.
                  </p>
                  <p>
                    Il sito potrebbe utilizzare esclusivamente cookie tecnici strettamente necessari al funzionamento 
                    del sito stesso, che non richiedono il consenso dell'utente.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-3">3. Cookie Tecnici</h2>
                  <p>
                    I cookie tecnici sono quelli utilizzati al solo fine di effettuare la trasmissione di una 
                    comunicazione su una rete di comunicazione elettronica, o nella misura strettamente necessaria 
                    a fornire un servizio esplicitamente richiesto dall'utente.
                  </p>
                  <p>
                    Per l'installazione di tali cookie non è richiesto il preventivo consenso degli utenti.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-3">4. Gestione dei Cookie</h2>
                  <p>
                    L'utente può gestire le proprie preferenze relative ai cookie attraverso le impostazioni 
                    del proprio browser. Disabilitando i cookie, alcune funzionalità del sito potrebbero non 
                    essere disponibili.
                  </p>
                  <p>Di seguito i link per la gestione dei cookie nei principali browser:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Chrome: Impostazioni → Privacy e sicurezza → Cookie</li>
                    <li>Firefox: Opzioni → Privacy e sicurezza → Cookie</li>
                    <li>Safari: Preferenze → Privacy → Cookie</li>
                    <li>Edge: Impostazioni → Cookie e autorizzazioni sito</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-3">5. Servizi di Terze Parti</h2>
                  <p>
                    Questo sito non integra servizi di terze parti che utilizzano cookie per il tracciamento 
                    degli utenti. Non sono presenti strumenti di analytics, pixel di tracciamento o widget social.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-3">6. Contatti</h2>
                  <p>
                    Per qualsiasi informazione relativa alla presente Cookie Policy, l'utente può contattare 
                    il Titolare del sito:
                  </p>
                  <p>
                    <strong className="text-foreground">{SITE_CONFIG.name}</strong><br />
                    {SITE_CONFIG.address.full}<br />
                    Telefono: {SITE_CONFIG.phoneDisplay}
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

export default Cookie;
