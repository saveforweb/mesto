import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(elementPopup, selectorCloseButton, elementPopupImageItem, elementPopupImageSubtitle){
    super(elementPopup, selectorCloseButton);
    this._elementPopupImageItem = elementPopupImageItem;
    this._elementPopupImageSubtitle = elementPopupImageSubtitle;
    this.open = this.open.bind(this);
  }

  open({subtitle, link}) {
    this._elementPopupImageItem.src = link;
    this._elementPopupImageSubtitle.alt = subtitle;
    this._elementPopupImageSubtitle.innerText = subtitle;
    super.open()
  }
}
