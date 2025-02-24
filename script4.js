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
        question: "Qual é a relação entre os conceitos de As-Is e To-Be na gestão de processos?",
        answers: [
            "A) As-Is representa o processo ideal e To-Be representa o processo atual.",
            "B) As-Is representa o processo atual, enquanto To-Be representa o processo otimizado ou futuro.",
            "C) Não há relação entre esses conceitos.",
            "D) As-Is é uma versão temporária do processo e To-Be é o final do ciclo de vida do processo."
        ],
        correct: 1
    },
    {
        question: "O que é a Gestão de Processos de Negócios,BPM, focada em?",
        answers: [
            "A) Em criar processos de negócios de baixo custo, independentemente da qualidade.",
            "B) Em melhorar e otimizar processos de negócios de forma contínua.",
            "C) Em criar novos produtos e serviços sem se preocupar com os processos.",
            "D) Em manter os processos exatamente como estão, sem alterações."
        ],
        correct: 1
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
