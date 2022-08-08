export class FormValidator {
  constructor(formConfig, form) {
    this._formSelector = formConfig.formSelector;
    this._formFieldsetSelector = formConfig.formFieldsetSelector;
    this._inputSelector = formConfig.inputSelector;
    this._submitButtonSelector = formConfig.submitButtonSelector;
    this._inputErrorClass = formConfig.inputErrorClass;
    this._form = form;
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
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
  };

  _hideInputError = (inputElement) => {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = '';
  };

  resetValidation() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  }

  resetForm() {
    this._form.reset();
  }

  _setEventListeners() {
    this._form.addEventListener("submit",(e) => {
      e.preventDefault();
      this.resetValidation();
    });

    this._fieldsetList = Array.from(
      this._form.querySelectorAll(this._formFieldsetSelector)
    );

    this._fieldsetList.forEach((fieldSet) => {
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
