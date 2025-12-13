export default function Home() {
  return (
    <div className="min-h-screen bg-black-900 text-white">
      {/* Header with gold accent */}
      <header className="bg-black-800 border-b-2 border-gold-300 p-6">
        <div className="container mx-auto flex justify-between items-center">
          <img 
            src="/Logo.png" 
            alt="Logo" 
            className="h-12 w-auto"
          />
          <nav className="space-x-6">
            <button className="text-gold-300 hover:text-gold-400">Login</button>
            <button className="bg-gold-300 text-black-900 px-6 py-2 rounded-lg font-bold hover:bg-gold-400">
              Sign Up
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-6">
          Welcome to <span className="text-gold-300">Our Site</span>
        </h1>
        <p className="text-gray-300 text-xl mb-10 max-w-2xl">
          A premium experience with gold and black elegance.
        </p>
        
        <div className="flex space-x-4">
          <button className="bg-gold-300 text-black-900 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gold-400 transition">
            Get Started
          </button>
          <button className="border-2 border-gold-300 text-gold-300 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gold-300 hover:text-black-900 transition">
            Learn More
          </button>
        </div>
      </main>
    </div>
  )
        }
