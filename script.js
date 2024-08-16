const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você conhece uma mulher rica que esta louca para ser sugar mommy de alguem. qual é seu primero pensamento.",
        alternativas: [
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Não precisar trabalhar para comer!"
            },
            {
                texto: "Isso é assustador! ",
                afirmacao: "No começo pensou oque as pessoas iriam pensar sobre."
            }
        ]
    },
    {
        enunciado: "Com esse novo estilo de vida poderia ter oque quiser quando quiser.",
        alternativas: [
            {
                texto: "Ficar com ela e ficar rico.",
                afirmacao: "Você ficou rico agora, aproveite."
            },
            {
                texto: "Não ficar com ela e ficar pobre.",
                afirmacao: "Parabéns você é pobre.."
            }
        ]
    },
    {
        enunciado: "Oque você fara com sua vida agora?.",
        alternativas: [
            {
                texto: "Comprar um jatinho particular.",
                afirmacao: "Agora você tem um jatinho e pode a qualquer país."
            },
            {
                texto: "Procurar um emprego.",
                afirmacao: "Agora você é CLT."
            }
        ]
    },
    {
        enunciado: "Depois de sua conquista qual sera seu objetivo agora?",
        alternativas: [
            {
                texto: "Viajar por todos os países.",
                afirmacao: "Você decide ir para coreia do norte."
            },
            {
                texto: "Subir na hieraquia de sua empresa.",
                afirmacao: "Agora você é chefe do seu setor!"
            }
        ]
    },
    {
        enunciado: "Qual será seu proximo movimento?",
        alternativas: [
            {
                texto: "Entrar sem visto na coreia do norte.",
                afirmacao: "Você foi preso e sua mulher te largou."
            },
            {
                texto: "Continuar trabalhando duro.",
                afirmacao: "Você conseguiu ser promovido e agora tem uma família. "
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
