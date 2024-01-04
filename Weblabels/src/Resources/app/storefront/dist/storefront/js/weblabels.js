// Sticky Header 
let lastScrollTop = 0;
const headerMain = document.querySelector('.header-main');
const headerHeight = headerMain.offsetHeight;
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    headerMain.classList.remove('top');
    headerMain.style.top = `-${headerHeight}px`;
  } else {
    headerMain.classList.add('top');
    headerMain.style.top = '0px';
  }
  lastScrollTop = scrollTop;
});

// Detailpage Image Gallery max-height to two rows
var originalGalleryHeight; 
function setGalleryHeight(height) {
  document.querySelector('.gallery-slider-container').style.height = height + 'px';
}
function showAll() {
  setGalleryHeight(originalGalleryHeight);
  document.getElementById('showAll').classList.add('d-none');
  document.getElementById('showLess').classList.remove('d-none');
}
function showLess() {
  var activeSlide = document.querySelector('.tns-slide-active');
  var activeSlideHeight = activeSlide ? activeSlide.offsetHeight : 0;
  setGalleryHeight(activeSlideHeight * 2);
  document.getElementById('showAll').classList.remove('d-none');
  document.getElementById('showLess').classList.add('d-none');
}

window.onload = function() {
  originalGalleryHeight = document.querySelector('.gallery-slider-container').offsetHeight;
  setGalleryHeight(document.querySelector('.tns-slide-active').offsetHeight * 2);
  document.getElementById('showAll').addEventListener('click', showAll);
  document.getElementById('showLess').addEventListener('click', showLess);
};