// partner-form.jsx — Felt-textured "Partner With Us" modal.
// Triggered by [data-pz-open-partner] or <a href="#partner">…</a> clicks.
// Mirrors the visual language of DemoForm with NGO/CSR-specific fields.

const PZ_PARTNER_ENDPOINT = 'https://script.google.com/macros/s/AKfycbzok7SVPD-bOFGMPhudRPii4hBCW7a_bSIcbyAlP6TlRPn_P-DhsSEpZuzyWt6ZRgEEtw/exec';
const PZ_PARTNER_FALLBACK_EMAIL = 'partnerships@youroaks.com';

function PartnerForm() {
  const [open, setOpen] = React.useState(false);
  const [step, setStep] = React.useState(1);
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
      setStep(1);
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

  function toggle(list, setList, value) {
    setList(list.includes(value) ? list.filter(v => v !== value) : [...list, value]);
  }

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
        position: 'relative', width: '100%', maxWidth: 820,
        borderRadius: 32, overflow: 'hidden',
        background: PZ.surface,
        boxShadow: '0 36px 70px rgba(61,44,30,0.32), 0 8px 16px rgba(61,44,30,0.16)',
        animation: 'pz-modal-pop 360ms cubic-bezier(0.34,1.56,0.64,1)',
        border: `1.5px solid ${PZ.border}`,
        margin: '40px 0',
      }}>
        {/* Felt header band — lilac for partners */}
        <div style={{
          position: 'relative', padding: '32px 38px 28px',
          ...feltSurface(accent),
          color: '#fff',
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
              <img src={__a("assets/character-mimi.png")} alt="" style={{ position: 'absolute', left: '-12%', top: '-12%', width: '124%', height: '124%', objectFit: 'contain' }}/>
              <span style={{ position: 'absolute', inset: 4, borderRadius: '50%', border: '1.5px dashed rgba(255,255,255,0.6)' }}/>
            </div>
            <div>
              <div style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.92 }}>
                Partner with us
              </div>
              <div style={{ fontFamily: '"Baloo 2", sans-serif', fontWeight: 800, fontSize: 26, lineHeight: 1.15, marginTop: 4, textShadow: '0 1.5px 0 rgba(0,0,0,0.18)' }}>
                Let's scale inclusive foundational learning together.
              </div>
            </div>
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: '28px 38px 36px' }} className="pz-partner-body">
          {done ? (
            <SuccessPanel onClose={() => setOpen(false)} email={PZ_PARTNER_FALLBACK_EMAIL} title="Thanks — your enquiry's in." body="Our partnerships team will be in touch within two working days to set up a call." />
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
              {/* Section: Contact */}
              <FormSection label="Contact" color={accent}>
                <div className="pz-partner-row">
                  <Field label="Full name" required>
                    <input ref={firstFieldRef} name="name" type="text" required placeholder="Jane Doe" style={inputStyle(accent)} />
                  </Field>
                  <Field label="Work email" required>
                    <input name="email" type="email" required placeholder="jane@org.in" style={inputStyle(accent)} />
                  </Field>
                </div>
                <div className="pz-partner-row">
                  <Field label="Phone number" required>
                    <input name="phone" type="tel" required placeholder="+91 9..." style={inputStyle(accent)} />
                  </Field>
                  <Field label="Job title / role" required>
                    <input name="role" type="text" required placeholder="Director of Programs, CSR Lead…" style={inputStyle(accent)} />
                  </Field>
                </div>
                <Field label="Organization name" required>
                  <input name="organization" type="text" required placeholder="Your NGO, foundation, or company" style={inputStyle(accent)} />
                </Field>
              </FormSection>

              {/* Section: Partner qualification */}
              <FormSection label="Partner qualification" color={accent}>
                <Field label="Partnership type · pick any that apply" required>
                  <ChipMulti
                    options={PARTNER_TYPE_OPTIONS}
                    value={partnerTypes}
                    onToggle={(v) => toggle(partnerTypes, setPartnerTypes, v)}
                    accent={accent}
                  />
                </Field>

                <Field label="Geography of interest" required>
                  <input name="geography" type="text" required placeholder="e.g. India · Jharkhand · 4 districts · Global" style={inputStyle(accent)} />
                </Field>

                <Field label="Target beneficiary group">
                  <ChipMulti
                    options={BENEFICIARY_OPTIONS}
                    value={beneficiaries}
                    onToggle={(v) => toggle(beneficiaries, setBeneficiaries, v)}
                    accent={accent}
                  />
                </Field>

                <Field label="Estimated reach / beneficiary size">
                  <div className="pz-reach-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 8 }}>
                    {REACH_OPTIONS.map(opt => {
                      const active = reach === opt;
                      return (
                        <button
                          key={opt} type="button"
                          onClick={() => setReach(active ? '' : opt)}
                          style={{
                            position: 'relative', cursor: 'pointer', border: 'none',
                            padding: '10px 6px', borderRadius: 12,
                            background: active ? accent : '#F3EBE0',
                            color: active ? '#fff' : PZ.text,
                            fontFamily: '"Baloo 2", sans-serif', fontWeight: 700, fontSize: 13,
                            backgroundImage: active ? `linear-gradient(180deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0) 45%), url(${__a("assets/felt-texture.png")})` : 'none',
                            backgroundSize: active ? 'auto, 320px auto' : 'auto',
                            backgroundBlendMode: active ? 'overlay, multiply' : 'normal',
                            boxShadow: active ? `0 3px 0 ${accent}55` : 'inset 0 0 0 1.5px rgba(160,120,80,0.18)',
                            textShadow: active ? '0 1px 0 rgba(0,0,0,0.18)' : 'none',
                            transition: 'all 180ms ease',
                            whiteSpace: 'nowrap',
                          }}>
                          {active && <span style={{ position: 'absolute', inset: 3, borderRadius: 10, border: '1.5px dashed rgba(255,255,255,0.62)' }} />}
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </Field>
              </FormSection>

              {/* Section: Free text + optional */}
              <FormSection label="The opportunity" color={accent}>
                <Field label="Tell us about the partnership opportunity" required>
                  <textarea name="details" rows={5} required
                    placeholder="Describe your goals, implementation model, geography, and how you'd like to collaborate."
                    style={{ ...inputStyle(accent), resize: 'vertical', minHeight: 120 }} />
                </Field>
                <Field label="Website / organization URL · optional">
                  <input name="website" type="url" placeholder="https://" style={inputStyle(accent)} />
                </Field>
              </FormSection>

              {error && (
                <div style={{
                  padding: '10px 14px', borderRadius: 12, background: PZ.pinkTint,
                  color: PZ.pinkDark, fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: 14,
                  border: `1.5px solid ${PZ.coralDark}33`,
                }}>{error}</div>
              )}

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', marginTop: 4 }}>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: 12.5, color: PZ.textSoft, maxWidth: 340 }}>
                  Partnership enquiries are reviewed within two working days. Your details stay private.
                </div>
                <FeltButton variant="lilac" size="md" icon={<ArrowIcon/>}>
                  {submitting ? 'Sending…' : 'Submit partnership enquiry'}
                </FeltButton>
              </div>
            </form>
          )}
        </div>
      </div>

      <style>{`
        .pz-partner-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        @media (max-width: 600px) {
          .pz-partner-shell { border-radius: 24px !important; margin: 16px 0 !important; }
          .pz-partner-shell > div:first-child { padding: 26px 22px 22px !important; }
          .pz-partner-body { padding: 22px 22px 28px !important; }
          .pz-partner-row { grid-template-columns: 1fr !important; }
          .pz-reach-row { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  );
}

function FormSection({ label, color, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10,
        fontFamily: '"Baloo 2", sans-serif', fontWeight: 800, fontSize: 12,
        letterSpacing: '0.16em', textTransform: 'uppercase', color: PZ.textSoft,
        paddingBottom: 4, borderBottom: `1.5px dashed ${PZ.border}`,
      }}>
        <span style={{ width: 8, height: 8, borderRadius: 999, background: color }} />
        {label}
      </div>
      {children}
    </div>
  );
}

function ChipMulti({ options, value, onToggle, accent }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
      {options.map(opt => {
        const active = value.includes(opt);
        return (
          <button key={opt} type="button"
            onClick={() => onToggle(opt)}
            style={{
              position: 'relative', cursor: 'pointer', border: 'none',
              padding: '8px 14px', borderRadius: 999,
              background: active ? accent : '#F3EBE0',
              color: active ? '#fff' : PZ.text,
              fontFamily: '"Baloo 2", sans-serif', fontWeight: 700, fontSize: 13,
              backgroundImage: active ? `linear-gradient(180deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0) 45%), url(${__a("assets/felt-texture.png")})` : 'none',
              backgroundSize: active ? 'auto, 320px auto' : 'auto',
              backgroundBlendMode: active ? 'overlay, multiply' : 'normal',
              boxShadow: active ? `0 3px 0 ${accent}55` : 'inset 0 0 0 1.5px rgba(160,120,80,0.18)',
              textShadow: active ? '0 1px 0 rgba(0,0,0,0.18)' : 'none',
              transition: 'all 180ms ease',
              display: 'inline-flex', alignItems: 'center', gap: 6,
            }}>
            {active && <span style={{ display: 'inline-flex', width: 14, height: 14, borderRadius: 999, background: 'rgba(255,255,255,0.28)', placeItems: 'center' }}>
              <svg width="9" height="9" viewBox="0 0 12 12" style={{ margin: 'auto' }}><path d="M2.5 6.2l2.4 2.4L10 3.5" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
            </span>}
            {opt}
            {active && <span style={{ position: 'absolute', inset: 4, borderRadius: 999, border: '1.5px dashed rgba(255,255,255,0.62)' }} />}
          </button>
        );
      })}
    </div>
  );
}

Object.assign(window, { PartnerForm });
