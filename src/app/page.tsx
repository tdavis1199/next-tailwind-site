import MapWrapper from '../components/MapWrapper';

export default function Home() {
  return (
    <main className="bg-white text-gray-800 font-sans">

      {/* Hero Section */}
      <section className="bg-blue-50 py-20 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Discover the Freedom of Air Taxi Travel
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Skip the drive, the lines, and the stress. Our modern air taxi service gets you
          closer to your destination—fast, safe, and on your schedule.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#book" className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700">
            Book a Flight
          </a>
          <a href="#how-it-works" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl hover:bg-blue-100">
            How It Works
          </a>
        </div>
      </section>

      {/* What is Air Taxi */}
      <section className="py-16 px-6 max-w-5xl mx-auto" id="how-it-works">
        <h2 className="text-3xl font-semibold mb-6">What Is Air Taxi?</h2>
        <p className="text-lg leading-relaxed mb-4">
          We’ll take you where you want to go—quickly, conveniently, and with more flexibility than ever before.
          Our fleet of turbine-powered aircraft departs from smaller airports, so you can skip the traffic, crowds, and delays.
        </p>
        <p className="text-lg leading-relaxed">
          Arrive. Fly. Return when you&apos;re ready. Your air taxi is waiting.
        </p>
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
        <a href="#contact" className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg shadow hover:bg-blue-700">
          Request a Flight
        </a>
      </section>

      <footer className="text-center text-sm text-gray-500 py-10">
        &copy; 2025 Air Taxi Company. All rights reserved.
      </footer>

    </main>
  );
}
