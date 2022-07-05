// функция показа ошшибки
const showInputError = (formElement, inputElement, errorMessage, errorClass) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(errorClass);
  errorElement.textContent = errorMessage;
};

// функция скрытия ошшибки
const hideInputError = (formElement, inputElement, errorClass) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(errorClass);
  errorElement.textContent = '';
};

// функция проверки валидности поля
const checkInputValidity = (formElement, inputElement, errorClass) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, errorClass);
  } else {
    hideInputError(formElement, inputElement, errorClass);
  }
};

// функция проверки валидности полей
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

// функция состояния кнопки в зависимости от валидности всех полей
const toggleButtonState = (inputList, buttonElement) => {
  if(hasInvalidInput(inputList)){
    buttonElement.disabled = true;
  } else {
    buttonElement.disabled = false;
  }
}

// функция навешивания слушателей событий
const setEventListeners = (formElement, input, button, errorClass) => {
  const inputList = Array.from(formElement.querySelectorAll(input));
  const buttonElement = formElement.querySelector(button);
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, errorClass);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

// функция запуска валидации и получения из DOM: все формы и все филдсеты в них
const enableValidation = (form) => {
  const formList = Array.from(document.querySelectorAll(form.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (e) {
      e.preventDefault();
    });

    const fieldsetList = Array.from(formElement.querySelectorAll(form.formFieldsetSelector));

    fieldsetList.forEach((fieldSet) => {
      setEventListeners(fieldSet, form.inputSelector, form.submitButtonSelector, form.inputErrorClass);
    });
  });
};

// запуск функции валидации
enableValidation({
  formSelector: '.popup__form',
  formFieldsetSelector: '.popup__form-items',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inputErrorClass: 'popup__input_error',
});
