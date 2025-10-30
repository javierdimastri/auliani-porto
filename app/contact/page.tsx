import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Auliani Puteri",
  description: "Get in touch for design collaborations and opportunities",
};

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-blue-purple py-16 sm:py-20 md:py-24 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 tracking-tight">
            Let's Work Together
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed max-w-3xl">
            I'm always interested in hearing about new projects and opportunities where
            design plays a strategic role. Let's create something amazing together!
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-6 sm:gap-8">
            {/* Email Card */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-pink-primary/10 to-pink-light/10 border-2 border-pink-primary/20 hover:border-pink-primary transition-all duration-300">
              <div className="w-16 h-16 bg-pink-primary rounded-full flex items-center justify-center text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122" />
                </svg>
              </div>
              <h3 className="text-sm uppercase tracking-wider text-pink-primary mb-2 font-bold">Email</h3>
              <a
                href="mailto:ayaauliani@gmail.com"
                className="text-xl sm:text-2xl font-bold text-foreground hover:text-pink-primary transition-colors block break-all"
              >
                ayaauliani@gmail.com
              </a>
            </div>

            {/* Phone Card */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple/10 to-blue/10 border-2 border-purple/20 hover:border-purple transition-all duration-300">
              <div className="w-16 h-16 bg-purple rounded-full flex items-center justify-center text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
              </div>
              <h3 className="text-sm uppercase tracking-wider text-purple mb-2 font-bold">Phone</h3>
              <a
                href="tel:+6285360871139"
                className="text-xl sm:text-2xl font-bold text-foreground hover:text-purple transition-colors block"
              >
                +628 5360 8711 39
              </a>
            </div>

            {/* Behance Card */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue/10 to-purple/10 border-2 border-blue/20 hover:border-blue transition-all duration-300">
              <div className="w-16 h-16 bg-blue rounded-full flex items-center justify-center text-white mb-4 p-3">
                <img src="/behance-2161.svg" alt="Behance" className="w-full h-full brightness-0 invert" />
              </div>
              <h3 className="text-sm uppercase tracking-wider text-blue mb-2 font-bold">Behance</h3>
              <a
                href="https://behance.net/aulianiputri"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl sm:text-2xl font-bold text-foreground hover:text-blue transition-colors block break-all"
              >
                behance.net/aulianiputri
              </a>
            </div>

            {/* LinkedIn Card */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-yellow/20 to-orange/10 border-2 border-yellow/20 hover:border-yellow transition-all duration-300">
              <div className="w-16 h-16 bg-yellow rounded-full flex items-center justify-center text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <h3 className="text-sm uppercase tracking-wider text-orange mb-2 font-bold">LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/aulianiputri"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl sm:text-2xl font-bold text-foreground hover:text-orange transition-colors block break-all"
              >
                linkedin.com/in/aulianiputri
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
