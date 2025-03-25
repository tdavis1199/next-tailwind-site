import MapWrapper from '../components/MapWrapper';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="bg-white text-gray-800 font-sans">

      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/hero-banner.jpg"
            alt="Private aircraft on runway"
            fill
            priority
            sizes="100vw"
            quality={90}
            className="object-cover brightness-75"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Your Air Taxi Awaits
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Skip the drive, the lines, and the stress. Our modern air taxi service gets you
            closer to your destination—fast, safe, and on your schedule.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#book" className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition-colors">
              Book a Flight
            </a>
            <a href="#how-it-works" className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-xl hover:bg-white/20 transition-colors">
              How It Works
            </a>
          </div>
        </div>
      </section>

      {/* What is Air Taxi */}
      <section className="py-24 px-6 bg-gray-50" id="how-it-works">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Is Air Taxi?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of regional travel with our modern air taxi service.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Flexible Travel */}
            <div className="text-center space-y-6">
              <div className="mx-auto w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">Flexible Travel</h3>
              <p className="text-gray-600 leading-relaxed">
                Skip the traditional airport hassle. We&apos;ll take you where you want to go—quickly and conveniently, with more flexibility than ever before.
              </p>
            </div>

            {/* Direct Routes */}
            <div className="text-center space-y-6">
              <div className="mx-auto w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">Direct Routes</h3>
              <p className="text-gray-600 leading-relaxed">
                Our fleet departs from smaller airports, getting you closer to your destination while avoiding traffic and crowds.
              </p>
            </div>

            {/* On Your Schedule */}
            <div className="text-center space-y-6">
              <div className="mx-auto w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">On Your Schedule</h3>
              <p className="text-gray-600 leading-relaxed">
                No more fixed schedules. Fly when it works for you—morning, afternoon, or evening. Your air taxi is ready when you&apos;re ready.
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <a href="#book" className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-semibold group">
              Book Your First Flight
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16 px-6" id="benefits">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Why Choose Air Taxi?</h2>
          <ul className="grid md:grid-cols-2 gap-6 text-lg">
            <li>✈️ Leave from airports near you&mdash;Oshawa, Billy Bishop, or Pearson</li>
            <li>🛬 Fly closer to your destination—skip the hubs and save time</li>
            <li>⏱️ No lines, no waiting—arrive and take off within minutes</li>
            <li>💺 Comfortable, modern aircraft for short-haul efficiency</li>
            <li>🧭 Flexible scheduling—fly when it works for you</li>
          </ul>
        </div>
      </section>

      {/* Where We Fly */}
      <section className="py-16 px-6 max-w-6xl mx-auto" id="map">
        <h2 className="text-3xl font-semibold mb-6 text-center">Where We Fly</h2>
        <div className="w-full h-[500px] rounded-xl shadow-lg overflow-hidden">
          <MapWrapper />
        </div>
      </section>

      {/* Destinations */}
      <section className="py-16 px-6 max-w-5xl mx-auto" id="destinations">
        <h2 className="text-3xl font-semibold mb-6">Where You Can Go</h2>
        <p className="text-lg mb-4">
          Toronto → Ottawa in 1 hour. Kingston, Windsor, Sudbury, and more are just a hop away.
        </p>
        <p className="text-lg">
          More routes added regularly. Custom destinations available on request.
        </p>
      </section>

      {/* Pricing */}
      <section className="bg-blue-50 py-16 px-6" id="pricing">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Transparent Pricing</h2>
          <p className="text-xl mb-2">💸 Typical cost: <strong>$750 per person</strong></p>
          <p className="text-lg mb-2">(based on 4 passengers on a 1-hour flight)</p>
          <p className="text-lg">Half the price of a private jet—with more flexibility.</p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 text-center px-6" id="book">
        <h2 className="text-4xl font-bold mb-6">Your Air Taxi Is Ready</h2>
        <p className="text-xl mb-8">
          Whether for business or leisure, short-haul air travel has never been this convenient.
        </p>
        <a href="#contact" className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg shadow hover:bg-blue-700 transition-colors">
          Request a Flight
        </a>
      </section>

      <footer className="text-center text-sm text-gray-500 py-10">
        &copy; 2025 Air Taxi Company. All rights reserved.
      </footer>

    </main>
  );
}
