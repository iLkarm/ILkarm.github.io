const menuToggle = document.getElementById('menuToggle');
const topNav = document.getElementById('topNav');
const navLinks = document.querySelectorAll('.top-nav a, .sidebar-nav a');
const sections = [...document.querySelectorAll('main section[id]')];

if (menuToggle && topNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = topNav.classList.toggle('open');
    menuToggle.classList.toggle('active', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    document.body.classList.toggle('menu-open', isOpen);
  });

  topNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      topNav.classList.remove('open');
      menuToggle.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('menu-open');
    });
  });
}

const activateLink = (id) => {
  navLinks.forEach((link) => {
    const isActive = link.getAttribute('href') === `#${id}`;
    link.classList.toggle('active', isActive);
  });
};

const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

    if (visible.length > 0) {
      activateLink(visible[0].target.id);
    }
  },
  {
    threshold: [0.25, 0.4, 0.6],
    rootMargin: '-10% 0px -55% 0px'
  }
);

sections.forEach((section) => observer.observe(section));

window.addEventListener('load', () => {
  const currentHash = window.location.hash.replace('#', '');
  if (currentHash) {
    activateLink(currentHash);
  } else if (sections[0]) {
    activateLink(sections[0].id);
  }
});
