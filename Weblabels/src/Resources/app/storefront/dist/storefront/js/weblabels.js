let lastScrollTop = 0;
const headerMain = document.querySelector('.header-main');
const headerHeight = headerMain.offsetHeight;

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling down
    headerMain.classList.remove('top');
    headerMain.style.top = `-${headerHeight}px`;
    
  } else {
    // Scrolling up
    headerMain.classList.add('top');
    headerMain.style.top = '0px';
  }

  lastScrollTop = scrollTop;
});