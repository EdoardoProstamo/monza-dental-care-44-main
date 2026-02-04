import { Link } from "react-router-dom";
import { SITE_CONFIG } from "@/config/siteConfig";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Logo e Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center">
                <span className="font-bold text-lg text-accent">G</span>
              </div>
              <div>
                <p className="font-semibold leading-tight">{SITE_CONFIG.name}</p>
                <p className="text-sm text-primary-foreground/70">{SITE_CONFIG.category}</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Cura e professionalità per la salute del tuo sorriso nel cuore di Monza.
            </p>
          </div>

          {/* Contatti */}
          <div>
            <h4 className="font-semibold mb-4 text-accent">Contatti</h4>
            <address className="not-italic text-sm text-primary-foreground/80 space-y-2">
              <p>{SITE_CONFIG.address.street}</p>
              <p>{SITE_CONFIG.address.cap} {SITE_CONFIG.address.city} ({SITE_CONFIG.address.province})</p>
              <p className="pt-2">
                <a 
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="hover:text-accent transition-colors duration-200"
                >
                  Tel: {SITE_CONFIG.phoneDisplay}
                </a>
              </p>
            </address>
          </div>

          {/* Link Utili */}
          <div>
            <h4 className="font-semibold mb-4 text-accent">Link Utili</h4>
            <nav className="flex flex-col gap-2 text-sm">
              <Link to="/" className="text-primary-foreground/80 hover:text-accent transition-colors duration-200">
                Home
              </Link>
              <Link to="/servizi" className="text-primary-foreground/80 hover:text-accent transition-colors duration-200">
                Servizi
              </Link>
              <Link to="/contatti" className="text-primary-foreground/80 hover:text-accent transition-colors duration-200">
                Contatti
              </Link>
              <Link to="/privacy" className="text-primary-foreground/80 hover:text-accent transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/cookie" className="text-primary-foreground/80 hover:text-accent transition-colors duration-200">
                Cookie Policy
              </Link>
            </nav>
          </div>
        </div>

        {/* Separator */}
        <div className="h-px bg-primary-foreground/10 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <p>
            © {currentYear} {SITE_CONFIG.name}. Tutti i diritti riservati.
          </p>
          <p>
            P.IVA: {SITE_CONFIG.piva}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
