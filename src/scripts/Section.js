// Класс отвечает за отрисовку элементов на странице
export class Section {
  constructor({items, render}, selectorConteiner) {
    this._items = items; // массив данных, которые нужно добавить на страницу
    this._render = render; // функция колбэк отвечающая за создание и отрисовку данных на странице
    this._selectorConteiner = selectorConteiner; // селектор контейнера в который нужно добавлять созданные элементы
  }

  addItem(item) { // Публичный метод, который принимает DOM-элемент и добавляет его в контейнер
    this._selectorConteiner.prepend(this._render(item));
  }

  renderItems() { // Публичный метод отрисовки всех элементов на странице
    this._items.forEach(item => {
      this._selectorConteiner.prepend(this._render(item));
    });
  }

}
