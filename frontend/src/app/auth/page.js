"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Importez à partir de 'next/navigation'

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter(); // Assurez-vous que 'useRouter' vient de 'next/navigation'

  const handleSignup = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/user/signUp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, confirmPassword }),
    });
    const data = await response.json();
    setMessage(data.message || data.error);

    // Rediriger vers la page de login après une inscription réussie
    if (response.ok) {
      // Attendre avant de rediriger pour éviter des problèmes de synchronisation
      setTimeout(() => {
        router.push("/login");
      }, 500); // Attente de 500ms (ajustable)
    }
  };

  return (
    <div 
      className="flex items-center justify-center min-h-screen bg-cover bg-center" 
      style={{ backgroundImage: "url('/2.webp')" }}
    >
      <div className="relative w-full max-w-md p-8 bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20">
        <h2 className="text-3xl font-bold text-center text-white drop-shadow-lg">Créer un compte</h2>

        <form onSubmit={handleSignup} className="mt-6 space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 bg-white/20 text-white rounded-lg border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-white/60"
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-3 bg-white/20 text-white rounded-lg border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-white/60"
          />
          <input
            type="password"
            placeholder="Confirmer le mot de passe"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="w-full px-4 py-3 bg-white/20 text-white rounded-lg border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-white/60"
          />

          <button
            type="submit"
            className="w-full py-3 text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-700 transition duration-300"
          >
            S'inscrire
          </button>
        </form>

        {message && <p className="text-center text-red-300 mt-4">{message}</p>}

        <p className="text-sm text-center text-white/80 mt-4">
          Vous avez déjà un compte ?{" "}
          <a href="/login" className="text-blue-300 hover:underline">
            Connectez-vous
          </a>
        </p>
      </div>
    </div>
  );
}
