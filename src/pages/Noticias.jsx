import React from "react";
import "./noticias.css";
import noticiaImg from "/assets/noticias/noticias1.png";

export default function Noticias() {
  return (
    <section id="noticias" className="noticia-container">
      <div className="noticia-content">
        <h1 className="noticia-titulo">KRIZZEN JUNTA-SE À FURIA COMO ASSISTENTE TÉCNICO</h1>
        <p className="noticia-data">30-4-2025 15:00</p>
        <p className="noticia-subtitulo">
          A Organização Brasileira adiciona seu terceiro membro de língua russa em tantas semanas.
        </p>
        <img src={noticiaImg} alt="KrizzN na FURIA" className="noticia-img" />
        <p className="noticia-texto">
          FÚRIA anunciou a adição de Aidyn "KrizzN" Turlybekov como assistente técnico, reforçando a equipe de back-end da organização após seu pivô internacional no início de abril.
        </p>
        <p className="noticia-texto">
          O jovem de 25 anos muda-se para FÚRIA depois de passar três anos como gerente e assistente técnico de Monte, durante o qual ele também foi brevemente treinador da equipe de agosto de 2022 a janeiro de 2023.
        </p>
      </div>
    </section>
  );
}
