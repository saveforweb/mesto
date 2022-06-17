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
const popupProfileCloseButton = document.querySelector('.popup__button-close_type_profile');
const popupProfileForm = document.querySelector('.popup__form_type_profile');
const popupProfileNameInput = document.querySelector('.popup__input_type_profile-name');
const popupProfileSubtitleInput = document.querySelector('.popup__input_type_profile-subtitle');


// элементы окна редактирования контента
const popupContent = document.querySelector('.popup-content');
const popupContentCloseButton = document.querySelector('.popup__button-close_type_content');
const popupContentForm = document.querySelector('.popup__form_type_content');
const popupContentPlaceInput = document.querySelector('.popup__input_type-content-place');
const popupContentLinkInput = document.querySelector('.popup__input_type-content-link');

// элементы окна просмотра изображений
const popupImage = document.querySelector('.popup-fullscreen');
const popupImageItem = document.querySelector('.popup-fullscreen__image');
const popupImageSubtitle = document.querySelector('.popup-fullscreen__subtitle');
const popupImageCloseButton = document.querySelector('.popup-fullscreen__button-close');


// функция изменения профиля
function submitProfileFormHandler(e) {
  e.preventDefault();
  profileName.textContent = popupProfileNameInput.value;
  profileSubtitle.textContent = popupProfileSubtitleInput.value;
  closeOverlay(popupProfile);
}


// функция добавления контента
function submitContentFormHandler(e) {
  e.preventDefault();
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
const openOverlay = function (openPopup) { // открытие оверлея
  overlay.classList.add('overlay_open');
  openPopup.classList.add('popup_open');
}

const closeOverlay = function (openPopup) { // закрытие оверлея
  overlay.classList.remove('overlay_open');
  openPopup.classList.remove('popup_open');
}


// функция добавления и обработки элементов
function createItem(item) {
  const newElement = elementTemplate.querySelector('.element').cloneNode(true);
  const likeButton = newElement.querySelector('.element__like-button');
  const trashButton = newElement.querySelector('.element__trash-button');
  const itemImage = newElement.querySelector('.element__image');
  const itemTitle =  newElement.querySelector('.element__title');

  itemImage.src = item.link;
  itemImage.alt = item.name;
  itemTitle.innerText = item.name;

  likeButton.addEventListener('click', function () {
    likeButton.classList.toggle('element__like-button_cheked');
  });

  trashButton.addEventListener('click', function () {
    newElement.remove();
  });

  itemImage.addEventListener('click', function () {
    popupImageItem.src = item.link;
    popupImageItem.alt = item.name;
    popupImageSubtitle.innerText = item.name;
    openOverlay(popupImage);
  });

  return newElement;
}

function renderItem(item) {
  elementsList.prepend(createItem(item));
}

initialCards.forEach(renderItem);


// обработчики событий редактирования профиля
profileButton.addEventListener('click', function () { // открытие редактирования редактирования профиля
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



