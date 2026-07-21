# YMC House Buyer Website

Static one-page site for YMC House Buyer, a cash home-buying business serving Northwest Indiana & the South Suburbs of Chicago, IL. Contact info, hours, benefits, property types, and FAQ content are pulled from the live site at ymchousebuyer.com.

## Before going live, check these

- **Contact info**: phone `(708) 332-1652`, email `ymcpropertiesllc@gmail.com`, address `Munster, IN 46321`, hours `Monday–Sunday, 8am–6pm` &mdash; already wired into `index.html`, `thank-you.html`. Double-check these are still current.
- **Logo**: `images/logo.svg` and `images/favicon.svg` are simple placeholder marks &mdash; swap for your real logo if you have one.
- **Testimonials**: the three cards in the "What Our Sellers Say" section (`index.html`) are placeholders (the live site doesn't have testimonials yet). Replace with real client quotes and names, or remove the section, once you have reviews to show.
- **Service area cities**: lists in the "Service Areas" section include Northwest Indiana + South Suburbs of Chicago &mdash; edit to match exactly where you buy.
- **Business licensing**: add anything required by your state's real estate disclosure rules to the footer.

## Connect the lead form (Formspree)

The form in `index.html` (`id="lead-form"`) posts to Formspree so submissions land in your email.

1. Create a free account at https://formspree.io.
2. Create a new form and copy its form ID (looks like `xyzabcd`).
3. In `index.html`, find:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" id="lead-form">
   ```
   Replace `YOUR_FORM_ID` with your real ID.
4. On first real submission, Formspree will email you a confirmation link to activate the form.

The form redirects to `thank-you.html` after a successful submit (via the hidden `_next` field). The `_gotcha` hidden field is basic spam-bot honeypot protection.

If you'd rather use a different provider (Netlify Forms, Basin, Getform), just change the `action` URL and field names to match that provider's docs.

## Running locally

No build step. Open `index.html` directly in a browser, or serve the folder:

```bash
cd /Users/anhle/Desktop/ymc-website
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Deploying

Any static host works. Simplest options:

- **Netlify / Vercel**: drag-and-drop the folder, or connect a Git repo.
- **GitHub Pages**: push to a repo and enable Pages on the `main` branch.

## File structure

```
index.html        Main landing page (hero, form, sections, footer)
thank-you.html     Post-submit confirmation page
css/style.css      All styling
js/main.js         Mobile nav toggle, footer year, form guard
images/            Logo + favicon (SVG placeholders)
```
