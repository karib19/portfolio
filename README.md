# Personal Portfolio Website

A responsive personal portfolio website showcasing my skills, projects, development process, and contact information as a Full-Stack Web Developer.

**Live Portfolio:** [Visit Website](https://karib19.github.io/portfolio/)

## About

I'm Shekh Sharfuddin Ahmed Karib, a junior Full-Stack Web Developer interested in building responsive, user-friendly web applications.

I work with frontend and backend technologies, including React, JavaScript, Python, Django, Django REST Framework, and PostgreSQL.

This portfolio presents my projects, technical skills, development workflow, and contact information.

## Features

- Responsive design for desktop, tablet, and mobile devices
- Modern hero section with animated code card
- About section with profile information and statistics
- Dynamic project cards generated using JavaScript
- Project slider with navigation dots and automatic sliding
- Skills organized into categories
- Four-step development process section
- Dark and light theme toggle
- Theme preference saved using localStorage
- Intro loader displayed using sessionStorage
- Scroll reveal animations using IntersectionObserver
- Contact form integrated with EmailJS
- Resume download option
- Social media and GitHub links
- SEO metadata and social sharing metadata
- Custom SVG favicon

## Technologies Used

### Frontend
- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Tailwind CSS
- Font Awesome
- Google Fonts (Inter)

### Tools & Services
- Git
- GitHub
- VS Code
- EmailJS
- GitHub Pages

## Featured Projects

### 1. BlogSphere — Blog Website

A full-stack blogging platform with user authentication, blog publishing, categories, tags, search, and other content management features.

**Technologies:** React, Django, Django REST Framework, PostgreSQL

- [Live Demo](https://blog-project-mu-one.vercel.app/)
- [GitHub Repository](https://github.com/karib19/Blog-Project)

### 2. Learning Management System (LMS)

A full-stack learning management system with role-based access for administrators, instructors, and students.

**Technologies:** React, Django, Django REST Framework, JWT

- [Live Demo](https://lms-rosy-alpha-76.vercel.app/)
- [GitHub Repository](https://github.com/karib19/LMS_project)

### 3. Task Manager App

A task management application designed to help users organize and manage their tasks.

**Technologies:** React, Vite, Tailwind CSS

- [Live Demo](https://karib19.github.io/task_manager_app/)
- [GitHub Repository](https://github.com/karib19/task_manager_app)

### 4. Weather App

A weather application that retrieves weather information using a weather API.

**Technologies:** React, JavaScript, Axios, Weather API

- [Live Demo](https://karib19.github.io/weather_app-project/)
- [GitHub Repository](https://github.com/karib19/weather_app-project)

### 5. Spendly — Expense Tracker

A full-stack expense tracking application currently under development. It is designed to help users manage transactions, budgets, and expense categories.

**Technologies:** React, Vite, Tailwind CSS, Django, Django REST Framework, SimpleJWT, PostgreSQL

**Status:** In Development

## Portfolio Sections

The website includes the following sections:

| Section | Description |
|---|---|
| Home | Introduction and hero section |
| About | Developer information and statistics |
| Projects | Featured projects with a dynamic slider |
| Skills | Technical skills grouped by category |
| Process | Four stages of the development workflow |
| Contact | Contact form, social links, and resume download |

## Contact Form

The contact form uses **EmailJS** to send messages without requiring a custom backend.

Form fields:
- Name
- Email
- Subject
- Message

The form uses these EmailJS template variables:

- `{{from_name}}`
- `{{from_email}}`
- `{{subject}}`
- `{{message}}`

To configure EmailJS, create your own EmailJS account and update the Public Key, Service ID, and Template ID in the JavaScript configuration.

Do not publish private credentials or sensitive account information.

## Project Structure

```text
portfolio/
│
├── index.html
├── README.md
├── Karib_CV_with_photo.pdf
│
├── css/
│   └── input.css
│
├── javascript/
│   └── index.js
│
└── ├── images/
    │   ├── profile.png
    │   ├── blogsphere.png
    │   ├── lms.png
    │   ├── task-manager.png
    │   ├── weather-app.png
    │   └── spendly.png
    │
    └── favicon/
```

*Note: Update the structure and image filenames if your actual project folders use different names.*

## Run Locally

1. Clone the repository:

```bash
git clone https://github.com/karib19/portfolio.git
```

2. Open the project folder:

```bash
cd portfolio
```

3. Open `index.html` in your browser.

Alternatively, use the Live Server extension in VS Code.

## Technologies Used

### Frontend
- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Font Awesome
- Google Fonts (Inter)

### Tools & Services
- Git
- GitHub
- VS Code
- EmailJS
- GitHub Pages

**Important:** If you use the generated `output.css`, make sure your `index.html` stylesheet link points to `css/output.css`. Do not link the browser directly to the Tailwind input file.

## Deployment

This portfolio is hosted using GitHub Pages.

To deploy updates:

1. Commit your changes.
2. Push them to the GitHub repository.
3. Ensure GitHub Pages is configured for the correct branch and folder.
4. Visit the live website to verify the changes.

## Future Improvements

- Add more full-stack projects.
- Improve accessibility and performance.
- Add more interactive portfolio features.
- Continue improving the UI and user experience.

## Author

**Shekh Sharfuddin Ahmed Karib**

- GitHub: [@karib19](https://github.com/karib19)
- LinkedIn: [LinkedIn Profile](https://www.linkedin.com/in/shekh-sharfuddin-ahmed-karib)
- Email: prokarib@gmail.com
- Portfolio: [karib19.github.io/portfolio](https://karib19.github.io/portfolio/)

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.