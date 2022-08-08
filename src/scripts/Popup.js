export class Popup {
  constructor(elementPopup, selectorCloseButton) {
    this._elementPopup = elementPopup;
    this._selectorCloseButton = selectorCloseButton;
    this._handleEscClose = this._handleEscClose.bind(this);
    this._handleClickClose = this._handleClickClose.bind(this);
  }

  open() {
    this._elementPopup.classList.add("popup_open");
    this.setEventListeners();
  }

  close() {
    this._elementPopup.classList.remove("popup_open");
    this.removeEventListeners();
  }

  _handleEscClose(e) {
    if (e.key === "Escape") {
      this.close();
    }
  }

  _handleClickClose(e) {
    if (e.target === e.currentTarget) {
      this.close();
    }
  }

  setEventListeners() {
    document.addEventListener("keydown", this._handleEscClose);
    this._elementPopup.addEventListener("mousedown", this._handleClickClose);
    this._elementPopup.querySelector(this._selectorCloseButton).addEventListener("mousedown", this._handleClickClose);
  }

  removeEventListeners() {
    document.removeEventListener("keydown", this._handleEscClose);
  }
}
