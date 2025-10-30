import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio - Auliani Puteri",
  description: "Selected works showcasing brand identities, social media design, and event visuals",
};

const projects = [
  {
    id: 1,
    title: "Top Majors Online Education Fair",
    company: "Vista Education",
    year: "2020",
    category: "Event",
    type: "Key visual concept & design",
    description: "Education expo bringing together students with top schools from worldwide. Created key visual, social media contents and promotional materials.",
    gradient: "from-pink-primary to-purple",
  },
  {
    id: 2,
    title: "Vista Education Website",
    company: "Vista Education",
    year: "2020",
    category: "Website",
    type: "Website redesign",
    description: "Dynamic website for education company offering total service to prepare for overseas study and international English tests.",
    gradient: "from-blue to-purple",
  },
  {
    id: 3,
    title: "KASKUS Social Media",
    company: "KASKUS Networks",
    year: "2020-2021",
    category: "Social Media",
    type: "Social media design",
    description: "Indonesian community forum marketing materials with fun and update themes following community trends.",
    gradient: "from-yellow to-orange",
  },
  {
    id: 4,
    title: "Ngabuburit Festival",
    company: "Endeus",
    year: "2022",
    category: "Event",
    type: "Key visual concept & logo design",
    description: "Ramadan program logo design and promotional materials. Entertainment show with food review theme.",
    gradient: "from-orange to-pink-primary",
  },
  {
    id: 5,
    title: "Noraejjang K-pop Platform",
    company: "Noraejjang",
    year: "2023-2024",
    category: "Social Media",
    type: "Social media design",
    description: "Digital platform for K-pop fans. Created vibrant and playful visual content including event announcements, fun facts, and artist updates.",
    gradient: "from-pink-primary to-blue",
  },
  {
    id: 6,
    title: "Nasimura Branding",
    company: "Nasimura",
    year: "2023",
    category: "Print",
    type: "Banner & Branding Design",
    description: "Japanese-inspired dishes brand. Created banner designs combining bold typography, wave patterns, and appetizing food imagery.",
    gradient: "from-purple to-blue",
  },
];

export default function Gallery() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-pink-yellow py-20 text-white">
        <div className="container mx-auto px-6">
          <p className="text-sm uppercase tracking-wider mb-4 font-bold text-pink-dark">
            Portfolio
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Selected Works
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed max-w-3xl">
            A curated collection of projects spanning brand identity, social media design,
            event visuals, and digital experiences.
          </p>
          <div className="mt-8">
            <a
              href="https://behance.net/aulianiputri"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-pink-primary px-8 py-3 rounded-full font-semibold hover:bg-pink-dark hover:text-white transition-all duration-300 shadow-lg"
            >
              View Full Portfolio on Behance
            </a>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className={`h-48 bg-gradient-to-br ${project.gradient} p-6 flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                  <div className="relative z-10 text-center">
                    <p className="text-white/80 text-sm font-semibold mb-2">{project.company}</p>
                    <h3 className="text-white font-bold text-xl">{project.title}</h3>
                  </div>
                  {/* Decorative circle */}
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/20 rounded-full"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-bold text-pink-primary uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-sm text-muted">{project.year}</span>
                  </div>
                  <p className="text-sm text-purple font-semibold mb-3">{project.type}</p>
                  <p className="text-foreground leading-relaxed text-sm">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Want to See More?
          </h2>
          <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
            Check out my complete portfolio on Behance for detailed case studies and more projects.
          </p>
          <a
            href="https://behance.net/aulianiputri"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-pink-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-pink-dark transition-all duration-300 shadow-lg"
          >
            Visit Behance Portfolio
          </a>
        </div>
      </section>
    </div>
  );
}
