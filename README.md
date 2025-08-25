# Portfolio

A modern, responsive portfolio website built with Next.js 13+ and React, showcasing my work, skills, and experience as a software developer.

## Features

- **Modern UI/UX**: Clean, responsive design with smooth animations using Framer Motion
- **Performance Optimized**: Built with Next.js for optimal performance and SEO
- **Interactive Elements**: Animated components and transitions for better user engagement
- **Dark/Light Mode**: Built-in theme support (if implemented)
- **Contact Form**: Integrated with EmailJS for easy communication

## Tech Stack

- **Frontend**:
  - Next.js 13+ (App Router)
  - React 19
  - Tailwind CSS
  - Framer Motion
  - React Type Animation

- **Icons & Styling**:
  - Hero Icons
  - Lucide Icons
  - Font Awesome

- **Form Handling**:
  - EmailJS
  - Resend (optional)

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




## Project Structure

```
src/
├── app/                    # App Router
│   ├── allprojects/        # All projects page
│   ├── api/                # API routes
│   ├── components/         # Reusable components
│   └── singleproject/      # Single project details
├── public/                 # Static assets
│   └── images/             # Image assets
```

## Getting Started

1. Clone the repository
   ```bash
   git clone https://github.com/bridgitkanini/bridgitkanini-portfolio.git
   cd bridgitkanini-portfolio
   ```

2. Install dependencies
   ```bash
   pnpm install
   ```

3. Set up environment variables
   Create a `.env.local` file in the root directory and add your EmailJS credentials:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. Run the development server
   ```bash
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

This project is configured for deployment on Vercel. Push your changes to the `main` branch to trigger automatic deployments.

## Customization

- Update your personal information in the relevant component files
- Add/update projects in the project data files
- Modify the color scheme in `tailwind.config.js`
- Update the favicon and other assets in the `public` directory

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
