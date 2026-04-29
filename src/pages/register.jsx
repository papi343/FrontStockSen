import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
            const response = await axios.post("http://127.0.0.1:8000api/register",
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
        <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
            <h1>Inscription</h1>
            <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} placeholder="Nom" />
            <input type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} placeholder="Prenom" />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="">Selectionner un role</option>
                <option value="admin">Admin</option>
                <option value="fournisseur">Fournisseur</option>
                <option value="gestionnaire">Gestionnaire</option>
            </select>
            <button onClick={handleRegister} disabled={loading}>
                {loading ? "Inscription..." : "S'inscrire"}
            </button>
            {error && <p>{error}</p>}
        </div>
    )
}