# Portfolio Website

This is a personal portfolio website built with Next.js and React, showcasing projects, skills, blogs, and testimonials. The site is fully responsive and features a modern, visually engaging design.

## Main Pages & Sections

- **Home**: Landing page with a hero section introducing Bridgit Kanini, including animated titles and quick links to contact or learn more.
- **About**: Details about Bridgit’s background, including skills, education, certifications, and a summary of experience and interests.
- **Skills**: Visual display of technical skills and tools, with highlights on how each is used in real projects.
- **Projects**:
  - **Personal Projects**: Showcases individual projects with descriptions, tech stack, and links to GitHub and live previews.
  - **Open Source Projects**: Highlights open source contributions with similar details.
  - **All Projects**: Dedicated page to browse all projects in a grid layout.
  - **Single Project**: Dynamic route to view detailed information about a specific project.
- **Blog**: Features selected articles with links to full posts on Hashnode.
- **Testimonials**: Carousel of client reviews and feedback.
- **Contact**: Email form for direct contact, plus social media links (GitHub, LinkedIn, Twitter).

## Navigation

The navbar provides smooth scrolling to all main sections: Home, About, Skills, Projects, Reviews, Blog, and Contact.

## API & Backend

- **Email Sending**: The contact form uses [EmailJS](https://www.emailjs.com/) for client-side email delivery. There is also a placeholder for a serverless API route (`/api/send/route.js`) intended for sending emails via the Resend API, but it is currently commented out and not active.

## Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS, Framer Motion, TypeAnimation
- **Icons**: FontAwesome, Heroicons, Lucide
- **Email**: EmailJS (client-side), Resend (API placeholder)
- **Deployment**: Vercel (with redirects configured)

## Getting Started

1. Install dependencies:
   ```bash
   pnpm install
   ```
2. Run the development server:
   ```bash
   pnpm dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) to view the site.

## Customization

- Add or edit projects in `src/app/components/ProjectsData.jsx`.
- Update blog links in `src/app/components/BlogsSection.jsx`.
- Adjust skills and tools in `src/app/components/SkillsSection.jsx` and `AboutSection.jsx`.

---
