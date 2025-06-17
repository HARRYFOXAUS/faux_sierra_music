# faux_sierra_music

This repository contains the source for the **faux_sierra_music** website and the
Ultimate Chord Reader app.

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

## Ultimate Chord Reader

The `ultimate_chord_reader.py` script provides a local workflow for
transcribing songs. Drop audio files into `input_songs/` and run
`python ultimate_chord_reader.py` to generate text chord charts in
`output_charts/`.

