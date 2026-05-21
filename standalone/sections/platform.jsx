// platform.jsx — section 4: product showcase

function Platform() {
  const modules = [
    { name: 'Interactive Games',     icon: __a('assets/icon-number-one.webp'),  color: PZ.green,  char: 'Lobo' },
    { name: 'Videos, Rhymes & Stories', icon: __a('assets/icon-story.webp'),    color: PZ.coral,  char: 'Mimi' },
    { name: 'Adaptive Worksheets',   icon: __a('assets/icon-tracing-two.webp'), color: PZ.gold,   char: 'Munnu' },
    { name: 'AI Learning Intelligence', icon: __a('assets/icon-rhyme.webp'),    color: PZ.lilac,  char: 'Luna' },
    { name: 'Immersive AR Learning', icon: __a('assets/icon-number-three.webp'), color: PZ.blue,  char: 'Mimi' },
    { name: 'Multilingual Learning', icon: __a('assets/icon-tracing-one.webp'), color: PZ.pink,   char: 'Luna' },
    { name: 'Dashboards & Analytics', icon: __a('assets/icon-tracing-three.webp'), color: PZ.green, char: 'Luna' },
    { name: 'Flexible Infrastructure', icon: __a('assets/icon-locked.webp'),    color: PZ.gold,   char: 'All' },
  ];

  return (
    <section id="platform" className="pz-section cream-deep">
      <div className="pz-container">
        <div className="pz-platform-intro">
          <div className="pz-platform-copy">
            <Reveal><span className="pz-eyebrow"><span className="dot" style={{ background: PZ.lilac }}/>The platform</span></Reveal>
            <Reveal delay={1}>
              <h2 className="pz-section-title wide" style={{ maxWidth: '20ch' }}>
                One intelligent platform for <span className="accent-blue">foundational learning</span>.
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="pz-body-lg" style={{ marginTop: 24, fontSize: 18, maxWidth: 'none' }}>
                Peek-A-Zoo connects learning, engagement, personalization, and measurement in one unified ecosystem —
                built for the home, the classroom, and the cohort.
              </p>
            </Reveal>
            <Reveal delay={3}>
              <div style={{ marginTop: 28, display: 'flex', gap: 18, flexWrap: 'wrap', alignItems: 'center' }}>
                <FeltPill color={PZ.lilac}>Watch the 60s tour</FeltPill>
                <span style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: 14, color: PZ.textSoft }}>
                  See the platform in action
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={2}>
            <PlatformVideo />
          </Reveal>
        </div>

        {/* Orbiting platform diagram — hidden when video takes the spotlight,
            but the diagram metaphor reappears via the module grid below. */}

        {/* Module grid */}
        <div style={{
          marginTop: 90, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18,
        }} className="pz-modules-grid">
          {modules.map((m, i) => (
            <Reveal key={i} delay={(i % 4) + 1}>
              <ModuleCard {...m} />
            </Reveal>
          ))}
        </div>

        {/* Comparison */}
        <div style={{ marginTop: 110 }}>
          <div className="pz-section-intro--center">
            <Reveal>
              <span className="pz-eyebrow"><span className="dot" style={{ background: PZ.gold }}/>The difference</span>
            </Reveal>
            <Reveal delay={1}>
              <h3 className="pz-section-title wide" style={{ fontSize: 'clamp(28px, 3.4vw, 42px)' }}>
                Traditional learning vs <span className="accent-green">Peek-A-Zoo</span>.
              </h3>
            </Reveal>
          </div>
          <Reveal delay={2}>
            <ComparisonTable />
          </Reveal>
        </div>

        {/* Deployment models removed at user request */}
      </div>

      <style>{`
        .pz-platform-intro {
          display: grid; grid-template-columns: 0.85fr 1.25fr; gap: 56px;
          align-items: center;
        }
        .pz-platform-copy { min-width: 0; }
        @keyframes pz-video-float {
          0%, 100% { transform: translateY(0) rotate(-0.6deg); }
          50%      { transform: translateY(-10px) rotate(0.4deg); }
        }
        @media (max-width: 1080px) {
          .pz-platform-intro { grid-template-columns: 1fr; gap: 40px; }
          .pz-modules-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 720px) { .pz-platform-orbit { display: none !important; } }
        @media (max-width: 600px) {
          .pz-modules-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 720px) {
          .pz-compare-row { grid-template-columns: 1fr !important; gap: 6px !important; padding: 18px 20px !important; }
          .pz-compare-head { display: none !important; }
          .pz-compare-row .pz-compare-label { font-size: 14px !important; margin-bottom: 4px; }
          .pz-compare-row .pz-compare-cell::before {
            content: attr(data-prefix); display: block;
            font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 10px;
            letter-spacing: 0.14em; text-transform: uppercase; opacity: 0.6; margin-bottom: 4px;
          }
        }
      `}</style>
    </section>
  );
}

