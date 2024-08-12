let userFlashCards = {};
let flashCardDialog = document.getElementById("flashCardDialog");
let createFcBtn = document.getElementById("createFlashCard");
let addFlashCardBtn = document.getElementById("addCard");
let termsFieldset = document.getElementById("termQuestionField");
let answerFieldset = document.getElementById("answerDefinitionField");
createFcBtn.addEventListener("click", () => {
  flashCardDialog.show();
});

addFlashCardBtn.addEventListener("click", addFlashCard);

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
