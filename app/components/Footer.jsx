export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between gap-6">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center text-white font-bold">PM</div>
            <div>
              <h3 className="font-semibold">YourProperty</h3>
              <p className="text-sm text-gray-600">Property management made simple</p>
            </div>
          </div>
        </div>
        <div className="text-sm text-gray-600">
          <p>© {new Date().getFullYear()} YourProperty. All rights reserved.</p>
          <p className="mt-2">Email: <a href="mailto:info@yourproperty.com" className="text-primary">info@yourproperty.com</a></p>
        </div>
      </div>
    </footer>
  )
}
