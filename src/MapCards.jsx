import React, { useState } from "react";
import MapModal from "./MapModal";
import "./mapCards.css";

const maps = [
  {
    name: "Dust 2",
    image: "/assets/maps/maps1.png",
    stats: [
      "Map com 57,3% de vitória",
      "Total de jogos: 200",
      "Vitórias: 115",
      "Derrotas: 85",
      "Vitórias do lado CT: 52,9%",
      "Vitórias do lado TR: 49,7%",
    ],
  },
  {
    name: "Mirage",
    image: "/assets/maps/maps2.png",
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
    name: "Inferno",
    image: "/assets/maps/maps3.png",
    stats: [
      "Map com 58,1% de vitória",
      "Total de jogos: 240",
      "Vitórias: 139",
      "Derrotas: 101",
      "Vitórias do lado CT: 53,2%",
      "Vitórias do lado TR: 49,3%",
    ],
  },
  {
    name: "Train",
    image: "/assets/maps/maps4.png",
    stats: [
      "Map com 62,5% de vitória",
      "Total de jogos: 112",
      "Vitórias: 70",
      "Derrotas: 42",
      "Vitórias do lado CT: 56,4%",
      "Vitórias do lado TR: 52,2%",
    ],
  },
  {
    name: "Nuke",
    image: "/assets/maps/maps5.png",
    stats: [
      "Map com 59,2% de vitória",
      "Total de jogos: 150",
      "Vitórias: 89",
      "Derrotas: 61",
      "Vitórias do lado CT: 52,3%",
      "Vitórias do lado TR: 49,6%",
    ],
  },
];

function MapCards() {
  const [selectedMap, setSelectedMap] = useState(null);

  return (
    <>
      <div className="flex justify-center flex-wrap gap-6 p-4 mt-12">
        {maps.map((map, index) => (
          <div
            key={index}
            className="map-card"
            onClick={() => setSelectedMap(map)}
          >
            <img
              src={map.image}
              alt={map.name}
              className="w-full h-40 object-cover rounded-xl"
            />
          </div>
        ))}
      </div>

      {/* Modal animado separado */}
      <MapModal map={selectedMap} onClose={() => setSelectedMap(null)} />
    </>
  );
}

export default MapCards;
