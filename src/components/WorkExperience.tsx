import { Briefcase, Calendar, MapPin } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  current?: boolean;
}

const experiences: Experience[] = [
  {
    title: "Junior QA / Automation & Web Development",
    company: "GDM WEBMEDIA",
    location: "Bucharest, Romania",
    period: "July 2025 - Jan 2026",
    description:
      "Worked as a Junior QA and Web Developer, gaining hands-on experience in manual and automated testing and basic web-end development. Contributed to web application quality assurance, experimented with AI-driven testing workflows, and supported UI/UX improvements.",
    responsibilities: [
      "Performed manual testing across multiple web applications, including smoke, regression, and end-to-end testing",
      "Designed and maintained automated test flows using Playwright, improving test reliability and reducing repetitive work",
      "Validated e-commerce flows on Shopify and built simple custom sections using Liquid",
      "Experimented with AI-assisted testing workflows for autonomous web navigation and test execution",
      "Developed experimental AI-driven web testing agents using Python in Jupyter Notebook, integrating Selenium/Playwright for navigation, clicks, forms, and scrolling",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Python",
      "Liquid",
      "Playwright/Selenium",
    ],
    current: false,
  },
  // Add more experiences here
  {
    title: "Information Technology & Programming Instructor",
    company: "Bloomcoding",
    location: "Remote (Moldova)",
    period: "Feb 2025 - July 2025",
    description:
      "Guided young learners (ages 7-14) in developing foundational programming and computational thinking skills through interactive coding projects. Designed engaging lessons and exercises to foster creativity, problem-solving, and a passion for technology.",
    responsibilities: [
      "Taught basics of Python, CodeBlocks, and interactive programming concepts",
      "Assisted students in creating animations, games, and 3D projects to reinforce learning",
      "Delivered lessons remotely, providing personalized guidance and support",
      "Encouraged creativity, experimentation, and problem-solving through coding projects",
    ],
    technologies: ["Python", "CodeBlocks", "Delightex", "Code.org"],
    current: false,
  },
];

const WorkExperience = () => {
  return (
    <section id="experience" className="py-24 relative">
      {/* Background Glow */}
      <div className="hero-glow top-1/2 right-0 opacity-20" />

      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-primary text-sm font-medium tracking-wider uppercase mb-4">
              Career Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Work <span className="gradient-text">Experience</span>
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

            {/* Experience Cards */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_hsl(187_100%_43%/0.5)] z-10">
                    {exp.current && (
                      <div className="absolute inset-0 rounded-full bg-primary animate-ping" />
                    )}
                  </div>

                  {/* Content Card */}
                  <div
                    className={`flex-1 ml-20 md:ml-0 ${
                      index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <div className="glass rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(187_100%_43%/0.15)] group">
                      {/* Header */}
                      <div className="mb-4">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                            {exp.title}
                          </h3>
                          {exp.current && (
                            <span className="flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                              Current
                            </span>
                          )}
                        </div>
                        <div className="text-lg font-semibold text-foreground/90 mb-3">
                          {exp.company}
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-primary" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-primary" />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-4">
                        {exp.description}
                      </p>

                      {/* Responsibilities */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-foreground/80 mb-2 flex items-center gap-2">
                          <Briefcase className="w-4 h-4 text-primary" />
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((resp, idx) => (
                            <li
                              key={idx}
                              className="text-sm text-muted-foreground pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-primary"
                            >
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
