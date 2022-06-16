// массив данных
const initialCards = [
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


// основные элементы страницы
const root = document.querySelector('.root');
const elementTemplate = document.querySelector('.element_template').content;
const elementsList = document.querySelector('.elements__list');
const overlay = document.querySelector('.overlay');
const profileButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');


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
function profileFormSubmitHandler(e) {
  e.preventDefault();
  const nameValue = popupProfileNameInput.value;
  const subtitleValue = popupProfileSubtitleInput.value;
  const profileName = document.querySelector('.profile__name');
  const profileSubtitle = document.querySelector('.profile__subtitle');
  profileName.textContent = nameValue;
  profileSubtitle.textContent = subtitleValue;
  closeOverlay();
}


// функция добавления контента
function contentFormSubmitHandler(e) {
  e.preventDefault();
  const placeValue = popupContentPlaceInput.value;
  const linkValue = popupContentLinkInput.value;
  const contentObject = {
    name: placeValue,
    link: linkValue
  };
  renderItem(contentObject);
  popupContentPlaceInput.value = '';
  popupContentLinkInput.value = '';
  closeOverlay();
}


// общие функции
const openOverlay = function (target) { // открытие оверлея
  overlay.classList.add('overlay_open');
  if (target === profileButton) {
    popupProfile.classList.add('popup_open');
  } else if (target === addButton) {
    popupContent.classList.add('popup_open');
  }
}

const closeOverlay = function () { // закрытие оверлея
  overlay.classList.remove('overlay_open');
  popupProfile.classList.remove('popup_open');
  popupContent.classList.remove('popup_open');
  popupImage.classList.remove('popup_open');
}


// функция добавления и обработки элементов
function renderItem(item) {
  const newElement = elementTemplate.querySelector('.element').cloneNode(true);
  const likeButton = newElement.querySelector('.element__like-button');
  const trashButton = newElement.querySelector('.element__trash-button');
  const itemImage = newElement.querySelector('.element__image');

  newElement.querySelector('.element__image').src = item.link;
  newElement.querySelector('.element__image').alt = item.name;
  newElement.querySelector('.element__title').innerText = item.name;
  elementsList.insertAdjacentElement('afterbegin', newElement);

  likeButton.addEventListener('click', function () {
    likeButton.classList.toggle('element__like-button_cheked');
  });

  trashButton.addEventListener('click', function () {
    newElement.remove();
  });

  itemImage.addEventListener('click', function () {
    overlay.classList.add('overlay_open');
    popupImage.classList.add('popup_open');
    popupImageItem.src = item.link;
    popupImageItem.alt = item.name;
    popupImageSubtitle.innerText = item.name;
  });
}

initialCards.forEach(renderItem);


// обработчики событий редактирования профиля
profileButton.addEventListener('click', function (e) { // открытие редактирования редактирования профиля
  openOverlay(e.target);
});

popupProfileForm.addEventListener('submit', profileFormSubmitHandler); // отправка формы редактирования профиля

popupProfileCloseButton.addEventListener('click', function () { // закрытие редактирование профиля на крестик
  closeOverlay();
});


// обработчики событий редактирования контента
addButton.addEventListener('click', function (e) { // открытие редактирования добавления контента
  openOverlay(e.target);
});

popupContentForm.addEventListener('submit', contentFormSubmitHandler); // отправка формы редактирования контента

popupContentCloseButton.addEventListener('click', function () { // закрытие редактирование контента на крестик
  closeOverlay();
});

// обработчики фуллскрин
popupImageCloseButton.addEventListener('click', function () { // закрытие фуллскрин
  closeOverlay();
});

// общие обработчики
overlay.addEventListener('click', function (e) { // закрытие оверлея по клику на фон
  if (e.target === e.currentTarget) {
    closeOverlay();
  }
});



