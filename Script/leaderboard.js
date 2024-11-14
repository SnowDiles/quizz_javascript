import { leaderboardData } from "./leaderBoardData.js";
// @ts-ignore
import {
  leaderboardScience,
  leaderboardMusique,
  leaderboardCoding,
  leaderboardBiologie,
  leaderboardMath,
  leaderboardDietetique,
  leaderboardLogique,
} from "./leaderBoardData.js";

let idLB = document.getElementById("leaderBoard");
let idTitleLB = document.getElementById("leaderBoardTitle");
// fonction permettant d'afficher le tableaud de score das le html
function displayLeaderBoard(id) {


  // trier tableau
  leaderboardData.sort(function (b, a) {
    return a.score - b.score;
  });
  leaderboardScience.sort(function (b, a) {
    return a.score - b.score;
  });
  leaderboardMusique.sort(function (b, a) {
    return a.score - b.score;
  });
  leaderboardCoding.sort(function (b, a) {
    return a.score - b.score;
  });
  leaderboardBiologie.sort(function (b, a) {
    return a.score - b.score;
  });
  leaderboardMath.sort(function (b, a) {
    return a.score - b.score;
  });
  leaderboardDietetique.sort(function (b, a) {
    return a.score - b.score;
  });
  leaderboardLogique.sort(function (b, a) {
    return a.score - b.score;
  });

  

  console.log(id);

  if (id === "cultureG") {
    // @ts-ignore
    idTitleLB.innerHTML = "Culture générale / Toute catégorie";
    // @ts-ignore
    idLB.innerHTML = "";
    console.log("Nous sommes bien dans le cas de base");
    for (let i = 0; i < leaderboardData.length; i++) {
      idLB?.insertAdjacentHTML(
        "beforeend",
        `<div class="leaderBoardPosition">
        <p>${i + 1} TH</p>
        <img src="images/icons8-face_leaderBoard.png" alt="" />
        <p>${leaderboardData[i].name} : ${leaderboardData[i].score} Point</p>
        <p></p>
      </div>`
      );
    }
  } else if (id === "science") {
    // @ts-ignore
    idTitleLB.innerHTML = "Science";
    // @ts-ignore
    idLB.innerHTML = "";
    for (let i = 0; i < leaderboardScience.length; i++) {
      idLB?.insertAdjacentHTML(
        "beforeend",
        `<div class="leaderBoardPosition">
        <p>${i + 1} TH</p>
        <img src="images/icons8-face_leaderBoard.png" alt="" />
        <p>${leaderboardScience[i].name} : ${
          leaderboardScience[i].score
        } Point</p>
        <p></p>
      </div>`
      );
    }
  }else if (id === "musique") {
    // @ts-ignore
    idTitleLB.innerHTML = "Musique";
    // @ts-ignore
    idLB.innerHTML = "";
    for (let i = 0; i < leaderboardMusique.length; i++) {
      idLB?.insertAdjacentHTML(
        "beforeend",
        `<div class="leaderBoardPosition">
        <p>${i + 1} TH</p>
        <img src="images/icons8-face_leaderBoard.png" alt="" />
        <p>${leaderboardMusique[i].name} : ${
          leaderboardMusique[i].score
        } Point</p>
        <p></p>
      </div>`
      );
    }
  }else if (id === "coding") {
    // @ts-ignore
    idTitleLB.innerHTML = "Coding";
    // @ts-ignore
    idLB.innerHTML = "";
    for (let i = 0; i < leaderboardCoding.length; i++) {
      idLB?.insertAdjacentHTML(
        "beforeend",
        `<div class="leaderBoardPosition">
        <p>${i + 1} TH</p>
        <img src="images/icons8-face_leaderBoard.png" alt="" />
        <p>${leaderboardCoding[i].name} : ${
          leaderboardCoding[i].score
        } Point</p>
        <p></p>
      </div>`
      );
    }
  }else if (id === "biologie") {
    // @ts-ignore
    idTitleLB.innerHTML = "Biologie";
    // @ts-ignore
    idLB.innerHTML = "";
    for (let i = 0; i < leaderboardBiologie.length; i++) {
      idLB?.insertAdjacentHTML(
        "beforeend",
        `<div class="leaderBoardPosition">
        <p>${i + 1} TH</p>
        <img src="images/icons8-face_leaderBoard.png" alt="" />
        <p>${leaderboardBiologie[i].name} : ${
          leaderboardBiologie[i].score
        } Point</p>
        <p></p>
      </div>`
      );
    }
  }else if (id === "math") {
    // @ts-ignore
    idTitleLB.innerHTML = "Math";
    // @ts-ignore
    idLB.innerHTML = "";
    for (let i = 0; i < leaderboardMath.length; i++) {
      idLB?.insertAdjacentHTML(
        "beforeend",
        `<div class="leaderBoardPosition">
        <p>${i + 1} TH</p>
        <img src="images/icons8-face_leaderBoard.png" alt="" />
        <p>${leaderboardMath[i].name} : ${
          leaderboardMath[i].score
        } Point</p>
        <p></p>
      </div>`
      );
    }
  }else if (id === "dietetique") {
    // @ts-ignore
    idTitleLB.innerHTML = "Dietetique";
    // @ts-ignore
    idLB.innerHTML = "";
    for (let i = 0; i < leaderboardDietetique.length; i++) {
      idLB?.insertAdjacentHTML(
        "beforeend",
        `<div class="leaderBoardPosition">
        <p>${i + 1} TH</p>
        <img src="images/icons8-face_leaderBoard.png" alt="" />
        <p>${leaderboardDietetique[i].name} : ${
          leaderboardDietetique[i].score
        } Point</p>
        <p></p>
      </div>`
      );
    }
  }else if (id === "logique") {
    // @ts-ignore
    idTitleLB.innerHTML = "Logique";
    // @ts-ignore
    idLB.innerHTML = "";
    for (let i = 0; i < leaderboardLogique.length; i++) {
      idLB?.insertAdjacentHTML(
        "beforeend",
        `<div class="leaderBoardPosition">
        <p>${i + 1} TH</p>
        <img src="images/icons8-face_leaderBoard.png" alt="" />
        <p>${leaderboardLogique[i].name} : ${
          leaderboardLogique[i].score
        } Point</p>
        <p></p>
      </div>`
      );
    }
  }
}
// @ts-ignore
window.displayLeaderBoard = displayLeaderBoard;
displayLeaderBoard("cultureG");