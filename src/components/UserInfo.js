export class UserInfo {
  constructor(elementUserName, elementUserDescription, elementProfileFormNameInput, elementProfileFormSubtitleInput) {
    this._elementUserName = elementUserName;
    this._elementUserDescription = elementUserDescription;
    this._elementProfileFormNameInput = elementProfileFormNameInput;
    this._elementProfileFormSubtitleInput = elementProfileFormSubtitleInput;
  }

  getUserInfo() {
    this._dataUser = {
      name: this._elementUserName.textContent,
      subtitle: this._elementUserDescription.textContent
    }
    return this._dataUser;
  }

  setUserInfo({name, subtitle}) {
    this._elementUserName.textContent = name;
    this._elementUserDescription.textContent = subtitle;
  }
}
