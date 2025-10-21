import React from 'react';
import { Titulo } from '../utils/Titulos';
import "bootstrap/dist/css/bootstrap.min.css";

export default function Gallery() { 
    const images = [ 
        "https://picsum.photos/100/100?random=1", 
        "https://picsum.photos/100/100?random=2", 
        "https://picsum.photos/100/100?random=3", 
        "https://picsum.photos/100/100?random=4", 
        "https://picsum.photos/100/100?random=5" 
    ];
         
  return (
    <section className="container mt-4">
      <div
        id="galleryCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        {/* Indicadores */}
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#galleryCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* Imágenes */}
        <Titulo texto="OFERTA HOY 35% DESCUENTO" />
        <div className="carousel-inner">
          {images.map((src, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
            >
              <img
                src={src}
                className="d-block w-100"
                alt={`Imagen ${index + 1}`}
                style={{ objectFit: "100x", height: "300px" }}
              />
            </div>
          ))}
        </div>

        {/* Controles */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#galleryCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#galleryCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>
    </section>
  );
};