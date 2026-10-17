# ITEnable Website

Company portfolio website for **ITEnable** - *Innovation for a brighter future*.
IT solutions in Ngleshie Amanfro, Greater Accra, Ghana: web design, custom software, mobile apps, networking and IT support.

## Pages

| Page | File |
| --- | --- |
| About | `index.html` |
| Expertise | `skills.html` |
| Services | `services.html` |
| Experience | `experience.html` |
| Process | `process.html` |
| Portfolio | `portfolio.html` |
| Testimonials | `testimonials.html` |
| Contact | `contact.html` |

## Features

- Fully responsive, with a hamburger menu on mobile
- Bootstrap 5 and Material Icons, in the ITEnable navy and yellow
- SEO ready: meta tags, Open Graph and Twitter cards, JSON-LD, sitemap.xml, robots.txt
- Contact form delivered by email (FormSubmit.co), no backend needed
- Portfolio filters, animated skill bars and rings, accessible navigation

## Contact

- Email: itenablegh@gmail.com, Abdulwadud.shaibu@gmail.com
- Phone / WhatsApp: +233 59 955 5305, +233 50 312 3315
- Location: Ngleshie Amanfro, Greater Accra, Ghana

## Project structure

```
index.html ... contact.html   Pages
404.html                      Not-found page
sitemap.xml, robots.txt       SEO files
assets/css/style.css          Styles (brand colours at the top)
assets/js/main.js             Menu, portfolio filter, contact form
assets/img/                   Logo, favicons, social thumbnail, portfolio images
```

## Editing

Replace `assets/img/logo.png` with your logo (cropped tight to the wordmark).
Page text lives in the HTML files. If you use the PHP source version, edit `includes/config.php` and `includes/data.php`, then rebuild:

```bash
php build.php https://your-live-address ../upload-to-github
```

## License

(c) ITEnable. All rights reserved.
