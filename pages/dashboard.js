import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";
import { useRouter } from "next/router";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function checkSession() {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session?.user) router.push("/login");
      else setUser(session.user);
    }
    checkSession();
  }, []);

  if (!user) return <div className="h-screen flex items-center justify-center text-white">Loading...</div>;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to QYVTHRO</h1>
      <p className="text-lg">Logged in as: {user.email}</p>

      <div className="mt-6 p-6 bg-gray-900 rounded-lg">
        <h2 className="text-2xl font-bold mb-2">Your Product</h2>
        <p>This is where your QYVTHRO content appears.</p>
      </div>
    </div>
  );
    }
