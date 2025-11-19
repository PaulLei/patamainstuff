import { Code2, Palette, Rocket, Search, Smartphone, Zap } from 'lucide-react';
import { useState } from 'react';

const services = [
  {
    icon: Code2,
    title: 'Custom Web Development',
    description: 'Tailored solutions built with cutting-edge technologies to bring your unique vision to life.',
    color: 'amber',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that captivate users and deliver seamless experiences.',
    color: 'blue',
  },
  {
    icon: Rocket,
    title: 'Performance Optimization',
    description: 'Lightning-fast load times and smooth interactions that keep visitors engaged.',
    color: 'green',
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description: 'Perfect viewing experiences across all devices, from mobile to desktop.',
    color: 'purple',
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Strategic optimization to boost your visibility and reach your target audience.',
    color: 'red',
  },
  {
    icon: Zap,
    title: 'Web Applications',
    description: 'Dynamic, interactive web apps that solve complex problems with elegant solutions.',
    color: 'cyan',
  },
];

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            What We <span className="text-amber-500">Offer</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive web solutions designed to elevate your digital presence and drive real results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

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

                  <div className="mt-6 flex items-center text-amber-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform"
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
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-gray-400 mb-8 text-lg">
            Let's discuss how we can bring your vision to life with our expertise.
          </p>
          <button className="bg-amber-600 hover:bg-amber-500 text-white px-10 py-4 rounded-lg text-lg font-medium transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/50 hover:scale-105">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
