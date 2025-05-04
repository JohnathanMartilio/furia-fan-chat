import React from "react";

export default function BotaoOpcao({ texto, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-purple-700 hover:bg-purple-600 px-4 py-2 rounded-xl shadow-md text-white"
    >
      {texto}
    </button>
    
  );
}
