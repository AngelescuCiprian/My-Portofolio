import { ExternalLink, Github, Folder } from 'lucide-react';

const projects = [
  {
    title: 'Today I Learned',
    description: 'A fact-sharing platform where users can share interesting facts they learned. Built with React and modern web technologies.',
    tags: ['React', 'JavaScript', 'CSS'],
    github: 'https://github.com/AngelescuCiprian/today-i-learned',
    live: null,
    featured: true,
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio showcasing projects and skills with a modern dark theme and smooth animations.',
    tags: ['React', 'TypeScript', 'Tailwind'],
    github: 'https://github.com/AngelescuCiprian',
    live: null,
    featured: false,
  },
  {
    title: 'Coming Soon',
    description: 'More exciting projects are in the works. Stay tuned for updates!',
    tags: ['AI', 'Full Stack', 'QA'],
    github: null,
    live: null,
    featured: false,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      {/* Background Glow */}
      <div className="hero-glow bottom-0 right-0 opacity-20" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-primary text-sm font-medium tracking-wider uppercase mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`bento-card group ${
                project.featured ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <Folder className="w-10 h-10 text-primary" />
                <div className="flex items-center gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* View More Link */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/AngelescuCiprian"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <span>View more on GitHub</span>
            <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
