var navMain = document.querySelector('.main-nav');
var navToggle = navMain.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

var addToCart = document.querySelector('.add-to-cart');
var buyLink = document.querySelectorAll('.js-buy');

if(addToCart && buyLink) {
  for(var i = 0; i < buyLink.length; i++) {
    buyLink[i].addEventListener('click', function(e) {
      e.preventDefault();
      addToCart.classList.remove('add-to-cart--hide');
      addToCart.classList.add('add-to-cart--show');
    });
  }

  function addToCartHide() {
    addToCart.classList.remove('add-to-cart--show');
    addToCart.classList.add('add-to-cart--hide');
  }

  addToCart.addEventListener('click', function(e) {
    if(e.target === addToCart) {
      addToCartHide();
    }
  });

  document.addEventListener('keydown', function(e) {
    if(e.keyCode == 27) {
      addToCartHide();
    }
  });
}

var contacts = document.querySelector('.contacts');

if(contacts) {
  contacts.classList.remove('contacts--nojs');
}
