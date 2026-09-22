# Peekazoo marketing site

A static one-page site. No build step, no server code: open `index.html` or upload the folder to any static host.

## Local preview

Because the page loads its assets over HTTP, open it through a tiny local server rather than double-clicking the file:

```sh
python3 -m http.server 8000
npx --yes http-server . -p 8000
# then visit http://localhost:8000
```

## Deploy on GitHub Pages

1. Push this folder to a repository.
2. Repo **Settings → Pages**.
3. Source: **Deploy from a branch**, branch `main`, folder `/ (root)`.
4. Save. The URL appears within a minute or two.

To use a custom domain, add it under Settings → Pages and create a `CNAME` file containing just the domain.

## Signup form

Submissions POST to a Google Apps Script web app that appends a row to a Google Sheet. The endpoint lives in `index.html` — search for `sheetEndpoint`. Swap that URL to point at a different sheet.

Name and phone are required; email and pincode are optional.

## Structure

```
index.html      the whole page (markup + logic)
support.js      renderer runtime — required
image-slot.js   drag-and-drop image placeholder used in the family-time section
assets/         videos, photos, characters, logo, felt texture
_ds/            the two design systems' stylesheets and bundles
```

## Notes

- The hero plays two muted videos in a crossfading carousel; muted autoplay is what browsers permit without a user gesture.
- Store links in the footer point at the live Play Store and App Store listings.
- Photos and hero videos are placeholders from early art passes — replace the files in `assets/` keeping the same names and nothing else needs to change.
