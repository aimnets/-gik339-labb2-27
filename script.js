const checkbox = document.getElementsByName('divstyle')[0];
const textfield = document.getElementsByClassName('textfield');
const button = document.getElementById('btn');
const div = document.querySelector('div');

console.log(checkbox);
console.log(textfield);
console.log(button.innerHTML);
console.log(div.innerHTML);

var inputColor = "";
var inputContent = "";

function handleInput(e) {
    if (e.target.id === "content") {
        inputContent = e.target.value;
        console.log(e.target);
        return;
    }
    if (e.target.name === "content") {
        inputContent = e.target.value;
        inputContent = div.innerHTML;
        return inputContent;
    }
        if (e.target.name === "color") {
        return inputColor = e.target.value;
    }
}
addEventListener('input', handleInput);


function checkboxChange(e) {
    if (e.target.id === "divstyle") {
        div.style.backgroundColor = inputColor;
    }
}
addEventListener('change', checkboxChange);

// Förstå hur man tar bort div elementet, inte bara ta bort innehållet.
function buttonPress(e) {
    if (e.target.id === "btn") {
        console.log("button pressed");
        div.remove();
        /*div.innerHTML = "";
        div.style.backgroundColor = "";*/
    }
}
addEventListener('click', buttonPress);

