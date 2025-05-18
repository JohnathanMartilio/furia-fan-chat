import React, { useState, useEffect } from 'react';

const KnowYourFan = () => {
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    endereco: '',
    interesses: '',
    atividades: '',
    eventos: '',
    compras: '',
  });

  const [mensagemMascote, setMensagemMascote] = useState("Ei, fã da FURIA! Vamos te conhecer melhor? 👀");
  const [mostrarAjuda, setMostrarAjuda] = useState(false);

  useEffect(() => {
    let novaMensagem = "Ei, fã da FURIA! Vamos te conhecer melhor? 👀";

    if (formData.nome && !formData.cpf) novaMensagem = "E por esse nome que ela te chamava ? NAO ERA DE AMOR NAO ?";
    else if (formData.cpf && !formData.endereco) novaMensagem = "PARECE COM O CPF DE XANDA. UE O.o";
    else if (formData.endereco && !formData.idade) novaMensagem = "E O ENDERECO DA CASA DELA MAI CONSA ?";
    else if (formData.idade && !formData.email) novaMensagem = " Nossa que legal. Posso te chamar de irmão mais velho ? "
    else if (formData.email && !formData.eventos) novaMensagem = "Que legal maninho, podemos nos falar todos os dias agora"
    else if (formData.eventos && !formData.compras) novaMensagem = "Está sendo facinante te conhecer melhor."
    else if (formData.compras) novaMensagem = "UAU! Você é um fãn raiz mesmo! A Pantera vai curtir! Seja Bem-vindo ao clube";

    setMensagemMascote(novaMensagem);
  }, [formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mensagemFinal = "Parabéns! Seus dados foram enviados com sucesso. Você agora é um FURIOSO de carteirinha!";
    alert(mensagemFinal);
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 relative">
      <h2 className="text-3xl font-bold mb-6 text-center">SE CADASTRE E SEJA VOCE TAMBÉM <br /> UM FURIOSO DE CARTEIRINHA 🔍
</h2>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4 bg-zinc-900 p-6 rounded-2xl shadow-2xl z-10 relative">
        <input name="nome" onChange={handleChange} placeholder="Nome completo" className="w-full p-2 rounded bg-zinc-800" required />
        <input name="cpf" onChange={handleChange} placeholder="CPF" className="w-full p-2 rounded bg-zinc-800" required />
        <input name="endereco" onChange={handleChange} placeholder="Endereço completo" className="w-full p-2 rounded bg-zinc-800" required />
        <textarea name="idade" onChange={handleChange} placeholder="Quantos anos você tem ?" className="w-full p-2 rounded bg-zinc-800" rows={2} />
        <textarea name="email" onChange={handleChange} placeholder="Qual o seu melhor e-mail ?" className="w-full p-2 rounded bg-zinc-800" rows={2} />
        <textarea name="eventos" onChange={handleChange} placeholder="já participou de um algum evento de CS ao vivo ?" className="w-full p-2 rounded bg-zinc-800" rows={2} />
        <textarea name="compras" onChange={handleChange} placeholder="Já Comprou algo da FURIA?" className="w-full p-2 rounded bg-zinc-800" rows={2} />
        <button type="submit" className="w-full bg-fuchsia-600 hover:bg-fuchsia-700 p-2 rounded font-bold mt-4">Enviar</button>
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
              <p>Ao completar seu perfil, você pode ser convidado para ações especiais, sorteios com premiaçoes e meet & greets!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default KnowYourFan;
