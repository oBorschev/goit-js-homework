import transactionQuestions from "./question.js";
("use strict");

const questionSection = document.querySelector(".questions");
const questionList = createQuestiosForm(transactionQuestions);

questionSection.appendChild(questionList);

const buttonSubmit = document.querySelector(".question-form");
buttonSubmit.addEventListener("submit", checkAnswers);
const numOfQuestions = document.querySelectorAll("ol").length;
// console.log(transactionQuestions.questions.length);
const input = document.querySelector("input");
// console.dir(input);

function createQuestiosForm(obj) {
  const form = document.createElement("form");
  form.classList.add("question-form");
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
      questionOl.append(questionItem);
    }

    form.appendChild(questionOl);
  }

  const buttonSubmit = document.createElement("button");
  buttonSubmit.classList.add("submit-button");
  buttonSubmit.type = "submit";
  buttonSubmit.textContent = "Проверить";
  buttonSubmit.dataset.action = "check-answers";
  form.appendChild(buttonSubmit);

  return form;
}

function checkAnswers(event) {
  event.preventDefault();
  const listOfAnswers = new FormData(event.currentTarget);
  const listOfChoices = {};
  let countAnswers = 0;

  listOfAnswers.forEach((answer, numberOfQuestion) => {
    listOfChoices[numberOfQuestion] = answer;
    countAnswers++;
  });

  const arrayOfAnswersFromFeed = [];
  const answersFromFeed = transactionQuestions.questions;
  for (const value in answersFromFeed) {
    arrayOfAnswersFromFeed.push(answersFromFeed[value].answer);
  }

  const countAnswersFromFeed = arrayOfAnswersFromFeed.length;
  const valuesOfChoices = Object.values(listOfChoices);

  const indexOfCorrectAnswer = [];
  const indexOfWrongAnswer = [];

  if (countAnswers === countAnswersFromFeed) {
    for (let i = 0; i < countAnswers; i++) {
      if (arrayOfAnswersFromFeed[i] == valuesOfChoices[i]) {
        indexOfCorrectAnswer.push(i);
      } else if (arrayOfAnswersFromFeed[i] != valuesOfChoices[i]) {
        indexOfWrongAnswer.push(i);
      }
    }

    const numOfCorrectAnswers = indexOfCorrectAnswer.length;

    const percentageOfCorrectAnswers = parseInt(
      (100 * numOfCorrectAnswers) / countAnswersFromFeed
    );

    if (percentageOfCorrectAnswers > 80) {
      callModal(
        `Поздравляю вы прошли тест. Ваш результат ${percentageOfCorrectAnswers} процент правильных ответов`
      );
      markAnswers();
      return;
    }
    callModal(
      `Вы ответили правильно на ${percentageOfCorrectAnswers} процентов - этого не достаточно. Повторите попытку`
    );
    markAnswers();
  } else {
    callModal("Вы не ответили на все воспросы! Отметьте все ответы");
  }
  function markAnswers() {
    const resultWrongAnswer = [];
    const resultCorrectAnswer = [];
    const arraytWrongOfChoices = [];
    const arraytCorrectOfChoices = [];

    indexOfWrongAnswer.forEach(value =>
      resultWrongAnswer.push(`question-${value + 1}`)
    );

    indexOfCorrectAnswer.forEach(value =>
      resultCorrectAnswer.push(`question-${value + 1}`)
    );

    const arraylistOfChoices = Object.entries(listOfChoices);
    for (const value of arraylistOfChoices) {
      for (const item of resultWrongAnswer) {
        if (value[0] === item) arraytWrongOfChoices.push(value);
      }
    }

    for (const value of arraylistOfChoices) {
      for (const item of resultCorrectAnswer) {
        if (value[0] === item) arraytCorrectOfChoices.push(value);
      }
    }

    listOfAnswers.forEach((value, name) => {
      for (const item of arraytWrongOfChoices) {
        if (name === item[0]) {
          const markWrongAnswer = document.querySelector(
            `input[name=${item[0]}]`
          );
          markWrongAnswer.parentNode.style.color = "red";
        }
      }
    });

    listOfAnswers.forEach((value, name) => {
      for (const item of arraytCorrectOfChoices) {
        if (name === item[0]) {
          const markCorrectAnswer = document.querySelector(
            `input[name=${item[0]}]`
          );
          markCorrectAnswer.parentNode.style.color = "green";
        }
      }
    });
  }

  function openModal() {
    document.body.classList.add("show-modal");
    window.addEventListener("keydown", handleKeyPress);
  }
  function closeModal() {
    document.body.classList.remove("show-modal");
    window.removeEventListener("keydown", handleKeyPress);
  }
  function handleBackdropClick(event) {
    if (event.target !== event.currentTarget) {
      return;
    }
    closeModal();
  }
  function handleKeyPress(event) {
    if (event.code !== "Escape") return;
    closeModal();
  }
  function callModal(template) {
    const openModalBtn = document.querySelector(
      'button[data-action="check-answers"]'
    );
    const closeModalBtn = document.querySelector(
      'button[data-action="close-modal"]'
    );
    const backdrop = document.querySelector(".js-backdrop");
    const modalText = document.querySelector(".modal h2");

    modalText.textContent = template;
    openModalBtn.addEventListener("click", openModal);
    closeModalBtn.addEventListener("click", closeModal);
    backdrop.addEventListener("click", handleBackdropClick);
  }
}
