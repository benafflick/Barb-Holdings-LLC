export default function Contact() {
  return (
    <section id="contact" className="bg-muted">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold text-gray-900">Contact Us</h2>
        <p className="mt-2 text-gray-600">Reach out for a free consultation — we’ll get back to you within 24 hours.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <form action="https://formspree.io/f/your-form-id" method="POST" className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full name</label>
                <input name="name" required className="mt-1 block w-full border border-gray-200 rounded-md px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input name="email" type="email" required className="mt-1 block w-full border border-gray-200 rounded-md px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea name="message" rows="5" required className="mt-1 block w-full border border-gray-200 rounded-md px-3 py-2"></textarea>
              </div>
              <div>
                <button type="submit" className="bg-primary text-white px-5 py-2 rounded-md">Send message</button>
              </div>
            </form>
          </div>

          <div className="text-sm text-gray-700">
            <h4 className="font-semibold">Office</h4>
            <p className="mt-2">123 Main Street<br/>City, State ZIP</p>

            <h4 className="font-semibold mt-6">Contact</h4>
            <p className="mt-2">Phone: <a href="tel:+1234567890" className="text-primary">+1 (234) 567-890</a></p>
            <p>Email: <a href="mailto:info@yourproperty.com" className="text-primary">info@yourproperty.com</a></p>

            <div className="mt-6">
              <p className="text-sm text-gray-500">Tip: Replace the Formspree action URL in the form with your own Formspree form ID or other endpoint.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
