import { BrandLogo } from "./Brand";
import { Icon } from "./Icon";

const links = [
  { label: "Product", href: "#how-it-works" },
  { label: "For doctors", href: "#for-doctors" },
  { label: "For clinic teams", href: "#for-clinics" },
  { label: "Trust & safety", href: "#trust" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <a className="brand brand--footer" href="#top" aria-label="medaurion home">
              <BrandLogo width={170} />
            </a>
            <p>Know what changed before the patient sits down.</p>
            <span className="footer-product">medaurion AIOS · Patient intelligence</span>
          </div>
          <nav className="footer-nav" aria-label="Footer">
            <h2>Explore</h2>
            {links.map((link) => (
              <a href={link.href} key={link.label}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className="footer-promise">
            <h2>Our promise</h2>
            <p>AI assists. The doctor decides.</p>
            <p>Patient information stays distinct from AI-generated drafts.</p>
          </div>
          <div className="footer-cta">
            <h2>For your clinic</h2>
            <p>Want to explore the doctor pilot?</p>
            <a className="footer-button" href="#pilot">
              Start a conversation <Icon name="arrow" size={16} />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 medaurion. All rights reserved.</span>
          <span>Built for better-informed care.</span>
          <a href="#top" className="back-to-top">
            Back to top <Icon name="arrow-up" size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
