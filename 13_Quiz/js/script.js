// declaration variáveis
const question = document.querySelector('#question');
const answersbox = document.querySelector('#answers-box');
const quizzContainer = document.querySelector('#quizz-container');
const scoreContainer = document.querySelector('#score-container');
const letters = ['a', 'b', 'c', 'd'];
let points = 0;
let actualQuestion = 0;

//question
const questions = [
  {
    question: 'PHP foi desenvolvido para qual fim?',
    answers: [
      {
        answer: 'back-end',
        correct: true,
      },
      {
        answer: 'front-end',
        correct: false,
      },
      {
        answer: 'Sistema operacional',
        correct: false,
      },
      {
        answer: 'Banco de dados',
        correct: false,
      },
    ],
  },
  {
    question: 'Uma forma de declarar variável em JavaScript:',
    answers: [
      {
        answer: '$var',
        correct: false,
      },
      {
        answer: 'var',
        correct: true,
      },
      {
        answer: '@var',
        correct: false,
      },
      {
        answer: '#let',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual o seletor de id no CSS?',
    answers: [
      {
        answer: '#',
        correct: true,
      },
      {
        answer: '.',
        correct: false,
      },
      {
        answer: '@',
        correct: false,
      },
      {
        answer: '/',
        correct: false,
      },
    ],
  },
];
//substituição do quizz para a primeira pergunta
function init() {
  // criar a primeira pergunta
  createQuestion(0);
}
//criar uma pergunta
function createQuestion(i) {
  //limpar a questão anterior
  const oldButtons = answersbox.querySelectorAll('button');
  oldButtons.forEach(function (btn) {
    btn.remove();
  });

  //altera o texto da pergunta
  const questionText = question.querySelector('#question-text');
  const questionNumber = question.querySelector('#question-number');

  questionText.textContent = questions[i].question;
  questionNumber.textContent = i + 1;

  //insere as alternativas
  questions[i].answers.forEach(function (answer, i) {
    const answerTemplate = document
      .querySelector('.answer-template')
      .cloneNode(true);

    const letterBtn = answerTemplate.querySelector('.btn-letter');
    const answerText = answerTemplate.querySelector('.question-answer');

    letterBtn.textContent = letters[i];
    answerText.textContent = answer['answer'];

    answerTemplate.setAttribute('correct-answer', answer['correct']);

    //Remover hide e template class
    answerTemplate.classList.remove('hide');
    answerTemplate.classList.remove('answer-template');

    //inserir a alternativa na tela
    answersbox.appendChild(answerTemplate);

    //inserir um evento de click no botão
    answerTemplate.addEventListener('click', function () {
      checkAnswer(this);
    });
  });

  //incrementar o número da questão
  actualQuestion++;
}
//Verificar a resposta do usuário
function checkAnswer(btn) {
  const buttons = answersbox.querySelectorAll('button');

  buttons.forEach(function (button) {
    if (button.getAttribute('correct-answer') === 'true') {
      button.classList.add('correct-answer');

      //checa se o usuáro acertou
      if (btn === button) {
        //inclementa os pontos
        points++;
      }
    } else {
      button.classList.add('wrong-answer');
    }
  });

  nextQuestion();
}

//exibir próxima pergunta do quizz
function nextQuestion() {
  //timer para usuário ver as respostas
  setTimeout(function () {
    //verifica se ainda há perguntas
    if (actualQuestion >= questions.length) {
      //aprensenta a msg de sucesso
      showSucessMessage();
      return;
    }
    createQuestion(actualQuestion);
  }, 1000);
}

//exibe a tela final
function showSucessMessage() {
  hideOrShowQuizz();
  //trocar dados da tela de sucesso

  //calcular o score
  const score = ((points / questions.length) * 100).toFixed(2);

  const displayScore = document.querySelector('#display-score span');
  displayScore.textContent = score.toString();

  //altera o número de perguntas corretas
  const correctAnswers = document.querySelector('#correct-answer');
  correctAnswers.textContent = points;

  //altera o número total de perguntas
  const totalQuestion = document.querySelector('#questions-qty');
  totalQuestion.textContent = questions.length;
}

//mostra ou esconde score
function hideOrShowQuizz() {
  quizzContainer.classList.toggle('hide');
  scoreContainer.classList.toggle('hide');
}
//restart o jogo
const restartBtn = document.querySelector('#restart');
// zerar o jogo
restartBtn.addEventListener('click', function () {
  actualQuestion = 0;
  points = 0;
  hideOrShowQuizz();
  init();
});


init();
// iniciar o quizz

