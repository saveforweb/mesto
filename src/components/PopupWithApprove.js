import { Popup } from "./Popup.js";

export class PopupWithApprove extends Popup {
  constructor(elementPopup, selectorCloseButton, handleClickButton){
    super(elementPopup, selectorCloseButton);
    this._approveButton = this._elementPopup.querySelector('.popup__button-save');
    this._handleClickButton = handleClickButton;
  }

  open(id, card){
    super.open();
    this._approveButton.addEventListener("click", () => {
      this._handleClickButton(id, card)
    });
  }

}
