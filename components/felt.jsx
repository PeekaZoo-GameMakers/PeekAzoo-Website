// felt.jsx — Peek-A-Zoo website felt primitives.
// All surfaces use the real felt-texture image, blended with each brand color
// via background-blend-mode: multiply, plus a subtle tint that re-saturates.

const FELT_URL = 'assets/felt-texture.png';
const FELT_SIZE = '320px auto';

// Brand colors from the design system tokens.
const PZ = {
  green:  '#6CC14E', greenDark:  '#4A8F35', greenTint:  '#EBF8E8',
  blue:   '#5BB8E8', blueDark:   '#2E90C8', blueTint:   '#F0F4FF',
  gold:   '#F5A623', goldDark:   '#C47B0A', goldTint:   '#FFF6E0',
  pink:   '#F47B5A', pinkDark:   '#C04030', pinkTint:   '#FFEDE6',
  lilac:  '#B68CE8', lilacDark:  '#8A5CC8', lilacTint:  '#F4ECFF',
  coral:  '#F47B5A', coralDark:  '#C04030',
  gray:   '#B0B8C0', grayDark:   '#8090A0',
  bg:     '#FFF8F0', surface:    '#FFFDF8', text: '#3D2C1E', textSoft: '#A07850',
  border: '#F0E0CC', table: '#E8D5C0',
};

// Returns the felt texture + tint applied over a base color.
function feltSurface(bg) {
  return {
    backgroundColor: bg,
    backgroundImage: `
      linear-gradient(180deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0) 45%),
      linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(0,0,0,0.10) 100%),
      url("${FELT_URL}")
    `,
    backgroundSize: `auto, auto, ${FELT_SIZE}`,
    backgroundBlendMode: 'overlay, normal, multiply',
  };
}

// Slightly hand-cut capsule radius
const CAPSULE_RADIUS = '999px 990px 999px 992px / 999px 992px 999px 990px';

// ─────────── Felt Button (capsule, premium-scaled) ───────────
const BTN_COLORS = {
  gold:  { bg: PZ.gold,  shadow: 'rgba(196,123,10,0.42)', text: '#fff' },
  blue:  { bg: PZ.blue,  shadow: 'rgba(46,144,200,0.40)', text: '#fff' },
  green: { bg: PZ.green, shadow: 'rgba(74,143,53,0.40)',  text: '#fff' },
  coral: { bg: PZ.coral, shadow: 'rgba(192,64,48,0.40)',  text: '#fff' },
  lilac: { bg: PZ.lilac, shadow: 'rgba(138,92,200,0.42)', text: '#fff' },
  pink:  { bg: '#F07EC0',shadow: 'rgba(212,93,160,0.40)', text: '#fff' },
  ghost: { bg: 'transparent', shadow: 'transparent', text: PZ.text },
};

function FeltButton({ variant = 'gold', children, onClick, size = 'md', href, icon, style = {} }) {
  const [hover, setHover] = React.useState(false);
  const [pressed, setPressed] = React.useState(false);
  const c = BTN_COLORS[variant] || BTN_COLORS.gold;
  const sizes = {
    sm: { pad: '11px 22px', fs: 15, min: 0 },
    md: { pad: '16px 30px', fs: 17, min: 0 },
    lg: { pad: '20px 38px', fs: 18, min: 0 },
  }[size];

  const isGhost = variant === 'ghost';
  const base = {
    position: 'relative', display: 'inline-flex', alignItems: 'center', gap: 10,
    fontFamily: '"Baloo 2", sans-serif', fontWeight: 800, fontSize: sizes.fs,
    padding: sizes.pad, borderRadius: CAPSULE_RADIUS, border: 'none',
    color: c.text,
    cursor: 'pointer', outline: 'none',
    transition: 'transform 180ms cubic-bezier(0.34,1.56,0.64,1), box-shadow 180ms',
    ...style,
  };

  const colorStyle = isGhost ? {
    background: 'transparent',
    boxShadow: 'inset 0 0 0 2px rgba(61,44,30,0.18)',
    color: PZ.text,
  } : {
    ...feltSurface(c.bg),
    boxShadow: pressed
      ? `0 3px 8px ${c.shadow}, 0 1px 2px rgba(61,44,30,0.10)`
      : hover
        ? `0 14px 22px ${c.shadow}, 0 4px 6px rgba(61,44,30,0.10)`
        : `0 8px 16px ${c.shadow}, 0 2px 4px rgba(61,44,30,0.10)`,
    textShadow: '0 1.5px 0 rgba(0,0,0,0.22)',
    transform: pressed ? 'translateY(1px)' : hover ? 'translateY(-3px)' : 'none',
  };

  const Tag = href ? 'a' : 'button';
  const linkProps = href ? { href } : {};

  return (
    <Tag
      {...linkProps}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPressed(false); }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      style={{ ...base, ...colorStyle }}>
      <span style={{ position: 'relative', zIndex: 2, display: 'inline-flex', alignItems: 'center', gap: 10 }}>
        {children}
        {icon && <span style={{ display: 'inline-flex' }}>{icon}</span>}
      </span>
      {!isGhost && (
        <span style={{
          position: 'absolute', inset: 6, borderRadius: 'inherit',
          border: '2px dashed rgba(255,255,255,0.70)', pointerEvents: 'none',
        }} />
      )}
    </Tag>
  );
}

