import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CadastroFan from "./pages/CadastroFan";
import Quiz from "./pages/Quiz";
import Estatisticas from "./pages/Estatisticas";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<CadastroFan />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/estatisticas" element={<Estatisticas />} />
      </Routes>
    </Router>
  );
}
