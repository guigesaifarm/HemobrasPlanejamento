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
        question: "No Scrum, o que é o Backlog do Produto?",
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
        question: "Qual é a principal característica do Kanban em relação ao Scrum?",
        answers: [
            "A) Kanban utiliza sprints curtos e ciclos fixos.",
            "B) Kanban não tem roles definidos como Scrum Master e Product Owner.",
            "C) Kanban exige uma reunião diária obrigatória.",
            "D) Kanban trabalha com prazos fixos de entrega."
        ],
        correct: 1
    },
    {
        question: "O que envolve o processo de (Gerenciamento das Aquisições do Projeto)?",
        answers: [
            "A) Determinar os riscos do projeto.",
            "B) Identificar os stakeholders do projeto.",
            "C) Planejar, realizar, monitorar e controlar as aquisições de bens e serviços externos.",
            "D) Criar o cronograma do projeto."
        ],
        correct: 2
    },
    {
        question: 'Qual das alternativas é uma das principais atividades do processo de (Planejamento das Aquisições)?',
        answers: [
            "A) Estabelecer os requisitos de cada tarefa no cronograma.",
            "B) Definir os critérios para aquisição de recursos externos, como contratos e fornecedores.",
            "C) Estabelecer as métricas de desempenho do time de desenvolvimento.",
            "D) Criar o plano de comunicação do projeto."
        ],
        correct: 1
    },
    {
        question: "O que significa (Contratação de Aquisições) no ciclo de gerenciamento de aquisições de um projeto?",
        answers: [
            "A) A fase onde são feitas as propostas para aquisição de bens ou serviços.",
            "B) A fase onde o gerente de projetos assume a responsabilidade total pelas aquisições.",
            "C) A fase onde são feitas as compras ou contratações de acordo com o planejamento.",
            "D) A fase onde são definidas as funções dos fornecedores."
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