// ─────────── Felt Card — large premium card with stitched border ───────────
function FeltCard({ color, children, style = {}, padding = 36, stitch = true, hoverable = true }) {
  const [hover, setHover] = React.useState(false);
  const isColor = !!color;
  const surface = isColor ? feltSurface(color) : { background: PZ.surface };
  return (
    <div
      onMouseEnter={() => hoverable && setHover(true)}
      onMouseLeave={() => hoverable && setHover(false)}
      style={{
        position: 'relative', borderRadius: 28, padding,
        color: isColor ? '#fff' : PZ.text,
        ...surface,
        boxShadow: isColor
          ? '0 18px 40px rgba(61,44,30,0.18), 0 4px 10px rgba(61,44,30,0.10)'
          : '0 10px 28px rgba(61,44,30,0.08), 0 2px 6px rgba(61,44,30,0.05)',
        border: isColor ? 'none' : `1.5px solid ${PZ.border}`,
        overflow: 'hidden',
        transition: 'transform 320ms cubic-bezier(0.34,1.56,0.64,1), box-shadow 320ms',
        transform: hover ? 'translateY(-6px)' : 'none',
        ...style,
      }}>
      {stitch && isColor && (
        <span style={{
          position: 'absolute', inset: 10, borderRadius: 22,
          border: '2px dashed rgba(255,255,255,0.55)', pointerEvents: 'none', zIndex: 1,
        }} />
      )}
      <div style={{ position: 'relative', zIndex: 2, height: '100%' }}>{children}</div>
    </div>
  );
}

// ─────────── Felt Tile — small icon swatch ───────────
function FeltTile({ color = PZ.green, size = 84, radius = 20, children, style = {} }) {
  return (
    <div style={{
      position: 'relative', width: size, height: size, borderRadius: radius,
      ...feltSurface(color),
      display: 'grid', placeItems: 'center',
      boxShadow: '0 6px 12px rgba(61,44,30,0.14)',
      flexShrink: 0, color: '#fff',
      ...style,
    }}>
      <div style={{ position: 'relative', zIndex: 2 }}>{children}</div>
      <span style={{
        position: 'absolute', inset: 6, borderRadius: radius - 4,
        border: '2px dashed rgba(255,255,255,0.65)', pointerEvents: 'none', zIndex: 3,
      }} />
    </div>
  );
}

// ─────────── Pill / badge ───────────
function FeltPill({ children, color, style = {} }) {
  const isColor = !!color;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 8,
      padding: '8px 16px', borderRadius: 999,
      ...(isColor ? feltSurface(color) : { background: PZ.surface, border: `1.5px solid ${PZ.border}` }),
      color: isColor ? '#fff' : PZ.text,
      fontFamily: '"Baloo 2", sans-serif', fontWeight: 700, fontSize: 13,
      letterSpacing: '0.02em',
      boxShadow: isColor ? '0 3px 8px rgba(61,44,30,0.18)' : 'none',
      position: 'relative',
      ...style,
    }}>
      {children}
    </span>
  );
}

