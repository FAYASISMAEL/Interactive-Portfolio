// Mobile navigation
document.documentElement.classList.add('js-enabled');

const menuButton = document.querySelector('#menu-button');
const navigation = document.querySelector('#navigation');

menuButton.hidden = false;

function closeMenu(returnFocus = false) {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');

  if (returnFocus) {
    menuButton.focus();
  }
}

menuButton.addEventListener('click', () => {
  const open = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => closeMenu());
});

document.addEventListener('keydown', (event) => {
  if (
    event.key === 'Escape' &&
    navigation.classList.contains('open')
  ) {
    closeMenu(true);
  }
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.header-row')) {
    closeMenu();
  }
});

window
  .matchMedia('(min-width: 701px)')
  .addEventListener('change', () => closeMenu());


// Project filtering
document.querySelector('.filters').hidden = false;

const filters = document.querySelectorAll('.filter');
const projects = document.querySelectorAll('.project-card');
const projectStatus = document.querySelector('#project-status');

filters.forEach((button) => {
  button.addEventListener('click', () => {
    const category = button.dataset.filter;

    filters.forEach((filter) => {
      const selected = filter === button;

      filter.classList.toggle('active', selected);
      filter.setAttribute('aria-pressed', String(selected));
    });

    let visible = 0;

    projects.forEach((project) => {
      project.hidden =
        category !== 'all' &&
        project.dataset.category !== category;

      if (!project.hidden) {
        visible++;
      }
    });

    projectStatus.textContent =
      `Showing ${visible} ${visible === 1 ? 'project' : 'projects'}.`;
  });
});


// Contact form demonstration — no data is sent or stored.
const form = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');

document.querySelector('#submit-button').disabled = false;

form.addEventListener('submit', (event) => {
  event.preventDefault();

  for (const fieldName of ['name', 'message']) {
    const field = form.elements.namedItem(fieldName);

    field.setCustomValidity(
      field.value.trim() ? '' : 'Please enter more than spaces.'
    );
  }

  if (!form.reportValidity()) {
    return;
  }

  const name = form.elements.namedItem('name').value.trim();

  formStatus.textContent =
    `Thanks, ${name}! Your message passed validation. This is a demo; nothing was sent or stored.`;

  form.reset();
});

form.addEventListener('input', (event) => {
  event.target.setCustomValidity('');
  formStatus.textContent = '';
});


// Automatically update the footer year.
document.querySelector('#year').textContent =
  new Date().getFullYear();