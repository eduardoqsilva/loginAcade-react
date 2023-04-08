import { Routes, Route } from "react-router-dom"
import { Register } from "../pages/Register"
import { Login } from "../pages/Login"

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}