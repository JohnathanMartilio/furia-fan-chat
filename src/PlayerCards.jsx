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

  useEffect(() => {
    videoRefs.current.forEach((video, idx) => {
      if (video) {
        if (idx === flippedIndex) {
          video.play().catch(() => {});
        } else {
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  }, [flippedIndex]);

  const handleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <div className="flex justify-center flex-wrap gap-6 p-4">
      {players.map((player, index) => (
        <div key={index} className="flex flex-col items-center">
          <h2 className="text-white text-lg font-extrabold mb-2 drop-shadow-md tracking-wide">
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
