import '../pages/index.css';

import { initialCards, formConfig} from '../components/data.js';
import { Card } from "../components/Card.js";
import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { FormValidator } from "../components/FormValidator.js";

const сardsContainer = document.querySelector(".elements__list");
const profileButton = document.querySelector(".profile__edit-button");
const contentButton = document.querySelector(".profile__add-button");
const profileName = document.querySelector(".profile__name");
const profileSubtitle = document.querySelector(".profile__subtitle");
const popupProfileElement = document.querySelector(".popup-profile");
const profileForm = document.querySelector(".popup__form_type_profile");
const profileFormNameInput = document.querySelector(".popup__input_type_profile-name");
const profileFormSubtitleInput = document.querySelector(".popup__input_type_profile-subtitle");
const popupContentElement = document.querySelector(".popup-content");
const contentForm = document.querySelector(".popup__form_type_content");
const popupImageElement = document.querySelector(".popup-fullscreen");
const popupImageItem = document.querySelector(".popup__image");
const popupImageSubtitle = document.querySelector(".popup__subtitle");

function handleprofileFormSubmit(data) {
  userInfo.setUserInfo(data);
  popupProfile.close();
}

function handleAddCardFormSubmit({place: name, link: link}) {
  itemList.addItem(new Card({name, link}, ".element_template", popupImage.open).createCard());
  formEditContent.resetForm();
  popupContent.close();
}

const userInfo = new UserInfo(profileName, profileSubtitle, profileFormNameInput, profileFormSubtitleInput);

const popupProfile = new PopupWithForm(popupProfileElement, '.popup__button-close', handleprofileFormSubmit);
const popupContent = new PopupWithForm(popupContentElement, '.popup__button-close', handleAddCardFormSubmit);
const popupImage = new PopupWithImage(popupImageElement, '.popup__button-close', popupImageItem, popupImageSubtitle);
popupProfile.setEventListeners();
popupContent.setEventListeners();
popupImage.setEventListeners();

const itemList = new Section(
  {
    items: initialCards,
    render: (item) => {
      return new Card(item, ".element_template", popupImage.open).createCard();
    }
  },
  сardsContainer);

itemList.renderItems();

const formEditProfile = new FormValidator(formConfig, profileForm);
const formEditContent = new FormValidator(formConfig, contentForm);

formEditProfile.enableValidation();
formEditContent.enableValidation();

profileButton.addEventListener("click", () => {
  const userData = userInfo.getUserInfo();
  profileFormNameInput.value = userData.name;
  profileFormSubtitleInput.value = userData.subtitle;
  formEditProfile.resetValidation();
  popupProfile.open();
});

contentButton.addEventListener("click", () => {
  formEditContent.resetValidation();
  popupContent.open();
});




