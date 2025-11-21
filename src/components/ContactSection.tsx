import { Mail, Phone, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccess(false);
    setError(null);

    try {
      const res = await fetch('https://formspree.io/f/xkgyvqbk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error('Failed to submit');
      }

      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-24 bg-black text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>

      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Start Your <span className="text-amber-500">Next Website</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have a web design or branding project in mind? Tell us what you&apos;re
            working on and we&apos;ll follow up with ideas, timelines, and next steps.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                Whether you need a brand new site, a full redesign, or a focused
                landing page for your business, we&apos;re here to help you plan,
                design, and launch with confidence.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="bg-amber-600/10 border border-amber-600/20 p-3 rounded-lg group-hover:bg-amber-600 group-hover:scale-110 transition-all duration-300">
                  <Mail
                    size={24}
                    className="text-amber-500 group-hover:text-white"
                  />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <a
                    href="mailto:patadigitalservices@gmail.com"
                    className="text-gray-400 hover:text-amber-500 transition-colors"
                  >
                    patadigitalservices@gmail.com
                  </a>
                  <p className="text-sm text-gray-500 mt-1">
                    Share a brief overview of your project and ideal timeline.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="bg-amber-600/10 border border-amber-600/20 p-3 rounded-lg group-hover:bg-amber-600 group-hover:scale-110 transition-all duration-300">
                  <Phone
                    size={24}
                    className="text-amber-500 group-hover:text-white"
                  />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <a
                    href="tel:+12489899287"
                    className="text-gray-400 hover:text-amber-500 transition-colors"
                  >
                    +1 (248) 989-9287
                  </a>
                  <p className="text-sm text-gray-500 mt-1">
                    Prefer a quick call? Reach out and we&apos;ll schedule a time.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
            {success && (
              <div className="mb-4 rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
                Thank you for reaching out — we&apos;ve received your message and
                will get back to you soon.
              </div>
            )}
            {error && (
              <div className="mb-4 rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-500 transition-colors text-white"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-500 transition-colors text-white"
                  placeholder="you@business.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-500 transition-colors text-white"
                  placeholder="Website, branding, or landing page?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-500 transition-colors text-white resize-none"
                  placeholder="Tell us about your business, goals, and any deadlines..."
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-amber-600 hover:bg-amber-500 disabled:opacity-70 disabled:cursor-wait text-white px-6 py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/50 flex items-center justify-center gap-2 group"
              >
                {submitting ? 'Sending…' : 'Send Message'}
                <Send
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}