const createElement = (tag, className, text = "") => {
  const element = document.createElement(tag);
  element.classList = className;
  element.textContent = text;

  return element;
};

const capitalize = (str) => {
  return str[0].toUpperCase() + str.slice(1);
};

const createRadioBtnGroup = (radioBtnData, radioBtnName) => {
  const resultBlock = createElement('div');
  resultBlock.id = 'complain-container';

  for (const [inputValue, label] of Object.entries(radioBtnData)) {
    const radioBtnContainer = createElement('div', 'form-check')
    const notRelevantInput = createElement('input', 'form-check-input');
    const notRelevantInputLabel = createElement('label', 'form-check-label', label)

    notRelevantInput.value = inputValue;
    notRelevantInput.id = `${inputValue}-id`;
    notRelevantInput.name = radioBtnName;
    notRelevantInput.type = 'radio';
    notRelevantInputLabel.setAttribute('for',  notRelevantInput.id);

    radioBtnContainer.append(notRelevantInput, notRelevantInputLabel);
    resultBlock.append(radioBtnContainer);
  }
  return resultBlock;
}

const showMessage = (text, bobyStyle='', btnStyle='') => {
  const toastMessage = document.getElementById('toast-massage');
  const messageBody = document.getElementById('toast-message-text');
  const btn = document.getElementById('toast-massage-btn');

  toastMessage.classList.remove('text-bg-success', 'text-bg-danger');
  toastMessage.classList.add(bobyStyle);
  btn.classList.add(btnStyle);
  messageBody.textContent = text;

  const toast = new bootstrap.Toast(toastMessage)

  toast.show()
}

export { createElement, capitalize, showMessage, createRadioBtnGroup };
