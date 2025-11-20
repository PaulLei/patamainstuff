import { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Neurologic Solutions',
    category: 'Web Development',
    description: 'Modern website with clear presentation, news page, and prepared for investors.',
    image: 'https://media.licdn.com/dms/image/v2/C4E0BAQEtB8wQ02r1pg/company-logo_200_200/company-logo_200_200/0/1633619729471?e=1765411200&v=beta&t=-5ZiKJqtXeZZYPHYHoEq3iqSWKH05QvH0coTHgpJPl4',
    tags: ['WP Bakery', 'Responsive Design'],
    link: 'https://neurologicsolutions.net/',
  },
  {
    id: 2,
    title: 'Pata Main Website',
    category: 'Web Development',
    description: 'Professional and Interactive website that serves as a marketing tool for potential clients.',
    image: '/patalogwhite.png',
    tags: ['React.js', 'SEO Optimization'],
    link: '#',
  },
  {
    id: 3,
    title: 'ACE Chemistry Tutoring',
    category: 'Web Design',
    description: 'Modern website that advertises tutoring and presents class information in clear format.',
    image: 'https://www.acechemistrytutoring.academy/acelogo.jpeg',
    tags: ['React.js', 'Vite', 'Accessibility'],
    link: 'https://www.acechemistrytutoring.academy/',
  },
  {
    id: 4,
    title: 'CCG Website',
    category: 'Web Design',
    description: 'Modern website highlighting business consulting services and impact.',
    image: 'https://www.coltsccg.com/CCG%20Logo.png',
    tags: ['React.js', 'Vite'],
    link: 'https://www.coltsccg.com/',
  },
  {
    id: 5,
    title: 'Troy High Performance Gym',
    category: 'In Progress',
    description: 'Redesign of previous gym website.',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: [],
    link: '',
  },
];

export default function PortfolioCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const getCardPosition = (index: number) => {
    const total = projects.length;
    let position = index - currentIndex;

    if (position < -Math.floor(total / 2)) {
      position += total;
    } else if (position > Math.floor(total / 2)) {
      position -= total;
    }

    return position;
  };

  return (
    <section id="portfolio" className="py-24 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="text-amber-500">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore our recent projects and see how we've helped businesses achieve their digital goals.
          </p>
        </div>

        <div className="relative h-[600px] flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            {projects.map((project, index) => {
              const position = getCardPosition(index);
              const isActive = position === 0;

              const angle = (position * 360) / projects.length;
              const radius = 400;
              const x = Math.sin((angle * Math.PI) / 180) * radius;
              const z = Math.cos((angle * Math.PI) / 180) * radius;

              const scale = isActive ? 1 : 0.7 - Math.abs(position) * 0.1;
              const opacity = isActive ? 1 : 0.4 - Math.abs(position) * 0.1;
              const rotateY = -angle;

              return (
                <div
                  key={project.id}
                  className="absolute transition-all duration-500 ease-out"
                  style={{
                    transform: `translateX(${x}px) translateZ(${z}px) scale(${scale}) rotateY(${rotateY}deg)`,
                    opacity: opacity,
                    zIndex: isActive ? 10 : 5 - Math.abs(position),
                    pointerEvents: isActive ? 'auto' : 'none',
                  }}
                >
                  <div className="w-80 bg-gray-800 rounded-xl overflow-hidden shadow-2xl border border-gray-700 hover:border-amber-500/50 transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                      <div className="absolute top-4 right-4">
                        <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {isActive && (
                        <a
                          href={project.link}
                          className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 font-medium text-sm transition-colors"
                        >
                          View Project
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={handlePrevious}
            disabled={isAnimating}
            className="absolute left-4 z-20 bg-gray-800 hover:bg-amber-600 border border-gray-700 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={handleNext}
            disabled={isAnimating}
            className="absolute right-4 z-20 bg-gray-800 hover:bg-amber-600 border border-gray-700 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-12">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true);
                  setCurrentIndex(index);
                  setTimeout(() => setIsAnimating(false), 500);
                }
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-8 bg-amber-500'
                  : 'w-2 bg-gray-700 hover:bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
