import { useNavigate } from "react-router-dom";
import axios from "axios";


export default function Navbar() {
    const navigate = useNavigate();
    const handleLogout = async () => {
        const token = localStorage.getItem("token");
        try {
            const res = await axios.post("http://127.0.0.1:8000api/logout", {}, {
                headers: {
                    accept: "application/json",
                    Authorization: `Bearer ${token}`
                }
            })
            if (res.status === 200) {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                navigate("/login");

            }

        }
        catch (error) {
            console.error("Erreur de deconnexion ", error);
        }

    }
    return (
        <nav className="bg-gray-900 border-b border-gray-800 px-6 py-4 flex items-center justify-between ">
            <h1 className="text-white font-bold text-xl">Stock Management System</h1>
            <button onClick={handleLogout} className="text-red-400 hover:text-red-300 text-sm font-medium">Se deconnecter</button>
        </nav>
    )

}