import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        setError('');
        setLoading(true);
        try {
            const res = await axios.post("http://127.0.0.1:8000api/login",
                {
                    email,
                    password,
                }
            );
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));
            navigate("/dashboard");

        } catch (error) {
            setError(error.response?.data?.message || " email ou mot de passe incorrect");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-950">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 w-full max-w-md">
                <h1 className="text-white text-2xl font-bold text-center mb-2">Stoksen</h1>
                <p className="text-gray-400 text-sm text-center mb-6">Connectz-vous a votre compte</p>


                {error && (
                    <div className="mb-4 p-3 bg-red-500/20 text-red-400 px-4 py-2 rounded-lg text-sm font-medium">
                        {error}
                    </div>)
                }
                <label className="text-gray-400 text-xs font-bold uppercase">Email</label>
                <input type="email" placeholder="Votre email" value={email} onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-3 text-sm mt-1 mb-4 focus:border-emerald-500" />
                <label className="text-gray-400 text-xs font-bold uppercase">Mot de passe</label>
                <input type="password" placeholder=".........." value={password} onChange={(e) => setpassword(e.target.value)}
                    className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-3 text-sm mt-1 mb-4 focus:border-emerald-500" />
                <button disabled={loading} onClick={handleLogin}
                    className="w-full bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 transition  text-white rounded-xl px-4 py-3 text-sm font-medium mt-6">
                    {loading ? "Connexion..." : "Se connecter"} </button>
            </div>

        </div>
    );
}