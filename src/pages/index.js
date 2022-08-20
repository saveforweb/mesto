import "../pages/index.css";

import { formConfig } from "../components/data.js";
import { Card } from "../components/Card.js";
import { userCard } from "../components/userCard.js";
import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithApprove } from "../components/PopupWithApprove.js";
import { FormValidator } from "../components/FormValidator.js";
import { Api } from "../components/Api.js";

const сardsContainer = document.querySelector(".elements__list");
const profileButton = document.querySelector(".profile__edit-button");
const contentButton = document.querySelector(".profile__add-button");
const profileName = document.querySelector(".profile__name");
const profileSubtitle = document.querySelector(".profile__subtitle");
const profileAvatar = document.querySelector(".profile__avatar");
const popupProfileElement = document.querySelector(".popup-profile");
const profileForm = document.querySelector(".popup__form_type_profile");
const profileFormNameInput = document.querySelector(
  ".popup__input_type_profile-name"
);
const profileFormSubtitleInput = document.querySelector(
  ".popup__input_type_profile-subtitle"
);
const popupContentElement = document.querySelector(".popup-content");
const popupDeleteElement = document.querySelector(".popup-approve");
const contentForm = document.querySelector(".popup__form_type_content");
const popupImageElement = document.querySelector(".popup-fullscreen");
const popupImageItem = document.querySelector(".popup__image");
const popupImageSubtitle = document.querySelector(".popup__subtitle");

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-48",
  headers: {
    authorization: "9f24a9a8-78aa-432d-bb8f-93b592333388",
    "Content-Type": "application/json",
  },
});

let userId = "error: none";

const promises = [api.getInitialCards(), api.getUserInfo()]

Promise.all(promises)
  .then((results) => {
    userId = results[1]._id;
    itemList.renderItems(results[0]);
    userInfo.setUserInfo(results[1]);
  })
  .catch((err) => {
    console.log(err);
  });

function handleLikeStatus(likes, likeButton) {
  likes.forEach((like) => {
    if (userId === like._id) {
      likeButton.classList.add("element__like-button_cheked");
    }
  });
}

function handleProfileFormSubmit(data) {
  api
    .updateUserInfo(data.name, data.subtitle)
    .then((result) => {
      userInfo.setUserInfo(result);
    })
    .catch((err) => {
      console.log(err);
    });
  popupProfile.close();
}

function handleAddCardFormSubmit({ place: name, link: link }) {
  api
    .addUserCard(name, link)
    .then((result) => {
      itemList.addItem(
        new userCard(
          result,
          ".element_template",
          popupImage.open,
          handleAddLike,
          handleRemoveLike,
          handleLikeStatus
        ).createCard()
      );
    })
    .catch((err) => {
      console.log(err);
    });

  formEditContent.resetForm();
  popupContent.close();
}

function handleApproveButton(id, element) {
  api
    .deleleCard(id)
    .then((result) => {
      element.remove();
      element = null;
      popupDeleteItem.close();
    })
    .catch((err) => {
      console.log(err);
    });
}

function handleTrashButton() {
  popupDeleteItem.open(this._itemId, this._element);
}

function handleAddLike(id) {
  api
    .addCardLike(id)
    .then((result) => {
      this._elemetLikeCount.innerText = result.likes.length;
      this._elementLikeButton.classList.add("element__like-button_cheked");
    })
    .catch((err) => {
      console.log(err);
    });
}

function handleRemoveLike(id) {
  api
    .removeCardLike(id)
    .then((result) => {
      this._elemetLikeCount.innerText = result.likes.length;
      this._elementLikeButton.classList.remove("element__like-button_cheked");
    })
    .catch((err) => {
      console.log(err);
    });
}

const popupProfile = new PopupWithForm(
  popupProfileElement,
  ".popup__button-close",
  handleProfileFormSubmit
);
const popupContent = new PopupWithForm(
  popupContentElement,
  ".popup__button-close",
  handleAddCardFormSubmit
);
const popupImage = new PopupWithImage(
  popupImageElement,
  ".popup__button-close",
  popupImageItem,
  popupImageSubtitle
);
const popupDeleteItem = new PopupWithApprove(
  popupDeleteElement,
  ".popup__button-close",
  handleApproveButton
);

popupDeleteItem.setEventListeners();
popupProfile.setEventListeners();
popupContent.setEventListeners();
popupImage.setEventListeners();

const formEditProfile = new FormValidator(formConfig, profileForm);
const formEditContent = new FormValidator(formConfig, contentForm);

formEditProfile.enableValidation();
formEditContent.enableValidation();

profileButton.addEventListener("click", () => {
  const userData = userInfo.getUserInfo();
  profileFormNameInput.value = userData.name;
  profileFormSubtitleInput.value = userData.about;
  formEditProfile.resetValidation();
  popupProfile.open();
});

contentButton.addEventListener("click", () => {
  formEditContent.resetValidation();
  popupContent.open();
});

const userInfo = new UserInfo(profileName, profileSubtitle, profileAvatar);

const itemList = new Section(
  {
    render: (item) => {
      if (item.owner._id === userId) {
        return new userCard(
          item,
          ".element_template",
          popupImage.open,
          handleAddLike,
          handleRemoveLike,
          handleLikeStatus,
            handleTrashButton
          ).createCard();
        } else {
          return new Card(
            item,
            ".element_template",
            popupImage.open,
            handleAddLike,
            handleRemoveLike,
            handleLikeStatus
          ).createCard();
        }
      },
    },
    сardsContainer
  );


