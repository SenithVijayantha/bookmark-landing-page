const mobileNav = document.querySelector('.mobile__nav');
const openNavBtn = document.querySelector('.open__nav-btn');
const closeNavBtn = document.querySelector('.close__nav-btn');
const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');

function openNav() {
  mobileNav.classList.remove('hidden');
  // Wait for next frame to allow transition
  requestAnimationFrame(() => {
    mobileNav.classList.add('flex');
    mobileNav.classList.add('opacity-100', 'translate-y-0');
    mobileNav.classList.remove('opacity-0', '-translate-y-10');
  });
}

function closeNav() {
  mobileNav.classList.remove('opacity-100', 'translate-y-0');
  mobileNav.classList.add('opacity-0', '-translate-y-10');

  // Wait for the transition to finish before hiding
  setTimeout(() => {
    mobileNav.classList.remove('flex');
    mobileNav.classList.add('hidden');
  }, 500); // Same as transition duration
}

openNavBtn.addEventListener('click', openNav);
closeNavBtn.addEventListener('click', closeNav);

tabLinks.forEach(btn => {
  btn.addEventListener('click', () => {
    const tab = btn.getAttribute('data-tab');

    // Remove active state
    tabLinks.forEach(link => {
      link.classList.remove('text-black', 'border-red-500');
      link.classList.add('text-gray-500', 'border-transparent');
    });

    // Hide all content
    tabContents.forEach(content => content.classList.add('hidden'));

    // Show active tab content
    document.getElementById(tab).classList.remove('hidden');

    // Highlight active tab
    btn.classList.remove('text-gray-500', 'border-transparent');
    btn.classList.add('text-black', 'border-red-500');
  });
});

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});