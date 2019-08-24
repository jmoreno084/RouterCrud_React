import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';


function ProductoLista({producto, guardarRecargarProductos}) {

    const eliminarProducto = id => {
        console.log("eliminando el id ...");

        // eliminando el registro
        Swal.fire({
            title: `Está seguro de eliminar el producto '${producto.nombrePlatillo}'?`,
            text: "Este proceso no es reversible",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, eliminar producto",
            cancelButtonText: "Cancelar"
        }).then(async (result)=>{
            if(result.value) {
                try {
                    const url = `http://localhost:4000/restaurant/${id}`;

                    const resultado = await axios.delete(url);
    
                    if(resultado.status===200) {
                        if(result.value) {
                            Swal.fire(
                                "Eliminado!",
                                `El producto '${producto.nombrePlatillo}' ha sido eliminado satisfactoriamente`,
                                "success"
                            );
                            
                            // consultar la API nuevamente
                            guardarRecargarProductos(true);
                        }
                    }                     
                } catch (error) {
                    console.log(error);
                    Swal.fire({
                        type: 'error',
                        title: 'Error',
                        text: 'Hubo un error al eliminar producto, intente de nuevo más tarde'
                    });                    
                }
            }
        });
    }

    return (
        <li data-categoria={producto.categoria} className="list-group-item d-flex justify-content-between align-items-center">
            <p>
                {producto.nombrePlatillo} {' '}
                <span className="font-weight-bold">${producto.precioPlatillo}</span>
            </p>
            <div>
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
            </div>
        </li>
        
    );
}

export default ProductoLista;