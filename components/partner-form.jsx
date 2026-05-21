// partner-form.jsx — Felt-textured "Partner With Us" modal — COMPACT version.
// Triggered by [data-pz-open-partner] or <a href="#partner">…</a> clicks.
// Mirrors the visual language of DemoForm with NGO/CSR-specific fields.

const PZ_PARTNER_ENDPOINT = 'https://script.google.com/macros/s/AKfycbzok7SVPD-bOFGMPhudRPii4hBCW7a_bSIcbyAlP6TlRPn_P-DhsSEpZuzyWt6ZRgEEtw/exec';
const PZ_PARTNER_FALLBACK_EMAIL = 'partnerships@youroaks.com';

function PartnerForm() {
  const [open, setOpen] = React.useState(false);
  const [partnerTypes, setPartnerTypes] = React.useState([]);
  const [beneficiaries, setBeneficiaries] = React.useState([]);
  const [reach, setReach] = React.useState('');
  const [submitting, setSubmitting] = React.useState(false);
  const [done, setDone] = React.useState(false);
  const [error, setError] = React.useState(null);
  const firstFieldRef = React.useRef(null);

  React.useEffect(() => {
    const onClick = (e) => {
      const target = e.target.closest('[data-pz-open-partner], a[href="#partner"], a[href$="#partner"]');
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

  const PARTNER_TYPE_OPTIONS = [
    'NGO Implementation Partner', 'CSR Partner', 'Foundation',
    'Public Program Partner', 'Curriculum Partner', 'Technology Partner',
    'Distribution Partner', 'Content Partner', 'Strategic Alliance',
    'Research / Impact Partner', 'Other',
  ];
  const BENEFICIARY_OPTIONS = [
    'Anganwadi learners', 'Pre-primary learners', 'Schools',
    'Teachers', 'Parents', 'Community learning groups',
    'Rural learners', 'Underserved populations', 'Other',
  ];
  const REACH_OPTIONS = [
    'Under 500', '500–5,000', '5,000–25,000', '25,000–100,000', '100,000+',
  ];

  async function handleSubmit(e) {
    e.preventDefault();
    if (partnerTypes.length === 0) {
      setError('Please pick at least one partnership type.');
      return;
    }
    setSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const data = {
      name:           form.name.value.trim(),
      email:          form.email.value.trim(),
      phone:          form.phone.value.trim(),
      organization:   form.organization.value.trim(),
      role:           form.role.value.trim(),
      partner_types:  partnerTypes,
      geography:      form.geography.value.trim(),
      beneficiaries,
      reach,
      details:        form.details.value.trim(),
      website:        form.website.value.trim(),
      submitted_at:   new Date().toISOString(),
      source:         location.href,
      form_type:      'partner',
    };

    try {
      const key = 'pz-partner-leads';
      const list = JSON.parse(localStorage.getItem(key) || '[]');
      list.push(data);
      localStorage.setItem(key, JSON.stringify(list));
    } catch (err) { /* localStorage may be blocked */ }

    let networkError = null;
    if (PZ_PARTNER_ENDPOINT) {
      try {
        await fetch(PZ_PARTNER_ENDPOINT, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain' },
          body: JSON.stringify(data),
        });
      } catch (err) { networkError = err; }
    }

    setSubmitting(false);
    if (networkError && PZ_PARTNER_ENDPOINT) {
      setError("We couldn't send your enquiry just now. Please try again or email us directly.");
      return;
    }
    setDone(true);
  }

  if (!open) return null;
  const accent = PZ.lilac;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Partner with Peek-A-Zoo"
      onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
      style={{
        position: 'fixed', inset: 0, zIndex: 100,
        background: 'rgba(42, 31, 20, 0.62)',
        backdropFilter: 'blur(6px)',
        display: 'grid', placeItems: 'center',
        padding: 20, overflowY: 'auto',
        animation: 'pz-modal-fade 240ms ease',
      }}>
      <div className="pz-partner-shell" style={{
        position: 'relative', width: '100%', maxWidth: 580,
        borderRadius: 24, overflow: 'hidden',
        background: PZ.surface,
        boxShadow: '0 36px 70px rgba(61,44,30,0.32), 0 8px 16px rgba(61,44,30,0.16)',
        animation: 'pz-modal-pop 360ms cubic-bezier(0.34,1.56,0.64,1)',
        border: `1.5px solid ${PZ.border}`,
        margin: '24px 0',
      }}>
        {/* Felt header band — compact lilac */}
        <div style={{
          position: 'relative', padding: '20px 24px 18px',
          ...feltSurface(accent),
          color: '#fff',
        }}>
          <span style={{
            position: 'absolute', inset: 8, borderRadius: 18,
            border: '2px dashed rgba(255,255,255,0.55)', pointerEvents: 'none',
          }} />
          <button
            type="button"
            aria-label="Close"
            onClick={() => setOpen(false)}
            style={{
              position: 'absolute', top: 12, right: 12, width: 32, height: 32, borderRadius: '50%',
              background: 'rgba(255,255,255,0.22)', border: 'none', color: '#fff',
              cursor: 'pointer', display: 'grid', placeItems: 'center', zIndex: 3,
            }}>
            <svg width="14" height="14" viewBox="0 0 24 24"><path d="M5 5l14 14M19 5L5 19" stroke="#fff" strokeWidth="3" strokeLinecap="round"/></svg>
          </button>

          <div style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(255,255,255,0.20)', overflow: 'hidden', flexShrink: 0, position: 'relative' }}>
              <img src="assets/character-mimi.png" alt="" style={{ position: 'absolute', left: '-12%', top: '-12%', width: '124%', height: '124%', objectFit: 'contain' }}/>
              <span style={{ position: 'absolute', inset: 3, borderRadius: '50%', border: '1.5px dashed rgba(255,255,255,0.6)' }}/>
            </div>
            <div>
              <div style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.92 }}>
                Partner with us
              </div>
              <div style={{ fontFamily: '"Baloo 2", sans-serif', fontWeight: 800, fontSize: 19, lineHeight: 1.15, marginTop: 2, textShadow: '0 1.5px 0 rgba(0,0,0,0.18)' }}>
                Let&apos;s scale learning together.
              </div>
            </div>
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: '20px 24px 24px' }} className="pz-partner-body">
          {done ? (
            <SuccessPanel onClose={() => setOpen(false)} email={PZ_PARTNER_FALLBACK_EMAIL} title="Thanks — your enquiry's in." body="Our partnerships team will be in touch within two working days." />
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div className="pz-partner-row">
                <Field label="Full name" required>
                  <input ref={firstFieldRef} name="name" type="text" required placeholder="Jane Doe" style={compactInput(accent)} />
                </Field>
                <Field label="Work email" required>
                  <input name="email" type="email" required placeholder="jane@org.in" style={compactInput(accent)} />
                </Field>
              </div>

              <div className="pz-partner-row">
                <Field label="Phone" required>
                  <input name="phone" type="tel" required placeholder="+91 9..." style={compactInput(accent)} />
                </Field>
                <Field label="Role" required>
                  <input name="role" type="text" required placeholder="Director, CSR Lead…" style={compactInput(accent)} />
                </Field>
              </div>

              <Field label="Organization name" required>
                <input name="organization" type="text" required placeholder="Your NGO, foundation, or company" style={compactInput(accent)} />
              </Field>

              <Field label="Partnership type" required>
                <MultiSelectDropdown
                  options={PARTNER_TYPE_OPTIONS}
                  value={partnerTypes}
                  onChange={setPartnerTypes}
                  placeholder="Select partnership types…"
                  accent={accent}
                />
              </Field>

              <div className="pz-partner-row">
                <Field label="Geography of interest" required>
                  <input name="geography" type="text" required placeholder="e.g. India · Jharkhand" style={compactInput(accent)} />
                </Field>
                <Field label="Estimated reach">
                  <SelectDropdown
                    options={REACH_OPTIONS}
                    value={reach}
                    onChange={setReach}
                    placeholder="Choose reach…"
                    accent={accent}
                  />
                </Field>
              </div>

              <Field label="Target beneficiary group">
                <MultiSelectDropdown
                  options={BENEFICIARY_OPTIONS}
                  value={beneficiaries}
                  onChange={setBeneficiaries}
                  placeholder="Select beneficiaries…"
                  accent={accent}
                />
              </Field>

              <Field label="Tell us about the opportunity" required>
                <textarea name="details" rows={3} required
                  placeholder="Goals, implementation model, geography, how you'd like to collaborate."
                  style={{ ...compactInput(accent), resize: 'vertical', minHeight: 78 }} />
              </Field>

              <Field label="Website · optional">
                <input name="website" type="url" placeholder="https://" style={compactInput(accent)} />
              </Field>

              {error && (
                <div style={{
                  padding: '8px 12px', borderRadius: 10, background: PZ.pinkTint,
                  color: PZ.pinkDark, fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: 13,
                  border: `1.5px solid ${PZ.coralDark}33`,
                }}>{error}</div>
              )}

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap', marginTop: 2 }}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: 11.5, color: PZ.textSoft, maxWidth: 260, lineHeight: 1.35 }}>
                  Reviewed within 2 working days. Details stay private.
                </div>
                <FeltButton variant="lilac" size="md" icon={<ArrowIcon/>}>
                  {submitting ? 'Sending…' : 'Submit enquiry'}
                </FeltButton>
              </div>
            </form>
          )}
        </div>
      </div>

      <style>{`
        .pz-partner-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        @media (max-width: 560px) {
          .pz-partner-shell { border-radius: 20px !important; margin: 12px 0 !important; }
          .pz-partner-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

// ─────────── Compact input style ───────────
function compactInput(accent) {
  return {
    fontFamily: 'Nunito, sans-serif', fontWeight: 600, fontSize: 14,
    padding: '9px 12px', borderRadius: 10,
    border: `1.5px solid ${PZ.border}`, background: PZ.bg,
    color: PZ.text, outline: 'none',
    transition: 'border 160ms ease, box-shadow 160ms ease',
    width: '100%', boxSizing: 'border-box',
  };
}

// ─────────── Single-select dropdown ───────────
function SelectDropdown({ options, value, onChange, placeholder, accent }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const onDocClick = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, []);

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button type="button" onClick={() => setOpen(o => !o)}
        style={{
          ...compactInput(accent),
          textAlign: 'left', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8,
          color: value ? PZ.text : 'rgba(105,104,104,1)',
          borderColor: open ? accent : PZ.border,
          boxShadow: open ? `0 0 0 3px ${accent}33` : 'none',
        }}>
        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {value || placeholder}
        </span>
        <svg width="12" height="12" viewBox="0 0 12 12" style={{ flexShrink: 0, transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 180ms ease' }}>
          <path d="M3 4.5L6 7.5L9 4.5" stroke={PZ.textSoft} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
      </button>
      {open && (
        <div style={{
          position: 'absolute', top: 'calc(100% + 6px)', left: 0, right: 0, zIndex: 5,
          background: PZ.surface, borderRadius: 12,
          border: `1.5px solid ${PZ.border}`,
          boxShadow: '0 12px 28px rgba(61,44,30,0.18), 0 4px 8px rgba(61,44,30,0.10)',
          maxHeight: 220, overflowY: 'auto', padding: 4,
        }}>
          {options.map(opt => {
            const active = value === opt;
            return (
              <button key={opt} type="button"
                onClick={() => { onChange(opt); setOpen(false); }}
                style={{
                  display: 'block', width: '100%', textAlign: 'left',
                  padding: '8px 10px', borderRadius: 8,
                  background: active ? `${accent}22` : 'transparent',
                  color: active ? PZ.text : PZ.text,
                  border: 'none', cursor: 'pointer',
                  fontFamily: 'Nunito, sans-serif', fontWeight: active ? 800 : 600, fontSize: 14,
                  transition: 'background 140ms ease',
                }}
                onMouseEnter={(e) => { if (!active) e.currentTarget.style.background = `${accent}14`; }}
                onMouseLeave={(e) => { if (!active) e.currentTarget.style.background = 'transparent'; }}>
                {opt}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ─────────── Multi-select dropdown with checkboxes ───────────
function MultiSelectDropdown({ options, value, onChange, placeholder, accent }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const onDocClick = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, []);

  const toggle = (opt) => {
    if (value.includes(opt)) onChange(value.filter(v => v !== opt));
    else onChange([...value, opt]);
  };

  const summary = value.length === 0
    ? placeholder
    : value.length === 1
      ? value[0]
      : `${value.length} selected`;

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button type="button" onClick={() => setOpen(o => !o)}
        style={{
          ...compactInput(accent),
          textAlign: 'left', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8,
          color: value.length ? PZ.text : 'rgba(105,104,104,1)',
          borderColor: open ? accent : PZ.border,
          boxShadow: open ? `0 0 0 3px ${accent}33` : 'none',
        }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 8, overflow: 'hidden' }}>
          {value.length > 0 && (
            <span style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              minWidth: 22, height: 20, padding: '0 6px', borderRadius: 999,
              background: accent, color: '#fff',
              fontFamily: '"Baloo 2", sans-serif', fontWeight: 800, fontSize: 11,
              flexShrink: 0,
            }}>{value.length}</span>
          )}
          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{summary}</span>
        </span>
        <svg width="12" height="12" viewBox="0 0 12 12" style={{ flexShrink: 0, transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 180ms ease' }}>
          <path d="M3 4.5L6 7.5L9 4.5" stroke={PZ.textSoft} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
      </button>
      {open && (
        <div style={{
          position: 'absolute', top: 'calc(100% + 6px)', left: 0, right: 0, zIndex: 5,
          background: PZ.surface, borderRadius: 12,
          border: `1.5px solid ${PZ.border}`,
          boxShadow: '0 12px 28px rgba(61,44,30,0.18), 0 4px 8px rgba(61,44,30,0.10)',
          maxHeight: 260, overflowY: 'auto', padding: 4,
        }}>
          {options.map(opt => {
            const active = value.includes(opt);
            return (
              <button key={opt} type="button"
                onClick={() => toggle(opt)}
                style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  width: '100%', textAlign: 'left',
                  padding: '8px 10px', borderRadius: 8,
                  background: active ? `${accent}22` : 'transparent',
                  border: 'none', cursor: 'pointer',
                  fontFamily: 'Nunito, sans-serif', fontWeight: active ? 800 : 600, fontSize: 14,
                  color: PZ.text,
                  transition: 'background 140ms ease',
                }}
                onMouseEnter={(e) => { if (!active) e.currentTarget.style.background = `${accent}14`; }}
                onMouseLeave={(e) => { if (!active) e.currentTarget.style.background = 'transparent'; }}>
                <span style={{
                  display: 'inline-grid', placeItems: 'center',
                  width: 18, height: 18, borderRadius: 5,
                  background: active ? accent : '#fff',
                  border: active ? `2px solid ${accent}` : `1.5px solid ${PZ.border}`,
                  flexShrink: 0,
                  transition: 'all 140ms ease',
                }}>
                  {active && (
                    <svg width="11" height="11" viewBox="0 0 12 12">
                      <path d="M2.5 6.2l2.4 2.4L10 3.5" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                  )}
                </span>
                <span>{opt}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

Object.assign(window, { PartnerForm });
