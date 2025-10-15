export default function About() {
  return (
    <section id="about" className="bg-muted">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="md:flex md:items-center md:gap-10">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-900">About Us</h2>
            <p className="mt-4 text-gray-700">
              YourProperty is a professional property management firm focused on transparency, fast maintenance response, and maximizing return on investment for owners. Founded with the goal of simplifying landlord life, we combine technology with hands‑on local experience.
            </p>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <h3 className="font-semibold">Our Difference</h3>
            <ul className="mt-3 space-y-2 text-gray-700">
              <li>• Clear reporting and monthly statements</li>
              <li>• Experienced maintenance network</li>
              <li>• Tenant screening and lease management</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
