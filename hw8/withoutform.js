import transactionQuestions from "./question.js";
("use strict");

const questionSection = document.querySelector(".questions");
const questionList = createQuestiosForm(transactionQuestions);

questionSection.appendChild(questionList);

const buttonSubmit = document.querySelector(".submit-button");
buttonSubmit.addEventListener("submit", checkAnswers);

function createQuestiosForm(obj) {
  const form = document.createElement("form");
  const sectionHeader = document.createElement("h2");
  sectionHeader.textContent = obj.title;

  form.appendChild(sectionHeader);

  for (const value in obj.questions) {
    const questionHeader = document.createElement("h3");
    const questionOl = document.createElement("ol");
    let numberOfQuestion = Number(value) + 1;

    questionHeader.textContent = `${numberOfQuestion} . ${
      obj.questions[value].question
    }`;
    form.appendChild(questionHeader);
    form.appendChild(questionOl);

    const choices = obj.questions[value].choices;

    for (const item in choices) {
      const questionItem = document.createElement("li");
      const questionLable = document.createElement("lable");
      const questionInput = document.createElement("input");
      questionInput.type = "radio";
      questionInput.name = `question-${numberOfQuestion}`;
      questionInput.value = Number(item) + 1;
      questionLable.appendChild(questionInput);
      const choice = document.createTextNode(
        obj.questions[value].choices[item]
      );
      questionLable.appendChild(choice);
      questionItem.appendChild(questionLable);
      questionOl.insertAdjacentElement("beforebegin", questionItem);
    }

    form.appendChild(questionOl);
  }

  const buttonSubmit = document.createElement("button");
  buttonSubmit.classList.add("submit-button");
  buttonSubmit.type = "submit";
  buttonSubmit.textContent = "Проверить";
  form.appendChild(buttonSubmit);

  return form;
}

function checkAnswers(event) {
  event.preventDefault();
  const data = new FormData(questionList);
  console.log(questionList);
  const listOfAnswers = {};
  data.forEach((answer, numberOfQuestion) => {
    listOfAnswers[numberOfQuestion] = answer;
  });
  console.log(listOfAnswers);
}
