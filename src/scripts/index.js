import '../pages/index.css';

import { initialCards, formConfig} from './data.js';
import { Card } from "./Card.js";
import { Section } from "./Section.js";
import { UserInfo } from "./UserInfo.js";
import { PopupWithImage } from "./PopupWithImage.js";
import { PopupWithForm } from "./PopupWithForm.js";
import { FormValidator } from "./FormValidator.js";

const elementsList = document.querySelector(".elements__list");
const profileButton = document.querySelector(".profile__edit-button");
const contentButton = document.querySelector(".profile__add-button");
const profileName = document.querySelector(".profile__name");
const profileSubtitle = document.querySelector(".profile__subtitle");
const elementPopupProfile = document.querySelector(".popup-profile");
const elementProfileForm = document.querySelector(".popup__form_type_profile");
const elementProfileFormNameInput = document.querySelector(".popup__input_type_profile-name");
const elementProfileFormSubtitleInput = document.querySelector(".popup__input_type_profile-subtitle");
const elementPopupContent = document.querySelector(".popup-content");
const elementContentForm = document.querySelector(".popup__form_type_content");
const elementContentFormPlaceInput = document.querySelector(".popup__input_type-content-place");
const elementContentFormLinkInput = document.querySelector(".popup__input_type-content-link");
const elementPopupImage = document.querySelector(".popup-fullscreen");
const elementPopupImageItem = document.querySelector(".popup__image");
const elementPopupImageSubtitle = document.querySelector(".popup__subtitle");

function submitProfileFormHandler() {
  userInfo.setUserInfo({name: elementProfileFormNameInput.value, description: elementProfileFormSubtitleInput.value});
  popupProfile.close();
}

function submitContentFormHandler() {
  const placeValue = elementContentFormPlaceInput.value;
  const linkValue = elementContentFormLinkInput.value;
  const dataContentForm = {
    name: placeValue,
    link: linkValue,
  };
  itemList.addItem(dataContentForm);
  formEditContent.resetForm();
  popupContent.close();
}
const userInfo = new UserInfo(profileName, profileSubtitle, elementProfileFormNameInput, elementProfileFormSubtitleInput);

const popupProfile = new PopupWithForm(elementPopupProfile, '.popup__button-close', submitProfileFormHandler);
const popupContent = new PopupWithForm(elementPopupContent, '.popup__button-close', submitContentFormHandler);
const popupImage = new PopupWithImage(elementPopupImage, '.popup__button-close', elementPopupImageItem, elementPopupImageSubtitle);

const itemList = new Section(
  {
    items: initialCards,
    render: (item) => {
      return new Card(item, ".element_template", popupImage).createCard();
    }
  },
  elementsList);

itemList.renderItems();

const formEditProfile = new FormValidator(formConfig, elementProfileForm);
const formEditContent = new FormValidator(formConfig, elementContentForm);

formEditProfile.enableValidation();
formEditContent.enableValidation();

profileButton.addEventListener("click", () => {
  const dataUser = userInfo.getUserInfo();
  userInfo.setUserInfo(dataUser);
  formEditProfile.resetValidation();
  popupProfile.open();
});

contentButton.addEventListener("click", () => {
  formEditContent.resetForm();
  formEditContent.resetValidation();
  popupContent.open();
});




