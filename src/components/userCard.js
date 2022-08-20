import { Card } from "./Card.js";

export class userCard extends Card {
  constructor({likes, _id, name, link}, cardSelector, handleCardClick, handleAddLike, handleRemoveLike, handleLikeStatus, handleTrashButton) {
    super({likes, _id, name, link}, cardSelector, handleCardClick, handleAddLike, handleRemoveLike, handleLikeStatus);
    this._handleTrashButtonClick = this._handleTrashButtonClick.bind(this);
    this._handleTrashButton = handleTrashButton;
    this._itemId = _id;
  }

  createCard() {
      this._element = this._getTemplate();
      this._elementImage = this._element.querySelector(".element__image");
      this._elementLikeButton = this._element.querySelector(
        ".element__like-button"
      );
      this._handleLikeStatus(this._itemCount, this._elementLikeButton);
      this._elementTrashButton = this._element.querySelector(
        ".element__trash-button"
      );
      this._elemetLikeCount = this._element.querySelector(".element__like-count");
      this._elemetLikeCount.innerText = this._itemCount.length;
      this._elementTitle = this._element.querySelector(".element__title");
      this._setEventListeners();
      this._elementImage.src = this._itemLink;
      this._elementImage.alt = this._itemName;
      this._elementTitle.innerText = this._itemName;
      return this._element;
    }

  _setEventListeners() {
    super._setEventListeners()

    this._elementTrashButton.addEventListener(
      "click",
      this._handleTrashButtonClick
    );
  }

  _handleTrashButtonClick() {
    this._handleTrashButton();
  }
}
