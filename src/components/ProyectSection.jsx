import React from "react";
import ProyectImg from "../assets/proyect__info-img.png";

export function ProyectSection() {
  return (
    <div>
      <div className="bd-container proyect__main">
        <div className="proyect__info">
          <div>
            <figure>
              <img src={ProyectImg} alt="" />
            </figure>
            <div>
              <h2>Levantamiento de paredes</h2>
              <p>
                Nos encontramos en la etapa de levantamiento de paredes de
                nuestro lugar de encuentro. <br />
                Este consta de tres etapas que son recaudación, realización y
                finalización.
              </p>
            </div>
          </div>
          <div>
            <h2>Conoce como donar</h2>
            <p>
              Puedes formar parte de este proyecto y darnos tu ayuda para
              hacerlo una realidad <br />
              Las donaciones se ven reflejadas cada domingo en la tarde hora
              colombia
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
