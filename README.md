# Interactive Portfolio Website

Task 2: A personal portfolio built with HTML, CSS, and JavaScript.

## Files

- `index.html`: introduction, about, skills, projects, achievements, and contact.
- `css/style.css`: responsive design, Flexbox, Grid, animation, and hover effects.
- `js/script.js`: mobile menu, project filters, local form validation, and footer year.

## Run

Open `index.html` in a browser. No installation is needed.

Optionally, run `python -m http.server 8000` from this folder, then open
http://localhost:8000. On Windows, `py -m http.server 8000` also works.

## Customize

Edit your introduction, skills, projects, and achievements in `index.html`.
Change the CSS color variables to customize the theme. The initials avatar
works without a photo. Project covers are illustrations, not screenshots.

## Contact form

The form is a frontend demo. It checks required fields and email format,
rejects blank names/messages, and displays confirmation locally. It does not
send messages or store data. A backend or form service is needed for delivery.

## Check before submission

Try phone, tablet, and desktop widths. Test the mobile menu, section links,
all three filters, keyboard navigation, and valid/invalid form entries.
With JavaScript disabled, section links and all projects remain available.