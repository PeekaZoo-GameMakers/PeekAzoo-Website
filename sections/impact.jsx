// impact.jsx — section 5: credibility, case story, outcomes.

function Impact() {
  const metrics = [
    { v: 25000, suffix: '+', label: 'Users reached' },
    { v: 4,     suffix: '',  label: 'Districts in Jharkhand' },
    { v: 100,   suffix: '%', label: 'Public sector aligned' },
    { v: 3,     suffix: '',  label: 'Stakeholder groups: govt, educators, families' },
  ];
  const outcomes = [
    { icon: '📈', title: 'Higher engagement', body: 'Children return to learning sessions on their own — and stay longer.' },
    { icon: '🔎', title: 'Better learning visibility', body: 'Real-time signal for educators, supervisors, and families.' },
    { icon: '⚙️', title: 'Scalable implementation', body: 'Anganwadi-ready models that work across districts.' },
    { icon: '🤝', title: 'Inclusive access', body: 'Mother-tongue learning brings every child into the room.' },
  ];

  return (
    <section id="impact" className="pz-section">
      <div className="pz-container">
        <div className="pz-impact-intro">
          <div className="pz-impact-copy">
            <Reveal from="left"><span className="pz-eyebrow"><span className="dot" style={{ background: PZ.green }}/>The impact</span></Reveal>
            <Reveal from="left" delay={1}>
              <h2 className="pz-section-title wide" style={{ maxWidth: '20ch' }}>
                Proven <span className="accent-green">where it matters</span>.
              </h2>
            </Reveal>
            <Reveal from="left" delay={2}>
              <p className="pz-body-lg" style={{ marginTop: 22, fontSize: 17, maxWidth: 'none' }}>
                Peek-A-Zoo has supported foundational learning through Anganwadi ecosystems in Jharkhand,
                reaching 25,000+ users across 4 districts — and growing.
              </p>
            </Reveal>
            <Reveal from="left" delay={3}>
              <div style={{ marginTop: 24, display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
                <FeltPill color={PZ.green}>Watch the story</FeltPill>
                <span style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: 14, color: PZ.textSoft }}>
                  Children, teachers and supervisors on what changed.
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal from="right" delay={2}>
            <ImpactVideo />
          </Reveal>
        </div>

        {/* Metrics strip */}
        <div className="pz-impact-metrics pz-stagger" style={{
          marginTop: 64, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18,
        }}>
          {metrics.map((m, i) => {
            const colors = [PZ.gold, PZ.blue, PZ.coral, PZ.lilac];
            return (
              <Reveal key={i} from="scale">
                <div className="pz-lift" style={{
                  position: 'relative', borderRadius: 24, padding: '32px 28px',
                  ...feltSurface(colors[i % colors.length]),
                  color: '#fff', overflow: 'hidden',
                  boxShadow: '0 12px 28px rgba(61,44,30,0.15)',
                  minHeight: 200,
                  display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                }}>
                  <span style={{ position: 'absolute', inset: 10, borderRadius: 16, border: '2px dashed rgba(255,255,255,0.55)' }} />
                  <div style={{ position: 'relative', zIndex: 1, fontFamily: '"Baloo 2", sans-serif', fontWeight: 800, fontSize: 'clamp(36px, 4vw, 52px)', lineHeight: 1, letterSpacing: '-0.02em', textShadow: '0 2px 0 rgba(0,0,0,0.18)' }}>
                    <CountUp to={m.v} suffix={m.suffix} />
                  </div>
                  <div style={{ position: 'relative', zIndex: 1, marginTop: 16, fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: 15, opacity: 0.95, lineHeight: 1.35 }}>
                    {m.label}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Case story */}
        <Reveal from="scale">
          <div style={{
            marginTop: 64, padding: '52px 48px',
            background: PZ.surface, borderRadius: 32,
            border: `1.5px solid ${PZ.border}`,
            display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 48, alignItems: 'center',
            position: 'relative', overflow: 'hidden',
          }} className="pz-case-story">
            <div className="pz-case-portraits">
              <div style={{ display: 'flex', alignItems: 'center', gap: 18, position: 'relative', flexWrap: 'nowrap' }}>
                <div style={{ animation: 'pz-float-a 5s ease-in-out infinite', flex: '0 0 auto' }}>
                  <FeltPhoto src="assets/jharkhand-1.png" tint={PZ.green} size={160} rotate={-3} />
                </div>
                <div style={{ animation: 'pz-float-b 5.5s ease-in-out infinite', flex: '0 0 auto', marginTop: -8 }}>
                  <FeltPhoto src="assets/jharkhand-3.jpg" tint={PZ.lilac} size={210} rotate={-1.5} aspectRatio="4 / 3" />
                </div>
                <div style={{ animation: 'pz-float-c 6s ease-in-out infinite', flex: '0 0 auto', marginTop: 12 }}>
                  <FeltPhoto src="assets/jharkhand-2.png" tint={PZ.blue} size={150} rotate={2.5} />
                </div>
              </div>
            </div>
            <div>
              <FeltPill color={PZ.green}>Case story · Jharkhand</FeltPill>
              <h3 style={{
                fontFamily: '"Baloo 2", sans-serif', fontWeight: 800,
                fontSize: 'clamp(26px, 2.8vw, 36px)', lineHeight: 1.18,
                margin: '18px 0 16px', maxWidth: '24ch',
              }}>
                Foundational learning, delivered through the Anganwadi ecosystem.
              </h3>
              <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16.5, lineHeight: 1.6, color: PZ.text, opacity: 0.82, margin: 0, maxWidth: 560 }}>
                Peek-A-Zoo partnered with state and district stakeholders to bring early learning to children, educators, and families across four districts —
                with measurable engagement, multilingual access, and progress that institutions could finally see.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Outcomes */}
        <div className="pz-outcomes-grid pz-stagger" style={{
          marginTop: 56, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18,
        }}>
          {outcomes.map((o, i) => (
            <Reveal key={i} from="up">
              <div className="pz-lift" style={{
                background: PZ.bg, borderRadius: 22, padding: '24px 22px',
                border: `1.5px solid ${PZ.border}`,
                height: '100%',
              }}>
                <div style={{ fontSize: 28 }}>{o.icon}</div>
                <h4 style={{ fontFamily: '"Baloo 2", sans-serif', fontWeight: 800, fontSize: 17, margin: '12px 0 6px', color: PZ.text }}>{o.title}</h4>
                <p style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 600, fontSize: 14, lineHeight: 1.55, color: PZ.text, opacity: 0.78, margin: 0 }}>{o.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .pz-impact-intro {
          display: grid; grid-template-columns: 0.85fr 1.25fr; gap: 48px;
          align-items: center;
        }
        .pz-impact-copy { min-width: 0; }
        @keyframes pz-video-float-imp {
          0%, 100% { transform: translateY(0) rotate(0.6deg); }
          50%      { transform: translateY(-10px) rotate(-0.4deg); }
        }

        @media (max-width: 1080px) {
          .pz-impact-intro { grid-template-columns: 1fr !important; gap: 40px !important; }
          .pz-impact-metrics { grid-template-columns: repeat(2, 1fr) !important; }
          .pz-outcomes-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .pz-case-story { grid-template-columns: 1fr !important; padding: 40px 32px !important; gap: 28px !important; }
          .pz-case-portraits { overflow-x: auto; padding-bottom: 8px; }
          .pz-case-portraits > div { width: max-content; }
        }
        @media (max-width: 600px) {
          .pz-impact-metrics { grid-template-columns: 1fr !important; }
          .pz-outcomes-grid { grid-template-columns: 1fr !important; }
          .pz-case-story { padding: 32px 22px !important; }
        }
      `}</style>
    </section>
  );
}

Object.assign(window, { Impact, ImpactVideo });

// ─────────── Felt-framed photo (used in the Jharkhand case story) ───────────
function FeltPhoto({ src, tint = PZ.gold, size = 160, rotate = 0, aspectRatio = '1' }) {
  return (
    <div style={{
      position: 'relative', width: size,
      aspectRatio,
      borderRadius: 22, padding: 8,
      ...feltSurface(tint),
      transform: `rotate(${rotate}deg)`,
      boxShadow: '0 14px 28px rgba(61,44,30,0.20), 0 3px 6px rgba(61,44,30,0.12)',
      transition: 'transform 320ms cubic-bezier(0.34,1.56,0.64,1)',
    }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = `rotate(${rotate}deg) translateY(-4px) scale(1.04)`; e.currentTarget.style.zIndex = 5; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = `rotate(${rotate}deg)`; e.currentTarget.style.zIndex = ''; }}>
      <img src={src} alt="Peek-A-Zoo in the Anganwadi ecosystem, Jharkhand"
        style={{
          width: '100%', height: '100%', objectFit: 'cover', display: 'block',
          borderRadius: 14, position: 'relative', zIndex: 1,
        }}
      />
      <span style={{
        position: 'absolute', inset: 6, borderRadius: 16,
        border: '2px dashed rgba(255,255,255,0.62)', pointerEvents: 'none', zIndex: 2,
      }} />
    </div>
  );
}

Object.assign(window, { FeltPhoto });

// ─────────── Felt-framed YouTube video for the impact section ───────────
function ImpactVideo() {
  const VIDEO_ID = '751nIhmKh4w';
  const [playing, setPlaying] = React.useState(false);
  const embedSrc = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;
  const posterSrc = `https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`;
  const posterFallback = `https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg`;

  return (
    <div style={{
      position: 'relative', width: '100%', maxWidth: 720, marginLeft: 'auto',
      aspectRatio: '16 / 9',
      animation: 'pz-video-float-imp 7s ease-in-out infinite',
    }}>
      {/* Soft glow */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: '-6% -4%', borderRadius: 36,
        background: 'radial-gradient(60% 50% at 50% 50%, rgba(108,193,78,0.28) 0%, rgba(108,193,78,0) 70%)',
        zIndex: 0, filter: 'blur(8px)',
      }} />

      {/* Green felt frame — section is green-themed */}
      <div style={{
        position: 'relative', zIndex: 1, width: '100%', height: '100%',
        borderRadius: 28, overflow: 'hidden',
        ...feltSurface(PZ.green),
        boxShadow: '0 26px 56px rgba(74,143,53,0.32), 0 6px 14px rgba(61,44,30,0.10)',
      }}>
        <div style={{
          position: 'absolute', inset: 10, borderRadius: 22, overflow: 'hidden',
          background: '#0F140A',
        }}>
          {playing ? (
            <iframe
              title="Peek-A-Zoo impact story"
              src={embedSrc}
              referrerPolicy="strict-origin-when-cross-origin"
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
              style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
            />
          ) : (
            <button
              onClick={() => setPlaying(true)}
              aria-label="Play Peek-A-Zoo impact video"
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
              <span aria-hidden="true" style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(180deg, rgba(15,20,10,0.10) 0%, rgba(15,20,10,0.42) 100%)',
              }} />
              <ImpactPlayBadge />
              <span style={{
                position: 'absolute', left: 22, bottom: 18,
                fontFamily: '"Baloo 2", sans-serif', fontWeight: 800, fontSize: 13,
                letterSpacing: '0.14em', textTransform: 'uppercase',
                color: '#fff', opacity: 0.92,
                textShadow: '0 1px 2px rgba(0,0,0,0.45)',
              }}>
                Peek-A-Zoo · Impact story
              </span>
            </button>
          )}
        </div>
        <span style={{
          position: 'absolute', inset: 14, borderRadius: 20,
          border: '2px dashed rgba(255,255,255,0.55)', pointerEvents: 'none', zIndex: 2,
        }} />
      </div>

      {/* Floating felt pills */}
      <div style={{
        position: 'absolute', top: -22, right: -22, zIndex: 3,
        animation: 'pz-float-a 5.4s ease-in-out infinite',
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
          Jharkhand
          <span style={{ position: 'absolute', inset: 5, borderRadius: 999, border: '1.5px dashed rgba(255,255,255,0.65)', pointerEvents: 'none' }} />
        </span>
      </div>

      <div style={{
        position: 'absolute', bottom: -18, left: -14, zIndex: 3,
        animation: 'pz-float-c 6.2s ease-in-out infinite',
      }}>
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '8px 14px', borderRadius: 999,
          ...feltSurface(PZ.blue), color: '#fff',
          boxShadow: '0 8px 16px rgba(46,144,200,0.30)',
          fontFamily: '"Baloo 2", sans-serif', fontWeight: 800, fontSize: 13,
          textShadow: '0 1px 0 rgba(0,0,0,0.20)',
          position: 'relative',
        }}>
          <span style={{ width: 8, height: 8, borderRadius: 999, background: '#fff' }} />
          25,000+ learners
          <span style={{ position: 'absolute', inset: 5, borderRadius: 999, border: '1.5px dashed rgba(255,255,255,0.65)', pointerEvents: 'none' }} />
        </span>
      </div>
    </div>
  );
}

function ImpactPlayBadge() {
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
