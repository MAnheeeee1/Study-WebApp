let userFlashCards = {};
let flashCardDialog = document.getElementById("flashCardDialog");
let createFcBtn = document.getElementById("createFlashCard");
let addFlashCardBtn = document.getElementById("addCard");
let termsFieldset = document.getElementById("termQuestionField");
let answerFieldset = document.getElementById("answerDefinitionField");
let saveFlashCardBtn = document.getElementById("creataFlashCard");

createFcBtn.addEventListener("click", () => {
  flashCardDialog.show();
});

addFlashCardBtn.addEventListener("click", addFlashCard);
saveFlashCardBtn.addEventListener("click", saveFlashCard);

function addFlashCard() {
  const termsFieldsetLabels = termsFieldset.querySelectorAll("label");
  const flashCardNumber = termsFieldsetLabels.length + 1;

  let newLabelforTerm = document.createElement("label");
  newLabelforTerm.setAttribute("for", "term" + flashCardNumber);
  let newInputForTerm = document.createElement("input");
  newInputForTerm.setAttribute("type", "text");
  newInputForTerm.setAttribute("id", "term" + flashCardNumber);

  termsFieldset.appendChild(newLabelforTerm);
  newLabelforTerm.appendChild(newInputForTerm);

  let newLabelforAnswer = document.createElement("label");
  newLabelforAnswer.setAttribute("for", "answer" + flashCardNumber);
  let newInputForAnswer = document.createElement("input");
  newInputForAnswer.setAttribute("type", "text");
  newInputForAnswer.setAttribute("id", "answer" + flashCardNumber);

  answerFieldset.appendChild(newLabelforAnswer);
  newLabelforAnswer.appendChild(newInputForAnswer);
}

function saveFlashCard() {
  let terms = termsFieldset.querySelectorAll("label");
  let answers = answerFieldset.querySelectorAll("label");
  let title = flashCardDialog.querySelector("#title").value;
  let description = flashCardDialog.querySelector("#description").value;
  let termsArray = [];
  let answersArray = [];

  for (term of terms) {
    termsArray.push(term.querySelector("input").value);
  }
  for (answer of answers) {
    answersArray.push(answer.querySelector("input").value);
  }

  let flashcard = {
    description: description,
    termsArray,
    answers: answersArray,
  };
  userFlashCards[title] = flashcard;
}

function resetDialog() {}
