import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-pink-primary via-purple to-blue bg-clip-text text-transparent hover:scale-105 transition-transform">
            Auliani Puteri
          </Link>
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
        </div>
      </nav>
    </header>
  );
}
