import React, { useState } from "react";
import { motion } from "framer-motion";

const jogadores = [
  {
    nome: "FalleN",
    imagem: "/assets/Fallen.png",
    frase: "O Professor 🧠",
  },
  {
    nome: "yuurih",
    imagem: "/assets/yuurih.png",
    frase: "A precisão em pessoa 🎯",
  },
  {
    nome: "KSCERATO",
    imagem: "/assets/kscerato.png",
    frase: "O Monstro da FURIA 🐆",
  },
  {
    nome: "molodoy",
    imagem: "/assets/molodoy.png",
    frase: "O novo talento 🇷🇺",
  },
  {
    nome: "yekindar",
    imagem: "/assets/yekindar.png",
    frase: "O explosivo da equipe 💥",
  },
];

export default function JogadoresFuria() {
  const [flipStates, setFlipStates] = useState(Array(jogadores.length).fill(false));

  const handleFlip = (index) => {
    setFlipStates((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className="flex flex-wrap justify-center gap-6 mt-10">
      {jogadores.map((jogador, index) => (
        <div
          key={index}
          className="w-44 h-64 perspective"
          onClick={() => handleFlip(index)}
        >
          <motion.div
            animate={{ rotateY: flipStates[index] ? 180 : 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-full rounded-2xl shadow-lg border-2 border-white border-opacity-20 bg-gradient-to-tr from-black via-gray-800 to-black hover:scale-105 cursor-pointer"
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {/* Frente */}
            <div
              className="absolute w-full h-full backface-hidden flex items-center justify-center"
            >
              <img
                src={jogador.imagem}
                alt={jogador.nome}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            {/* Verso */}
            <div
              className="absolute w-full h-full backface-hidden flex flex-col items-center justify-center bg-white text-black rounded-2xl"
              style={{ transform: "rotateY(180deg)" }}
            >
              <h2 className="font-bold text-lg">{jogador.nome}</h2>
              <p className="mt-2 text-sm text-center px-2">{jogador.frase}</p>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
}
