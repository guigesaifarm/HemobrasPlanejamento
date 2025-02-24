const questions = [
    {
        question: " O que é o Scrum?",
        answers: [
            "A) Um tipo de reunião em metodologias ágeis.",
            "B) Uma estrutura de trabalho para a gestão de projetos ágeis.",
            "C) Um software de gerenciamento de projetos.",
            "D) Um tipo de ferramenta de controle de qualidade."
        ],
        correct: 1
    },
    {
        question: "Qual dos seguintes papéis não faz parte da estrutura do Scrum?",
        answers: [
            "A) Scrum Master.",
            "B) Product Owner.",
            "C) Time de Desenvolvimento.",
            "D) Gerente de Projetos."
        ],
        correct: 3
    },
    {
        question: "No Scrum, o que é o "Backlog" do Produto?",
        answers: [
            "A) Um conjunto de tarefas que o time de desenvolvimento precisa realizar",
            "B) Um banco de dados de informações do projeto.",
            "C)  A lista de requisitos e funcionalidades desejadas para o produto, priorizada pelo Product Owner.",
            "D) A lista de todos os erros reportados durante o ciclo de desenvolvimento."
        ],
        correct: 2
    },
    {
        question: "O que define a metodologia KANBAN em relação ao fluxo de trabalho? ",
        answers: [
            "A)  Utiliza ciclos fixos e prazos definidos.",
            "B)  É baseada em uma lista de tarefas pré estabelecidas.",
            "C) Foca na visualização do trabalho e no controle do fluxo de tarefas em tempo real",
            "D) Segue uma abordagem de desenvolvimento iterativo com entregas frequentes."
        ],
        correct: 2
    },
    {
        question: "Em Scrum, qual é a duração típica de um Sprint?",
        answers: [
            "A) De 1 a 3 dias.",
            "B) De 1 a 4 semanas.",
            "C) De 1 a 6 meses.",
            "D) De 3 a 12 meses."
        ],
        correct: 1
    },
    {
        question: "Qual é o principal objetivo da cerimônia (Daily Scrum) no Scrum?",
        answers: [
            "A) Fazer uma reunião de planejamento do projeto.",
            "B) Realizar a retrospectiva do projeto.",
            "C) Atualizar o time sobre o progresso diário e identificar impedimentos.",
            "D) Avaliar a entrega do produto."
        ],
        correct: 2
    },
    {
        question: "Quais são os principais objetivos da modelagem de processos de negócios?",
        answers: [
            "A) Documentar e identificar os processos de forma clara, para que possam ser analisados e otimizados.",
            "B) Aumentar o custo operacional sem trazer benefícios claros.",
            "C) Criar processos sem considerar a eficiência ou a eficácia",
            "D) Deixar os processos mais complexos e difíceis de serem gerenciados."
        ],
        correct: 0
    },
    {
        question: "Quais são as etapas típicas no ciclo de melhoria de processos no BPM?",
        answers: [
            "A) Planejamento, execução, avaliação, encerramento.",
            "B) Análise, redesenho, implementação, monitoramento.",
            "C) Planejamento, execução, controle de qualidade, encerramento.",
            "D) Monitoramento, análise de riscos, aprovação e execução."
        ],
        correct: 1
    },
    {
        question: 'Como os indicadores de desempenho de processos (KPIs) contribuem para a melhoria contínua em uma organização?',
        answers: [
            "A) Facilitam o controle financeiro sem relação direta com os processos",
            "B) Permitem monitorar a eficiência dos processos e identificar áreas para melhoria contínua.",
            "C) São usados exclusivamente para penalizar equipes quando não atingem metas.",
            "D) Não têm impacto direto no desempenho dos processos."
        ],
        correct: 1
    },
    {
        question: "Quais são os principais benefícios da aplicação do BPM em uma organização?",
        answers: [
            "A) Aumento de custos operacionais sem impacto nas operações.",
            "B) Melhoria da comunicação interna, redução de custos e aumento da eficiência dos processos.",
            "C) Redução da flexibilidade organizacional.",
            "D) Foco exclusivo em resultados financeiros, sem considerar a qualidade dos processos."
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
