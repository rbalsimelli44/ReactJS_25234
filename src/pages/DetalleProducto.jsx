import { Link, useParams, useLocation } from "react-router-dom";

const ProductoDetalle = () => {
 
    const { id } = useParams();
    const location = useLocation();
    const producto = location.state?.producto;
 
if (!producto) {
    return (
      <div>
        <p>No se pudo cargar el producto</p>
        <Link to="/carrito">
          <button>Volver a Productos</button>
        </Link>
      </div>
    );
  }
 
  return(
    <>
    <div id="lista-productos" >
    <h2> { id } Detalles de {producto.nombre}</h2>
    <strong><h3> {producto.marca} </h3></strong>
    <br />
    <ul>
        <li key={producto.id}>
            <img    src={producto.imagen} 
                      alt={producto.nombre} 
                      style={{ 
                        borderRadius: '5%', 
                        marginRight: '10px',
                        width:  "150px", 
                        height: "150px" 
                        }} 
              />
            <br />
            <br />
            <p><strong>Descripción: </strong></p>
            <p>{producto.descripcion}</p>
            <p>Material: {producto.material}  </p>
            <p>Categoria: {producto.categoria}</p>
            <br />
            <strong>${producto.precio}</strong>
        </li>
        <hr />
        <Link to={`/productos`}><button>Volver</button></Link>
    </ul>
    </div>
    </>
  );
}; export default ProductoDetalle;