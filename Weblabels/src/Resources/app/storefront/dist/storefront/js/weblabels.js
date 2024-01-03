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
var originalGalleryHeight; // Variable to store the original height

// Function to set the height of gallery-slider-container
function setGalleryHeight(height) {
  document.querySelector('.gallery-slider-container').style.height = height + 'px';
}

// Function to handle "Show All" button click
function showAll() {
  // Set the initial height to the stored original height
  setGalleryHeight(originalGalleryHeight);

  // Show the "Show Less" button and hide the "Show All" button
  document.getElementById('showAll').classList.add('d-none');
  document.getElementById('showLess').classList.remove('d-none');
}

// Function to handle "Show Less" button click
function showLess() {
  // Get the height of .tns-slide-active
  var activeSlide = document.querySelector('.tns-slide-active');
  var activeSlideHeight = activeSlide ? activeSlide.offsetHeight : 0;

  // Set the smaller height (2 times the height of .tns-slide-active)
  setGalleryHeight(activeSlideHeight * 2);

  // Show the "Show All" button and hide the "Show Less" button
  document.getElementById('showAll').classList.remove('d-none');
  document.getElementById('showLess').classList.add('d-none');
}

window.onload = function() {
  // Store the original height when the page loads
  originalGalleryHeight = document.querySelector('.gallery-slider-container').offsetHeight;

  // Initial setting of the height
  setGalleryHeight(document.querySelector('.tns-slide-active').offsetHeight * 2);

  // Set up button click event listeners
  document.getElementById('showAll').addEventListener('click', showAll);
  document.getElementById('showLess').addEventListener('click', showLess);
};