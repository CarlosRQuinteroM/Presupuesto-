import React, { useState} from 'react';
import PropTypes from 'prop-types'
import Error from './Error';
import shortid from 'shortid';

const Formulario = ({guardarGasto, guardarCrearGasto}) => {
     
     
     const [nombre, guardarNombre] = useState('')
     const [cantidad, GuardarCantidad] = useState(0)
     const [error, guardarError] = useState(false)
  
  
     // cuando el usuario agrega un gasto
   const agregarGasto = e => {
       e.preventDefault()


      // Validar gasto 
      if ( cantidad < 1 || isNaN(cantidad) || nombre.trim() === '') {
          guardarError(true)
          return
      }

      //construir el gasto 
       const gasto = {
           nombre,
           cantidad,
           id:shortid.generate()
       }
      
      //pasar el gasto al componente principal
      
        guardarGasto(gasto);
        guardarCrearGasto(true);

    
     // resetear el form 
      guardarNombre('');
      GuardarCantidad(0);
   }
   
     return ( 
         <form
         onSubmit={agregarGasto}
         >
            <h2> Agrega tus datos aqui</h2>

            {error ? <Error mensaje="Ambos campos son obligatorios o Presupuesto incorrecto" /> 
              : null }

            <div className="campo">
                <label>Nombre Gasto</label>
                <input 
                  type="text"
                  className="u-full-width"
                  placeholder="Ej. Transporte"
                  value={nombre}
                  onChange={e => guardarNombre(e.target.value)}
                /> 
                   </div>

            <div className="campo">
                <label>Cantidad Gasto</label>
                <input 
                  type="number"
                  className="u-full-width"
                  placeholder="Ej. 300"
                  value={cantidad}
                  onChange={e =>  GuardarCantidad(e.target.value)}
                 />
               </div>

              <input 
                 type="submit"
                 className="button-primary u-full-width"
                 value="agregar Gasto"
              />
            
            
         </form>

     );
   }
   Formulario.propTypes = {
    guardarCrearGasto: PropTypes.func.isRequired,
    guardarGasto: PropTypes.func.isRequired
   }
export default Formulario;
