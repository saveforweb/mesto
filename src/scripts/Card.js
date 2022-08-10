export class Card {
  constructor({name, link}, cardSelector, handleCardClick) {
    this._cardSelector = cardSelector;
    this._itemName = name;
    this._itemLink = link;
    this._handleTrashButtonClick = this._handleTrashButtonClick.bind(this);
    this._handleLikeButtonClick = this._handleLikeButtonClick.bind(this);
    this._handleCardClick = handleCardClick;
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
    this._elementImage = this._element.querySelector(".element__image");
    this._elementLikeButton = this._element.querySelector(
      ".element__like-button"
    );
    this._elementTrashButton = this._element.querySelector(
      ".element__trash-button"
    );
    this._elementTitle = this._element.querySelector(".element__title");
    this._setEventListeners();
    this._elementImage.src = this._itemLink;
    this._elementImage.alt = this._itemName;
    this._elementTitle.innerText = this._itemName;
    return this._element;
  }

  _setEventListeners() {
    this._elementLikeButton.addEventListener(
      "click",
      this._handleLikeButtonClick
    );

    this._elementTrashButton.addEventListener(
      "click",
      this._handleTrashButtonClick
    );

    this._elementImage.addEventListener(
      "click", () => {
        this._handleCardClick({ subtitle: this._itemName, link: this._itemLink });
      }
    );
  }

  _handleLikeButtonClick() {
    this._elementLikeButton.classList.toggle("element__like-button_cheked");
  }

  _handleTrashButtonClick() {
    this._element.remove();
    this._element = null;
  }
}
