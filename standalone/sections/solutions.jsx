// solutions.jsx — section 3: audience-specific value cards.

function Solutions() {
  return (
    <section id="solutions" className="pz-section">
      <div className="pz-container">
        <div className="pz-solutions-intro">
          <div className="pz-solutions-copy">
            <Reveal><span className="pz-eyebrow"><span className="dot" style={{ background: PZ.green }} />Built for everyone in the room</span></Reveal>
            <Reveal delay={1}>
              <div className="pz-solutions-logo" style={{ marginTop: 20 }}>
                <img src={__a("assets/logo.png")} alt="Peek-A-Zoo" />
              </div>
            </Reveal>
            <Reveal delay={2}>
              <p className="pz-solutions-body" style={{ marginTop: 22, maxWidth: 'none' }}>
                Children need engagement. Parents need confidence. Educators need effective tools.
                Institutions need scalable impact. Peek-A-Zoo brings it all together in one intelligent learning ecosystem.
              </p>
            </Reveal>
            <Reveal delay={3}>
              <div id="get-access" className="pz-store-row" style={{
                marginTop: 28, display: 'flex', gap: 14, flexWrap: 'wrap', scrollMarginTop: 120,
              }}>
                <StoreButton
                  kind="play"
                  href="https://play.google.com/store/apps/details?id=com.youroaks.kidz&hl=en_IN" />
                <StoreButton kind="app" href="#" />
              </div>
            </Reveal>
          </div>

          <Reveal delay={2}>
            <SolutionsIllustration />
          </Reveal>
        </div>

        {/* Hero card — Government, full width and emphasized */}
        <Reveal>
          <div style={{ marginTop: 64 }}>
            <SolutionCard
              featured
              eyebrow="For governments & public education"
              title="Foundational learning at public scale."
              body="Enable early learning across Anganwadi ecosystems, districts, and public programs — with deployment models built for scale, offline access, and cohort-level visibility."
              highlights={[
              'NEP 2020 / ECCE / FLN aligned',
              'Anganwadi-ready deployment',
              'District & state implementation',
              'Offline compatibility',
              'Cohort analytics',
              'Curriculum adaptability']
              }
              cta="Request government consultation"
              ctaVariant="gold"
              color={PZ.blue}
              character={__a("assets/character-ullu.png")}
              characterName="Luna · The wise guide" />
            
          </div>
        </Reveal>

        {/* Three smaller cards */}
        <div style={{
          marginTop: 28, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24
        }} className="pz-solutions-grid">
          <Reveal delay={1}>
            <SolutionCard
              eyebrow="For schools"
              title="Smarter learning for modern classrooms."
              body="Boost engagement, reduce workload, and extend learning beyond school walls."
              highlights={[
              'Curriculum-aligned experiences',
              'Teacher dashboards',
              'AI-assisted assessment',
              'Intervention insights',
              'Home-school continuity']
              }
              cta="Book a school demo"
              ctaVariant="green"
              color={PZ.green}
              character={__a("assets/character-lobo.png")}
              characterName="Luna + Lobo" />
            
          </Reveal>
          <Reveal delay={2}>
            <SolutionCard
              eyebrow="For parents"
              title="Meaningful learning at home."
              body="Turn digital time into guided developmental learning your child will love."
              highlights={[
              'Safe, child-friendly experiences',
              'Adaptive learning journeys',
              'Speech support',
              'Progress visibility',
              'Activities beyond screens']
              }
              cta="Get access"
              ctaHref="#get-access"
              ctaVariant="coral"
              color={PZ.coral}
              character={__a("assets/character-golu.png")}
              characterName="Munnu + Golu" />
            
          </Reveal>
          <Reveal delay={3}>
            <SolutionCard
              eyebrow="For NGO & CSR partners"
              title="Scale learning impact together."
              body="Deliver measurable early learning across communities and partnerships."
              highlights={[
              'NGO / CSR deployment',
              'Community implementation',
              'Public-private partnerships',
              'Localization support',
              'Impact dashboards']
              }
              cta="Partner with us"
              ctaHref="#partner"
              ctaVariant="lilac"
              color={PZ.lilac}
              character={__a("assets/character-mimi.png")}
              characterName="Mimi + Luna" />
            
          </Reveal>
        </div>
      </div>

      <style>{`
        .pz-solutions-intro {
          display: grid; grid-template-columns: 0.85fr 1.25fr; gap: 48px;
          align-items: center;
        }
        .pz-solutions-copy { min-width: 0; }
        /* Logo stays large — matches the visual scale of the challenge h2 */
        .pz-solutions-logo img {
          height: clamp(56px, 8vw, 96px); width: auto; display: block;
        }
        /* Body text is smaller so the image can dominate the right side */
        .pz-solutions-body {
          font-family: var(--pz-font-body); font-weight: 600;
          font-size: 16px; line-height: 1.6;
          color: var(--pz-text); opacity: 0.82;
          text-wrap: pretty; margin: 0;
        }
        @keyframes pz-illus-float-sol {
          0%, 100% { transform: translateY(0) rotate(1.2deg); }
          50%      { transform: translateY(-12px) rotate(-1deg); }
        }

        @media (max-width: 1080px) {
          .pz-solutions-intro { grid-template-columns: 1fr; gap: 40px; }
          .pz-solutions-grid { grid-template-columns: 1fr !important; }
          .pz-solution-featured { grid-template-columns: 1fr !important; padding: 44px 32px !important; gap: 32px !important; }
        }
        @media (max-width: 560px) {
          .pz-solutions-body { font-size: 15px; }
          .pz-solution-featured { padding: 32px 22px !important; }
          .pz-solution-featured .pz-sf-highlights { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>);

}

function SolutionCard({ featured, eyebrow, title, body, highlights, cta, ctaVariant, color, character, characterName, ctaHref = '#demo' }) {
  if (featured) {
    return (
      <div style={{
        position: 'relative', borderRadius: 32, overflow: 'hidden',
        ...feltSurface(color),
        boxShadow: '0 24px 60px rgba(46,144,200,0.28), 0 6px 14px rgba(61,44,30,0.10)',
        color: '#fff',
        padding: '60px 56px',
        display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 48, alignItems: 'center'
      }}
      className="pz-solution-featured">
        <span style={{
          position: 'absolute', inset: 14, borderRadius: 24,
          border: '2.5px dashed rgba(255,255,255,0.50)', pointerEvents: 'none', zIndex: 1
        }} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', opacity: 0.9 }}>
            {eyebrow}
          </div>
          <h3 style={{
            fontFamily: '"Baloo 2", sans-serif', fontWeight: 800,
            fontSize: 'clamp(32px, 3.6vw, 46px)', lineHeight: 1.1, margin: '14px 0 18px',
            textShadow: '0 2px 0 rgba(0,0,0,0.16)', maxWidth: '22ch'
          }}>{title}</h3>
          <p style={{ fontSize: 18, lineHeight: 1.55, maxWidth: 540, opacity: 0.95, margin: 0 }}>{body}</p>
          <div style={{ marginTop: 28, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, maxWidth: 560 }} className="pz-sf-highlights">
            {highlights.map((h, i) =>
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: 14.5 }}>
                <Checkmark />
                <span>{h}</span>
              </div>
            )}
          </div>
          <div style={{ marginTop: 36 }}>
            <FeltButton variant="gold" size="md" href={ctaHref} icon={<ArrowIcon />}>{cta}</FeltButton>
          </div>
        </div>
        <div style={{ position: 'relative', zIndex: 2, display: 'grid', placeItems: 'center' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: 320, aspectRatio: '1' }}>
            <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: 'rgba(255,255,255,0.18)' }} />
            <img src={character} alt={characterName} style={{
              position: 'absolute', left: '-6%', top: '-8%', width: '112%', height: '112%',
              objectFit: 'contain', filter: 'drop-shadow(0 18px 30px rgba(0,0,0,0.22))',
              animation: 'pz-float-a 6s ease-in-out infinite'
            }} />
          </div>
          <div style={{ marginTop: 14, fontFamily: '"Baloo 2", sans-serif', fontWeight: 700, fontSize: 14, opacity: 0.9, letterSpacing: '0.02em' }}>
            {characterName}
          </div>
        </div>
      </div>);

  }

  return (
    <div style={{
      position: 'relative', borderRadius: 28, overflow: 'hidden',
      background: PZ.surface, border: `1.5px solid ${PZ.border}`,
      boxShadow: '0 10px 28px rgba(61,44,30,0.08)',
      display: 'flex', flexDirection: 'column',
      transition: 'transform 320ms cubic-bezier(0.34,1.56,0.64,1), box-shadow 320ms',
      height: '100%'
    }}
    onMouseEnter={(e) => {e.currentTarget.style.transform = 'translateY(-6px)';e.currentTarget.style.boxShadow = '0 18px 36px rgba(61,44,30,0.14)';}}
    onMouseLeave={(e) => {e.currentTarget.style.transform = '';e.currentTarget.style.boxShadow = '0 10px 28px rgba(61,44,30,0.08)';}}>
      {/* Character header strip */}
      <div style={{
        position: 'relative', height: 180, overflow: 'hidden',
        ...feltSurface(color)
      }}>
        <span style={{
          position: 'absolute', inset: 10, borderRadius: 18,
          border: '2px dashed rgba(255,255,255,0.55)', pointerEvents: 'none'
        }} />
        <div style={{ position: 'absolute', right: -12, bottom: -16, width: 200, height: 200 }}>
          <img src={character} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0 12px 18px rgba(0,0,0,0.18))' }} />
        </div>
        <div style={{
          position: 'absolute', top: 18, left: 18,
          fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 11, letterSpacing: '0.16em',
          textTransform: 'uppercase', color: 'rgba(255,255,255,0.92)'
        }}>{eyebrow}</div>
      </div>
      <div style={{ padding: '24px 28px 30px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{
          fontFamily: '"Baloo 2", sans-serif', fontWeight: 800, fontSize: 24,
          lineHeight: 1.18, color: PZ.text, margin: 0
        }}>{title}</h3>
        <p style={{
          fontFamily: 'Nunito, sans-serif', fontSize: 15, color: PZ.text, opacity: 0.78,
          lineHeight: 1.55, margin: '10px 0 18px'
        }}>{body}</p>
        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: 8 }}>
          {highlights.map((h, i) =>
          <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: 14, color: PZ.text }}>
              <SmallCheck color={color} />
              <span>{h}</span>
            </li>
          )}
        </ul>
        <div style={{ marginTop: 'auto' }}>
          <FeltButton variant={ctaVariant} size="sm" href={ctaHref} icon={<ArrowIcon />}>{cta}</FeltButton>
        </div>
      </div>
    </div>);

}

function Checkmark() {
  return (
    <span style={{
      width: 22, height: 22, borderRadius: '50%', background: 'rgba(255,255,255,0.20)',
      display: 'grid', placeItems: 'center', flexShrink: 0,
      border: '1.5px dashed rgba(255,255,255,0.55)'
    }}>
      <svg width="11" height="11" viewBox="0 0 12 12">
        <path d="M2.5 6.2l2.4 2.4L10 3.5" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    </span>);

}

function SmallCheck({ color }) {
  return (
    <span style={{
      width: 20, height: 20, borderRadius: '50%', background: color,
      display: 'grid', placeItems: 'center', flexShrink: 0
    }}>
      <svg width="11" height="11" viewBox="0 0 12 12">
        <path d="M2.5 6.2l2.4 2.4L10 3.5" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    </span>);

}

// ─────────── Store badge — felt-textured pill with brand icon ───────────
function StoreButton({ kind, href }) {
  const [hover, setHover] = React.useState(false);
  const [pressed, setPressed] = React.useState(false);
  const cfg = kind === 'play' ?
  { eyebrow: 'Get it on', label: 'Google Play', icon: <PlayStoreIcon />, bg: '#3D2C1E', shadow: 'rgba(0,0,0,0.42)' } :
  { eyebrow: 'Download on the', label: 'App Store', icon: <AppStoreIcon />, bg: '#1F1A14', shadow: 'rgba(0,0,0,0.42)' };

  const isPlaceholder = !href || href === '#';
  const onClick = (e) => {
    if (isPlaceholder) {e.preventDefault();return;}
    e.preventDefault();
    // window.open with _blank works inside sandboxed preview iframes where
    // <a target="_blank"> is sometimes silently blocked.
    window.open(href, '_blank', 'noopener,noreferrer');
  };

  return (
    <a
      href={href || '#'}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {setHover(false);setPressed(false);}}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      style={{
        position: 'relative', display: 'inline-flex', alignItems: 'center', gap: 14,
        padding: '12px 24px 12px 18px',
        borderRadius: CAPSULE_RADIUS,
        color: '#fff', textDecoration: 'none',
        ...feltSurface(cfg.bg),
        boxShadow: pressed ?
        `0 3px 8px ${cfg.shadow}, 0 1px 2px rgba(61,44,30,0.10)` :
        hover ?
        `0 14px 22px ${cfg.shadow}, 0 4px 6px rgba(61,44,30,0.10)` :
        `0 8px 16px ${cfg.shadow}, 0 2px 4px rgba(61,44,30,0.10)`,
        transform: pressed ? 'translateY(1px)' : hover ? 'translateY(-3px)' : 'none',
        transition: 'transform 180ms cubic-bezier(0.34,1.56,0.64,1), box-shadow 180ms',
        minWidth: 200
      }}>
      <span style={{ position: 'relative', zIndex: 2, display: 'inline-flex', alignItems: 'center', gap: 14 }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{cfg.icon}</span>
        <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.05 }}>
          <span style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: 11, letterSpacing: '0.06em', opacity: 0.88 }}>
            {cfg.eyebrow}
          </span>
          <span style={{ fontFamily: '"Baloo 2", sans-serif', fontWeight: 800, fontSize: 19, letterSpacing: '0.005em', marginTop: 2, textShadow: '0 1px 0 rgba(0,0,0,0.32)' }}>
            {cfg.label}
          </span>
        </span>
      </span>
      <span style={{
        position: 'absolute', inset: 6, borderRadius: 'inherit',
        border: '2px dashed rgba(255,255,255,0.50)', pointerEvents: 'none'
      }} />
    </a>);

}

function PlayStoreIcon() {
  // Classic Play triangle made of 4 colored shards, felt-style chunky.
  return (
    <svg width="30" height="32" viewBox="0 0 28 30" aria-hidden="true">
      <defs>
        <linearGradient id="pg-blue" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#5BB8E8" /><stop offset="1" stopColor="#2E90C8" />
        </linearGradient>
        <linearGradient id="pg-green" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#A8DC70" /><stop offset="1" stopColor="#4A8F35" />
        </linearGradient>
        <linearGradient id="pg-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F5A623" /><stop offset="1" stopColor="#C47B0A" />
        </linearGradient>
        <linearGradient id="pg-coral" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F47B5A" /><stop offset="1" stopColor="#C04030" />
        </linearGradient>
      </defs>
      {/* Triangle composed of four colored regions */}
      <path d="M3 1.6 L17.4 14.9 L3 28.2 Z" fill="url(#pg-blue)" />
      <path d="M3 1.6 L17.4 14.9 L21.5 11 Z" fill="url(#pg-green)" />
      <path d="M21.5 11 L17.4 14.9 L25.6 14.9 Z" fill="url(#pg-gold)" />
      <path d="M17.4 14.9 L21.5 18.8 L25.6 14.9 Z" fill="url(#pg-coral)" />
      <path d="M3 28.2 L17.4 14.9 L21.5 18.8 Z" fill="url(#pg-coral)" opacity="0.9" />
    </svg>);

}

function AppStoreIcon() {
  return (
    <svg width="28" height="32" viewBox="0 0 24 28" fill="#fff" aria-hidden="true">
      <path d="M16.7 14.6c0-2.9 2.4-4.3 2.5-4.3-1.4-2-3.5-2.3-4.2-2.3-1.8-.2-3.5 1.1-4.4 1.1-.9 0-2.3-1-3.8-1-2 0-3.8 1.1-4.8 2.9-2 3.5-.5 8.7 1.5 11.5 1 1.4 2.1 3 3.6 2.9 1.4-.1 2-.9 3.7-.9 1.7 0 2.2.9 3.7.9 1.5 0 2.5-1.4 3.5-2.8 1.1-1.6 1.5-3.1 1.5-3.2 0 0-2.8-1.1-2.8-4.3zM14 5.7c.8-.9 1.3-2.2 1.1-3.5-1.1.1-2.4.8-3.2 1.7-.7.8-1.4 2.1-1.2 3.4 1.2.1 2.5-.7 3.3-1.6z" />
    </svg>);

}

Object.assign(window, { Solutions, SolutionCard, StoreButton, SolutionsIllustration });

// ─────────── Felt-framed illustration for the solutions section ───────────
function SolutionsIllustration() {
  return (
    <div style={{
      position: 'relative', width: '100%', maxWidth: 720, marginLeft: 'auto',
      aspectRatio: '3 / 2',
      animation: 'pz-illus-float-sol 7s ease-in-out infinite'
    }}>
      {/* Soft glow behind */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: '-6% -4%', borderRadius: 36,
        background: 'radial-gradient(60% 50% at 50% 50%, rgba(91,184,232,0.22) 0%, rgba(91,184,232,0) 70%)',
        zIndex: 0, filter: 'blur(8px)',
      }} />

      {/* Felt frame around the image — blue/teal to evoke trust + ecosystem */}
      <div style={{
        position: 'relative', zIndex: 1, width: '100%', height: '100%',
        borderRadius: 28, overflow: 'hidden',
        ...feltSurface(PZ.blue),
        boxShadow: '0 22px 50px rgba(46,144,200,0.28), 0 6px 14px rgba(61,44,30,0.10)'
      }}>
        <img
          src={__a("assets/solutions-illustration.png")}
          alt="The Peek-A-Zoo ecosystem: Mimi, Munnu, Lobo, Luna and Golu surrounded by parents, teachers and classroom UI hovering in their world — games, storybooks, AI tutoring, AR learning, multilingual learning."
          style={{
            position: 'absolute', inset: 8, width: 'calc(100% - 16px)', height: 'calc(100% - 16px)',
            objectFit: 'cover', borderRadius: 22, display: 'block', zIndex: 1
          }} />
        
        <span style={{
          position: 'absolute', inset: 12, borderRadius: 20,
          border: '2px dashed rgba(255,255,255,0.62)', pointerEvents: 'none', zIndex: 2
        }} />
      </div>

      {/* Floating felt accent pills */}
      <div style={{
        position: 'absolute', top: -22, right: -22, zIndex: 2,
        animation: 'pz-float-a 5.5s ease-in-out infinite'
      }}>
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '8px 14px', borderRadius: 999,
          ...feltSurface(PZ.lilac), color: '#fff',
          boxShadow: '0 8px 16px rgba(138,92,200,0.30)',
          fontFamily: '"Baloo 2", sans-serif', fontWeight: 800, fontSize: 13,
          textShadow: '0 1px 0 rgba(0,0,0,0.20)',
          position: 'relative'
        }}>
          <span style={{ width: 8, height: 8, borderRadius: 999, background: '#fff' }} />
          One ecosystem
          <span style={{ position: 'absolute', inset: 5, borderRadius: 999, border: '1.5px dashed rgba(255,255,255,0.65)', pointerEvents: 'none' }} />
        </span>
      </div>

      <div style={{
        position: 'absolute', bottom: -18, left: -14, zIndex: 2,
        animation: 'pz-float-c 6.2s ease-in-out infinite'
      }}>
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '8px 14px', borderRadius: 999,
          ...feltSurface(PZ.gold), color: '#fff',
          boxShadow: '0 8px 16px rgba(196,123,10,0.30)',
          fontFamily: '"Baloo 2", sans-serif', fontWeight: 800, fontSize: 13,
          textShadow: '0 1px 0 rgba(0,0,0,0.20)',
          position: 'relative'
        }}>
          <span style={{ width: 8, height: 8, borderRadius: 999, background: '#fff' }} />
          Every audience
          <span style={{ position: 'absolute', inset: 5, borderRadius: 999, border: '1.5px dashed rgba(255,255,255,0.65)', pointerEvents: 'none' }} />
        </span>
      </div>

      {/* Sparkle stars */}
      <svg width="22" height="22" viewBox="0 0 24 24" style={{
        position: 'absolute', top: '10%', left: '6%', zIndex: 3,
        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.18))',
        animation: 'pz-illus-sparkle 2.4s ease-in-out infinite'
      }}>
        <path d="M12 2l1.8 7.2L21 11l-7.2 1.8L12 20l-1.8-7.2L3 11l7.2-1.8L12 2z" fill="#fff" />
      </svg>
      <svg width="14" height="14" viewBox="0 0 24 24" style={{
        position: 'absolute', bottom: '18%', right: '8%', zIndex: 3,
        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.18))',
        animation: 'pz-illus-sparkle 3s ease-in-out infinite 0.5s'
      }}>
        <path d="M12 2l1.8 7.2L21 11l-7.2 1.8L12 20l-1.8-7.2L3 11l7.2-1.8L12 2z" fill="#F5A623" />
      </svg>
    </div>);

}