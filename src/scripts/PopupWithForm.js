import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(elementPopup, selectorCloseButton, submitFormHandler){
    super(elementPopup, selectorCloseButton);
    this._submitFormHandler = submitFormHandler;
  }

  _getInputValues() {
    this._setInputList = Array.from(this._elementPopup.querySelectorAll('input'));
    return this._setInputValues = this._setInputList.map(item => {
      return {
        name: item.name,
        value: item.value
      }
    });
  }

  close() {
    this._elementPopup.classList.remove("popup_open");
    this.removeEventListeners();
    this._elementPopup.querySelector('form').reset();
  }

  setEventListeners() {
    document.addEventListener("keydown", this._handleEscClose);
    this._elementPopup.addEventListener("mousedown", this._handleClickClose);
    this._elementPopup.querySelector(this._selectorCloseButton).addEventListener("mousedown", this._handleClickClose);
    this._elementPopup.querySelector('form').addEventListener("submit", this._submitFormHandler);
  }

}
