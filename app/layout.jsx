import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const metadata = {
  title: 'Property Management',
  description: 'Professional property management services',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans text-gray-800">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
