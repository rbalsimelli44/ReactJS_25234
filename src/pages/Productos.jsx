import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CarritoCompras from "./Carrito";
import { Subtitulo } from '../components/utils/Titulos';

export default function Productos() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    fetch("https://68eaf3c776b3362414cc8783.mockapi.io/api/v1/productos")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setProductos(datos);
        setCargando(false);
      })
      .catch((error) => {
        {console.error("Error!,", error)}
        setError("Hubo un problema al cargar los productos.");
        setCargando(false);
      });
  }, []);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]); 
    alert(`Producto ${producto.nombre} agregado.`);
  }; 


  if (cargando) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
    <div id="tarjeta" >
      <Subtitulo texto="Lista de productos disponibles" />
        <ol id="lista-productos">
        {productos.map(producto => (
              <li key={producto.id} >
              <img    src={producto.imagen} 
                      alt={producto.nombre} 
                      style={{ 
                        borderRadius: '5%', 
                        marginRight: '10px',
                        width:  "150px", 
                        height: "150px" 
                        }} 
              />
                <strong>  {producto.nombre} </strong>
                <strong>  {producto.marca} </strong>
                <br />
                <span>   ${producto.precio}</span>
                <Link to={`/productos/${producto.id}`} state={{producto}}><button>Detalles</button></Link>
                <Link to={`/productos/${producto.categoria}/${producto.id}`} state={{producto}}><button>Categoria</button></Link>
                <button onClick={() => agregarAlCarrito(producto)}>Agregar</button>
              </li>
            ))}
        </ol>
    </div>
    <CarritoCompras carrito={carrito} setCarrito={setCarrito} />
    </>
  );
};