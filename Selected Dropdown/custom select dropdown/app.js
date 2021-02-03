const button = document.querySelector("#button");
const select = document.querySelector(".dropdown");
const options = document.querySelectorAll(".option");

button.addEventListener("click", function (e) {
  e.preventDefault();
  toggleHidden();
});

function toggleHidden() {
  select.classList.toggle("u-hidden");
}

options.forEach(function (option) {
  option.addEventListener("click", function (e) {
    setSelectTitle(e);
  });
});

function setSelectTitle(e) {
  // template literals: represent multi-line strings and may use "interpolation" to insert variables, can contain js expression
  const labelElement = document.querySelector(`label[for="${e.target.id}"]`)
    .innerText;
  button.innerHTML = labelElement;
  toggleHidden();
}
