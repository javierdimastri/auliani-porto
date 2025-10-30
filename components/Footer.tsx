export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t-4 border-pink-primary/20 mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="text-2xl font-bold bg-gradient-to-r from-pink-primary via-purple to-blue bg-clip-text text-transparent mb-2">
              Auliani Puteri
            </p>
            <p className="text-sm text-muted">
              © {currentYear} Visual Designer | All rights reserved
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:ayaauliani@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-pink-primary text-white rounded-full text-sm font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Email
            </a>
            <a
              href="https://behance.net/aulianiputri"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-pink-primary text-white rounded-full text-sm font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Behance
            </a>
            <a
              href="https://www.linkedin.com/in/aulianiputri"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-pink-primary text-white rounded-full text-sm font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-accent text-center">
          <p className="text-xs text-muted">
            Senior Visual Designer specializing in Brand Identity, Social Media Design & Event Visuals
          </p>
        </div>
      </div>
    </footer>
  );
}
