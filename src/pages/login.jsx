import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError("");
    setLoading(true);
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/login", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/dashboard");
    } catch (error) {
      setError(
        error.response?.data?.message || "Email ou mot de passe incorrect"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-emerald-500/10 blur-[120px] pointer-events-none" />

      {/* Header/Navbar */}
      <header className="w-full border-b border-gray-800/80 bg-gray-950/80 backdrop-blur-md z-10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center font-bold text-black text-xl shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              S
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent tracking-wide">
              StockSEN
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-400 hidden sm:inline">Pas encore de compte ?</span>
            <Link
              to="/register"
              className="text-sm font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20 transition-all rounded-xl px-4 py-2"
            >
              Créer un compte
            </Link>
          </div>
        </div>
      </header>

      {/* Main Form Section */}
      <div className="flex-1 flex items-center justify-center p-6 z-10">
        <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-8 w-full max-w-md shadow-2xl backdrop-blur-xl">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-white mb-2">Bienvenue</h1>
            <p className="text-gray-400 text-sm">
              Connectez-vous pour gérer votre stock
            </p>
          </div>

          {error && (
            <div className="mb-6 p-3.5 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl text-xs font-semibold flex items-center gap-2">
              ⚠️ {error}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">
                Adresse Email
              </label>
              <input
                type="email"
                placeholder="nom@exemple.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-950 border border-gray-850 text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
              />
            </div>

            <div>
              <label className="block text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">
                Mot de passe
              </label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                className="w-full bg-gray-950 border border-gray-850 text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
              />
            </div>

            <button
              disabled={loading}
              onClick={handleLogin}
              className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-gray-950 font-bold rounded-xl py-3.5 text-sm transition-all shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20 disabled:opacity-50 mt-6 active:scale-[0.98]"
            >
              {loading ? "Connexion en cours..." : "Se connecter"}
            </button>
          </div>

          <p className="text-gray-500 text-xs text-center mt-6">
            Retourner à{" "}
            <Link to="/" className="text-emerald-400 hover:underline">
              l'accueil
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}