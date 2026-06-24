interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "Esperienza", href: "/#esperienza" },
  { label: "Cucina", href: "/#cucina" },
  { label: "Fish Day", href: "/#fish-day" },
  { label: "Accedi", href: "/#accedi" },
  { label: "Eventi", href: "/#eventi" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Contatti", href: "/#contatti" },
];

interface NavigationProps {
  isScrolled?: boolean;
  mobile?: boolean;
  onClose?: () => void;
}

export const Navigation = ({
  isScrolled = false,
  mobile = false,
  onClose,
}: NavigationProps) => {
  if (mobile) {
    return (
      <ul className="flex flex-col">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={onClose}
              className="block py-4 font-body text-base text-nido-marrone border-b border-nido-avorio hover:text-nido-oro transition-colors duration-200"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <>
      {NAV_LINKS.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className={`font-body text-sm tracking-wide transition-colors duration-200 hover:text-nido-oro ${
            isScrolled ? "text-nido-marrone" : "text-white/90"
          }`}
        >
          {link.label}
        </a>
      ))}
    </>
  );
};
