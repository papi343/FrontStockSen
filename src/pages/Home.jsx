import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans selection:bg-emerald-500 selection:text-black">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none opacity-20 overflow-hidden">
        <div className="absolute -top-[30%] left-[20%] w-[600px] h-[600px] rounded-full bg-emerald-500 blur-[150px]" />
        <div className="absolute -top-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-blue-500 blur-[130px]" />
      </div>

      {/* Landing Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-gray-950/80 border-b border-gray-800/80">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center font-bold text-black text-xl shadow-lg shadow-emerald-500/20">
              S
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent tracking-wide">
              StockSEN
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="#features" className="hover:text-white transition-colors">Fonctionnalités</a>
            <a href="#stats" className="hover:text-white transition-colors">Statistiques</a>
            <a href="#about" className="hover:text-white transition-colors">À propos</a>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              to="/login"
              className="text-sm font-semibold text-gray-300 hover:text-white transition-colors px-4 py-2"
            >
              Connexion
            </Link>
            <Link
              to="/register"
              className="text-sm font-semibold bg-emerald-500 text-gray-950 hover:bg-emerald-400 transition-all rounded-xl px-5 py-2.5 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 hover:-translate-y-0.5 active:translate-y-0"
            >
              Créer un compte
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative max-w-7xl mx-auto px-6 pt-16 pb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6">
            ✨ Gestion de stock de nouvelle génération
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-8 leading-[1.15]">
            Gérez votre stock avec{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500 bg-clip-text text-transparent">
              précision
            </span>{" "}
            et{" "}
            <span className="bg-gradient-to-r from-teal-300 via-emerald-400 to-blue-400 bg-clip-text text-transparent">
              clarté
            </span>
          </h1>

          <p className="text-gray-400 text-lg sm:text-xl leading-relaxed mb-10">
            StockSEN est la solution moderne et épurée pour suivre vos produits, gérer vos entrées/sorties en temps réel, et prendre des décisions basées sur des statistiques précises.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/register"
              className="w-full sm:w-auto text-center font-semibold bg-gradient-to-r from-emerald-500 to-teal-500 text-gray-950 hover:from-emerald-400 hover:to-teal-400 transition-all rounded-xl px-8 py-4 shadow-xl shadow-emerald-500/15 hover:shadow-emerald-500/25 hover:-translate-y-0.5 active:translate-y-0 text-base"
            >
              Commencer gratuitement
            </Link>
            <Link
              to="/login"
              className="w-full sm:w-auto text-center font-semibold bg-gray-900 hover:bg-gray-800 text-white border border-gray-800 hover:border-gray-700 transition-all rounded-xl px-8 py-4 text-base"
            >
              Accéder au Tableau de Bord
            </Link>
          </div>
        </div>

        {/* Dashboard Preview Mockup */}
        <div className="relative rounded-2xl border border-gray-800 bg-gray-900/60 p-4 md:p-6 backdrop-blur-xl shadow-2xl shadow-emerald-950/20 overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent z-10 pointer-events-none" />
          <div className="flex items-center justify-between pb-4 border-b border-gray-800/80 mb-6">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/60" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <span className="w-3 h-3 rounded-full bg-green-500/60" />
            </div>
            <div className="bg-gray-950/80 text-[10px] text-gray-500 px-3 py-1 rounded-md border border-gray-800">
              demo.stocksen.com/dashboard
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-xs">👤</div>
          </div>

          {/* Dummy Dashboard Design */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-gray-950/50 border border-gray-800/80 rounded-xl p-4">
              <span className="text-gray-500 text-[10px] uppercase font-bold tracking-wider">Total Produits</span>
              <p className="text-2xl font-bold text-emerald-400 mt-1">142</p>
            </div>
            <div className="bg-gray-950/50 border border-gray-800/80 rounded-xl p-4">
              <span className="text-gray-500 text-[10px] uppercase font-bold tracking-wider">Stock Faible</span>
              <p className="text-2xl font-bold text-red-400 mt-1">8</p>
            </div>
            <div className="bg-gray-950/50 border border-gray-800/80 rounded-xl p-4">
              <span className="text-gray-500 text-[10px] uppercase font-bold tracking-wider">Entrées</span>
              <p className="text-2xl font-bold text-blue-400 mt-1">34</p>
            </div>
            <div className="bg-gray-950/50 border border-gray-800/80 rounded-xl p-4">
              <span className="text-gray-500 text-[10px] uppercase font-bold tracking-wider">Sorties</span>
              <p className="text-2xl font-bold text-amber-400 mt-1">21</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="md:col-span-3 bg-gray-950/50 border border-gray-800/80 rounded-xl p-5 h-48 flex flex-col justify-between">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-semibold text-gray-300">Statistiques mensuelles</span>
                <span className="text-[10px] text-gray-500">Novembre - Avril</span>
              </div>
              <div className="flex items-end gap-3 h-28 pt-2">
                <div className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                  <div className="w-full flex gap-1 items-end justify-center h-full">
                    <div className="w-3 bg-emerald-500/80 rounded-t-sm h-[40%]" />
                    <div className="w-3 bg-red-500/80 rounded-t-sm h-[20%]" />
                  </div>
                  <span className="text-[9px] text-gray-500">Jan</span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                  <div className="w-full flex gap-1 items-end justify-center h-full">
                    <div className="w-3 bg-emerald-500/80 rounded-t-sm h-[75%]" />
                    <div className="w-3 bg-red-500/80 rounded-t-sm h-[45%]" />
                  </div>
                  <span className="text-[9px] text-gray-500">Fev</span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                  <div className="w-full flex gap-1 items-end justify-center h-full">
                    <div className="w-3 bg-emerald-500/80 rounded-t-sm h-[60%]" />
                    <div className="w-3 bg-red-500/80 rounded-t-sm h-[35%]" />
                  </div>
                  <span className="text-[9px] text-gray-500">Mar</span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                  <div className="w-full flex gap-1 items-end justify-center h-full">
                    <div className="w-3 bg-emerald-500/80 rounded-t-sm h-[90%]" />
                    <div className="w-3 bg-red-500/80 rounded-t-sm h-[60%]" />
                  </div>
                  <span className="text-[9px] text-gray-500">Avr</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 bg-gray-950/50 border border-gray-800/80 rounded-xl p-5 h-48 flex flex-col justify-between">
              <span className="text-xs font-semibold text-gray-300">Alertes stock faible</span>
              <div className="space-y-2.5 mt-2 flex-1 justify-center flex flex-col">
                <div className="flex justify-between items-center bg-red-500/10 border border-red-500/20 px-3 py-2 rounded-lg">
                  <span className="text-xs text-red-200">Stylos Bic</span>
                  <span className="text-[10px] bg-red-500/20 text-red-400 px-2 py-0.5 rounded font-mono">12 / 20</span>
                </div>
                <div className="flex justify-between items-center bg-red-500/10 border border-red-500/20 px-3 py-2 rounded-lg">
                  <span className="text-xs text-red-200">Cahiers A4</span>
                  <span className="text-[10px] bg-red-500/20 text-red-400 px-2 py-0.5 rounded font-mono">8 / 15</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section id="features" className="border-t border-gray-800/80 bg-gray-900/30 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Tout ce dont vous avez besoin pour piloter votre stock
            </h2>
            <p className="text-gray-400">
              Des outils performants, pensés pour la rapidité d'exécution et la fluidité au quotidien.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-emerald-500/40 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 text-xl font-bold mb-6 group-hover:scale-110 transition-transform">
                📊
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Suivi en Temps Réel</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Suivez instantanément les variations de vos stocks, les entrées et les sorties pour chaque produit de votre inventaire.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-emerald-500/40 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 text-xl font-bold mb-6 group-hover:scale-110 transition-transform">
                🔔
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Seuils d'Alerte</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Définissez des limites minimales pour vos produits et soyez alerté immédiatement pour éviter toute rupture de stock.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-emerald-500/40 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 text-xl font-bold mb-6 group-hover:scale-110 transition-transform">
                ⚡
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Rapports Visuels</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Prenez des décisions grâce à nos rapports graphiques clairs et interactifs, affichant vos tendances mensuelles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="border-t border-gray-800/80 bg-gray-950 py-24 relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              L'impact de StockSEN en chiffres
            </h2>
            <p className="text-gray-400">
              Des performances optimisées pour propulser l'efficacité opérationnelle de votre entreprise.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-6 text-center hover:border-emerald-500/20 hover:-translate-y-1 transition-all">
              <p className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent mb-2">99.8%</p>
              <h4 className="text-sm font-semibold text-white mb-1">Précision d'Inventaire</h4>
              <p className="text-xs text-gray-500">Élimination quasi-totale des écarts de stocks.</p>
            </div>

            <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-6 text-center hover:border-emerald-500/20 hover:-translate-y-1 transition-all">
              <p className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-teal-300 to-blue-400 bg-clip-text text-transparent mb-2">-45%</p>
              <h4 className="text-sm font-semibold text-white mb-1">Temps de Gestion</h4>
              <p className="text-xs text-gray-500">Moins de tâches manuelles et répétitives.</p>
            </div>

            <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-6 text-center hover:border-emerald-500/20 hover:-translate-y-1 transition-all">
              <p className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-2">10K+</p>
              <h4 className="text-sm font-semibold text-white mb-1">Produits Suivis</h4>
              <p className="text-xs text-gray-500">Par des centaines d'entreprises locales.</p>
            </div>

            <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-6 text-center hover:border-emerald-500/20 hover:-translate-y-1 transition-all">
              <p className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent mb-2">24h/7</p>
              <h4 className="text-sm font-semibold text-white mb-1">Disponibilité</h4>
              <p className="text-xs text-gray-500">Accès sécurisé partout et à tout moment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="border-t border-gray-800/80 bg-gray-900/20 py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column - Text */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6">
                💡 Notre Vision
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
                Simplifier la gestion de stock pour les entreprises du Sénégal et d'ailleurs.
              </h2>
              <p className="text-gray-400 text-base leading-relaxed mb-6">
                Chez <strong className="text-white">StockSEN</strong>, nous croyons que la gestion de stock ne devrait pas être un casse-tête administratif ni nécessiter des logiciels lourds, coûteux et complexes. 
              </p>
              <p className="text-gray-400 text-base leading-relaxed mb-8">
                Notre mission est d'offrir une plateforme intuitive, performante et accessible à tous les commerçants, fournisseurs et gestionnaires. Que vous gériez une boutique locale ou des entrepôts multiples, StockSEN s'adapte à vos besoins pour vous faire gagner en temps et en sérénité.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-gray-900/50 border border-gray-800 rounded-xl px-4 py-2 text-sm text-gray-300">
                  <span className="text-emerald-400 font-bold">✓</span> Ergonomie
                </div>
                <div className="flex items-center gap-2 bg-gray-900/50 border border-gray-800 rounded-xl px-4 py-2 text-sm text-gray-300">
                  <span className="text-emerald-400 font-bold">✓</span> Sécurité
                </div>
                <div className="flex items-center gap-2 bg-gray-900/50 border border-gray-800 rounded-xl px-4 py-2 text-sm text-gray-300">
                  <span className="text-emerald-400 font-bold">✓</span> Réactivité
                </div>
              </div>
            </div>

            {/* Right Column - Highlight Box */}
            <div className="lg:col-span-5 bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-3xl p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none group-hover:bg-emerald-500/10 transition-colors" />
              <h3 className="text-xl font-bold text-white mb-4">Pourquoi choisir StockSEN ?</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-xl">🚀</span>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Mise en route instantanée</h4>
                    <p className="text-xs text-gray-400 mt-0.5">Créez votre compte et commencez à ajouter vos produits en moins de 2 minutes.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-xl">📈</span>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Analyses claires</h4>
                    <p className="text-xs text-gray-400 mt-0.5">Visualisez vos tendances d'achat et de vente directement via un tableau de bord moderne.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-xl">🔒</span>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Données sécurisées</h4>
                    <p className="text-xs text-gray-400 mt-0.5">Vos données de stocks et d'utilisateurs sont cryptées et sauvegardées en continu.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800/80 bg-gray-950 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center font-bold text-black text-sm">
              S
            </div>
            <span className="font-bold text-white tracking-wide">StockSEN</span>
          </div>
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} StockSEN. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}
