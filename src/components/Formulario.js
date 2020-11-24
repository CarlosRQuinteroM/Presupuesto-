import React, { useState} from 'react';

const Formulario = () => {
     
     
     const[nombre, guardarNombre] = useState('')
     const [cantidad, GuardarCantidad] = useState(0)
   // cuando el usuario agrega un gasto
   const agregarGasto = e => {
       e.preventDefault()


      // Validar gasto 
    

      //construir el gasto 


      //pasar el gasto al componente principal

    
     // resetear el form 

   }
   
     return ( 
         <form
         onSubmit={agregarGasto}
        
         >
            <h2> Agrega tus datos aqui</h2>

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

export default Formulario;
