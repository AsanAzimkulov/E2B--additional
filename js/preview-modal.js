function onOpenModalPreview() {
  $('html').addClass('no-scroll-y');
  document.body.classList.add('modal-preview-show');
  document.body.classList.add('no-scroll-y');
}

function onCloseModalPreview() {
  $('html').removeClass('no-scroll-y');
  // Убираем предыдущий скролл
  document.querySelector('.modal-preview').scrollTo(0, 0);
  document.body.classList.remove('modal-preview-show');
  document.body.classList.remove('no-scroll-y');
}

function preventScrollToTop(sectionSelector) {
  const offset = $(sectionSelector).offset();
  $('body').animate({
    scrollTop: offset.top,
    scrollLeft: offset.left
  });
}

document.querySelector('.modal-preview__close').addEventListener('click', onCloseModalPreview);
document.querySelector('.modal-preview').addEventListener('click', function (e) {
  if (e.target === this) {
    onCloseModalPreview();
  }
});

const subscribersModalPreview = [];

const createSubscribe = (el, sectionSelector) => {
  if (el) {
    subscribersModalPreview.push({
      element: el,
      sectionSelector
    })
  }
};

// document.querySelectorAll('.cases__down-bar__blue-link').forEach(el => createSubscribe(el, '.cases'));

const serviceSchemeButton = document.querySelector('.service-scheme__button--blue-button');
const serviceSchemeLink = document.querySelector('.service-scheme__button--link');

createSubscribe(serviceSchemeButton, '.service-scheme');
createSubscribe(serviceSchemeLink, '.service-scheme');

const exampleFormsWatchVideoLinks = document.querySelectorAll('.example-forms__list__item__down-bar__link--play');

exampleFormsWatchVideoLinks.forEach(el => createSubscribe(el))


const cmsBlocksButton = document.querySelector('.cms-blocks__list__item--panel__button');

createSubscribe(cmsBlocksButton);

subscribersModalPreview.forEach((sub) => {
  sub.element.addEventListener('click', function (e) {
    e.preventDefault();
    onOpenModalPreview();
    preventScrollToTop(sub.sectionSelector);
  })
});
