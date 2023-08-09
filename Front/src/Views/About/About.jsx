import React from "react";
import Styles from "./About.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const integrantes = [
  {
    nombre: "Carlos Javier Castellanos",
    descripcion:
      "FullStack developer | javascript | react | redux | nodejs | express | postgresql | sequelize",
    foto: "link de foto aca",
    linkedin: "https://www.linkedin.com/in/carlos-castellanos-73253b25b/",
  },
  {
    nombre: "Kevin Jesus Mamani Capuma",
    descripcion:
      "FullStack developer | javascript | react | redux | nodejs | express | postgresql | sequelize",
    foto: "link de foto aca",
    linkedin: "link aca",
  },
  {
    nombre: "Diana Marcela Tabares Marin",
    descripcion:
      "FullStack developer | javascript | react | redux | nodejs | express | postgresql | sequelize",
    foto: "link de foto aca",
    linkedin: "link aca",
  },
  {
    nombre: "Facundo Cataldo",
    descripcion:
      "FullStack developer | javascript | react | redux | nodejs | express | postgresql | sequelize",
    foto: "link de foto aca",
    linkedin: "https://www.linkedin.com/in/facundo-cataldo-9a0031272/",
  },
  {
    nombre: "Manuel Felipe Borrego Sterling",
    descripcion:
      "FullStack developer | javascript | react | redux | nodejs | express | postgresql | sequelize",
    foto: "link de foto aca",
    linkedin: "link aca",
  },
  {
    nombre: "nombre",
    descripcion: "texto aca",
    foto: "link de foto aca",
    linkedin:
      "https://www.linkedin.com/in/manuel-f-borrego-sterling-555480267/",
  },
  {
    nombre: "Roberto Saúl Hernández Velasco",
    descripcion:
      "FullStack developer | javascript | react | redux | nodejs | express | postgresql | sequelize",
    foto: "link de foto aca",
    linkedin: "link aca",
  },
  {
    nombre: "Wilson Alonso Collantes Aponte",
    descripcion: "texto aca",
    foto: "link de foto aca",
    linkedin: "link aca",
  },
];

const About = () => {
  return (
    <div className={Styles.container}>
      <h1>desarrollado por: </h1>
      <h1 className={Styles.sportzone}>SportZone Team</h1>

      <div className={Styles.cards}>
        {integrantes.length &&
          integrantes.map((int, index) => {
            return (
              <article key={index} className={Styles.cardIndividual}>
                <img src={int.foto} alt={int.nombre} />
                <div>
                  <h3>{int.nombre}</h3>
                  <p>{int.descripcion}</p>
                  <a href={int.linkedin} target="blank">
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      style={{ height: "40px", hover: { color: "whitesmoke" } }}
                      className={Styles.social}
                    />
                  </a>
                </div>
              </article>
            );
          })}
      </div>
    </div>
  );
};

export default About;
