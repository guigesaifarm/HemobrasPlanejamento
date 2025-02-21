const questions = [
    {
        question: "O que significa a sigla BPM na gestão de processos de negócios?",
        answers: [
            "A) Business Process Management (Gestão de Processos de Negócios).",
            "B) Balanced Process Management (Gestão Balanceada de Processos).",
            "C) Business Process Methodology (Metodologia de Processos de Negócios).",
            "D) Business Planning Model (Modelo de Planejamento de Negócios)."
        ],
        correct: 0
    },
    {
        question: "Qual é a principal função dos indicadores de desempenho de processos (KPIs)?",
        answers: [
            "A) Garantir que todos os processos sejam concluídos dentro do prazo estipulado.",
            "B) Medir a eficiência e a eficácia dos processos, permitindo ajustes e melhorias.",
            "C) Controlar as atividades individuais de cada colaborador no processo.",
            "D) Prever o sucesso do processo no longo prazo, sem necessidade de ajustes."
        ],
        correct: 1
    },
    {
        question: "O que caracteriza a modelagem de processos As-Is?",
        answers: [
            "A) Modelagem que representa o processo como ele deveria ser no futuro.",
            "B) Modelagem que descreve o processo como ele é atualmente, sem mudanças.",
            "C) Modelagem que descreve a visão futura desejada para o processo",
            "D) Modelagem que descreve o processo após as melhorias serem implementadas."
        ],
        correct: 1
    },
    {
        question: "O que significa a modelagem To-Be em gestão de processos?",
        answers: [
            "A) Representa o processo atual, com todos os problemas identificados.",
            "B) Representa o processo após a implementação de melhorias ou mudanças desejadas.",
            "C) Representa o processo sem quaisquer alterações ou otimizações.",
            "D) Representa o processo como ele é no final do projeto."
        ],
        correct: 1
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
