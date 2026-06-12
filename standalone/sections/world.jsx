// world.jsx — section 7: character storybook carousel.

function World() {
  const characters = [
    {
      id: 'mimi',
      name: 'Piko',
      tagline: 'The fearless explorer',
      species: 'Rabbit · she/her',
      img: __a('assets/character-mimi.png'),
      bg: PZ.coral, tintBg: PZ.pinkTint,
      traits: ['Brave', 'Adventurous', 'Curious', 'Energetic', 'Fearless'],
      power: 'Discovery & exploration',
      role: 'Main protagonist',
      quote: 'Come on, let\u2019s see what\u2019s past the bend!',
    },
    {
      id: 'munnu',
      name: 'Munnu',
      tagline: 'The little learner',
      species: 'Human child · he/him',
      img: __a('assets/character-golu.png'),
      bg: PZ.gold, tintBg: PZ.goldTint,
      traits: ['Curious', 'Friendly', 'Energetic', 'Relatable', 'Playful'],
      power: 'Participation & growth',
      role: 'Audience surrogate',
      quote: 'I want to try! Show me how.',
    },
    {
      id: 'lobo',
      name: 'Lobo',
      tagline: 'The clever trickster',
      species: 'Fox · he/him',
      img: __a('assets/character-lobo.png'),
      bg: PZ.coral, tintBg: PZ.pinkTint,
      traits: ['Mischievous', 'Playful', 'Clever', 'Witty', 'Unpredictable'],
      power: 'Logic & problem solving',
      role: 'Game challenger',
      quote: 'Bet you can\u2019t solve this one. Go on, prove me wrong.',
    },
    {
      id: 'luna',
      name: 'Luna',
      tagline: 'The wise guide',
      species: 'Owl · she/her',
      img: __a('assets/character-ullu.png'),
      bg: PZ.blue, tintBg: PZ.blueTint,
      traits: ['Intelligent', 'Mature', 'Wise', 'Reassuring', 'Thoughtful'],
      power: 'Guidance & understanding',
      role: 'Mentor',
      quote: 'Take your time. We can think this through together.',
    },
    {
      id: 'golu',
      name: 'Golu',
      tagline: 'The gentle friend',
      species: 'Panda · he/him',
      img: __a('assets/character-panda.png'),
      bg: PZ.lilac, tintBg: PZ.lilacTint,
      traits: ['Strong', 'Innocent', 'Kind-hearted', 'Warm', 'Supportive'],
      power: 'Confidence & encouragement',
      role: 'Emotional support',
      quote: 'You did so well. I\u2019m so proud of you.',
    },
  ];

  const [active, setActive] = React.useState(0);
  const current = characters[active];

  return (
    <section id="world" className="pz-section cream-deep">
      <div className="pz-container">
        <div className="pz-section-intro--center">
          <Reveal><span className="pz-eyebrow"><span className="dot" style={{ background: PZ.pink }}/>The Peek-A-Zoo world</span></Reveal>
          <Reveal delay={1}>
            <h2 className="pz-section-title wide">
              Meet the heroes behind every <span className="accent-gold">learning adventure</span>.
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="pz-body-lg" style={{ marginTop: 24, fontSize: 19 }}>
              Every great learning journey needs brave explorers, clever friends, wise guides, and gentle companions.
              Children join Munnu and Piko as they explore, solve, ask, and grow with confidence.
            </p>
          </Reveal>
        </div>

        {/* Featured character card */}
        <Reveal>
          <div style={{
            marginTop: 56, position: 'relative', borderRadius: 36, overflow: 'hidden',
            ...feltSurface(current.bg),
            boxShadow: '0 24px 60px rgba(61,44,30,0.20)',
            color: '#fff',
            padding: '64px 56px',
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center',
            minHeight: 480,
            transition: 'background-color 600ms ease',
          }} className="pz-world-featured">
            <span style={{ position: 'absolute', inset: 16, borderRadius: 28, border: '2.5px dashed rgba(255,255,255,0.50)', pointerEvents: 'none', zIndex: 1 }} />

            {/* Sparkles */}
            <SparkleStar size={28} style={{ position: 'absolute', top: '14%', right: '46%', zIndex: 2, animation: 'pz-pulse 2.5s ease-in-out infinite' }} />
            <SparkleStar size={20} color="rgba(255,255,255,0.85)" style={{ position: 'absolute', bottom: '20%', right: '50%', zIndex: 2, animation: 'pz-pulse 3s ease-in-out infinite' }} />

            <div style={{ position: 'relative', zIndex: 3 }}>
              <div style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.92 }}>
                Character · {String(active + 1).padStart(2, '0')} of {String(characters.length).padStart(2, '0')}
              </div>
              <h3 style={{
                fontFamily: '"Baloo 2", sans-serif', fontWeight: 800,
                fontSize: 'clamp(48px, 6vw, 84px)', lineHeight: 1, margin: '14px 0 8px',
                letterSpacing: '-0.02em', textShadow: '0 3px 0 rgba(0,0,0,0.18)',
              }}>{current.name}</h3>
              <div style={{ fontFamily: '"Baloo 2", sans-serif', fontWeight: 700, fontSize: 22, opacity: 0.95 }}>
                {current.tagline}
              </div>
              <div style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: 14, opacity: 0.85, marginTop: 6 }}>
                {current.species}
              </div>

              <div style={{
                marginTop: 26, padding: '20px 22px', borderRadius: 18,
                background: 'rgba(255,255,255,0.15)',
                border: '1.5px dashed rgba(255,255,255,0.55)',
                position: 'relative',
              }}>
                <div style={{ position: 'absolute', top: -12, left: 18, padding: '3px 12px', borderRadius: 999, background: '#fff', color: current.bg, fontFamily: '"Baloo 2", sans-serif', fontWeight: 800, fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  {current.name} says
                </div>
                <div style={{ fontFamily: '"Baloo 2", sans-serif', fontWeight: 600, fontSize: 19, lineHeight: 1.35, fontStyle: 'italic' }}>
                  &ldquo;{current.quote}&rdquo;
                </div>
              </div>

              <div className="pz-traits-row" style={{ marginTop: 28, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {current.traits.map((t, i) => (
                  <span key={i} style={{
                    padding: '6px 14px', borderRadius: 999,
                    background: 'rgba(255,255,255,0.20)',
                    fontFamily: '"Baloo 2", sans-serif', fontWeight: 700, fontSize: 13,
                    border: '1.5px solid rgba(255,255,255,0.32)',
                  }}>{t}</span>
                ))}
              </div>

              <div style={{ marginTop: 26, display: 'flex', gap: 28 }}>
                <div>
                  <div style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', opacity: 0.82 }}>Superpower</div>
                  <div style={{ fontFamily: '"Baloo 2", sans-serif', fontWeight: 700, fontSize: 15, marginTop: 4 }}>{current.power}</div>
                </div>
                <div>
                  <div style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', opacity: 0.82 }}>Story role</div>
                  <div style={{ fontFamily: '"Baloo 2", sans-serif', fontWeight: 700, fontSize: 15, marginTop: 4 }}>{current.role}</div>
                </div>
              </div>
            </div>

            <div style={{ position: 'relative', zIndex: 3, display: 'grid', placeItems: 'center' }}>
              <div style={{ position: 'relative', width: '100%', maxWidth: 420, aspectRatio: 1 }}>
                <div style={{ position: 'absolute', inset: '8%', borderRadius: '50%', background: 'rgba(255,255,255,0.16)', boxShadow: 'inset 0 0 0 2.5px rgba(255,255,255,0.32)' }} />
                <img key={current.id} src={current.img} alt={current.name} style={{
                  position: 'absolute', left: '-6%', top: '-8%', width: '112%', height: '112%',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 22px 36px rgba(0,0,0,0.28))',
                  animation: 'pz-float-a 5s ease-in-out infinite, pz-char-in 600ms ease-out',
                }} />
              </div>
            </div>
          </div>
        </Reveal>

        {/* Character selector */}
        <Reveal>
          <div style={{
            marginTop: 28, display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 14,
          }} className="pz-char-strip">
            {characters.map((c, i) => (
              <button key={c.id} onClick={() => setActive(i)} style={{
                cursor: 'pointer', border: 'none', background: 'transparent', padding: 0,
                position: 'relative',
                outline: 'none',
              }}>
                <div style={{
                  position: 'relative', borderRadius: 22, padding: '20px 18px 18px',
                  background: active === i ? PZ.surface : 'rgba(255,253,248,0.55)',
                  border: active === i ? `2px solid ${c.bg}` : `1.5px solid ${PZ.border}`,
                  boxShadow: active === i ? `0 10px 24px ${c.bg}33` : 'none',
                  transition: 'all 240ms cubic-bezier(0.34,1.56,0.64,1)',
                  transform: active === i ? 'translateY(-3px)' : 'none',
                  display: 'flex', alignItems: 'center', gap: 14, textAlign: 'left',
                }}>
                  <div style={{
                    width: 58, height: 58, borderRadius: '50%',
                    ...feltSurface(c.tintBg), position: 'relative', overflow: 'hidden', flexShrink: 0,
                  }}>
                    <img src={c.img} alt="" style={{ position: 'absolute', left: '-12%', top: '-14%', width: '124%', height: '124%', objectFit: 'contain' }} />
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontFamily: '"Baloo 2", sans-serif', fontWeight: 800, fontSize: 16, color: PZ.text, lineHeight: 1.1 }}>{c.name}</div>
                    <div style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: 12, color: PZ.textSoft, marginTop: 2, lineHeight: 1.2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{c.tagline}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      <style>{`
        @keyframes pz-char-in { from { opacity: 0; transform: scale(0.94); } to { opacity: 1; transform: scale(1); } }
        @media (max-width: 1080px) {
          .pz-world-featured { grid-template-columns: 1fr !important; padding: 44px 32px !important; min-height: 0 !important; }
          .pz-char-strip { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .pz-world-featured { padding: 32px 22px !important; }
          .pz-world-featured .pz-traits-row { gap: 6px !important; }
          .pz-char-strip { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

Object.assign(window, { World });
