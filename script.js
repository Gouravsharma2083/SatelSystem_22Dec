var questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Lisbon"],
      correctAnswer: "Paris"
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Jupiter"
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Michelangelo", "Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh"],
      correctAnswer: "Leonardo da Vinci"
    }
  ];
  
  var currentQuestion = 0;
  var score = 0;
  var selectedAnswer; 
  
  function showQuestion() {
    var question = questions[currentQuestion];
    var questionElement = document.querySelector(".question");
    var optionsElement = document.querySelector(".options");
  
    questionElement.textContent = question.question;
  
    optionsElement.innerHTML = ""; 
    for (var i = 0; i < question.options.length; i++) {
      var optionButton = document.createElement("button");
      optionButton.classList.add("option");
      optionButton.textContent = question.options[i];
      optionsElement.appendChild(optionButton);
    }
  }
  
  function checkAnswer() {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      score++;
    }
  }
  
  function showResults() {
    var quizContainer = document.querySelector(".quiz-container");
    var resultContainer = document.getElementById("result");
  
    quizContainer.style.display = "none";
    resultContainer.style.display = "block";
  
    document.getElementById("score").textContent = score;
  }
  
  function next() { 
    checkAnswer(selectedAnswer);
  
    currentQuestion++;
  
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      showResults(); 
    }
  }
  
  function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    selectedAnswer = undefined; // Clear selected answer
  
    var quizContainer = document.querySelector(".quiz-container");
    var resultContainer = document.getElementById("result");
  
    quizContainer.style.display = "block";
    resultContainer.style.display = "none";
  
    showQuestion(); 
  }
  
  showQuestion(); 
  
  // Attach event listeners to the buttons
  document.querySelector(".options").addEventListener("click", function(event) {
    if (event.target.classList.contains("option")) {
      // Remove transparency from all options
      var allOptions = document.querySelectorAll(".option");
      allOptions.forEach(function(option) {
        option.style.opacity = 1;
      });
  
      // Make the selected option opaque
      event.target.style.opacity = 1; 
  
      // Make other options transparent
      allOptions.forEach(function(option) {
        if (option !== event.target) {
          option.style.opacity = 0.5;
        }
      });
  
      selectedAnswer = event.target.textContent; 
    }
  });
  
  document.querySelector(".next-button").addEventListener("click", next); 
  
  document.getElementById("restartButton").addEventListener("click", restartQuiz);