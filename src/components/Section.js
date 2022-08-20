export class Section {
  constructor({render}, elementContainer) {
    this._render = render;
    this._elementContainer = elementContainer;
  }

  addItem(item) {
    this._elementContainer.prepend(item);
  }

  renderItems(items) {
    items.forEach(item => {
      this._elementContainer.append(this._render(item));
    });
  }

}
