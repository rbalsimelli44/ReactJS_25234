import React from 'react';
import { Subtitulo } from '../components/utils/Titulos';

export default function Servicios() {
  return (
    <>
        <Subtitulo texto="Servicios que ofrecemos" />
        <hr />
        <ol>
            <li><strong>Aplicación ecommerce</strong></li>
            <br />
            <li><strong>Servicio de entregas</strong></li>
            <br />
            <li><strong>Garantía de reembolso</strong></li>
            <br />
            <li><strong>Seguimento de envíos</strong></li>
            <br />
            <li><strong>Atención al cliente H24x7</strong></li>
        </ol>
    </>
  );
};