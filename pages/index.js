let root = document.querySelector('.root');
let overlay = document.querySelector('.overlay');
let closeButton = document.querySelector('.edit-profile__button-close');
let profileButton = document.querySelector('.profile__edit-button');

let openOverlay = function () {
  overlay.classList.remove('overlay_hidden');
}

let closeOverlay = function () {
  overlay.classList.add('overlay_hidden');
}

profileButton.addEventListener('click', function () {
  openOverlay();
});

overlay.addEventListener('click', function (e) {
  if(e.target === e.currentTarget) {
    closeOverlay();
  }
});

closeButton.addEventListener('click', function () {
  closeOverlay();
});

// Находим форму в DOM
let formElement = document.querySelector('.edit-profile__form');

// Находим поля формы в DOM
let nameInput = document.querySelector('.edit-profile__input_name');
let subtitleInput = document.querySelector('.edit-profile__input_subtitle');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    let nameValue = nameInput.value;
    let subtitleValue = subtitleInput.value;

    // Выберите элементы, куда должны быть вставлены значения полей
    let profileName = document.querySelector('.profile__name');
    let profileSubtitle = document.querySelector('.profile__subtitle');

    // Вставьте новые значения с помощью textContent
    profileName.textContent = nameValue;
    profileSubtitle.textContent = subtitleValue;

    closeOverlay();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);



