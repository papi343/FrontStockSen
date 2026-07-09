import { NavLink } from "react-router-dom";

export default function Sidebar() {
    const links = [
        { path: "/dashboard", label: "Dashboard" },
        { path: "/produits", label: "Produits" },
        { path: "/mouvements", label: "Mouvements" },
    ];
    return (
        <div className="bg-gray-900 border-r border-gray-800 h-screen w-56 flex flex-col p-4">
            <h2 className="text-white font-bold text-lg mb-6">StockSEN</h2>
            <div className=" flex flex-col gap-2">
                {links.map((link) => (
                    <NavLink key={link.path} to={link.path}
                        className={({ isActive }) => isActive ? "bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-lg text-sm font-medium" : "text-gray-400 hover:text-white px-4 py-2 rounded-lg text-sm"}>
                        {link.label}
                    </NavLink>
                ))}

            </div>
        </div>
    )
}