const categories = {

    esportes: [
        {
            question: "Qual seleção venceu a Copa do Mundo de 2018?",
            answers: ["Brasil", "Alemanha", "França", "Argentina"],
            correctAnswer: "França"
        },
        {
            question: "Qual jogador marcou mais gols na história do futebol?",
            answers: ["Pele", "Maradona", "Messi", "Cristiano Ronaldo"],
            correctAnswer: "Cristiano Ronaldo"
        },
        {
            question: "Qual país sediou a primeira Copa do Mundo de futebol em 1930?",
            answers: ["Uruguai", "Brasil", "Argentina", "Itália"],
            correctAnswer: "Uruguai"
        },
        {
            question: "Qual é o recorde de gols em uma única edição da Copa do Mundo?",
            answers: ["10", "13", "16", "19"],
            correctAnswer: "13"
        },
        {
            question: "Qual jogador venceu mais vezes o prêmio de melhor do mundo da FIFA?",
            answers: ["Lionel Messi", "Cristiano Ronaldo", "Zinedine Zidane", "Ronaldinho Gaúcho"],
            correctAnswer: "Lionel Messi"
        },
        {
            question: "Qual foi o país sede da Copa do Mundo de 2018?",
            answers: ["França", "Alemanha", "Brasil", "Rússia"],
            correctAnswer: "Rússia"
        },
        {
            question: "Em qual ano a seleção da Alemanha venceu a Copa do Mundo?",
            answers: ["2006", "2010", "2014", "2018"],
            correctAnswer: "2014"
        },
        {
            question: "Qual foi a seleção que eliminou o Brasil na Copa do Mundo de 2018?",
            answers: ["Alemanha", "Holanda", "França", "Bélgica"],
            correctAnswer: "Bélgica"
        },
        {
            question: "Qual foi o país sede da Copa do Mundo de 2014?",
            answers: ["Espanha", "Brasil", "Itália", "Alemanha"],
            correctAnswer: "Brasil"
        },
        {
            question: "Qual seleção venceu a Copa do Mundo de 2010?",
            answers: ["Holanda", "Espanha", "Alemanha", "Brasil"],
            correctAnswer: "Espanha"
        }
    ],
    filmes: [
        {
            question: "Qual filme ganhou o Oscar de Melhor Filme em 2020?",
            answers: ["1917", "Parasita", "Era Uma Vez em... Hollywood", "Coringa"],
            correctAnswer: "Parasita"
        },
        {
            question: "Qual é o nome do robô protagonista do filme Wall-E?",
            answers: ["Eva", "Wally", "Bob", "Wall-E"],
            correctAnswer: "Wall-E"
        },
        {
            question: "Qual filme é conhecido por ser o primeiro a ganhar 11 Oscars?",
            answers: ["Titanic", "O Senhor dos Anéis: O Retorno do Rei", "Ben-Hur", "A Malvada"],
            correctAnswer: "Ben-Hur"
        },
        {
            question: "Qual foi o primeiro filme a ter uma trilha sonora original?",
            answers: ["O Mágico de Oz", "E o Vento Levou", "King Kong", "A Noiva de Frankenstein"],
            correctAnswer: "King Kong"
        },
        {
            question: "Qual é o nome da banda formada pelos personagens do filme School of Rock?",
            answers: ["The Rockers", "The Shredders", "The School Band", "The School of Rock"],
            correctAnswer: "The School of Rock"
        },
        {
            question: "Qual é o filme de maior bilheteria de todos os tempos?",
            answers: ["Vingadores: Ultimato", "Avatar", "Titanic", "Star Wars: O Despertar da Força"],
            correctAnswer: "Avatar"
        },
        {
            question: "Qual é o nome do personagem interpretado por Keanu Reeves na trilogia Matrix?",
            answers: ["Neo", "Morpheus", "Trinity", "Cypher"],
            correctAnswer: "Neo"
        },
        {
            question: "Qual filme é conhecido por ter a fala 'You can't handle the truth!'?",
            answers: ["Um Sonho de Liberdade", "Questão de Honra", "Rede de Intrigas", "Onze Homens e um Segredo"],
            correctAnswer: "Questão de Honra"
        },
        {
            question: "Qual foi o primeiro filme em que Martin Scorsese e Robert De Niro trabalharam juntos?",
            answers: ["Táxi Driver", "Touro Indomável", "Cassino", "Os Bons Companheiros"],
            correctAnswer: "Touro Indomável"
        },
        {
            question: "Qual é o nome da personagem principal do filme Mulher-Maravilha?",
            answers: ["Diana Prince", "Lois Lane", "Selina Kyle", "Barbara Gordon"],
            correctAnswer: "Diana Prince"
        },
        {
            question: "Qual é o nome do robô gigante do filme Pacific Rim?",
            answers: ["Gipsy Danger", "Cherno Alpha", "Crimson Typhoon", "Striker Eureka"],
            correctAnswer: "Gipsy Danger"
        },
        {
            question: "Qual filme é conhecido por ter a frase 'Here's Johnny!'?",
            answers: ["O Iluminado", "Psicose", "O Silêncio dos Inocentes", "O Exorcista"],
            correctAnswer: "O Iluminado"
        },
        {
            question: "Qual é o nome do personagem interpretado por Al Pacino no filme O Poderoso Chefão?",
            answers: ["Michael Corleone", "Vito Corleone", "Sonny Corleone", "Fredo Corleone"],
            correctAnswer: "Michael Corleone"
        }
    ],
    historia: [
        {
            question: "Em que ano a Primeira Guerra Mundial começou?",
            answers: ["1914", "1915", "1916", "1917"],
            correctAnswer: "1914"
        },
        {
            question: "Qual foi o líder nazista responsável pelo Holocausto?",
            answers: ["Adolf Hitler", "Joseph Stalin", "Benito Mussolini", "Hermann Göring"],
            correctAnswer: "Adolf Hitler"
        },
        {
            question: "Em que ano começou a Revolução Francesa?",
            answers: ["1787", "1788", "1789", "1790"],
            correctAnswer: "1789"
        },
        {
            question: "Qual foi a primeira dinastia a governar a China?",
            answers: ["Shang", "Zhou", "Han", "Tang"],
            correctAnswer: "Shang"
        },
        {
            question: "Quem foi o primeiro imperador romano?",
            answers: ["Julio César", "Augusto", "Nero", "Trajano"],
            correctAnswer: "Augusto"
        },
        {
            question: "Qual foi a batalha que marcou a vitória de William, o Conquistador, na conquista da Inglaterra?",
            answers: ["Batalha de Waterloo", "Batalha de Hastings", "Batalha de Trafalgar", "Batalha de Agincourt"],
            correctAnswer: "Batalha de Hastings"
        },
        {
            question: "Quem foi o líder dos Estados Unidos durante a Guerra Fria?",
            answers: ["Dwight D. Eisenhower", "John F. Kennedy", "Richard Nixon", "Ronald Reagan"],
            correctAnswer: "Ronald Reagan"
        },
        {
            question: "Qual foi o evento que desencadeou a Primeira Guerra Mundial?",
            answers: ["Assassinato do arquiduque Franz Ferdinand", "Invasão da Bélgica", "Afundamento do Titanic", "Tratado de Versalhes"],
            correctAnswer: "Assassinato do arquiduque Franz Ferdinand"
        },
        {
            question: "Qual foi o líder soviético que implementou a política de Glasnost e Perestroika?",
            answers: ["Mikhail Gorbachev", "Leonid Brejnev", "Nikita Khrushchev", "Josef Stalin"],
            correctAnswer: "Mikhail Gorbachev"
        },
        {
            question: "Qual foi o país que liderou o processo de colonização da América?",
            answers: ["Espanha", "Portugal", "Inglaterra", "França"],
            correctAnswer: "Espanha"
        },
        {
            question: "Qual foi a primeira civilização a surgir na Mesopotâmia?",
            answers: ["Babilônios", "Sumérios", "Assírios", "Acádios"],
            correctAnswer: "Sumérios"
        },
        {
            question: "Quem foi o líder do movimento de independência da Índia?",
            answers: ["Mahatma Gandhi", "Jawaharlal Nehru", "Indira Gandhi", "Rajiv Gandhi"],
            correctAnswer: "Mahatma Gandhi"
        },
        {
            question: "Qual foi a primeira cidade a ser atingida pela bomba atômica durante a Segunda Guerra Mundial?",
            answers: ["Hiroshima", "Nagasaki", "Tóquio", "Osaka"],
            correctAnswer: "Hiroshima"
        },
        {
            question: "Quem foi o líder revolucionário responsável pela Revolução Cubana?",
            answers: ["Fidel Castro", "Che Guevara", "Raul Castro", "Camilo Cienfuegos"],
            correctAnswer: "Fidel Castro"
        }
    ],
    ciencia: [
        {
            question: "Qual é a fórmula da água?",
            answers: ["CO2", "H2SO4", "NaCl", "H2O"],
            correctAnswer: "H2O"
        },
        {
            question: "Qual é a maior lua de Saturno?",
            answers: ["Titã", "Europa", "Ganímedes", "Io"],
            correctAnswer: "Titã"
        },
        {
            question: "Qual é o elemento químico mais abundante na crosta terrestre?",
            answers: ["Oxigênio", "Carbono", "Silício", "Alumínio"],
            correctAnswer: "Oxigênio"
        },
        {
            question: "Qual é a lei da física que descreve a ação e reação entre dois corpos?",
            answers: ["Lei da gravitação universal", "Lei da inércia", "Lei de Coulomb", "Terceira lei de Newton"],
            correctAnswer: "Terceira lei de Newton"
        },
        {
            question: "Qual é o tipo sanguíneo considerado receptor universal?",
            answers: ["A", "B", "AB", "O"],
            correctAnswer: "AB"
        },
        {
            question: "Qual é a maior artéria do corpo humano?",
            answers: ["Aorta", "Fêmur", "Cerebelo", "Esôfago"],
            correctAnswer: "Aorta"
        },
        {
            question: "Qual é o ácido presente no estômago?",
            answers: ["Ácido clorídrico", "Ácido sulfúrico", "Ácido nítrico", "Ácido acético"],
            correctAnswer: "Ácido clorídrico"
        },
        {
            question: "Qual é a unidade básica de estrutura dos seres vivos?",
            answers: ["Célula", "Átomo", "Molécula", "DNA"],
            correctAnswer: "Célula"
        },
        {
            question: "Qual é o nome do processo químico que ocorre nas folhas das plantas e que é responsável pela produção de glicose?",
            answers: ["Fotossíntese", "Respiração celular", "Digestão", "Ciclo do ácido cítrico"],
            correctAnswer: "Fotossíntese"
        },
        {
            question: "Qual é o nome dado à distância entre o núcleo de um átomo e sua camada de elétrons?",
            answers: ["Raio atômico", "Massa atômica", "Carga atômica", "Número atômico"],
            correctAnswer: "Raio atômico"
        },
        {
            question: "Qual é a lei da física que descreve a relação entre a força, a massa e a aceleração de um corpo?",
            answers: ["Lei da gravitação universal", "Lei da inércia", "Lei de Coulomb", "Segunda lei de Newton"],
            correctAnswer: "Segunda lei de Newton"
        },
        {
            question: "Qual é o nome do processo de formação de novos tecidos em um organismo?",
            answers: ["Mitose", "Meiose", "Diferenciação celular", "Regeneração"],
            correctAnswer: "Regeneração"
        }
    ]
};

