import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const chartData = [
    { mois: "Nov", entrees: 14, sorties: 9 },
    { mois: "Dec", entrees: 18, sorties: 12 },
    { mois: "Jan", entrees: 10, sorties: 7 },
    { mois: "Fev", entrees: 22, sorties: 15 },
    { mois: "Mar", entrees: 16, sorties: 10 },
    { mois: "Avr", entrees: 34, sorties: 21 },
];

const alertes = [
    { nom: "Stylos Bic", stock: 12, seuil: 20 },
    { nom: "Cahiers A4", stock: 8, seuil: 15 },
    { nom: "Rames papier", stock: 5, seuil: 10 },
];

const stats = [
    { label: "Total Produits", value: "142", color: "#10b981", icon: "📦" },
    { label: "Stock Faible", value: "8", color: "#ef4444", icon: "⚠️" },
    { label: "Entrées", value: "34", color: "#3b82f6", icon: "↑" },
    { label: "Sorties", value: "21", color: "#f59e0b", icon: "↓" },
];

export default function Dashboard() {
    return (
        <div className="p-6 space-y-6">

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4">
                {stats.map((s) => (
                    <div key={s.label} className="bg-gray-900 border border-gray-800 rounded-2xl p-4">
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-gray-500 text-xs uppercase tracking-wider">{s.label}</span>
                            <span className="text-lg">{s.icon}</span>
                        </div>
                        <p className="text-3xl font-bold" style={{ color: s.color }}>
                            {s.value}
                        </p>
                    </div>
                ))}
            </div>

            {/* Chart + Alertes */}
            <div className="grid grid-cols-5 gap-4">

                {/* Chart */}
                <div className="col-span-3 bg-gray-900 border border-gray-800 rounded-2xl p-5">
                    <h2 className="text-white font-bold mb-4">Entrées / Sorties</h2>
                    <ResponsiveContainer width="100%" height={200}>
                        <BarChart data={chartData}>
                            <XAxis dataKey="mois" tick={{ fill: "#6b7280", fontSize: 11 }} axisLine={false} tickLine={false} />
                            <YAxis tick={{ fill: "#6b7280", fontSize: 11 }} axisLine={false} tickLine={false} />
                            <Tooltip contentStyle={{ background: "#1f2937", border: "1px solid #374151", borderRadius: "8px", color: "#f9fafb" }} />
                            <Bar dataKey="entrees" fill="#10b981" radius={[4, 4, 0, 0]} name="Entrées" />
                            <Bar dataKey="sorties" fill="#ef4444" radius={[4, 4, 0, 0]} name="Sorties" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Alertes */}
                <div className="col-span-2 bg-gray-900 border border-gray-800 rounded-2xl p-5">
                    <h2 className="text-white font-bold mb-4">Alertes Stock Faible</h2>
                    <div className="space-y-3">
                        {alertes.map((a) => (
                            <div key={a.nom} className="bg-red-500/5 border border-red-500/20 rounded-xl p-3">
                                <div className="flex justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                                        <span className="text-white text-sm">{a.nom}</span>
                                    </div>
                                    <span className="text-red-400 text-xs">Stock bas</span>
                                </div>
                                <div className="w-full bg-gray-800 rounded-full h-1.5">
                                    <div className="bg-red-500 h-1.5 rounded-full" style={{ width: `${(a.stock / a.seuil) * 100}%` }} />
                                </div>
                                <div className="flex justify-between mt-1">
                                    <span className="text-gray-600 text-xs">Stock: {a.stock}</span>
                                    <span className="text-gray-600 text-xs">Seuil: {a.seuil}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}