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

  React.useEffect(() => {
    const onResize = () => { if (window.innerWidth > 1040) setOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <React.Fragment>
      <nav className="pz-nav">
        <div className="pz-nav-shell">
          <a href="#top" className="pz-nav-logo" aria-label="Peek-A-Zoo home">
            <img src={__a("assets/logo.png")} alt="Peek-A-Zoo" />
          </a>
          <div className="pz-nav-links">
            {links.map(([label, href]) => (
              <a key={href} href={href}>{label}</a>
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
