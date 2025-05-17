import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Chat from "../Chat";
import PlayerCards from "../PlayerCards";
import MapCards from "../MapCards";
import NoticiasList from "./NoticiasList";
import Biografia from "./BiografiaJogadores";
import Estatisticas from "./Estatisticas";
import Agenda from "./agenda";
import "./home.css";
import KnowYourFan from "../KnowYourFan";



const images = [
  "/assets/final/pantera.png",
  "/assets/final/pantera2.png",
  "/assets/final/pantera3.png",
  "/assets/final/pantera4.png",
  "/assets/final/pantera5.png",
  "/assets/final/pantera6.png",
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [loaded, setLoaded] = useState(false);

  // Pré-carrega as imagens
  useEffect(() => {
    let loadedCount = 0;
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === images.length) {
          setLoaded(true);
        }
      };
    });
  }, []);

  // Slideshow
  useEffect(() => {
    if (!loaded) return;
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [loaded]);

  const opcoes = [
    { nome: "Notícias", id: "noticias" },
    { nome: "Biografia dos Jogadores", id: "jogadores" },
    { nome: "Estatísticas do time", id: "estatisticas" },
    {
      nome: "ASSISTIR OS JOGOS AO VIVO 🔴",
      link: "https://www.twitch.tv/team/furia",
    },
    { nome: "Agenda dos próximos jogos", id: "agenda" },
  ];

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      {/* Fundo corrigido com estilo inline */}
      {loaded &&
        images.map((img, index) => (
          <div
            key={index}
            style={{
              backgroundImage: `url(${img})`,
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              transition: "opacity 1s ease-in-out",
              zIndex: 0,
              opacity: index === currentImage ? 1 : 0,
            }}
          />
        ))}

      <div className="overlay-degrade"></div>

      <div className="relative z-10 flex flex-col items-center justify-start min-h-screen p-10 pt-20 main-content">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center text-white">
          🔥 Seja Bem-Vindo Furioso! 🔥
        </h1>

        <p className="text-md md:text-lg font-medium text-center text-white mb-8">
          Fique por dentro de tudo que rola com o time de CS da{" "}
          <span className="text-cyan-400 font-bold">FURIA</span>. <br />
          Notícias, jogos, stats e emoção em cada rodada!{" "}
          <span className="text-pink-400">✨</span>
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {opcoes.map((opcao, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                if (opcao.link) {
                  window.open(opcao.link, "_blank");
                } else if (opcao.id) {
                  const section = document.getElementById(opcao.id);
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }
              }}
              className="bg-black bg-opacity-50 backdrop-blur-md px-5 py-3 rounded-2xl border border-white text-white font-semibold hover:bg-white hover:text-black transition"
            >
              {opcao.nome}
            </motion.button>
          ))}
        </div>

        <PlayerCards />
        <MapCards />

        <div id="jogadores" className="w-full mt-10">
          <Biografia />
        </div>

        <div id="noticias" className="w-full mt-10">
          <NoticiasList />
        </div>

        <div id="estatisticas" className="w-full mt-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Estatisticas />
            <KnowYourFan />
          </motion.div>
        </div>

        <div id="agenda" className="w-full mt-10">
          <Agenda />
        </div>

        <Chat />
      </div>
    </div>
  );
}
