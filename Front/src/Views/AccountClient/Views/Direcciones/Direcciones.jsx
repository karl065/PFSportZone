 
import React from 'react'
import style from './Direcciones.module.css'
import Direction from '../../../../Components/Direction/Direction'
const Direcciones = () => {

  const directions = [
                      {
                      name:'Ciudad de mexico',
                      CP:'5539',
                      direction:'Mexico, ciudad de mexico, delegacion Cuahutemoc, guillermo prieto N°138'
                      }
                     ]

  return (
    <section className={style.Direcciones}>
      <h1>direcciones</h1>
      <hr />
      <div className={style.direcContainer}>
          {
            directions.map((direction, index)=>{
              return (
                <Direction key={index+'dic'} info={direction}/>
              )
            })
          }
      <hr  style={{width:'100%'}}/>
          <button className={style.btnAdd}>+</button>
      </div>
    </section>
  )
}

export default Direcciones