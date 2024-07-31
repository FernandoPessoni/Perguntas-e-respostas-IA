const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você é uma pessoa que sonha em entrar na NBA, joga há muitos anos e é muito dedicado, porém, tem apenas 1,59 de altura e seus amigos dizem que é impossível. O que você faz?",
        alternativas: [
            {
                texto: "Sente dúvida de si mesmo",
                afirmacao: "Devido as inseguranças que você mesmo criou, você para de treinar como antes e se torna um jogador inseguro."
            },
            {
                texto: "Não dá ouvidos a eles e continua treinando.",
                afirmacao: "Para compensar sua falta de altura, você foca em melhorar suas habilidades de drible, arremesso e defesa, focando em se tornar um jogador completo."
            }
        ]
    },
    {
        enunciado: "Você estava jogando com seus amigos até que um olheiro da NBA veio até você e disse que você deveria fazer um teste para entrar no time dele. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Você aceita tentar, com confiança.",
                afirmacao: "Você faz o jogo para teste e surpreende o técnico com seu esforço e suas habilidades, e isso convence o técnico a te deixar entrar como titular."
            },
            {
                texto: "Você aceita tentar, mas com medo de falhar.",
                afirmacao: "Você não consegue jogar tão bem por causa do seu medo e insegurança, e o técnico acaba te deixando como um dos reservas."
            }
        ]
    },
    {
        enunciado: "Você encontra seus amigos depois de um tempo e te chamam para jogar uma partida de basquete com eles. Qual a sua resposta?",
        alternativas: [
            {
                texto: "Vamos jogar",
                afirmacao: "Você joga com confiança e mostra tudo o que aprendeu com os treinos, provando que sua altura não importa."
            },
            {
                texto: "Melhor não",
                afirmacao: "Você não quer jogar pois fica inseguro de jogar mal mesmo estando em um time bom, e esse medo te limita em todos os jogos."
            }
        ]
    },
   
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
