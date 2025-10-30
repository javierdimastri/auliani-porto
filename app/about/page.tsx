import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Auliani Puteri",
  description: "Senior Visual Designer with 8+ years of experience in brand identities and social media content",
};

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-pink-purple py-20 text-white">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            About Me
          </h1>
          <div className="max-w-4xl">
            <p className="text-xl md:text-2xl leading-relaxed mb-6">
              Creative visual designer with 8+ years of experience crafting impactful brand
              identities, social media content, and event visuals.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-white/90">
              Proven ability to lead design direction across digital and print with measurable
              business results. Recently returning to the professional field after a short career
              break for maternity leave, bringing renewed energy, up-to-date design skills, and a
              strong passion for delivering engaging and visually compelling solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Key Strengths */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
            What I Bring to the Table
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-accent rounded-2xl">
              <div className="w-12 h-12 bg-pink-primary rounded-full mb-4 flex items-center justify-center text-white font-bold text-xl">
                ✓
              </div>
              <h3 className="text-xl font-bold mb-3 text-pink-primary">Measurable Results</h3>
              <p className="text-foreground">
                Designed marketing templates for 50+ campaigns, reducing design turnaround by 35%
                and increasing content engagement by 30% YoY.
              </p>
            </div>

            <div className="p-6 bg-accent rounded-2xl">
              <div className="w-12 h-12 bg-purple rounded-full mb-4 flex items-center justify-center text-white font-bold text-xl">
                ★
              </div>
              <h3 className="text-xl font-bold mb-3 text-purple">Collaborative Leadership</h3>
              <p className="text-foreground">
                Managed freelance designers and coordinated with cross-functional teams to maintain
                consistent brand output across all assets.
              </p>
            </div>

            <div className="p-6 bg-accent rounded-2xl">
              <div className="w-12 h-12 bg-blue rounded-full mb-4 flex items-center justify-center text-white font-bold text-xl">
                ♥
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue">Strategic Thinking</h3>
              <p className="text-foreground">
                Co-led rebranding initiatives that boosted social media followers by 25% and
                enhanced brand recognition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Philosophy */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-foreground">My Approach</h2>
            <p className="text-xl text-foreground leading-relaxed mb-6">
              I believe great design is more than just aesthetics — it's about solving problems
              and driving results.
            </p>
            <p className="text-lg text-muted leading-relaxed">
              Always curious, always learning. I'm open to opportunities where design plays a
              strategic role in shaping brand narratives and engaging audiences.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
            Professional Journey
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="p-6 bg-gradient-to-r from-pink-primary/10 to-purple/10 rounded-2xl border-l-4 border-pink-primary">
              <p className="text-pink-primary font-bold mb-2">Nov 2020 - May 2024</p>
              <h3 className="text-2xl font-bold text-foreground mb-2">KASKUS Networks</h3>
              <p className="text-lg text-pink-dark mb-3">Graphic Designer</p>
              <ul className="space-y-2 text-foreground">
                <li>• Designed marketing templates used in 50+ campaigns, reducing design turnaround by 35%</li>
                <li>• Developed reusable design systems to streamline collaboration across departments</li>
                <li>• Led visual design for multi-platform campaigns, increasing content engagement by 30% YoY</li>
              </ul>
            </div>

            <div className="p-6 bg-gradient-to-r from-blue/10 to-purple/10 rounded-2xl border-l-4 border-blue">
              <p className="text-blue font-bold mb-2">Jan 2019 - Oct 2020</p>
              <h3 className="text-2xl font-bold text-foreground mb-2">Vista Education</h3>
              <p className="text-lg text-purple mb-3">Visual Communication Specialist</p>
              <ul className="space-y-2 text-foreground">
                <li>• Created full campaign assets (key visuals, print, and digital) for international education fairs</li>
                <li>• Managed freelance designers, maintaining consistent brand output across all assets</li>
                <li>• Co-led rebranding initiative, boosting social media followers by 25%</li>
              </ul>
            </div>

            <div className="p-6 bg-gradient-to-r from-yellow/20 to-orange/10 rounded-2xl border-l-4 border-yellow">
              <p className="text-orange font-bold mb-2">Dec 2016 - Dec 2018</p>
              <h3 className="text-2xl font-bold text-foreground mb-2">Telkom University</h3>
              <p className="text-lg text-orange mb-3">Creative Marketing Designer</p>
              <ul className="space-y-2 text-foreground">
                <li>• Designed marketing tools for online and offline media to support admission team</li>
                <li>• Managed social media content across Instagram, Facebook, and Twitter</li>
              </ul>
            </div>

            <div className="p-6 bg-accent rounded-2xl border-l-4 border-muted">
              <p className="text-muted font-bold mb-2">May 2015 - Jul 2015</p>
              <h3 className="text-2xl font-bold text-foreground mb-2">PT. Dian Mentari Pratama</h3>
              <p className="text-lg text-muted mb-3">Intern Art Director</p>
              <ul className="space-y-2 text-foreground">
                <li>• Developed products from print and digital ads to logos and branding strategies</li>
                <li>• Collaborated with copywriters and account executives on client briefs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Skills */}
      <section className="py-16 gradient-yellow-blue">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Education</h2>
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-pink-primary rounded-full flex items-center justify-center text-white font-bold text-2xl shrink-0">
                  🎓
                </div>
                <div>
                  <p className="text-pink-primary font-bold mb-1">2012 - 2016</p>
                  <h3 className="text-xl font-bold text-foreground mb-1">Telkom University</h3>
                  <p className="text-muted">Bachelor Visual Communication Design</p>
                  <p className="text-foreground font-semibold mt-1">GPA: 3.5/4.0</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-pink-primary">Skills</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-pink-primary rounded-full"></div>
                    <p className="text-foreground font-medium">Visual Branding</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-pink-primary rounded-full"></div>
                    <p className="text-foreground font-medium">Marketing Collateral</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-pink-primary rounded-full"></div>
                    <p className="text-foreground font-medium">Digital Imaging</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-pink-primary rounded-full"></div>
                    <p className="text-foreground font-medium">UI Design</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-purple">Software</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple rounded-full"></div>
                    <p className="text-foreground font-medium">Adobe Illustrator</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple rounded-full"></div>
                    <p className="text-foreground font-medium">Adobe Photoshop</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple rounded-full"></div>
                    <p className="text-foreground font-medium">Figma</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple rounded-full"></div>
                    <p className="text-foreground font-medium">After Effects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
