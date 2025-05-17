import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import fofuriaIcon from "/assets/fofuria.png";
import fallenImg from "/assets/fallen.png";
import yuurihImg from "/assets/yuurih.png";
import ksceratoImg from "/assets/kscerato.png";
import yekindarImg from "/assets/yekindar.png";
import molodoyImg from "/assets/molodoy.png";

const jogadores = {
  fallen: { nome: "Gabriel 'FalleN' Toledo", idade: 33, funcao: "Rifler", rating: "1.07", kd: "1.17", kills: 22999, imagem: fallenImg },
  yuurih: { nome: "Yuri 'yuurih' Santos", idade: 24, funcao: "Rifler", rating: "1.10", kd: "1.19", kills: 20850, imagem: yuurihImg },
  kscerato: { nome: "Kaike 'KSCERATO' Cerato", idade: 25, funcao: "Rifler", rating: "1.12", kd: "1.21", kills: 21330, imagem: ksceratoImg },
  yekindar: { nome: "Mareks 'YEKINDAR' Gaļinskis", idade: 23, funcao: "Entry Fragger", rating: "1.05", kd: "1.10", kills: 20100, imagem: yekindarImg },
  molodoy: { nome: "Petr 'molodoy' B.", idade: 20, funcao: "AWPer", rating: "1.08", kd: "1.14", kills: 19400, imagem: molodoyImg },
};

const secoes = {
  noticias: "📰 Você pode acessar as últimas notícias na seção 'Notícias' da página.",
  estatisticas: "📊 As estatísticas do time estão disponíveis na seção 'Estatísticas'.",
  jogadores: "👥 Quer saber sobre os jogadores? Role até a seção 'Biografia dos Jogadores'.",
  agenda: "📅 A agenda dos próximos jogos está disponível na seção 'Agenda'.",
  assistir: "🎥 Você pode assistir aos jogos ao vivo clicando em 'ASSISTIR OS JOGOS AO VIVO 🔴'.",
};

const perguntasKnowYourFan = [
  { campo: "plataforma", texto: "🐾 Qual plataforma você mais usa pra ver os jogos da FURIA? (Twitch, YouTube, TikTok...)" },
  { campo: "jogador", texto: "🎯 Qual jogador da FURIA você mais admira?" },
  { campo: "conteudo", texto: "📺 Que tipo de conteúdo você mais consome? (Clipes, highlights, entrevistas...)" },
  { campo: "compras", texto: "🛒 Você já comprou algum item da FURIA? (camisa, boné, ingresso...)?" },
  { campo: "evento", texto: "🎟️ Já participou de algum evento presencial de eSports? (Major, BGS, etc)?" },
  { campo: "comunidade", texto: "👑 Gostaria de participar de uma comunidade VIP com sorteios e conteúdos exclusivos?" },
];