// ─────────── Character image with felt circle backdrop ───────────
function CharacterPortrait({ src, color = PZ.blueTint, size = 220, style = {} }) {
  return (
    <div style={{
      position: 'relative', width: size, height: size, borderRadius: '50%',
      ...feltSurface(color),
      boxShadow: '0 12px 28px rgba(61,44,30,0.15)',
      ...style,
    }}>
      <img src={src} alt="" style={{
        position: 'absolute', left: '-8%', top: '-10%',
        width: '116%', height: '116%', objectFit: 'contain', zIndex: 1,
      }} />
      <span style={{
        position: 'absolute', inset: 8, borderRadius: '50%',
        border: '2px dashed rgba(255,255,255,0.55)', pointerEvents: 'none', zIndex: 2,
      }} />
    </div>
  );
}

// ─────────── Reveal-on-scroll wrapper ───────────
// `from` accepts: 'up' (default), 'down', 'left', 'right', 'scale', 'blur', 'pop'
function Reveal({ children, delay = 0, from = 'up', as: As = 'div', once = false, threshold = 0.12, ...rest }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          el.classList.add('is-in');
          if (once) io.unobserve(el);
        } else if (!once) {
          el.classList.remove('is-in');
        }
      });
    }, { threshold, rootMargin: '0px 0px -40px 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, [once, threshold]);
  const fromCls = {
    up: '',
    down: 'from-down',
    left: 'from-left',
    right: 'from-right',
    scale: 'scale-in',
    blur: 'blur-in',
    pop: 'pop-in',
  }[from] || '';
  const cls = ['pz-reveal', fromCls, delay ? `d${delay}` : '', rest.className || ''].filter(Boolean).join(' ');
  return <As ref={ref} {...rest} className={cls}>{children}</As>;
}

// ─────────── Tilt — 3D mouse-tracking hover ───────────
// Wrap any card. Adds subtle perspective rotation following the cursor.
function Tilt({ children, max = 7, scale = 1.0, className = '', style = {}, ...rest }) {
  const ref = React.useRef(null);
  const onMove = (e) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const ry = (px - 0.5) * (max * 2);
    const rx = -(py - 0.5) * (max * 2);
    el.style.setProperty('--rx', `${rx}deg`);
    el.style.setProperty('--ry', `${ry}deg`);
    el.classList.add('is-tilting');
  };
  const onLeave = () => {
    const el = ref.current; if (!el) return;
    el.style.setProperty('--rx', `0deg`);
    el.style.setProperty('--ry', `0deg`);
    el.classList.remove('is-tilting');
  };
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={['pz-tilt', className].filter(Boolean).join(' ')}
      style={style}
      {...rest}
    >
      {children}
    </div>
  );
}

// ─────────── Scroll progress bar — fixed gradient strip at top ───────────
function ScrollProgress() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const onScroll = () => {
      const el = ref.current; if (!el) return;
      const h = document.documentElement;
      const scrolled = h.scrollTop || document.body.scrollTop;
      const max = h.scrollHeight - h.clientHeight;
      const pct = max > 0 ? (scrolled / max) * 100 : 0;
      el.style.width = pct + '%';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <div ref={ref} className="pz-scroll-progress" aria-hidden="true" />;
}

// ─────────── Parallax wrapper — translates child on scroll ───────────
// `speed` 0.1 = barely moves, 0.5 = half scroll-speed in reverse.
function Parallax({ children, speed = 0.2, className = '', style = {} }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const el = ref.current; if (!el) return;
    let raf = null;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const center = r.top + r.height / 2 - window.innerHeight / 2;
        el.style.transform = `translateY(${-center * speed}px)`;
        raf = null;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => { window.removeEventListener('scroll', onScroll); if (raf) cancelAnimationFrame(raf); };
  }, [speed]);
  return <div ref={ref} className={className} style={{ willChange: 'transform', ...style }}>{children}</div>;
}

// ─────────── Animated counter ───────────
function CountUp({ to = 0, suffix = '', duration = 1400, prefix = '' }) {
  const [val, setVal] = React.useState(0);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const start = performance.now();
          const tick = (now) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            setVal(Math.round(to * eased));
            if (t < 1) raf = requestAnimationFrame(tick);
          };
          raf = requestAnimationFrame(tick);
          io.unobserve(el);
        }
      });
    }, { threshold: 0.3 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [to, duration]);
  const fmt = val.toLocaleString();
  return <span ref={ref}>{prefix}{fmt}{suffix}</span>;
}

// expose to other Babel scripts
Object.assign(window, {
  PZ, feltSurface, CAPSULE_RADIUS,
  FeltButton, FeltCard, FeltTile, FeltPill, CharacterPortrait,
  Reveal, CountUp, Tilt, ScrollProgress, Parallax,
});
