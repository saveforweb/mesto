export class Card {
  constructor({likes, _id, name, link, owner}, cardSelector, handleCardClick, handleAddLike, handleRemoveLike, handleTrashButton, userId) {
    this._ownerPostId = owner._id;
    this._cardSelector = cardSelector;
    this._itemName = name;
    this._itemLink = link;
    this._itemId = _id;
    this._userId = userId;
    this._itemCount = likes;
    this._handleCardClick = handleCardClick;
    this._handleAddLike = handleAddLike;
    this._handleRemoveLike = handleRemoveLike;
    this._handleLikeButtonClick = this._handleLikeButtonClick.bind(this);
    this._handleTrashButton = handleTrashButton;
    this._handleTrashButtonClick = this._handleTrashButtonClick.bind(this);
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);
    return cardElement;
  }

  _handleLikeStatus(likes, likeButton) {
    likes.forEach((like) => {
      if (this._userId === like._id) {
        likeButton.classList.add("element__like-button_cheked");
      }
    });
  }

  _checkUserCard(button) {
    if (!(this._userId === this._ownerPostId)) {
      button.remove();
    }
  }



  createCard() {
    this._element = this._getTemplate();
    this._elementTrashButton = this._element.querySelector(
      ".element__trash-button");
    this._elementImage = this._element.querySelector(".element__image");
    this._elementLikeButton = this._element.querySelector(
      ".element__like-button"
    );
    this._handleLikeStatus(this._itemCount, this._elementLikeButton);
    this._checkUserCard(this._elementTrashButton);
    this._elemetLikeCount = this._element.querySelector(".element__like-count");
    this._elemetLikeCount.innerText = this._itemCount.length;
    this._elementTitle = this._element.querySelector(".element__title");
    this._setEventListeners();
    this._elementImage.src = this._itemLink;
    this._elementImage.alt = this._itemName;
    this._elementTitle.innerText = this._itemName;
    return this._element;
  }

  removeCard () {
    this._element.remove();
    this._element = null;
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

    this._elementTrashButton.addEventListener(
      "click",
      this._handleTrashButtonClick
    );

  }

  addLike (likes) {
    this._elemetLikeCount.innerText = likes;
    this._elementLikeButton.classList.add("element__like-button_cheked");
  }

  removeLike (likes) {
    this._elemetLikeCount.innerText = likes;
    this._elementLikeButton.classList.remove("element__like-button_cheked");
  }

  _handleLikeButtonClick() {
    if(this._element.querySelector(".element__like-button_cheked")){
      this._handleRemoveLike(this._itemId, this);
    } else {
      this._handleAddLike(this._itemId, this);
    }
  }

  _handleTrashButtonClick() {
    this._handleTrashButton(this);
  }

}
