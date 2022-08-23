import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(elementPopup, selectorCloseButton, handleSubmit){
    super(elementPopup, selectorCloseButton);
    this._handleSubmit = handleSubmit;
    this._inputList = Array.from(this._elementPopup.querySelectorAll('input'));
    this._popupForm = this._elementPopup.querySelector('form');
  }

  _getInputValues() {
    const values = {};
    this._inputList.forEach((input) => {values[input.name] = input.value});
    return values;
  }

  close() {
    super.close()
    this._popupForm.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", () => {
      this._handleSubmit(this._getInputValues(), this._popupForm.querySelector('.popup__button-save'));
    });
  }

}
