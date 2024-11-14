// @ts-nocheck
import {
  culture,
  espace,
  musique,
  coding,
  biologie,
  math,
  dietetique,
  logique,
} from "./questions_data.js";
let pseudoPlayer = prompt("Veuillez entrer votre pseudo");

const quizDict = {
  culture: culture,
  espace: espace,
  musique: musique,
  coding: coding,
  biologie: biologie,
  math: math,
  dietetique: dietetique,
  logique: logique,
};

const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get("key");
const question = quizDict[myParam];
export function quiz() {
  //variables
  console.log(myParam);
  document.getElementById("title_quizz").innerHTML = myParam;
  let newQuestion = [];
  const startQuiz = document.querySelector("#start_quiz");
  const areaQuestion = document.querySelector("#question");
  const btn_one = document.querySelector("#A");
  const btn_two = document.querySelector("#B");
  const btn_three = document.querySelector("#C");
  const btn_four = document.querySelector("#D");
  let score = 0;
  startQuiz.addEventListener("click", () => {
    const selectedQuestion = getRandomQuestion();
  });

  function getRandomQuestion() {
    // desactivation du bouton start apres avoir click sur next question
    let startButton = document.getElementById("quiz_contain");
    startButton.style.display = "none";
    //première vérification de voir si la longueur du tableau est égal à 0 si oui, le script rentre dans le if
    if (question.length === 0) {
      let pourcentage = calculPourcentage(score, newQuestion.length);
      let finishQuestion;
      console.log(`Ton score est de ${score}`);
      document.getElementById("A").style.display = "none";
      document.getElementById("B").style.display = "none";
      document.getElementById("C").style.display = "none";
      document.getElementById("D").style.display = "none";
      if (pourcentage > 75) {
        finishQuestion =
          "Bravo " +
          pseudoPlayer +
          ", tu as fini le questionnaire ;). Woah!!! Tu connais bien le sujet ! Ton score est de: " +
          pourcentage.toFixed(2) +
          "%";
      } else if (pourcentage >= 50 && pourcentage <= 75) {
        finishQuestion =
          "Bravo " +
          pseudoPlayer +
          ", tu as fini le questionnaire ;). Bon travail! Ton score est de: " +
          pourcentage.toFixed(2) +
          "%";
      } else {
        finishQuestion =
          "Bravo " +
          pseudoPlayer +
          ", tu as fini le questionnaire ;). Tu peux t'améliorer. Ton score est de: " +
          pourcentage.toFixed(2) +
          "%";
      }
      //la method toFixed(2) permet d'arrondir a deux décimal
      areaQuestion.textContent = finishQuestion;
      btn_one.textContent = "";
      btn_two.textContent = "";
      btn_three.textContent = "";
      btn_four.textContent = "";
      return null;
    }

    //sinon c'est le quiz
    else {
      let t = timer();

      //choix aléatoire d'une question
      const randomIndex = Math.floor(Math.random() * question.length);

      const selectedQuestion = question.splice(randomIndex, 1)[0];
      //utiliser la methode splice pour récuperer un élément du premier tableau et de le supprimer afin d'éviter des doublons
      //on va l'injecter dans un nouveau tableau
      newQuestion.push(selectedQuestion);
      //nouvelles variables
      let nameOfQuestion = selectedQuestion["question"];
      let answer_A = selectedQuestion["answers"][0];
      let answer_B = selectedQuestion["answers"][1];
      let answer_C = selectedQuestion["answers"][2];
      let answer_D = selectedQuestion["answers"][3];
      areaQuestion.textContent = nameOfQuestion;
      btn_one.textContent = answer_A;
      btn_one.onclick = () => {
        validateAnswer(answer_A, selectedQuestion);
        clearInterval(t);
        nextQuestion();
      };
      btn_two.textContent = answer_B;
      btn_two.onclick = () => {
        validateAnswer(answer_B, selectedQuestion);
        clearInterval(t);
        nextQuestion();
      };
      btn_three.textContent = answer_C;
      btn_three.onclick = () => {
        validateAnswer(answer_C, selectedQuestion);
        clearInterval(t);
        nextQuestion();
      };
      btn_four.textContent = answer_D;
      btn_four.onclick = () => {
        validateAnswer(answer_D, selectedQuestion);
        clearInterval(t);
        nextQuestion();
      };

      return selectedQuestion;
    }
  }

  // fonction pour check si il a trouvé la bonne ou mauvaise réponse
  function validateAnswer(answerValue, currentQuestion) {
    let currentAnswers = currentQuestion.answers;
    let answerIndex = currentAnswers.findIndex(
      (element) => answerValue === element
    );
    let answerTab = [btn_one, btn_two, btn_three, btn_four];
    if (answerIndex === currentQuestion.validate) {
      score++;
      answerTab[answerIndex].style.backgroundColor = "green";
    } else {

      answerTab[answerIndex].style.backgroundColor = "red";
      answerTab[currentQuestion.validate].style.backgroundColor = "green";
    }
  }

  //fonction pour calculer le pourcentage de bonnes réponses
  function calculPourcentage(score, totalQuestions) {
    if (totalQuestions === 0) return 0;
    return (score / totalQuestions) * 100;
  }

  function nextQuestion() {
    document.getElementById("A").disabled = true;
    document.getElementById("B").disabled = true;
    document.getElementById("C").disabled = true;
    document.getElementById("D").disabled = true;
    let nextButton = document.createElement("button");
    nextButton.textContent = "Question suivante";
    nextButton.onclick = () => {
      let answerTab = [btn_one, btn_two, btn_three, btn_four];
      answerTab.forEach((btn) => {
        btn.style.backgroundColor = "#fbbc05";
      });
      nextButton.remove();
      getRandomQuestion(
        (document.getElementById("A").disabled = false),
        (document.getElementById("B").disabled = false),
        (document.getElementById("C").disabled = false),
        (document.getElementById("D").disabled = false)
      );
    };
    document.getElementById("next_question").appendChild(nextButton);

    // desactivation du bouton start apres avoir click sur next question
    let startButton = document.getElementById("quiz_contain");
    startButton.style.display = "none";
  }


  function timer() {
    document.getElementById("timer").style.color = "white";
    let timer = 21;
    const t = setInterval(() => {
      timer = timer - 1;
      document.getElementById("timer").innerHTML = timer;
      if (timer === 0) {
        clearInterval(t);
        nextQuestion();
      }
  
      if (timer < 10) {
        document.getElementById("timer").style.color = "red";
      }
    }, 1000);
  
    return t;
  }
}

window.quiz = quiz;

