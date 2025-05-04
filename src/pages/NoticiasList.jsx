import React from "react";
import "./noticias.css";

const noticias = [
  {
    id: 1,
    titulo: "KRIZZEN JUNTA-SE À FURIA COMO ASSISTENTE TÉCNICO",
    imagem: "/assets/noticias/noticias1.png",
    subtitulo: "A Organização Brasileira adiciona seu terceiro membro de língua russa em tantas semanas.",
    conteudo: [
      `FÚRIA anunciou a adição de Aidyn "KrizzN" Turlybekov como assistente técnico, reforçando a equipe de back-end da organização após seu pivô internacional no início de abril.`,
      `O jovem de 25 anos muda-se para FÚRIA depois de passar três anos como gerente e assistente técnico de Monte, durante o qual ele também foi brevemente treinador da equipe de agosto de 2022 a janeiro de 2023.`,
    ],
  },
  {
    id: 2,
    titulo: "REVELADOS OS CONFRONTOS DE ABERTURA DO PGL ASTANA",
    imagem: "/assets/noticias/noticias2.png",
    subtitulo: "O novo visual do time da FURIA vai estrear contra o MongolZ.",
    conteudo: [
      `A FURIA de FalleN recebeu uma abertura difícil`,
      `A PGL revelou os confrontos de abertura para a PGL Astana, que serão realizados na capital do Cazaquistão a partir de 10-18 de maio e apresentam um prize pool de $1.250.000.`,
      `O evento começará com uma fase de grupos do sistema suíço antes dos playoffs de oito equipes começarem em 16 de maio na Barys Arena.`,
      `Algumas das partidas de destaque incluem Ninjas em Pijamas assumir Virtus.pro no que será a primeira LAN de nível um da organização sueca com sua nova lista, bem como O MongolZ assumindo um FÚRIA lado que agora inclui Danil "molodoy" Golubenko e Mareks "YEKINDAR" Gawinskis.`,
    ],
  },
  {
    id: 3,
    titulo: "SKULLZ NO BANCO, FURIA ADICIONA YEKINDAR COMO STAND-IN",
    imagem: "/assets/noticias/noticias3.png",
    subtitulo: "FURIA dobrou-down em seu pivô para uma lista internacional.",
    conteudo: [
      `A YEKINDAR encontrou uma nova equipe seis meses depois de ser colocada no banco pela Liquid.`,
      `FÚRIA anunciou que Felipe "skullz" Medeiros está se movendo para o banco, dando lugar a YEKINDAR, que chega como stand-in até o BLAST.tv Austin Major.`,
      `"Somos gratos por todo o esforço e trabalho dedicado à equipe, e só desejamos o melhor para o resto de sua carreira", disse a organização.`,
      `YEKINDAR chega à FURIA depois de um tempo conturbado na Liquid, onde atuou como IGL e enfrentou queda de desempenho individual.`,
    ],
  },
  {
    id: 4,
    titulo: "FER DIZ QUE QUASE SE JUNTOU À FURIA ANTES DE YEKINDAR",
    imagem: "/assets/noticias/noticias4.png",
    subtitulo: "O veterano brasileiro revelou que teve conversas com FalleN e Sidde antes de YEKINDAR se tornar disponível.",
    conteudo: [
      `FÚRIA recentemente foi internacional com as adições de molodoy e YEKINDAR, em busca de resultados mais sólidos.`,
      `FER revelou que esteve perto de entrar na equipe, mas foi preterido após YEKINDAR ficar disponível.`,
      `"Eles me chamaram e eu aceitei, só no final escolheram o YEKINDAR", disse FER em live.`,
      `As conversas duraram duas semanas, com reuniões agendadas. YEKINDAR apareceu no último momento e ficou com a vaga.`,
    ],
  },
];

export default function NoticiasList() {
  return (
    <section id="noticias" className="noticia-container">
      <div className="noticia-content">
        {noticias.map((noticia) => (
          <div key={noticia.id} className="mb-20">
            <h1 className="noticia-titulo">{noticia.titulo}</h1>
            <p className="noticia-subtitulo">{noticia.subtitulo}</p>
            <img src={noticia.imagem} alt={noticia.titulo} className="noticia-img" />
            {noticia.conteudo.map((paragrafo, idx) => (
              <p className="noticia-texto" key={idx}>{paragrafo}</p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
