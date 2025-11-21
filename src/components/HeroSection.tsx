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

  useEffect(() => {
    const timers = codeLines.map((line, index) =>
      setTimeout(() => setVisibleLines(index + 1), line.delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section id="home" className="min-h-screen bg-black text-white pt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/10 via-black to-black"></div>

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Modern Websites
                <span className="block text-amber-500">Built to Grow Your Brand</span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed">
                We craft fast, modern websites and clear brand identities for small businesses. 
                From design to launch, every project is built to look great, load quickly, and help you win more clients.
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
                <div className="text-3xl font-bold text-amber-500">Custom-Built</div>
                <div className="text-sm text-gray-400">Websites tailored to your business</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-500">SEO-Ready</div>
                <div className="text-sm text-gray-400">On-page optimization from day one</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-500">Mobile-First</div>
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

            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-amber-600/20 rounded-lg blur-xl"></div>
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