import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Chat from "./Chat";
import PlayerCards from "./PlayerCards";
import MapCards from "./MapCards";
import Noticias from "./pages/Noticias";


const images = [
  "/assets/furia1.png",
  "/assets/furia2.png",
  "/assets/furia3.png",
  "/assets/furia4.png",
  "/assets/furia5.png",
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollToNoticias = () => {
    const section = document.getElementById("noticias");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Fundo dinâmico */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Conteúdo */}
      <div className="relative z-10 flex flex-col items-center justify-start min-h-screen p-10 pt-20">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center text-white">
          🔥 Seja Bem-Vindo Furioso! 🔥
        </h1>
        <p className="text-sm md:text-md text-orange mb-8 text-center">
          Vem com a gente, ficar por dentro de TUDO que está acontecendo com o time de CS FURIA
        </p>

        {/* Botões */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            "Notícias",
            "Jogadores da FURIA",
            "Estatísticas do time",
            "Quiz sobre a FURIA",
            "Agenda dos próximos jogos",
          ].map((opcao, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={opcao === "Notícias" ? handleScrollToNoticias : undefined}
              className="bg-black bg-opacity-50 backdrop-blur-md px-5 py-3 rounded-2xl border border-white text-white font-semibold hover:bg-white hover:text-black transition"
            >
              {opcao}
            </motion.button>
          ))}
        </div>

        <PlayerCards />
        <MapCards />
        <div id="noticias" className="w-full mt-10">
          <Noticias />
        </div>
        <Chat />
      </div>
    </div>
  );
}
