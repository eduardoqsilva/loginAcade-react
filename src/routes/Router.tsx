import { Routes, Route } from "react-router-dom"
import { Register } from "../pages/Register"
import { Login } from "../pages/Login"
import { Terms } from "../pages/Terms"
import { Home } from "../pages/Home"

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/Home" element={<Home />} />
    </Routes>
  )
}