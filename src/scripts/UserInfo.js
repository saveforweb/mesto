export class UserInfo {
  constructor(selectorUserName, selectorUserDescription, elementProfileFormNameInput, elementProfileFormSubtitleInput) {
    this._selectorUserName = selectorUserName;
    this._selectorUserDescription = selectorUserDescription;
    this._elementProfileFormNameInput = elementProfileFormNameInput;
    this._elementProfileFormSubtitleInput = elementProfileFormSubtitleInput;
  }

  getUserInfo() {
    this._dataUser = {
      name: this._selectorUserName.textContent,
      description: this._selectorUserDescription.textContent
    }
    return this._dataUser;
  }

  setUserInfo({name, description}) {
    this._selectorUserName.textContent = name;
    this._selectorUserDescription.textContent = description;
    this._elementProfileFormNameInput.value = name;
    this._elementProfileFormSubtitleInput.value = description;
  }
}
