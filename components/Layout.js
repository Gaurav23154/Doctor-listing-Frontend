import Header from './Header'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} MediMatch. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}