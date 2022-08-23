import "../pages/index.css";

import {
  formConfig,
  сardsContainer,
  profileButton,
  contentButton,
  profileName,
  profileSubtitle,
  profileAvatar,
  popupProfileElement,
  popupAvatarElement,
  profileForm,
  profileFormNameInput,
  profileFormSubtitleInput,
  popupContentElement,
  popupDeleteElement,
  contentForm,
  avatarForm,
  popupImageElement,
  popupImageItem,
  popupImageSubtitle,
  avatarContainer,
} from "../utils/data.js";
import { Card } from "../components/Card.js";
import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithApprove } from "../components/PopupWithApprove.js";
import { FormValidator } from "../components/FormValidator.js";
import { Api } from "../components/Api.js";

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-48",
  headers: {
    authorization: "9f24a9a8-78aa-432d-bb8f-93b592333388",
    "Content-Type": "application/json",
  },
});

let userId = "error: none";

const promises = [api.getInitialCards(), api.getUserInfo()];

Promise.all(promises)
  .then((results) => {
    userId = results[1]._id;
    itemList.renderItems(results[0]);
    userInfo.setUserInfo(results[1]);
  })
  .catch((err) => {
    console.log(err);
  });

function handleProfileFormSubmit(data) {
  popupProfile.renderLoading(true, "Сохранение...");
  api
    .updateUserInfo(data.name, data.subtitle)
    .then((result) => {
      userInfo.setUserInfo(result);
      popupProfile.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupProfile.renderLoading(false, "Сохранить");
    });
}

function handleAddCardFormSubmit({ place: name, link: link }) {
  popupContent.renderLoading(true, "Сохранение...");
  api
    .addUserCard(name, link)
    .then((result) => {
      itemList.addItem(createCard(result));
      formEditContent.resetForm();
      popupContent.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupContent.renderLoading(false, "Создать");
    });
}

function handleApproveButton(id, card) {
  popupDeleteItem.renderLoading(true, "Удаление...");
  api
    .deleleCard(id)
    .then((result) => {
      card.removeCard();
      popupDeleteItem.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupDeleteItem.renderLoading(false, "Да");
    });
}

function handleAvatarFormSubmit({ avatarlink: link }) {
  popupEditAvatar.renderLoading(true, "Сохранение...");
  api
    .updateUserAvatar(link)
    .then((result) => {
      userInfo.setUserInfo(result);
      popupEditAvatar.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupEditAvatar.renderLoading(false, "Сохранить");
    });
}

function handleTrashButton(card) {
  popupDeleteItem.open(this._itemId, card);
}

function handleAddLike(id, card) {
  api
    .addCardLike(id)
    .then((result) => {
      card.addLike(result.likes.length);
    })
    .catch((err) => {
      console.log(err);
    });
}

function handleRemoveLike(id, card) {
  api
    .removeCardLike(id)
    .then((result) => {
      card.removeLike(result.likes.length);
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

const popupEditAvatar = new PopupWithForm(
  popupAvatarElement,
  ".popup__button-close",
  handleAvatarFormSubmit
);

popupDeleteItem.setEventListeners();
popupProfile.setEventListeners();
popupContent.setEventListeners();
popupImage.setEventListeners();
popupEditAvatar.setEventListeners();

const formEditProfile = new FormValidator(formConfig, profileForm);
const formEditContent = new FormValidator(formConfig, contentForm);
const formEditAvatar = new FormValidator(formConfig, avatarForm);

formEditProfile.enableValidation();
formEditContent.enableValidation();
formEditAvatar.enableValidation();

profileButton.addEventListener("click", () => {
  const userData = userInfo.getUserInfo();
  profileFormNameInput.value = userData.name;
  profileFormSubtitleInput.value = userData.about;
  formEditProfile.resetValidation();
  popupProfile.open();
});

avatarContainer.addEventListener("click", () => {
  formEditAvatar.resetValidation();
  popupEditAvatar.open();
});

contentButton.addEventListener("click", () => {
  formEditContent.resetValidation();
  popupContent.open();
});

const userInfo = new UserInfo(profileName, profileSubtitle, profileAvatar);

function createCard(item) {
  const card = new Card(
    item,
    ".element_template",
    popupImage.open,
    handleAddLike,
    handleRemoveLike,
    handleTrashButton,
    userId
  );

  return card.createCard();
}

const itemList = new Section(
  {
    render: (item) => {
      return createCard(item);
    },
  },
  сardsContainer
);
