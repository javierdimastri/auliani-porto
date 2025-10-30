import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Gradient Background */}
      <section className="relative overflow-hidden gradient-pink-yellow py-20 md:py-32">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <p className="text-white font-medium mb-4 tracking-wide">
              Senior Visual Designer | Brand Strategist | UI Enthusiast
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white">
              Auliani Puteri
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed mb-8">
              Creative visual designer with 8+ years of experience crafting impactful brand
              identities, social media content, and event visuals. Proven ability to lead design
              direction across digital and print with measurable business results.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/gallery"
                className="inline-block bg-white text-pink-primary px-8 py-3 rounded-full font-semibold hover:bg-pink-dark hover:text-white transition-all duration-300 shadow-lg"
              >
                View Portfolio
              </Link>
              <Link
                href="/contact"
                className="inline-block border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-pink-primary transition-all duration-300"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
        {/* Decorative circles */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-white/20 rounded-full"></div>
      </section>

      {/* Experience Highlights */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
            Experience Highlights
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl gradient-pink-purple text-white">
              <h3 className="text-2xl font-bold mb-2">KASKUS Networks</h3>
              <p className="text-sm mb-4 text-white/80">Nov 2020 - May 2024</p>
              <p className="font-semibold mb-3">Graphic Designer</p>
              <ul className="space-y-2 text-sm">
                <li>• Designed marketing templates used in 50+ campaigns</li>
                <li>• Reduced design turnaround by 35%</li>
                <li>• Increased content engagement by 30% YoY</li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl gradient-blue-purple text-white">
              <h3 className="text-2xl font-bold mb-2">Vista Education</h3>
              <p className="text-sm mb-4 text-white/80">Jan 2019 - Oct 2020</p>
              <p className="font-semibold mb-3">Visual Communication Specialist</p>
              <ul className="space-y-2 text-sm">
                <li>• Created full campaign assets for international education fairs</li>
                <li>• Managed freelance designers</li>
                <li>• Boosted social media followers by 25%</li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl gradient-yellow-blue text-foreground">
              <h3 className="text-2xl font-bold mb-2">Telkom University</h3>
              <p className="text-sm mb-4 text-muted">Dec 2016 - Dec 2018</p>
              <p className="font-semibold mb-3">Creative Marketing Designer</p>
              <ul className="space-y-2 text-sm">
                <li>• Designed marketing tools for online and offline media</li>
                <li>• Supported admission team campaigns</li>
                <li>• Managed social media content</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-pink-primary">Core Skills</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-xl shadow-sm">
                  <p className="font-semibold">Visual Branding</p>
                </div>
                <div className="p-4 bg-white rounded-xl shadow-sm">
                  <p className="font-semibold">Marketing Collateral</p>
                </div>
                <div className="p-4 bg-white rounded-xl shadow-sm">
                  <p className="font-semibold">Digital Imaging</p>
                </div>
                <div className="p-4 bg-white rounded-xl shadow-sm">
                  <p className="font-semibold">UI Design</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8 text-purple">Software</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-xl shadow-sm">
                  <p className="font-semibold">Adobe Illustrator</p>
                </div>
                <div className="p-4 bg-white rounded-xl shadow-sm">
                  <p className="font-semibold">Adobe Photoshop</p>
                </div>
                <div className="p-4 bg-white rounded-xl shadow-sm">
                  <p className="font-semibold">Figma</p>
                </div>
                <div className="p-4 bg-white rounded-xl shadow-sm">
                  <p className="font-semibold">After Effects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
