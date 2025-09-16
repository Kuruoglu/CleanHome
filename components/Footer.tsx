const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__wrap">
        <div className="footer__grid">
          <div className="footer__column">
            <h3 className="footer__heading">Local office</h3>
            <p>Minneapolis, Minnesota</p>
            <p>
              <a href="mailto:info@cleanhome.com">info@cleanhome.com</a>
            </p>
            <p>888 333 9999</p>
            <p>Mon–Fri: 9am–6pm</p>
          </div>
          <div className="footer__column">
            <h3 className="footer__heading">Company</h3>
            <ul className="footer__list">
              <li>
                <a href="#about">About us</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#contact">Contact us</a>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <h3 className="footer__heading">Other links</h3>
            <ul className="footer__list">
              <li>
                <a href="#">Terms of use</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
              <li>
                <a href="#">Subscribe</a>
              </li>
              <li>
                <a href="#">Accessibility</a>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <h3 className="footer__heading">Follow us</h3>
            <ul className="footer__social">
              <li>
                <a href="#" aria-label="Facebook">
                  Fb
                </a>
              </li>
              <li>
                <a href="#" aria-label="Instagram">
                  Ig
                </a>
              </li>
              <li>
                <a href="#" aria-label="LinkedIn">
                  Li
                </a>
              </li>
              <li>
                <a href="#" aria-label="Twitter">
                  X
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p>© 2025 CleanHome – All rights reserved</p>
        <p className="footer__credit">Website built with care by CleanHome</p>
      </div>
    </footer>
  );
};

export default Footer;
