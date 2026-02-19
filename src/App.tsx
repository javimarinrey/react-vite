import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.tsx";
import Login from "./pages/Login.tsx";
import NotFound from "./pages/NotFound.tsx";
import Layout from "./components/layout/Layout.tsx";
import ProtectedRoute from "./components/auth/ProtectedRoute.tsx";

function App() {

  return (
      <Routes>
          {/* RUTA PÚBLICA */}
          <Route path="/login" element={<Login />} />

          {/* RUTAS PROTEGIDAS */}
          <Route element={<ProtectedRoute />}>
              <Route element={<Layout/>}>
                  <Route path="/" element={<Home />} />
              </Route>
          </Route>

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
      </Routes>
  )
}

export default App
