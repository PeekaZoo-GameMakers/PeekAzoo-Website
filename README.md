# PeekAZoo — fresh website build

Open `index.html` in a browser. This is an independent six-page build; it does not import the old pages, stylesheets or interaction script.

For HTTP preview, start a static server from this folder and open `http://localhost:8010`. No install or build step is required. Keep the folder’s relative structure intact. Use whichever runtime is available:

- Node: `npx --yes http-server . -p 8010 -c-1` (`-c-1` disables caching so edits appear on a normal refresh).
- Python: `python3 -m http.server 8010`.

On Windows, `python3` usually resolves to the Microsoft Store app execution alias rather than a real interpreter, and fails with “Python was not found”. Git Bash inherits the same PATH, so switching shells does not help. Use the Node command, or install Python (`winget install Python.Python.3.12`) and reopen the terminal.

If a server fails to start with `EADDRINUSE`, port 8010 is already taken. A stale server still answers requests, so the browser shows an older copy of the site instead of the current folder. Identify and stop the owner before restarting:

```powershell
Get-NetTCPConnection -LocalPort 8010 -State Listen
Get-CimInstance Win32_Process -Filter "ProcessId = <pid>" | Select-Object CommandLine
```

## Contents

- `index.html`: two-product video carousel, product routes, shared character world and company introduction.
- `peekazoo.html`: actual movement play, device, named games, Pebi/Nimu/Mimi/Jiku character introduction, visual setup, shared play, intended skills, privacy, FAQ and registration.
- `oaks-kidz.html`: learning overview/kiosk, app screenshots, teaching formats, AR, field experience and institutional enquiries.
- `about.html`, `contact.html`, `privacy.html`: fresh supporting layouts.
- `site.css`, `brand.css`, `site.js`: independent layout, live-site-inspired warm brand styling, and interactions.
- `assets/`, `media/`: selected local artwork, optimized videos and posters.

The Console home slide uses the full `peekazoo-home-film.mp4` (about 38 seconds); the Oaks Kidz slide uses the 110-second `oaks-overview.mp4`, ending before the AI-evaluation chapter. The home carousel cycles automatically and has a pause control. Product carousels advance sequentially and stop at the final clip. Videos start muted in view, pause out of view or in hidden tabs, and respect reduced-motion preferences. Native video controls provide manual playback and sound.

The Oaks Kidz overview is a new 110-second copy ending before its AI-evaluation chapter. The original media remains unchanged outside this folder. `media-notes.json` records excerpt sources.

Google Fonts and six Google Play-hosted app screenshot images require internet access. The site uses the existing Google Apps Script / Sheet enquiry endpoint and preserves its URL-encoded legacy fields. A no-CORS browser response cannot confirm that a Sheet row was saved; the form says so and offers the support email. No live test enquiry has been submitted.

## Checks and remaining verification

Passed: HTML structure, one main heading per page, unique IDs, local references/anchors, preserved policy and product facts, with clarified compatibility and purchase FAQs, JavaScript syntax, automatic playback and ordered advancement, final-slide stop, home cycling/pause, global playback exclusivity, reduced-motion behaviour, mobile menu, form field requirements, legacy request format and duplicate-submit prevention.

The interaction checks used simulated DOM events, not a rendered browser. Desktop/mobile visual inspection remains pending because local browser inspection is blocked in the current tool session. Actual Google Sheet storage remains unverified. Test these before public release.

Console review refinements: opening registration action, cropped at-home first clip, activity photograph in place of the learning bubbles, and explicit follow-up for TV requirements, included items and delivery. Exact hardware requirements, included accessories/game list and availability still require product-owner confirmation.

## Live visual language and restored content

`brand.css` applies the live site's warm cream/brown foundation, blue accents, textured surfaces, soft image shapes, rounded labels and golden buttons to the fresh journey. It does not import the old site's code or replace original root pages.

The Console includes a parent-concerns section covering participation, intended practice, local camera handling and offline play. It preserves the disclosure that gameplay usage, diagnostics and device identifiers are shared online, and avoids absolute safety or development promises.

About restores the substantive sections from the saved 4–5 November versions: the company's work, distinct family/institution products, confirmed 25,000+ learner reach in Jharkhand, disciplines behind the products and relevant contact paths. No leadership identities or unverified milestones were invented.
