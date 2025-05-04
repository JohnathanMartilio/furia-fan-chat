import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MapModal({ map, onClose }) {
  return (
    <AnimatePresence>
      {map && (
        <motion.div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative bg-[#111827] text-white rounded-2xl p-6 w-[90%] max-w-xl shadow-xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
            key={map.name}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <button
              onClick={onClose}
              className="absolute top-2 right-4 text-2xl font-bold text-white hover:text-red-500"
            >
              ✖
            </button>

            {/* Imagem com tamanho reduzido e mais nítida */}
            <div className="relative w-full mb-4">
              <img
                src={map.image}
                alt={map.name}
                className="w-full max-h-56 mx-auto object-contain rounded-lg shadow-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 py-2 px-4 text-center rounded-b-lg">
                <h2 className="text-xl font-bold">{map.name}</h2>
              </div>
            </div>

            {/* Estatísticas */}
            <ul className="space-y-1 text-center text-base font-medium text-gray-300">
              {map.stats.map((stat, index) => (
                <li key={index}>{stat}</li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
