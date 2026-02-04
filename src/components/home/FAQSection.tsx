import { useState } from "react";
import { FAQ } from "@/config/siteConfig";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Domande Frequenti
          </h2>
          <div className="w-12 h-0.5 bg-accent mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Risposte alle domande più comuni dei nostri pazienti
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {FAQ.map((faq, index) => (
            <div
              key={index}
              className="bg-card rounded-lg border border-border overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/50 transition-colors duration-200"
              >
                <span className="font-medium text-foreground pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openIndex === index && (
                <div className="px-5 pb-5 animate-fade-in">
                  <div className="h-px bg-border mb-4"></div>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
