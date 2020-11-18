import React, { Fragment, useState } from 'react';

const Pregunta = () => {

     // definir el state 
     const [cantidad, guardarCantidad] = useState(0)

     //Funcion que lee el presupuesto
     const definirPresupuesto = e => {
         guardarCantidad(parseInt(e.target.value, 10 ))
     }

     
     // Submit para definir el presupuesto 
       const agregarPresupuesto = e => {
           e.preventDefault();
         
          // Validar 
   

          // si se pasa la validacion 


       }
       

    return ( 
      <Fragment>
          <h2> Coloca tu Presupuesto</h2>

          <form
             onSubmit={agregarPresupuesto}
          >
              <input 
              type="number"
              className="u-full-width"
              placeholder="coloca tu presupuesto"
              onChange={definirPresupuesto}
              />

              <input type="submit"
              className="button-primary u-full-width"
              value="Definir Presupuesto"
              />
          </form>
      </Fragment>
     );
}
 
export default Pregunta;