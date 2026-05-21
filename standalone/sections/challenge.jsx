// challenge.jsx — section 2: urgency through evidence

function Challenge() {
  const stats = [
    { value: 90, suffix: '%', label: 'of brain development happens before age 5', color: PZ.gold },
    { value: 175, suffix: 'M+', label: 'children miss pre-primary education globally', color: PZ.blue },
    { value: 250, suffix: 'M+', label: 'children risk not reaching developmental potential', color: PZ.coral },
    { value: 70, suffix: '%', label: 'learning poverty rate worldwide', color: PZ.lilac },
    { value: 44, suffix: 'M', label: 'additional teachers needed globally', color: PZ.green },
  ];

  const problems = [
    { tag: '01', title: 'Passive screen time', body: 'Most apps entertain. Few are designed to develop foundational skills during the years they matter most.' },
    { tag: '02', title: 'Fragmented learning', body: 'Children bounce between videos, worksheets, and apps with no continuity, no signal, no progress.' },
    { tag: '03', title: 'Language exclusion', body: 'Mother-tongue learning is rare on tablets. Millions of children are left out of their first lessons.' },
    { tag: '04', title: 'Teacher constraints', body: 'Anganwadi workers and early educators are stretched thin, lacking modern tools to extend their reach.' },
    { tag: '05', title: 'Limited visibility', body: 'Parents, schools, and systems have no real-time picture of how foundational skills are growing.' },
  ];

  return (
    <section id="challenge" className="pz-section warm-white">
      <div className="pz-container">
        <div className="pz-challenge-intro">
          <div className="pz-challenge-copy">
            <Reveal><span className="pz-eyebrow"><span className="dot" style={{ background: PZ.coral }}/>The challenge</span></Reveal>
            <Reveal delay={1}>
              <h2 className="pz-section-title wide" style={{ maxWidth: '20ch' }}>
                The most critical learning years are also the most <span className="accent-gold">under-supported</span>.
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="pz-body-lg" style={{ marginTop: 24, fontSize: 19, maxWidth: 'none' }}>
                The years between 2 and 8 shape communication, cognition, emotional growth, and lifelong learning.
                Yet millions of children lack the developmental support they need. This is more than an education gap —
                <strong style={{ color: PZ.pinkDark }}> it is a developmental opportunity crisis.</strong>
              </p>
            </Reveal>
          </div>

          <Reveal delay={2}>
            <ChallengeIllustration />
          </Reveal>
        </div>

        {/* Stats strip */}
        <div style={{
          marginTop: 72, display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)', gap: 18,
        }} className="pz-stats-grid">
          {stats.map((s, i) => (
            <Reveal key={i} delay={(i % 4) + 1}>
              <div className="pz-stat-card" style={{ height: '100%' }}>
                <div style={{ width: 38, height: 6, borderRadius: 999, background: s.color, marginBottom: 22 }} />
                <div className="pz-stat-value">
                  <CountUp to={s.value} suffix={s.suffix} />
                </div>
                <div className="pz-stat-label">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Problem cards */}
        <div style={{
          marginTop: 84, display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 18,
        }} className="pz-problems-grid">
          {problems.map((p, i) => (
            <Reveal key={i} delay={(i % 4) + 1}>
              <div style={{
                background: PZ.bg, borderRadius: 22, padding: '28px 24px',
                border: `1.5px solid ${PZ.border}`,
                height: '100%', display: 'flex', flexDirection: 'column',
              }}>
                <div style={{
                  fontFamily: '"Baloo 2", sans-serif', fontWeight: 800, fontSize: 13,
                  color: PZ.textSoft, letterSpacing: '0.14em',
                }}>{p.tag}</div>
                <h3 style={{
                  fontFamily: '"Baloo 2", sans-serif', fontWeight: 800, fontSize: 22,
                  color: PZ.text, margin: '10px 0 12px', lineHeight: 1.2,
                }}>{p.title}</h3>
                <p style={{
                  fontFamily: 'Nunito, sans-serif', fontWeight: 600, fontSize: 15,
                  color: PZ.text, opacity: 0.78, margin: 0, lineHeight: 1.55,
                }}>{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Transition */}
        <Reveal>
          <div style={{
            marginTop: 96, textAlign: 'center', padding: '64px 32px',
            background: PZ.surface, borderRadius: 32,
            border: `1.5px dashed ${PZ.gold}`, position: 'relative', overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', top: -30, left: -30, width: 140, height: 140, borderRadius: '50%', ...feltSurface(PZ.goldTint), opacity: 0.6 }} />
            <div style={{ position: 'absolute', bottom: -40, right: -30, width: 160, height: 160, borderRadius: '50%', ...feltSurface(PZ.blueTint), opacity: 0.5 }} />
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase', color: PZ.gold }}>
                What if
              </div>
              <h3 style={{
                fontFamily: '"Baloo 2", sans-serif', fontWeight: 800,
                fontSize: 'clamp(28px, 3.6vw, 44px)', lineHeight: 1.15, margin: '14px 0 8px',
                color: PZ.text,
              }}>
                ...learning <span style={{ color: PZ.goldDark }}>actually worked better</span>?
              </h3>
              <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, color: PZ.textSoft, fontWeight: 700, margin: 0 }}>
                That's the question Peek-A-Zoo was built to answer.
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        .pz-challenge-intro {
          display: grid; grid-template-columns: 1.1fr 1fr; gap: 56px;
          align-items: center;
        }
        .pz-challenge-copy { min-width: 0; }
        @media (max-width: 1080px) {
          .pz-challenge-intro { grid-template-columns: 1fr; gap: 40px; }
          .pz-stats-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .pz-problems-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 720px) {
          .pz-stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .pz-problems-grid { grid-template-columns: 1fr !important; }
        }

        @keyframes pz-illus-float {
          0%, 100% { transform: translateY(0) rotate(-1.2deg); }
          50%      { transform: translateY(-12px) rotate(1deg); }
        }
        @keyframes pz-illus-sparkle {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50%      { opacity: 1; transform: scale(1.15); }
        }
      `}</style>
    </section>
  );
}

Object.assign(window, { Challenge });

// ─────────── Felt-framed illustration for the challenge section ───────────
function ChallengeIllustration() {
  return (
    <div style={{
      position: 'relative', width: '100%', maxWidth: 560, marginLeft: 'auto',
      aspectRatio: '3 / 2',
      animation: 'pz-illus-float 7s ease-in-out infinite',
    }}>
      {/* Soft glow behind */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: '-6% -4%', borderRadius: 36,
        background: 'radial-gradient(60% 50% at 70% 50%, rgba(245,166,35,0.22) 0%, rgba(245,166,35,0) 70%)',
        zIndex: 0, filter: 'blur(8px)',
      }} />

      {/* Felt frame around the image */}
      <div style={{
        position: 'relative', zIndex: 1, width: '100%', height: '100%',
        borderRadius: 28, overflow: 'hidden',
        ...feltSurface(PZ.gold),
        boxShadow: '0 22px 50px rgba(61,44,30,0.22), 0 6px 14px rgba(61,44,30,0.10)',
      }}>
        <img
          src={__a("assets/challenge-illustration.png")}
          alt="A curious child looks toward Mimi, Munnu, Lobo, Luna and Golu emerging from a glowing portal — the threshold between an under-supported childhood and rich foundational learning."
          style={{
            position: 'absolute', inset: 8, width: 'calc(100% - 16px)', height: 'calc(100% - 16px)',
            objectFit: 'cover', borderRadius: 22, display: 'block', zIndex: 1,
          }}
        />
        <span style={{
          position: 'absolute', inset: 12, borderRadius: 20,
          border: '2px dashed rgba(255,255,255,0.62)', pointerEvents: 'none', zIndex: 2,
        }} />
      </div>

      {/* Floating felt accent pills around the frame */}
      <div style={{
        position: 'absolute', top: -22, left: -22, zIndex: 2,
        animation: 'pz-float-b 5.5s ease-in-out infinite',
      }}>
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '8px 14px', borderRadius: 999,
          ...feltSurface(PZ.coral), color: '#fff',
          boxShadow: '0 8px 16px rgba(192,64,48,0.30)',
          fontFamily: '"Baloo 2", sans-serif', fontWeight: 800, fontSize: 13,
          textShadow: '0 1px 0 rgba(0,0,0,0.20)',
          position: 'relative',
        }}>
          <span style={{ width: 8, height: 8, borderRadius: 999, background: '#fff' }} />
          Ages 2–8
          <span style={{ position: 'absolute', inset: 5, borderRadius: 999, border: '1.5px dashed rgba(255,255,255,0.65)', pointerEvents: 'none' }} />
        </span>
      </div>

      <div style={{
        position: 'absolute', bottom: -18, right: -14, zIndex: 2,
        animation: 'pz-float-c 6s ease-in-out infinite',
      }}>
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '8px 14px', borderRadius: 999,
          ...feltSurface(PZ.green), color: '#fff',
          boxShadow: '0 8px 16px rgba(74,143,53,0.30)',
          fontFamily: '"Baloo 2", sans-serif', fontWeight: 800, fontSize: 13,
          textShadow: '0 1px 0 rgba(0,0,0,0.20)',
          position: 'relative',
        }}>
          <span style={{ width: 8, height: 8, borderRadius: 999, background: '#fff' }} />
          Foundational years
          <span style={{ position: 'absolute', inset: 5, borderRadius: 999, border: '1.5px dashed rgba(255,255,255,0.65)', pointerEvents: 'none' }} />
        </span>
      </div>

      {/* Sparkle stars on the frame */}
      <svg width="22" height="22" viewBox="0 0 24 24" style={{
        position: 'absolute', top: '8%', right: '6%', zIndex: 3,
        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.18))',
        animation: 'pz-illus-sparkle 2.4s ease-in-out infinite',
      }}>
        <path d="M12 2l1.8 7.2L21 11l-7.2 1.8L12 20l-1.8-7.2L3 11l7.2-1.8L12 2z" fill="#fff"/>
      </svg>
      <svg width="16" height="16" viewBox="0 0 24 24" style={{
        position: 'absolute', bottom: '14%', left: '5%', zIndex: 3,
        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.18))',
        animation: 'pz-illus-sparkle 2.8s ease-in-out infinite 0.4s',
      }}>
        <path d="M12 2l1.8 7.2L21 11l-7.2 1.8L12 20l-1.8-7.2L3 11l7.2-1.8L12 2z" fill="#F5A623"/>
      </svg>
    </div>
  );
}

Object.assign(window, { ChallengeIllustration });
