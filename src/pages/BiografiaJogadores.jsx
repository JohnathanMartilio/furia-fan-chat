import React from "react";
import "./biografia.css";

export default function Biografia() {
  const jogadores = [
    {
      nome: 'Gabriel "FalleN" Toledo',
      funcao: "Suport / IGL · 🇧🇷",
      bio: "Bicampeão de Major, fundador da Games Academy e Fallen Store.",
      img: "/assets/players/jg-fallen.png",
      redes: [
        { nome: "Twitter", link: "https://twitter.com/FalleNCS" },
        { nome: "YouTube", link: "https://www.youtube.com/@falleninsider" },
        { nome: "Loja", link: "https://www.fallenstore.com.br" },
        { nome: "Instagram", link: "https://www.instagram.com/fallencs" }
      ]
    },
    {
      nome: 'Yuri "yuurih" Boian',
      funcao: "Rifler · 🇧🇷",
      bio: "Jogador mais longevo da FURIA. No time desde 2017.",
      img: "/assets/players/jg-yuurih.png",
      redes: [
        { nome: "Twitter", link: "https://twitter.com/yuurih" },
        { nome: "Twitch", link: "https://www.twitch.tv/yuurih" },
        { nome: "Instagram", link: "https://www.instagram.com/yuurihfps" }
      ]
    },
    {
      nome: 'Kaike "KSCERATO" Cerato',
      funcao: "Rifler (lurker) · 🇧🇷",
      bio: "No time desde 2018, promovido da FURIA Academy.",
      img: "/assets/players/jg-kscerato.png",
      redes: [
        { nome: "Twitter", link: "https://twitter.com/kscerato" },
        { nome: "Twitch", link: "https://www.twitch.tv/kscerato" },
        { nome: "Instagram", link: "https://www.instagram.com/kscerato" }
      ]
    },
    {
      nome: 'Mareks "YEKINDAR" Gaļinskis',
      funcao: "Rifler ( Entry Fragger) · 🇱🇻",
      bio: "Top 8 do mundo em 2021, ex-Virtus.pro e Liquid.",
      img: "/assets/players/jg-yekindar.png",
      redes: [
        { nome: "Twitter", link: "https://twitter.com/YEKINDAR" },
        { nome: "Twitch", link: "https://www.twitch.tv/yek1ndar" }
      ]
    },
    {
      nome: 'Viacheslav "molodoy" Britvin',
      funcao: "Atualmente Awp na Furia · kz",
      bio: "Uma grande promessa, molodoy entra na furia, para ser o novo AWP da equipe.",
      img: "/assets/players/jg-molodoy.png",
      redes: [
        { nome: "Instagram", link: "https://www.instagram.com/danil.molodoy_" }
      ]
    },
    {
      nome: 'Sid "sidde" Macedo',
      funcao: "Head Coach · 🇧🇷",
      bio: "Anunciado como treinador principal em julho de 2024.",
      img: "/assets/players/jg-sidde.png",
      redes: [
        { nome: "Twitter", link: "https://twitter.com/Siddecs" }
      ]
    }
  ];

  return (
    <section id="jogadores" className="biografia-section">
      <h2 className="biografia-titulo">Biografia dos Jogadores</h2>

      <div className="jogadores-grid">
        {jogadores.map((jogador, index) => (
          <div key={index} className="jogador-card">
            <img src={jogador.img} alt={jogador.nome} className="jogador-img" />
            <h3 className="jogador-nome">{jogador.nome}</h3>
            <p className="jogador-bio">{jogador.funcao}</p>
            <p className="jogador-bio">{jogador.bio}</p>
            <div className="redes">
              {jogador.redes.map((rede, i) => (
                <a key={i} href={rede.link} target="_blank" rel="noreferrer">
                  {rede.nome}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
