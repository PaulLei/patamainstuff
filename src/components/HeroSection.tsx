import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const codeLines = [
  { text: 'const website = new PATAWebProject();', delay: 0 },
  { text: 'website.design({ focus: "modern, clean UI" });', delay: 600 },
  { text: 'website.brand({ style: "distinct and consistent" });', delay: 1200 },
  { text: 'website.optimize({ seo: "search-ready" });', delay: 2400 },
  { text: 'return website.launch({ result: "more clients" });', delay: 3500 },
];

export default function HeroSection() {
  const [visibleLines, setVisibleLines] = useState<number>(0);

  // Existing typewriter effect
  useEffect(() => {
    const timers = codeLines.map((line, index) =>
      setTimeout(() => setVisibleLines(index + 1), line.delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  // NEW: scroll listener for parallax
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || 0;
      // store with px so calc() + translateY works properly
      document.documentElement.style.setProperty('--scroll', `${scrollY}px`);
    };

    window.addEventListener('scroll', handleScroll);
    // initialize on mount so it works even if user is not at top
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen text-white pt-0 relative overflow-hidden bg-cover bg-center bg-no-repeat"
    >
      {/* Parallax + soft blur background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-md will-change-transform"
        style={{
          backgroundImage: "url('/background.jpg')",
          // var(--scroll, 0px) has units; 0.2 controls parallax strength
          transform: 'translateY(calc(var(--scroll, 0px) * 0.2))',
        }}
      ></div>

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                Modern Websites
                <span className="block text-amber-500">Built to Grow Your Brand</span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed">
                We craft fast, modern websites and clear brand identities for small businesses.
                From design to launch, every project is built to look great, load quickly,
                and help you win more clients.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact">
                <button className="group bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/50 hover:scale-105 flex items-center justify-center gap-2">
                  Start Your Project
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </button>
              </a>

              <a href="#portfolio">
                <button className="border border-gray-700 hover:border-amber-500 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 hover:bg-amber-500/10">
                  View Client Projects
                </button>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-800">
              <div>
                <div className="text-2xl font-bold text-amber-500">Custom-Built</div>
                <div className="text-sm text-gray-400">Websites tailored to your business</div>
              </div>

              <div>
                <div className="text-2xl font-bold text-amber-500">SEO-Ready</div>
                <div className="text-sm text-gray-400">On-page optimization from day one</div>
              </div>

              <div>
                <div className="text-2xl font-bold text-amber-500">Mobile-First</div>
                <div className="text-sm text-gray-400">Designed to work on every screen</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gray-900 rounded-xl border border-gray-800 shadow-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-800 border-b border-gray-700">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs text-gray-400 ml-4">website-builder.jsx</div>
              </div>

              <div className="p-6 font-mono text-sm space-y-3 min-h-[300px]">
                {codeLines.slice(0, visibleLines).map((line, index) => (
                  <div
                    key={index}
                    className="animate-fadeIn flex items-start"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="text-gray-600 mr-4 select-none">{index + 1}</span>
                    <span className="text-green-400">{line.text}</span>
                  </div>
                ))}

                {visibleLines < codeLines.length && (
                  <div className="flex items-start">
                    <span className="text-gray-600 mr-4 select-none">{visibleLines + 1}</span>
                    <span className="inline-block w-2 h-5 bg-amber-500 animate-pulse"></span>
                  </div>
                )}
              </div>
            </div>

            <div className="absolute -top-4 -left-4 w-32 h-32 bg-amber-600/20 rounded-lg blur-xl"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-700 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-amber-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}