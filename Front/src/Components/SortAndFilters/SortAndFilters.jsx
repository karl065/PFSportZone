import React from 'react'
import Styles from './SortAndFilters.module.css';

export default function SortAndFilters() {
  
  return (
    <div className={Styles.container}>
      <button>FILTRAR Y ORDENAR</button>
      <nav className={Styles.nav_filtersAndOrdereds}>

        <div className={Styles.filters}>
          <h4>filtrar por Disponibilidad: </h4>
          <div className={Styles.input_checkbox}>
            <input 
            type="checkbox"
            name= "Disponibilidad"
            value= 'Available'
            id= 'Available' 
            />
            <label htmlFor="Available">Available</label>
          </div>

          <div className={Styles.input_checkbox}>
            <input 
            type="checkbox"
            name= "Disponibilidad"
            value= 'Not Available'
            id= 'Not Available' 
            />
            <label htmlFor="Not Available">Not Available</label>
          </div>

          <div className={Styles.input_checkbox}>
          <input 
            type="checkbox"
            name= "Disponibilidad"
            value= 'Discontinued'
            id= 'Discontinued' 
            />
            <label htmlFor="Discontinued">Discontinued</label>
          </div>

        </div>

        <div className={Styles.sorteds}>
        <h4>ordenar por precio: </h4>

        <div className={Styles.input_checkbox}>
            <input 
            type="checkbox"
            name= "Precio"
            value= 'menor_precio_a_mayor_precio'
            id= 'menor_precio_a_mayor_precio' 
            />
            <label htmlFor="Precio">menor precio a mayor precio</label>
          </div>

        <div className={Styles.input_checkbox}>
            <input 
            type="checkbox"
            name= "Precio"
            value= 'mayor_precio_a_menor_precio'
            id= 'mayor_precio_a_menor_precio' 
            />
            <label htmlFor="Precio">mayor precio a menor precio</label>
          </div>

        </div>

      </nav>
    </div>
  );
}
