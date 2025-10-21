import React from 'react';
import { Subtitulo } from '../components/utils/Titulos';

export default function Nosotros() {
  return (
    <>
      <Subtitulo texto="Apoyamos las Economías Regionales" />
      <div className="contenedor-contactos anhelo">
        <p>nuestra visión</p>
        <video controls src="/videos/Visita_Comunidad_Guarani.mp4" width="80%"></video>
        <p>Comunidad Guaraní Yacutinga - Misiones, Argentina</p>
      </div>
    </>
  );
};