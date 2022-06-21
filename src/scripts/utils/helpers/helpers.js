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

export { createElement, capitalize, createRadioBtnGroup };
