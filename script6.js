const questions = [
    {
        question: "O que caracteriza a relação entre risco e retorno em investimentos financeiros?",
        answers: [
            "A) Quanto maior o risco, maior o retorno esperado.",
            "B) Quanto maior o risco, menor o retorno esperado.",
            "C) Não existe relação entre risco e retorno.",
            "D) Quanto menor o risco, maior o retorno esperado."
        ],
        correct: 0
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
        question: "No contexto da análise de investimentos, o que é o Valor Presente Líquido (VPL)?",
        answers: [
            "A) É o valor de todos os fluxos de caixa futuros, descontados pela taxa de juros.",
            "B) É a diferença entre o valor investido inicialmente e o retorno final do investimento.",
            "C) É o valor que a empresa recebe após o pagamento de impostos.",
            "D) É o valor presente dos fluxos de caixa, descontado pela taxa de retorno exigida."
        ],
        correct: 3
    },
    {
        question: "O que é <Alavancagem> Financeira?",
        answers: [
            "A) É a utilização de ativos tangíveis para garantir um empréstimo.",
            "B) É a utilização de recursos próprios na operação de uma empresa.",
            "C) É a utilização de recursos de terceiros para aumentar o potencial de retorno de um investimento.",
            "D) É a capacidade da empresa de gerar lucros por meio de investimentos em ações."
        ],
        correct: 2
    },
    {
        question: "O que a Análise de Investimentos busca avaliar?",
        answers: [
            "A) O impacto de uma aquisição na estrutura patrimonial da empresa.",
            "B) A viabilidade financeira de um projeto ou investimento, considerando seu retorno e riscos.",
            "C) O valor de mercado das ações da empresa.",
            "D) A eficiência operacional da empresa."
        ],
        correct: 1
    },
    {
        question: "O que é <Endividamento> de uma empresa?",
        answers: [
            "A)  A relação entre a dívida e o capital social da empresa.",
            "B) A quantidade de recursos próprios que a empresa tem disponível para suas operações.",
            "C) A quantidade de dívidas de curto e longo prazo que a empresa possui.",
            "D) O valor que a empresa paga aos seus acionistas."
        ],
        correct: 2
    },
    {
        question: "Quando uma empresa utiliza <Alavancagem Financeira>, o que ela está buscando?",
        answers: [
            "A) Reduzir o retorno sobre o investimento.",
            "B) Aumentar o risco e o retorno de seu capital próprio.",
            "C) Tornar o investimento menos arriscado.",
            "D) Garantir o pagamento de dividendos."
        ],
        correct: 1
    },
    {
        question: "Qual é a principal diferença entre <Custo de Capital> e <Taxa de Retorno exigida>?",
        answers: [
            "A) O custo de capital é o retorno necessário para atrair investidores, enquanto a taxa de retorno exigida é a taxa que os investidores esperam de um ativo específico.",
            "B) O custo de capital é o valor que a empresa paga de juros, enquanto a taxa de retorno exigida é o custo de aquisição de novos ativos.",
            "C) O custo de capital é a taxa de rentabilidade dos investimentos no mercado financeiro.",
            "D) A taxa de retorno exigida é a taxa de retorno do investimento em ações da empresa."
        ],
        correct: 0
    },
    {
        question: "O que é Planejamento Orçamentário?",
        answers: [
            "A) A previsão de lucros e a definição de investimentos para o próximo ano.",
            "B) A elaboração do orçamento de receita e despesa de uma empresa para um determinado período.",
            "C) A análise de performance financeira de uma empresa no final do ano fiscal.",
            "D) O planejamento estratégico de novos projetos para a empresa."
        ],
        correct: 1
    },
    {
        question: "Em qual situação a Alavancagem Financeira pode se tornar perigosa para uma empresa?",
        answers: [
            "A) Quando a empresa utiliza muitos recursos próprios para financiar seus projetos.",
            "B) Quando a empresa usa a dívida de forma excessiva, aumentando os custos fixos e o risco de insolvência.",
            "C) Quando a empresa investe em ações e ativos financeiros.",
            "D) Quando a empresa reduz o seu nível de endividamento."
        ],
        correct: 1
    },
    {
        question: "O que significa Risco de Investimento?",
        answers: [
            "A) A certeza de que o retorno será igual ao valor investido.",
            "B) A possibilidade de o investimento não gerar o retorno esperado ou resultar em perdas financeiras.",
            "C) A variação das taxas de juros no mercado.",
            "D) A garantia de lucro em um investimento."
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
