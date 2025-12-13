export default function Login() {
  return (
    <div className="min-h-screen bg-black-900 flex items-center justify-center">
      <div className="bg-black-800 p-8 rounded-xl border border-gold-300 max-w-md w-full">
        <div className="flex justify-center mb-8">
          <img src="/Logo.png" alt="Logo" className="h-16" />
        </div>
        
        <h2 className="text-2xl font-bold text-gold-300 mb-6 text-center">Login</h2>
        
        <form className="space-y-4">
          <input 
            type="email" 
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-black-700 text-white border border-gray-600 focus:border-gold-300 focus:outline-none"
          />
          <input 
            type="password" 
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-black-700 text-white border border-gray-600 focus:border-gold-300 focus:outline-none"
          />
          
          <button className="w-full bg-gold-300 text-black-900 py-3 rounded-lg font-bold hover:bg-gold-400">
            Sign In
          </button>
        </form>
        
        <p className="text-gray-400 text-center mt-6">
          Don't have an account?{' '}
          <a href="/signup" className="text-gold-300 hover:text-gold-400">
            Sign up
          </a>
        </p>
      </div>
    </div>
  )
}
