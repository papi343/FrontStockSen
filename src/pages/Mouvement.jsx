
import { useState, useEffect } from "react";
import axios from "axios";

export default function Mouvements() {
    // ── States ─────────────────────────────
    const [mouvements, setMouvements] = useState([]); // liste des mouvements
    const [produits, setProduits] = useState([]); // liste des produits pour le select
    const [loading, setLoading] = useState(true); // chargement initial
    const [saving, setSaving] = useState(false); // chargement du formulaire

    // Formulaire nouveau mouvement
    const [form, setForm] = useState({
        produit_id: "",
        type: "",
        quantite: "",
        note: "",
    });

    // ── Charger les données au démarrage ───
    useEffect(() => {
        fetchMouvements();
        fetchProduits();
    }, []);

    // Récupérer les mouvements depuis le backend
    const fetchMouvements = async () => {
        try {
            const token = localStorage.getItem("token");
            const res = await axios.get("http://127.0.0.1:8000/api/mouvements", {
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${token}`
                },
            });
            setMouvements(res.data);
        } catch (err) {
            console.error("Erreur chargement mouvements:", err);
        } finally {
            setLoading(false);
        }
    };

    // Récupérer les produits pour le select
    const fetchProduits = async () => {
        try {
            const token = localStorage.getItem("token");
            const res = await axios.get("http://127.0.0.1:8000/api/produits", {
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${token}`
                },
            });
            setProduits(res.data);
        } catch (err) {
            console.error("Erreur chargement produits:", err);
        }
    };

    // ── Enregistrer un nouveau mouvement ───
    const handleSubmit = async () => {
        // Vérifier que tous les champs sont remplis
        if (!form.produit_id || !form.type || !form.quantite) {
            alert("Veuillez remplir tous les champs obligatoires");
            return;
        }

        setSaving(true);
        try {
            const token = localStorage.getItem("token");
            await axios.post(
                "http://127.0.0.1:8000/api/mouvements",
                form,
                {
                    headers: {
                        Accept: "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            // Réinitialiser le formulaire
            setForm({ produit_id: "", type: "", quantite: "", note: "" });

            // Recharger la liste
            fetchMouvements();
        } catch (err) {
            console.error("Erreur enregistrement:", err);
        } finally {
            setSaving(false);
        }
    };

    // ── Mise à jour du formulaire ───────────
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <div className="p-6 space-y-6">

            {/* ── FORMULAIRE NOUVEAU MOUVEMENT ── */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <h2 className="text-white font-bold text-lg mb-5">Nouveau Mouvement</h2>

                <div className="grid grid-cols-2 gap-4">

                    {/* Produit */}
                    <div>
                        <label className="text-gray-400 text-xs font-bold uppercase mb-2 block">
                            Produit *
                        </label>
                        <select
                            name="produit_id"
                            value={form.produit_id}
                            onChange={handleChange}
                            className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-500"
                        >
                            <option value="">Sélectionner un produit...</option>
                            {/* Produits viennent du backend */}
                            {produits.map((p) => (
                                <option key={p.id} value={p.id}>
                                    {p.nom}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Type */}
                    <div>
                        <label className="text-gray-400 text-xs font-bold uppercase mb-2 block">
                            Type *
                        </label>
                        <select
                            name="type"
                            value={form.type}
                            onChange={handleChange}
                            className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-500"
                        >
                            <option value="">Entrée / Sortie</option>
                            <option value="entree">Entrée</option>
                            <option value="sortie">Sortie</option>
                        </select>
                    </div>

                    {/* Quantité */}
                    <div>
                        <label className="text-gray-400 text-xs font-bold uppercase mb-2 block">
                            Quantité *
                        </label>
                        <input
                            type="number"
                            name="quantite"
                            value={form.quantite}
                            onChange={handleChange}
                            placeholder="Ex: 10"
                            className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-500"
                        />
                    </div>

                    {/* Note */}
                    <div>
                        <label className="text-gray-400 text-xs font-bold uppercase mb-2 block">
                            Note
                        </label>
                        <input
                            type="text"
                            name="note"
                            value={form.note}
                            onChange={handleChange}
                            placeholder="Optionnel..."
                            className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-500"
                        />
                    </div>
                </div>

                {/* Bouton Enregistrer */}
                <div className="flex justify-end mt-4">
                    <button
                        onClick={handleSubmit}
                        disabled={saving}
                        className="bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-white font-bold px-6 py-2.5 rounded-xl text-sm transition"
                    >
                        {saving ? "Enregistrement..." : "Enregistrer"}
                    </button>
                </div>
            </div>

            {/* ── HISTORIQUE DES MOUVEMENTS ───── */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-800">
                    <h2 className="text-white font-bold text-lg">Historique des Mouvements</h2>
                </div>

                {loading ? (
                    // Chargement
                    <p className="text-gray-400 text-sm p-6">Chargement...</p>
                ) : (
                    <table className="w-full text-sm">
                        {/* En-têtes */}
                        <thead>
                            <tr className="border-b border-gray-800">
                                <th className="text-left text-gray-400 font-medium px-6 py-3">Date</th>
                                <th className="text-left text-gray-400 font-medium px-6 py-3">Produit</th>
                                <th className="text-left text-gray-400 font-medium px-6 py-3">Type</th>
                                <th className="text-left text-gray-400 font-medium px-6 py-3">Quantité</th>
                                <th className="text-left text-gray-400 font-medium px-6 py-3">Note</th>
                            </tr>
                        </thead>

                        {/* Lignes - données viennent du backend */}
                        <tbody>
                            {mouvements.map((m, i) => (
                                <tr
                                    key={m.id}
                                    className="border-b border-gray-800 hover:bg-gray-800/50 transition"
                                >
                                    {/* Date */}
                                    <td className="text-gray-400 px-6 py-4">
                                        {new Date(m.created_at).toLocaleDateString("fr-FR")}
                                    </td>

                                    {/* Nom du produit */}
                                    <td className="text-white px-6 py-4 font-medium">
                                        {m.produit?.nom}
                                    </td>

                                    {/* Badge Type */}
                                    <td className="px-6 py-4">
                                        <span
                                            className={`text-xs font-bold px-3 py-1 rounded-full ${m.type === "entree"
                                                ? "bg-emerald-500/20 text-emerald-400"
                                                : "bg-red-500/20 text-red-400"
                                                }`}
                                        >
                                            {m.type === "entree" ? "ENTRÉE" : "SORTIE"}
                                        </span>
                                    </td>

                                    {/* Quantité avec + ou - */}
                                    <td className="px-6 py-4">
                                        <span
                                            className={`font-bold ${m.type === "entree" ? "text-emerald-400" : "text-red-400"
                                                }`}
                                        >
                                            {m.type === "entree" ? "+" : "-"}{m.quantite}
                                        </span>
                                    </td>

                                    {/* Note */}
                                    <td className="text-gray-400 px-6 py-4">
                                        {m.note || "—"}
                                    </td>
                                </tr>
                            ))}

                            {/* Si aucun mouvement */}
                            {mouvements.length === 0 && (
                                <tr>
                                    <td colSpan={5} className="text-center text-gray-500 py-8">
                                        Aucun mouvement enregistré
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                )}
            </div>

        </div>
    );
}
