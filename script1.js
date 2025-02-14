const questions = [
    {
        question: "Qual das seguintes opções melhor define Gestão Estratégica?",
        answers: [
            "A) Processo de tomada de decisões operacionais para o dia a dia da empresa.",
            "B) Conjunto de ações táticas para alcançar metas de curto prazo.",
            "C) Processo de formulação e implementação de ações para alcançar os objetivos de longo prazo da organização, considerando o ambiente interno e externo.",
            "D) Análise de dados financeiros para avaliar o desempenho da empresa no último trimestre."
        ],
        correct: 2
    },
    {
        question: "Em qual nível de estratégia se define o mercado-alvo e a proposta de valor de um produto ou serviço?",
        answers: [
            "A) Estratégia Corporativa",
            "B) Estratégia de Negócios",
            "C) Estratégia Funcional",
            "D) Todas as alternativas anteriores"
        ],
        correct: 1
    },
    {
        question: "A Análise SWOT é uma ferramenta utilizada para:",
        answers: [
            "A) Avaliar o desempenho financeiro da empresa.",
            "B) Identificar os pontos fortes e fracos da organização, bem como as oportunidades e ameaças do ambiente externo.",
            "C) Definir a missão, visão e valores da empresa.",
            "D) Elaborar o plano de marketing da empresa."
        ],
        correct: 1
    },
    {
        question: " Quais são as quatro perspectivas principais do Balanced Scorecard?",
        answers: [
            "A) Financeira, clientes, processos internos e aprendizado e crescimento.",
            "B) Financeira, fornecedores, inovação e qualidade.",
            "C) Funcionários, processos internos, marketing e retorno financeiro.",
            "D) Resultados financeiros, satisfação do cliente, eficiência e sustentabilidade."
        ],
        correct: 0
    },
 {
        question: " O que é o Balanced Scorecard (BSC)?",
        answers: [
            "A) Uma ferramenta de gestão que mede o desempenho financeiro de uma empresa.",
            "B) Um sistema de avaliação que foca apenas nos indicadores financeiros da organização. ",
            "C) Uma metodologia de gestão estratégica que mede o desempenho de uma empresa sob quatro perspectivas: financeira, clientes, processos internos e aprendizado e crescimento. ",
            "D) Uma ferramenta usada exclusivamente para marketing e comunicação. "
        ],
        correct: 2
    },
     {
        question: " Quais são as quatro perspectivas principais do Balanced Scorecard?",
        answers: [
            "A) Financeira, clientes, processos internos e aprendizado e crescimento.",
            "B) Financeira, fornecedores, inovação e qualidade.",
            "C) Funcionários, processos internos, marketing e retorno financeiro.",
            "D) Resultados financeiros, satisfação do cliente, eficiência e sustentabilidade."
        ],
        correct: 0
    },
     {
        question: " Quais são as quatro perspectivas principais do Balanced Scorecard?",
        answers: [
            "A) Financeira, clientes, processos internos e aprendizado e crescimento.",
            "B) Financeira, fornecedores, inovação e qualidade.",
            "C) Funcionários, processos internos, marketing e retorno financeiro.",
            "D) Resultados financeiros, satisfação do cliente, eficiência e sustentabilidade."
        ],
        correct: 0
    },
     {
        question: " Quais são as quatro perspectivas principais do Balanced Scorecard?",
        answers: [
            "A) Financeira, clientes, processos internos e aprendizado e crescimento.",
            "B) Financeira, fornecedores, inovação e qualidade.",
            "C) Funcionários, processos internos, marketing e retorno financeiro.",
            "D) Resultados financeiros, satisfação do cliente, eficiência e sustentabilidade."
        ],
        correct: 0
    },
     {
        question: " Quais são as quatro perspectivas principais do Balanced Scorecard?",
        answers: [
            "A) Financeira, clientes, processos internos e aprendizado e crescimento.",
            "B) Financeira, fornecedores, inovação e qualidade.",
            "C) Funcionários, processos internos, marketing e retorno financeiro.",
            "D) Resultados financeiros, satisfação do cliente, eficiência e sustentabilidade."
        ],
        correct: 0
    },
     {
        question: " Quais são as quatro perspectivas principais do Balanced Scorecard?",
        answers: [
            "A) Financeira, clientes, processos internos e aprendizado e crescimento.",
            "B) Financeira, fornecedores, inovação e qualidade.",
            "C) Funcionários, processos internos, marketing e retorno financeiro.",
            "D) Resultados financeiros, satisfação do cliente, eficiência e sustentabilidade."
        ],
        correct: 0
    },
     {
        question: " Quais são as quatro perspectivas principais do Balanced Scorecard?",
        answers: [
            "A) Financeira, clientes, processos internos e aprendizado e crescimento.",
            "B) Financeira, fornecedores, inovação e qualidade.",
            "C) Funcionários, processos internos, marketing e retorno financeiro.",
            "D) Resultados financeiros, satisfação do cliente, eficiência e sustentabilidade."
        ],
        correct: 0
    },
    

            // Adicione mais perguntas conforme necessário
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
