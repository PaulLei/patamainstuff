import { Code2, Palette, MessageSquareText, Search, Smartphone, TrendingUp } from 'lucide-react';
import { useState } from 'react';

const services = [
  {
    icon: Code2,
    title: 'Custom Web Development',
    description:
      'Tailored solutions built with cutting-edge technologies to bring your unique vision to life.',
    details:
      'We build websites that match your vision and support your business goals. Your site reflects your brand, so we focus on clean design, strong structure, and features that serve your customers. Whether you need small updates or a full build, we handle every detail with care. Our goal is to create long-term partnerships with clients and support their growth.',
    color: 'amber',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description:
      'Beautiful, intuitive interfaces that captivate users and deliver seamless experiences.',
    details:
      'We offer a wide range of UI and UX options to fit each client’s needs. If you don’t have a specific design in mind, we provide clear examples to help you explore what’s possible. We research industry leaders to understand current standards and trends, then apply those insights to your project. We design with purpose and clarity.',
    color: 'blue',
  },
  {
    icon: MessageSquareText,
    title: 'AI Chatbot',
    description:
      'Smart, quick, and efficient AI chatbots that answer customer inquires at all times.',
    details:
      'AI tools have changed how businesses operate. Adding an AI chatbot to your website reduces the time you spend answering routine questions and gives customers instant support at any hour. It improves efficiency, increases engagement, and creates a smoother experience for anyone who interacts with your business.',
    color: 'green',
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description:
      'Perfect viewing experiences across all devices, from mobile to desktop.',
    details:
      'A responsive website keeps users engaged longer, which supports higher conversions and sales. We optimize every layout for different devices so customers have a smooth experience wherever they visit from. Our design choices align with your target audience to maximize results.',
    color: 'purple',
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description:
      'Strategic optimization to boost your visibility and reach your target audience.',
    details:
      'We don’t stop at building the site. We help your business stand out. With strong SEO foundations, we improve your visibility when customers search for services in your space. Awareness is the first step in driving traffic and revenue, and we ensure your website has the tools to be found.',
    color: 'red',
  },
  {
    icon: TrendingUp  ,
    title: 'Analytics and Performance Tracking',
    description:
      'The first step to growth is reflection through quantitative analysis of your business.',
    details:
      'Understanding how users interact with your site is key to growth. We set up analytics tools that track traffic, user behavior, and conversion patterns. With this data, you can make informed decisions, refine your strategy, and improve results over time. We help you see what works, what doesn’t, and where new opportunities appear.',
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
            What We <span className="text-amber-500">Offer</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive web solutions designed to elevate your digital presence
            and drive real results.
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
            Let's discuss how we can bring your vision to life with our
            expertise.
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