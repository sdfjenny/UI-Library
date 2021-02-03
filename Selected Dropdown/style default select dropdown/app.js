const selection = document.querySelector(".select");
const result = document.querySelector(".result");
const index = document.querySelector(".index");
const value = document.querySelector(".value");

selection.addEventListener("change", () => {
  result.innerText = selection.options[selection.selectedIndex].text;
  value.innerText = selection.options[selection.selectedIndex].value;
  index.innerText = selection.selectedIndex;
});
