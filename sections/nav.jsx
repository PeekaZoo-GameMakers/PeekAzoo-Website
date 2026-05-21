// nav.jsx — sticky top navigation pill, felt-textured.

function Nav() {
  const links = [
    ['Home', '#top'],
    ['Challenge', '#challenge'],
    ['Solutions', '#solutions'],
    ['Platform', '#platform'],
    ['Impact', '#impact'],
    ['Safety & Trust', '#safety'],
    ['The Peek-A-Zoo World', '#world'],
    ['Contact', '#contact'],
  ];
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [active, setActive] = React.useState('#top');

  React.useEffect(() => {
    const onResize = () => { if (window.innerWidth > 1040) setOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Scroll → shrink nav after the hero
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Active section detector — observes each anchored section as it crosses
  // the viewport midline and lights up the matching nav link.
  React.useEffect(() => {
    const ids = links.map(([, href]) => href.replace('#', ''));
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sections.length) return;
    const io = new IntersectionObserver((entries) => {
      // Pick the entry with the largest visible ratio.
      const visible = entries.filter(e => e.isIntersecting);
      if (!visible.length) return;
      visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      setActive('#' + visible[0].target.id);
    }, { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] });
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <React.Fragment>
      <nav className={`pz-nav ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="pz-nav-shell">
          <a href="#top" className="pz-nav-logo" aria-label="Peek-A-Zoo home">
            <img src="assets/logo.png" alt="Peek-A-Zoo" />
          </a>
          <div className="pz-nav-links">
            {links.map(([label, href]) => (
              <a key={href} href={href} className={active === href ? 'is-active' : ''}>{label}</a>
            ))}
          </div>
          <div className="pz-nav-cta">
            <FeltButton variant="gold" size="sm" href="#demo" icon={<ArrowIcon/>}>
              Request demo
            </FeltButton>
          </div>
          <button
            className="pz-nav-mobile"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}>
            {open ? (
              <svg width="18" height="18" viewBox="0 0 24 24" style={{ position: 'relative', zIndex: 2 }}>
                <path d="M5 5l14 14M19 5L5 19" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" style={{ position: 'relative', zIndex: 2 }}>
                <path d="M4 7h16M4 12h16M4 17h16" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            )}
          </button>
        </div>
      </nav>

      <div className={`pz-mobile-sheet ${open ? 'is-open' : ''}`} role="dialog" aria-hidden={!open}>
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
        <div style={{ padding: '14px 4px 6px' }}>
          <FeltButton variant="gold" size="sm" href="#demo" icon={<ArrowIcon/>} style={{ width: '100%', justifyContent: 'center' }}>
            Request demo
          </FeltButton>
        </div>
      </div>
    </React.Fragment>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M3 7h7M7 3.5L10.5 7 7 10.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

Object.assign(window, { Nav, ArrowIcon });
