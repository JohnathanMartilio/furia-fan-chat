import React, { useState } from "react";

export default function FanRegistration() {
  const [form, setForm] = useState({
    nome: "",
    cpf: "",
    endereco: "",
    interesses: "",
    eventos: "",
    compras: "",
    redesSociais: "",
    linkPerfilEsports: "",
    documento: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Dados enviados! (simulação)");
    console.log("Formulário:", form);
  };

  return (
    <div className="bg-black text-white p-6 rounded-xl shadow-xl max-w-2xl mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Know Your Fan 🔍</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          placeholder="Nome completo"
          className="w-full p-2 rounded bg-gray-800"
          value={form.nome}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="cpf"
          placeholder="CPF"
          className="w-full p-2 rounded bg-gray-800"
          value={form.cpf}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="endereco"
          placeholder="Endereço"
          className="w-full p-2 rounded bg-gray-800"
          value={form.endereco}
          onChange={handleChange}
        />
        <input
          type="text"
          name="interesses"
          placeholder="Interesses em e-sports"
          className="w-full p-2 rounded bg-gray-800"
          value={form.interesses}
          onChange={handleChange}
        />
        <input
          type="text"
          name="eventos"
          placeholder="Eventos que participou"
          className="w-full p-2 rounded bg-gray-800"
          value={form.eventos}
          onChange={handleChange}
        />
        <input
          type="text"
          name="compras"
          placeholder="Compras relacionadas à FURIA"
          className="w-full p-2 rounded bg-gray-800"
          value={form.compras}
          onChange={handleChange}
        />
        <input
          type="text"
          name="redesSociais"
          placeholder="Links das redes sociais"
          className="w-full p-2 rounded bg-gray-800"
          value={form.redesSociais}
          onChange={handleChange}
        />
        <input
          type="text"
          name="linkPerfilEsports"
          placeholder="Link de perfil em sites de e-sports"
          className="w-full p-2 rounded bg-gray-800"
          value={form.linkPerfilEsports}
          onChange={handleChange}
        />
        <div className="text-sm">Upload de Documento (simulado)</div>
        <input
          type="file"
          name="documento"
          className="w-full p-2 rounded bg-gray-800"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        >
          Enviar dados
        </button>
      </form>
    </div>
  );
}