let currentCategory = null;
let currentQuestion = null;
let currentScore = 0;
let currentQuestionIndex = 0;

const categoryButtons = document.querySelectorAll(".category");
const returnStart = document.querySelector(".return");
const questionContainer = document.querySelector(".question-container");
const questionText = document.querySelector(".question");
const answersList = document.querySelector(".answers");
const nextButton = document.querySelector(".next-button");
const scoreText = document.querySelector(".score");
const scoreContainer = document.querySelector(".score-container");
const shareContainer = document.querySelector(".share-container");
const shareButton = document.querySelector(".share-button");
// const resultsContainer = document.querySelector(".results-container");
const correctAnswersText = document.querySelector(".correct-answers");
const totalQuestionsText = document.querySelector(".total-questions");

function showQuestion() {
    questionText.textContent = currentQuestion.question;
    answersList.innerHTML = "";
    for (let i = 0; i < currentQuestion.answers.length; i++) {
        const answer = currentQuestion.answers[i];
        const li = document.createElement("li");
        const button = document.createElement("button");
        button.classList.add("answer");
        button.textContent = answer;
        li.appendChild(button);
        answersList.appendChild(li);
    }
    questionContainer.style.display = "flex";
    questionContainer.style.alignItems = "center";
    questionContainer.style.flexDirection = "column";
    questionContainer.style.justifyContent = "center";
}

