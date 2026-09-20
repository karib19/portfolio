# Karib — Personal Portfolio Website

A responsive personal portfolio website for **Sharfuddin Karib**, built with semantic HTML, Tailwind CSS v4, and vanilla JavaScript. The website presents a developer profile, featured projects, technical skills, offered services, testimonials, and contact information in a single-page layout.

## 🌐 Live Preview

- **GitHub Repository:** https://github.com/karib19/portfolio
- **Developer GitHub:** https://github.com/karib19

> Add your deployed portfolio URL here when available.

## ✨ Features

- Responsive single-page portfolio layout
- Sticky header with desktop navigation
- Mobile navigation menu with toggle functionality
- Smooth scrolling between page sections
- Hero/profile section with personal introduction
- About section
- Project showcase with links to live projects:
  - Jersey E-Commerce Website
  - Task Manager
  - Weather App
- Statistics section with animated counters
- Technical skills section with visual progress bars
- Services section covering:
  - Web Development
  - UI/UX Design
  - Database Solutions
- Client testimonials section
- Contact section with contact details and a form
- Client-side contact form validation for required fields and email format
- Scroll-based section fade-in animations using `IntersectionObserver`
- Active navigation link state based on scroll position
- Hover transitions and animations for cards, buttons, links, and icons
- Keyboard shortcut (`Ctrl + Home`) for smooth scrolling to the top
- Font Awesome icons through the Font Awesome Kit

## 🛠️ Technologies Used

- **HTML5** — Page structure and semantic sections
- **Tailwind CSS v4** — Utility-first styling and responsive design
- **JavaScript (ES6+)** — Menu interaction, animations, validation, counters, and scroll behavior
- **Font Awesome** — Icons
- **Node.js / npm** — Tailwind CSS tooling and dependency management

## 📁 Project Structure

```text
portfolio/
├── Images/
│   ├── picture.jpeg
│   ├── e-commerce_image.jpg
│   ├── porfoilo_image.jpg
│   └── student management_image.jpg
├── css/
│   ├── input.css
│   └── output.css
├── javascript/
│   └── index.js
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/karib19/portfolio.git
cd portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Build Tailwind CSS

The project uses `css/input.css` as the Tailwind source file and generates the compiled stylesheet at `css/output.css`.

```bash
npx @tailwindcss/cli -i ./css/input.css -o ./css/output.css
```

For development with automatic rebuilding:

```bash
npx @tailwindcss/cli -i ./css/input.css -o ./css/output.css --watch
```

### 4. Run the website

Open `index.html` in a browser, or use a local development server such as the VS Code Live Server extension.

## 🧩 JavaScript Functionality

The JavaScript implementation includes:

- Mobile menu open/close behavior
- Automatic mobile menu closing after selecting a link
- Smooth scrolling for internal navigation links
- Section reveal animations with `IntersectionObserver`
- Contact form required-field validation
- Basic email format validation
- Success alert and form reset after submission
- Scroll-position-based active navigation state
- Statistics counter animation when the statistics section becomes visible
- `Ctrl + Home` keyboard shortcut to return to the top

## 📌 Project Links Included in the Portfolio

| Project | Link |
|---|---|
| Jersey E-Commerce Website | https://karib19.github.io/jersey_e-commerce/ |
| Task Manager | https://karib19.github.io/task_manager_app/ |
| Weather App | https://karib19.github.io/weather_app-project/ |

## ⚠️ Current Limitations

- The contact form currently performs client-side validation and displays a success alert; it does not send messages to a backend or email service.
- The LinkedIn social link is currently a placeholder (`#`) and should be replaced with the correct profile URL.
- Terms, Privacy, and Cookies items are displayed as non-functional text elements.
- The statistics and testimonials are static content displayed in the page markup.
- The portfolio uses a compiled `css/output.css` file, so the Tailwind build command should be run after styling changes.

## 👤 Author

**Sharfuddin Karib**

- GitHub: https://github.com/karib19
- Email: prokarib@gmail.com
- Location: Kurigram, Bangladesh

## 📄 License

No license has been specified in this repository yet.
