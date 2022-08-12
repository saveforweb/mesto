export class UserInfo {
  constructor(elementUserName, elementUserDescription) {
    this._elementUserName = elementUserName;
    this._elementUserDescription = elementUserDescription;
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
