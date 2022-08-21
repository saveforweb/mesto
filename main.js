(()=>{"use strict";var e={formSelector:".popup__form",formFieldsetSelector:".popup__form-items",inputSelector:".popup__input",submitButtonSelector:".popup__button-save",inputErrorClass:"popup__input_error"};function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var n=function(){function e(t,n,r,o,i,u){var c=t.likes,l=t._id,a=t.name,s=t.link;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._cardSelector=n,this._itemName=a,this._itemLink=s,this._itemId=l,this._itemCount=c,this._handleCardClick=r,this._handleAddLike=o,this._handleRemoveLike=i,this._handleLikeButtonClick=this._handleLikeButtonClick.bind(this),this._handleLikeStatus=u}var n,r;return n=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"createCard",value:function(){return this._element=this._getTemplate(),this._elementImage=this._element.querySelector(".element__image"),this._elementLikeButton=this._element.querySelector(".element__like-button"),this._handleLikeStatus(this._itemCount,this._elementLikeButton),this._elementTrashButton=this._element.querySelector(".element__trash-button"),this._elementTrashButton.remove(),this._elemetLikeCount=this._element.querySelector(".element__like-count"),this._elemetLikeCount.innerText=this._itemCount.length,this._elementTitle=this._element.querySelector(".element__title"),this._setEventListeners(),this._elementImage.src=this._itemLink,this._elementImage.alt=this._itemName,this._elementTitle.innerText=this._itemName,this._element}},{key:"_setEventListeners",value:function(){var e=this;this._elementImage.addEventListener("click",(function(){e._handleCardClick({subtitle:e._itemName,link:e._itemLink})})),this._elementLikeButton.addEventListener("click",this._handleLikeButtonClick)}},{key:"_handleLikeButtonClick",value:function(){this._element.querySelector(".element__like-button_cheked")?this._handleRemoveLike(this._itemId):this._handleAddLike(this._itemId)}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(){return i="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=u(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},i.apply(this,arguments)}function u(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=s(e)););return e}function c(e,t){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},c(e,t)}function l(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return a(e)}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}var f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&c(e,t)}(p,e);var t,n,r,u,f=(r=p,u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=s(r);if(u){var n=s(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return l(this,e)});function p(e,t,n,r,o,i,u){var c,l=e.likes,s=e._id,h=e.name,_=e.link;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),(c=f.call(this,{likes:l,_id:s,name:h,link:_},t,n,r,o,i))._handleTrashButtonClick=c._handleTrashButtonClick.bind(a(c)),c._handleTrashButton=u,c._itemId=s,c}return t=p,(n=[{key:"createCard",value:function(){return this._element=this._getTemplate(),this._elementImage=this._element.querySelector(".element__image"),this._elementLikeButton=this._element.querySelector(".element__like-button"),this._handleLikeStatus(this._itemCount,this._elementLikeButton),this._elementTrashButton=this._element.querySelector(".element__trash-button"),this._elemetLikeCount=this._element.querySelector(".element__like-count"),this._elemetLikeCount.innerText=this._itemCount.length,this._elementTitle=this._element.querySelector(".element__title"),this._setEventListeners(),this._elementImage.src=this._itemLink,this._elementImage.alt=this._itemName,this._elementTitle.innerText=this._itemName,this._element}},{key:"_setEventListeners",value:function(){i(s(p.prototype),"_setEventListeners",this).call(this),this._elementTrashButton.addEventListener("click",this._handleTrashButtonClick)}},{key:"_handleTrashButtonClick",value:function(){this._handleTrashButton()}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),p}(n);function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var h=function(){function e(t,n){var r=t.render;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._render=r,this._elementContainer=n}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._elementContainer.prepend(e)}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._elementContainer.append(t._render(e))}))}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var y=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._elementUserName=t,this._elementUserDescription=n,this._elementUserAvatar=r}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._dataUser={name:this._elementUserName.textContent,about:this._elementUserDescription.textContent},this._dataUser}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about,r=e.avatar;this._elementUserName.textContent=t,this._elementUserDescription.textContent=n,this._elementUserAvatar.src=r}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var m=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._elementPopup=t,this._selectorCloseButton=n,this._handleEscClose=this._handleEscClose.bind(this),this._handleOverlayClick=this._handleOverlayClick.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._elementPopup.classList.add("popup_open"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._elementPopup.classList.remove("popup_open"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleOverlayClick",value:function(e){e.target===e.currentTarget&&this.close()}},{key:"setEventListeners",value:function(){this._elementPopup.addEventListener("mousedown",this._handleOverlayClick),this._elementPopup.querySelector(this._selectorCloseButton).addEventListener("mousedown",this._handleOverlayClick)}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=g(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},k.apply(this,arguments)}function g(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=P(e)););return e}function w(e,t){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},w(e,t)}function S(e,t){if(t&&("object"===b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return O(e)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},P(e)}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&w(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=P(r);if(o){var n=P(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return S(this,e)});function u(e,t,n,r){var o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(o=i.call(this,e,t))._elementPopupImageItem=n,o._elementPopupImageSubtitle=r,o.open=o.open.bind(O(o)),o}return t=u,(n=[{key:"open",value:function(e){var t=e.subtitle,n=e.link;this._elementPopupImageItem.src=n,this._elementPopupImageSubtitle.alt=t,this._elementPopupImageSubtitle.innerText=t,k(P(u.prototype),"open",this).call(this)}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(m);function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function L(){return L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=T(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},L.apply(this,arguments)}function T(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=q(e)););return e}function I(e,t){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},I(e,t)}function B(e,t){if(t&&("object"===E(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function q(e){return q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},q(e)}var R=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&I(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=q(r);if(o){var n=q(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return B(this,e)});function u(e,t,n){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,e,t))._handleSubmit=n,r._inputList=Array.from(r._elementPopup.querySelectorAll("input")),r}return t=u,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){e[t.name]=t.value})),e}},{key:"close",value:function(){L(q(u.prototype),"close",this).call(this),this._elementPopup.querySelector("form").reset()}},{key:"setEventListeners",value:function(){var e=this;L(q(u.prototype),"setEventListeners",this).call(this),this._elementPopup.querySelector("form").addEventListener("submit",(function(){e._handleSubmit(e._getInputValues(),e._elementPopup.querySelector(".popup__button-save"))}))}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(m);function U(e){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U(e)}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function A(){return A="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=D(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},A.apply(this,arguments)}function D(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=F(e)););return e}function N(e,t){return N=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},N(e,t)}function V(e,t){if(t&&("object"===U(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function F(e){return F=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},F(e)}var J=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&N(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=F(r);if(o){var n=F(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return V(this,e)});function u(e,t,n){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,e,t))._approveButton=r._elementPopup.querySelector(".popup__button-save"),r._handleClickButton=n,r}return t=u,(n=[{key:"open",value:function(e,t){var n=this;A(F(u.prototype),"open",this).call(this),this._approveButton.addEventListener("click",(function(){n._handleClickButton(e,t,n._approveButton)}))}}])&&x(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(m);function H(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var z=function(){function e(t,n){var r,o,i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o=function(e){var t=i._form.querySelector(".".concat(e.id,"-error"));e.classList.remove(i._inputErrorClass),t.textContent=""},(r="_hideInputError")in this?Object.defineProperty(this,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):this[r]=o,this._formSelector=t.formSelector,this._formFieldsetSelector=t.formFieldsetSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inputErrorClass=t.inputErrorClass,this._form=n}var t,n;return t=e,(n=[{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this._buttonElement.disabled=!0:this._buttonElement.disabled=!1}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_showInputError",value:function(e){var t=this._form.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),t.textContent=e.validationMessage}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"resetForm",value:function(){this._form.reset()}},{key:"_setEventListeners",value:function(){var e=this;this._form.addEventListener("submit",(function(t){t.preventDefault(),e.resetValidation()})),this._fieldsetList=Array.from(this._form.querySelectorAll(this._formFieldsetSelector)),this._fieldsetList.forEach((function(t){e._inputList=Array.from(t.querySelectorAll(e._inputSelector)),e._buttonElement=t.querySelector(e._submitButtonSelector),e._toggleButtonState(),e._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}))}}])&&H(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function M(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var G=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}var t,n;return t=e,(n=[{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"addUserCard",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",body:JSON.stringify({name:e,link:t}),headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"updateUserInfo",value:function(e,t){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",body:JSON.stringify({name:e,about:t}),headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"updateUserAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",body:JSON.stringify({avatar:e}),headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"addCardLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes "),{method:"PUT",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"removeCardLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"deleleCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}}])&&M(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),K=document.querySelector(".elements__list"),Q=document.querySelector(".profile__edit-button"),W=document.querySelector(".profile__add-button"),X=document.querySelector(".profile__name"),Y=document.querySelector(".profile__subtitle"),Z=document.querySelector(".profile__avatar"),$=document.querySelector(".popup-profile"),ee=document.querySelector(".popup-avatar"),te=document.querySelector(".popup__form_type_profile"),ne=document.querySelector(".popup__input_type_profile-name"),re=document.querySelector(".popup__input_type_profile-subtitle"),oe=document.querySelector(".popup-content"),ie=document.querySelector(".popup-approve"),ue=document.querySelector(".popup__form_type_content"),ce=document.querySelector(".popup__form_type_avatar"),le=document.querySelector(".popup-fullscreen"),ae=document.querySelector(".popup__image"),se=document.querySelector(".popup__subtitle"),fe=document.querySelector(".profile__avatar-container"),pe=new G({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-48",headers:{authorization:"9f24a9a8-78aa-432d-bb8f-93b592333388","Content-Type":"application/json"}}),he="error: none",_e=[pe.getInitialCards(),pe.getUserInfo()];function ye(e,t){e.forEach((function(e){he===e._id&&t.classList.add("element__like-button_cheked")}))}function de(e,t,n){t.innerText=n}function me(){Se.open(this._itemId,this._element)}function be(e){var t=this;pe.addCardLike(e).then((function(e){t._elemetLikeCount.innerText=e.likes.length,t._elementLikeButton.classList.add("element__like-button_cheked")})).catch((function(e){console.log(e)}))}function ve(e){var t=this;pe.removeCardLike(e).then((function(e){t._elemetLikeCount.innerText=e.likes.length,t._elementLikeButton.classList.remove("element__like-button_cheked")})).catch((function(e){console.log(e)}))}Promise.all(_e).then((function(e){he=e[1]._id,Le.renderItems(e[0]),Ce.setUserInfo(e[1])})).catch((function(e){console.log(e)}));var ke=new R($,".popup__button-close",(function(e,t){de(0,t,"Сохранение..."),pe.updateUserInfo(e.name,e.subtitle).then((function(e){Ce.setUserInfo(e),ke.close()})).catch((function(e){console.log(e)})).finally((function(){de(0,t,"Сохранить")}))})),ge=new R(oe,".popup__button-close",(function(e,t){var n=e.place,r=e.link;de(0,t,"Сохранение..."),pe.addUserCard(n,r).then((function(e){Le.addItem(new f(e,".element_template",we.open,be,ve,ye,me).createCard()),je.resetForm(),ge.close()})).catch((function(e){console.log(e)})).finally((function(){de(0,t,"Создать")}))})),we=new j(le,".popup__button-close",ae,se),Se=new J(ie,".popup__button-close",(function(e,t,n){de(0,n,"Удаление..."),pe.deleleCard(e).then((function(e){t.remove(),t=null,Se.close()})).catch((function(e){console.log(e)})).finally((function(){de(0,n,"Да")}))})),Oe=new R(ee,".popup__button-close",(function(e,t){var n=e.link;de(0,t,"Сохранение..."),pe.updateUserAvatar(n).then((function(e){Ce.setUserInfo(e),Oe.close()})).catch((function(e){console.log(e)})).finally((function(){de(0,t,"Сохранить")}))}));Se.setEventListeners(),ke.setEventListeners(),ge.setEventListeners(),we.setEventListeners(),Oe.setEventListeners();var Pe=new z(e,te),je=new z(e,ue),Ee=new z(e,ce);Pe.enableValidation(),je.enableValidation(),Ee.enableValidation(),Q.addEventListener("click",(function(){var e=Ce.getUserInfo();ne.value=e.name,re.value=e.about,Pe.resetValidation(),ke.open()})),fe.addEventListener("click",(function(){Ee.resetValidation(),Oe.open()})),W.addEventListener("click",(function(){je.resetValidation(),ge.open()}));var Ce=new y(X,Y,Z),Le=new h({render:function(e){return e.owner._id===he?new f(e,".element_template",we.open,be,ve,ye,me).createCard():new n(e,".element_template",we.open,be,ve,ye).createCard()}},K)})();