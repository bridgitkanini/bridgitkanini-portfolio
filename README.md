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

## Main Sections

- **Hero Section**
  - Introduction to Bridgit Kanini
  - Animated titles and call-to-action buttons

- **About**
  - Professional background and experience
  - Education and certifications
  - Personal interests and tech stack

- **Skills**
  - Technical skills with proficiency levels
  - Tools and technologies
  - Frameworks and libraries

- **Projects**
  - **Personal Projects**: Web2 applications with descriptions, tech stack, and links to GitHub and live previews.
  - **Open Source Contributions**: Highlights of open source projects with similar details and contribution information.
  - **Web3 Projects**: Blockchain-based projects showcasing smart contracts and decentralized applications.
  - **Mobile Projects**: Cross-platform mobile applications with details on technologies used and app store links.
  - Interactive filtering between different project categories
  - Detailed project cards with technologies, features, and links

- **Testimonials**
  - Client reviews and feedback
  - Professional recommendations

- **Blog**
  - Latest articles and technical writing
  - Links to full posts on Hashnode

- **Contact**
  - Email contact form
  - Social media links (GitHub, LinkedIn, Twitter)
  - Direct communication options

## Navigation

The navbar provides smooth scrolling to all main sections: Home, About, Skills, Projects, Reviews, Blog, and Contact.

## API & Backend

- **Email Sending**: The contact form uses [EmailJS](https://www.emailjs.com/) for client-side email delivery. 




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
