export class UserInfo {
  constructor(elementUserName, elementUserDescription, elementUserAvatar) {
    this._elementUserName = elementUserName;
    this._elementUserDescription = elementUserDescription;
    this._elementUserAvatar = elementUserAvatar;
  }

  getUserInfo() {
    this._dataUser = {
      name: this._elementUserName.textContent,
      about: this._elementUserDescription.textContent
    }
    return this._dataUser;
  }

  setUserInfo({name, about, avatar}) {
    this._elementUserName.textContent = name;
    this._elementUserDescription.textContent = about;
    this._elementUserAvatar.src = avatar;
  }

}
