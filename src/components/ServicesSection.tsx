import { Code2, Palette, MessageSquareText, Search, Smartphone, TrendingUp } from 'lucide-react';
import { useState } from 'react';

const services = [
  {
    icon: Code2,
    title: 'Custom Website Development',
    description:
      'Conversion-focused websites built with modern technologies to support your business goals.',
    details:
      'We build custom websites that go beyond templates. Every page is designed to reflect your brand, highlight your services, and guide visitors toward taking action. From structure and navigation to performance and security, we handle the details so your site feels fast, reliable, and professional. Our goal is to create long-term partnerships and support your growth as your business evolves.',
    color: 'amber',
  },
  {
    icon: Palette,
    title: 'UI/UX & Visual Design',
    description:
      'Clean, modern interfaces that are easy to use and aligned with your brand identity.',
    details:
      'We research your industry, audience, and competitors to design interfaces that feel familiar but still stand out. If you don’t have a clear vision yet, we provide examples, mood boards, and layout options to help you decide. Every design choice—from typography to spacing—is intentional, so your website looks polished and feels effortless to use.',
    color: 'blue',
  },
  {
    icon: MessageSquareText,
    title: 'AI Chatbot Integration',
    description:
      'Smart, always-on chatbots that answer common questions and capture new leads.',
    details:
      'AI tools have changed how businesses support customers. Adding an AI chatbot to your site means visitors get instant answers, even outside business hours. We help you set up a chatbot that can handle FAQs, capture contact information, and route important messages to you—reducing repetitive work while improving the experience for your users.',
    color: 'green',
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Responsive Design',
    description:
      'Websites that look and work great on phones, tablets, and desktops.',
    details:
      'Most visitors now browse on their phones. We design every page with a mobile-first mindset, then scale up for larger screens. This keeps users engaged longer and makes it easier for them to read, click, and contact you. A responsive layout supports higher conversions and creates a consistent brand experience across all devices.',
    color: 'purple',
  },
  {
    icon: Search,
    title: 'On-Page SEO Setup',
    description:
      'SEO-friendly structure, copy, and tags to help customers find you in search results.',
    details:
      'We layer in SEO best practices from the start. That includes clean URL structure, meaningful headings, optimized meta tags, image alt text, and keyword-aware copy. Our focus is on creating a strong foundation so your website is ready to rank when potential clients search for services in your niche or local area.',
    color: 'red',
  },
  {
    icon: TrendingUp,
    title: 'Analytics & Performance Tracking',
    description:
      'Data and insights that show how your website is performing over time.',
    details:
      'Understanding how people use your site is the first step toward improving it. We help you set up analytics tools that track traffic, top pages, click patterns, and conversions. With clear reports, you can see what’s working, where visitors drop off, and which changes drive better results. Our job is to make the numbers easy to understand and act on.',
    color: 'cyan',
  },
];

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-black to-gray-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Services <span className="text-amber-500">We Provide</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            End-to-end web design, development, and optimization to help your business
            look professional online and turn visitors into clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isExpanded = expandedIndex === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

                <div className="relative">
                  <div
                    className={`w-14 h-14 rounded-lg bg-gradient-to-br from-amber-600 to-amber-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${
                      hoveredIndex === index ? 'animate-pulse' : ''
                    }`}
                  >
                    <Icon size={28} className="text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-amber-500 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Learn more toggle */}
                  <button
                    type="button"
                    onClick={() =>
                      setExpandedIndex(isExpanded ? null : index)
                    }
                    className="mt-6 flex items-center text-amber-500 font-medium transition-opacity group-hover:opacity-100 opacity-100"
                  >
                    {isExpanded ? 'Show less' : 'Learn more'}
                    <svg
                      className={`w-4 h-4 ml-2 transition-transform ${
                        isExpanded ? 'rotate-90' : 'group-hover:translate-x-2'
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>

                  {/* Collapsible details */}
                  <div
                    className={`mt-3 overflow-hidden transition-all duration-300 ${
                      isExpanded ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="border-t border-gray-800 pt-4 text-sm text-gray-300">
                      {service.details}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-gray-400 mb-8 text-lg">
            Share your goals with us and we&apos;ll help you plan a website or landing page
            that fits your brand, budget, and timeline.
          </p>
          <a href="#contact">
            <button className="bg-amber-600 hover:bg-amber-500 text-white px-10 py-4 rounded-lg text-lg font-medium transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/50 hover:scale-105">
              Schedule a Consultation
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}