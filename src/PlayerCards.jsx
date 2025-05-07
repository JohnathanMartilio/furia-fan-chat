import React, { useState, useRef, useEffect } from "react";
import "./PlayerCards.css";

const players = [
  {
    name: "FALLEN",
    image: "/assets/jogadores/fallen-card.png",
    video: "/assets/videos/fallen.mp4",
  },
  {
    name: "YUURIH",
    image: "/assets/jogadores/yuurih-card.png",
    video: "/assets/videos/yuurih.mp4",
  },
  {
    name: "KSCERATO",
    image: "/assets/jogadores/kscerato-card.png",
    video: "/assets/videos/kscerato.mp4",
  },
  {
    name: "YEKINDAR",
    image: "/assets/jogadores/yekindar-card.png",
    video: "/assets/videos/yekindar.mp4",
  },
  {
    name: "MOLODOY",
    image: "/assets/jogadores/molodoy-card.png",
    video: "/assets/videos/molodoy.mp4",
  },
];

export default function PlayerCards() {
  const [flippedIndex, setFlippedIndex] = useState(null);
  const videoRefs = useRef([]);

  const handleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  useEffect(() => {
    videoRefs.current.forEach((video, idx) => {
      if (video) {
        if (idx === flippedIndex) {
          // Adicionamos pequena espera para suavizar
          setTimeout(() => {
            video.currentTime = 0;
            video.play().catch(() => {});
          }, 50);
        } else {
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  }, [flippedIndex]);

  return (
    <div className="flex justify-center flex-wrap gap-6 p-4">
      {players.map((player, index) => (
        <div key={index} className="flex flex-col items-center">
          <h2 className="text-white text-xl font-extrabold mb-2 tracking-wider bg-black bg-opacity-50 px-4 py-1 rounded-md">
            {player.name}
          </h2>

          <div
            className={`card ${flippedIndex === index ? "flipped" : ""}`}
            onClick={() => handleFlip(index)}
          >
            <div className="card-inner">
              <div className="card-front">
                <img
                  src={player.image}
                  alt={player.name}
                  className="w-[170px] h-[240px] object-cover rounded-xl"
                />
              </div>
              <div className="card-back">
                {player.video ? (
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={player.video}
                    className="w-full h-full object-cover rounded-xl"
                    controls={false}
                    muted={false}
                    playsInline
                    preload="auto"
                    onCanPlay={(e) => {
                      // Garante que só mostra o vídeo quando estiver pronto
                      e.target.style.visibility = "visible";
                    }}
                    style={{ visibility: "hidden" }}
                  />
                ) : (
                  <p className="text-white text-center p-4">
                    Informações em breve
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
