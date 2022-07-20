import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

// основные элементы страницы
const elementsList = document.querySelector('.elements__list');
const overlay = document.querySelector('.overlay');
const profileButton = document.querySelector('.profile__edit-button');
const contentButton = document.querySelector('.profile__add-button');
const profileName = document.querySelector('.profile__name');
const profileSubtitle = document.querySelector('.profile__subtitle');
const popupCloseButton = document.querySelectorAll('.popup__button-close');

// элементы окна редактирования профиля
const popupProfile = document.querySelector('.popup-profile');
const popupProfileForm = document.querySelector('.popup__form_type_profile');
const popupProfileNameInput = document.querySelector('.popup__input_type_profile-name');
const popupProfileSubtitleInput = document.querySelector('.popup__input_type_profile-subtitle');

// элементы окна редактирования контента
const popupContent = document.querySelector('.popup-content');
const popupContentForm = document.querySelector('.popup__form_type_content');
const popupContentPlaceInput = document.querySelector('.popup__input_type-content-place');
const popupContentLinkInput = document.querySelector('.popup__input_type-content-link');

// элементы окна просмотра изображений
const popupImage = document.querySelector('.popup-fullscreen');
const popupImageItem = document.querySelector('.popup-fullscreen__image');
const popupImageSubtitle = document.querySelector('.popup-fullscreen__subtitle');

// функция изменения профиля
function submitProfileFormHandler() {
  profileName.textContent = popupProfileNameInput.value;
  profileSubtitle.textContent = popupProfileSubtitleInput.value;
  closeOverlay(popupProfile);
}

// функция добав ления контента
function submitContentFormHandler() {
  const placeValue = popupContentPlaceInput.value;
  const linkValue = popupContentLinkInput.value;
  const contentObject = {
    name: placeValue,
    link: linkValue
  };
  renderItem(contentObject);
  formEditContent.resetForm();
  closeOverlay(popupContent);
}

// общие функции
const openOverlay = function (openPopup) { // открытие оверлея
  overlay.classList.add('overlay_open');
  openPopup.classList.add('popup_open');
  setEventListenerForEscape();
}

const closeOverlay = function () { // закрытие оверлея
  overlay.querySelector('.popup_open').classList.remove('popup_open');
  overlay.classList.remove('overlay_open');
  overlay.classList.remove('overlay_type_fullscreen');
  removeEventListenerForEscape();
}

const handleCardClick = (subtitle, link) => {
  popupImageItem.src = link;
  popupImageItem.alt = subtitle;
  popupImageSubtitle.innerText = subtitle;
  overlay.classList.add("overlay_type_fullscreen");
  openOverlay(popupImage);
}

function renderItem(item) {
  const card = new Card(item, '.element_template', handleCardClick).createCard();
  elementsList.prepend(card);
}

initialCards.forEach(renderItem);

// обработчики событий редактирования профиля
profileButton.addEventListener('click', function () { // открытие редактирования редактирования профиля
  popupProfileNameInput.value = profileName.textContent;
  popupProfileSubtitleInput.value = profileSubtitle.textContent;
  openOverlay(popupProfile);
  formEditProfile.resetValidation();
});

popupProfileForm.addEventListener('submit', submitProfileFormHandler); // отправка формы редактирования профиля

// обработчики событий редактирования контента
contentButton.addEventListener('click', (e) => { // открытие редактирования добавления контента
  openOverlay(popupContent);
  formEditContent.resetForm();
  formEditContent.resetValidation();
});

popupContentForm.addEventListener('submit', submitContentFormHandler); // отправка формы редактирования контента

// Закрытие оверлея
// закрытие на крестик
popupCloseButton.forEach((button) => {
  button.addEventListener('click', function () {
    closeOverlay();
  });
})

// закрытие оверлея по клику на фон
overlay.addEventListener('mousedown', function (e) {
  if (e.target === e.currentTarget) {
    closeOverlay();
  }
});

// закрытия оверлея по Escape
const listnerEscape = (e) => {
  if(e.key === 'Escape') {
    closeOverlay();
  }
}

// обработчики Escape
const setEventListenerForEscape = () => {
  document.addEventListener('keydown', listnerEscape);
}

// удаление обработчика Escape
const removeEventListenerForEscape = () => {
  document.removeEventListener('keydown', listnerEscape);
}

const formConfig = {
  formSelector: '.popup__form',
  formFieldsetSelector: '.popup__form-items',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inputErrorClass: 'popup__input_error',
}

const formEditProfile = new FormValidator(formConfig, popupProfileForm);
const formEditContent = new FormValidator(formConfig, popupContentForm);

formEditProfile.enableValidation();
formEditContent.enableValidation();





