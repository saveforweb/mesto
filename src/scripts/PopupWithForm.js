import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(elementPopup, selectorCloseButton, handleSubmitButton){
    super(elementPopup, selectorCloseButton);
    this._handleSubmitButton = handleSubmitButton;
    this._inputList = Array.from(this._elementPopup.querySelectorAll('input'));
  }

  _getInputValues() {
    const values = {};
    this._inputList.forEach((input) => {values[input.name] = input.value});
    return values;
  }

  close() {
    super.close()
    this._elementPopup.querySelector('form').reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._elementPopup.querySelector('form').addEventListener("submit", () => {
      this._handleSubmitButton(this._getInputValues());
    });
  }

}
