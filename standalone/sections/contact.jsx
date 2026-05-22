// contact.jsx — section 8: segmented CTAs + footer.

function Contact() {
  const audiences = [
    { tag: 'Governments', cta: 'Request consultation', href: '#demo',    color: PZ.blue,  char: __a('assets/character-ullu.png'), body: 'Bring foundational learning to your districts and Anganwadis.' },
    { tag: 'Schools',     cta: 'Book a demo',           href: '#demo',    color: PZ.green, char: __a('assets/character-lobo.png'), body: 'Boost classroom engagement and extend learning beyond the bell.' },
    { tag: 'Parents',     cta: 'Get access',            href: '#get-access', color: PZ.coral, char: __a('assets/character-golu.png'), body: 'Turn screen time into guided learning your child will love.' },
    { tag: 'Partners',    cta: 'Partner with us',       href: '#partner', color: PZ.lilac, char: __a('assets/character-panda.png'), body: 'Scale early learning across communities, together.' },
  ];

  return (
    <section id="contact" className="pz-section">
      <div className="pz-container">
        <div className="pz-section-intro--center">
          <Reveal><span className="pz-eyebrow"><span className="dot" style={{ background: PZ.gold }}/>Let&apos;s build it together</span></Reveal>
          <Reveal delay={1}>
            <h2 className="pz-section-title wide">
              Let&apos;s transform foundational learning <span className="accent-gold">together</span>.
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="pz-body-lg" style={{ marginTop: 24, fontSize: 19 }}>
              Tell us who you are and we&apos;ll get you to the right team. Most conversations start with a short call.
            </p>
          </Reveal>
        </div>

        <div style={{
          marginTop: 56, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18,
        }} className="pz-contact-grid">
          {audiences.map((a, i) => (
            <Reveal key={i} delay={(i % 4) + 1}>
              <div style={{
                position: 'relative', borderRadius: 28, overflow: 'hidden',
                ...feltSurface(a.color),
                boxShadow: '0 14px 32px rgba(61,44,30,0.18)',
                color: '#fff', padding: '32px 28px 36px', height: '100%',
                display: 'flex', flexDirection: 'column',
                transition: 'transform 320ms cubic-bezier(0.34,1.56,0.64,1)',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-6px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = ''; }}>
                <span style={{ position: 'absolute', inset: 10, borderRadius: 20, border: '2px dashed rgba(255,255,255,0.50)', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', right: -16, top: -12, width: 130, height: 130, opacity: 0.95, zIndex: 1 }}>
                  <img src={a.char} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0 8px 14px rgba(0,0,0,0.18))' }} />
                </div>
                <div style={{ position: 'relative', zIndex: 2, fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.9 }}>
                  For {a.tag}
                </div>
                <div style={{ position: 'relative', zIndex: 2, fontFamily: '"Baloo 2", sans-serif', fontWeight: 800, fontSize: 26, lineHeight: 1.15, marginTop: 90, textShadow: '0 1.5px 0 rgba(0,0,0,0.18)' }}>
                  {a.cta}
                </div>
                <div style={{ position: 'relative', zIndex: 2, marginTop: 10, fontFamily: 'Nunito, sans-serif', fontWeight: 600, fontSize: 14.5, lineHeight: 1.5, opacity: 0.95, maxWidth: 240 }}>
                  {a.body}
                </div>
                <div style={{ position: 'relative', zIndex: 2, marginTop: 'auto', paddingTop: 24 }}>
                  <FeltButton variant="gold" size="sm" href={a.href} icon={<ArrowIcon/>}>Start the conversation</FeltButton>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Hero closing lineup */}
        <Reveal>
          <div style={{
            marginTop: 88, padding: '56px 32px 32px',
            background: PZ.surface, borderRadius: 36,
            border: `1.5px solid ${PZ.border}`,
            boxShadow: '0 12px 32px rgba(61,44,30,0.08)',
            position: 'relative', overflow: 'hidden',
            textAlign: 'center',
          }}>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: PZ.textSoft }}>
              The whole crew is ready
            </div>
            <h3 style={{
              fontFamily: '"Baloo 2", sans-serif', fontWeight: 800,
              fontSize: 'clamp(28px, 3.4vw, 40px)', lineHeight: 1.15,
              margin: '12px auto 0', maxWidth: '20ch', textWrap: 'balance',
            }}>
              See you in the <span style={{ color: PZ.goldDark }}>Peek-A-Zoo world</span>.
            </h3>

            <div style={{
              marginTop: 32, position: 'relative', height: 220,
              display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: -20,
            }} className="pz-cast-lineup">
              {[
                { src: __a('assets/character-mimi.png'),  size: 200, c: PZ.coral,  delay: 0    },
                { src: __a('assets/character-lobo.png'),  size: 180, c: PZ.gold,   delay: 0.4  },
                { src: __a('assets/character-ullu.png'),  size: 200, c: PZ.blue,   delay: 0.8  },
                { src: __a('assets/character-panda.png'), size: 180, c: PZ.lilac,  delay: 1.2  },
                { src: __a('assets/character-golu.png'),  size: 190, c: PZ.green,  delay: 1.6  },
              ].map((p, i) => (
                <div key={i} style={{
                  position: 'relative', width: p.size, height: p.size, marginLeft: i === 0 ? 0 : -24,
                  animation: `pz-float-${['a','b','c'][i%3]} ${4 + (i%3)}s ease-in-out infinite`,
                  animationDelay: `${p.delay}s`,
                }}>
                  <img src={p.src} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0 14px 22px rgba(61,44,30,0.22))' }} />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 1080px) { .pz-contact-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 600px) {
          .pz-contact-grid { grid-template-columns: 1fr !important; }
          .pz-cast-lineup { transform: scale(0.55) !important; transform-origin: bottom center; height: 160px !important; }
        }
      `}</style>
    </section>
  );
}

function Footer() {
  return (
    <footer className="pz-footer">
      {/* Background felt overlay */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, opacity: 0.18, pointerEvents: 'none',
        backgroundImage: 'url(${__a("assets/felt-texture.png")})',
        backgroundSize: '320px auto', mixBlendMode: 'screen',
      }} />
      <div className="pz-container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr', gap: 48,
        }} className="pz-footer-grid">
          <div>
            <img src={__a("assets/logo.png")} alt="Peek-A-Zoo" style={{ height: 42, filter: 'brightness(1.05)' }} />
            <p style={{ marginTop: 20, fontFamily: 'Nunito, sans-serif', fontWeight: 600, fontSize: 15.5, lineHeight: 1.65, color: '#E0CDB0', maxWidth: 380 }}>
              AI-powered foundational learning for governments, schools, families, and partners.
              Built so the years that matter most actually count.
            </p>
            <div style={{ marginTop: 26 }}>
              <FeltButton variant="gold" size="md" href="#demo" icon={<ArrowIcon/>}>Request demo</FeltButton>
            </div>
          </div>

          <div>
            <h4>Explore</h4>
            <a href="#challenge">Challenge</a>
            <a href="#solutions">Solutions</a>
            <a href="#platform">Platform</a>
            <a href="#impact">Impact</a>
          </div>
          <div>
            <h4>Audiences</h4>
            <a href="#demo">Governments</a>
            <a href="#demo">Schools</a>
            <a href="#demo">Parents</a>
            <a href="#partner">Partners</a>
          </div>
          <div>
            <h4>The Zoo</h4>
            <a href="#world">The world</a>
            <a href="#safety">Safety & trust</a>
            <a href="#">Press</a>
            <a href="#">Careers</a>
          </div>
        </div>

        <div style={{
          marginTop: 64, paddingTop: 24, borderTop: '1.5px dashed rgba(232,213,192,0.28)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16,
        }}>
          <div style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: 13, color: '#B89A75' }}>
            © 2026 Peek-A-Zoo · Built with care for foundational learners
          </div>
          <div style={{ display: 'flex', gap: 18, fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: 13 }}>
            <a href="/privacy.html">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Security</a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .pz-footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; } }
        @media (max-width: 600px) { .pz-footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}

Object.assign(window, { Contact, Footer });