export default function Chat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [respostas, setRespostas] = useState({});
  const [fluxo, setFluxo] = useState(null);
  const [indicePergunta, setIndicePergunta] = useState(0);
  const [conhecendoFinalizado, setConhecendoFinalizado] = useState(false);

  const opcoes = [
    { id: "conhecer", label: "Conhecendo mais sobre você" },
    { id: "jogadores", label: "Jogadores da FURIA" },
    { id: "noticias", label: "Notícias" },
    { id: "agenda", label: "Agenda" },
    { id: "estatisticas", label: "Estatísticas" },
    { id: "assistir", label: "Assistir Jogos ao Vivo" },
  ];

  const iniciarFluxo = (id) => {
    setFluxo(id);
    if (id === "conhecer") {
      setMessages((prev) => [
        ...prev,
        { type: "bot", text: perguntasKnowYourFan[0].texto },
      ]);
    } else if (id === "jogadores") {
      setMessages((prev) => [
        ...prev,
        { type: "bot", text: "🧠 Sobre qual jogador da FURIA você quer saber?" },
      ]);
    } else {
      setMessages((prev) => [
        ...prev,
        { type: "bot", text: secoes[id] || "❓ Seção ainda não disponível." },
        { type: "menu" },
      ]);
      setFluxo(null);
    }
  };

  const handleSend = () => {
    if (!userInput.trim()) return;
    setMessages((prev) => [...prev, { type: "user", text: userInput }]);
    const inputLower = userInput.toLowerCase().trim();
    setUserInput("");
    setTyping(true);

    setTimeout(() => {
      if (fluxo === "conhecer") {
        const perguntaAtual = perguntasKnowYourFan[indicePergunta];
        setRespostas((prev) => ({ ...prev, [perguntaAtual.campo]: userInput }));
        const proximo = indicePergunta + 1;
        setIndicePergunta(proximo);

        if (proximo < perguntasKnowYourFan.length) {
          setMessages((prev) => [
            ...prev,
            { type: "bot", text: perguntasKnowYourFan[proximo].texto },
          ]);
        } else {
          setFluxo(null);
          setIndicePergunta(0);
          setConhecendoFinalizado(true);
          setMessages((prev) => [
            ...prev,
            { type: "bot", text: "🎉 UAU! Agora eu te conheço muito melhor. Isso vai ajudar a FURIA a te oferecer experiências exclusivas 🖤🔥" },
            { type: "bot", text: "🤖 Vamos continuar, furioso? Em que mais posso te ajudar? Escolha uma opção abaixo:" },
            { type: "menu" },
          ]);
        }
      } else if (fluxo === "jogadores") {
        const foundPlayer = Object.keys(jogadores).find((key) => inputLower === key);
        if (foundPlayer) {
          const player = jogadores[foundPlayer];
          setMessages((prev) => [
            ...prev,
            {
              type: "bot",
              text: `\n**${player.nome}**\nIdade: ${player.idade}\nFunção: ${player.funcao}\nRating: ${player.rating}\nK/D Ratio: ${player.kd}\nTotal Kills: ${player.kills}`,
              image: player.imagem,
            },
            { type: "bot", text: "🤖 Vamos continuar, furioso? Em que mais posso te ajudar? Escolha uma opção abaixo:" },
            { type: "menu" },
          ]);
        } else {
          setMessages((prev) => [
            ...prev,
            { type: "bot", text: "❓ Jogador não encontrado. Tente novamente." },
          ]);
        }
        setFluxo(null);
      }
      setTyping(false);
    }, 800);
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        { type: "bot", text: "🔥 Bem-vindo ao Chat da torcida mais apaixonada da FURIA. Em que posso te ajudar?" },
        { type: "menu" },
      ]);
    }
  }, [isOpen]);

  const renderOpcoes = () => {
    const opcoesFiltradas = conhecendoFinalizado
      ? opcoes.filter(op => op.id !== "conhecer")
      : opcoes;

    return (
      <div className="flex flex-wrap gap-2">
        {opcoesFiltradas.map((op) => (
          <button
            key={op.id}
            onClick={() => iniciarFluxo(op.id)}
            className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs hover:bg-purple-700"
          >
            {op.label}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <motion.button
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="bg-black rounded-full p-2 border-2 border-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src="/assets/furia-logo.png" alt="FURIA" className="w-14 h-14" />
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-[340px] h-[520px] bg-white bg-opacity-90 rounded-xl shadow-xl flex flex-col justify-between p-4 mt-2"
        >
          <div className="overflow-y-auto flex-1 space-y-4 pr-2">
            {messages.map((msg, index) => (
              msg.type === "user" ? (
                <div key={index} className="flex justify-end">
                  <div className="bg-blue-500 text-white rounded-xl p-3 max-w-xs text-sm whitespace-pre-line">
                    {msg.text}
                  </div>
                </div>
              ) : msg.type === "menu" ? (
                <div key={index}>{renderOpcoes()}</div>
              ) : (
                <div key={index} className="flex items-start gap-2">
                  <img src={fofuriaIcon} alt="fofuria" className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-purple-600">FOFURIA</p>
                    <div className="bg-gray-100 rounded-xl p-3 text-black whitespace-pre-line">
                      {msg.image && <img src={msg.image} alt="jogador" className="w-20 h-20 mb-2 rounded-md" />}
                      {msg.text}
                    </div>
                  </div>
                </div>
              )
            ))}
            {typing && <div className="text-sm italic text-gray-500">Digitando...</div>}
          </div>

          <div className="mt-4 flex">
            <input
              type="text"
              className="flex-1 rounded-l-lg px-4 py-2 text-sm bg-gray-100 outline-none text-black"
              placeholder="Digite algo..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 text-white px-3 rounded-r-lg"
            >
              Enviar
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
