import { Phone, MapPin, AtSign } from "lucide-react";
import { CONTACT } from "@/config/contact";
import { LINKS } from "@/config/links";

const NAV_LINKS = [
  { label: "Esperienza", href: "/#esperienza" },
  { label: "Cucina", href: "/#cucina" },
  { label: "Fish Day", href: "/#fish-day" },
  { label: "Accedi", href: "/#accedi" },
  { label: "Eventi", href: "/#eventi" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Contatti", href: "/#contatti" },
];

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="bg-nido-nero text-nido-avorio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">

          {/* Brand + tagline */}
          <div>
            <p className="font-heading text-2xl font-light tracking-[0.15em] uppercase text-nido-sabbia mb-4">
              Nido del Corvo
            </p>
            <p className="font-body text-sm leading-relaxed text-nido-avorio/50">
              Ristorante panoramico sul Lago di Mercatale.
              <br />
              {CONTACT.addressShort}.
            </p>
          </div>

          {/* Navigazione + Orari */}
          <div className="grid grid-cols-2 gap-8 md:col-span-1 md:block md:space-y-0">
            {/* Sezioni */}
            <div>
              <h3 className="font-heading text-xs tracking-[0.2em] uppercase text-nido-oro mb-5">
                Sezioni
              </h3>
              <ul className="space-y-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="font-body text-sm text-nido-avorio/50 hover:text-nido-oro transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Orari + Contatti */}
          <div className="space-y-8">
            {/* Orari */}
            <div>
              <h3 className="font-heading text-xs tracking-[0.2em] uppercase text-nido-oro mb-5">
                Orari
              </h3>
              <ul className="space-y-1.5 font-body text-sm text-nido-avorio/60">
                <li>
                  <span className="text-nido-avorio/30 mr-2">Gio–Sab</span>
                  {CONTACT.businessHours.giovedi}
                </li>
                <li>
                  <span className="text-nido-avorio/30 mr-2">Domenica</span>
                  {CONTACT.businessHours.domenica}
                </li>
                <li className="pt-1 text-nido-avorio/30 text-xs">
                  Chiuso {CONTACT.businessHours.closed}
                </li>
              </ul>
            </div>

            {/* Contatti */}
            <div>
              <h3 className="font-heading text-xs tracking-[0.2em] uppercase text-nido-oro mb-5">
                Contatti
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href={`tel:+390722763344`}
                    className="inline-flex items-center gap-2.5 font-body text-sm text-nido-avorio/60 hover:text-nido-oro transition-colors duration-200"
                  >
                    <Phone size={13} strokeWidth={1.5} aria-hidden className="text-nido-oro/60 flex-shrink-0" />
                    {CONTACT.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={LINKS.MAPS}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-start gap-2.5 font-body text-sm text-nido-avorio/60 hover:text-nido-oro transition-colors duration-200"
                  >
                    <MapPin size={13} strokeWidth={1.5} aria-hidden className="text-nido-oro/60 flex-shrink-0 mt-0.5" />
                    {CONTACT.address}
                  </a>
                </li>
                <li>
                  <a
                    href={LINKS.INSTAGRAM}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 font-body text-sm text-nido-avorio/60 hover:text-nido-oro transition-colors duration-200"
                  >
                    <AtSign size={13} strokeWidth={1.5} aria-hidden className="text-nido-oro/60 flex-shrink-0" />
                    {CONTACT.instagram}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-nido-avorio/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-nido-avorio/25">
            © {year} Nido del Corvo. Tutti i diritti riservati.
          </p>
          <p className="font-body text-xs text-nido-avorio/15">
            Parte del progetto IL COLLE
          </p>
        </div>
      </div>
    </footer>
  );
};
