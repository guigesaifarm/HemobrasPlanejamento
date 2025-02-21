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
        question: "Quais são as etapas principais do MASP? ",
        answers: [
            "A) Definição do problema, pesquisa de mercado, análise SWOT e análise de custos.",
            "B) Identificação do problema, análise das causas, definição de soluções, implementação e controle dos resultados.",
            "C) Diagnóstico financeiro, análise do mercado, ações corretivas e feedback.",
            "D) Identificação da solução, levantamento de recursos, análise de viabilidade e monitoramento."
        ],
        correct: 1
    },
    {
        question: " No MASP, qual é o objetivo da etapa de (Análise das Causas) ? ",
        answers: [
            "A) Elaborar uma solução sem considerar as causas do problema.",
            "B) Diagnosticar o problema e a necessidade de novos investimentos. ",
            "C) Identificar as causas raiz do problema para tratá-lo de maneira eficaz. ",
            "D) Definir a equipe que será responsável pela solução."
        ],
        correct: 2
    },
    {
        question: " Em qual etapa do MASP é feita a coleta de dados para análise? ",
        answers: [
            "A) Implementação da solução.",
            "B) Definição do problema. ",
            "C) Análise das causas. ",
            "D) Estudo e monitoramento de resultados."
        ],
        correct: 2
    },
    {
        question: "O que caracteriza a etapa de (Definição do Problema) no MASP? ",
        answers: [
            "A) Trata-se de identificar quais recursos financeiros serão necessários",
            "B) Consiste em delimitar e descrever claramente o problema a ser resolvido, sem considerar soluções ainda.",
            "C) Implica em encontrar soluções rápidas e temporárias.",
            "D) Trata de medir os resultados e definir metas de longo prazo."
        ],
        correct: 1
    },
    {
        question: " Qual é o papel da "Implementação" no MASP? ",
        answers: [
            "A) Resolver o problema sem se preocupar com o impacto em longo prazo.",
            "B) Aplicar as soluções propostas com acompanhamento dos resultados.",
            "C) Investigar mais profundamente as causas do problema.",
            "D) Testar apenas as soluções mais baratas e simples.
"
        ],
        correct: 1
    },
    {
        question: "No MASP, o que é feito durante a etapa de (Controle dos Resultados)?",
        answers: [
            "A) A solução é monitorada para garantir que os problemas sejam definitivamente resolvidos. ",
            "B) Apenas a definição de novas metas e objetivos é realizada.",
            "C) Nenhuma ação é tomada após a implementação da solução.",
            "D) A solução é apenas analisada superficialmente."
        ],
        correct: 0
    },
    {
        question: "Qual é a importância de realizar o (Estudo da Viabilidade) dentro do MASP? ",
        answers: [
            "A) Avaliar se o problema identificado está gerando altos custos financeiros. ",
            "B) Verificar se a solução proposta pode ser aplicada de forma eficiente, considerando recursos, tempo e custo.",
            "C) Identificar os principais envolvidos no processo de solução.",
            "D) Criar um plano de marketing para promover a solução."
        ],
        correct: 1
    },
    {
        question: 'A perspectiva "aprendizado e crescimento" do BSC está relacionada a:',
        answers: [
            "A) Melhorar a infraestrutura tecnológica da empresa.",
            "B) Focar na inovação, no desenvolvimento de competências e habilidades dos colaboradores e no ambiente organizacional.",
            "C) Maximizar a produção de bens e serviços.",
            "D) Aumentar as receitas através de novas aquisições de empresas."
        ],
        correct: 1
    },
    {
        question: "Qual é a principal vantagem do Balanced Scorecard (BSC)?",
        answers: [
            "A) Ele permite medir exclusivamente os lucros financeiros de uma organização.",
            "B) Ele oferece uma abordagem equilibrada para medir o desempenho, considerando não apenas aspectos financeiros, mas também não financeiros, como satisfação do cliente e melhoria dos processos internos.",
            "C) Ele é utilizado apenas para avaliar a satisfação dos clientes.",
            "D) Ele foca apenas em indicadores de produtividade dos funcionários."
        ],
        correct: 1
    },
    {
        question: "Como o Balanced Scorecard ajuda a estratégia de uma organização?",
        answers: [
            "A) Ele ignora a missão e visão da organização para focar exclusivamente nas métricas financeiras.",
            "B) Ele ajuda a traduzir a estratégia em ações concretas, alinhando os objetivos estratégicos com as operações diárias e fornecendo feedback contínuo sobre o progresso.",
            "C) Ele concentra-se apenas em aumentar a participação no mercado, sem considerar a eficiência interna.",
            "D) Ele usa apenas indicadores financeiros para medir a performance organizacional."
        ],
        correct: 1
    },
    {
        question: 'Qual das seguintes afirmativas sobre o Balanced Scorecard é correta?',
        answers: [
            "A) O BSC é apenas útil para grandes corporações e não se aplica a pequenas empresas.",
            "B) O BSC foca apenas na avaliação de resultados financeiros a longo prazo, sem considerar os processos internos ou aprendizado dos funcionários.",
            "C) O BSC ajuda a monitorar e alinhar as atividades da organização com sua visão estratégica e seus objetivos de longo prazo.",
            "D) O BSC é utilizado apenas como uma ferramenta de marketing, sem impacto nos processos operacionais."
        ],
        correct: 2
    },
    {
        question: 'O que significa "alinhamento estratégico" no contexto do Balanced Scorecard?',
        answers: [
            "A) A adaptação de metas financeiras para os diferentes níveis hierárquicos da empresa.",
            "B) O processo de garantir que as atividades operacionais de cada unidade de negócios estejam diretamente conectadas com a visão e os objetivos estratégicos da organização.",
            "C) A medição de resultados financeiros de cada unidade de negócios sem considerar a estratégia global.",
            "D) A criação de estratégias específicas para diferentes departamentos da empresa, sem integração entre eles."
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
