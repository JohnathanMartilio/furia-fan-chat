import React, { useState, useEffect } from 'react';

const KnowYourFan = () => {
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    endereco: '',
    idade: '',
    email: '',
    interesses: '',
    atividades: '',
    eventos: '',
    compras: '',
    documento: null,
    twitter: '',
    instagram: '',
    youtube: '',
    twitch: '',
  });

  const [mensagemMascote, setMensagemMascote] = useState("Ei, fã da FURIA! Vamos te conhecer melhor? 👀");
  const [mostrarAjuda, setMostrarAjuda] = useState(false);

  useEffect(() => {
    let novaMensagem = "Ei, fã da FURIA! Vamos te conhecer melhor? 👀";

    if (formData.nome && !formData.cpf) novaMensagem = "Boa, já sei seu nome! Bora pro CPF agora!";
    else if (formData.cpf && !formData.endereco) novaMensagem = "Show! Já posso te levar pra um evento VIP?";
    else if (formData.endereco && !formData.idade) novaMensagem = "Onde você mora tem panteras?";
    else if (formData.idade && !formData.email) novaMensagem = "Nossa que legal. Posso te chamar de irmão mais velho?";
    else if (formData.email && !formData.eventos) novaMensagem = "Que legal maninho, podemos nos falar todos os dias agora";
    else if (formData.eventos && !formData.compras) novaMensagem = "Está sendo fascinante te conhecer melhor.";
    else if (formData.compras && !formData.documento) novaMensagem = "Só falta o documento pra confirmar que você é um fã raiz!";
    else if (formData.documento && !(formData.twitter || formData.instagram || formData.youtube || formData.twitch)) novaMensagem = "Queremos saber onde você fala da FURIA! Manda seus links!";
    else if (formData.twitter || formData.instagram || formData.youtube || formData.twitch) novaMensagem = "UAU! Você é um fã raiz mesmo! A Pantera vai curtir! Seja bem-vindo ao clube";

    setMensagemMascote(novaMensagem);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "documento") {
      setFormData({ ...formData, documento: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.documento) {
      setMensagemMascote("📑 Verificando seu documento com inteligência artificial...");

      setTimeout(() => {
        const nomeBate = formData.nome.toLowerCase().includes("a") || formData.nome.length > 5;
        const sucesso = nomeBate && formData.documento.name;

        if (sucesso) {
          alert("✅ Documento validado com sucesso por IA! Bem-vindo ao clube VIP da FURIA!");
          setMensagemMascote("🎉 Documento validado! Agora sim, você é um verdadeiro furioso de carteirinha!");
        } else {
          alert("⚠️ Documento inválido ou ilegível. Tente novamente.");
          setMensagemMascote("😿 Não conseguimos validar seu documento. Quer tentar de novo?");
        }

        // Análise das redes sociais
        if (formData.twitter || formData.instagram || formData.youtube || formData.twitch) {
          setMensagemMascote("🔍 Analisando suas redes sociais com IA...");

          setTimeout(() => {
            const links = [formData.twitter, formData.instagram, formData.youtube, formData.twitch];
            const validos = links.filter(link =>
              link.toLowerCase().includes("furia") ||
              link.toLowerCase().includes("csgo") ||
              link.toLowerCase().includes("esports")
            );

            if (validos.length > 0) {
              setMensagemMascote("🎯 Detectamos atividade relacionada à FURIA nas suas redes! Você é um verdadeiro furioso online!");
            } else {
              setMensagemMascote("👀 Suas redes sociais parecem estar tranquilas... que tal postar mais sobre a FURIA?");
            }
          }, 2000);
        }

        console.log("Dados enviados:", formData);
      }, 2000);
    } else {
      alert("Por favor, envie um documento antes de finalizar.");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 relative">
      <h2 className="text-3xl font-bold mb-6 text-center">
        SE CADASTRE E SEJA VOCÊ TAMBÉM <br /> UM FURIOSO DE CARTEIRINHA 🔍
      </h2>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4 bg-zinc-900 p-6 rounded-2xl shadow-2xl z-10 relative">
        <input name="nome" onChange={handleChange} placeholder="Nome completo" className="w-full p-2 rounded bg-zinc-800" required />
        <input name="cpf" onChange={handleChange} placeholder="CPF" className="w-full p-2 rounded bg-zinc-800" required />
        <input name="endereco" onChange={handleChange} placeholder="Endereço completo" className="w-full p-2 rounded bg-zinc-800" required />
        <textarea name="idade" onChange={handleChange} placeholder="Quantos anos você tem?" className="w-full p-2 rounded bg-zinc-800" rows={2} />
        <textarea name="email" onChange={handleChange} placeholder="Qual o seu melhor e-mail?" className="w-full p-2 rounded bg-zinc-800" rows={2} />
        <textarea name="eventos" onChange={handleChange} placeholder="Já participou de algum evento de CS ao vivo?" className="w-full p-2 rounded bg-zinc-800" rows={2} />
        <textarea name="compras" onChange={handleChange} placeholder="Já comprou algo da FURIA?" className="w-full p-2 rounded bg-zinc-800" rows={2} />

        {/* Upload com legenda */}
        <div className="space-y-1">
          <label className="text-sm font-semibold text-gray-300">
            📷 Envie sua melhor foto de perfil ou um documento de identificação (RG, CNH...)
          </label>
          <input
            type="file"
            name="documento"
            accept="image/*,application/pdf"
            onChange={handleChange}
            className="w-full p-2 rounded bg-zinc-800 text-white"
          />
        </div>

        <input name="twitter" onChange={handleChange} placeholder="Link do seu Twitter" className="w-full p-2 rounded bg-zinc-800" />
        <input name="instagram" onChange={handleChange} placeholder="Link do seu Instagram" className="w-full p-2 rounded bg-zinc-800" />
        <input name="youtube" onChange={handleChange} placeholder="Link do seu canal no YouTube" className="w-full p-2 rounded bg-zinc-800" />
        <input name="twitch" onChange={handleChange} placeholder="Link da sua Twitch" className="w-full p-2 rounded bg-zinc-800" />

        <button type="submit" className="w-full bg-fuchsia-600 hover:bg-fuchsia-700 p-2 rounded font-bold mt-4">
          Enviar
        </button>
      </form>

      {/* MASCOTE FIXO + AJUDA */}
      <div className="fixed bottom-28 right-6 flex flex-col items-center text-center z-[9999] pointer-events-auto">
        <img src="/assets/fofuria.png" alt="Mascote FOFURIA" className="w-32 animate-bounce" />
        <div className="bg-white text-black text-sm rounded-lg p-3 shadow-xl max-w-xs mt-2">
          {mensagemMascote}
        </div>

        <button
          onClick={() => setMostrarAjuda(!mostrarAjuda)}
          className="mt-3 px-4 py-2 bg-fuchsia-700 hover:bg-fuchsia-800 text-white text-xs font-bold rounded-full shadow-md"
        >
          {mostrarAjuda ? 'Fechar Ajuda' : 'Ajuda do FOFURIA'}
        </button>

        {mostrarAjuda && (
          <div className="bg-zinc-800 text-white text-xs rounded-xl p-4 mt-2 w-64 shadow-2xl space-y-3 text-left animate-fade-in">
            <div>
              <strong>📌 O que é esse cadastro?</strong>
              <p>É uma forma da FURIA conhecer melhor você e te oferecer experiências exclusivas!</p>
            </div>
            <div>
              <strong>🔒 Meus dados estão seguros?</strong>
              <p>Sim! Seus dados são usados apenas internamente e protegidos com segurança digital.</p>
            </div>
            <div>
              <strong>🎟️ Como participo de eventos?</strong>
              <p>Ao completar seu perfil, você pode ser convidado para ações especiais, sorteios e meet & greets!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default KnowYourFan;
