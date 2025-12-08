import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-5xl font-bold mb-6">Welcome to QYVTHRO</h1>
      <div className="flex space-x-4">
        <Link href="/signup" className="px-6 py-3 bg-red-500 rounded-lg">Sign Up</Link>
        <Link href="/login" className="px-6 py-3 bg-gray-700 rounded-lg">Login</Link>
      </div>
    </div>
  );
    }
