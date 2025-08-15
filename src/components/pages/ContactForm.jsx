

import { useState } from "react";
import iii from "../../assets/contact.jpg"; // ✅ Correct import

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-contact-bg flex flex-col-reverse lg:flex-row">
      {/* Left side - Contact Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 sm:px-10 lg:px-16 py-12 lg:py-20">
        <div className="max-w-md w-full">
          <h1 className="text-3xl sm:text-4xl font-light text-contact-text mb-6 leading-tight">
            Have a Question?
          </h1>

          <p className="text-contact-text-muted mb-12 leading-relaxed text-sm sm:text-base">
            Down to earth, thorough instruction in yoga and mindfulness for the
            benefit of all bodies.
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-contact-text-muted mb-3 tracking-wide uppercase">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-0 border-b border-contact-input-border pb-3 text-contact-text placeholder-contact-text-muted focus:outline-none
                  focus:border-contact-text transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-contact-text-muted mb-3 tracking-wide uppercase">
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-0 border-b border-contact-input-border pb-3 text-contact-text placeholder-contact-text-muted focus:outline-none focus:border-contact-text transition-colors"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-contact-text-muted mb-3 tracking-wide uppercase">
                Your Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full bg-transparent border-0 border-b border-contact-input-border  pb-3  text-contact-text placeholder-contact-text-muted focus:outline-none focus:border-contact-text transition-colors resize-none"
                required
              />
            </div>

            <div className="pt-6">
              <button
                type="submit"
                className="w-full md:w-auto bg-contact-button text-contact-button-text  py-3 text-sm tracking-wide uppercase hover:bg-opacity-90 transition-all duration-200 text-left"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="w-full lg:w-1/2 h-64 sm:h-96 lg:h-auto">
        <div
          className="h-full w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${iii})`, // ✅ Correct usage
          }}
        />
      </div>
    </div>
  );
};

export default ContactForm;
