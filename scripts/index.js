/*
 ** Query Selectors
 */

// header
const editTitleBtn = document.querySelector('.header__edit');
const listTitle = document.querySelector('.header__title');
const listSubtitle = document.querySelector('.header__subtitle');

// modal
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.modal__close-btn');

// form
const form = document.querySelector('.form');
const titleInput = document.querySelector('#list-title');
const subtitleInput = document.querySelector('#list-subtitle');

/*
 ** Init
 */

// We want the input fields in the modal to match
// what our initial title and subtitle are set to
titleInput.value = listTitle.textContent;
subtitleInput.value = listSubtitle.textContent;

/*
 ** Functions
 */

function toggleModal() {
  modal.classList.toggle('modal_is-open');

  // We don't need the code below,
  // the toggle function does the same thing
  // just leaving it here so you can see there are
  // multiple ways to do things

  // if (modal.classList.contains('modal_is-open')) {
  //   modal.classList.remove('modal_is-open');
  // } else {
  //   modal.classList.add('modal_is-open');
  // }
}

function updateTitle(event) {
  // We don't want to default submit action to take place
  // so we will prevent default here
  event.preventDefault();

  // replace the text content of the title and subtitle
  // with the values from the input fields
  listTitle.textContent = titleInput.value;
  listSubtitle.textContent = subtitleInput.value;

  // close the modal
  toggleModal();
}

/*
 ** Event Listeners
 */

form.addEventListener('submit', updateTitle, false);
editTitleBtn.addEventListener('click', toggleModal, false);
closeBtn.addEventListener('click', toggleModal, false);
