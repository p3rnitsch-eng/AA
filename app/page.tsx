const ONLYFANS_URL = "https://www.onlyfans.com/simplycanadian";

export default function Home() {
  return (
    <main
      className="min-h-screen"
      style={{ background: "var(--bg)", color: "var(--text-primary)" }}
    >
      {/* ─── HERO ──────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        {/* Background: hero photo with warm gradient fallback */}
        <div
          className="absolute inset-0 z-0 hero-bg"
          style={{
            backgroundImage: "url('/hero.jpg')",
            backgroundSize: "cover",
            backgroundColor: "#2A2018",
          }}
        >
          {/* Left text panel — gentle darkening for readability */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(26,22,20,0.78) 0%, rgba(26,22,20,0.45) 40%, rgba(26,22,20,0.1) 70%, transparent 100%)",
            }}
          />
          {/* Bottom fade into content */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(26,22,20,0.65) 0%, transparent 50%)",
            }}
          />
        </div>

        {/* Nav */}
        <nav className="absolute top-0 left-0 right-0 z-20 flex items-center px-8 py-7 md:px-16">
          <span
            className="text-2xl tracking-widest uppercase text-white/90"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, letterSpacing: "0.25em" }}
          >
            Bella
          </span>
        </nav>

        {/* Hero copy — left aligned, editorial */}
        <div className="relative z-10 w-full px-8 pb-20 md:px-16 md:pb-28 max-w-3xl">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-6 opacity-fade-up"
            style={{ color: "var(--accent-gold)", fontFamily: "var(--font-inter)", fontWeight: 400 }}
          >
            A quiet space. Real connection.
          </p>

          <h1
            className="mb-6 leading-[1.05]"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(3rem, 7vw, 5.5rem)",
              fontWeight: 300,
              color: "#FAF8F5",
              fontStyle: "italic",
            }}
          >
            Come for the beauty.<br />
            Stay for the feeling.
          </h1>

          <p
            className="mb-10 leading-relaxed"
            style={{
              color: "rgba(250,248,245,0.65)",
              fontFamily: "var(--font-inter)",
              fontWeight: 300,
              fontSize: "1.05rem",
              maxWidth: "380px",
            }}
          >
            Soft, intentional imagery.<br />
            Real conversation, when you want it.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={ONLYFANS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-90"
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 500,
                letterSpacing: "0.12em",
                background: "var(--accent-gold)",
                color: "#1A1614",
              }}
            >
              Enter Bella's World
            </a>
            <a
              href="#inside"
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm tracking-widest uppercase transition-all duration-300 hover:bg-white/10"
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 400,
                letterSpacing: "0.12em",
                border: "1px solid rgba(250,248,245,0.35)",
                color: "rgba(250,248,245,0.8)",
              }}
            >
              See what's inside
            </a>
          </div>
        </div>
      </section>

      {/* ─── PATH SELECTION ────────────────────────────────────── */}
      <section
        id="inside"
        className="px-6 py-24 md:py-32 md:px-16"
        style={{ background: "var(--bg)" }}
      >
        <div className="max-w-5xl mx-auto">
          {/* Section label */}
          <p
            className="text-xs tracking-[0.3em] uppercase mb-4 text-center"
            style={{ color: "var(--accent-rose)", fontFamily: "var(--font-inter)" }}
          >
            Find your way in
          </p>
          <h2
            className="text-center mb-16"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
              fontStyle: "italic",
              color: "var(--text-primary)",
              lineHeight: 1.2,
            }}
          >
            Everyone arrives differently.
          </h2>

          {/* Two cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 — Passive */}
            <div
              className="group relative flex flex-col justify-between p-10 md:p-12 transition-all duration-300 hover:shadow-lg"
              style={{
                background: "var(--bg-card)",
                borderTop: "1px solid var(--cream-border)",
              }}
            >
              <div>
                <p
                  className="text-xs tracking-[0.25em] uppercase mb-6"
                  style={{ color: "var(--text-muted)", fontFamily: "var(--font-inter)" }}
                >
                  01
                </p>
                <h3
                  className="mb-4"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                    fontWeight: 400,
                    fontStyle: "italic",
                    color: "var(--text-primary)",
                    lineHeight: 1.2,
                  }}
                >
                  Just here to enjoy
                </h3>
                <p
                  className="leading-relaxed mb-10"
                  style={{
                    color: "var(--text-secondary)",
                    fontFamily: "var(--font-inter)",
                    fontWeight: 300,
                    fontSize: "0.95rem",
                    lineHeight: 1.8,
                  }}
                >
                  A curated collection of soft, tasteful imagery.
                  Take your time. Nothing loud. Nothing rushed.
                </p>
              </div>
              <a
                href={ONLYFANS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm tracking-wider group-hover:gap-3 transition-all duration-200"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 500,
                  color: "var(--text-primary)",
                  gap: "0.5rem",
                }}
              >
                View the Collection <span style={{ color: "var(--accent-gold)" }}>→</span>
              </a>
            </div>

            {/* Card 2 — Emotional */}
            <div
              className="group relative flex flex-col justify-between p-10 md:p-12 transition-all duration-300 hover:shadow-lg"
              style={{
                background: "#EDE6DD",
                borderTop: "1px solid var(--cream-border)",
              }}
            >
              <div>
                <p
                  className="text-xs tracking-[0.25em] uppercase mb-6"
                  style={{ color: "var(--text-muted)", fontFamily: "var(--font-inter)" }}
                >
                  02
                </p>
                <h3
                  className="mb-4"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                    fontWeight: 400,
                    fontStyle: "italic",
                    color: "var(--text-primary)",
                    lineHeight: 1.2,
                  }}
                >
                  Looking for something more
                </h3>
                <p
                  className="leading-relaxed mb-10"
                  style={{
                    color: "var(--text-secondary)",
                    fontFamily: "var(--font-inter)",
                    fontWeight: 300,
                    fontSize: "0.95rem",
                    lineHeight: 1.8,
                  }}
                >
                  A quieter experience. Real conversation when it feels right.
                  Presence, not performance.
                </p>
              </div>
              <a
                href={ONLYFANS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm tracking-wider transition-all duration-200"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 500,
                  color: "var(--text-primary)",
                  gap: "0.5rem",
                }}
              >
                Enter the Space <span style={{ color: "var(--accent-rose)" }}>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHAT THIS IS ──────────────────────────────────────── */}
      <section
        className="relative overflow-hidden px-6 py-24 md:py-36 md:px-16"
        style={{ background: "var(--navy)" }}
      >
        {/* Subtle radial glow */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 30% 50%, rgba(200,168,122,0.35) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-3xl mx-auto">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-6"
            style={{ color: "var(--accent-gold)", fontFamily: "var(--font-inter)" }}
          >
            What this is
          </p>

          <h2
            className="mb-10"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "#FAF8F5",
              lineHeight: 1.15,
            }}
          >
            This isn't just content.<br />
            It's a space.
          </h2>

          <div
            className="space-y-5"
            style={{
              color: "rgba(250,248,245,0.55)",
              fontFamily: "var(--font-inter)",
              fontWeight: 300,
              fontSize: "1.05rem",
              lineHeight: 1.85,
              maxWidth: "520px",
            }}
          >
            <p>
              In a world built on noise and overstimulation,<br />
              this is something quieter.
            </p>
            <p>
              A place where beauty is intentional.<br />
              Where conversations aren't rushed.<br />
              Where attention feels real.
            </p>
          </div>
        </div>
      </section>

      {/* ─── WHAT YOU'LL FIND INSIDE ───────────────────────────── */}
      <section
        className="px-6 py-24 md:py-36 md:px-16"
        style={{ background: "var(--bg)" }}
      >
        <div className="max-w-5xl mx-auto">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-4"
            style={{ color: "var(--accent-rose)", fontFamily: "var(--font-inter)" }}
          >
            Inside Bella's World
          </p>
          <h2
            className="mb-20"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
              fontStyle: "italic",
              color: "var(--text-primary)",
              lineHeight: 1.2,
              maxWidth: "600px",
            }}
          >
            A layered experience —<br />
            not just a feed.
          </h2>

          {/* 3 feature cards — staggered layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "var(--cream-border)" }}>
            {/* Card 1 */}
            <div
              className="flex flex-col p-10 md:p-12"
              style={{ background: "var(--bg)" }}
            >
              <span
                className="text-xs tracking-[0.25em] uppercase mb-8"
                style={{ color: "var(--accent-gold)", fontFamily: "var(--font-inter)" }}
              >
                The Collection
              </span>
              <h3
                className="mb-4"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "1.5rem",
                  fontWeight: 500,
                  color: "var(--text-primary)",
                  lineHeight: 1.25,
                }}
              >
                Soft, curated imagery
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-inter)",
                  fontWeight: 300,
                  lineHeight: 1.9,
                }}
              >
                Exclusive photos<br />
                Tasteful, intentional sets<br />
                Moments, not mass content
              </p>
            </div>

            {/* Card 2 — slightly elevated */}
            <div
              className="flex flex-col p-10 md:p-12 md:-mt-6 md:pb-16"
              style={{ background: "var(--bg-card)" }}
            >
              <span
                className="text-xs tracking-[0.25em] uppercase mb-8"
                style={{ color: "var(--accent-rose)", fontFamily: "var(--font-inter)" }}
              >
                The Moments
              </span>
              <h3
                className="mb-4"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "1.5rem",
                  fontWeight: 500,
                  color: "var(--text-primary)",
                  lineHeight: 1.25,
                }}
              >
                More than posts
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-inter)",
                  fontWeight: 300,
                  lineHeight: 1.9,
                }}
              >
                Behind-the-scenes thoughts<br />
                Voice, mood, presence<br />
                Unfiltered glimpses
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="flex flex-col p-10 md:p-12"
              style={{ background: "var(--bg)" }}
            >
              <span
                className="text-xs tracking-[0.25em] uppercase mb-8"
                style={{ color: "var(--accent-gold)", fontFamily: "var(--font-inter)" }}
              >
                The Connection
              </span>
              <h3
                className="mb-4"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "1.5rem",
                  fontWeight: 500,
                  color: "var(--text-primary)",
                  lineHeight: 1.25,
                }}
              >
                When it feels right
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-inter)",
                  fontWeight: 300,
                  lineHeight: 1.9,
                }}
              >
                One-on-one conversation<br />
                Real attention<br />
                No scripts. No pressure
              </p>
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-20 flex justify-center">
            <a
              href={ONLYFANS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-90"
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 500,
                letterSpacing: "0.15em",
                background: "var(--navy)",
                color: "#FAF8F5",
              }}
            >
              Enter Bella's World
            </a>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ────────────────────────────────────────────── */}
      <footer
        className="px-8 py-10 md:px-16 flex flex-col md:flex-row items-center justify-between gap-4"
        style={{
          borderTop: "1px solid var(--cream-border)",
          background: "var(--bg)",
        }}
      >
        <span
          className="text-lg tracking-widest uppercase"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontWeight: 300,
            color: "var(--text-muted)",
            letterSpacing: "0.2em",
          }}
        >
          Bella
        </span>
        <p
          className="text-xs text-center"
          style={{
            color: "var(--text-muted)",
            fontFamily: "var(--font-inter)",
            fontWeight: 300,
          }}
        >
          18+ only. All content is for adults.
        </p>
        <span
          className="text-xs tracking-wider"
          style={{
            color: "var(--text-muted)",
            fontFamily: "var(--font-inter)",
            letterSpacing: "0.1em",
          }}
        >
          18+ content platform
        </span>
      </footer>
    </main>
  );
}
