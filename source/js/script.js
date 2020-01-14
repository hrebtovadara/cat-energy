var navMain = document.querySelector(".header__container");
var navToggle = document.querySelector(".header__toggle");

navMain.classList.remove("header--nojs");

navToggle.addEventListener("click", function () {
  if (navMain.classList.contains("header--closed")) {
    navMain.classList.remove("header--closed");
    navMain.classList.add("header--opened");
  } else {
    navMain.classList.add("header--closed");
    navMain.classList.remove("header--opened");
  }
});

var submitBtn = document.querySelector(".form__button");
if (submitBtn != null) {
  submitBtn.addEventListener("click", function () {
    var list = document.getElementsByTagName("input");

    for (var i = 0; i < list.length; i++) {
      var element = list[i];
      if (element.hasAttribute("required") && element.value == "") {
        element.classList.add("form__input--error");
      } else {
        element.classList.remove("form__input--error");
      }
    }
  });
}
