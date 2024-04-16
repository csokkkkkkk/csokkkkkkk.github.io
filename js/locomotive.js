const scroller = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true
});

// WRITTEN W/ HELP OF CHATGPT.
document.querySelector('.fade-in-element').addEventListener('click', function() {
  this.classList.toggle('fade-in');
});
