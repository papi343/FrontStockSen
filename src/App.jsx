import { Routes, Route } from "react-router-dom"
import Login from "./pages/login"
import Register from "./pages/register"
import Layout from "./components/Layout"
import Dashboard from "./pages/Dashboard"

import Produits from "./pages/Produits"


function App() {


  return (
    <Routes>
      <Route path="/" element={<h1> Bienvenue sur Stocksen</h1>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/produits" element={<Produits />} />
        <Route path="/mouvements" element={<Mouvements />} />
      </Route>
    </Routes>
  )
}

export default App
