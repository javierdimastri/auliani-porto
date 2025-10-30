import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Auliani Puteri",
  description: "Get in touch for design collaborations and opportunities",
};

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-blue-purple py-20 text-white">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            Let's Work Together
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed max-w-3xl">
            I'm always interested in hearing about new projects and opportunities where
            design plays a strategic role. Let's create something amazing together!
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Email Card */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-pink-primary/10 to-pink-light/10 border-2 border-pink-primary/20 hover:border-pink-primary transition-all duration-300">
              <div className="w-16 h-16 bg-pink-primary rounded-full flex items-center justify-center text-white text-2xl mb-4">
                ✉
              </div>
              <h3 className="text-sm uppercase tracking-wider text-pink-dark mb-2 font-bold">Email</h3>
              <a
                href="mailto:ayaauliani@gmail.com"
                className="text-2xl font-bold text-foreground hover:text-pink-primary transition-colors block"
              >
                ayaauliani@gmail.com
              </a>
            </div>

            {/* Phone Card */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple/10 to-blue/10 border-2 border-purple/20 hover:border-purple transition-all duration-300">
              <div className="w-16 h-16 bg-purple rounded-full flex items-center justify-center text-white text-2xl mb-4">
                ☎
              </div>
              <h3 className="text-sm uppercase tracking-wider text-purple mb-2 font-bold">Phone</h3>
              <a
                href="tel:+6285360871139"
                className="text-2xl font-bold text-foreground hover:text-purple transition-colors block"
              >
                +628 5360 8711 39
              </a>
            </div>

            {/* Behance Card */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue/10 to-purple/10 border-2 border-blue/20 hover:border-blue transition-all duration-300">
              <div className="w-16 h-16 bg-blue rounded-full flex items-center justify-center text-white text-2xl mb-4">
                🎨
              </div>
              <h3 className="text-sm uppercase tracking-wider text-blue mb-2 font-bold">Behance</h3>
              <a
                href="https://behance.net/aulianiputri"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-bold text-foreground hover:text-blue transition-colors block"
              >
                behance.net/aulianiputri
              </a>
            </div>

            {/* LinkedIn Card */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-yellow/20 to-orange/10 border-2 border-yellow/20 hover:border-yellow transition-all duration-300">
              <div className="w-16 h-16 bg-yellow rounded-full flex items-center justify-center text-foreground text-2xl mb-4">
                💼
              </div>
              <h3 className="text-sm uppercase tracking-wider text-orange mb-2 font-bold">LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/aulianiputri"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-bold text-foreground hover:text-orange transition-colors block"
              >
                linkedin.com/in/aulianiputri
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Availability */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-pink-primary">Location</h3>
                <p className="text-xl font-bold text-foreground mb-2">Jakarta, Indonesia</p>
                <p className="text-muted">
                  Available for remote collaborations worldwide
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-purple">Availability</h3>
                <p className="text-xl font-bold text-foreground mb-2">Open to New Opportunities</p>
                <p className="text-muted">
                  Looking for projects where design plays a strategic role in education, media, and tech sectors
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
