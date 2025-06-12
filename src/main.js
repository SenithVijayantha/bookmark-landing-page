const mobileNav = document.querySelector('.mobile__nav');
const openNavBtn = document.querySelector('.open__nav-btn');
const closeNavBtn = document.querySelector('.close__nav-btn');
const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');

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