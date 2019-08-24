import React from 'react';
import { Link } from 'react-router-dom';


function ProductoLista({producto}) {

    const eliminarProducto = id => {
        console.log("eliminando el id ...");
    }

    return (
        <li data-categoria={producto.categoria} className="list-group-item d-flex justify-content-between aligns-items-center">
            <p>
                {producto.nombrePlatillo} {' '}
                <span className="font-weight-bold">${producto.precioPlatillo}</span>
            </p>
            <Link
                to={`/productos/editar/${producto.id}`}    
                className="btn btn-success mr-2"
            > 
                Editar
            </Link>
            <button
                type="button"
                className="btn btn-danger"
                onClick={()=>eliminarProducto(producto.id)}
            >Eliminar &times;</button>
        </li>
        
    );
}

export default ProductoLista;