import { Routes, Route } from "react-router-dom"
import Login from "./pages/login"
import Register from "./pages/register"
import Layout from "./components/Layout"

import Produits from "./pages/Produits"


function App() {


  return (
    <Routes>
      <Route path="/" element={<h1> Bienvenue sur Stocksen</h1>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<h1>Dashboard</h1>} />
        <Route path="/produits" element={<Produits />} />
        <Route path="/mouvements" element={<h1>Mouvements</h1>} />
      </Route>
    </Routes>
  )
}

export default App
