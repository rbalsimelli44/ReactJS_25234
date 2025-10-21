import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Subtitulo } from '../components/utils/Titulos';
import { Formulario } from '../components/utils/Formulario';
import SocialIcons from '../components/utils/SocialIcons'; 

export default function Contacto() {
  return (
    <>
      <Subtitulo texto="Nuestros datos de contacto" />
      <br />

      <div className="contenedor-contactos formulario">
        <Formulario />
      </div>
      <br />

      <div className="contenedor-contactos direccion">
        <h6>Dirección:
          <br />
          CP 1825 - Pacheco 1800 - Villa Urquiza <i className="fa-solid fa-location-dot"></i>
          <p>Ciudad Autónoma de Buenos Aires - Argentina</p>

          <i className="fa-solid fa-phone"></i>  (+54 911) 6622-4455
          <p>Lu-Vi de 0900 a 19:00 hs</p>
        </h6>
          
        <div className="container text-center mt-5">
        <h6 className="mb-4">Síguenos en nuestras redes</h6>
          <SocialIcons />
        </div>
      </div>
    </>
  );
};