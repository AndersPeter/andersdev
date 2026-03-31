import Image from "next/image";
import Link from "next/link";
import Anders from "./Anders-billede.png";

const services = [
  {
    icon: "📱",
    title: "React Native Apps",
    description:
      "Cross-platform mobile apps for iOS and Android, built with React Native and Expo. One codebase, both platforms.",
  },
  {
    icon: "⚛️",
    title: "React Web Apps",
    description:
      "Fast, modern web applications with React and Next.js. From landing pages to complex dashboards.",
  },
  {
    icon: "🔗",
    title: "Full-Stack Development",
    description:
      "End-to-end solutions including APIs, databases, and deployment — so you only need to talk to one person.",
  },
];

const deals = [
  {
    label: "Starter",
    price: "Contact for price",
    items: ["Single-page website", "Mobile responsive", "Contact form", "1 round of revisions"],
  },
  {
    label: "App",
    price: "Contact for price",
    items: [
      "React Native mobile app",
      "iOS + Android",
      "Core feature set",
      "2 rounds of revisions",
    ],
    highlight: true,
  },
  {
    label: "Full Project",
    price: "Contact for price",
    items: [
      "Web + mobile",
      "Custom backend",
      "Ongoing support",
      "Unlimited revisions",
    ],
  },
];

export default function Home() {
  return (
    <main className="font-(--font-inter)">
      {/* NAV */}
      <nav className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-[#0b0f19]/80 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="font-semibold tracking-tight text-white">
            Anders<span className="text-indigo-400">.</span>dev
          </span>
          <div className="flex items-center gap-6 text-sm text-white/60">
            <a href="#services" className="hover:text-white transition-colors">
              Services
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
            <a
              href="tel:40974842"
              className="hover:text-white transition-colors"
            >
              40 97 48 42
            </a>
            <a
              href="mailto:contact@andersdev.dk"
              className="px-3 py-1.5 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 transition-colors"
            >
              Hire me
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 order-2 md:order-1">
            <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-4">
              Available for new projects
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
              React &amp; React Native
              <br />
              <span className="text-indigo-400">Developer</span>
            </h1>
            <p className="mt-6 text-lg text-white/60 max-w-lg">
              I build polished mobile apps and web experiences. Whether you need
              an iOS/Android app or a modern website, I&apos;ll take it from
              idea to production.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-colors"
              >
                Get in touch
              </a>
              <Link
                href="/projects"
                className="px-6 py-3 rounded-xl border border-white/10 hover:border-white/30 text-white/70 hover:text-white font-medium transition-colors"
              >
                See projects
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-4 text-white/40 text-sm">
              <span>Also working with</span>
              <a
                href="https://tuna.digital"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white underline underline-offset-2 transition-colors"
              >
                Tuna Digital
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 shrink-0">
            <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-2xl overflow-hidden ring-1 ring-white/10">
              <Image
                src={Anders}
                alt="Anders Sørensen"
                fill
                className="object-cover"
                placeholder="blur"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-2">What I do</h2>
          <p className="text-white/50 mb-10">
            Focused expertise — not a generalist agency.
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-white/8 bg-white/3 p-6 hover:border-indigo-500/40 hover:bg-white/5 transition-all"
              >
                <span className="text-3xl">{s.icon}</span>
                <h3 className="mt-4 font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-white/50 leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEALS */}
      <section className="py-20 px-6 bg-white/2">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-start justify-between flex-wrap gap-4 mb-10">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">
                Great deals — I&apos;m just getting started
              </h2>
              <p className="text-white/50">
                I&apos;m building my portfolio, so you get competitive rates.
                Reach out and let&apos;s find a price that works.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {deals.map((d) => (
              <div
                key={d.label}
                className={`rounded-2xl border p-6 flex flex-col ${
                  d.highlight
                    ? "border-indigo-500/60 bg-indigo-950/40"
                    : "border-white/8 bg-white/3"
                }`}
              >
                {d.highlight && (
                  <span className="text-xs font-semibold text-indigo-400 tracking-widest uppercase mb-3">
                    Popular
                  </span>
                )}
                <h3 className="text-lg font-semibold text-white">{d.label}</h3>
                <p className="mt-1 text-sm text-white/40">{d.price}</p>
                <ul className="mt-5 space-y-2 flex-1">
                  {d.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-white/60 flex items-center gap-2"
                    >
                      <span className="text-indigo-400">✓</span> {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-6 text-center py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    d.highlight
                      ? "bg-indigo-600 hover:bg-indigo-500 text-white"
                      : "border border-white/10 hover:border-white/30 text-white/70 hover:text-white"
                  }`}
                >
                  Get a quote
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">About me</h2>
            <p className="text-white/60 leading-relaxed mb-4">
              I&apos;m Anders — a Danish app and web developer with a focus on
              the React ecosystem. I specialise in building smooth mobile
              experiences with React Native and clean web apps with React and
              Next.js.
            </p>
            <p className="text-white/60 leading-relaxed mb-4">
              Professionally, I collaborate with{" "}
              <a
                href="https://tuna.digital"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2"
              >
                Tuna Digital
              </a>
              , a digital agency delivering quality work for their clients. That
              experience keeps me sharp on real-world project demands.
            </p>
            <p className="text-white/60 leading-relaxed">
              I&apos;m currently taking on new projects independently — and
              because I&apos;m just starting out on my own, I offer very
              competitive rates. You get professional-quality work without the
              agency price tag.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "React", sub: "Web apps & SPAs" },
              { label: "React Native", sub: "iOS & Android" },
              { label: "Next.js", sub: "Full-stack web" },
              { label: "TypeScript", sub: "Type-safe code" },
              { label: "Expo", sub: "Mobile tooling" },
              { label: "Node.js", sub: "Backend & APIs" },
            ].map((skill) => (
              <div
                key={skill.label}
                className="rounded-xl border border-white/8 bg-white/3 p-4"
              >
                <p className="font-medium text-white text-sm">{skill.label}</p>
                <p className="text-xs text-white/40 mt-0.5">{skill.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-20 px-6 bg-white/2 border-t border-white/5"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Let&apos;s build something
          </h2>
          <p className="text-white/50 mb-10 max-w-md mx-auto">
            Have a project in mind? Drop me a message and I&apos;ll get back to
            you within a day.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:contact@andersdev.dk"
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-colors"
            >
              <span>✉</span> contact@andersdev.dk
            </a>
            <a
              href="tel:40974842"
              className="flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 hover:border-white/30 text-white/70 hover:text-white transition-colors"
            >
              <span>📞</span> 40 97 48 42
            </a>
            <a
              href="https://github.com/AndersPeter"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 hover:border-white/30 text-white/70 hover:text-white transition-colors"
            >
              <span>⌥</span> GitHub
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-8 px-6 text-center text-white/30 text-sm">
        <p>
          © {new Date().getFullYear()} Anders Sørensen &mdash; React &amp;
          React Native Developer
        </p>
      </footer>
    </main>
  );
}
