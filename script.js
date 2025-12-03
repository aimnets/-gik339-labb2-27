const checkbox = document.getElementsByName("divstyle")[0];
const textfield = document.getElementsByClassName("textfield")[0];
const button = document.getElementById("btn");
const div = document.querySelector("div");

console.log(checkbox);
console.log(textfield);
console.log(button.innerHTML);
console.log(div.innerHTML);

function handleInput(e) {
  console.log(e.target);
  if (e.target.id === "content") {
    inputContent = e.target.value;
    div.innerHTML = inputContent;
  }
  if (e.target.name === "color") {
    inputColor = e.target.value;
  }
}
addEventListener("input", handleInput);

function checkboxChange(e) {
  if (e.target.id === checkbox.id) {
    div.style.backgroundColor = inputColor;
  }
}
addEventListener("change", checkboxChange);

function buttonPress(e) {
  if (e.target.id === button.id) {
    console.log("button pressed");
    div.remove();
  }
}
addEventListener("click", buttonPress);
