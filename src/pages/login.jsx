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
        <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
            {error && <p style={{ color: "red" }}> {error}</p>}
            <input type="email" placeholder="Votre email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Mot de passe" value={password} onChange={(e) => setpassword(e.target.value)} />
            {error && <p style={{ color: "red" }}> {error}</p>}
            <button disabled={loading} onClick={handleLogin}> {loading ? "Connexion..." : "Se connecter"}</button>
        </div>
    )
}