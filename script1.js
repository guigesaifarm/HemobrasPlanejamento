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
        question: " A perspectiva "financeira" no BSC se concentra em:",
        answers: [
            "A) Medir o desempenho de novos produtos no mercado. ",
            "B) A avaliação de custo-benefício de estratégias de recursos humanos. ",
            "C) Avaliar o desempenho financeiro da organização, como lucros, retorno sobre investimento e valor para os acionistas.",
            "D) Medir a satisfação dos funcionários e clientes. "
        ],
        correct: 2
    },
     {
        question: "  Na perspectiva de "clientes" do BSC, a ênfase é:",
        answers: [
            "A)  Monitorar os processos internos da empresa. ",
            "B)  Melhorar a experiência e a satisfação do cliente, medindo lealdade, retenção e aquisição de clientes. ",
            "C)  Avaliar a rentabilidade de novos projetos.",
            "D)  Focar em reduzir custos operacionais."
        ],
        correct: 1
    },
     {
        question: " A perspectiva "processos internos" do BSC se concentra em: ",
        answers: [
            "A) A eficiência operacional e a melhoria dos processos internos críticos que impactam a qualidade e a entrega de valor ao cliente.",
            "B) A análise de dados financeiros e a projeção de lucros futuros.",
            "C) A análise de oportunidades de marketing e comunicação.",
            "D) A satisfação dos stakeholders e dos acionistas."
        ],
        correct: 0
    },
     {
        question: " A perspectiva "aprendizado e crescimento" do BSC está relacionada a: ",
        answers: [
            "A) Melhorar a infraestrutura tecnológica da empresa.",
            "B) Focar na inovação, no desenvolvimento de competências e habilidades dos colaboradores e no ambiente organizacional.",
            "C) Maximizar a produção de bens e serviços.",
            "D) Aumentar as receitas através de novas aquisições de empresas."
        ],
        correct: 1
    },
     {
        question: "  Qual é a principal vantagem do Balanced Scorecard (BSC)?",
        answers: [
            "A) Ele permite medir exclusivamente os lucros financeiros de uma organização. ",
            "B) Ele oferece uma abordagem equilibrada para medir o desempenho, considerando não apenas aspectos financeiros, mas também não financeiros, como satisfação do cliente e melhoria dos processos internos. ",
            "C) Ele é utilizado apenas para avaliar a satisfação dos clientes. ",
            "D)  Ele foca apenas em indicadores de produtividade dos funcionários. "
        ],
        correct: 1
    },
     {
        question: " Como o Balanced Scorecard ajuda a estratégia de uma organização? ",
        answers: [
            "A) Ele ignora a missão e visão da organização para focar exclusivamente nas métricas financeiras.",
            "B) Ele ajuda a traduzir a estratégia em ações concretas, alinhando os objetivos estratégicos com as operações diárias e fornecendo feedback contínuo sobre o progresso.",
            "C) Ele concentra-se apenas em aumentar a participação no mercado, sem considerar a eficiência interna.",
            "D) Ele usa apenas indicadores financeiros para medir a performance organizacional."
        ],
        correct: 1
    },
     {
        question: "  Qual das seguintes afirmativas sobre o Balanced Scorecard é correta?  ",
        answers: [
            "A) O BSC é apenas útil para grandes corporações e não se aplica a pequenas empresas.  ",
            "B) O BSC foca apenas na avaliação de resultados financeiros a longo prazo, sem considerar os processos internos ou aprendizado dos funcionários.",
            "C) O BSC ajuda a monitorar e alinhar as atividades da organização com sua visão estratégica e seus objetivos de longo prazo.",
            "D) O BSC é utilizado apenas como uma ferramenta de marketing, sem impacto nos processos operacionais. "
        ],
        correct: 2
    },
      {
        question: "  que significa "alinhamento estratégico" no contexto do Balanced Scorecard? ",
        answers: [
            "A)  A adaptação de metas financeiras para os diferentes níveis hierárquicos da empresa.",
            "B)  O processo de garantir que as atividades operacionais de cada unidade de negócios estejam diretamente conectadas com a visão e os objetivos estratégicos da organização.",
            "C)  A medição de resultados financeiros de cada unidade de negócios sem considerar a estratégia global.",
            "D)  A criação de estratégias específicas para diferentes departamentos da empresa, sem integração entre eles."
        ],
        correct: 1
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
