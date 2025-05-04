import React, { useState } from "react";
import "./mapas.css";
import MapModal from "./MapModal";

const maps = [
  {
    name: "Mirage",
    image: "/assets/maps/maps1.png",
    stats: [
      "Map com 60,8% de vitória",
      "Total de jogos: 268",
      "Vitórias: 163",
      "Derrotas: 105",
      "Vitórias do lado CT: 54,4%",
      "Vitórias do lado TR: 51,08%",
    ],
  },
  {
    name: "Dust 2",
    image: "/assets/maps/maps2.png",
    stats: [
      "Map com 55,4% de vitória",
      "Total de jogos: 195",
      "Vitórias: 108",
      "Derrotas: 87",
      "Vitórias do lado CT: 50,1%",
      "Vitórias do lado TR: 48,8%",
    ],
  },
  {
    name: "Inferno",
    image: "/assets/maps/maps3.png",
    stats: [
      "Map com 61,3% de vitória",
      "Total de jogos: 172",
      "Vitórias: 105",
      "Derrotas: 67",
      "Vitórias do lado CT: 57,0%",
      "Vitórias do lado TR: 50,6%",
    ],
  },
  {
    name: "Nuke",
    image: "/assets/maps/maps4.png",
    stats: [
      "Map com 58,7% de vitória",
      "Total de jogos: 200",
      "Vitórias: 117",
      "Derrotas: 83",
      "Vitórias do lado CT: 60,1%",
      "Vitórias do lado TR: 55,2%",
    ],
  },
  {
    name: "Overpass",
    image: "/assets/maps/maps5.png",
    stats: [
      "Map com 62,1% de vitória",
      "Total de jogos: 180",
      "Vitórias: 112",
      "Derrotas: 68",
      "Vitórias do lado CT: 58,4%",
      "Vitórias do lado TR: 54,3%",
    ],
  },
];

export default function Mapas() {
  const [selectedMap, setSelectedMap] = useState(null);

  return (
    <div className="flex justify-center flex-wrap gap-6 py-8 px-4 bg-[#1c1c1e]">
      {maps.map((map, index) => (
        <div
          key={index}
          onClick={() => setSelectedMap(map)}
          className="cursor-pointer transform hover:scale-105 transition-all duration-300"
        >
          <img
            src={map.image}
            alt={map.name}
            className="rounded-xl w-[230px] h-[150px] object-cover shadow-md"
          />
        </div>
      ))}

      {/* Modal */}
      <MapModal map={selectedMap} onClose={() => setSelectedMap(null)} />
    </div>
  );
}
