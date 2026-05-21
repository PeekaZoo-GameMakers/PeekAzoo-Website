// hero.jsx — section 1: emotional hook + brand positioning

function Hero() {
  return (
    <header id="top" style={{
      position: 'relative', paddingTop: 180, paddingBottom: 110,
      overflow: 'hidden'
    }}>
      {/* Floating felt shapes in the corners */}
      <FloatingShapes />

      <div className="pz-container pz-hero-grid" style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56,
        alignItems: 'center', position: 'relative', zIndex: 2,
      }}>
        <div style={{ minWidth: 0 }}>
          <Reveal from="left">
            <span className="pz-eyebrow"><span className="dot"></span>AI-powered foundational learning</span>
          </Reveal>
          <Reveal from="left" delay={1}>
            <h1 className="pz-headline" style={{ marginTop: 28 }}>
              Turn screen time into <em>brain time</em>.
            </h1>
          </Reveal>
          <Reveal from="left" delay={2}>
            <p className="pz-subhead" style={{ maxWidth: 'none' }}>
              Your child's most important learning years won't wait.
            </p>
          </Reveal>
          <Reveal from="left" delay={3}>
            <p className="pz-body-lg" style={{ marginTop: 24, maxWidth: 'none' }}>
              By age 8, the foundations for learning, language, creativity, and confidence are already taking shape.
              Peek-A-Zoo transforms passive screen time into active developmental learning — safe, engaging, and built for the years that matter most.
            </p>
          </Reveal>
          <Reveal from="up" delay={4}>
            <div style={{ display: 'flex', gap: 16, marginTop: 36, flexWrap: 'wrap' }}>
              <FeltButton variant="gold" size="lg" href="#demo" icon={<ArrowIcon />}>Request a demo</FeltButton>
              <FeltButton variant="ghost" size="lg" href="#get-access">Get access</FeltButton>
            </div>
          </Reveal>

          {/* Trust strip */}
          <Reveal from="up" delay={5}>
            <div style={{
              marginTop: 56, display: 'flex', alignItems: 'center', gap: 28, flexWrap: 'wrap',
              paddingTop: 26, borderTop: `1.5px dashed ${PZ.border}`
            }}>
              <div style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: PZ.textSoft }}>
                Trusted across
              </div>
              <div className="pz-stagger" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Reveal from="pop"><FeltPill color={PZ.blue}>Governments</FeltPill></Reveal>
                <Reveal from="pop"><FeltPill color={PZ.green}>Schools</FeltPill></Reveal>
                <Reveal from="pop"><FeltPill color={PZ.coral}>Families</FeltPill></Reveal>
                <Reveal from="pop"><FeltPill color={PZ.lilac}>NGO partners</FeltPill></Reveal>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Hero scene */}
        <div style={{ minWidth: 0, display: 'flex', justifyContent: 'center' }}>
          <HeroScene />
        </div>
      </div>

      {/* Scroll cue */}
      <a href="#challenge" className="pz-scroll-cue" aria-label="Scroll for more">
        <span>scroll</span>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M7 3v8M3.5 7.5L7 11l3.5-3.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>

      <style>{`
        @media (max-width: 980px) {
          .pz-hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </header>);

}

function FloatingShapes() {
  return (
    <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }}>
      <div style={{ position: 'absolute', top: 110, left: '-60px', width: 220, height: 220, borderRadius: '50%', ...feltSurface(PZ.goldTint), opacity: 0.7, animation: 'pz-drift 9s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', top: 420, right: '8%', width: 100, height: 100, borderRadius: 28, ...feltSurface(PZ.lilacTint), opacity: 0.85, transform: 'rotate(-12deg)', animation: 'pz-float-b 7s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', bottom: 60, left: '32%', width: 60, height: 60, borderRadius: '50%', ...feltSurface(PZ.greenTint), opacity: 0.7, animation: 'pz-float-c 8s ease-in-out infinite' }} />
    </div>);

}

function HeroScene() {
  // Group portrait of all five Peek-A-Zoo heroes.
  // Back row (smaller, higher up): Luna (owl), Golu (panda).
  // Front row (larger, on the ground): Lobo (fox), Mimi (bunny), Munnu (boy).
  // Each has its own slot; nothing overlaps.
  return (
    <div style={{
      position: 'relative', aspectRatio: '1.05 / 1', width: '100%', maxWidth: 580,
      padding: '4%',
      boxSizing: 'border-box'
    }}>
      {/* Background sun disk */}
      <div style={{
        position: 'absolute', inset: '10% 18% 24% 18%', borderRadius: '50%',
        ...feltSurface(PZ.gold),
        boxShadow: '0 24px 60px rgba(196,123,10,0.32), 0 8px 16px rgba(61,44,30,0.10)'
      }}>
        <span style={{
          position: 'absolute', inset: 16, borderRadius: '50%',
          border: '3px dashed rgba(255,255,255,0.55)', pointerEvents: 'none'
        }} />
      </div>

      {/* Felt-table ground arc, behind the front row */}
      <div aria-hidden="true" style={{
        position: 'absolute', left: '4%', right: '4%', bottom: '4%', height: '34%',
        borderRadius: '50% 50% 22px 22px / 60% 60% 22px 22px',
        background: 'rgba(232, 213, 192, 0.55)',
        boxShadow: '0 8px 22px rgba(61,44,30,0.08)',
        zIndex: 1
      }} />

      {/* Confetti dots */}
      <Confetti />

      {/* ───── FOUR SURROUNDING CHARACTERS ───── */}
      {/* Luna — top-left */}
      <div style={{
        position: 'absolute', left: '4%', top: '4%',
        width: '20%', zIndex: 3,
        animation: 'pz-float-b 6s ease-in-out infinite'
      }}>
        <img src="assets/character-ullu.png" alt="Luna the owl" style={{ width: '100%', filter: 'drop-shadow(0 12px 18px rgba(61,44,30,0.18))' }} />
      </div>

      {/* Golu — top-right */}
      <div style={{
        position: 'absolute', right: '4%', top: '4%',
        width: '22%', zIndex: 3,
        animation: 'pz-float-c 6.6s ease-in-out infinite'
      }}>
        <img src="assets/character-panda.png" alt="Golu the panda" style={{ width: '100%', filter: 'drop-shadow(0 12px 18px rgba(61,44,30,0.18))' }} />
      </div>

      {/* Lobo — bottom-left */}
      <div style={{
        position: 'absolute', left: '2%', bottom: '4%',
        width: '24%', zIndex: 4,
        animation: 'pz-float-a 5.4s ease-in-out infinite'
      }}>
        <img src="assets/character-lobo.png" alt="Lobo the fox" style={{ width: '100%', filter: 'drop-shadow(0 14px 20px rgba(61,44,30,0.20))' }} />
      </div>

      {/* Mimi — bottom-right */}
      <div style={{
        position: 'absolute', right: '2%', bottom: '4%',
        width: '24%', zIndex: 4,
        animation: 'pz-float-c 6s ease-in-out infinite'
      }}>
        <img src="assets/character-mimi.png" alt="Mimi the bunny" style={{ width: '100%', filter: 'drop-shadow(0 14px 20px rgba(61,44,30,0.20))' }} />
      </div>

      {/* ───── MUNNU — DEAD CENTER OF THE SUN DISK, LARGER ───── */}
      {/* Outer div handles centering; inner div handles the float animation.
                                             (If centering and animation are on the same element, the keyframes'
                                             transform overwrites the translate(-50%, -50%) and Munnu drifts.) */}
      <div style={{
        position: 'absolute', left: '50%', top: '46%', transform: 'translate(-50%, -50%)',
        width: '42%', zIndex: 7
      }}>
        <div style={{ animation: 'pz-float-a 5.8s ease-in-out infinite' }}>
          <img src="assets/character-golu.png" alt="Munnu the child" style={{ width: '100%', display: 'block', filter: 'drop-shadow(0 22px 30px rgba(61,44,30,0.30))' }} />
        </div>
      </div>

      {/* Small accent tiles — kept tight so they don't fight the cast */}
      <FloatTile color={PZ.green} icon="assets/icon-number-one.webp"
      style={{ position: 'absolute', top: '32%', left: '-2%', width: 58, height: 58, transform: 'rotate(-8deg)', zIndex: 7,
        animation: 'pz-float-b 5s ease-in-out infinite' }} />
      <FloatTile color={PZ.lilac} icon="assets/icon-rhyme.webp"
      style={{ position: 'absolute', top: '34%', right: '-2%', width: 58, height: 58, transform: 'rotate(10deg)', zIndex: 7,
        animation: 'pz-float-a 6s ease-in-out infinite' }} />

      {/* Sparkles */}
      <SparkleStar style={{ position: 'absolute', top: '14%', left: '46%', animation: 'pz-pulse 2.5s ease-in-out infinite', zIndex: 8 }} />
      <SparkleStar size={18} color={PZ.coral} style={{ position: 'absolute', top: '40%', right: '36%', animation: 'pz-pulse 2.8s ease-in-out infinite', zIndex: 8 }} />
    </div>);

}

function FloatTile({ color, icon, style = {} }) {
  return (
    <div style={{
      borderRadius: 22, ...feltSurface(color),
      boxShadow: '0 10px 18px rgba(61,44,30,0.20)',
      display: 'grid', placeItems: 'center', overflow: 'hidden',
      zIndex: 5,
      ...style
    }}>
      <img src={icon} alt="" style={{ width: '76%', height: '76%', objectFit: 'contain', position: 'relative', zIndex: 1 }} />
      <span style={{
        position: 'absolute', inset: 6, borderRadius: 16,
        border: '2px dashed rgba(255,255,255,0.65)', pointerEvents: 'none', zIndex: 2
      }} />
    </div>);

}

function SparkleStar({ size = 26, color = '#fff', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={style}>
      <path d="M12 2l1.8 7.2L21 11l-7.2 1.8L12 20l-1.8-7.2L3 11l7.2-1.8L12 2z" fill={color} stroke="rgba(0,0,0,0.12)" strokeWidth="0.8" strokeLinejoin="round" />
    </svg>);

}

function Confetti() {
  const dots = [
  [12, 18, PZ.coral], [82, 24, PZ.green], [76, 88, PZ.blue],
  [16, 78, PZ.lilac], [50, 12, PZ.pink], [88, 60, PZ.gold]];

  return (
    <div aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 2, textAlign: "right" }}>
      {dots.map(([x, y, c], i) =>
      <span key={i} style={{
        position: 'absolute', left: `${x}%`, top: `${y}%`,
        width: 14, height: 14, borderRadius: '50%',
        ...feltSurface(c),
        opacity: 0.85
      }} />
      )}
    </div>);

}

Object.assign(window, { Hero, FloatingShapes, HeroScene, FloatTile, SparkleStar });