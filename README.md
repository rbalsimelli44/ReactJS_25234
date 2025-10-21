# 🛒 eCommerce React App

Este proyecto es una **aplicación eCommerce desarrollada con React JS y Vite**, que implementa un sistema de carrito de compras, conexión a una API de productos, rutas dinámicas y protegidas.  
Se utilizan **Bootstrap** para el diseño responsivo y **FontAwesome** para íconos.

---

## 🚀 Tecnologías utilizadas

- ⚛️ **React JS** (con Vite)
- 🎨 **Bootstrap 5**
- 💎 **FontAwesome**
- 🔄 **React Router DOM**
- 🌐 **Fetch API / Axios**
- 🪝 **Hooks (useState, useEffect)**
- 🔐 **Rutas protegidas**

---

## 🧩 Estructura del proyecto

src/
├── components/
│ ├── layout/
│ | ├── Footer.jsx
│ | ├── Gallery.jsx
│ | └── Header.jsx
| |
│ ├── utils/
│ | ├── Botones.jsx
│ | ├── Formulario.jsx
│ | ├── MockAPI.jsx
│ | ├── SocialIcons.jsx
│ └─└── Titulos.jsx
│
├── context/
|
├── hooks/
|
├── pages/
│ ├── Carrito.jsx
│ ├── Contacto.jsx
│ ├── DetalleProducto.jsx
│ ├── IniciarSesion.jsx
│ ├── Inicio.jsx
│ ├── Navbar.jsx
│ ├── Nosotros.jsx
│ ├── Opiniones.jsx
│ ├── Pagar.jsx
│ ├── Productos.jsx
│ ├── RutaProtegida.jsx
│ └── Servicios.jsx
│
├── routes/
│ └── AppRoutes.jsx
│
├── styles/
│ ├── App.css
│ ├── index.css
│ └── socialicons.css
|
├── App.jsx
└── main.jsx

---

## 🧠 Requerimientos implementados

### ✅ **Requerimiento #1: Manejo básico del carrito de compras**

**Objetivo:** Crear una funcionalidad básica para agregar y visualizar productos en un carrito.

**Características:**
- Componente `ProductList` para mostrar los productos disponibles.
- Hook `useState` para manejar el estado del carrito.
- Evento `onClick` en cada producto para **agregarlo al carrito**.
- Componente `Cart` para **mostrar los productos seleccionados**.
- Diseño base del eCommerce con un `Layout` que incluye `Navbar` y `Footer`.

---

### 🌐 **Requerimiento #2: Conexión con una API**

**Objetivo:** Integrar la aplicación con una API externa que provea información sobre los productos.

**Características:**
- Uso de `useEffect` para **consumir la API de productos**.
- Estado de carga (`loading`) y manejo de errores (`error`).
- Actualización dinámica de la interfaz al obtener los datos.
- Ampliación del carrito con productos provenientes de la API.
- Diseño actualizado con tarjetas de productos (Bootstrap Cards).

---

### 🧭 **Requerimiento #3: Integración de rutas**

**Objetivo:** Implementar navegación entre diferentes secciones de la aplicación.

**Características:**
- Uso de **React Router DOM**.
- Rutas implementadas para `Home`, `Productos`, `Carrito`, `Login` y `404`.
- Componente separado para cada sección.
- Estado de carga y manejo de errores en las vistas.
- Navegación fluida entre productos y páginas.

---

### 🔐 **Requerimiento #4: Rutas dinámicas y protegidas**

**Objetivo:** Agregar interactividad avanzada con rutas dinámicas y protección de rutas.

**Características:**
- Rutas dinámicas como `/productos/:id` y `/productos/:categoria/:id` para mostrar detalles individuales.
- Rutas protegidas mediante componente `ProtectedRoute`.
- Simulación de autenticación (usuario logueado / no logueado).
- Navbar con enlaces condicionales según el estado del usuario.
- Interactividad visual con FontAwesome y transiciones suaves.


