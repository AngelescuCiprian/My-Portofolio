import { Github, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo/Name */}
          <div className="text-center md:text-left">
            <span className="text-xl font-bold gradient-text">AC</span>
            <p className="text-sm text-muted-foreground mt-1">
              Building digital experiences
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/angelescu-ciprian-72681b204/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/AngelescuCiprian"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground flex items-center gap-1 justify-center md:justify-end">
              © {currentYear} Angelescu Ciprian. Made with{' '}
              <Heart className="w-4 h-4 text-destructive fill-current" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