function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex >= currentCategory.length) {
        showResults();
    } else {
        currentQuestion = currentCategory[currentQuestionIndex];
        showQuestion();
    }
}

function showResults() {
    questionContainer.style.display = "none";
    returnStart.style.display = "flex";
    returnStart.style.justifyContent = "end";
    shareContainer.style.display = "flex";
    // resultsContainer.style.display = "block";
    scoreText.textContent = `Você acertou ${currentScore} de ${currentCategory.length} perguntas.`;
    correctAnswersText.textContent = currentScore;
    totalQuestionsText.textContent = currentCategory.length;
}

function resetGame() {
    currentCategory = null;
    currentQuestion = null;
    currentScore = 0;
    currentQuestionIndex = 0;
    categoryButtons.forEach(button => button.style.display = "inline-block");
    // resultsContainer.style.display = "none";
}

categoryButtons.forEach(button => {
    button.addEventListener("click", () => {
        currentCategory = categories[button.dataset.category];
        currentQuestion = currentCategory[currentQuestionIndex];
        currentScore = 0;
        currentQuestionIndex = 0;
        categoryButtons.forEach(button => button.style.display = "none");
        scoreContainer.style.display = "block";
        showQuestion();
    });
});

answersList.addEventListener("click", event => {
    if (event.target.classList.contains("answer")) {
        if (event.target.textContent === currentQuestion.correctAnswer) {
            currentScore++;
        }
        nextButton.style.display = "block";
        answersList.style.pointerEvents = "none";
        scoreText.textContent = `Pontuação: ${currentScore}`;
    }
});

nextButton.addEventListener("click", () => {
    showNextQuestion();
    nextButton.style.display = "none";
    answersList.style.pointerEvents = "auto";
});

shareButton.addEventListener("click", () => {
    if (currentCategory) {
        const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent("Eu acertei " + currentScore + " de " + currentCategory.length + " perguntas no jogo de trivia da categoria " + currentCategory[0].category + "!")}`;
        window.open(shareUrl, "_blank");
    }
});
