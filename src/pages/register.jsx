import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Register() {
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleRegister = async () => {
        setError("");
        setLoading(true);
        try {
            const response = await axios.post("http://127.0.0.1:8000/api/register",
                {
                    nom,
                    prenom,
                    email,
                    password,
                    role,
                }
            );
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user", JSON.stringify(response.data.user));
            navigate("/dashboard");

        } catch (e) {
            setError(e.response?.data?.message || "Une erreur s'est produite")

        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-950">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 w-full max-w-md">
                <h1 className="text-white text-2xl font-bold text-center mb-2">Inscription</h1>
                <p className="text-gray-400 text-sm text-center mb-6">Connectz-vous a votre compte</p>
                {error && (
                    <div className="mb-4 p-3 bg-red-500/20 text-red-400 px-4 py-2 rounded-lg text-sm font-medium">
                        {error}
                    </div>
                )}
                <label className="text-gray-400 text-xs font-bold uppercase">Nom</label>
                <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} placeholder="Nom"
                    className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-3 text-sm mt-1 mb-4 focus:border-emerald-500" />
                <label className="text-gray-400 text-xs font-bold uppercase">Prenom</label>
                <input type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} placeholder="Prenom"
                    className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-3 text-sm mt-1 mb-4 focus:border-emerald-500" />
                <label className="text-gray-400 text-xs font-bold uppercase">Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"
                    className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-3 text-sm mt-1 mb-4 focus:border-emerald-500" />
                <label className="text-gray-400 text-xs font-bold uppercase">Mot de passe</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="......."
                    className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-3 text-sm mt-1 mb-4 focus:border-emerald-500" />
                <label className="text-gray-400 text-xs font-bold uppercase">Role</label>
                <select value={role} onChange={(e) => setRole(e.target.value)}
                    className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-3 text-sm mt-1 mb-4 focus:border-emerald-500"
                >
                    <option value="">Selectionner un role</option>
                    <option value="admin">Admin</option>
                    <option value="fournisseur">Fournisseur</option>
                    <option value="gestionnaire">Gestionnaire</option>
                </select>
                <button onClick={handleRegister} disabled={loading}
                    className="w-full bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 transition  text-white rounded-xl px-4 py-3 text-sm font-medium mt-6">
                    {loading ? "Inscription..." : "S'inscrire"}
                </button>
                <p className="text-gray-400 text-xs text-center mt-4">
                    Vous avez deja un compte ?
                    <Link to="/login" className="text-emerald-400 hover:text-emerald-300">Connectez-vous</Link>
                </p>
            </div>
        </div>
    );
}