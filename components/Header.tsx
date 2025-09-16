import Link from 'next/link';
import { useEffect, useState } from 'react';

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#faq', label: 'FAQs' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' }
];

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setIsMobileNavOpen(false);
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileNavOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  const toggleMobileNav = () => {
    setIsMobileNavOpen((prev) => !prev);
  };

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  };

  return (
    <header className="header" role="banner">
      <div className="container header__wrap">
        <div className="brand-wrapper">
          <Link className="brand" href="/" aria-label="CleanHome home">
            <span className="brand__logo">
              Clean<span className="brand__highlight">Home</span>
            </span>
          </Link>
          <span className="brand__tagline">Junk Removal &amp; Hauling</span>
        </div>
        <nav className="nav" aria-label="Primary navigation">
          <ul className="nav__list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav__link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn--accent nav__cta">
            Book&nbsp;Now
          </a>
        </nav>
        <button
          className="nav__toggle"
          type="button"
          aria-controls="mobile-nav"
          aria-expanded={isMobileNavOpen}
          onClick={toggleMobileNav}
        >
          <span className="nav__toggle-bar" />
          <span className="nav__toggle-bar" />
          <span className="nav__toggle-bar" />
          <span className="sr-only">Toggle navigation</span>
        </button>
      </div>
      <nav
        id="mobile-nav"
        className={`mobile-nav${isMobileNavOpen ? ' mobile-nav--open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!isMobileNavOpen}
      >
        <ul className="mobile-nav__list">
          {navLinks.map((link) => (
            <li key={`mobile-${link.href}`}>
              <a href={link.href} className="mobile-nav__link" onClick={closeMobileNav}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="btn btn--accent mobile-nav__cta" onClick={closeMobileNav}>
          Book Now
        </a>
      </nav>
    </header>
  );
};

export default Header;
