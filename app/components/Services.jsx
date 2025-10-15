export default function Services() {
  return (
    <section id="services" className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold text-gray-900">Services</h2>
        <p className="mt-2 text-gray-600">Comprehensive property management services tailored to your needs.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border rounded-lg p-6 shadow-sm">
            <h4 className="font-semibold">Tenant Management</h4>
            <p className="mt-2 text-sm text-gray-600">Screening, leases, rent collection and tenant relations handled end-to-end.</p>
          </div>

          <div className="border rounded-lg p-6 shadow-sm">
            <h4 className="font-semibold">Maintenance & Repairs</h4>
            <p className="mt-2 text-sm text-gray-600">Coordinated maintenance with trusted contractors and fast responses.</p>
          </div>

          <div className="border rounded-lg p-6 shadow-sm">
            <h4 className="font-semibold">Financial Reporting</h4>
            <p className="mt-2 text-sm text-gray-600">Monthly statements, expense tracking and transparent billing.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
