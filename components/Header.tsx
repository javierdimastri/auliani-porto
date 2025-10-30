import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-pink-primary via-purple to-blue bg-clip-text text-transparent hover:scale-105 transition-transform">
            Auliani Puteri
          </Link>
          <div className="flex items-center gap-6">
            <ul className="flex gap-6 text-sm font-semibold uppercase tracking-wider">
              <li>
                <Link
                  href="/gallery"
                  className="text-foreground hover:text-pink-primary hover:bg-pink-light/20 px-4 py-2 rounded-full transition-all duration-300"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-foreground hover:text-purple hover:bg-purple/10 px-4 py-2 rounded-full transition-all duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-foreground hover:text-blue hover:bg-blue/20 px-4 py-2 rounded-full transition-all duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <a
              href="/cv.pdf"
              download="Auliani_Puteri_CV.pdf"
              className="bg-gradient-to-r from-pink-primary to-purple text-white px-5 py-2 rounded-full text-sm font-bold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Download CV
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
