import '../pages/index.css';

import { initialCards, formConfig} from '../scripts/data.js';
import { Card } from "../scripts/Card.js";
import { Section } from "../scripts/Section.js";
import { UserInfo } from "../scripts/UserInfo.js";
import { PopupWithImage } from "../scripts/PopupWithImage.js";
import { PopupWithForm } from "../scripts/PopupWithForm.js";
import { FormValidator } from "../scripts/FormValidator.js";

const CardsContainer = document.querySelector(".elements__list");
const profileButton = document.querySelector(".profile__edit-button");
const contentButton = document.querySelector(".profile__add-button");
const profileName = document.querySelector(".profile__name");
const profileSubtitle = document.querySelector(".profile__subtitle");
const PopupProfile = document.querySelector(".popup-profile");
const ProfileForm = document.querySelector(".popup__form_type_profile");
const ProfileFormNameInput = document.querySelector(".popup__input_type_profile-name");
const ProfileFormSubtitleInput = document.querySelector(".popup__input_type_profile-subtitle");
const PopupContent = document.querySelector(".popup-content");
const ContentForm = document.querySelector(".popup__form_type_content");
const PopupImage = document.querySelector(".popup-fullscreen");
const PopupImageItem = document.querySelector(".popup__image");
const PopupImageSubtitle = document.querySelector(".popup__subtitle");

function handleProfileFormSubmit(data) {
  userInfo.setUserInfo(data);
  popupProfile.close();
}

function handleAddCardFormSubmit({place: name, link: link}) {
  itemList.addItem(new Card({name, link}, ".element_template", popupImage.open).createCard());
  formEditContent.resetForm();
  popupContent.close();
}

const userInfo = new UserInfo(profileName, profileSubtitle, ProfileFormNameInput, ProfileFormSubtitleInput);

const popupProfile = new PopupWithForm(PopupProfile, '.popup__button-close', handleProfileFormSubmit);
const popupContent = new PopupWithForm(PopupContent, '.popup__button-close', handleAddCardFormSubmit);
const popupImage = new PopupWithImage(PopupImage, '.popup__button-close', PopupImageItem, PopupImageSubtitle);
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
  CardsContainer);

itemList.renderItems();

const formEditProfile = new FormValidator(formConfig, ProfileForm);
const formEditContent = new FormValidator(formConfig, ContentForm);

formEditProfile.enableValidation();
formEditContent.enableValidation();

profileButton.addEventListener("click", () => {
  const userData = userInfo.getUserInfo();
  ProfileFormNameInput.value = userData.name;
  ProfileFormSubtitleInput.value = userData.subtitle;
  formEditProfile.resetValidation();
  popupProfile.open();
});

contentButton.addEventListener("click", () => {
  formEditContent.resetValidation();
  popupContent.open();
});




