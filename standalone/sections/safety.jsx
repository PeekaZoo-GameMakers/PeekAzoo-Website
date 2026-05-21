// safety.jsx — section 6: trust pillars.

function Safety() {
  const pillars = [
    { icon: SafetyIcon('shield'),     color: PZ.blue,  title: 'Child-safe design',          body: 'Every interaction designed for ages 2–8, reviewed for safety, gentleness, and age-appropriate complexity.' },
    { icon: SafetyIcon('no-ads'),     color: PZ.coral, title: 'Ad-free environment',        body: 'No advertising. No third-party tracking. No interruptions that pull children out of learning.' },
    { icon: SafetyIcon('lock'),       color: PZ.green, title: 'Privacy-first architecture',body: 'Data minimisation by default, with infrastructure built around child-data principles from day one.' },
    { icon: SafetyIcon('brain'),      color: PZ.lilac, title: 'Moderated AI',               body: 'AI features are guardrailed and reviewed — children never face open-ended generative content.' },
    { icon: SafetyIcon('controls'),   color: PZ.gold,  title: 'Parent controls',            body: 'Time, sessions, and content scope are all in the grown-up\u2019s hands.' },
    { icon: SafetyIcon('cloud'),      color: PZ.blue,  title: 'Secure infrastructure',      body: 'Built for compliance with institutional and public-sector security expectations.' },
  ];

  return (
    <section id="safety" className="pz-section warm-white">
      <div className="pz-container">
        <div className="pz-section-intro--center">
          <Reveal><span className="pz-eyebrow"><span className="dot" style={{ background: PZ.blue }}/>Safety & trust</span></Reveal>
          <Reveal delay={1}>
            <h2 className="pz-section-title wide">
              Built for children. <span className="accent-blue">Trusted by institutions.</span>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="pz-body-lg" style={{ marginTop: 24, fontSize: 19 }}>
              Trust is not a feature — it is the floor. Every part of Peek-A-Zoo is built so families, schools, and governments can deploy with confidence.
            </p>
          </Reveal>
        </div>

        <div style={{
          marginTop: 64, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20,
        }} className="pz-safety-grid">
          {pillars.map((p, i) => (
            <Reveal key={i} delay={(i % 4) + 1}>
              <div style={{
                position: 'relative', background: PZ.bg, borderRadius: 24,
                padding: '32px 28px', border: `1.5px solid ${PZ.border}`,
                height: '100%', display: 'flex', flexDirection: 'column',
                transition: 'transform 320ms cubic-bezier(0.34,1.56,0.64,1), box-shadow 320ms',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 14px 28px rgba(61,44,30,0.10)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                <div style={{
                  width: 64, height: 64, borderRadius: 18, ...feltSurface(p.color),
                  display: 'grid', placeItems: 'center', position: 'relative', marginBottom: 20,
                  color: '#fff',
                }}>
                  <span style={{ position: 'relative', zIndex: 2 }}>{p.icon}</span>
                  <span style={{ position: 'absolute', inset: 5, borderRadius: 14, border: '2px dashed rgba(255,255,255,0.62)' }} />
                </div>
                <h3 style={{ fontFamily: '"Baloo 2", sans-serif', fontWeight: 800, fontSize: 19, margin: 0, color: PZ.text }}>{p.title}</h3>
                <p style={{ marginTop: 10, fontFamily: 'Nunito, sans-serif', fontWeight: 600, fontSize: 15, lineHeight: 1.55, color: PZ.text, opacity: 0.78 }}>
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Companion lockup */}
        <Reveal>
          <div style={{
            marginTop: 64, padding: '36px 40px', borderRadius: 28,
            background: PZ.blueTint, border: `1.5px dashed ${PZ.blue}`,
            display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: 24, alignItems: 'center',
          }} className="pz-safety-lockup">
            <div style={{ display: 'flex', gap: -8 }}>
              <CharacterPortrait src={__a("assets/character-ullu.png")} color={PZ.blueTint} size={96} style={{ boxShadow: '0 6px 14px rgba(46,144,200,0.20)' }} />
              <CharacterPortrait src={__a("assets/character-panda.png")} color={PZ.lilacTint} size={96} style={{ marginLeft: -28, boxShadow: '0 6px 14px rgba(138,92,200,0.20)' }} />
            </div>
            <div>
              <div style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: PZ.blueDark }}>
                Luna & Golu say
              </div>
              <div style={{ fontFamily: '"Baloo 2", sans-serif', fontWeight: 800, fontSize: 22, color: PZ.text, marginTop: 6 }}>
                Soft to use. Strong on safety.
              </div>
            </div>
            <FeltButton variant="blue" size="sm" href="#demo" icon={<ArrowIcon/>}>Talk to security team</FeltButton>
          </div>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 1080px) { .pz-safety-grid { grid-template-columns: repeat(2, 1fr) !important; } .pz-safety-lockup { grid-template-columns: 1fr !important; text-align: center; justify-items: center; } }
        @media (max-width: 600px) { .pz-safety-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

function SafetyIcon(kind) {
  const stroke = '#fff';
  const props = { fill: 'none', stroke, strokeWidth: 2.4, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (kind) {
    case 'shield':
      return <svg width="30" height="30" viewBox="0 0 24 24"><path d="M12 3l8 3v5c0 5-3.4 8.5-8 10-4.6-1.5-8-5-8-10V6l8-3z" {...props}/><path d="M9 12l2 2 4-4" {...props}/></svg>;
    case 'no-ads':
      return <svg width="30" height="30" viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="12" rx="2" {...props}/><path d="M5 5l14 14" {...props}/></svg>;
    case 'lock':
      return <svg width="30" height="30" viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="9" rx="2" {...props}/><path d="M8 11V8a4 4 0 018 0v3" {...props}/></svg>;
    case 'brain':
      return <svg width="30" height="30" viewBox="0 0 24 24"><path d="M9 5a3 3 0 00-3 3 3 3 0 00-2 5 3 3 0 002 5 3 3 0 003 3h6a3 3 0 003-3 3 3 0 002-5 3 3 0 00-2-5 3 3 0 00-3-3H9z" {...props}/><path d="M12 5v14" {...props}/></svg>;
    case 'controls':
      return <svg width="30" height="30" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" {...props}/><path d="M12 4v3M12 17v3M4 12h3M17 12h3M6.3 6.3l2.1 2.1M15.6 15.6l2.1 2.1M6.3 17.7l2.1-2.1M15.6 8.4l2.1-2.1" {...props}/></svg>;
    case 'cloud':
      return <svg width="30" height="30" viewBox="0 0 24 24"><path d="M7 18h10a4 4 0 000-8 6 6 0 00-11.7 1.5A3 3 0 007 18z" {...props}/><path d="M12 13v3M10.5 14.5h3" {...props}/></svg>;
    default:
      return null;
  }
}

Object.assign(window, { Safety });
