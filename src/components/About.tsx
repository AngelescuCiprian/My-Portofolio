import { Code2, Sparkles, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      {/* Background Glow */}
      <div className="hero-glow top-0 left-0 opacity-30" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Avatar Section */}
            <div className="relative flex justify-center md:justify-start">
              <div className="relative">
                {/* Glow Ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 blur-2xl animate-glow-pulse" />
                
                {/* Avatar Container */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full glass p-2">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-surface to-muted flex items-center justify-center overflow-hidden">
                    <img src='/public/profilePicture.jpg' alt="Profile Picture" />
                    
                  </div>
                </div>

                {/* Floating Icons */}
                <div className="absolute -top-4 -right-4 glass rounded-xl p-3 animate-float">
                  <Code2 className="w-6 h-6 text-primary" />
                </div>
                <div className="absolute -bottom-4 -left-4 glass rounded-xl p-3 animate-float" style={{ animationDelay: '1s' }}>
                  <Sparkles className="w-6 h-6 text-secondary" />
                </div>
                <div className="absolute top-1/2 -right-8 glass rounded-xl p-3 animate-float" style={{ animationDelay: '2s' }}>
                  <Zap className="w-6 h-6 text-primary" />
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div>
              <span className="inline-block text-primary text-sm font-medium tracking-wider uppercase mb-4">
                About Me
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Crafting Digital
                <br />
                <span className="gradient-text">Solutions</span> with Passion
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                I specialize in building robust applications using React and Node.js. With a strong foundation in computer science, I love solving complex problems and creating seamless user experiences that make a real impact.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center md:text-left">
                  <div className="text-3xl font-bold gradient-text">5+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="text-center md:text-left">
                  <div className="text-3xl font-bold gradient-text">7+</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </div>
                <div className="text-center md:text-left">
                  <div className="text-3xl font-bold gradient-text">100%</div>
                  <div className="text-sm text-muted-foreground">Dedication</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
