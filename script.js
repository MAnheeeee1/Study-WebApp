let userFlashCards = [];
let flashCardDialog = document.getElementById("flashCardDialog");
let createFcBtn = document.getElementById("createFlashCard");
let addFlashCardBtn = document.getElementById("addCard");
let termsFieldset = document.getElementById("termQuestionField");
let answerFieldset = document.getElementById("answerDefinitionField");
let saveFlashCardBtn = document.getElementById("creataFlashCard");
let flashCardContainer = document.getElementById("flashcardHolder");

createFcBtn.addEventListener("click", () => {
  flashCardDialog.show();
});

addFlashCardBtn.addEventListener("click", addFlashCard);
saveFlashCardBtn.addEventListener("click", formValidation);

function addFlashCard() {
  const termsFieldsetLabels = termsFieldset.querySelectorAll("label");
  const flashCardNumber = termsFieldsetLabels.length + 1;

  let newLabelForTerm = document.createElement("label");
  newLabelForTerm.setAttribute("for", "term" + flashCardNumber);
  let newInputForTerm = document.createElement("input");
  newInputForTerm.setAttribute("type", "text");
  newInputForTerm.setAttribute("id", "term" + flashCardNumber);

  termsFieldset.appendChild(newLabelForTerm);
  newLabelForTerm.appendChild(newInputForTerm);

  let newLabelForAnswer = document.createElement("label");
  newLabelForAnswer.setAttribute("for", "answer" + flashCardNumber);
  let newInputForAnswer = document.createElement("input");
  newInputForAnswer.setAttribute("type", "text");
  newInputForAnswer.setAttribute("id", "answer" + flashCardNumber);

  answerFieldset.appendChild(newLabelForAnswer);
  newLabelForAnswer.appendChild(newInputForAnswer);
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
    title: title,
    description: description,
    terms: termsArray,
    answers: answersArray,
  };
  userFlashCards.push(flashcard);
  flashCardDialog.close();
  updateFlashCardContainer();
  alert("Successfully saved your flashcards!");
}

function formValidation(event) {
  event.preventDefault();
  const titleInput = document.querySelector("#title");
  if (titleInput.value == null || titleInput.value == "") {
    alert("Please input a title for your flashcard set");
  } else {
    saveFlashCard();
  }
}

function updateFlashCardContainer() {
  flashCardContainer.innerHTML = "";
  for (flashcard of userFlashCards) {
    let containerElement = document.createElement("div");
    containerElement.classList.add("card");

    let h2Element = document.createElement("h2");
    h2Element.classList.add("card");
    h2Element.textContent = flashcard.title;

    let pElement = document.createElement("p");
    pElement.classList.add("p");
    pElement.textContent = flashcard.description;

    containerElement.appendChild(h2Element);
    containerElement.appendChild(pElement);
    flashCardContainer.appendChild(containerElement);
  }
}
