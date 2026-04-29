# 📦 StockSen - Frontend

**StockSen** est une solution moderne et intuitive de gestion de stock, conçue pour optimiser le suivi des marchandises, des mouvements et des intervenants. Cette application web performante offre une interface fluide pour la gestion des stocks en temps réel.

---

## 🚀 Aperçu du Projet

L'application permet de centraliser toutes les opérations liées aux stocks, de la réception des marchandises par les fournisseurs à la distribution gérée par les gestionnaires, le tout supervisé par un administrateur.

### ✨ Fonctionnalités Principales

- **Authentification Sécurisée** : Connexion par jeton (JWT/Sanctum).
- **Gestion des Mouvements de Stock** :
  - Entrées (Approvisionnements).
  - Sorties (Ventes/Livraisons).
  - Ajustements de stock.
- **Gestion du Catalogue** : Produits, catégories et unités de mesure.
- **Tableau de Bord Dynamique** : Statistiques en temps réel sur l'état des stocks et les mouvements récents.
- **Rapports & Historique** : Suivi complet de chaque transaction de stock.

---

## 👥 Rôles et Permissions

Le système repose sur un contrôle d'accès basé sur les rôles (**RBAC**) :

- 🛠️ **Administrateur** : 
  - Accès complet à tous les modules.
  - Gestion des utilisateurs et des rôles.
  - Configuration globale du système.
  - Visualisation de tous les rapports financiers et de stock.

- 🚚 **Fournisseur** :
  - Gestion de ses propres produits.
  - Enregistrement des livraisons de marchandises.
  - Consultation de l'historique des approvisionnements fournis.

- 📋 **Gestionnaire** :
  - Suivi quotidien des stocks.
  - Enregistrement des sorties de stock.
  - Alertes de stock bas.
  - Génération de rapports opérationnels.

---

## 🛠️ Stack Technique

- **Framework** : [React 19](https://react.dev/)
- **Outil de Build** : [Vite](https://vitejs.dev/)
- **Styling** : [Tailwind CSS](https://tailwindcss.com/)
- **Navigation** : [React Router 7](https://reactrouter.com/)
- **Client HTTP** : [Axios](https://axios-http.com/)

---

## ⚙️ Installation et Configuration

### Prérequis
- [Node.js](https://nodejs.org/) (version 18 ou supérieure recommandée)
- Un backend compatible (ex: Laravel) pour les appels API.

### Étapes d'installation

1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/votre-compte/stocksenfront.git
   cd stocksenfront
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Configurer l'environnement**
   Créez un fichier `.env` à la racine et configurez l'URL de votre API :
   ```env
   VITE_API_URL=http://localhost:8000/api
   ```

4. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```

---

## 📂 Structure du Projet

```text
src/
├── api/          # Configuration Axios et appels API
├── assets/       # Images et ressources statiques
├── components/   # Composants réutilisables (Boutons, Inputs, etc.)
├── layouts/      # Mises en page (AdminLayout, GuestLayout)
├── pages/        # Vues principales (Dashboard, Produits, Mouvements)
├── routes/       # Configuration du routage
└── App.jsx       # Composant racine
```

---


---

**Développé avec ❤️ pour une gestion de stock simplifiée.**
