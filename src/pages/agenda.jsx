import React from "react";
import "./agenda.css";

export default function Agenda() {
  return (
    <section className="agenda-section">
      <h2 className="agenda-titulo">Agenda dos Próximos Jogos</h2>
      <div className="agenda-container">
        <img
          src="/assets/agenda/agenda.png"
          alt="Agenda dos jogos"
          className="agenda-img"
        />
      </div>
    </section>
  );
}
