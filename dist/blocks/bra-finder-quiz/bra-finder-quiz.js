function deselectAll(parent) {
  parent.querySelectorAll('[aria-selected="true"]').forEach((selected) => {
    selected.removeAttribute("aria-selected");
  });
}
function getCurrentQuestion(block) {
  return block.querySelector('.question:not([hidden="true"])');
}
function canAdvanceQuestion(block) {
  const currentQuestion = getCurrentQuestion(block);
  return [...currentQuestion.querySelectorAll("ul")].reduce((acc, questionPart) => acc && questionPart.querySelector('[aria-selected="true"]'), true);
}
function isOnFirstQuestion(block) {
  return getCurrentQuestion(block).classList.contains("q1");
}
function isOnLastQuestion(block) {
  var _a;
  return !((_a = getCurrentQuestion(block).nextElementSibling) == null ? void 0 : _a.classList.contains("question"));
}
function convertToValue(li) {
  const strong = li.querySelector(":scope > strong");
  if (strong && strong.children.length === 0) {
    return strong.innerText.trim().split(" ").join("").toLowerCase();
  }
  return li.innerText.trim().split(" ").join("").toLowerCase();
}
function collectSelections(block) {
  const searchParams = new URLSearchParams();
  block.querySelectorAll("ul").forEach((ul) => {
    const selectedLi = ul.querySelector('li[aria-selected="true"]');
    const value = convertToValue(selectedLi);
    searchParams.append(ul.getAttribute("field-name"), value);
  });
  return searchParams;
}
function addNavigationButtons(block) {
  const nextButton = document.createElement("button");
  nextButton.innerText = "Next";
  nextButton.setAttribute("name", "next");
  nextButton.setAttribute("disabled", "true");
  const previousButton = document.createElement("button");
  previousButton.innerText = "Previous";
  previousButton.setAttribute("hidden", "true");
  previousButton.setAttribute("disabled", "true");
  nextButton.addEventListener("click", () => {
    const currentQuestion = getCurrentQuestion(block);
    currentQuestion.setAttribute("hidden", "true");
    const nextQuestion = currentQuestion.nextElementSibling;
    if (nextQuestion && nextQuestion.classList.contains("question")) {
      nextQuestion.removeAttribute("hidden");
      if (!canAdvanceQuestion(block)) {
        nextButton.setAttribute("disabled", "true");
      }
      previousButton.removeAttribute("disabled");
      previousButton.removeAttribute("hidden");
      if (isOnLastQuestion(block)) {
        nextButton.innerText = "Show Results";
      }
    } else {
      nextButton.setAttribute("hidden", "true");
      previousButton.setAttribute("hidden", "true");
      window.location = `/bra-fit-finder/results?${collectSelections(block).toString()}`;
    }
  });
  previousButton.addEventListener("click", () => {
    const currentQuestion = getCurrentQuestion(block);
    const previousQuestion = currentQuestion.previousElementSibling;
    currentQuestion.setAttribute("hidden", "true");
    previousQuestion.removeAttribute("hidden");
    nextButton.removeAttribute("disabled");
    nextButton.innerText = "Next";
    if (isOnFirstQuestion(block)) {
      previousButton.setAttribute("hidden", "true");
    }
  });
  block.append(previousButton);
  block.append(nextButton);
}
function decorate(block) {
  ["title", "question q1", "question q2", "question q3", "question q4"].forEach((name, i) => {
    var _a;
    (_a = block.children[i]) == null ? void 0 : _a.classList.add(...name.split(" "));
  });
  block.querySelectorAll(".question").forEach((question, i) => {
    if (i !== 0)
      question.setAttribute("hidden", "true");
  });
  block.querySelectorAll("ul > li:first-child > em").forEach((fieldNameContainer, i) => {
    const fieldName = (fieldNameContainer == null ? void 0 : fieldNameContainer.innerText) ?? `field-${i}`;
    fieldNameContainer.closest("ul").setAttribute("field-name", fieldName);
    fieldNameContainer.closest("li").remove();
  });
  addNavigationButtons(block);
  block.querySelectorAll(".question > div > ul > li").forEach((questionChoice) => {
    questionChoice.addEventListener("click", () => {
      deselectAll(questionChoice.closest("ul"));
      questionChoice.setAttribute("aria-selected", "true");
      if (canAdvanceQuestion(block)) {
        block.querySelector('button[name="next"]').removeAttribute("disabled");
      }
    });
  });
}
export {
  decorate as default
};
