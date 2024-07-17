const question = [
    {
        question: "Which is larget animal in the world?",
        answer: [
            {text: "Shark", correct: false},
            {text: "Blue whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false},
        ]
    },

    {
        question: "Which is smallest continent in the world?",
        answer: [
            {text: "Asia", correct: false},
            {text: "Africa", correct: false},
            {text: "Arctic", correct: false},
            {text: "Australia", correct: true},
        ]
    },

    {
        question: "Which is smallest country in the world?",
        answer: [
            {text: "Bhutan", correct: false},
            {text: "Nepal", correct: false},
            {text: "Shri Lanka", correct: false},
            {text: "vatican City", correct: true},
        ]
    },

    {
        question: "Which is largest desert in the world?",
        answer: [
            {text: "Kalahar", correct: false},
            {text: "Gobi", correct: false},
            {text: "Sahara", correct: true},
            {text: "Thar", correct: false},
        ]
    },
];

        const questionElement = document.querySelector('#question');
        const answerButton = document.querySelector('#answer-btn');
        const nextButton = document.querySelector('#next-btn');

        let currentQuestionIndex = 0;
        let score = 0;

        function startQuiz(){
            currentQuestionIndex = 0;
            score = 0;
            nextButton.innerHTML = "Next";
            showQuestion();
        }

        function showQuestion(){
            
            resetState()

            let currentQuestion = question[currentQuestionIndex];
            let questionNo = currentQuestionIndex + 1;
            questionElement.innerHTML = `${questionNo} . ${currentQuestion.question}`

            currentQuestion.answer.forEach( answers => {
                 const button = document.createElement("button");
                 button.innerHTML = answers.text;
                 button.classList.add("btn");
                 answerButton.appendChild(button);
                 if(answers.correct){
                    button.dataset.correct = answers.correct;
                 }
                 button.addEventListener("click", selectAnser)
            })
        }

        function resetState(){
            nextButton.style.display = "none";
            while (answerButton.firstChild) {
            answerButton.removeChild(answerButton.firstChild)
            }
        }

        function selectAnser(e){
                 const selectedBtn = e.target;
                 const isCorrect = selectedBtn.dataset.correct === "true";
                 if (isCorrect){
                    selectedBtn.classList.add("correct");
                    score++;
                 } else{
                    selectedBtn.classList.add("incorrect");
                 }
                 Array.from(answerButton.children).forEach(button => {
                    if(button.dataset.correct === "true"){
                        button.classList.add("correct");
                    }
                    button.disabled = true;
                 });
                 nextButton.style.display = "block";
        }

         function showScore(){
            resetState();
            questionElement.innerHTML = `You scored ${score} out of ${question.length}!`;
            nextButton.innerHTML = "Play Again";
            nextButton.style.display = "block";
         }

         function handleNextButton() {
            currentQuestionIndex++;
            if(currentQuestionIndex < question.length){
                showQuestion();
            } else {
                showScore();
            }
         }

          nextButton.addEventListener("click", ()=>{
              if(currentQuestionIndex < question.length){
                handleNextButton();
              } else{
                startQuiz();
              }
          })

        startQuiz();




