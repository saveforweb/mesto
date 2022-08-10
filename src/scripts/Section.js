export class Section {
  constructor({items, render}, elementContainer) {
    this._items = items;
    this._render = render;
    this._elementContainer = elementContainer;
  }

  addItem(item) {
    this._elementContainer.prepend(item);
  }

  renderItems() {
    this._items.forEach(item => {
      this._elementContainer.prepend(this._render(item));
    });
  }

}
