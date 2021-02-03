var modalButton = document.querySelector(".js-modal-button");
var modalWrapper = document.querySelector(".js-modal-wrapper");
var modalClose = document.querySelector(".js-modal__close-icon");
var modalCloseArea = document.querySelector(".js-modal-close-area");

modalButton.addEventListener("click", function () {
  openModal();
});

modalClose.addEventListener("click", function () {
  closeModal();
});

modalCloseArea.addEventListener("click", function () {
  closeModal();
});

let closeModal = () => {
  modalWrapper.classList.remove("modal-wrapper--active");
};

let openModal = () => {
  modalWrapper.classList.add("modal-wrapper--active");
};
