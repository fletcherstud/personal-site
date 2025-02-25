# Personal Developer Portfolio

A modern, responsive developer portfolio website built with React, Vite, and Tailwind CSS.

## Features

- Responsive design that works on all devices
- Modern UI with smooth animations
- Contact form with EmailJS integration
- Project showcase
- Experience timeline
- Wave background animation
- Downloadable resume

## Setup

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Fill in your EmailJS credentials:
     - `VITE_EMAILJS_SERVICE_ID`: Your EmailJS service ID
     - `VITE_EMAILJS_TEMPLATE_ID`: Your EmailJS template ID
     - `VITE_EMAILJS_PUBLIC_KEY`: Your EmailJS public key

4. Add your resume:
   - Create a PDF version of your resume
   - Save it as `public/files/john_fletcher_resume.pdf`

5. Start the development server:
   ```
   npm run dev
   ```

## Contact Form Setup

The contact form uses [EmailJS](https://www.emailjs.com/) to send emails directly from the client side without a backend server.

To set up the contact form:

1. Create an account on [EmailJS](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template with the following variables:
   - `name`: Sender's name
   - `email`: Sender's email
   - `subject`: Email subject
   - `message`: Email message
4. Add your EmailJS credentials to the `.env` file

## Technologies Used

- React
- Vite
- Tailwind CSS
- EmailJS
- React Icons

## License

MIT
