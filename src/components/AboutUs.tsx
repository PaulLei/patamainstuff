export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-gray-900 to-black text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            About <span className="text-amber-500">PATA Digital Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We design and build modern, fast websites that spotlight your brand,
            tell your story clearly, and help you turn visitors into clients.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid gap-6">
            <div className="relative h-56 sm:h-64 rounded-2xl overflow-hidden bg-gray-800 border border-gray-700">
              <img
                src="/patateam.png"
                alt="PATA Digital Services founders collaborating on web design"
                className="w-full h-full object-cover opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-sm uppercase tracking-wide text-amber-400">
                  Who We Are
                </p>
                <p className="text-lg font-semibold">
                  Two student founders with professional standards.
                </p>
              </div>
            </div>

            <div className="relative h-56 sm:h-64 rounded-2xl overflow-hidden bg-gray-800 border border-gray-700 lg:translate-x-6">
              <img
                src="/teamworking.png"
                alt="Modern workspace showing the PATA web design process"
                className="w-full h-full object-cover opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-tl from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-sm uppercase tracking-wide text-amber-400">
                  How We Work
                </p>
                <p className="text-lg font-semibold">
                  Collaborative, detail-driven, and focused on results.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.2em] text-amber-400">
              Web Design, Branding & Performance Tracking
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              PATA Digital Services, run by Advik Tatavarthi and Paul Lei, helps
              businesses move beyond generic templates. We blend thoughtful web
              design, clear copy, and modern development to create sites that
              feel tailored to your brand and intuitive for your audience.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              From first wireframe to launch, we stay close to your goals,
              refining the details that turn a simple website into a reliable
              digital home for your business.
            </p>

            <div className="mt-4">
              <p className="text-sm font-semibold text-gray-400 mb-3">
                What we specialize in
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full border border-gray-700 text-sm text-gray-200 bg-gray-900/60">
                  Custom Web Design & Development
                </span>
                <span className="px-4 py-2 rounded-full border border-gray-700 text-sm text-gray-200 bg-gray-900/60">
                  Brand-Focused Landing Pages
                </span>
                <span className="px-4 py-2 rounded-full border border-gray-700 text-sm text-gray-200 bg-gray-900/60">
                  SEO & Performance Optimization
                </span>
                <span className="px-4 py-2 rounded-full border border-gray-700 text-sm text-gray-200 bg-gray-900/60">
                  Ongoing Support & Iteration
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
