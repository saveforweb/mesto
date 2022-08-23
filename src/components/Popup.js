export class Popup {
  constructor(elementPopup, selectorCloseButton) {
    this._elementPopup = elementPopup;
    this._selectorCloseButton = selectorCloseButton;
    this._handleEscClose = this._handleEscClose.bind(this);
    this._handleOverlayClick = this._handleOverlayClick.bind(this);
    this._buttonSave = this._elementPopup.querySelector('.popup__button-save')
  }

  open() {
    this._elementPopup.classList.add("popup_animate");
    this._elementPopup.classList.add("popup_open");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._elementPopup.classList.remove("popup_open");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(e) {
    if (e.key === "Escape") {
      this.close();
    }
  }

  _handleOverlayClick(e) {
    if (e.target === e.currentTarget) {
      this.close();
    }
  }

  renderLoading(isLoading, text) {
    if (isLoading) {
      this._buttonSave.innerText = text;
    } else {
      this._buttonSave.innerText = text;
    }
  }

  setEventListeners() {
    this._elementPopup.addEventListener("mousedown", this._handleOverlayClick);
    this._elementPopup.querySelector(this._selectorCloseButton).addEventListener("mousedown", this._handleOverlayClick);
  }
}
