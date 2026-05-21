// demo-form.jsx — Felt-textured "Request a demo" modal.
// Triggered by any element with [data-pz-open-demo] OR by clicking an
// in-page <a href="#demo">…</a> link. Stores submissions to localStorage
// and POSTs to a configurable Formspree-style endpoint so the team
// actually receives the lead.

// ── CONFIGURE: paste the Google Apps Script web app URL here after deploying.
//    See deployment instructions in the project README or plan file.
const PZ_DEMO_ENDPOINT = 'https://script.google.com/macros/s/AKfycbyugRPScqeqp5aRcdKAaWVtc4HuZ_o0TrSmDJQhuM2R7fKwzvJxC84a_qns2Ho6AHdHtQ/exec';
const PZ_DEMO_FALLBACK_EMAIL = 'hello@youroaks.com';

function DemoForm() {
  const [open, setOpen]       = React.useState(false);
  const [audience, setAudience] = React.useState('Government');
  const [submitting, setSubmitting] = React.useState(false);
  const [done, setDone]       = React.useState(false);
  const [error, setError]     = React.useState(null);
  const firstFieldRef         = React.useRef(null);

  // Open the form when:
  //  - any element with [data-pz-open-demo] is clicked
  //  - any anchor pointing at "#demo" is clicked
  React.useEffect(() => {
    const onClick = (e) => {
      const target = e.target.closest('[data-pz-open-demo], a[href="#demo"], a[href$="#demo"]');
      if (!target) return;
      e.preventDefault();
      setOpen(true);
      setDone(false);
      setError(null);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      // Focus the first field shortly after the dialog mounts
      setTimeout(() => firstFieldRef.current?.focus(), 80);
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape' && open) setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const audiences = [
    { id: 'Government', label: 'Government', color: PZ.blue,  char: __a('assets/character-ullu.png') },
    { id: 'School',     label: 'School',     color: PZ.green, char: __a('assets/character-lobo.png') },
    { id: 'Parent',     label: 'Parent',     color: PZ.coral, char: __a('assets/character-golu.png') },
    { id: 'Partner',    label: 'Partner',    color: PZ.lilac, char: __a('assets/character-panda.png') },
  ];
  const accent = audiences.find(a => a.id === audience)?.color || PZ.gold;

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const data = {
      name:         form.name.value.trim(),
      email:        form.email.value.trim(),
      org:          form.org.value.trim(),
      role:         form.role.value.trim(),
      audience,
      reach:        form.reach.value.trim(),
      message:      form.message.value.trim(),
      submitted_at: new Date().toISOString(),
      source:       location.href,
    };

    // Persist to localStorage so the lead is never lost.
    try {
      const key = 'pz-demo-leads';
      const list = JSON.parse(localStorage.getItem(key) || '[]');
      list.push(data);
      localStorage.setItem(key, JSON.stringify(list));
    } catch (err) { /* localStorage may be blocked */ }

    let networkError = null;
    if (PZ_DEMO_ENDPOINT) {
      try {
        await fetch(PZ_DEMO_ENDPOINT, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain' },
          body: JSON.stringify(data),
        });
      } catch (err) {
        networkError = err;
      }
    }

    setSubmitting(false);
    if (networkError && !PZ_DEMO_ENDPOINT) {
      // No endpoint configured — that's fine, success state will offer mailto.
    } else if (networkError) {
      setError("We couldn't send your message just now. Please try again or email us directly.");
      return;
    }
    setDone(true);
  }

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Request a Peek-A-Zoo demo"
      onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
      style={{
        position: 'fixed', inset: 0, zIndex: 100,
        background: 'rgba(42, 31, 20, 0.62)',
        backdropFilter: 'blur(6px)',
        display: 'grid', placeItems: 'center',
        padding: 20, overflowY: 'auto',
        animation: 'pz-modal-fade 240ms ease',
      }}>
      <div className="pz-demo-shell" style={{
        position: 'relative', width: '100%', maxWidth: 760,
        borderRadius: 32, overflow: 'hidden',
        background: PZ.surface,
        boxShadow: '0 36px 70px rgba(61,44,30,0.32), 0 8px 16px rgba(61,44,30,0.16)',
        animation: 'pz-modal-pop 360ms cubic-bezier(0.34,1.56,0.64,1)',
        border: `1.5px solid ${PZ.border}`,
      }}>
        {/* Felt header band */}
        <div style={{
          position: 'relative', padding: '32px 38px 28px',
          ...feltSurface(accent),
          color: '#fff', transition: 'background-color 360ms ease',
        }}>
          <span style={{
            position: 'absolute', inset: 12, borderRadius: 24,
            border: '2.5px dashed rgba(255,255,255,0.55)', pointerEvents: 'none',
          }} />
          <button
            type="button"
            aria-label="Close"
            onClick={() => setOpen(false)}
            style={{
              position: 'absolute', top: 18, right: 18, width: 40, height: 40, borderRadius: '50%',
              background: 'rgba(255,255,255,0.22)', border: 'none', color: '#fff',
              cursor: 'pointer', display: 'grid', placeItems: 'center', zIndex: 3,
            }}>
            <svg width="16" height="16" viewBox="0 0 24 24"><path d="M5 5l14 14M19 5L5 19" stroke="#fff" strokeWidth="3" strokeLinecap="round"/></svg>
          </button>

          <div style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', gap: 18 }}>
            <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(255,255,255,0.20)', overflow: 'hidden', flexShrink: 0, position: 'relative' }}>
              <img src={audiences.find(a => a.id === audience)?.char} alt="" style={{ position: 'absolute', left: '-12%', top: '-12%', width: '124%', height: '124%', objectFit: 'contain' }}/>
              <span style={{ position: 'absolute', inset: 4, borderRadius: '50%', border: '1.5px dashed rgba(255,255,255,0.6)' }}/>
            </div>
            <div>
              <div style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.92 }}>
                Request a demo
              </div>
              <div style={{ fontFamily: '"Baloo 2", sans-serif', fontWeight: 800, fontSize: 26, lineHeight: 1.15, marginTop: 4, textShadow: '0 1.5px 0 rgba(0,0,0,0.18)' }}>
                Let's transform foundational learning together.
              </div>
            </div>
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: '28px 38px 36px' }} className="pz-demo-body">
          {done ? <SuccessPanel onClose={() => setOpen(false)} email={PZ_DEMO_FALLBACK_EMAIL} /> : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              {/* Audience selector */}
              <div>
                <FieldLabel>I'm reaching out as a…</FieldLabel>
                <div className="pz-demo-audience" style={{ marginTop: 8, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
                  {audiences.map(a => {
                    const active = audience === a.id;
                    return (
                      <button
                        key={a.id} type="button"
                        onClick={() => setAudience(a.id)}
                        style={{
                          position: 'relative', cursor: 'pointer', border: 'none',
                          padding: '12px 8px', borderRadius: 14,
                          background: active ? a.color : '#F3EBE0',
                          color: active ? '#fff' : PZ.text,
                          fontFamily: '"Baloo 2", sans-serif', fontWeight: 800, fontSize: 14,
                          backgroundImage: active ? `linear-gradient(180deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0) 45%), url(${__a("assets/felt-texture.png")})` : 'none',
                          backgroundSize: active ? 'auto, 320px auto' : 'auto',
                          backgroundBlendMode: active ? 'overlay, multiply' : 'normal',
                          boxShadow: active ? `0 4px 0 ${a.color}55` : 'inset 0 0 0 1.5px rgba(160,120,80,0.18)',
                          textShadow: active ? '0 1px 0 rgba(0,0,0,0.18)' : 'none',
                          transition: 'all 180ms ease',
                        }}>
                        {active && <span style={{ position: 'absolute', inset: 4, borderRadius: 10, border: '1.5px dashed rgba(255,255,255,0.62)' }} />}
                        {a.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pz-demo-row">
                <Field label="Your name" required>
                  <input ref={firstFieldRef} name="name" type="text" required placeholder="Jane Doe" style={inputStyle(accent)} />
                </Field>
                <Field label="Work email" required>
                  <input name="email" type="email" required placeholder="jane@org.in" style={inputStyle(accent)} />
                </Field>
              </div>

              <div className="pz-demo-row">
                <Field label="Organization">
                  <input name="org" type="text" placeholder="Anganwadi · School · NGO · Family" style={inputStyle(accent)} />
                </Field>
                <Field label="Your role">
                  <input name="role" type="text" placeholder="Director, Teacher, Parent…" style={inputStyle(accent)} />
                </Field>
              </div>

              <Field label="Estimated reach (optional)">
                <input name="reach" type="text" placeholder="e.g. 1,200 children · 4 districts · 1 child" style={inputStyle(accent)} />
              </Field>

              <Field label="What would you like to explore?">
                <textarea name="message" rows={4} placeholder="Tell us a little about what you're hoping to build with Peek-A-Zoo…" style={{ ...inputStyle(accent), resize: 'vertical', minHeight: 100 }} />
              </Field>

              {error && (
                <div style={{
                  padding: '10px 14px', borderRadius: 12, background: PZ.pinkTint,
                  color: PZ.pinkDark, fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: 14,
                  border: `1.5px solid ${PZ.coralDark}33`,
                }}>{error}</div>
              )}

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', marginTop: 4 }}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: 12.5, color: PZ.textSoft, maxWidth: 320 }}>
                  We respond within 1 working day. Your details stay private — they're only used to reach you back.
                </div>
                <FeltButton variant="gold" size="md" icon={<ArrowIcon/>}>
                  {submitting ? 'Sending…' : 'Send request'}
                </FeltButton>
              </div>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @keyframes pz-modal-fade { from { opacity: 0; } to { opacity: 1; } }
        @keyframes pz-modal-pop  { from { opacity: 0; transform: translateY(20px) scale(0.96); } to { opacity: 1; transform: none; } }
        .pz-demo-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        @media (max-width: 600px) {
          .pz-demo-shell { border-radius: 24px !important; }
          .pz-demo-shell > div:first-child { padding: 26px 22px 22px !important; }
          .pz-demo-body { padding: 22px 22px 28px !important; }
          .pz-demo-row { grid-template-columns: 1fr !important; }
          .pz-demo-audience { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  );
}

function FieldLabel({ children }) {
  return (
    <span style={{
      fontFamily: '"Baloo 2", sans-serif', fontWeight: 800, fontSize: 13,
      letterSpacing: '0.06em', color: PZ.text, textTransform: 'uppercase', opacity: 0.78,
    }}>{children}</span>
  );
}

function Field({ label, required, children }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <FieldLabel>{label}{required && <span style={{ color: PZ.coralDark, marginLeft: 4 }}>·</span>}</FieldLabel>
      {children}
    </label>
  );
}

function inputStyle(accent) {
  return {
    fontFamily: 'Nunito, sans-serif', fontWeight: 600, fontSize: 15.5,
    padding: '12px 14px', borderRadius: 12,
    border: `1.5px solid ${PZ.border}`, background: PZ.bg,
    color: PZ.text, outline: 'none',
    transition: 'border 160ms ease, box-shadow 160ms ease',
    width: '100%', boxSizing: 'border-box',
  };
}

function SuccessPanel({ onClose, email, title = 'Thanks — we got it.', body }) {
  const message = body || `Someone from the Peek-A-Zoo team will reach out within one working day.`;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '16px 8px 4px' }}>
      <div style={{
        width: 84, height: 84, borderRadius: '50%',
        ...feltSurface(PZ.green),
        display: 'grid', placeItems: 'center', position: 'relative',
        boxShadow: '0 12px 24px rgba(74,143,53,0.32)',
      }}>
        <svg width="36" height="36" viewBox="0 0 24 24"><path d="M5 13l4 4 10-10" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
        <span style={{ position: 'absolute', inset: 6, borderRadius: '50%', border: '2px dashed rgba(255,255,255,0.7)' }}/>
      </div>
      <h3 style={{ fontFamily: '"Baloo 2", sans-serif', fontWeight: 800, fontSize: 26, margin: '20px 0 8px', color: PZ.text }}>
        {title}
      </h3>
      <p style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 600, fontSize: 15.5, color: PZ.text, opacity: 0.78, maxWidth: 460, lineHeight: 1.55, margin: 0 }}>
        {message} You can also email us at <a href={`mailto:${email}`} style={{ color: PZ.greenDark, fontWeight: 800 }}>{email}</a>.
      </p>
      <div style={{ marginTop: 26 }}>
        <FeltButton variant="gold" size="md" onClick={onClose} icon={<ArrowIcon/>}>Back to the site</FeltButton>
      </div>
    </div>
  );
}

Object.assign(window, { DemoForm, FieldLabel, Field, inputStyle, SuccessPanel });
