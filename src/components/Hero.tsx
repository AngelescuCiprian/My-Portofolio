import { Github, Linkedin, ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Glow Effects */}
      <div className="hero-glow top-1/4 left-1/4 animate-pulse-slow" />
      <div className="hero-glow bottom-1/4 right-1/4 animate-pulse-slow" style={{ animationDelay: '2s' }} />
      
      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'linear-gradient(hsl(0 0% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 50%) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 animate-fade-up opacity-0" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'hsl(142 76% 36%)' }} />
            <span className="text-sm text-muted-foreground">Available for new opportunities</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-up opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            Building{' '}
            <span className="gradient-text">Scalable</span>
            <br />
            Digital Experiences.
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-up opacity-0" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
            I am <span className="text-foreground font-medium">Angelescu Ciprian</span>, a passionate student and junior developer focused on{' '}
            <span className="text-primary">Full Stack Web Development</span>,{' '}
            <span className="text-secondary">AI Solutions</span>, and{' '}
            <span className="text-primary">QA</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up opacity-0" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
            <button onClick={scrollToProjects} className="btn-primary w-full sm:w-auto">
              View Projects
            </button>
            <button onClick={scrollToContact} className="btn-secondary w-full sm:w-auto">
              Contact Me
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 animate-fade-up opacity-0" style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}>
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
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-fade-up opacity-0" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
          <button 
            onClick={scrollToProjects}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
