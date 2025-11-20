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
            About <span className="text-amber-500">Pata Digital Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We craft digital experiences that look sharp, load fast, and help your
            brand stand out in a crowded online world.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid gap-6">
            <div className="relative h-56 sm:h-64 rounded-2xl overflow-hidden bg-gray-800 border border-gray-700">
              <img
                src="/patateam.png"
                alt="Pata Digital team collaborating"
                className="w-full h-full object-cover opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-sm uppercase tracking-wide text-amber-400">
                  Who We Are
                </p>
                <p className="text-lg font-semibold">
                 Two students with big standards.
                </p>
              </div>
            </div>

            <div className="relative h-56 sm:h-64 rounded-2xl overflow-hidden bg-gray-800 border border-gray-700 lg:translate-x-6">
              <img
                src="/teamworking.png"
                alt="Modern workspace and design process"
                className="w-full h-full object-cover opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-tl from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-sm uppercase tracking-wide text-amber-400">
                  How We Work
                </p>
                <p className="text-lg font-semibold">
                  Focused, intentional, and detail-driven.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.2em] text-amber-400">
              Digital development & Performance Tracking
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              Pata Digital Services, run by Advik Tatavarthi and Paul Lei, helps businesses move beyond basic templates.
              We blend thoughtful design, clear messaging, and modern development
              to build sites that feel tailored to your brand and easy for your
              audience to use.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              From first wireframe to final launch, we stay close to your goals,
              refining the details that turn a good website into a great one.
            </p>

            <div className="mt-4">
              <p className="text-sm font-semibold text-gray-400 mb-3">
                What we specialize in
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full border border-gray-700 text-sm text-gray-200 bg-gray-900/60">
                  Modern Web Design
                </span>
                <span className="px-4 py-2 rounded-full border border-gray-700 text-sm text-gray-200 bg-gray-900/60">
                  Brand-Focused Landing Pages
                </span>
                <span className="px-4 py-2 rounded-full border border-gray-700 text-sm text-gray-200 bg-gray-900/60">
                  Performance & SEO
                </span>
                <span className="px-4 py-2 rounded-full border border-gray-700 text-sm text-gray-200 bg-gray-900/60">
                  Ongoing Support
                </span>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
}