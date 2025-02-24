const questions = [
    {
        question: " O que é o Six Sigma?",
        answers: [
            "A) Uma metodologia de gestão de projetos ágeis.",
            "B) Uma técnica de marketing para melhorar a satisfação do cliente.",
            "C) Um conjunto de técnicas e ferramentas usadas para melhorar os processos e reduzir a variação.",
            "D) Um método exclusivo para controlar custos em projetos."
        ],
        correct: 2
    },
    {
        question: "Quais são as fases do ciclo <DMAIC> no Six Sigma?",
        answers: [
            "A) Definir, Medir, Analisar, Implantar e Controlar.",
            "B) Definir, Medir, Analisar, Melhorar e Controlar.",
            "C) Determinar, Mapear, Avaliar, Implantar e Controlar.",
            "D) Diagnosticar, Medir, Analisar, Implementar e Controlar."
        ],
        correct: 1
    },
    {
        question: "Qual é o principal objetivo da fase <Definir> no ciclo DMAIC?",
        answers: [
            "A) Analisar os dados para determinar a causa raiz do problema.",
            "B) Definir os requisitos e escopo do projeto, incluindo os objetivos do cliente e do processo.",
            "C) Implantar as soluções para os problemas identificados.",
            "D) Controlar as melhorias implementadas."
        ],
        correct: 1
    },
    {
        question: "Qual é a principal ferramenta usada na fase <Medir> do Six Sigma?",
        answers: [
            "A) Diagrama de Ishikawa.",
            "B) Gráfico de controle.",
            "C) Pareto Analysis.",
            "D) Coleta de dados e análise de variabilidade do processo."
        ],
        correct: 3
    },
    {
        question: "O que é o <Desvio Padrão> no contexto do Six Sigma?",
        answers: [
            "A) A medida da média dos dados coletados.",
            "B) A diferença entre o maior e o menor valor em um conjunto de dados.",
            "C) A medida da dispersão ou variação dos dados em relação à média.",
            "D) A soma de todos os valores em um conjunto de dados."
        ],
        correct: 2
    },
    {
        question: "O que significa um <Nível Sigma> de 6 sigmas em um processo?",
        answers: [
            "A)  O processo tem uma taxa de defeitos de 0,34%.",
            "B) O processo tem um total de defeitos próximo de 0,01%.",
            "C) O processo tem uma variação média de 6%.",
            "D) O processo não tem variação."
        ],
        correct: 1
    },
    {
        question: "Na fase <Analisar> do DMAIC, qual é o principal objetivo?",
        answers: [
            "A) Medir a eficácia das soluções implementadas.",
            "B) Identificar a causa raiz do problema ou da variação no processo.",
            "C) Melhorar a eficiência do processo.",
            "D) Controlar o novo processo após a implementação das melhorias."
        ],
        correct: 1
    },
    {
        question: "Qual é a função principal de um <Green Belt> no Six Sigma?",
        answers: [
            "A) Liderar projetos de grande porte e definir a estratégia da organização.",
            "B) Auxiliar na implementação de melhorias em processos, usando as ferramentas do Six Sigma, e atuar como facilitador de pequenos projetos.",
            "C) Definir e controlar os níveis de produção da organização.",
            "D) Supervisionar os projetos de todos os Black Belts na organização."
        ],
        correct: 1
    },
    {
        question: "Qual é o propósito da ferramenta <Diagrama de Ishikawa> (ou Diagrama de Causa e Efeito)?",
        answers: [
            "A) Visualizar a variação no processo.",
            "B) Identificar e categorizar as causas possíveis para um problema.",
            "C) Controlar o fluxo de trabalho dentro de um processo.",
            "D) Determinar a eficácia das ações corretivas."
        ],
        correct: 1
    },
    {
        question: "Qual é o conceito de <Capacidade do Processo> (Cp) no Six Sigma?",
        answers: [
            "A) A capacidade de um processo para se adaptar rapidamente a mudanças.",
            "B) A habilidade do processo em produzir o número máximo de unidades em um dado tempo.",
            "C) A medida de quão bem um processo pode produzir resultados dentro de limites aceitáveis de especificação.",
            "D) A quantidade de recursos necessários para operar um processo."
        ],
        correct: 2
    }
];



let currentQuestion = 0;
let userAnswers = [];

function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
}

function showQuestion() {
    const questionContainer = document.getElementById("question-container");
    const questionData = questions[currentQuestion];
    questionContainer.innerHTML = `
        <h2>${questionData.question}</h2>
        ${questionData.answers.map((answer, index) => `
            <label>
                <input type="radio" name="answer" value="${index}">
                ${answer}
            </label><br>
        `).join("")}
    `;
}

function nextQuestion() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        userAnswers.push(parseInt(selectedAnswer.value));
        currentQuestion++;
        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            showResults();
        }
    } else {
        alert("Por favor, selecione uma resposta.");
    }
}

function showResults() {
    let score = 0;
    const questionContainer = document.getElementById("question-container");
    let resultHtml = "<h2>Resultado Final</h2><table><tr><th>Questão</th><th>Resposta Correta</th><th>Sua Resposta</th></tr>";

    questions.forEach((q, index) => {
        const isCorrect = userAnswers[index] === q.correct;
        if (isCorrect) score++;
        resultHtml += `
            <tr>
                <td>${q.question}</td>
                <td>${q.answers[q.correct]}</td>
                <td>${q.answers[userAnswers[index]] || "Não respondida"}</td>
            </tr>
            <tr><td colspan="3"><hr></td></tr>
        `;
    });

    resultHtml += `</table><p>Total de acertos: ${score}/${questions.length}</p>`;
    questionContainer.innerHTML = resultHtml;
    document.getElementById("next-button").style.display = "none";
    document.getElementById("restart-button").style.display = "inline-block";
}

function restartQuiz() {
    userAnswers = [];
    currentQuestion = 0;
    shuffleQuestions();
    showQuestion();
    document.getElementById("next-button").style.display = "inline-block";
    document.getElementById("restart-button").style.display = "none";
}

shuffleQuestions();
showQuestion();
