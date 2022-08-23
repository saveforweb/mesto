export const сardsContainer = document.querySelector(".elements__list");
export const profileButton = document.querySelector(".profile__edit-button");
export const contentButton = document.querySelector(".profile__add-button");
export const profileName = document.querySelector(".profile__name");
export const profileSubtitle = document.querySelector(".profile__subtitle");
export const profileAvatar = document.querySelector(".profile__avatar");
export const popupProfileElement = document.querySelector(".popup-profile");
export const popupAvatarElement = document.querySelector(".popup-avatar");
export const profileForm = document.querySelector(".popup__form_type_profile");
export const profileFormNameInput = document.querySelector(
  ".popup__input_type_profile-name"
);
export const profileFormSubtitleInput = document.querySelector(
  ".popup__input_type_profile-subtitle"
);
export const popupContentElement = document.querySelector(".popup-content");
export const popupDeleteElement = document.querySelector(".popup-approve");
export const contentForm = document.querySelector(".popup__form_type_content");
export const avatarForm = document.querySelector(".popup__form_type_avatar");
export const popupImageElement = document.querySelector(".popup-fullscreen");
export const popupImageItem = document.querySelector(".popup__image");
export const popupImageSubtitle = document.querySelector(".popup__subtitle");
export const avatarContainer = document.querySelector(".profile__avatar-container");


export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const formConfig = {
  formSelector: ".popup__form",
  formFieldsetSelector: ".popup__form-items",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-save",
  inputErrorClass: "popup__input_error",
};
