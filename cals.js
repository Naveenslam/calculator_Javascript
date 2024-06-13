function display(value) {
    document.querySelector("input").value += value;
}

function calculate() {
    let expression = document.querySelector("input").value;
    let result = eval(expression);
    document.querySelector("input").value = result;
}

function Clear() {
    document.querySelector("input").value = "";
}

function del() {
    let value = document.querySelector("input").value;
    document.querySelector("input").value = value.slice(0, -1);
}
