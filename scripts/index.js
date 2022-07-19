import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';


// основные элементы страницы
const root = document.querySelector('.root');
const elementTemplate = document.querySelector('.element_template').content;
const elementsList = document.querySelector('.elements__list');
const overlay = document.querySelector('.overlay');
const profileButton = document.querySelector('.profile__edit-button');
const contentButton = document.querySelector('.profile__add-button');
const profileName = document.querySelector('.profile__name');
const profileSubtitle = document.querySelector('.profile__subtitle');


// элементы окна редактирования профиля
const popupProfile = document.querySelector('.popup-profile');
const popupProfileCloseButton = popupProfile.querySelector('.popup__button-close_type_profile');
const popupProfileForm = document.querySelector('.popup__form_type_profile');
const popupProfileNameInput = document.querySelector('.popup__input_type_profile-name');
const popupProfileSubtitleInput = document.querySelector('.popup__input_type_profile-subtitle');


// элементы окна редактирования контента
const popupContent = document.querySelector('.popup-content');
const popupContentCloseButton = document.querySelector('.popup__button-close_type_content');
const popupContentForm = document.querySelector('.popup__form_type_content');
const popupContentPlaceInput = document.querySelector('.popup__input_type-content-place');
const popupContentLinkInput = document.querySelector('.popup__input_type-content-link');
const popupContentInputs = [popupContentPlaceInput, popupContentLinkInput];
const popupContentButton = popupContentForm.querySelector('.popup__button-save');

// элементы окна просмотра изображений
const popupImage = document.querySelector('.popup-fullscreen');
const popupImageItem = document.querySelector('.popup-fullscreen__image');
const popupImageSubtitle = document.querySelector('.popup-fullscreen__subtitle');
const popupImageCloseButton = document.querySelector('.popup-fullscreen__button-close');


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
  popupContentForm.reset();
  closeOverlay(popupContent);
}


// общие функции
export const openOverlay = function (openPopup) { // открытие оверлея
  overlay.classList.add('overlay_open');
  openPopup.classList.add('popup_open');
  setEventListenerForEscape();
}

const closeOverlay = function (openPopup) { // закрытие оверлея
  overlay.classList.remove('overlay_open');
  openPopup.classList.remove('popup_open');
  removeEventListenerForEscape();
  overlay.classList.remove('overlay_type_fullscreen');
}

function renderItem(item) {
  const card = new Card(item, '.element_template').createCard();
  elementsList.prepend(card);
}

initialCards.forEach(renderItem);

// обработчики событий редактирования профиля
profileButton.addEventListener('click', function () { // открытие редактирования редактирования профиля
  popupProfileNameInput.value = profileName.textContent;
  popupProfileSubtitleInput.value = profileSubtitle.textContent;
  openOverlay(popupProfile);
});

popupProfileForm.addEventListener('submit', submitProfileFormHandler); // отправка формы редактирования профиля

popupProfileCloseButton.addEventListener('click', function () { // закрытие редактирование профиля на крестик
  closeOverlay(popupProfile);
});


// обработчики событий редактирования контента
contentButton.addEventListener('click', function (e) { // открытие редактирования добавления контента
  openOverlay(popupContent);
});

popupContentForm.addEventListener('submit', submitContentFormHandler); // отправка формы редактирования контента

popupContentCloseButton.addEventListener('click', function () { // закрытие редактирование контента на крестик
  closeOverlay(popupContent);
});

// обработчики фуллскрин
popupImageCloseButton.addEventListener('click', function () { // закрытие фуллскрин
  closeOverlay(popupImage);
});

// общие обработчики
overlay.addEventListener('click', function (e) { // закрытие оверлея по клику на фон
  if (e.target === e.currentTarget) {
    const openPopup = document.querySelector('.popup_open');
    closeOverlay(openPopup);
  }
});

// функция закрытия по Escape
const listnerEscape = (e) => {
  if(e.key === 'Escape') {
    const openPopup = document.querySelector('.popup_open');
    closeOverlay(openPopup);
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


// функция запуска валидации и получения из DOM: все формы и все филдсеты в них
const enableValidation = (form) => {
  const formList = Array.from(document.querySelectorAll(form.formSelector));
  formList.forEach((formElement) => {
    const formCheck = new FormValidator(form, formElement);
    formCheck.enableValidation();
  });
};

// запуск функции валидации
enableValidation({
  formSelector: '.popup__form',
  formFieldsetSelector: '.popup__form-items',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inputErrorClass: 'popup__input_error',
});

