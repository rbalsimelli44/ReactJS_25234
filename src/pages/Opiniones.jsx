import React from 'react';
import { Subtitulo } from '../components/utils/Titulos';

export default function Opiniones() {
  return (
        <>
        <Subtitulo texto="Algunas opiniones de nuestros clientes" />
        <section className="grilla-opiniones fondo">
                <div className="opiniones">
                    <h4>Alejandro Fernández</h4>
                    <p>Está bueno, che!!!</p>
                </div>
                <div className="opiniones">
                    <h4>María Luján</h4>
                    <p>Muy buena mercadería, atención y precios amigos!! Recomiendo 100%</p>
                </div>
                <div className="opiniones">
                    <h4>Fabián Sueyro</h4>
                    <p>Unos fenomenos en cuarentena y ahora en el local también! Todo super fresco!</p>
                </div>
                <div className="opiniones">
                    <h4>Elías Cejka</h4>
                    <p>Buena Atención. Bastante surtido. Precios massso</p>
                </div>
                <div className="opiniones">
                    <h4>Valeria Donato</h4>
                    <p>La atención es excelente y los productos son muy frescos y ricos!!! Muy recomendable!!!</p>
                </div>
                <div className="opiniones">
                    <h4>Marius Manhattan</h4>
                    <p>Los mejores del mundo mundial. Me sorprendió la venta de yerba orgánica certificada</p>
                </div>
                <div className="opiniones">
                    <h4>Ivana Arizu</h4>
                    <p>Mala atención, la chica de cabello rojo ni responde el saludo, tira las cosas y no dejan ver ni probar las cosas. No puede comprar</p>
                </div>
                <div className="opiniones">
                    <h4>Joaquín Saavedra</h4>
                    <p>Muy buen servicio con buenos productos y genial atención!</p>
                </div>
                <div className="opiniones">
                    <h4>Alejandro Fernández</h4>
                    <p>Está bueno, che!!!</p>
                </div>
            </section>
        </>
  );
};