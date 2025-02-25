import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Get EmailJS credentials from environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(result => {
        console.log('Email sent successfully:', result.text);
        setSubmitStatus('success');

        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });

        // Reset status after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      })
      .catch(error => {
        console.error('Failed to send email:', error.text);
        setSubmitStatus('error');

        // Reset error status after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-24 bg-slate-800/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading text-center mx-auto mb-6">Get In Touch</h2>
        <p className="text-slate-400 text-center max-w-2xl mx-auto mb-16">
          Have a question or want to work together? Feel free to contact me using the form below or
          through my social media channels.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="card p-6 md:p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>

            <form ref={form} onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md bg-slate-700/50 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md bg-slate-700/50 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-slate-400 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md bg-slate-700/50 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Job Opportunity"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 rounded-md bg-slate-700/50 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3 rounded-md bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <div className="mt-4 p-3 bg-green-500/20 border border-green-500/30 rounded-md text-green-400 text-sm">
                  Your message has been sent successfully! I&apos;ll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mt-4 p-3 bg-red-500/20 border border-red-500/30 rounded-md text-red-400 text-sm">
                  There was an error sending your message. Please try again later.
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="card p-6 md:p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Contact Information</h3>

            <div className="space-y-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">Email</h4>
                  <a
                    href="mailto:johnfletcher831@gmail.com"
                    className="text-slate-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    johnfletcher831@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">Phone</h4>
                  <a
                    href="tel:+1234567890"
                    className="text-slate-300 hover:text-indigo-400 transition-colors duration-300"
                  >
                    +1 (831) 261-1452
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-purple-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">Location</h4>
                  <p className="text-slate-300">Denver, Colorado</p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <h4 className="text-lg font-medium text-white mb-4">Connect With Me</h4>
              <div className="flex justify-center space-x-5">
                <a
                  href="https://github.com/fletcherstud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-slate-700/70 flex items-center justify-center text-slate-300 hover:bg-slate-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                  aria-label="GitHub"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/john-fletcher1998/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-slate-700/70 flex items-center justify-center text-slate-300 hover:bg-slate-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://x.com/fletchstud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-slate-700/70 flex items-center justify-center text-slate-300 hover:bg-slate-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
