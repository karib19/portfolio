# Sharfuddin Karib — Personal Portfolio

A modern, responsive personal portfolio website for **Sharfuddin Karib**, a Junior Full-Stack Web Developer specializing in **React, Django, Django REST Framework, and PostgreSQL**.

The portfolio showcases my projects, technical skills, development process, background, and contact information through a clean single-page experience.

---

## 🌐 Live Preview

* **Live Website:** https://karib19.github.io/portfolio/
* **GitHub Repository:** https://github.com/karib19/portfolio
* **Developer GitHub:** https://github.com/karib19
* **LinkedIn:** https://www.linkedin.com/in/shekh-sharfuddin-ahmed-karib

---



## ✨ Features

* Responsive single-page portfolio layout
* Clean dark-themed modern UI
* Sticky navigation header
* Responsive mobile navigation menu
* Smooth scrolling between sections
* Hero section with developer introduction
* Technology stack highlights
* About section with profile information
* Project showcase with:

  * Project screenshots
  * Project descriptions
  * Technology badges
  * Live Demo links
  * GitHub repository links
* Project carousel/slider with navigation controls
* Technical skills section
* Development process section
* Contact section with:

  * Email
  * Location
  * Social links
  * Contact form
* EmailJS integration for contact form submission
* Client-side contact form validation
* Scroll-based reveal animations using `IntersectionObserver`
* Automatic hero code-card animation
* Project slider auto-play
* Hover animations and transitions
* Responsive layouts for desktop, tablet, and mobile
* SEO meta tags
* Open Graph metadata
* Twitter Card metadata
* Inline SVG favicon
* Font Awesome icons
* Downloadable CV
* Dynamic copyright year
* Keyboard support for closing the mobile navigation with `Escape`

---

## 🛠️ Technologies Used

### Frontend

* **HTML5**
* **CSS3**
* **Tailwind CSS v4**
* **JavaScript (ES6+)**

### Libraries & Services

* **EmailJS** — Contact form email delivery
* **Font Awesome** — Icons
* **Google Fonts** — Inter
* **IntersectionObserver API** — Scroll reveal animations
* **LocalStorage** — Client-side preference/data storage where required

### Development Tools

* **Node.js**
* **npm**
* **Git**
* **GitHub**
* **VS Code**

---

## 📁 Project Structure

```text
portfolio/
│
├── Images/
│   ├── picture.jpeg
│   ├── blog.png
│   ├── LMS.png
│   ├── task_manager.png
│   └── weather_app.png
│
├── css/
│   └── input.css
│
├── javascript/
│   └── index.js
│
├── Sharfuddin_Karib_CV.pdf
├── index.html
├── package.json
├── package-lock.json
├── LICENSE
└── README.md
```

---

## 📄 Portfolio Sections

The website currently contains the following main sections:

### 1. Hero

Introduces me as a Junior Full-Stack Web Developer and highlights my primary technologies:

* React
* Django
* Django REST Framework
* PostgreSQL

It also includes quick links to view projects, contact me, and download my CV.

### 2. About

Provides information about my development background, current focus, and approach to building practical web applications.

### 3. Projects

The portfolio currently showcases four projects.

| Project                    | Technologies                   | Live Demo                                      | Source Code                                    |
| -------------------------- | ------------------------------ | ---------------------------------------------- | ---------------------------------------------- |
| BlogSphere                 | React, Django, DRF, PostgreSQL | https://blog-project-mu-one.vercel.app/        | https://github.com/karib19/Blog-Project        |
| Learning Management System | React, Django, DRF, JWT        | https://lms-rosy-alpha-76.vercel.app/          | https://github.com/karib19/LMS_project         |
| Task Manager               | React, Vite, Tailwind CSS      | https://karib19.github.io/task_manager_app/    | https://github.com/karib19/task_manager_app    |
| Weather App                | React, Weather API, Axios      | https://karib19.github.io/weather_app-project/ | https://github.com/karib19/weather_app-project |

### 4. Skills

Technical skills are grouped into:

* **Frontend**

  * HTML
  * CSS
  * JavaScript
  * React
  * Tailwind CSS

* **Backend**

  * Python
  * Django
  * Django REST Framework
  * REST APIs
  * JWT Authentication

* **Database**

  * PostgreSQL
  * MySQL

* **Tools**

  * Git
  * GitHub
  * VS Code
  * PyCharm

### 5. Development Process

The portfolio presents a simple development workflow:

1. Planning
2. Building
3. Testing
4. Deployment

### 6. Contact

Visitors can contact me through the portfolio contact form or directly through my available contact information.

---

## 📧 Contact Form

The portfolio uses **EmailJS** to handle contact form submissions without requiring a custom backend.

The form collects:

* Name
* Email
* Message

EmailJS handles the delivery of submitted messages to the configured email account.

### EmailJS Setup

Create an EmailJS account and configure an email service and template.

Then update the following values in:

```text
javascript/index.js
```

```javascript
emailjs.init({
  publicKey: "YOUR_PUBLIC_KEY"
});

const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
```

The EmailJS template should support the variables used by the contact form.

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/karib19/portfolio.git
```

Navigate into the project:

```bash
cd portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Build Tailwind CSS

The project uses:

```text
css/input.css
```

as the Tailwind CSS source file and generates:

```text
css/output.css
```

Run:

```bash
npx @tailwindcss/cli -i ./css/input.css -o ./css/output.css
```

For development with automatic rebuilding:

```bash
npx @tailwindcss/cli -i ./css/input.css -o ./css/output.css --watch
```

### 4. Run the Website

You can open `index.html` directly in a browser.

For a better development experience, use a local development server such as the **VS Code Live Server** extension.

---

## ⚙️ JavaScript Functionality

The portfolio uses vanilla JavaScript for interactive features including:

* Responsive mobile navigation
* Mobile navigation open/close behavior
* Automatic hero code-card slider
* Project carousel
* Project carousel auto-play
* Project navigation buttons
* Scroll reveal animations
* `IntersectionObserver` based animations
* Dynamic footer year
* Keyboard interaction
* Contact form handling
* EmailJS integration
* Client-side form validation

---

## 📱 Responsive Design

The portfolio is designed to work across different screen sizes:

* Desktop
* Laptop
* Tablet
* Mobile

The layout automatically adapts navigation, project cards, grids, typography, spacing, and forms based on the viewport size.

---

## 🎨 Design

The current portfolio uses a dark, minimal visual style with:

* Dark green/black background
* Green accent color
* Rounded cards
* Subtle borders
* Minimal shadows
* Smooth hover transitions
* Scroll-based entrance animations
* Clean typography using Inter

The design focuses on keeping the content readable while presenting projects and technical skills in a professional way.

---

## 📌 Future Improvements

Possible future improvements include:

* Adding more portfolio projects
* Adding a dedicated project details page
* Improving accessibility further
* Adding additional performance optimizations
* Adding more advanced project filtering
* Adding a blog section
* Improving contact form feedback
* Adding analytics
* Further optimizing mobile interactions

---

## 👤 Author

### Sharfuddin Karib

Junior Full-Stack Web Developer focused on building practical web applications using **React and Django**.

* **GitHub:** https://github.com/karib19
* **LinkedIn:** https://www.linkedin.com/in/shekh-sharfuddin-ahmed-karib
* **Email:** [prokarib@gmail.com](mailto:prokarib@gmail.com)
* **Location:** Monir Char, Nageswari, Kurigram, Bangladesh

---

## 📄 License

This project is licensed under the **MIT License**.

See the [LICENSE](LICENSE) file for details.
