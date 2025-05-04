import React from "react";
import { motion } from "framer-motion";
import "./assistir.css";

export default function AssistirAoVivo() {
  return (
    <section id="assistir" className="assistir-section">
      <div className="assistir-card">
        <h2 className="assistir-title">🎥 ASSISTIR OS JOGOS AO VIVO 🔴</h2>
        <img
          src="/assets/assistir/twitch-transmissao.png"
          alt="Transmissão FURIA"
          className="assistir-img"
        />
        <p className="assistir-texto">
          Acompanhe agora mesmo as transmissões da FURIA AO VIVO diretamente na Twitch!
        </p>
        <motion.a
          href="https://www.twitch.tv/team/furia"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="assistir-botao"
        >
          🔴 ASSISTIR AGORA
        </motion.a>
      </div>
    </section>
  );
}
