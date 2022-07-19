import { openOverlay } from "./index.js";

export class Card {
  constructor(item, cardSelector) {
    this._cardSelector = cardSelector;
    this._itemName = item.name;
    this._itemLink = item.link;
    this._handleTrashButtonClick = this._handleTrashButtonClick.bind(this);
    this._handleLikeButtonClick = this._handleLikeButtonClick.bind(this);
    this._handleImageClick = this._handleImageClick.bind(this);
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);
    return cardElement;
  }

  createCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector(".element__image").src = this._itemLink;
    this._element.querySelector(".element__image").alt = this._itemName;
    this._element.querySelector(".element__title").innerText = this._itemName;
    return this._element;
  }

  _setEventListeners() {
    this._element
      .querySelector(".element__like-button")
      .addEventListener("click", this._handleLikeButtonClick);

    this._element
      .querySelector(".element__trash-button")
      .addEventListener("click", this._handleTrashButtonClick);

    this._element
      .querySelector(".element__image")
      .addEventListener("click", this._handleImageClick);
  }

  _handleLikeButtonClick() {
    this._element
      .querySelector(".element__like-button")
      .classList.toggle("element__like-button_cheked");
  }

  _handleTrashButtonClick() {
    this._element.remove();
  }

  _handleImageClick() {
    this._popupImage = document.querySelector(".popup-fullscreen");
    this._popupImage.querySelector(".popup-fullscreen__image").src =
      this._itemLink;
    this._popupImage.querySelector(".popup-fullscreen__image").alt =
      this._itemName;
    this._popupImage.querySelector(".popup-fullscreen__subtitle").innerText =
      this._itemName;
    document.querySelector(".overlay").classList.add("overlay_type_fullscreen");
    openOverlay(this._popupImage);
  }
}
