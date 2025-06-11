const mobileNav = document.querySelector('.mobile__nav');
const openNavBtn = document.querySelector('.open__nav-btn');
const closeNavBtn = document.querySelector('.close__nav-btn');

function openNav() {
  mobileNav.classList.toggle('hidden');
  mobileNav.classList.toggle('flex');
}

function closeNav() {
  mobileNav.classList.toggle('hidden');
  mobileNav.classList.toggle('flex');
}

openNavBtn.addEventListener('click', openNav);
closeNavBtn.addEventListener('click', closeNav);
