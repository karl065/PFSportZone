import React from 'react'
import Styles from './About.module.css';


const integrantes = [
  {
    nombre: "nombre",
    descripcion: "texto aca",
    foto: "link de foto aca",
    linkedin: "link aca"
  },
  {
    nombre: "nombre",
    descripcion: "texto aca",
    foto: "link de foto aca",
    linkedin: "link aca"
  },
  {
    nombre: "Facundo Cataldo",
    descripcion: "FullStack developer | javascript | react | redux | nodejs | express | postgresql | sequelize",
    foto: "link de foto aca",
    linkedin: "https://www.linkedin.com/in/facundo-cataldo-9a0031272/"
  },
  {
    nombre: "nombre",
    descripcion: "texto aca",
    foto: "link de foto aca",
    linkedin: "link aca"
  },
  {
    nombre: "nombre",
    descripcion: "texto aca",
    foto: "link de foto aca",
    linkedin: "link aca"
  },
  {
    nombre: "nombre",
    descripcion: "texto aca",
    foto: "link de foto aca",
    linkedin: "link aca"
  },
  {
    nombre: "nombre",
    descripcion: "texto aca",
    foto: "link de foto aca",
    linkedin: "link aca"
  }
];


const About = () => {
  return (
    <div className={Styles.container}>
      <h1>desarrollado por: </h1>
      <h1 className={Styles.sportzone}>SportZone Team</h1>

    <div className={Styles.cards}>
      {
        integrantes.length
        && integrantes.map((int,index)=>{
          return (
            <article key={index} className={Styles.cardIndividual}>
        <img src={int.foto} alt={int.nombre} />
        <div>
          <h3>{int.nombre}</h3>
          <p>{int.descripcion}</p>
          <a href={int.linkedin} target='blank'>
          Linkedin💼
          </a>
        </div>
          
      </article>
          )
           
        })
      }
       
    </div>
    </div>
  )
}

export default About;