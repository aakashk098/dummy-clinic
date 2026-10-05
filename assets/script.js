const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.navlinks');

const closeMenu = () => {
  nav?.classList.remove('open');
  menu?.setAttribute('aria-expanded', 'false');
};

menu?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
});

nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  closeMenu();
}));

window.addEventListener('resize', () => {
  if (window.innerWidth > 900) {
    closeMenu();
  }
});
