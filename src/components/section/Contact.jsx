import { useState } from "react";
import { RevealOnScreen } from "./RevealOnScreen";
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        alert("Message sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScreen>
        <div className="px-4 w-full max-w-2xl mx-auto">

          <h2 className="text-3xl text-center font-bold mb-8 bg-gradient-to-r
            from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>

            {/* Name */}
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your Name..."
                className="w-full bg-gray-100 dark:bg-white/5
                           border border-gray-300 dark:border-white/10
                           rounded-xl px-4 py-3
                           text-gray-900 dark:text-white
                           placeholder-gray-400 dark:placeholder-gray-500
                           transition focus:outline-none
                           focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20
                           focus:bg-blue-50 dark:focus:bg-blue-500/5"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Your Email — example@gmail.com"
                className="w-full bg-gray-100 dark:bg-white/5
                           border border-gray-300 dark:border-white/10
                           rounded-xl px-4 py-3
                           text-gray-900 dark:text-white
                           placeholder-gray-400 dark:placeholder-gray-500
                           transition focus:outline-none
                           focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20
                           focus:bg-blue-50 dark:focus:bg-blue-500/5"
              />
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Your Message..."
                className="w-full bg-gray-100 dark:bg-white/5
                           border border-gray-300 dark:border-white/10
                           rounded-xl px-4 py-3
                           text-gray-900 dark:text-white
                           placeholder-gray-400 dark:placeholder-gray-500
                           transition focus:outline-none
                           focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20
                           focus:bg-blue-50 dark:focus:bg-blue-500/5
                           resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-6
                         rounded-xl font-medium transition-all duration-200 relative overflow-hidden
                         hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
            >
              Send Message
            </button>

          </form>
        </div>
      </RevealOnScreen>
    </section>
  );
};