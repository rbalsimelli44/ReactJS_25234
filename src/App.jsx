import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Inicio from './pages/Inicio';
import Servicios from './pages/Servicios';
import Productos from './pages/Productos';
import Nosotros from './pages/Nosotros';
import Opiniones from './pages/Opiniones';
import Contacto from './pages/Contacto';
import Navbar from './pages/Navbar';
import ProductoDetalle from './pages/DetalleProducto';
import Footer from './components/layout/Footer';
import Pagar from "./pages/Pagar";
import RutaProtegida from "./pages/RutaProtegida";
import IniciarSesion from "./pages/IniciarSesion";

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

export default function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [usuario, setUsuario] = useState({ nombre: "", email: "" });

  return (
    <div>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/servicios' element={<Servicios />} />
        <Route path='/productos' element={<Productos />} />
        <Route path='/productos/:id' element={<ProductoDetalle />} />
        <Route path='/productos/:categoria/:id' element={<ProductoDetalle />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/opiniones' element={<Opiniones />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path="/iniciar-sesion" element={<IniciarSesion
              setIsAuthenticated={setIsAuthenticated}
              setUsuario={setUsuario}/>
        }/>
        <Route path="/pagar" element={<RutaProtegida 
              isAuthenticated={isAuthenticated}>
              <Pagar
                setIsAuthenticated={setIsAuthenticated}
                setUsuario={setUsuario}
                usuario={usuario}/>
          </RutaProtegida>
        }/>
      </Routes>
      <Footer />
    </div>
  );
};
