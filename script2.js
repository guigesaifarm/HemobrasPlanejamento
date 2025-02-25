const questions = [
    {
        question: "O que é o MASP (Método de Análise e Solução de Problemas)?",
        answers: [
            "A) Um método voltado apenas para a análise de dados financeiros.",
            "B) Uma ferramenta utilizada para resolver problemas relacionados a recursos humanos.",
            "C) Uma metodologia estruturada para identificar, analisar e resolver problemas de forma sistemática.  ",
            "D) Um modelo de negócios para aumentar a lucratividade de uma organização. "
        ],
        correct: 2
    },
    {
        question: "Quais são as etapas principais do MASP?",
        answers: [
            "A) Definição do problema, pesquisa de mercado, análise SWOT e análise de custos.",
            "B) Identificação do problema, análise das causas, definição de soluções, implementação e controle dos resultados.",
            "C) Diagnóstico financeiro, análise do mercado, ações corretivas e feedback.",
            "D) Identificação da solução, levantamento de recursos, análise de viabilidade e monitoramento."
        ],
        correct: 1
    },
    {
        question: "No MASP, qual é o objetivo da etapa de Análise das Causas?",
        answers: [
            "A) Elaborar uma solução sem considerar as causas do problema.",
            "B) Diagnosticar o problema e a necessidade de novos investimentos. ",
            "C) Identificar as causas raiz do problema para tratá-lo de maneira eficaz. ",
            "D) Definir a equipe que será responsável pela solução."
        ],
        correct: 2
    },
    {
        question: "Em qual etapa do MASP é feita a coleta de dados para análise?",
        answers: [
            "A) Implementação da solução.",
            "B) Definição do problema. ",
            "C) Análise das causas. ",
            "D) Estudo e monitoramento de resultados."
        ],
        correct: 2
    },
    {
        question: "O que caracteriza a etapa de Definição do Problema no MASP?",
        answers: [
            "A) Trata-se de identificar quais recursos financeiros serão necessários",
            "B) Consiste em delimitar e descrever claramente o problema a ser resolvido, sem considerar soluções ainda.",
            "C) Implica em encontrar soluções rápidas e temporárias.",
            "D) Trata de medir os resultados e definir metas de longo prazo."
        ],
        correct: 1
    },
    {
        question: "Qual é o papel da Implementação no MASP?",
        answers: [
            "A) Resolver o problema sem se preocupar com o impacto em longo prazo.",
            "B) Aplicar as soluções propostas com acompanhamento dos resultados.",
            "C) Investigar mais profundamente as causas do problema.",
            "D) Testar apenas as soluções mais baratas e simples."
        ],
        correct: 1
    },
    {
        question: "No MASP, o que é feito durante a etapa de Controle dos Resultados?",
        answers: [
            "A) A solução é monitorada para garantir que os problemas sejam definitivamente resolvidos. ",
            "B) Apenas a definição de novas metas e objetivos é realizada.",
            "C) Nenhuma ação é tomada após a implementação da solução.",
            "D) A solução é apenas analisada superficialmente."
        ],
        correct: 0
    },
    {
        question: "Qual é a importância de realizar o Estudo da Viabilidade dentro do MASP?",
        answers: [
            "A) Avaliar se o problema identificado está gerando altos custos financeiros.",
            "B) Verificar se a solução proposta pode ser aplicada de forma eficiente, considerando recursos, tempo e custo.",
            "C) Identificar os principais envolvidos no processo de solução.",
            "D) Criar um plano de marketing para promover a solução."
        ],
        correct: 1
    },
    {
        question: 'Qual é o benefício da aplicação do MASP em uma organização?',
        answers: [
            "A) Aumento de custos operacionais sem melhoria significativa nos resultados.",
            "B) Melhoria contínua nos processos e soluções estruturadas para os problemas encontrados.",
            "C) Redução de recursos financeiros e materiais.",
            "D) Aumento da competitividade no mercado por meio de estratégias agressivas."
        ],
        correct: 1
    },
    {
        question: "Em que situação o MASP é mais utilizado?",
        answers: [
            "A) Apenas em empresas de grande porte com grandes problemas financeiros",
            "B) Para otimizar processos e solucionar problemas identificados em qualquer tipo de organização, independente do porte.",
            "C) Quando uma empresa precisa realizar reestruturações corporativas rápidas.",
            "D) Apenas em casos de problemas de marketing e vendas."
        ],
        correct: 1
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
