# faux_sierra_music

This repository contains the source for the **faux_sierra_music** website.  The
site is a small collection of static HTML pages served through GitHub Pages.

## Deployment

The site is hosted from the `main` branch using GitHub Pages.  The `CNAME`
file configures the custom domain:

```
www.fauxsierramusic.com
```

Pushing changes to `main` will automatically update the live site.

## Updating pages

* Edit the HTML files directly (`index.html`, `harry.html`,
  `choreography.html`).
* Shared styles and JavaScript live in `style.css` and `app.js`.
* To create a new page, copy an existing HTML file and modify the content
  inside the `<div class="content-container">` area.

After editing files, commit the changes and push to GitHub.

## Development tips

No build step is required.  You can open the HTML files locally in a browser to
preview changes.  If you introduce additional dependencies, ensure they do not
require server-side processing so the site remains fully static.
