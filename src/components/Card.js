export class Card {
  constructor({likes, _id, name, link}, cardSelector, handleCardClick, handleAddLike, handleRemoveLike, handleLikeStatus) {
    this._cardSelector = cardSelector;
    this._itemName = name;
    this._itemLink = link;
    this._itemId = _id;
    this._itemCount = likes;
    this._handleCardClick = handleCardClick;
    this._handleAddLike = handleAddLike;
    this._handleRemoveLike = handleRemoveLike;
    this._handleLikeButtonClick = this._handleLikeButtonClick.bind(this);
    this._handleLikeStatus = handleLikeStatus;
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
    this._handleLikeStatus(this._itemCount, this._elementLikeButton);
    this._elementTrashButton = this._element.querySelector(
      ".element__trash-button"
    );
    this._elementTrashButton.remove();
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
    this._elementImage.addEventListener(
      "click", () => {
        this._handleCardClick({ subtitle: this._itemName, link: this._itemLink });
      }
    );

    this._elementLikeButton.addEventListener(
      "click",
      this._handleLikeButtonClick
    );
  }

  _handleLikeButtonClick() {
    if(this._element.querySelector(".element__like-button_cheked")){
      this._handleRemoveLike(this._itemId);
    } else {
      this._handleAddLike(this._itemId);
    }
  }
}
