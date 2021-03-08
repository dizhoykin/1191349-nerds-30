const modalShowButton = document.querySelector(".contacts .button");
const modalWindow = document.querySelector(".modal");
const modalClose = modalWindow.querySelector(".close-btn");
const modalForm = modalWindow.querySelector(".modal-form");
const modalName = modalWindow.querySelector(".modal-name");
const modalEmail = modalWindow.querySelector(".modal-email");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("Name");
} catch (err) {
  isStorageSupport = false;
}

modalShowButton.addEventListener("click", function () {
  modalWindow.classList.add("modal-show");
  modalWindow.classList.add("modal-show-animation");

  if (storage) {
    modalName.value = storage;
    modalEmail.focus();
  } else {
    modalName.focus();
  }
});

modalClose.addEventListener("click", function () {
  modalWindow.classList.remove("modal-show");
  modalWindow.classList.remove("modal-show-animation");
  modalWindow.classList.remove("modal-error-animation");
});

modalForm.addEventListener("submit", function (evt) {
  if (!modalName.value || !modalEmail.value) {
    evt.preventDefault();
    modalWindow.classList.remove("modal-show-animation");
    modalWindow.classList.remove("modal-error-animation");
    modalWindow.offsetWidth = modalWindow.offsetWidth;
    modalWindow.classList.add("modal-error-animation");
  }
  else {
    if (isStorageSupport) {
      localStorage.setItem("Name", modalName.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalWindow.classList.contains("modal-show")) {
      evt.preventDefault();
      modalWindow.classList.remove("modal-show");
      modalWindow.classList.remove("modal-error-animation");
    }
  }
});