function PlatformOrbit({ modules }) {
  return (
    <div className="pz-platform-orbit" style={{
      marginTop: 64, position: 'relative', aspectRatio: '1.4 / 1', maxWidth: 720,
      margin: '64px auto 0',
    }}>
      {/* Orbit rings */}
      <div style={{
        position: 'absolute', inset: '12% 12%', borderRadius: '50%',
        border: `2px dashed ${PZ.border}`,
      }} />
      <div style={{
        position: 'absolute', inset: '24% 24%', borderRadius: '50%',
        border: `2px dashed rgba(160, 120, 80, 0.28)`,
      }} />

      {/* Center hub */}
      <div style={{
        position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)',
        width: 180, height: 180, borderRadius: '50%',
        ...feltSurface(PZ.gold),
        boxShadow: '0 20px 50px rgba(196,123,10,0.32)',
        display: 'grid', placeItems: 'center', zIndex: 3,
      }}>
        <span style={{ position: 'absolute', inset: 12, borderRadius: '50%', border: '2.5px dashed rgba(255,255,255,0.55)' }} />
        <img src={__a("assets/character-mimi.png")} alt="" style={{ width: '78%', height: '78%', objectFit: 'contain', position: 'relative', zIndex: 1, filter: 'drop-shadow(0 8px 12px rgba(0,0,0,0.18))' }} />
      </div>

      {/* Module tiles in orbit */}
      {modules.map((m, i) => {
        const angle = (i / modules.length) * Math.PI * 2 - Math.PI / 2;
        const rx = 40, ry = 38;
        const x = 50 + Math.cos(angle) * rx;
        const y = 50 + Math.sin(angle) * ry;
        return (
          <div key={i} style={{
            position: 'absolute', left: `${x}%`, top: `${y}%`,
            transform: 'translate(-50%, -50%)', zIndex: 2,
            animation: `pz-float-${['a','b','c'][i%3]} ${5 + (i%3)*0.8}s ease-in-out infinite`,
          }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '8px 16px 8px 8px', borderRadius: 999,
              background: PZ.surface, boxShadow: '0 8px 18px rgba(61,44,30,0.10)',
              border: `1.5px solid ${PZ.border}`,
            }}>
              <div style={{
                width: 38, height: 38, borderRadius: 10,
                ...feltSurface(m.color), display: 'grid', placeItems: 'center', overflow: 'hidden',
              }}>
                <img src={m.icon} alt="" style={{ width: '75%', height: '75%' }} />
              </div>
              <span style={{ fontFamily: '"Baloo 2", sans-serif', fontWeight: 700, fontSize: 12.5, color: PZ.text, whiteSpace: 'nowrap' }}>{m.name}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ModuleCard({ name, icon, color, char }) {
  return (
    <div style={{
      position: 'relative', background: PZ.surface, borderRadius: 22,
      padding: '22px 22px 24px', border: `1.5px solid ${PZ.border}`,
      transition: 'transform 320ms cubic-bezier(0.34,1.56,0.64,1), box-shadow 320ms',
      cursor: 'default', height: '100%',
    }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 32px rgba(61,44,30,0.12)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
      <div style={{
        width: 64, height: 64, borderRadius: 18, ...feltSurface(color),
        display: 'grid', placeItems: 'center', position: 'relative', overflow: 'hidden',
        marginBottom: 16,
      }}>
        <img src={icon} alt="" style={{ width: '72%', height: '72%', position: 'relative', zIndex: 1 }} />
        <span style={{ position: 'absolute', inset: 5, borderRadius: 14, border: '2px dashed rgba(255,255,255,0.62)' }} />
      </div>
      <div style={{ fontFamily: '"Baloo 2", sans-serif', fontWeight: 800, fontSize: 17, color: PZ.text, lineHeight: 1.2 }}>{name}</div>
      <div style={{ marginTop: 6, fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: 12, color: PZ.textSoft, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
        Guided by {char}
      </div>
    </div>
  );
}

function ComparisonTable() {
  const rows = [
    ['Engagement model',  'Passive consumption',          'Active, multimodal learning'],
    ['Content shape',     'Videos only',                  'Connected games, stories, worksheets'],
    ['Personalization',   'One size fits all',            'Adaptive AI per child'],
    ['Language',          'Single language',              'Multilingual inclusion (7 scripts)'],
    ['Visibility',        'Limited or none',              'Real-time cohort & child insights'],
    ['Reinforcement',     'Screen only',                  'Digital + printable reinforcement'],
    ['Access',            'Online only',                  'Online + offline access'],
  ];
  return (
    <div style={{
      marginTop: 32, borderRadius: 24, overflow: 'hidden',
      border: `1.5px solid ${PZ.border}`, background: PZ.surface,
      boxShadow: '0 10px 28px rgba(61,44,30,0.08)',
    }}>
      <div className="pz-compare-head" style={{
        display: 'grid', gridTemplateColumns: '1.1fr 1fr 1.2fr',
        padding: '18px 28px', background: PZ.bg,
        borderBottom: `1.5px solid ${PZ.border}`,
        fontFamily: '"Baloo 2", sans-serif', fontWeight: 800, fontSize: 13.5, letterSpacing: '0.08em', textTransform: 'uppercase',
        color: PZ.textSoft,
      }}>
        <div></div>
        <div>Traditional</div>
        <div style={{ color: PZ.greenDark }}>Peek-A-Zoo</div>
      </div>
      {rows.map(([label, a, b], i) => (
        <div key={i} className="pz-compare-row" style={{
          display: 'grid', gridTemplateColumns: '1.1fr 1fr 1.2fr',
          padding: '20px 28px', alignItems: 'center',
          borderBottom: i < rows.length - 1 ? `1px solid ${PZ.border}` : 'none',
        }}>
          <div className="pz-compare-label" style={{ fontFamily: '"Baloo 2", sans-serif', fontWeight: 700, fontSize: 15.5, color: PZ.text }}>{label}</div>
          <div className="pz-compare-cell" data-prefix="Traditional" style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 600, fontSize: 15, color: PZ.text, opacity: 0.62 }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '4px 12px', borderRadius: 999,
              background: '#F3EBE0', color: PZ.textSoft,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: 999, background: PZ.gray }} />
              {a}
            </span>
          </div>
          <div className="pz-compare-cell" data-prefix="Peek-A-Zoo" style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: 15, color: PZ.text }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '4px 12px', borderRadius: 999,
              background: PZ.greenTint, color: PZ.greenDark,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: 999, background: PZ.green }} />
              {b}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

Object.assign(window, { Platform, PlatformOrbit, ModuleCard, ComparisonTable, PlatformVideo });

// ─────────── Felt-framed YouTube video for the platform section ───────────
// Click-to-play with a custom felt poster — avoids loading the YouTube iframe
// until the user actually engages.
function PlatformVideo() {
  const VIDEO_ID = 'JRKuknzibTc';
  const START = 2;
  const [playing, setPlaying] = React.useState(false);
  const embedSrc = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&start=${START}&rel=0&modestbranding=1&playsinline=1`;
  const posterSrc = `https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`;
  const posterFallback = `https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg`;

  return (
    <div style={{
      position: 'relative', width: '100%', maxWidth: 720, marginLeft: 'auto',
      aspectRatio: '16 / 9',
      animation: 'pz-video-float 7s ease-in-out infinite',
    }}>
      {/* Soft glow behind */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: '-6% -4%', borderRadius: 36,
        background: 'radial-gradient(60% 50% at 50% 50%, rgba(182,140,232,0.28) 0%, rgba(182,140,232,0) 70%)',
        zIndex: 0, filter: 'blur(8px)',
      }} />

      {/* Felt frame */}
      <div style={{
        position: 'relative', zIndex: 1, width: '100%', height: '100%',
        borderRadius: 28, overflow: 'hidden',
        ...feltSurface(PZ.lilac),
        boxShadow: '0 26px 56px rgba(138,92,200,0.32), 0 6px 14px rgba(61,44,30,0.10)',
      }}>
        {/* Inner video area — leaves room for the felt frame border */}
        <div style={{
          position: 'absolute', inset: 10, borderRadius: 22, overflow: 'hidden',
          background: '#0F0A14',
        }}>
          {playing ? (
            <iframe
              title="Peek-A-Zoo in action"
              src={embedSrc}
              referrerPolicy="strict-origin-when-cross-origin"
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
              style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
            />
          ) : (
            <button
              onClick={() => setPlaying(true)}
              aria-label="Play Peek-A-Zoo video"
              style={{
                position: 'absolute', inset: 0, border: 'none', padding: 0, margin: 0,
                background: 'transparent', cursor: 'pointer', display: 'block',
              }}>
              <img
                src={posterSrc}
                onError={(e) => { if (e.currentTarget.src !== posterFallback) e.currentTarget.src = posterFallback; }}
                alt=""
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              {/* Soft dim + felt sun behind play button */}
              <span aria-hidden="true" style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(180deg, rgba(15,10,20,0.10) 0%, rgba(15,10,20,0.42) 100%)',
              }} />
              <PlayBadge />
              <span style={{
                position: 'absolute', left: 22, bottom: 18,
                fontFamily: '"Baloo 2", sans-serif', fontWeight: 800, fontSize: 13,
                letterSpacing: '0.14em', textTransform: 'uppercase',
                color: '#fff', opacity: 0.92,
                textShadow: '0 1px 2px rgba(0,0,0,0.45)',
              }}>
                Peek-A-Zoo · 60s tour
              </span>
            </button>
          )}
        </div>
        <span style={{
          position: 'absolute', inset: 14, borderRadius: 20,
          border: '2px dashed rgba(255,255,255,0.55)', pointerEvents: 'none', zIndex: 2,
        }} />
      </div>

      {/* Floating felt accent pills */}
      <div style={{
        position: 'absolute', top: -22, left: -22, zIndex: 3,
        animation: 'pz-float-b 5.4s ease-in-out infinite',
      }}>
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '8px 14px', borderRadius: 999,
          ...feltSurface(PZ.gold), color: '#fff',
          boxShadow: '0 8px 16px rgba(196,123,10,0.30)',
          fontFamily: '"Baloo 2", sans-serif', fontWeight: 800, fontSize: 13,
          textShadow: '0 1px 0 rgba(0,0,0,0.20)',
          position: 'relative',
        }}>
          <span style={{ width: 8, height: 8, borderRadius: 999, background: '#fff' }} />
          Live product tour
          <span style={{ position: 'absolute', inset: 5, borderRadius: 999, border: '1.5px dashed rgba(255,255,255,0.65)', pointerEvents: 'none' }} />
        </span>
      </div>

      <div style={{
        position: 'absolute', bottom: -18, right: -14, zIndex: 3,
        animation: 'pz-float-c 6.2s ease-in-out infinite',
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
          See the ecosystem
          <span style={{ position: 'absolute', inset: 5, borderRadius: 999, border: '1.5px dashed rgba(255,255,255,0.65)', pointerEvents: 'none' }} />
        </span>
      </div>
    </div>
  );
}

function PlayBadge() {
  return (
    <span style={{
      position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)',
      width: 92, height: 92, borderRadius: '50%',
      ...feltSurface('#F5A623'),
      boxShadow: '0 14px 28px rgba(196,123,10,0.45), 0 4px 8px rgba(61,44,30,0.20)',
      display: 'grid', placeItems: 'center',
      transition: 'transform 220ms cubic-bezier(0.34,1.56,0.64,1)',
    }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.08)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'translate(-50%, -50%)'; }}>
      <svg width="32" height="32" viewBox="0 0 24 24" style={{ marginLeft: 4 }}>
        <path d="M7 4.5v15l13-7.5-13-7.5z" fill="#fff" stroke="rgba(0,0,0,0.18)" strokeWidth="0.8" strokeLinejoin="round"/>
      </svg>
      <span style={{
        position: 'absolute', inset: 6, borderRadius: '50%',
        border: '2px dashed rgba(255,255,255,0.72)', pointerEvents: 'none',
      }} />
    </span>
  );
}
