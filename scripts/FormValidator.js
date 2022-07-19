export class FormValidator {
  constructor(form, formElement) {
    this._formSelector = form.formSelector;
    this._formFieldsetSelector = form.formFieldsetSelector;
    this._inputSelector = form.inputSelector;
    this._submitButtonSelector = form.submitButtonSelector;
    this._inputErrorClass = form.inputErrorClass;
    this._formElement = formElement;
  }

  enableValidation() {
    this._setEventListeners();
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.disabled = false;
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _showInputError (inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
  };

  _hideInputError = (inputElement) => {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = '';
  };

  _setEventListeners() {
    this._formElement.addEventListener("submit",(e) => {
      e.preventDefault();
      this._toggleButtonState();
    });

    const fieldsetList = Array.from(
      this._formElement.querySelectorAll(this._formFieldsetSelector)
    );

    fieldsetList.forEach((fieldSet) => {
      this._inputList = Array.from(
        fieldSet.querySelectorAll(this._inputSelector)
      );
      this._buttonElement = fieldSet.querySelector(this._submitButtonSelector);
      this._toggleButtonState();
      this._inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", () => {
          this._checkInputValidity(inputElement);
          this._toggleButtonState();
        });
      });
    });
  }
}
