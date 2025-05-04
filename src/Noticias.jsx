import React from "react";
import "./noticias.css";

export default function Noticias() {
  return (
    <section id="noticias" className="noticia-section">
      <div className="noticia-container">
        <p className="noticia-sub">📍 PGL Astana 2025</p>
        <h1 className="noticia-title">REVELADOS OS CONFRONTOS DE ABERTURA DO PGL ASTANA</h1>
        <p className="noticia-autor">SumiJiv · 2-5-2025 14:18</p>
        <p className="noticia-chamada">O novo visual FURIA vai estrear contra o MongolZ.</p>
        <img src="/assets/noticias/noticias1.png" alt="fallen" className="noticia-imagem" />
        <p className="noticia-legenda">A FURIA de FalleN recebeu uma abertura difícil</p>
        <div className="noticia-conteudo">
          <p>
            A PGL revelou os confrontos de abertura para a PGL Astana, que serão realizados na capital do Cazaquistão a partir de 10-18 de maio e apresentam um prize pool de <span className="highlight">$1.250.000</span>.
          </p>
          <p>
            O evento começará com uma fase de grupos do sistema suíço antes dos playoffs de oito equipes começarem em 16 de maio na Barys Arena.
          </p>
          <p>
            Algumas das partidas de destaque incluem <span className="highlight">Ninjas em Pijamas</span> assumir <span className="highlight">Virtus.pro</span> no que será a primeira LAN de nível um da organização sueca com sua nova lista, bem como <span className="highlight">O MongolZ</span> assumindo um <span className="highlight">FÚRIA</span> lado que agora inclui Danil "<span className="highlight">molodoy</span>" Golubenko e Mareks "<span className="highlight">YEKINDAR</span>" Gawinskis.
          </p>
        </div>
      </div>
    </section>
  );
}
