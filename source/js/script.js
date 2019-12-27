  var navMain = document.querySelector('.header__container');
  var navToggle = document.querySelector('.main-nav__toggle');

  navMain.classList.remove('main-nav--nojs');

  navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }
  });

  var submitBtn = document.querySelector(".form-main__button");
  submitBtn.addEventListener('click', function () {
    var list = document.getElementsByTagName("input");

    for (var i = 0; i < list.length; i++) {
      var element = list[i];
      if (element.hasAttribute("required") && element.value == "") {
        element.classList.add("form-main--error");
      } else {
        element.classList.remove("form-main--error");
      }
    }
  });
