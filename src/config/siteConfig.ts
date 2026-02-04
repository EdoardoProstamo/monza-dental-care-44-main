/**
 * Site Configuration - Galbiati Dr. Matteo
 * Studio Dentistico - Monza (MB), Italia
 * 
 * NOTA: Modificare solo i valori testuali, orari e servizi.
 * Layout, struttura e stile NON devono essere modificati.
 */

export const SITE_CONFIG = {
  // Dati struttura
  name: "Galbiati Dr. Matteo",
  category: "Studio Dentistico",
  
  // Contatti
  address: {
    street: "Via Achille Varisco, 3",
    city: "Monza",
    province: "MB",
    cap: "20900",
    country: "Italia",
    full: "Via Achille Varisco, 3 – 20900 Monza (MB), Italia",
  },
  phone: "+39 039 322148",
  phoneDisplay: "039 322148",
  
  // P.IVA - DA INSERIRE
  piva: "DA INSERIRE",
  
  // Link esterni
  googleMapsUrl: "https://maps.google.com/?q=Via+Achille+Varisco+3+Monza+MB+Italia",
  
  // Orari - DA INSERIRE
  hours: [
    { day: "Lunedì", time: "DA INSERIRE" },
    { day: "Martedì", time: "DA INSERIRE" },
    { day: "Mercoledì", time: "DA INSERIRE" },
    { day: "Giovedì", time: "DA INSERIRE" },
    { day: "Venerdì", time: "DA INSERIRE" },
    { day: "Sabato", time: "Chiuso" },
    { day: "Domenica", time: "Chiuso" },
  ],
  
  // SEO
  seo: {
    title: "Studio Dentistico Galbiati Dr. Matteo | Dentista a Monza",
    description: "Studio dentistico a Monza. Il Dr. Matteo Galbiati offre servizi di odontoiatria, igiene dentale, implantologia e estetica dentale. Prenota una visita.",
    keywords: ["dentista Monza", "studio dentistico Monza", "clinica dentale Monza", "odontoiatra Monza"],
  },
  
  // Link recensioni Google - DA INSERIRE
  googleReviewsUrl: "DA INSERIRE",
} as const;

export const SITE_THEME = {
  // Palette colori
  palette: "Elegant Navy", // bianco + blu notte + accento oro tenue
  
  // Stile hero
  heroStyle: "centered", // Hero centrato con immagine piena e titolo in evidenza
  
  // Presentazione servizi
  servicesLayout: "vertical-cards", // Cards verticali con immagini e testo descrittivo
  
  // Elementi grafici
  graphicElements: "minimal-lines", // Linee sottili minimal e separatori eleganti
  
  // Gradienti
  gradients: "cta-only", // Gradient leggerissimo applicato solo alla sezione CTA
  
  // Ordine sezioni home
  homeSections: ["hero", "services", "strengths", "reviews", "faq", "contacts"],
  
  // Font
  fontFamily: "system", // SOLO font di sistema (no Google Fonts)
  
  // Animazioni
  animations: {
    type: "light", // Solo animazioni leggere e professionali
    effects: ["fade-in", "slide-up"], // Fade-in e slide-up
    duration: "200-300ms", // Durata 200–300ms
    library: "none", // Nessuna libreria esterna (vanilla CSS/JS)
  },
} as const;

export const SERVICES = [
  {
    id: "igiene",
    title: "Igiene e Prevenzione",
    description: "Pulizia dentale professionale, controlli periodici e programmi di prevenzione per mantenere la salute del cavo orale.",
    image: "service-igiene",
  },
  {
    id: "implantologia",
    title: "Implantologia",
    description: "Soluzioni implantari moderne per il ripristino di denti mancanti, con tecniche minimamente invasive e risultati naturali.",
    image: "service-implanti",
  },
  {
    id: "estetica",
    title: "Estetica Dentale",
    description: "Sbiancamento professionale, faccette e trattamenti estetici per un sorriso più luminoso e armonioso.",
    image: "service-estetica",
  },
  {
    id: "conservativa",
    title: "Odontoiatria Conservativa",
    description: "Trattamento delle carie e ricostruzioni dentali con materiali di ultima generazione per risultati duraturi.",
    image: "service-igiene",
  },
  {
    id: "endodonzia",
    title: "Endodonzia",
    description: "Terapie canalari precise e indolori per salvare i denti compromessi, utilizzando tecnologie all'avanguardia.",
    image: "service-implanti",
  },
  {
    id: "protesi",
    title: "Protesi Dentarie",
    description: "Protesi fisse e mobili personalizzate, realizzate con materiali di alta qualità per funzionalità ed estetica ottimali.",
    image: "service-estetica",
  },
] as const;

export const STRENGTHS = [
  {
    title: "Esperienza Professionale",
    description: "Anni di esperienza nel settore odontoiatrico al servizio dei pazienti.",
  },
  {
    title: "Tecnologie Moderne",
    description: "Strumentazione all'avanguardia per diagnosi precise e trattamenti efficaci.",
  },
  {
    title: "Approccio Personalizzato",
    description: "Ogni paziente riceve un piano di cura su misura per le proprie esigenze.",
  },
  {
    title: "Ambiente Accogliente",
    description: "Uno studio confortevole per rendere ogni visita un'esperienza serena.",
  },
] as const;

// RECENSIONI REALI - Da inserire manualmente con dati verificabili
// ATTENZIONE: Inserire SOLO recensioni reali dalla pagina Google dell'attività
export const REVIEWS = [
  {
    author: "Utente Google",
    rating: 5,
    date: "DA INSERIRE",
    text: "DA INSERIRE - Inserire estratto breve (1-2 frasi) di una recensione reale.",
    source: "Google",
  },
  {
    author: "Utente Google",
    rating: 5,
    date: "DA INSERIRE",
    text: "DA INSERIRE - Inserire estratto breve (1-2 frasi) di una recensione reale.",
    source: "Google",
  },
  {
    author: "Utente Google",
    rating: 5,
    date: "DA INSERIRE",
    text: "DA INSERIRE - Inserire estratto breve (1-2 frasi) di una recensione reale.",
    source: "Google",
  },
] as const;

export const FAQ = [
  {
    question: "Come posso prenotare un appuntamento?",
    answer: "Può contattarci telefonicamente al numero 039 322148 durante gli orari di apertura dello studio.",
  },
  {
    question: "È necessaria la prenotazione per una visita?",
    answer: "Sì, consigliamo sempre di prenotare un appuntamento per garantirle la migliore assistenza possibile.",
  },
  {
    question: "Quali metodi di pagamento accettate?",
    answer: "Accettiamo pagamenti in contanti, bancomat, carte di credito e bonifico bancario.",
  },
  {
    question: "Trattate anche le urgenze dentali?",
    answer: "Sì, gestiamo urgenze dentali compatibilmente con la disponibilità dello studio. Contatti il nostro numero per assistenza immediata.",
  },
  {
    question: "Offrite piani di pagamento rateizzati?",
    answer: "Sì, per trattamenti di importo significativo è possibile concordare piani di pagamento personalizzati.",
  },
] as const;
