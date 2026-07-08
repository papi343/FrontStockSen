import axios from "axios";
import { useEffect, useState } from "react";

export default function Produits() {
    const [produits, setProduis] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const getProduits = async () => {
            try {
                const token = localStorage.getItem("token");
                const res = await axios.get("http://127.0.0.1:8000/api/produits",
                    {
                        headers: {
                            Accept: "application/json",
                            Authorization: `Bearer ${token}`
                        }
                    });

                if (res.status === 200) {
                    setProduis(res.data.produits);
                }

            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

    }, [])



    return (
        <div className="p-6">

            <div className="flex items-center justify-between mb-6">
                <h1 className="text-white text-2xl font-bold">Produits</h1>
                <button className="bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-bold px-4 py-2 rounded-xl transition">
                    + Ajouter produit
                </button>
            </div>

            {loading ? (
                <p className="text-gray-400">Chargement...</p>
            ) : (
                <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-gray-800">
                                <th className="text-left text-gray-400 font-medium px-6 py-4">Nom</th>
                                <th className="text-left text-gray-400 font-medium px-6 py-4">Categorie</th>
                                <th className="text-left text-gray-400 font-medium px-6 py-4">Quantite</th>
                                <th className="text-left text-gray-400 font-medium px-6 py-4">Prix</th>
                                <th className="text-left text-gray-400 font-medium px-6 py-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {produits.map((p) => (
                                <tr key={p.id} className="border-b border-gray-800 hover:bg-gray-800/50 transition">
                                    <td className="text-white px-6 py-4">{p.nom}</td>
                                    <td className="text-gray-400 px-6 py-4">{p.categorie}</td>
                                    <td className="text-gray-400 px-6 py-4">{p.quantite}</td>
                                    <td className="text-gray-400 px-6 py-4">{p.prix}</td>
                                    <td className="px-6 py-4 flex gap-2">
                                        <button className="bg-blue-500/20 text-blue-400 text-xs px-3 py-1 rounded-lg">
                                            Modifier
                                        </button>
                                        <button className="bg-red-500/20 text-red-400 text-xs px-3 py-1 rounded-lg">
                                            Supprimer
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

        </div>
    );

}