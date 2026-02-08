import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "MOOD Beauty Studio – Presentation Website",
    description:
      "Luxury presentation website for a beauty salon client, featuring an elegant, feminine design, interactive service cards, direct WhatsApp & Instagram booking, and a responsive, mobile-first layout.",
    tags: ["React", "JavaScript", "CSS", "Supabase"],
    github: "https://github.com/AngelescuCiprian/Mood-Beauty",
    live: null,
    featured: true,
  },
  {
    title: "Today I Learned",
    description:
      "A fullstack fact-sharing platform where users can share interesting facts they learned. Built with React and modern web technologies.",
    tags: ["React", "JavaScript", "CSS", "Supabase"],
    github: "https://github.com/AngelescuCiprian/today-i-learned",
    live: null,
    featured: true,
  },
  {
    title: "Wordle Game",
    description:
      "A Wordle-style game built with vanilla JavaScript, HTML, and CSS, using an external API as a word database. The project focuses on game logic, user input handling, and dynamic UI updates.",
    tags: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/AngelescuCiprian/WordleGame",
    live: null,
    featured: false,
  },
  {
    title: "AI-Powered Web Automation",
    description:
      "Configured an MCP server integrated with Playwright MCP, using an AI agent to automate web interactions based on high-level task instructions. Focused on reliable browser automation, task orchestration, and scalable testing workflows.",
    tags: ["Playwright", "MCP Server", "AI Automation", "Task-driver AI"],
    github:
      "https://www.linkedin.com/posts/angelescu-ciprian-72681b204_ai-automation-sql-ugcPost-7408149980336635904-8R46?utm_source=share&utm_medium=member_desktop&rcm=ACoAADQXP04BbPstJp_ijy9e2w6SMFviohLDrkw",
    live: null,
    featured: false,
  },
  {
    title: "User management system",
    description:
      "A bash-based user management system with registration, login/logout, password reset via email, and user reports.",
    tags: ["Bash Scripting", "Linux"],
    github: "https://github.com/AngelescuCiprian/user-management-bash",
    live: null,
    featured: false,
  },
  {
    title: "Men vs Gorillas – NetLogo Simulation",
    description:
      "NetLogo agent-based simulation of humans vs gorillas, featuring custom combat logic, energy decay, dynamic elimination, and real-time population plotting. Fully designed and implemented from scratch.",
    tags: ["NetLogo", "Agent-Based Modeling", "Simulation", "Academic Project"],
    github:
      "https://github.com/AngelescuCiprian/Men-vs-Gorillas-NetLogo-Simulation",
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
                project.featured ? "md:col-span-2 lg:col-span-2" : ""
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
